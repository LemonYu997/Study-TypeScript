/**
 * 函数——函数的内置属性
 * arguments：函数的参数值
 * caller：调用当前函数的函数
 * this：函数的拥有者
 */

//arguments
function test1(n1: number, n2: number = 0, n3?: number, ...restParas: string[]) {
    console.log("共传入了多少个参数：" + arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(`第${i + 1}个参数值为${arguments[i]}`);
    }
}
test1(1);       //共传入了多少个参数：1 第1个参数值为1
test1(1, 2);    //共传入了多少个参数：2 第1个参数值为1 第2个参数值为2
test1(1, 2, 3); //共传入了多少个参数：3 第1个参数值为1 第2个参数值为2 第3个参数值为3
test1(1, 2, 3, "a", "b", "c");  //共传入了多少个参数：6 
// 第1个参数值为1
// 第2个参数值为2
// 第3个参数值为3
// 第4个参数值为a
// 第5个参数值为b
// 第6个参数值为c


//caller
let test2 = function() {
    //在严格模式下不能通过脚本访问arguments.callee,访问这个属性会报错
    // console.log(arguments.callee.caller);
}
let outFunc = function() {
    test2();
}
test2();    //在全局作用域下调用，会返回null
outFunc();  //f() {test2();}


//this关键字
function test3() {
    // console.log(`${this.name}`);
    console.log(`${this}`);
}
//基于运行环境判断使用globalThis还是window 需要导入相关扩展
// globalThis.name = "Alina"; 
// window.name = "Alina";
test3();

//以对象方法的形式调用函数时的this
function introduction() {
    console.log(`Hello ${this.name}`);
}

let person: {
    name: string,
    selfIntroduction: () => void
} = {
    name: "",
    selfIntroduction: null
};

person.name = "Rick";
person.selfIntroduction = introduction;
// introduction(); 报错 找不到name，因为全局对象中没有定义
person.selfIntroduction();  //Hello Rick

//箭头函数中的this
let person2: {
    name: string,
    selfIntroduction: () => void
} = {
    name: "",
    selfIntroduction: null
};
person2.name = "Rick";
person2.selfIntroduction = () => {
    // 此时的this指的是函数外部（即全局），由于没有生命name，会报错
    // console.log(`Hello ${this.name}`);
}

//约束或禁用this
//约束this的类型
function sum(this: {num1: number}, num2) {
    return this.num1 + num2;
}
let sumCalculator = {num1: 1, selfIntroduction: sum};
console.log(sumCalculator.selfIntroduction(2)); //3

//禁用this
function sum2(this:void, num2) {
    //void上不存在num1
    // return this.num1 + num2;
}


export{}