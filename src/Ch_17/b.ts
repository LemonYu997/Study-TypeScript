//onmessage 接收消息
self.onmessage = function(event) {
    console.time("Worker线程占用时长");
    let result = 0;
    for (let i = 0; i < event.data; i++) {
        result += i;
    }
    //postMessage发送消息
    self.postMessage(result);
    console.timeEnd("Worker线程占用时长");  //Worker线程占用时长: 21649.9697265625 ms
};

//关闭子线程自身
self.close();