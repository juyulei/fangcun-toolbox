import { spawn, spawnSync } from "node:child_process";
import { access, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import ffmpegPath from "ffmpeg-static";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const output = path.join(root, "review-output");
const screenshotsDir = path.join(output, "screenshots");
const videosDir = path.join(output, "videos");
const reportsDir = path.join(output, "reports");
const rawVideosDir = path.join(output, ".raw-videos");
const reviewPort = "4174";
const baseUrl = `http://127.0.0.1:${reviewPort}/fangcun-toolbox`;
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const pages = [
  { id: "overview", path: "/overview", title: "Overview" },
  { id: "tasks", path: "/tasks", title: "Tasks" },
  { id: "runtime", path: "/runtime", title: "Runtime" },
  { id: "tools", path: "/tools", title: "Tools" },
  { id: "models", path: "/models", title: "Models" },
  { id: "datasets", path: "/datasets", title: "Datasets" },
  { id: "quality", path: "/quality", title: "Quality" },
  { id: "logs", path: "/logs", title: "Logs" },
  { id: "settings", path: "/settings", title: "Settings" },
];

const viewports = [
  { id: "desktop", label: "Desktop", width: 1440, height: 900 },
  { id: "laptop", label: "Laptop", width: 1280, height: 800 },
  { id: "mobile", label: "Mobile", width: 390, height: 844 },
];

const checks = [];
const issues = [];
const consoleErrors = [];
const stateCoverage = [];

function command(command, args) {
  const result = spawnSync(command, args, { cwd: root, encoding: "utf8" });
  return { ok: result.status === 0, output: `${result.stdout ?? ""}${result.stderr ?? ""}`.trim() };
}

function record(scope, name, ok, detail, severity = "P1") {
  checks.push({ scope, name, ok, detail });
  if (!ok) issues.push({ severity, scope, name, detail });
}

async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}

async function waitForServer(url, timeout = 20_000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch { /* preview server is still booting */ }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`Preview server did not respond within ${timeout}ms: ${url}`);
}

