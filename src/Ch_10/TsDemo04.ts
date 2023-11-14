/**
 * 类——实现接口与继承抽象类
 *  1、实现接口
 *  2、继承抽象类
 */

//实现接口
interface IUser {
    //注意和类不同，使用 , 隔开
    name: string,
    login: (pwd: string) => boolean
}

class GuestUser implements IUser {
    name: string;
    login(pwd: string) {
        return true;
    }
    authority: string = "guest";
}

class NormalUser implements IUser {
    _name: string;
    get name() {
        return this.name;
    }
    set name(value: string) {
        this._name = value;
    }
    login(pwd: string) {
        return pwd == "123456";
    }
    authority: string = "normal";
}

//接口支持多继承（实现）
interface Checkable {
    check: () => void;
}
interface Clickable {
    click: (x: number, y: number) => void;
}

class Checkbox implements Checkable, Clickable {
    check() {
        console.log(`this checkbox has been checked！`);
    }
    click(x: number, y: number) {
        console.log(`click location ${x}, ${y}`);
    }
}

//接口可声明可选成员，类实现时可以不实现该成员
interface A {
    x: string,
    y?: number
}

class B implements A {
    x: string;
}

let b: B = new B();
b.x = "abc";
//没有实现y 报错
// b.y = 1;    


//继承抽象类
abstract class Person {
    //抽象类中的抽象属性和方法本身不能有实现
    // abstract a = 10; 报错
    //抽象属性和抽象方法只需要声明
    abstract age: number;
    abstract get name();
    abstract myLocation();
    //可以在抽象类中声明普通成员方法
    selfIntroduction() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old, I live in ${this.myLocation()}`);
    }
}

class ChinesePerson extends Person {
    age: number;
    familyName: string;
    givenName: string;
    province: string;
    city: string;
    constructor(familyName: string, givenName: string, age: number, province: string, city: string) {
        super();
        this.familyName = familyName;
        this.givenName = givenName;
        this.age = age;
        this.province = province;
        this.city = city;
    }
    //实现抽象类中的抽象方法
    get name() {
        return this.familyName + this.givenName;
    }
    myLocation() {
        return `${this.city}, ${this.province}`
    }
}

let person1: ChinesePerson = new ChinesePerson("Zhou", "Jun", 28, "ChengDu", "Sichuan");
person1.selfIntroduction(); //My name is ZhouJun, I'm 28 years old, I live in Sichuan, ChengDu

//抽象类本身不能实例化，只能由继承抽象类的类实例化
// let person: Person = new Person();   报错

//继承抽象类的类必须实现抽象属性和方法
// class AmericanPerson extends Person {}  报错


export{}