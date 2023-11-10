/**
 * 字面量类型
 * 变量和常量
 */

/**
 * 字面量表示固定值，包括以下：
 * 1、字符串        "abc"
 * 2、数值          99.9
 * 3、布尔值        true
 * 4、长整型值      123n
 * 5、对象          {a:"hello"}
 * 6、数组          [3]
 * 7、函数          text()
 * 8、正则表达式    
 * 9、null
 */
//值必须与定义一致
let number1: 99.9 = 99.9;
let boolean1: true = true;
let bitint1: 111n = 111n;
let string1: "hello" = "hello";
//可以使用 | 分割字面量
let number123: 1 | 2 | 3;
number123 = 1;
number123 = 2;
number123 = 3;

/**
 * 变量：使用 let 和 var（不推荐）
 * let注意点：不能超出作用域范围
 *  1、块级作用域
 *  2、全局作用域
 *  3、暂时性死区：先声明再使用
 */
//块级作用域
if (true) {
    let b: number = 30;
    console.log(b);    //30
}
//编译错误，超出作用域，找不到 b
// console.log(b);
//上层变量可以在下层使用，如果下层定义了重名变量，上层会暂时失效
if (true) {
    //块级作用域1
    let b: number = 30;
    {
        //块级作用域2
        let b: number = 20;
        console.log(b);     //20
    }
    console.log(b);         //30
    {
        //这个块内没有声明，会使用上层的
        console.log(b);     //30
    }
}


//全局作用域
let a: number = 1;
if (true) {
    console.log(a); //1
}

//暂时性死区，变量使用前必须先声明，不能先使用后声明
// c = 2;  //编译报错
// console.log(c); //编译报错
let c:number = 1;

//以下写法也不可以
testLog();
function testLog() {
    // console.log(d); //运行时报错
}
let d: number = 2;  //变量声明在调用的函数下边，会运行报错

//禁止重复声明
let a1: number = 1;
// let a1: number = 2; //重复声明 报错
if (true) {
    //不在同一个作用域可以声明重名变量
    let a1: number = 3;
}


/**
 * 常量 const
 */
const c1: number = 1;
const c2: boolean = true;
const c3: string = "hello";
const c4: bigint = 6n;

//编译错误，常量不能被再次赋值
// c3 = "world";

export{}