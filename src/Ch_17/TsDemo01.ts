/**
 * 多线程编程——浏览器多线程 Web Worker
 *  postmessage(event)  向另一个线程消息
 *  onmessage(event)    接受另一个线程的消息
 */
//案例
console.time("单线程——主线程占用时长");
let runTimes = 300000000;
let result = 0;
for (let i = 0; i < runTimes; i++) {
    result += i;
}
console.timeEnd("单线程——主线程占用时长");  //单线程——主线程占用时长: 297.62ms
console.log("计算结果：" + result);         //计算结果：44999999767108860

//具体多线程案例请看a.ts

export{}