import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { consoleSettings } from "./mockData";

export function SettingsPage() {
  return <section className="console-content settings-page">
    <header className="console-heading"><div><p>System workspace</p><h1>Settings</h1><span className="console-heading-description">当前 Console 配置的只读摘要。</span></div><Badge variant="outline" className="console-status neutral"><i />Read-only</Badge></header>
    <Card className="console-panel settings-summary gap-0 py-0"><header><div><p>Console Configuration</p><h2>运行配置摘要</h2></div><span className="image-count">本地环境</span></header><div>{consoleSettings.map(([label, value, detail], index) => <div key={label}><dl><dt>{label}</dt><dd>{value}<small>{detail}</small></dd></dl>{index < consoleSettings.length - 1 && <Separator />}</div>)}</div></Card>
  </section>;
}
