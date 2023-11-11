/**
 * 函数——函数的声明与调用
 */

//普通方式声明 函数名(参数1:类型1, 参数2:类型2): 返回类型
function sum(num1: number, num2: number): number {
    return num1 + num2;
}
let num3: number = sum(1, 3); 
console.log(num3);  //4

//可以没有参数和返回值
function sayHelloWorld() {
    console.log("Hello World!");
}
sayHelloWorld();    //Hello World!

//函数可以在声明前就调用
let num4: number = sum2(1, 3);
function sum2(num1: number, num2: number): number {
    return num1 + num2;
}

//使用表达式声明（匿名函数）此时作用域与变量一致，不能先调用再声明
let multiplication = function (num1: number, num2: number) : number {
    return num1 * num2;
}
let num5: number = multiplication(4, 3);
console.log(num5);  //12

//没有参数但有返回值
let circumference = function () : number {
    return 3.14159;
}
let num6: number = circumference();
console.log(num6);  //3.14159

//箭头函数
let multiplication2 = (num1: number, num2: number): number => {
    return num1 * num2;
}
let num7: number = multiplication2(3, 4);

let circumference2 = (): number => {
    return 3.14159;
}
let num8: number = circumference2();

//使用匿名函数之前
function myFunction(value) {
    return value > 10;
}
let numbers1 = [4, 7, 9, 11, 15, 20];
console.log(numbers1.findIndex(myFunction));    //3

//使用匿名函数之后
let numbers2 = [4, 7, 9, 11, 15, 20];
console.log(numbers2.findIndex((value) => {
    return value > 10;
}));    //3

//箭头函数在只有单个参数式可以省略括号
let square = a => a * a;
console.log(square(5)); //25

/**
 * 自调用函数
 * 用圆括号包裹匿名函数，并在表达式后补一个圆括号，会在声明后自己调用
 */
(function () {
    console.log("Hello World!");
}) ();  //Hello World!

(function (name: string) {
    console.log(`Hello ${name}!`);
}) ("Rick");    //Hello Rick!

/**
 * 参数函数 
 * 将函数作为参数传递给另一个参数
 */
function SplitNameAndSayHello(name: string, func: (firstName: string) => void) {
    let names = name.split(" ");
    let firstName = names[0];
    func(firstName);
}
function SayHelloToSomeone(firstName: string) {
    console.log(`Hello ${firstName}!`);
}
SplitNameAndSayHello("Real Zhao", SayHelloToSomeone);   //Hello Real!

/**
 * 递归函数
 * 自己调用自己
 */
let n = 100;
let result = sumFun(n);
//求和
function sumFun(n: number) {
    if (n == 1) {
        return 1;
    }
    return sumFun(n - 1) + n;
}
console.log(result);    //5050

let x = 5, y = 3;
let result2 = power(x, y);
//幂运算
function power(x: number, y: number) {
    if (y <= 1) {
        return x;
    } else {
        return x * power(x, y - 1);
    }
}
console.log(result2);   //125

export{}