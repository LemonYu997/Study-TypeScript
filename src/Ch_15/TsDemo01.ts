/**
 * 异步编程——回调函数
 */
import request from 'request';

//匿名回调函数
request('http://www.baidu.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //输出内容太多，先注释掉
        // console.log(body);
    }
}) 

//先输出了以下语句再收到上边回调函数的返回值
let a = "hello";
console.log(a); //hello

//常规声明函数
function receiveResponse(error, response, body) {
    if (!error && response.statusCode == 200) {
        //输出内容太多，先注释掉
        // console.log(body);
    }
}

request('http://www.baidu.com', receiveResponse);

/**
 * 计时器：
 * setTimeout()：在指定时间间隔后执行
 * setInterval()：一段时间间隔后重复执行
 * clearInterval()：清除计时器
 */
//setTimeout    2秒后执行以下函数
let myGreeting = setTimeout(function() {
    console.log("Hello world!");    //Hello world!
}, 2000);
//先执行以下输出
console.log("Main thread executed!");   //Main thread executed!

//使用常规声明函数，并指定参数值
function sayHello1(sombody) {
    console.log("Hello" + sombody + "!");
}
let myGreeting1 = setTimeout(sayHello1, 2000, " world"); //Hello world!

//setInterval
function sayHello2(sombody) {
    console.log("Hello" + sombody + "!");
}
//每2秒执行一次
let myGreeting2 = setInterval(sayHello2, 2000, " world");
//Hello world! Hello world! Hello world!

//清除上边计时器，不再循环输出
clearInterval(myGreeting2);

export{}