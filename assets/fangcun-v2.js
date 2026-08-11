(() => {
  "use strict";

  document.documentElement.classList.add("fangcun-v2");

  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) theme.setAttribute("content", "#f6f6f3");

  // 只替换简单文本节点，不改 React 的功能结构。
  const replacements = new Map([
    ["把图片放进压缩舱", "拖入图片或点击选择"],
    ["切分设置", "切分"],
    ["输出设置", "输出"],
    ["压缩策略", "压缩设置"],
    ["方寸 LOCAL UTILITY", "方寸"],
    ["100% LOCAL", ""]
  ]);

  const patchText = () => {
    document.querySelectorAll("b, strong, span").forEach((node) => {
      if (node.children.length) return;
      const key = (node.textContent || "").trim();
      if (!replacements.has(key)) return;
      const next = replacements.get(key);
      if (node.textContent !== next) node.textContent = next;
    });
  };

  const start = () => {
    patchText();
    const root = document.getElementById("root") || document.body;
    const observer = new MutationObserver(patchText);
    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
