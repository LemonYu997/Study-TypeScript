/**
 * symbol
 * undefined
 * null
 * NaN
 */

//symbol创建唯一值 ES2015引入 不常用
let sym: symbol = Symbol();
let sym1: symbol = Symbol("说明");
let sym2: symbol = Symbol("说明");
console.log(sym1 == sym2);  //false

/**
 * undefined 以下情况产生：
 * 1、变量声明后没有赋值，该变量值为undefined
 * 2、调用函数时没传递参数值，参数值为undefined
 * 3、没有给对象的某个属性赋值，其值为undefined
 * 4、函数没有返回值，则默认返回undefined
 */
function test(para?:any) {
    console.log(para);  //undefined
}
test();

let a: number;
console.log(a); //undefined

/**
 * null 变量不会自动生成null，需要代码指定为null
 * null表示预期中的无值，是一种正常状态
 * undefined表示非预期的无值，是一种异常状态
 */
let b: number = null;
let c: string = null;
let d: boolean = null;
console.log(b); //null

/**
 * NaN:Not a Number 不是一个正确的数字
 */
let abc = parseInt("abc");
console.log(abc);   //NaN

export{}