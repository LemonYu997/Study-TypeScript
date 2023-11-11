/**
 * 函数的调用签名和重载
 */

//调用签名，表示函数的类型
let func1: (num1: number, num2: number) => number;
//函数具体逻辑
func1 = function (num1: number, num2: number): number {
    return num1 + num2;
}
console.log(func1(1, 2));   //3

//函数调用签名时指定了类型之后，具体实现可以不用指明
//参数名不用与调用签名一致
func1 = function (a, b) {
    return a * b;
}
console.log(func1(1, 2));   //2
// console.log(func1("a", "b"));   //与函数签名类型不一致，报错

//实际函数的参数个数比签名少时不会报错
func1 = function (num1) {
    return num1;
}
func1 = function (num1?, num2?) {
    return num1 + num2;
}
func1 = function (num1 = 0, num2 = 0) {
    return num1 + num2;
}

//函数重载 可以用不同的类型声明函数，但是执行同一套逻辑
function combine(a: boolean, b:boolean): boolean;
function combine(a: string, b:string): string;
function combine(a: number, b:number): number;
function combine(a: any, b:any): any {
    // 需要参数设置为any 上述三种函数都执行这同一套逻辑
    if (typeof a == "boolean" && typeof b == "boolean") {
        return a || b;
    } else {
        return a + b;
    }
}
console.log(combine(1, 2));         //3
console.log(combine("a", "b"));     //ab
console.log(combine(true, false));  //true
// console.log(combine(1n, 2n));   //传参和重载支持的类型不同（any函数之前的三个函数），报错

//以表达式的形式声明重载函数
let combineF: {
    (a: boolean, b: boolean): boolean;
    (a: string, b: string): string;
    (a: number, b: number): number;
}
//函数的具体实现
combineF = function (a: any, b: any): any {
    if (typeof a == "boolean" && typeof b == "boolean") {
        return a || b;
    } else {
        return a + b;
    }
}
console.log(combineF(1, 2));         //3
console.log(combineF("a", "b"));     //ab
console.log(combineF(true, false));  //true
// console.log(combineF(1n, 2n));   //传参和重载支持的类型不同（any函数之前的三个函数），报错


export{}