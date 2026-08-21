# Fangcun Console 成熟 UI 体系映射

## 目标

Fangcun Console 不维护独立的基础组件体系。页面由 shadcn/ui 组件组合，交互原语来自 Radix UI；视觉 token 采用 Geist 的中性色、紧凑排版与低噪声边界；信息组织参考 Linear，层级与留白遵循 Apple HIG。

## 官方组件采用表

| Console 需求 | 采用组件 | 来源 | 说明 |
| --- | --- | --- | --- |
| 应用框架与导航 | `SidebarProvider`、`Sidebar`、`SidebarContent`、`SidebarMenu`、`SidebarMenuButton` | shadcn/ui + Radix UI | 承载现有 WORKSPACE / SYSTEM 信息架构。 |
| 内容容器 | `Card`、`CardHeader`、`CardContent` | shadcn/ui | 只用于独立状态、任务详情和需要视觉边界的内容组。 |
| 状态 | `Badge` | shadcn/ui | 状态必须同时有文字；颜色为辅助语义。 |
| 分隔 | `Separator` | shadcn/ui + Radix UI | 替代自定义边框分割规则。 |
| 表格 | `Table` | shadcn/ui | Tasks、Logs 的结构化列表。 |
| 分段内容 | `Tabs` | shadcn/ui + Radix UI | 仅当同一实体有并列只读信息时使用。 |
| 低频辅助交互 | `Dialog`、`DropdownMenu`、`Command` | shadcn/ui + Radix UI | 仅在明确的只读查看或导航需求出现时接入。 |

不预先引入未使用组件，不创建 Fangcun 版 Card、Button、Badge 或 Dialog。

## Token 映射

| shadcn 语义 token | Fangcun token | 视觉来源 |
| --- | --- | --- |
| `--background` | `--fc-background` | Geist neutral background |
| `--foreground` | `--fc-foreground` | Geist foreground |
| `--card` / `--card-foreground` | `--fc-surface` / `--fc-foreground` | Geist surface |
| `--muted` / `--muted-foreground` | `--fc-surface-subtle` / `--fc-muted-foreground` | Geist muted content |
| `--border` | `--fc-border` | Geist 1px border |
| `--radius` | `--fc-radius-md` | Apple restrained grouping |

- 字体：Geist Sans 用于 UI 与内容；Geist Mono 用于 release、model、duration、time、runtime 等机器可读值。
- 间距：使用 4px 阶梯的 `--fc-space-*`，由内容关系决定，不以卡片堆叠制造层级。
- 阴影：仅 `--fc-shadow-subtle`，不以浮层阴影取代内容分组。
- 状态：success、warning、neutral 仅作为已有信息的语义提示；不以色块替代状态文本。

## 页面组织规则

- **Sidebar**：按 WORKSPACE 与 SYSTEM 分组；active 只来自当前 route。Models、Quality 在对应路由出现前保持无路由规划入口。
- **Overview**：生产状态中心，只包含 System Status、Processing Summary、Attention、Recent Activity。
- **Tasks**：紧凑任务摘要、任务列表、详情上下文。列表优先于 KPI，详情优先于操作。
- **Runtime / Logs / Settings**：保持现有只读边界；页面建立后按相同 Shell 和 shadcn 原语组合。

## 淘汰清单与迁移顺序

1. 已移除未使用的 `console-hero` 渐变样式与 Topbar glass blur。
2. `ConsoleComponents.Card` → 官方 `Card`。
3. `ConsoleComponents.StatusBadge` → 官方 `Badge`，并保留状态文本与 semantic mapping。
4. `console-panel` 的自定义边框/圆角规则 → Card 的 token 驱动样式。
5. `MetricBlock`、`SectionHeader` 不作为基础组件维护；迁回各页面的 shadcn 组合。
6. `EmptyState` 仅在引入官方 Empty State 组合后使用；不扩展为 Fangcun 自定义组件。

完成条件：`src/components/ui/` 的组件均来自 shadcn 官方源码，页面不再依赖自定义基础 UI 封装，且不出现渐变、glass、AI SaaS 装饰或大屏 KPI 布局。
