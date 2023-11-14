/**
 * 类——其他事项
 *  1、类初始化顺序
 *  2、参数属性
 *  3、类表达式
 *  4、不严格类
 *  5、instanceof
 */

/**
 * 类的初始化顺序
 *  1、初始化父类属性，赋予默认值
 *  2、执行父类构造参数
 *  3、初始化子类属性，赋予默认值
 *  4、执行子类构造函数
 */
class A {
    name = "A";
    constructor() {
        console.log("this is " + this.name);
    }
}
class B extends A {
    name = "B";
    constructor() {
        super();
        console.log("this is " + this.name);
    }
}

//先执行父类构造函数，再执行子类构造函数
let b = new B();    //this is A this is B


//参数属性 将成员属性写在构造函数参数中
//不推荐 不易读
class Task {
    constructor(
        public taskName: string,
        protected prority: number,
        private informations: string[]
    ) { }
}

let task: Task = new Task("Function Coding", 1, ["需要单元测试", "需要重构", "用指定算法实现"])
console.log(task.taskName); //Function Coding


//类表达式 使用表达式的形式声明类 不推荐
const Person = class {
    constructor(public name: string) { }
    selfIntroduction() {
        console.log(`I'm ${this.name}`);
    }
}

//编译器会认为Person是变量不是类型，不能在声明时指定类型
// let person: Person = new Person("Nick"); 报错

//只能用以下方式声明
let person = new Person("Nick")
person.selfIntroduction();  //I'm Nick

//不够严格的类 不推荐
class A1 {
    x: string;
    y: string;
}
class B1 {
    x: string;
    y: string;
    z: boolean;
}

//B类包含A类的所有成员，即可使用B类实例赋给A类变量
let c: A1 = new B1();

//一个特殊用法 
class EmptyClass {}

function test(obj: EmptyClass) {
    console.log(obj);
}

//函数参数用一个空类型声明，可以用任意类型作为参数
//以下代码不会引起编译错误
test({});   //{}
test(test); //[Function: test]
test({a: 1});   //{ a: 1 }
class NormalClass {
    name: string;
}
test(new NormalClass());    //NormalClass {}


//instanceof 判断一个对象是否为该类的实例
class A2 {}
class B2 {}
let a = new A();
console.log(a instanceof A);    //true
console.log(a instanceof B);    //false


export{}