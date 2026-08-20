import assert from "node:assert/strict";
import test from "node:test";

const { CUTOUT_PROCESS_STAGES, processFailureDetail, processStageCopy } = await import("../src/services/processStatus.ts");

test("cutout status flow is staged rather than percentage based", () => {
  assert.deepEqual(CUTOUT_PROCESS_STAGES.map((stage) => stage.label), ["图片读取中", "智能优化图片", "AI 分析主体", "边缘精修", "生成透明图片"]);
  assert.equal(processStageCopy("complete").label, "完成");
});

test("timeout and connection failures give recoverable guidance", () => {
  assert.match(processFailureDetail("timeout"), /原图未被修改/);
  assert.match(processFailureDetail("network"), /检查网络/);
  assert.match(processFailureDetail("http_413"), /50 MB/);
});
