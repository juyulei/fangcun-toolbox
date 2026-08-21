import React from "react";
import ReactDOM from "react-dom/client";
import { BackgroundRemoverV2 } from "./App";
import ConsoleApp from "./console/ConsoleApp";
import "./styles.css";

const consoleRoutes = ["overview", "tasks", "tools", "models", "datasets", "quality", "runtime", "logs", "settings"];
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const firstPathSegment = window.location.pathname.slice(basePath.length).split("/").filter(Boolean)[0];
const App = consoleRoutes.includes(firstPathSegment) ? ConsoleApp : BackgroundRemoverV2;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
