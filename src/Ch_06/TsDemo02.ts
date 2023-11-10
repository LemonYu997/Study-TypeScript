/**
 * 引用类型分类：
 * 1、复合引用类型：
 *      数组
 *      元组
 *      函数
 *      对象
 *      类实例
 * 2、内置引用类型
 *      Date对象
 *      RegExp对象
 *      Math对象
 */

//声明数组
let animals: string[] = ["cat", "dog", "bird"];

//声明元组 （固定长度数组）
let sex: [string, string] = ["male", "female"];

//声明函数
function printArrayContent(arr: string[]): void {
    console.log(`共有${arr.length}个元素，分别为${arr}`);
}
printArrayContent(animals); //共有3个元素，分别为cat,dog,bird
printArrayContent(sex);     //共有2个元素，分别为male,female

//声明对象
let person: {name: string, age: number, selfIntroduction: () => void} = {
    name: "Hello World",
    age: 111,
    selfIntroduction: function () {
        console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    }
}
person.selfIntroduction();  //My name is Hello World, I'm 111 years old.

//声明类
class Phone {
    system: string;
    ram: number;
    rom: number;
    constructor(theSystem: string, theRam: number, theRom: number) {
        this.system = theSystem;
        this.ram = theRam;
        this.rom = theRom;
    }
    bootPrompt(distanceInMeters: number = 0) {
        console.log(`System: ${this.system}, RAM:${this.ram}GB, ROM:${this.rom}GB`);
    }
}
let adroidPhone: Phone = new Phone("Adroid", 8, 256);
adroidPhone.bootPrompt();   //System: Adroid, RAM:8GB, ROM:256GB


//内置引用类型，可以直接使用，不用定义
let currentDate = new Date(2023, 11, 10);
//月份从0开始，0表示1月
console.log(`当前时间位${currentDate}`);    //当前时间位Sun Dec 10 2023 00:00:00 GMT+0800 (香港标准时间)

let patt1 = new RegExp("e");
console.log(patt1.test("free"));    //true


export{}