function startPreview() {
  return spawn("npx", ["vite", "preview", "--host", "127.0.0.1", "--port", reviewPort, "--strictPort"], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

async function collectLayout(page, viewport) {
  return page.evaluate(({ width, height }) => {
    const rect = (selector) => {
      const node = document.querySelector(selector);
      if (!node) return null;
      const box = node.getBoundingClientRect();
      return { width: Math.round(box.width), height: Math.round(box.height), left: Math.round(box.left), top: Math.round(box.top), bottom: Math.round(box.bottom) };
    };
    const content = rect(".console-content");
    const sidebar = rect(".console-sidebar");
    const heading = document.querySelector(".console-heading h1");
    const headingStyle = heading ? getComputedStyle(heading) : null;
    const panels = [...document.querySelectorAll(".console-panel")];
    const statusColors = [...document.querySelectorAll(".console-status")].map((node) => getComputedStyle(node).color);
    const bodyOverflow = document.documentElement.scrollWidth > window.innerWidth + 1;
    const main = document.querySelector(".console-main")?.getBoundingClientRect();
    const contentCoverage = content ? Math.round((content.bottom - content.top) / height * 100) : 0;
    return {
      content,
      sidebar,
      mainWidth: main ? Math.round(main.width) : 0,
      panels: panels.length,
      heading: heading ? { fontSize: Number.parseFloat(headingStyle.fontSize), fontWeight: headingStyle.fontWeight } : null,
      bodyOverflow,
      contentCoverage,
      statusColorCount: new Set(statusColors).size,
      viewport: { width, height },
    };
  }, viewport);
}

function assessLayout(pageId, viewport, layout) {
  record(`${pageId} / ${viewport.label}`, "内容区域", Boolean(layout.content && layout.content.width > 0 && layout.content.width <= viewport.width), layout.content ? `${layout.content.width}px wide` : "未找到 .console-content");
  record(`${pageId} / ${viewport.label}`, "横向溢出", !layout.bodyOverflow, layout.bodyOverflow ? "document scrollWidth 超出 viewport" : "无横向溢出", "P0");
  record(`${pageId} / ${viewport.label}`, "Header 层级", Boolean(layout.heading && layout.heading.fontSize >= 24), layout.heading ? `h1 ${layout.heading.fontSize}px / weight ${layout.heading.fontWeight}` : "未找到 h1");
  record(`${pageId} / ${viewport.label}`, "Card 密度", layout.panels > 0, `${layout.panels} 个 Console panel`);
  record(`${pageId} / ${viewport.label}`, "状态颜色", layout.statusColorCount > 0, `${layout.statusColorCount} 个可见状态色`);
  record(`${pageId} / ${viewport.label}`, "内容空白", layout.contentCoverage >= 24, `首屏内容覆盖 ${layout.contentCoverage}%（自动阈值 24%；语义空白仍需人工看图）`, "P2");
  if (viewport.id === "mobile") {
    record(`${pageId} / ${viewport.label}`, "移动端布局", !layout.bodyOverflow && layout.mainWidth <= viewport.width, `main ${layout.mainWidth}px / viewport ${viewport.width}px`, "P0");
  } else {
    record(`${pageId} / ${viewport.label}`, "Sidebar 比例", Boolean(layout.sidebar && Math.abs(layout.sidebar.width - 240) <= 2), layout.sidebar ? `${layout.sidebar.width}px（目标 240px）` : "未找到 Sidebar", "P1");
  }
}

async function openAndCapture(page, entry, viewport) {
  const response = await page.goto(`${baseUrl}${entry.path}`, { waitUntil: "networkidle" });
  await page.locator(".console-heading h1").waitFor({ state: "visible", timeout: 8_000 });
  await page.waitForTimeout(250);
  const layout = await collectLayout(page, viewport);
  assessLayout(entry.id, viewport, layout);
  const screenshotPath = path.join(screenshotsDir, viewport.id, `${entry.id}.png`);
  await mkdir(path.dirname(screenshotPath), { recursive: true });
  await page.screenshot({ path: screenshotPath, fullPage: false });
  return { ok: Boolean(response?.ok()), status: response?.status() ?? 0, layout, screenshotPath };
}

async function exerciseNavigation(page) {
  await page.goto(`${baseUrl}/overview`, { waitUntil: "networkidle" });
  await page.locator(".console-heading h1").waitFor({ state: "visible", timeout: 8_000 });
  for (const entry of pages) {
    const link = page.locator(`.console-sidebar a[href$="/${entry.id}"]`);
    await link.click();
    await page.locator(".console-heading h1").waitFor({ state: "visible", timeout: 8_000 });
    const title = await page.locator(".console-heading h1").textContent();
    record("Navigation", `${entry.title} route`, title?.trim() === entry.title, `标题：${title?.trim() ?? "未找到"}`, "P0");
  }
}

async function exerciseInteractions(page) {
  await page.goto(`${baseUrl}/overview`, { waitUntil: "networkidle" });
  record("Overview", "Header", await page.locator(".console-heading h1").isVisible(), "Overview Header 可见", "P0");
  record("Overview", "系统状态区", await page.locator(".overview-control-grid").isVisible(), "系统控制中心可见", "P0");
  record("Overview", "所有 Card", await page.locator(".console-panel").count() >= 4, `${await page.locator(".console-panel").count()} 个 panel`);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(150);
  record("Overview", "滚动到底部", await page.evaluate(() => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2), "页面可滚至末尾");

  await page.goto(`${baseUrl}/tasks`, { waitUntil: "networkidle" });
  const taskRows = page.locator(".job-row");
  const taskCount = await taskRows.count();
  record("Tasks", "任务列表", taskCount > 0, `${taskCount} 条任务`);
  if (taskCount) {
    const firstTask = taskRows.first();
    const interaction = await firstTask.evaluate((node) => ({
      role: node.getAttribute("role"),
      tabIndex: node.getAttribute("tabindex"),
      cursor: getComputedStyle(node).cursor,
      semanticControl: node.matches("button, a, [role=button], [role=link], [tabindex]:not([tabindex='-1'])"),
    }));
    await firstTask.click({ force: true });
    record("Tasks", "任务列表项可交互", interaction.semanticControl || interaction.cursor === "pointer", `role=${interaction.role ?? "none"}; tabindex=${interaction.tabIndex ?? "none"}; cursor=${interaction.cursor}`, "P1");
    record("Tasks", "任务详情", await page.locator(".job-detail").isVisible(), "点击后详情区域保持可见", "P0");
  }
  record("Tasks", "Artifact", await page.locator(".job-detail .preview-frame").isVisible(), "详情 Artifact/摘要区域可见", "P0");
  record("Tasks", "状态展示", await page.locator(".job-row .console-status").count() > 0, "任务状态 Badge 可见");

  await page.goto(`${baseUrl}/runtime`, { waitUntil: "networkidle" });
  record("Runtime", "节点列表", await page.locator(".runtime-list").count() >= 2, `${await page.locator(".runtime-list").count()} 个 Runtime list`, "P0");
  record("Runtime", "服务列表", await page.locator(".runtime-grid .console-panel").count() >= 2, "设备和服务 panel 可见", "P0");

  await page.goto(`${baseUrl}/logs`, { waitUntil: "networkidle" });
  record("Logs", "事件列表", await page.locator(".logs-row").count() > 0, `${await page.locator(".logs-row").count()} 条事件`, "P0");
}

async function checkStateCoverage() {
  const queryPages = [
    ["Overview", "src/console/OverviewPage.tsx"],
    ["Tasks", "src/console/ImageProcessingPage.tsx"],
    ["Runtime", "src/console/RuntimePage.tsx"],
  ];
  for (const [pageName, relative] of queryPages) {
    const content = await (await import("node:fs/promises")).readFile(path.join(root, relative), "utf8");
    for (const state of ["loading", "empty", "error", "stale", "offline"]) {
      const covered = content.includes(`"${state}"`) || content.includes(`=== \"${state}\"`);
      stateCoverage.push({ page: pageName, state, result: covered ? "STATIC COVERED" : "MISSING", detail: "分支已定义；fixture-only 数据源不能由浏览器会话强制注入。" });
      record("Data-state coverage", `${path.basename(relative)} / ${state}`, covered, "静态分支存在；fixture 数据源下的异常状态无法由浏览器会话强制触发", "P2");
    }
  }
  for (const pageName of ["Tools", "Models", "Datasets", "Quality", "Logs", "Settings"]) {
    for (const state of ["loading", "empty", "error", "stale", "offline"]) {
      stateCoverage.push({ page: pageName, state, result: "N/A", detail: "当前是同步 fixture 页面，尚未接入 QueryResult；此项不计入运行时分支覆盖。" });
    }
  }
}

function markdownTable(rows, headings) {
  const escape = (value) => String(value).replaceAll("|", "\\|").replaceAll("\n", "<br>");
  return [`| ${headings.join(" | ")} |`, `| ${headings.map(() => "---").join(" | ")} |`, ...rows.map((row) => `| ${row.map(escape).join(" | ")} |`)].join("\n");
}

async function writeReports({ build, typecheck, pageResults, videoPath }) {
  const commit = command("git", ["rev-parse", "--short", "HEAD"]);
  const visual = [
    "# Fangcun Console Visual Review",
    "",
    `- Generated: ${new Date().toISOString()}`,
    `- Commit: ${commit.ok ? commit.output : "unavailable"}`,
    `- Build: ${build.ok ? "PASS" : "FAIL"}`,
    `- Typecheck: ${typecheck.ok ? "PASS" : "FAIL"}`,
    `- Console errors: ${consoleErrors.length}`,
    "",
    "## Screenshots",
    "",
    markdownTable(pageResults.map((result) => [result.page, result.viewport, result.loaded ? "PASS" : "FAIL", result.status, path.relative(output, result.screenshot)]), ["Page", "Viewport", "Load", "HTTP", "Path"]),
    "",
    "## Layout checks",
    "",
    markdownTable(checks.filter((check) => check.scope.includes("/")).map((check) => [check.scope, check.name, check.ok ? "PASS" : "FAIL", check.detail]), ["Scope", "Check", "Result", "Evidence"]),
    "",
    "## Visual review notes",
    "",
    "- Typography、Card 密度、状态颜色与对齐使用浏览器 computed style / DOM metrics 记录；截图用于人工复核。",
    "- “内容空白”是几何覆盖率预警，不把短页面直接判为视觉缺陷。",
    "- Data-state 异常分支的可达性在 fixture-only 数据源下不能被真实浏览器强制注入，已在 interaction report 标为静态覆盖；接入可控测试数据源后可升级为运行时覆盖。",
  ];
  const interaction = [
    "# Fangcun Console Interaction Review",
    "",
    `- Generated: ${new Date().toISOString()}`,
    `- Session video: ${path.relative(output, videoPath)}`,
    `- Console errors: ${consoleErrors.length}`,
    "",
    "## Interaction checks",
    "",
    markdownTable(checks.filter((check) => !check.scope.includes("/")).map((check) => [check.scope, check.name, check.ok ? "PASS" : "FAIL", check.detail]), ["Scope", "Check", "Result", "Evidence"]),
    "",
    "## Console errors",
    "",
    consoleErrors.length ? consoleErrors.map((error) => `- ${error}`).join("\n") : "None.",
    "",
    "## Data-state coverage",
    "",
    markdownTable(stateCoverage.map((item) => [item.page, item.state, item.result, item.detail]), ["Page", "State", "Coverage", "Note"]),
    "",
    "## Issues discovered",
    "",
    issues.length ? markdownTable(issues.map((issue) => [issue.severity, issue.scope, issue.name, issue.detail]), ["Priority", "Scope", "Issue", "Evidence"]) : "None.",
  ];
  await writeFile(path.join(reportsDir, "visual-report.md"), `${visual.join("\n")}\n`);
  await writeFile(path.join(reportsDir, "interaction-report.md"), `${interaction.join("\n")}\n`);
}

async function convertVideo(rawPath, targetPath) {
  if (!rawPath || !ffmpegPath || !(await exists(rawPath))) return false;
  const result = await new Promise((resolve) => {
    const child = spawn(ffmpegPath, ["-y", "-i", rawPath, "-movflags", "+faststart", "-pix_fmt", "yuv420p", targetPath], { stdio: "ignore" });
    child.on("close", (code) => resolve(code === 0));
    child.on("error", () => resolve(false));
  });
  return result;
}

async function main() {
  await rm(output, { recursive: true, force: true });
  await Promise.all([mkdir(screenshotsDir, { recursive: true }), mkdir(videosDir, { recursive: true }), mkdir(reportsDir, { recursive: true }), mkdir(rawVideosDir, { recursive: true })]);
  const build = command("npm", ["run", "build"]);
  const typecheck = build.ok ? command("npm", ["run", "typecheck"]) : { ok: false, output: "Skipped because build failed." };
  if (!build.ok || !typecheck.ok) {
    await writeReports({ build, typecheck, pageResults: [], videoPath: path.join(videosDir, "interaction.mp4") });
    process.exitCode = 1;
    return;
  }

  const preview = startPreview();
  let browser;
  let rawVideo;
  const pageResults = [];
  try {
    await waitForServer(`${baseUrl}/overview`);
    browser = await chromium.launch({ headless: true, executablePath: await exists(chromePath) ? chromePath : undefined });
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
      const page = await context.newPage();
      page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(`${viewport.label}: ${message.text()}`); });
      page.on("pageerror", (error) => consoleErrors.push(`${viewport.label}: ${error.message}`));
      for (const entry of pages) {
        try {
          const result = await openAndCapture(page, entry, viewport);
          pageResults.push({ page: entry.id, viewport: viewport.label, loaded: result.ok, status: result.status, screenshot: result.screenshotPath });
          record(`${entry.id} / ${viewport.label}`, "页面加载", result.ok, `HTTP ${result.status}`, "P0");
        } catch (error) {
          pageResults.push({ page: entry.id, viewport: viewport.label, loaded: false, status: 0, screenshot: "—" });
          record(`${entry.id} / ${viewport.label}`, "页面加载", false, error instanceof Error ? error.message : String(error), "P0");
        }
      }
      await context.close();
    }

    const interactionContext = await browser.newContext({ viewport: { width: 1280, height: 800 }, recordVideo: { dir: rawVideosDir, size: { width: 1280, height: 800 } } });
    const interactionPage = await interactionContext.newPage();
    interactionPage.on("console", (message) => { if (message.type() === "error") consoleErrors.push(`Interaction: ${message.text()}`); });
    interactionPage.on("pageerror", (error) => consoleErrors.push(`Interaction: ${error.message}`));
    await exerciseNavigation(interactionPage);
    await exerciseInteractions(interactionPage);
    await interactionContext.close();
    const rawVideos = await readdir(rawVideosDir);
    const videoFile = rawVideos.find((file) => file.endsWith(".webm"));
    rawVideo = videoFile ? path.join(rawVideosDir, videoFile) : undefined;
    await checkStateCoverage();
  } catch (error) {
    record("Review session", "浏览器会话", false, error instanceof Error ? error.stack ?? error.message : String(error), "P0");
  } finally {
    await browser?.close();
    preview.kill("SIGTERM");
  }

  const videoPath = path.join(videosDir, "interaction.mp4");
  const videoConverted = await convertVideo(rawVideo, videoPath);
  record("Review session", "交互视频", videoConverted, videoConverted ? "interaction.mp4 已生成" : "无法转换 Playwright 原始视频", "P1");
  await writeReports({ build, typecheck, pageResults, videoPath });
  console.log(`Review artifacts written to ${path.relative(root, output)}`);
  if (issues.length || consoleErrors.length) process.exitCode = 1;
}

await main();
