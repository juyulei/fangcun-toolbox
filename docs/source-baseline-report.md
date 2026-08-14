# 方寸工具箱源码基线技术报告

更新时间：2026-08-14

## 结论

当前正式产品已确认是 **Vite + React 静态应用**，不是 Next、vinext、Cloudflare Worker 或 D1 应用。交接包的正式入口为 `pages/main.tsx`，它只挂载 `app/page.tsx`；线上产物由 `vite.pages.config.ts` 的 `build:pages` 生成，`base` 为 `/fangcun-toolbox/`。

本分支将远端仓库从“手工提交 GitHub Pages 构建产物”收敛为“完整源码仓库”，并保留现有产品功能和视觉表现。正式链路变为：

```text
main 完整源码 -> GitHub Actions -> npm ci / lint / typecheck / build / test -> GitHub Pages
```

## 最终技术栈

- React 19.2.6、TypeScript 5.9.3、Vite 8.2.1
- Tailwind CSS 4.2.1 / PostCSS
- JSZip 3.10.1
- PDF.js 6.2.108
- `@imgly/background-removal` 1.7.x
- Web Worker、ONNX Runtime WebAssembly
- 本地 `thinking-orbs` 包
- GitHub Actions 官方 Pages actions

生产依赖审计为 0 个已知漏洞，完整依赖审计也为 0 个已知漏洞。

## 源码与线上版本确认

证据如下：

1. 交接文档记录线上提交为 `472c56f Run batch cutouts off the main thread`，与远端 `main` HEAD 一致。
2. 交接包的“当前线上静态构建”与远端仓库包含相同的主 CSS/JS 文件名，以及相同的抠图 Worker、ORT WASM 和 PDF Worker 文件名。
3. 正式 Vite 入口导入交接源码中的完整产品组件和全局样式；生产依赖图未引用 Next、vinext、Drizzle、D1 或 Cloudflare Worker。
4. 干净工程构建会重新生成 Worker、WASM、PDF runtime 和五个公共工具图标。
5. 新构建与当前线上在 1440×900 下的主布局坐标、侧栏宽度、工作区尺寸、文本结构和截图一致。

交接源码的干净构建哈希与旧手工产物的主 CSS/JS 哈希不同。审计确认旧工作区存在浏览器测试目录和重复输出目录，Tailwind 4 自动内容扫描把这些临时文件中的未使用类带入了旧 CSS；干净构建移除了这些构建污染。产品源码、布局和实际视觉保持一致，带哈希文件名变化属于正常构建结果。

## 历史遗留架构

交接包中存在以下 starter 或早期实验内容，但均不在正式生产入口依赖图中：

- Next：`app/layout.tsx`、`next.config.ts`、Next ESLint 配置
- vinext / React Server Components：旧 `dev`、`build`、`start` 脚本和相关依赖
- Cloudflare：`.openai/hosting.json`、`vite.config.ts`、`worker/index.ts`、Wrangler 配置依赖
- D1 / Drizzle：`db/`、`drizzle/`、`drizzle.config.ts`、`examples/d1/`
- Sites starter：`app/_sites-preview/`、`app/chatgpt-auth.ts` 和针对 loading skeleton 的旧测试
- GitHub Pages 手工发布产物：根目录 `assets/`、`.nojekyll` 和带哈希的 JS/CSS/WASM

这些内容属于同一 starter 在不同阶段留下的架构，不承载方寸正式产品能力，因此未进入新的源码基线。

## 删除与保留

删除：

- 远端仓库中所有人工维护的 `dist` 等价产物和根目录静态发布文件
- 未被生产入口引用的 Next、vinext、Cloudflare、D1、Drizzle、Sites starter 文件与依赖
- 已失真的 starter skeleton 测试

保留：

- 五个工具的完整组件和处理逻辑
- 图片上传、批量、拖拽、文件夹输出和 ZIP 降级
- PDF.js 动态加载与 PDF Worker
- 抠图 Web Worker、IMG.LY 模型加载和 ORT WASM 生成链路
- 批量重命名的 File System Access API 路径及文件夹上传/ZIP 降级
- 五个工具图标、favicon、分享图和动态 Logo 本地依赖
- 当前设计规范文档

## 最终目录结构

