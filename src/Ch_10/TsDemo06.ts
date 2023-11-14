/**
 * 类——静态成员
 */
//静态成员的声明与访问
class Logger {
    static version = "1.0";
    static writeLog(logContent: any) {
        console.log(logContent);
    }
}

//可以直接访问，不需要创建实例
console.log(Logger.version);        //1.0
Logger.version = "2.0";
Logger.writeLog("error occars.")    //error occars.

//创建实例访问会报错
let logger = new Logger();
// logger.version = "3.0"; 报错


//静态成员的继承
class DBLogger extends Logger {}

//子类能够继承父类的静态成员
console.log(DBLogger.version);      //2.0 第14行修改了
DBLogger.writeLog("error occars.")  //error occars.

//如果更改父类成员，子类会一并更改
Logger.version = "3.0";
console.log(Logger.version);        //3.0
console.log(DBLogger.version);      //3.0

//只修改子类，父类不会变
DBLogger.version = "4.0"
console.log(Logger.version);        //3.0
console.log(DBLogger.version);      //4.0


//静态代码块
class ThreadClass {
    static maxThreadCount: number;

    static {
        if (globalThis.toString() == "[object window]") {
            ThreadClass.maxThreadCount = 1;
        } else {
            ThreadClass.maxThreadCount = 10;
        }
    }
}

//Node.js环境下输出10，浏览器环境下输出1
console.log(ThreadClass.maxThreadCount);    //10

export{}