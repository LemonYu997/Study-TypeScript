//服务器多线程执行逻辑
import { parentPort } from "worker_threads";

parentPort.on("message", function(data) {
    console.time("子线程占用时长");
    let result = 0;
    for (let i = 0; i < data; i++) {
        result += i;
    }
    parentPort.postMessage(result);
    console.timeEnd("子线程占用时长");
});

//关闭自身
parentPort.close()
