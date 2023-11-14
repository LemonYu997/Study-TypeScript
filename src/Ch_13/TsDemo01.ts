/**
 * 模块与命名空间——模块导出
 */

//命名行内导出
export let x1: number = 11;
export const y1: string = "abc";
export function sayHello1() {
    console.log("hello!");
}
export class A1 {name: string};
export interface B1 {sayHello: () => {}}
export type NumberOrStirng = number | string;

//导出只能位于模块顶级，不能出现在代码块中
// let s = 123;
// if (s == 123) {
//     //export不能出现在这里
//     export let ss = "abc";  报错
// }

//命名子句导出 批量导出
let x2: number = 11;
let y2: string = "abc";
function sayHello2() {
    console.log("hello!");
}
export {x2, y2, sayHello2};

//不能重复导出
// export {x2}; 报错

//使用别名导出
export {x2 as myX, y2 as myY, sayHello2 as mySayHello}

//默认导出 default
//在导入该模块时未指定具体声明会使用该导出
//一个模块只能有一个默认导出
let x3: number = 11;
// export default x3;

//或者使用以下写法，注意只能有一个默认导出
// export {x3 as default}

//默认导出函数
// export default function sayHello3() {
//     console.log("hello!");
// }

//默认导出字面量
export default "";

//空导出 不想被其他文件引用时
export{}