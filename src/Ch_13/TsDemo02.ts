/**
 * 模块与命名空间——模块导入
 */
//常规导入
// import {a, d, myC} from "./a.js";
// console.log(a);     //a
// console.log(d);     //b
// console.log(myC);   //c

//导入时可以使用别名
import {a as otherA, d as otherD, myC as otherC, default as otherB} from "./a.js";
console.log(otherA);    //a
console.log(otherB);    //b
console.log(otherC);    //c
console.log(otherD);    //d

//导入其他模块的默认导出声明
// import 声明别名 from "模块路径"
import moduleADefault from "./a.js";
console.log(moduleADefault);    //b

//导入整个模块，通过模块别名.声明调用
import * as moduleA from "./a.js";
console.log(moduleA.a);         //a
console.log(moduleA.default);   //b
console.log(moduleA.myC);       //c
console.log(moduleA.d);         //d

//导入（除了动态导入）只能出现在模块顶级，不能嵌套在代码块中
// let s = 123;
// if (s == 123) {
//     //import不能出现在这里
//     import {a} from "./a.js";
// }


//转移导出 测试
import {a} from "./b.js"
console.log(a);     //a


//动态导入 ES6
// import("./a.js").then((module) => {
//     console.log(module.a);          //a
//     console.log(module.default);    //b
//     console.log(module.myC);        //c
//     console.log(module.d);          //d
// })

//ES7写法
// let module = await import("./a.js");
// console.log(module.a);
// console.log(module.default);
// console.log(module.myC);
// console.log(module.d);

//动态导入可以嵌套在非顶级作用域的代码块
// let t = 1;
// if (t == 123) {
//     let module = await import("./a.js");
//     console.log(module.a);
// }

//空导入
import "./c.js"     //ac is 1
console.log(globalThis.X);  //hello

//类型导入，与普通导入分开，防止出现编译错误
import type {A} from "./d.js"
import "./d.js"             //good
let aa: A = {x: "hello"};
console.log(globalThis.Y);  //hello

export{}