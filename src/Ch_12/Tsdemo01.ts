/**
 * 进阶类型——泛型 <T>
 */

//既保证函数的通用性，又不绕过编译检查，可以使用泛型
function paramCheck<T> (param: T): T {
    if (param) {
        return param;
    }
    return null;
}

//可以用多种类型入参
let string1 = paramCheck<string>("hello");
let number1 = paramCheck<number>(1);
let bool1 = paramCheck<boolean>(true);
let array1 = paramCheck<number[]>([1, 2, 3]);
let obj1 = paramCheck<{x: string}>({x: "hello"});

//入参必须和泛型类型匹配
// let x = paramCheck<string> (1); 报错

//可以省略 <>，编译器会自动推断
let string2 = paramCheck("hello");
let number2 = paramCheck(1);
let bool2 = paramCheck(true);
let array2 = paramCheck([1, 2, 3]);
let obj2 = paramCheck({x: "hello"});

//在函数中使用多个泛型
function connect<T1, T2> (arg1: T1, arg2: T2, connectAsBool: boolean): boolean | string {
    if (connectAsBool) {
        return Boolean(arg1) && Boolean(arg2);
    } else {
        return String(arg1) + String(arg2);
    }
}

console.log(connect<number, bigint>(1, 1n, true));  //true
console.log(connect("ab", "cd", false));            //abcd

//在没有明确类型前无法执行具体的操作
function addNumber<T>(target: T, num: number, addType: string): T {
    // 泛型没有明确时不能使用 + 
    // if (addType == "add as number") {
    //     let result = target + num;  //报错
    // }

    //改造成以下方式
    if (typeof target == "number") {
        let result = target + num;
        return (result as unknown) as T;
    } else if (target instanceof Array) {
        target.push(3);
        return target;
    }
    return target;
}
console.log(addNumber(1, 2, "a"));      //3
console.log(addNumber([1, 2], 2, "a")); //[ 1, 2, 3 ]


//在类中使用泛型
class Content<T> {
    //静态成员不能使用泛型
    // static constents: T; 报错

    contents: T;
    constructor(value: T) {
        this.contents = value;
    }
    getContents(): T {
        return this.contents;
    }
}

let a = new Content<string>("hello");
console.log(a.getContents());   //hello

let b = new Content<number>(1);
console.log(b.getContents());   //1

let c = new Content<{x: boolean}>({x: true});
console.log(c.getContents());   //{ x: true }


//函数签名泛型
let function1: <T>(arg: T) => T;
function1 = function <T>(arg: T) {
    return arg;
}

//接口泛型
interface ContentI<T> {
    contents: T;
}

//实现接口泛型
class HtmlContent<T> implements ContentI<T> {
    contents: T;
    constructor(contents: T) {
        this.contents = contents;
    }
    getContents() {
        return this.contents;
    }
}

//类型别名泛型
type ContentT<T> = {
    contents: T;
}
let d: ContentT<string> = {contents: "hello"};
let e: ContentT<number> = {contents: 1};
let f: ContentT<boolean> = {contents: true};

//数组泛型
let arr1: Array<number> = [1, 2, 3];
let arr2: Array<string> = ["a", "b", "c"];


//泛型约束 限定泛型的支持类型
//<泛型参数 extends 具体类型>
interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise> (arg: T) {
    //泛型约束后就可以使用对应的成员
    console.log(arg.length);    
}

//泛型中存在length属性时编译能通过
printLength<string>("abc");         //3
printLength<number[]>([1, 2 ,3]);   //3
printLength<Lengthwise>({length: 3});   //3
printLength<{width: number, height: number, length: number}>({length: 3, width: 1, height: 2}); //3
//泛型中不存在length时，编译失败
// printLength<number>(1); //报错，不满足约束LengthWise

//一个泛型约束另一个泛型
function printArgs<T1, T2 extends T1> (arg1: T1, arg2: T2) {
    console.log(arg1);
    console.log(arg2);
}

printArgs<{x: number}, {x: number, y: number}> (
    {x: 1},
    {x: 1,y: 2});   //{ x: 1 } { x: 1, y: 2 }
printArgs<number, 1 | 2 | 3> (1, 2); //1 2

//T2不满足T1时，会编译错误
// printArgs<string, number>("a", 2);  //报错


export{}