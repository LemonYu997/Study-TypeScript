/**
 * 原始类型：
 *  1、boolean：布尔类型
 *  2、number：数值类型
 *  3、bigint：长整型
 *  4、string：字符串类型
 *  5、enum：枚举类型
 *  6、symbol
 *  7、undefined
 *  8、null
 *  9、NaN
 */

//布尔类型
let isSccuess: boolean = true;
let isLoaded: boolean = false;

//数值类型 64位浮点数，53位是小数位，10位是指数位，1位是符号位
let totalPrice: number = 199.99;
let discount: number = -9.99;
let itemCount: number = 5;
//数值类型：进制表达
let hexNumber: number = 0xf01e;     //十六进制
let binaryNumber: number = 0b1011;  //二进制
let octalNumber: number = 0o456;    //八进制

console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
console.log(Number.MIN_VALUE);  //5e-324
console.log(Number.MAX_SAFE_INTEGER);    //9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    //-9007199254740991

//浮点运算精度会有问题，会不相等
let a: number = 0.1;
let b: number = 0.2;
if (a + b == 0.3) {
    console.log("比较结果都相等");
} else {
    //0.30000000000000004
    console.log(a + b);
    console.log("比较结果不相等");
}

//长整型 ES2020新增语法
let bigintNumber1: bigint = 12349007199254740991n;
let bigintNumber2: bigint = -12349007199254740991n;


export{}
