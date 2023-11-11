/**
 * 函数——函数的参数值和返回值
 */
//普通参数 参数名称: 参数类型
function sum1(num1: number, num2: number): number {
    return num1 + num2;
}
//传参和定义不一致 报错
// let num3: number = sum1("a", "b");    //报错

//省略参数类型，默认为any
function sum2(num1, num2): number {
    return num1 + num2;
}
let num3 = sum2(1, 2);
let num4 = sum2("a", "b");
console.log(num3);  //3
console.log(num4);  //ab

//可选参数 一些不确定会是否传入的参数，在名字后加?
function sum3(n1: number, n2?: number, n3?: number) : number {
    let result = n1;
    if (n2) {
        result += n2;
    }
    if (n3) {
        result += n3;
    }

    return result;
}
console.log(sum3(1));       //1
console.log(sum3(1, 2));    //3
console.log(sum3(1, 2, 3)); //6

//如果可选参数没有传入，会输出undefined
function sum4(n1: number, n2?: number, n3?: number) {
    console.log(n2);    
    console.log(n3);    
}
sum4(1);    //undefined undefined

//默认参数，在参数定义后边加上 = xxx
function sum5(n1: number, n2: number = 2, n3: number = 3) : number {
    return n1 + n2 + n3;
}
console.log(sum5(1));   //6

//不声明类型时，按默认值来定义
function sum6(n1, n2 = 2, n3 = 3): number {
    return n1 + n2 + n3;
}
console.log(sum6("a", 2, 3));   //a23
// console.log(sum6("a", "b", "c"));   //报错 和类型不一致


//剩余参数 ... 不确认有多少个参数
//数组型剩余参数
function print(memo: string, ...numbers: number[]): void {
    let printNumberList = "";
    if (numbers.length == 0) {
        console.log(`${memo}：未传入剩余参数`);
    } else {
        for (let i = 0; i < numbers.length; i++) {
            printNumberList += numbers[i] + ";";
        }
        console.log(`${memo}：${printNumberList}`);
    }
}
print("传入的参数有");                  //传入的参数有：未传入剩余参数
print("传入的参数有", 1, 2);            //传入的参数有：1;2;
print("传入的参数有", 1, 2, 3, 4, 5);   //传入的参数有：1;2;3;4;5;

//求和函数
function sum7(...numbers: number[]): number {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(sum7(1));       //1
console.log(sum7(1, 2));    //3
console.log(sum7(1, 2, 3)); //6

//元组型剩余函数
function printTuple(...numbers: [number, string]): void {
    let printNumberList = "";

    for (let i = 0; i < numbers.length; i++) {
        printNumberList += numbers[i] + ";";
    }
    console.log(`传入的参数有 ${printNumberList}`);
}
printTuple(1, "a"); //传入的参数有 1;a;
//应该按元组定义来传参 负责报错
// printTuple("a"); //报错
// printTuple("a", 2, 3);   //报错

//元组本身支持可选元素和剩余元素
function printTuple2(...numbers: [number, boolean?, ...string[]]): void {
    let printNumberList = "";

    for (let i = 0; i < numbers.length; i++) {
        printNumberList += numbers[i] + ";";
    }
    console.log(`传入的参数有 ${printNumberList}`);
}
printTuple2(1);                 //传入的参数有 1;
printTuple2(1, true);           //传入的参数有 1;true;
printTuple2(1, true, "a", "b"); //传入的参数有 1;true;a;b;


//定义返回值
function getArrayLength(arr: string[] = []): number {
    return arr.length;
}
console.log(getArrayLength(["a", "b"]));    //2

//没有返回值，定义void
function sayHello(): void {
    console.log("Hello World");
    return; //可以加return 但不写返回值
}
sayHello(); //Hello World

//推导返回值类型
function test(num: number) {
    if (num == 1) {
        return "a";
    } else if (num == 2) {
        return true;
    } else {
        return num;
    }
}
console.log(test(1));   //a
console.log(test(2));   //true
console.log(test(3));   //3


export{}