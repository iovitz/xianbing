// 获取函数入参数组类型
export type InferParamaters<T extends Function> = T extends (
  ...args: infer R
) => unknown
  ? R
  : never;
