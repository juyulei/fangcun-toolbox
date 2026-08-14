# 方寸工具箱

方寸是一个以浏览器本地处理为主的图片工具箱，当前包含图片切分、PDF 转图片、图片压缩、智能抠图和批量重命名。正式产品是单一的 Vite + React 静态应用。

## 技术栈

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 / PostCSS（基础样式生成）
- JSZip（批量 ZIP 输出）
- PDF.js（PDF 页面解析与渲染）
- `@imgly/background-removal` + Web Worker + ONNX Runtime WASM（本地智能抠图）
- 本地 `thinking-orbs` 包（动态品牌 Logo）
- GitHub Actions + GitHub Pages

项目没有运行时服务端、数据库或 Cloudflare Worker。图片、PDF 和模型推理均由浏览器处理。

## 本地开发

环境要求：Node.js `>= 22.13.0` 和 npm。

```bash
npm ci
npm run dev
```

Vite 会显示本地地址。由于正式 Pages 路径为 `/fangcun-toolbox/`，开发和预览也应从该子路径访问。

## 构建与检查

```bash
npm run lint
npm run typecheck
npm run build
npm test
npm run preview
```

- `npm run build` 输出到 `dist/`。
- `npm test` 会先重新构建，再检查 Pages 子路径、PDF Worker、抠图 Worker、ORT WASM、工具图标和关键浏览器降级路径。
- `dist/` 是临时构建产物，不提交到 Git。

## 目录结构

```text
.
├─ .github/workflows/deploy-pages.yml  # 官方 Pages Actions 部署
├─ docs/                               # 设计规范与工程审计报告
├─ public/                             # 图标、favicon、分享图
├─ src/
│  ├─ App.tsx                          # 五个工具及应用交互
│  ├─ main.tsx                         # Vite 客户端入口
│  ├─ remove-bg.worker.ts              # 抠图推理 Worker
│  └─ styles.css                       # 产品样式与动效
├─ tests/build-output.test.mjs         # 构建产物与能力守护测试
├─ types/                              # 静态资源类型声明
├─ vendor/thinking-orbs/               # 本地动态 Logo 依赖
├─ index.html
├─ vite.config.ts
└─ package.json
```

## 发布流程

唯一正式链路：

```text
完整源码（main） -> GitHub Actions -> npm ci -> 检查与构建 -> GitHub Pages
```

推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会使用官方 Pages Actions 构建并发布 `dist/`。Vite 的生产 `base` 固定为：

```text
/fangcun-toolbox/
```

仓库切换到此流程时，需要在 GitHub 仓库的 **Settings -> Pages -> Build and deployment -> Source** 中选择 **GitHub Actions**。这是一次性设置；之后不再手工复制 `dist` 或维护带哈希的 `assets/index-*.js`。

## 浏览器兼容性

- Chrome / Edge：支持直接选择输出文件夹和原地批量重命名。
- Safari / Firefox：不完整支持 File System Access API 时，会回退到 ZIP 下载；批量重命名也会使用文件夹上传与 ZIP 输出。
- 智能抠图依赖 Web Worker、WebAssembly 和较多内存；复杂图片或低内存设备可能较慢。
- WebGPU 不是默认推理路径，避免部分 Windows 设备返回异常空结果。

详细审计与迁移结论见 [docs/source-baseline-report.md](docs/source-baseline-report.md)。
