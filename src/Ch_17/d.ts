//访问该线程时计数+1
let visitCount = 0;

//SharedWorker时写法：不知道为啥找不到onconnect，先注释掉
// self.onconnect = function (connectEvent) {
//     let port = connectEvent.ports[0];
//     port.onmessage = function(event) {
//         visitCount++;
//         self.postMessage(visitCount);
//     }
// }


