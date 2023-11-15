/**
 * 异步任务——Promise对象
 */
/**
 * Promise有以下三种状态：
 *  1、pending：初始状态，异步任务执行中
 *  2、resolved：结果一，异步任务执行成功
 *  3、rejected：结果二，异步任务执行失败
 * 封装异步操作的语法：
 *  let 对象名称 = new Promise(自定义异步函数);
 * 自定义异步函数必须为以下类型：
 *  （resolve: (value: unknown) => void,
 *    reject: (reason?: any) => void) => void;
 */
import request from 'request';

//使用Promise封装Request框架发送HTTP请求
function GetHttpResponse(url) {
    return new Promise((resolve, reject) => {
        request(url, function(error, response, body) {
            if (!error) {
                if (response.statusCode == 200) {
                    resolve(body);
                } else {
                    reject(`http status code is ${response.statusCode}`)
                }
            } else {
                reject(error);
            }
        });
    });
};

//执行异步操作
//使用then()接收上一个Promise对象resolve()中的参数
GetHttpResponse("http://www.baidu.com").then(body => {
    //输出内容太多，先注释掉
    // console.log(body);
})

//如果then没有明确返回一个Promise对象，将会默认返回一个空的Prmoise对象
//可以实现流式编程
GetHttpResponse("http://www.baidu.com")
    .then(p => console.log("first then"))   //first then
    .then(p => console.log("second then"))  //second then
    .then(p => console.log("third then"));  //third then


//Promise使用catch处理Promise中reject错误
GetHttpResponse("http://xxxxxxx").then(body => {
    console.log(body);
}).catch(error => {
    //请求失败
    console.log("there is something wrong!");
    console.log(error);
});

//catch还可以处理前面任意then中的错误
GetHttpResponse("http://www.baidu.com").then(body => {
    console.log("first log");
}).then(p => {
    console.log("second log");
    throw new Error("something error!");
    console.log("third log");
}).then(p => {
    console.log("force log");   
}).catch(error => {
    console.log("there is something wrong!");
    // console.log(error);
    //catch完之后返回Promise对象，可以继续执行then方法
    return GetHttpResponse("http://www.baidu.com");
}).then(body => {
    // console.log(body as string);
});

//finally 最终都会执行的代码
GetHttpResponse("http://www.baidu.com")
    .then(p => {
        console.log("first then");
    }).catch(p => {
        console.log("first catch");
    }).finally(() => {
        console.log("first finally");
    }).then(p => {
        console.log("second then");
    }).catch(p => {
        console.log("second catch");
    }).finally(() => {
        console.log("second finally");
    })


//使用Promise.all()组合Promise对象
let promise1 = GetHttpResponse("http://www.baidu.com");
let promise2 = GetHttpResponse("http://www.bing.com");
let promise3 = GetHttpResponse("http://www.sougou.com");

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values[0]);
        console.log(values[1]);
        console.log(values[2]);
    }).catch(error => {
        console.log(error);
    });


//使用resolve()和reject()创建对应状态的Promise对象
let promise4 = Promise.resolve("hello");
promise4.then(p => console.log(p));     //hello

let promise5 = Promise.reject("something wrong");
promise5.catch(e => console.log(e));    //something wrong


export{}