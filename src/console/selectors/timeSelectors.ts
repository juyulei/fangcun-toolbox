const chinaTimeZone = "Asia/Shanghai";

const dateParts = (value: string) => new Intl.DateTimeFormat("zh-CN", {
  timeZone: chinaTimeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).formatToParts(new Date(value)).reduce<Record<string, string>>((result, part) => ({ ...result, [part.type]: part.value }), {});

const time = (value: string, seconds = false) => new Intl.DateTimeFormat("zh-CN", {
  timeZone: chinaTimeZone,
  hour: "2-digit",
  minute: "2-digit",
  ...(seconds ? { second: "2-digit" } : {}),
  hour12: false,
}).format(new Date(value));

export function formatListTime(value?: string): string {
  if (!value) return "—";
  const current = dateParts(new Date().toISOString());
  const target = dateParts(value);
  const targetDate = `${target.year}-${target.month}-${target.day}`;
  const currentDate = `${current.year}-${current.month}-${current.day}`;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayParts = dateParts(yesterday.toISOString());
  const yesterdayDate = `${yesterdayParts.year}-${yesterdayParts.month}-${yesterdayParts.day}`;
  const prefix = targetDate === currentDate ? "今天" : targetDate === yesterdayDate ? "昨天" : `${Number(target.month)} 月 ${Number(target.day)} 日`;
  return `${prefix} ${time(value)}`;
}

export function formatDetailTime(value?: string): string {
  if (!value) return "—";
  const parts = dateParts(value);
  return `${parts.year} 年 ${Number(parts.month)} 月 ${Number(parts.day)} 日 ${time(value)}`;
}

export function formatLogTime(value?: string): string {
  if (!value) return "—";
  const listTime = formatListTime(value);
  return `${listTime.slice(0, -5)}${time(value, true)}`;
}
