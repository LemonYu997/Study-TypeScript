/**
 * 表达式和运算符
 * 常见运算符：
 * 1、算术运算符
 * 2、赋值运算符
 * 3、字符串运算符
 * 4、比较运算符
 * 5、条件运算符
 * 6、逻辑运算符
 * 7、类型运算符
 * 8、位运算符
 */

//算数运算符 + - * / % **(幂运算) ++(自增) --(自减)
let x = 7;
let y = 4;
console.log(x + y);     //11
console.log(x - y);     //3
console.log(x * y);     //28
console.log(x / y);     //1.75
console.log(x % y);     //3
console.log(x ** y);    //2401
console.log(x++);       //7
console.log(++x);       //9 加了两次
console.log(y--);       //4
console.log(--y);       //2 减了两次

//赋值运算符
x = 7;
y = 4;
x += y;     // x = x + y
x -= y;     // x = x - y
x *= y;     // x = x * y
x /= y;     // x = x / y
x %= y;     // x = x % y;
x **= y;    // x = x ** y;

//字符串运算符 可以用 + 拼接字符串
let a = "Good";
let b = "morning";
console.log(a + " " + b);           //Good morning
console.log("1" + 2);               //12
console.log("Hello" + 2);           //Hello2
console.log("Hello" + 3n);          //Hello3
console.log("Hello" + true);        //Hellotrue
console.log("Hello" + undefined);   //Helloundefined
console.log("Hello" + null);        //Hellonull


//比较运算符 只允许同类型比较
let n = 10;
console.log(n == 10);   //true  ==只比较值是否相等
console.log(n == 20);   //false
console.log(n === 10);  //true  ===同时比较类型和值
console.log(n === 20);  //false
console.log(n != 30);   //true
console.log(n != 10);   //false
console.log(n !== 30);  //true
console.log(n !== 10);  //false
console.log(n > 9);     //true
console.log(n > 10);    //false
console.log(n < 12);    //true
console.log(n < 10);    //false
console.log(n >= 9);    //true
console.log(n >= 11);   //false
console.log(n <= 11);   //true
console.log(n <= 9);    //false

//布尔类型比较 true > false
let bb = true;
console.log(bb == true);    //true
console.log(bb === true);   //true
console.log(bb != true);    //false
console.log(bb !== true);   //false
console.log(bb > false);    //true      默认 true > false
console.log(bb < false);    //false
console.log(bb >= false);   //true      默认 true > false
console.log(bb <= false);   ////false

//字符串类型比较 
let s = "a";
console.log(s == "a");      //true  
console.log(s === "a");     //true
console.log(s != "a");      //false
console.log(s !== "a");     //false
console.log(s > "b");       //false 按Unicode表中顺序进行比较
console.log(s < "b");       //true 按Unicode表中顺序进行比较
console.log(s >= "a");      //true 按Unicode表中顺序进行比较
console.log(s <= "a");      //true 按Unicode表中顺序进行比较

//不同类型比较会报错
// console.log(bb == s);   //报错

//Ts中限制了隐式转换 但如果使用any就会发生
let a1: any = 1;
let a2: any = "1";
console.log(a1 == a2);      //true
console.log(a1 === a2);     //false
console.log(a1 != a2);      //false
console.log(a1 !== a2);     //true

//条件运算符 ?:
let age = 5;
let majority = (age < 18) ? "未成年人":"成年人";
console.log(majority);  //未成年人
//非布尔类型会隐式转换为布尔类型
console.log(1 ? "b1" : "b2");   //b1
console.log("" ? "b1" : "b2");  //b2


//逻辑运算符 && || !
let num = 10;
console.log(num > 1 && num < 11);   //true
console.log(num > 1 && num < 5);    //false
console.log(num > 1 || num < 5);    //true
console.log(num > 11 || num < 5);   //false
console.log(!(num > 1));            //false
console.log(!(num > 11));           //true
console.log(!"hello");              //false

//左边能确认结果后就不会再执行右侧代码
true || console.log("test1");
false && console.log("test2");


//类型运算符 typeof(输出类型) 和 instanceof(是否为某类的对象)
console.log(typeof 1);          //number
console.log(typeof 1n);         //bigint
console.log(typeof "hello");    //string
console.log(typeof true);       //boolean
console.log(typeof NaN);        //number
console.log(typeof null);       //object
console.log(typeof undefined);  //undefined


//位运算符 & | ~ ^ << >> >>>(无符号右移)

export{}