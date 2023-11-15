/**
 * 内置引用对象——Date
 * 内置引用对象分类：
 *  1、普通内置对象：使用前需要实例化，如Date和RegExp
 *  2、单例内置对象：全局只有一个实例，可以直接使用，如Math、globalThis、console
 */

//创建日期
//以计算机当前时间创建Date
let now = new Date();
console.log(now);   //2023-11-15T06:34:36.828Z

//创建指定时间 (年，月，日?，小时?，分钟?，秒?，毫秒?)
//月份从0开始计数，11表示12月
let date1 = new Date(2023, 10, 23, 13, 1, 59);
console.log(date1); //2023-11-23T05:01:59.000Z

//创建指定毫秒值的对象（时间戳计数，从UTC 1970/1/1 0:0:0开始)
let date2 = new Date(100000000000);     //1973-03-03T09:46:40.000Z
console.log(date2);
let date3 = new Date(-100000000000);    //1966-10-31T14:13:20.000Z
console.log(date3);

//通过日期字符串创建Date对象
let date4 = new Date("Wed Nov 23 2022 13:01:59 GMT+0800 (中国标准时间)");
console.log(date4); //2022-11-23T05:01:59.000Z


/**
 * 日期格式化，支持的输入格式：
 * ISO日期：
 *  yyyy-MM-dd
 *  yyyy-MM-ddTHH:mm:ss
 * 短日期：
 *  MM/dd/yyyy
 * 长日期
 *  MMM dd yyyy
 * 完整日期
 *  www MMM dd yyyy HH:mm:ss GMT+HHmm (说明)
 */
let d1 = new Date("2023-11-15");
console.log(d1.toUTCString());  //Wed, 15 Nov 2023 00:00:00 GMT
let d2 = new Date("11/15/2023");
console.log(d2.toUTCString());  //Tue, 14 Nov 2023 16:00:00 GMT
let d3 = new Date("Nov 15 2023");
console.log(d3.toUTCString());  //Tue, 14 Nov 2023 16:00:00 GMT

/**
 * Date对象的方法：
 *  toString()：转为完整日期格式
 *  toDateString()：只取日期部分
 *  toTimeString()：只取时间部分
 *  toLocaleString()：本地格式
 *  toLocaleDateString()：本地格式，只取日期
 *  toLocaleTimeString()：本地格式，只取时间
 *  toUTCString()：完整的UTC字符串
 *  toISOString()：转为ISO格式
 */
let present = new Date();
console.log(present.toString());            //Wed Nov 15 2023 14:47:49 GMT+0800 (香港标准时间)
console.log(present.toDateString());        //Wed Nov 15 2023
console.log(present.toTimeString());        //14:47:49 GMT+0800 (香港标准时间)
console.log(present.toLocaleString());      //2023/11/15 14:47:49
console.log(present.toLocaleDateString());  //2023/11/15
console.log(present.toLocaleTimeString());  //14:47:49
console.log(present.toUTCString());         //Wed, 15 Nov 2023 06:47:49 GMT
console.log(present.toISOString());         //2023-11-15T06:47:49.010Z

/**
 * 获取日期局部值
 *  getFullYear()   返回yyyy
 *  getMonth()      返回月份，0是1月，11是12月
 *  getDate()       返回1~31日
 *  getDay()        返回星期 0~6
 *  getHours()      返回小时 0~23
 *  getMinutes()    返回分钟数 0~59
 *  getSeconds()    返回秒数 0~59
 *  getMilliseconds() 返回毫秒数 0~999
 *  getTime()       返回时间戳
 * 
 * 设置局部值方法，setXXX()同上
 */
console.log(present.getFullYear());         //2023
console.log(present.getMonth());            //10
console.log(present.getDate());             //15
console.log(present.getDay());              //3
console.log(present.getHours());            //14
console.log(present.getMinutes());          //52
console.log(present.getSeconds());          //29
console.log(present.getMilliseconds());     //745
console.log(present.getTime());             //1700031149745


present.setFullYear(2022);

export{}