/**
 * 类——类的声明
 *  1、基本声明
 *  2、创建对象
 */

//class 声明类
class Person {
    name: string;
    age: number;
    //一个类只支持一个构造函数，如果没写会默认有一个无参构造函数
    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }
    introduction(): void {
        console.log(`My name is ${this.name}, I'm ${this.age} years old`);
    }
}

//创建对象实例
let person1: Person = new Person("Rick", 24);
person1.introduction(); //My name is Rick, I'm 24 years old
let person2: Person = new Person("Shark", 31);
person2.introduction(); //My name is Shark, I'm 31 years old


//一个类只支持一个构造函数，如果没写会默认有一个无参构造函数
class Animal {
    type: string
}

let animal: Animal = new Animal();
animal.type = "Prime";

export {}