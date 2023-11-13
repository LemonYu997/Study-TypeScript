/**
 * 接口与对象——接口的合并
 *  1、接口继承
 *  2、交叉类型
 *  3、声明合并
 */

//接口继承
interface Animal {
    name: string,
    age: number,
    eat: (food: string) => void
}

interface Bird extends Animal {
    wings: string,
    fly: () => void
}

interface Eagle extends Bird {
    attack: (target: Animal) => void
}

let eagle: Eagle = {
    age: 1,
    name: "Hedwig",
    wings: "Eagle wings",
    eat: function (food: string) {
        console.log(`${this.name}正在吃${food}`);
    },
    fly: function () {
        console.log("飞行中");
    },
    attack: function (target: Animal) {
        console.log(`${this.name}正在攻击${target.name}`);
    }
}

// 交叉类型 使用&连接多个类型
interface Colorful {
    color: string
}
interface Cicle {
    radius: number,
    rolling: () => void
}

type ColorfulCircle = Colorful & Cicle;
let circle: ColorfulCircle = {
    color: "red",
    radius: 5,
    rolling: function () {
        console.log("圆环滚动中！");
    }
}

//声明合并 同名接口自动合并
interface Person {
    name: string
}
interface Person {
    introduction: () => void
}

let person: Person = {
    name: "Shark",
    introduction: function () {
        console.log(`My name is ${this.name}`);
    }
}

/**
 * 接口合并冲突
 * 合并时存在名称相同但类型不同的属性和方法
 */
//接口继承的冲突
interface AnimalI {
    //声明时兼容多个类型可以避免冲突
    name: string | number,
    eat: (food: string) => void
}

interface WhiteMouseI extends AnimalI {
    //父接口有同名但不同类型的属性，发生冲突
    //声明时兼容多个类型可以避免冲突
    name: number,
    //参数类型不一致时会出现冲突，可以兼容多个类型
    eat: (food: AnimalI | string) => void
}

//交叉类型的冲突
interface A {
    // name: string,
    sum: (a: number, b: number) => number
}

interface B {
    // name: number,
    sum: (a: string, b: string, c: string) => string
}

//交叉后 name 变为never类型
type C = A & B;
//不能将类型string分配给never类型 报错
// let o1: C = {name: "a"}; 报错
let o2: C = {
    //编译可以通过，但实际使用会出现问题
    sum: function(): any {
        return "";
    }
}

export{}