```text
.
├─ .github/workflows/deploy-pages.yml
├─ docs/
│  ├─ design-system-current.md
│  └─ source-baseline-report.md
├─ public/
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ remove-bg.worker.ts
│  └─ styles.css
├─ tests/build-output.test.mjs
├─ types/assets.d.ts
├─ vendor/thinking-orbs/
├─ index.html
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
├─ tsconfig.json
└─ vite.config.ts
```

## GitHub Actions 部署

`.github/workflows/ci.yml` 会在针对 `main` 的 PR 上以只读权限执行 `npm ci`、lint、typecheck 和 test，阻止未通过检查的源码进入正式分支。

`.github/workflows/deploy-pages.yml` 在 `main` push 或手动触发时执行：

1. `actions/checkout@v4`
2. `actions/setup-node@v4`，Node 22 和 npm cache
3. `actions/configure-pages@v5`
4. `npm ci`
5. `npm run lint`
6. `npm run typecheck`
7. `npm test`（pretest 会执行 Vite build）
8. `actions/upload-pages-artifact@v3` 上传 `dist/`
9. `actions/deploy-pages@v4` 发布

工作流只授予 `contents: read`、`pages: write` 和 `id-token: write`，并设置 Pages 并发锁。

## 测试结果

本地环境：Windows、Node 24.18.1、npm 11.16.0；项目声明并在 Actions 使用 Node 22+。

- `npm ci`：通过，186 packages，0 vulnerabilities
- `npm run lint`：通过
- `npm run typecheck`：通过
- `npm run build`：通过，Vite 8.2.1
- `npm test`：4/4 通过
- Pages 子路径：构建 HTML 的脚本、样式、favicon 均使用 `/fangcun-toolbox/`
- Worker/WASM：抠图 Worker、ORT JS runtime、23.9 MB ORT WASM 均成功生成
- PDF：PDF runtime 与 PDF Worker 均成功生成
- 公共资源：五个工具图标均存在于最终构建
- 浏览器刷新：`/fangcun-toolbox/#split` 直接刷新成功
- 功能切换：五个模块均可切换并显示正确标题
- 运行时：无控制台 error/warning，无破图，无横向溢出
- 响应式：621px 窄窗口与 1440×900 桌面窗口均通过
- 线上对比：同一 1440×900 视口下布局坐标与截图一致

受当前内置浏览器测试驱动限制，原生文件选择器没有向自动化层返回 file chooser 事件，因此本轮未自动完成真实文件的“选择 -> 处理 -> 下载”点击链路。该部分通过以下证据降低风险：产品处理源码和线上版本一致；文件输入的 `multiple`、`accept`、`webkitdirectory` 契约已检查；ZIP、目录选择、PDF Worker、抠图 Worker 和 WASM 链路均有构建守护测试。合并前仍建议由人工各执行一次图片切分 ZIP、PDF 导出和文件夹保存冒烟测试。

## 浏览器兼容性风险

- `showDirectoryPicker` 和原地目录写入主要适用于 Chromium。Safari/Firefox 会使用 ZIP 或文件夹上传降级，无法获得完全相同的原地写入体验。
- 抠图需要 Web Worker、WebAssembly、较大模型资源和足够内存；低内存设备或复杂图片可能缓慢。
- GitHub Pages 首次加载 23.9 MB WASM 时受网络缓存和带宽影响。
- WebGPU 未作为默认推理路径；CPU/WASM 更稳定但速度较慢。
- 单体 `App.tsx` 约 2,300 行，五个工具共享同一组件文件，后续维护成本较高；本次为避免功能回退没有拆分。
- 目前测试侧重构建契约和浏览器冒烟，尚缺各工具的可重复端到端文件夹/下载自动化。

## 与当前线上功能是否一致

结论：**源码能力、交互入口、Worker/WASM 资源链路和视觉布局与当前线上一致**。本次没有新增功能、修改 UI 或更改处理算法；仅调整工程入口、类型/ESLint 注释、依赖和部署方式。

## GitHub Pages 是否需要手动设置

需要一次性确认：

```text
Repository Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

如果当前仍为 `Deploy from a branch`，必须改成 `GitHub Actions`。修改后无需再人工提交 `dist` 或根目录 `assets/`。
