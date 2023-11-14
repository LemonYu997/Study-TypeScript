//类型导出，与普通导出分开，防止出现编译错误
interface A {x: string};
export type {A};
console.log("good");
globalThis.Y = "hello";