/**
 * 内置引用对象——单例内置对象
 *  1、globalThis
 *  2、Math
 *  3、console
 */
//globalThis
// console.log(globalThis === window); //浏览器中执行时输出true
console.log(globalThis === global); //nodeJs中执行时输出true

//所有不属于任何对象的内置属性和方法都是globalThis的属性和方法
console.log(globalThis.NaN);                    //NaN
console.log(globalThis.undefined);              //undefined
console.log(globalThis.parseInt("1"));          //1
console.log(globalThis.parseFloat("1.2"));      //1.2
console.log(globalThis.Number("3.3"));          //3.3
console.log(globalThis.String(true));           //true
console.log(new globalThis.Date());             //2023-11-15T07:30:33.900Z
console.log(new globalThis.RegExp("hello"));    // /hello/
console.log(new globalThis.Array(1, 2, 3));     //[ 1, 2, 3 ]
globalThis.setTimeout(function () {
    console.log("setTimeout!");                 //setTimeout!
}, 0);
let interval = globalThis.setInterval(function () {
    console.log("setInterval!");                //setInterval!
    globalThis.clearInterval(interval);
}, 0)
globalThis.Promise
    .resolve("Promise!")
    .then(p => console.log(p));                 //Promise!

//Math和console也是globalThis属性
globalThis.console.log(globalThis.Math.PI)      //3.141592653589793

/**
 * Math对象的属性：
 *  Math.E      自然对数的底数
 *  Math.PI     圆周率
 *  Math.SQRT2  2的平方根
 *  Math.SQRT1_2    1/2的平方根
 *  Math.LN2    2的自然对数
 *  Math.LN10   10的自然对数
 *  Math.LOG2E  2为底的e的对数
 *  Math.LOG10E 10为底的e的对数
 */
console.log(Math.E);            //2.718281828459045
console.log(Math.PI);           //3.141592653589793
console.log(Math.SQRT2);        //1.4142135623730951
console.log(Math.SQRT1_2);      //0.7071067811865476
console.log(Math.LN2);          //0.6931471805599453
console.log(Math.LN10);         //2.302585092994046
console.log(Math.LOG2E);        //1.4426950408889634
console.log(Math.LOG10E);       //0.4342944819032518

/**
 * Math的方法：
 *  abs(x)          x的绝对值
 *  sign(x)         x的符号 正返回1,0返回0，负数返回-1
 *  trunc(x)        x的整数部分
 *  sqrt(x)         x的平方根
 *  cbrt(x)         x的三次方根
 *  pow(x, y)       x的y次方
 *  ceil(x)         x向上取整
 *  floor(x)        x向下取整
 *  round(x)        x四舍五入
 *  fround(x)       x的32单精度浮点表示
 *  max(x, y...)    最大值
 *  min(x, y...)    最小值
 *  random()        0~1随机数
 *  clz32(x)        x的32位二进制表示中前导0的数量
 *  exp(x)          e^x的值
 *  expm1(x)        e^(x-1)的值
 *  log(x)          x的自然对数
 *  log10(x)        x以10为底的对数
 *  log1p(x)        1+x的自然对数
 *  log2(x)         x的以2为底的对数
 *  sin(x)          x正弦值
 *  sinh(x)         x的双曲正弦值
 *  asin(x)         x的反正弦值
 *  asinh(x)        x的反双曲正弦值
 *  cos(x)          x的余弦值
 *  cosh(x)         x的双曲余弦值
 *  acos(x)         x的反余弦值
 *  acosh(x)        x的反双曲余弦值
 *  tan(x)          x的正切值
 *  tanh(x)         x的双曲正切值
 *  atan(x)         x的反正切值
 *  atan2(x,y)      y / x的反正切值
 *  atanh(x)        x的反双曲正切值
 * */
console.log(Math.abs(-5));              //5
console.log(Math.pow(2, 3));            //8
console.log(Math.sqrt(25));             //5
console.log(Math.max(1, 3, 5, 6, 9));   //9
console.log(Math.round(3.4));           //3

//生成指定范围内随机数
function randomNum(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
}
console.log(randomNum(1, 100));         //71


/**
 * cosole常用方法：
 *  error(s)            输出错误日志
 *  info(s)             输出消息日志
 *  log(s)              输出常规日志
 *  warn(s)             输出警告日志
 *  count(s)            调用一次，s+1，输出总共调用次数
 *  countReset(s)       重置计数为0
 *  time(s)             从指定名称开始记时
 *  timeEnd(s)          指定名称结束记时，输出经历时间
 *  table(复合数据)      二维表格展示
 *  trace()             函数调用层次
 *  assert(断言)        断言是否成功
 *  group(s)            分组消息
 *  clear()             清空控制台
 */
//消息类型
console.info("this is info");       //this is info
console.log("this is log");         //this is log
console.error("this is error");     //this is error
console.warn("this is warn");       //this is warn

//计数
console.count("调用次数");          //调用次数: 1
console.count("调用次数");          //调用次数: 2
console.count("调用次数");          //调用次数: 3
console.countReset("调用次数");
console.count("调用次数");          //调用次数: 1

//计时
console.time("计时器");             
console.timeEnd("计时器");          //计时器: 0.129ms

//表格形式输出
let array = ["Grace", "Nick", "Alisa"];
console.table(array);
/**
    │ (index) │ Values  │
    ├─────────┼─────────┤
    │    0    │ 'Grace' │
    │    1    │ 'Nick'  │
    │    2    │ 'Alisa' │
 */

function topFunc() {
    middleFunc();
}
function middleFunc() {
    bottomFunc();
}
function bottomFunc() {
    //输出调用层次
    console.trace();
}
topFunc();
/** Trace
    at bottomFunc (file:///F:/Java/Workspace/Study-TypeScript/dist/Ch_16/TsDemo03.js:60:13)
    at middleFunc (file:///F:/Java/Workspace/Study-TypeScript/dist/Ch_16/TsDemo03.js:57:5)
    at topFunc (file:///F:/Java/Workspace/Study-TypeScript/dist/Ch_16/TsDemo03.js:54:5)
    at file:///F:/Java/Workspace/Study-TypeScript/dist/Ch_16/TsDemo03.js:62:1
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
 */

//断言
console.assert((1 + 1) == 3, "1 + 1应该等于2");
//Assertion failed: 1 + 1应该等于2

//分组
console.group("第1章");
console.group("第1.1节");
console.log("第1.1节正文");
console.groupEnd();
console.group("第1.2节");
console.log("第1.2节正文");
console.groupEnd();
console.groupEnd();
/**
  第1章
  第1.1节
    第1.1节正文
  第1.2节
    第1.2节正文
 */

export{}