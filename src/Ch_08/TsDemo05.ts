/**
 * 函数——函数的内置方法
 * apply()，调用指定函数，并指定一个this对象，传入数组参数
 * call()，调用指定函数，并指定一个this对象，逗号传参
 * bind()，根据当前函数创建一个新的函数实例，并给这个函数实例指定一个this对象
 */

//apply和call
let person1 = {name: "张三"};
let person2 = {name: "李四"};
function travel1(from: string, to: string) {
    console.log(`${this.name}将从${from}出发到${to}旅游`);
}
// travel1("广州", "上海");    //name没有在全局中定义，报错
travel1.apply(person1, ["广州", "上海"]);   //张三将从广州出发到上海旅游
travel1.call(person2, "广州", "上海");      //李四将从广州出发到上海旅游

//bind
let person3 = {name: "张三"};
function travel2(from: string, to: string) {
    console.log(`${this.name}将从${from}出发到${to}旅游`);
}
let personTravel = travel2.bind(person3);
// travel2("广州", "上海");    //name没有在全局中定义，报错
personTravel("广州", "上海");   //张三将从广州出发到上海旅游

//函数间this的传递
let person4 = {name: "张三"};
function travel3(from: string, to: string) {
    console.log(`${this.name}将从${from}出发到${to}旅游`);
    //将this传递给另一个函数
    travel4.call(this);
}
function travel4() {
    console.log(`旅行人是${this.name}`);
}
let person4Travel = travel3.bind(person4);
person4Travel("广州", "上海");  //张三将从广州出发到上海旅游 旅行人是张三
travel3.apply(person4, ["广州", "上海"]);   //张三将从广州出发到上海旅游 旅行人是张三
travel3.call(person4, "广州", "上海");  //张三将从广州出发到上海旅游 旅行人是张三



export{}