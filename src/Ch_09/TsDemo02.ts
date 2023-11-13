/**
 * 对象与接口——对象属性和方法的修饰符
 *  1、可选修饰符   ?
 *  2、只读修饰符   readOnly
 *  3、索引签名     []
 */

//可选修饰符 
interface CalculationOf2Numbers1 {
    num1: number,
    //以下属性和方法是可选的
    num2?: number,
    calculate1?: () => number
}

let calculator1: CalculationOf2Numbers1;
calculator1 = {num1: 1};
calculator1 = {num1: 1, num2: 2};
calculator1 = {
    num1: 1,
    calculate1: function () {
        return this.num1;
    }
};
calculator1 = {
    num1: 1,
    num2: 2,
    calculate1: function () {
        return this.num1 + this.num2;
    }
};

//只读修饰符
interface CalculationOf2Numbers2 {
    readonly num1: number,
    readonly num2: number,
    readonly calculate2: () => number
}

const calculator2: CalculationOf2Numbers2 = {
    num1: 1,
    num2: 2,
    calculate2: function () {
        return this.num1 + this.num2;
    }
}

//报错，因为只读属性
// calculator2.num1 = 3;
// calculator2.calculate2 = function () {return 1};

/**
 * 索引签名
 *  1、字符串索引：任意数量的可选属性名称只能是字符串
 *  2、数值索引：任意数量的可选属性名称只能是数字
 */
//字符串索引
interface Person1 {
    name: string,
    age: number,
    //字符串索引，存储any类型，因此支持任意类型的可选属性和方法
    [index: string]: any
}

let person1: Person1 = {name: "Kiddy", age: 17};
let person2: Person1 = {name: "Shark", age: 15, height: 180};
let person3: Person1 = {name: "Annie", age: 10, height: 120, sex: "male"};
let person4: Person1 = {name: "Aiken", age: 25, height: 174, sayHello: function () {console.log("Hello!")}}

//数值索引
interface Person2 {
    name: string,
    age: number,
    //属性名称只能由数字组成，否则会编译错误
    [indexe: number]: any
}
let person5: Person2 = {name: "Kiddy", age: 17};
let person6: Person2 = {name: "Shark", age: 15, 1: 180};
let person7: Person2 = {name: "Annie", age: 10, 1: 120, 2: "male"};
let person8: Person2 = {name: "Aiken", age: 25, 1: 174, 2: function () {console.log("Hello!")}};
//编译错误 不能用字符串做属性名
// let person9: Person2 = {name: "Annie", age: 10, height: 120};    //报错

//索引会约束已有的属性
interface Person3 {
    name: string,
    //与索引不匹配，报错
    // age: number,
    [index: string]: string
}

interface Person4 {
    name: string,
    age: number,
    [index: string]: string | number
}

//其他支持索引的类型
//数组支持数值索引
interface StringArray {
    [index: number]: string
}
let array: StringArray = ["x", "y", "z"]


export{}