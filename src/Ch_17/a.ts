//调用多行程
console.time("多线程——主线程占用时长");
let runTimes = 300000000;
let worker = new Worker("/dist/Ch_17/b.js");
//onmessage接收消息
worker.onmessage = function(event) {
    console.log("计算结果：" + event.data); //计算结果：44999999767108860
}
//postMessage发送消息
worker.postMessage(runTimes);               //Worker线程占用时长: 21649.9697265625 ms
console.timeEnd("多线程——主线程占用时长");  //多线程——主线程占用时长: 0.071044921875 m


//捕获线程错误 onerror
let worker2 = new Worker("/dist/Ch_17/c.js");
worker2.onmessage = function (event) {
    console.log(`Result is ${event.data}`);
};
worker2.onerror = function (event) {
    console.log("message: " + event.message);   //message: Uncaught Error: Something wrong!
    console.log("filename:" + event.filename);  //filename:http://127.0.0.1:8080/dist/Ch_17/c.js
    console.log("lineno:" + event.lineno);      //lineno:3
}
// worker2.postMessage(null);

//关闭线程
worker.terminate();

//共享worker线程 不知道d.ts中为啥找不到onconnect，先注释掉
// let worker3 = new SharedWorker("/dist/Ch_17/d.js");
// let worker4 = new SharedWorker("/dist/Ch_17/d.js");

// function showmsg(event) {
//     //使用 Worker时会各算各的，只输出1
//     //使用 SharedWorker时会综合计算
//     console.log("访问d.js次数：" + event.data);
// }

// worker3.port.onmessage = showmsg;
// worker4.port.onmessage = showmsg;

// worker3.port.postMessage("");
// worker4.port.postMessage("");

//线程间数值传递
let worker5 = new Worker("/dist/Ch_17/e.js");
let person1 = {name: "Nick", age: 17, isMale: true};
worker5.onmessage = function (event) {
    console.log(event.data);    //{"name": "Worker", "age": 17, "isMale": true}
    console.log(person1);       //{"name": "Nick", "age": 17, "isMale": true}
}
worker5.postMessage(person1);