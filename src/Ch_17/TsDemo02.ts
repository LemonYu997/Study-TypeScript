/**
 * 服务器多线程——Worker Threads
 */
console.time("单线程——主线程占用时长");
let runTimes = 300000000;
let result = 0;
for (let i = 0; i < runTimes; i++) {
    result += i;
}
console.timeEnd("单线程——主线程占用时长");  //单线程——主线程占用时长: 297.62ms
console.log("计算结果：" + result);         //计算结果：44999999767108860

//服务器多线程
import { Worker } from "worker_threads";
console.time("多线程——主线程占用时长");
let myWorker = new Worker("./f.js");
myWorker.on("message", function(data) {
    console.log("计算结果：" + data);
});
//错误处理
myWorker.on("error", function(error) {
    console.log(error instanceof Error);
    console.log(error);
})
myWorker.postMessage(runTimes);
console.timeEnd("多线程——主线程占用时长");  //多线程——主线程占用时长: 1.916ms

/**
 * 其他事件：
 *  exit：退出事件
 *  online：上线事件
 *  messageerror：消息错误事件
 */
myWorker.on("exit", (exitCode) => {})
myWorker.on("online", () => {})
myWorker.on("messageerror", (error) => {})

//关闭子线程
myWorker.terminate();

/**
 * on：注册永久性事件
 * once：注册一次性事件
 */
let workerOnce = new Worker("./f.js");
workerOnce.once("message", function(data) {
    console.log("once事件，计算结果：" + data);
});
workerOnce.on("message", function(data) {
    console.log("on事件，计算结果：" + data);
});
workerOnce.postMessage(runTimes);
workerOnce.postMessage(runTimes);

export{}