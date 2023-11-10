/**
 * 类型转换
 * 1、显示转换：代码调用相关函数
 * 2、隐式转换：不调用函数，由运算符触发自动转换
 */

//将其他类型转为布尔类型
let msg: string = "ok";
let msgToBoolean: boolean = Boolean(msg);
console.log(msgToBoolean);  //true

//在表示空值的情况下才会返回false，否则返回true
console.log(Boolean(undefined));    //false
console.log(Boolean(null));         //false
console.log(Boolean(0));            //false
console.log(Boolean(""));           //false
console.log(Boolean(NaN));          //false
console.log(Boolean(-1));           //true 除了0以外都是true
console.log(Boolean("false"));      //true 除了空字符串以外都是true

/**
 * 将其他类型转为数值类型，常用函数：
 * 1、parseInt()：将字符串类型转为整形数值
 * 2、parseFloat()：将字符串类型转为浮点型数值
 * 3、Number()：将任意类型转为数值
 * 4、Bigint()：将其他类型转为长整型    需要Ts配置"lib": ["ESNext", "DOM"],
 * */
//parseInt()
let scoreString: string = "100";
let score: number = parseInt(scoreString);
console.log(score);                 //100
//在转换时会忽略前边的空格，遇到非数字字符之后的数字也会忽略
console.log(parseInt("    100"));   //100
console.log(parseInt("  100y01"));  //100
//如果待转换的字符串首个非空格字符串不是数字或者正负号，会返回Nan
console.log(parseInt("y100"));      //NaN
//会忽略小数点
console.log(parseInt("100.1"));     //100

//parseFloat()
let scoreString1: string = "99.9";
let score1: number = parseFloat(scoreString1);
console.log(score1);                    //99.9
//会忽略开头的空格和数字之后的非数字字符
console.log(parseFloat("    -99.9"));   //-99.9
console.log(parseFloat("99.9y1"));      //99.9
//忽略第二个小数点及其之后
console.log(parseFloat("99.9.88"));     //99.9

//Number()
//将布尔类型转为数值类型
console.log(Number(true));      //1
console.log(Number(false));     //0
//将undefined、null、""转为数值
console.log(Number(undefined)); //NaN
console.log(Number(null));      //0
console.log(Number(""));        //0
//将字符串转为数值，必须为严格数值，否则返回null
console.log(Number("99.9   ")); //99.9
console.log(Number("   -99.9"));//-99.9    
console.log(Number("99.9y01")); //NaN
console.log(Number("99.9.88")); //NaN

//BigInt() 需要Ts配置"lib": ["ESNext", "DOM"]
//必须是严格的整数形式，否则会报错
let bigint1: bigint = BigInt("1234567");
let bigint12: bigint = BigInt(123241356);
console.log(bigint1);   //1234567n
console.log(bigint12);  //123241356n


/**
 * 将其他类型转为字符串类型：
 * 1、String()，构造函数生成
 * 2、toString()，其他类型调用
 */
//String()
console.log(String(99.9));      //99.9
console.log(String(true));      //true
console.log(String(null));      //null
console.log(String(NaN));       //NaN
console.log(String(undefined)); //undefined

//toString()
let number1: number = 99.9;
let boolean1: boolean = true;
let bigint11: bigint = 555n;
let nanNumber: number = NaN;
console.log(number1.toString());    //99.9
console.log(boolean1.toString());   //true
console.log(bigint11.toString());   //555
console.log(nanNumber.toString());  //NaN


export{}