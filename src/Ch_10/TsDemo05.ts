/**
 * 类——成员的可访问性
 *  1、public
 *  2、protected
 *  3、private
 */

//public  可以类外调用
class Person1 {
    public age: number = 12;
    public get name() {
        return "Kiddy";
    }
    public location() {
        return "SiChuan";
    }
}

//类外调用
let person1: Person1 = new Person1();
person1.age = 17;
console.log(person1.name);      //Kiddy
console.log(person1.location());//SiChuan

//在子类中访问
class Talker1 extends Person1 {
    public selfIntroduction() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old, I live in ${this.location()}`);
    }
}

//protected 不能类外调用，只能本类或者子类调用
class Person2 {
    protected age: number = 12;
    protected get name() {
        return "Kiddy";
    }
    protected location() {
        return "SiChuan";
    }
}

let person2: Person2 = new Person2();
//类外调用 报错
// person2.age = 18;   报错

//子类可以调用
class Talker2 extends Person2 {
    public selfIntroduction() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old, I live in ${this.location()}`);
    }
}

let talker2 = new Talker2();
talker2.selfIntroduction(); //My name is Kiddy, I'm 12 years old, I live in SiChuan


//private 只能本类调用
class Person3 {
    private age: number = 12;
    private get name() {
        return "Kiddy";
    }
    private location() {
        return "SiChuan";
    }
    //只能本类调用
    public selfIntroduction() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old, I live in ${this.location()}`);
    }
}

let person3 = new Person3();
// 不能类外调用
// person3.age = 11; 报错

//子类也不能调用
class Talker3 extends Person3 {
    public selfIntroduction() {
        //无法调用 报错
        // console.log(`My name is ${this.name}, I'm ${this.age} years old, I live in ${this.location()}`);
    }
}


//可访问的兼容性
class User {
    private _name: string;
    
    public set name(value: string) {
        this._name = value;
    }
    //get 和 set的访问性不一致时会报错
    // protected get name() {
    //     return this.name;
    // }
}

//子类重写父类成员时，访问性不同也会报错
//但是可以将protectd升为public，这时不会报错
class A {
    private a: string;
    protected b: number;
    public c: boolean;
}
class B extends A {
    //访问性与父类不一致，报错
    // public a: string;

    //但是可以将protectd升为public，这时不会报错
    public b: number;
}

export{}