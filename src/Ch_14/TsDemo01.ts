/**
 * 错误处理
 */

//捕获并处理 try-catch-finally
let a: any = null;
try {
    console.log("开始赋值");        //开始赋值
    //因为a不存在name属性，会抛异常
    let b: any = a.name;
} catch {
    console.log("赋值错误");        //赋值错误
} finally {
    console.log("结束赋值");        //结束赋值
}

/**
 * 错误对象具有以下两个属性：
 * name：错误名称
 * message：错误描述信息
 */
let c = null;
try {
    let d = c.name;
} catch (err) {
    console.log(err.name);      //TypeError
    console.log(err.message);   //Cannot read properties of null (reading 'name')
}

//自定义错误
class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CustomError";
        this.message = message;
    }
}

try {
    //抛出错误
    throw new CustomError("产生了自定义错误");
} catch (err: any) {
    console.log(err instanceof CustomError);    //true
    console.log(`${err.name}: ${err.message}`); //CustomError: 产生了自定义错误
}


export{}