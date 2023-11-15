/**
 * 异步函数 async/await
 */
//使用async创建异步函数，实际上返回的是Primise对象
async function hello() {
    return "hello world";
}
console.log(hello());   //Promise { 'hello world' }

//使用then
hello().then(p => {
    console.log(p);     //hello world
})

//await 暂停，直到后面的Promise返回结果后再继续执行
async function printHello() {
    let str = await hello();
    console.log(str);
}

printHello();               //再输出 hello world
console.log("executed");    //先输出 executed

//await 只能在顶层或者async代码块中使用，否则会报错
function test() {
    //await 不能用在这里 报错
    // await hello();
}

//在顶层使用await
console.log(await hello()); //hello world


//使用案例
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


//使用异步函数优化逻辑 不需要在外部创建接收对象
async function GetAllApiResponse() {
    //请求3个网址，并将其返回的内容存储到allBodys对象的属性中
    try {
        //在内部创建接收对象
        let allBodys: any = {};
        allBodys.baiduBody = await GetHttpResponse("http://www.baidu.com");
        console.log(allBodys.baiduBody);
        allBodys.bingBody = await GetHttpResponse("http://www.bing.com");
        console.log(allBodys.bingBody);
        allBodys.sogouBody = await GetHttpResponse("http://www.sogou.com");
        console.log(allBodys.sogouBody);
    } catch (err) {
        console.log("there is smothing wrong!");
        console.log(err);
    } finally {
        console.log("call api done!");
    }
}

GetAllApiResponse();


export{}

