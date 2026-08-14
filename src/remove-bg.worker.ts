/// <reference lib="webworker" />

import { removeBackground } from "@imgly/background-removal";

type RemoveRequest = {
  id: number;
  file: File;
  model: "isnet_fp16" | "isnet_quint8";
};

self.onmessage = async (event: MessageEvent<RemoveRequest>) => {
  const { id, file, model } = event.data;
  try {
    const result = await removeBackground(file, {
          model,
          device: "cpu",
          proxyToWorker: false,
          output: { format: "image/png", quality: 1 },
          progress: (key, current, total) => {
            self.postMessage({ id, type: "progress", key, current, total });
          },
        });
    self.postMessage({ id, type: "result", result });
  } catch (error) {
    const detail = error instanceof Error
      ? `${error.name}: ${error.message}${error.stack ? `\n${error.stack}` : ""}`
      : String(error);
    self.postMessage({
      id,
      type: "error",
      error: detail || "主体识别失败",
    });
  }
};

export {};
