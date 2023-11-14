/**
 * 顶部类型与底部类型
 * 顶部类型在 "=" 左边，底部类型在 "="右边
 *  1、any：任意类型
 *  2、unknown： 未知类型 使用更严格，需要进行断言
 *  3、never：永不存在值的类型
 */

//any 为顶部类型时，可以使用所有类型赋值
let a: any;
a = 1;
a = "hello";
a = true;
a = [1, 2, 3];
a = function() {
    console.log("hello");
}
a = {x: "aa", y: 1};

//any 为底部类型时，可以赋值给所有类型的变量
let boolean1: boolean = a;
let number1: number = a;
let string1: string = a;
let function1: () => void = a;
let objectr1: {x: number} = a;
let array1: number[] = a;

//使用any会跳过编译器检查，运行时才会发现错误
// a.ss();   //运行时才发现 a 不存在ss方法

//unknown 顶部类型 可以接收所有类型变量，但不会饶过编译检查
let b: unknown;
b = 1;
b = "hello";
b = true;
b = [1, 2, 3];
b = function() {console.log("hello");}
b = {x: "aa", y: 1};

//不会饶过编译检查
// b();    //类型{}没有调用签名 报错
// b.ss(); //不存在ss 报错


/**
 * 类型断言 as
 * 类型防护 typeof instanceof
 */

//类型断言 as
let c: unknown = 1;
// let d = c + 2;  //unknow不能使用运算符 报错
//类型断言，认为c是number
let d  = (c as number) + 2;

c = [1, 2];
(c as number[]).push(3);
console.log(c); //[ 1, 2, 3 ]

c = {x: "hello"}
console.log((c as {x: string}).x);  //hello

//用尖括号语法的类型断言
let e: unknown = 1;
let f = <number> e + 1;

e = [1, 2];
(<number[]>e).push(3);

e = {x: "hello"}
console.log((<{x: string}>e).x);    //hello

//类型防护 
let g: unknown = 1;
if (typeof g == "number") {
    console.log(g + 2);     //3
}
if (g === 1) {
    console.log(g + 2);     //3
}
g = [1, 2];
if (g instanceof Array) {
    g.push(3);
    console.log(g);         //[ 1, 2, 3 ]
}


//never 底部类型 异常情况下的类型
//可以赋给所有类型变量，但没有意义
let n: never;
let boolean2: boolean = n;
let number2: number = n;
let string2: string = n;
let function2: () => void = n;
let obj2: {x: number} = n;
let array2: number[] = n;

//主动给never赋值会报错
// n = 1; 报错

//never只会在错误情况下自动产生
const uncertain: unknown = 'Hello world!';

//因为不能有类型即是number又是string，所以会认为其是never
if (typeof uncertain === 'number' && typeof uncertain === 'string') {
    //never没有length属性 报错
    // console.log(uncertain.length);
}

//使用错误的类型操作会产生never
type A = boolean & string;
//A是never 无法赋值
// let z: A = 1;

//出现无法推断的类型
function test(a: string) {
    if (typeof a === "string") {
        console.log(a.length);
    } else {
        //不存在a不是string的情况，此时a只会是never，报错
        // console.log(a.length);  
    }
}


export{}