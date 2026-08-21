import { ConsoleShell } from "./ConsoleShell";
import { DatasetsPage } from "./DatasetsPage";
import { ImageProcessingPage } from "./ImageProcessingPage";
import { OverviewPage } from "./OverviewPage";
import { LogsPage } from "./LogsPage";
import { ModelsPage } from "./ModelsPage";
import { QualityPage } from "./QualityPage";
import { RuntimePage } from "./RuntimePage";
import { SettingsPage } from "./SettingsPage";
import { ToolsPage } from "./ToolsPage";

const routes = ["overview", "tasks", "tools", "models", "datasets", "quality", "runtime", "logs", "settings"] as const;
type ConsoleRoute = (typeof routes)[number];

function currentRoute(): ConsoleRoute {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const segment = window.location.pathname.slice(basePath.length).split("/").filter(Boolean)[0];
  return routes.includes(segment as ConsoleRoute) ? segment as ConsoleRoute : "overview";
}

export default function ConsoleApp() {
  const route = currentRoute();
  const page = {
    overview: <OverviewPage />,
    tasks: <ImageProcessingPage />,
    tools: <ToolsPage />,
    models: <ModelsPage />,
    datasets: <DatasetsPage />,
    quality: <QualityPage />,
    runtime: <RuntimePage />,
    logs: <LogsPage />,
    settings: <SettingsPage />,
  }[route];

  return <ConsoleShell route={route}>{page}</ConsoleShell>;
}
