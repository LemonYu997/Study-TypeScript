/**
 * 接口与对象——特殊对象
 *  1、object
 *  2、Object
 *  3、{}
 */

//object 表示非原始类型
//非原始类型：number、string、boolean、bigint、symbol以外的类型
let a: object;
//number属于原始类型，会报错
// a = 1; 报错
a = {name: "hello"};
a = [0, 1, 2, 3];
a = function () {console.log("Hello")};
a = new Date();

//在使用时需要先将其转为具体的类型，否则会报错
let b: object = [0, 1, 2, 3];
let c: object = {name: "hello"};
let d: object = function () {console.log("Hello")};

//object本身没有length属性，会报错
// console.log(b.length);  报错

//需要将其转换
console.log((b as number[]).length);        //4
console.log((c as {name: string}).name);    //hello

//object可以用在函数参数声明里，在不想使用any的时候
function handleObject(obj: object) {};

//Object 对象类型，可以转换为原始类型，不推荐使用
let o: Object;
o = 1;
o = 1n;
o = true;
o = "";
o = Symbol();
o = {name: "hello"};
o = [0, 1, 2, 3];
o = function() {console.log("hello")};
o = new Date();

//{} 没有属性或方法的初始空对象 不推荐
let oo = {}

export{}