/**
 * 类——类的成员
 *  1、属性
 *  2、方法
 *  3、构造函数
 *  4、存取器
 *  5、索引成员
 */

//类的属性
class Guest {
    //属性的初始值
    name: string = "unknown";
    //只读属性 声明后不可再次赋值
    readonly authority: string = "GuestUser";

    //构造方法中也能指定初始值
    constructor() {
        this.name = "unname";
        //构造函数可以给只读属性赋值
        this.authority = "GuestABC";
    }
}

let guest1: Guest = new Guest();
//属性重新赋值
guest1.name = "Shark";


//方法
class Person {
    name: string;

    //this表示当前对象的属性或方法，而不是方法中的局部变量
    constructor(name: string) {
        this.reName(name);
    }
    reName(target: string) {
        this.name = target;
    }
    hitddenIdentity() {
        this.reName("");
    }
}

let person1: Person = new Person("A");
person1.reName("Nick");

//方法可以声明为重载方法
class CombineCaculator {
    combine(a: boolean, b: boolean): boolean;
    combine(a: string, b: string): string;
    combine(a: number, b: number): number;
    combine(a: any, b: any): any {
        if (typeof a == "boolean" && typeof b == "boolean") {
            return a || b;
        } else {
            return a + b;
        }
    }
}

let combineCaculator1 = new CombineCaculator();
console.log(combineCaculator1.combine(1, 2));       //3
console.log(combineCaculator1.combine("a", "b"));   //ab
console.log(combineCaculator1.combine(true, false));//true


//构造函数
class Task {
    taskName: string;
    prority: number;
    infomations: string[];

    //构造函数也能使用默认参数、可选参数和剩余参数
    constructor(taskName: string = "default task",
        prority?: number, ...infomations: string[]) {
        this.taskName = taskName;
        this.prority = prority;
        this.infomations = infomations;
    }
}

let task1: Task = new Task("Function1 Coding", 1, "需要单元测试", "需要重构", "用指定方法实现");

//构造函数支持重载
class Task2 {
    taskName: string;
    prority: number;
    dueDate: Date;

    constructor(taskName: string);
    constructor(taskName: string, prority: number);
    constructor(taskName: string, dueDate: Date);
    constructor(taskName: string, prorityOrdueDate?: number | Date) {
        this.taskName = taskName;
        if (prorityOrdueDate) {
            if (typeof prorityOrdueDate == "number") {
                this.prority = prorityOrdueDate;
            } else {
                this.dueDate = prorityOrdueDate;
            }
        }
    }
}

let task2 = new Task2("coding task");
let task3 = new Task2("design task", 1);
let task4 = new Task2("testing task", new Date(2023, 11, 13));


//存取器 get 和 set 方法 处理复杂逻辑
class Person2 {
    _name: string;
    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}

let person2 = new Person2();
person2.name = "Rick";
console.log(person2.name);  //Rick

//使用存取器处理复杂逻辑
class ExamResult {
    _level: string;
    isCheat: boolean = false;

    get level() {
        if (this.isCheat) {
            return "E";
        } else {
            return this._level;
        }
    }

    set level(value: string | number) {
        if (typeof value == "string") {
            this._level = value;
        } else {
            if (value > 90) this._level = "A";
            else if (value > 75) this._level = "B";
            else if (value > 60) this._level = "C";
            else this._level = "D";
        }
    }
}

let examl: ExamResult = new ExamResult();
examl.level = 99;
console.log(examl.level);   //A
examl.isCheat = true;
console.log(examl.level);   //E

//只读存取器和只写存取器
class Person3 {
    _name: string;
    get name() {
        return this._name;
    }
}
let person3 = new Person3();
//只读存取器，只有get方法，没有set方法，不能写入，报错
// person3.name = "Rick"; 报错

class Person4 {
    _name: string;
    set name(value: string) {
        this._name = value;
    }
}
let person4: Person4 = new Person4();
person4.name = "Rick";
//只写存取器，没有get方法，输出undefined
console.log(person4.name);  //undefined


//索引成员 字符串索引和数值索引
class Person5 {
    name: string;
    age: number;
    [index: string]: any;
}

let person5 = new Person5();
person5.name = "Kiddy";
person5.age = 17;
//因为字符串索引，可以定义以下属性
person5.height = 180;
person5.company = "Newbility Inc";
person5.introduction = function() {
    console.log(`My name is ${this.name}`);
}

export {}