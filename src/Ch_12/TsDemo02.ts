/**
 * 进阶类型——类型别名 type
 */
//type基本用法
//type 类型别名 = 类型描述;
type Person = {
    firstName: string,
    lastName: string
};

function introduction(person: Person) {
    console.log(`My name is ${person.firstName} ${person.lastName}`);
}

let array1: Person[] = [
    {firstName: "Rick", lastName: "Zhang"},
    {firstName: "Alina", lastName: "Zhao"}
]

introduction(array1[0]);    //My name is Rick Zhang
introduction(array1[1]);    //My name is Alina Zhao

//类型别名不仅可用于对象类型，还能用在任何类型
type CustomString = string;
type CustomNumber = number;
type CustomFuc = () => void;
type CustomNumberArray = number[];
//用类型别名定义新的类型别名
type CustomType = CustomString;

let a: CustomString = "a";
let b: CustomNumber = 1;
let c: CustomFuc = function () {console.log("hello")};
let d: CustomNumberArray = [1, 2, 3];
let e: CustomType = "b";

/**
 * 类型别名和接口的区别：
 */
/**
 *  相同点：
 *  1、都可以描述对象
 *  2、都允许扩展 extends
 */
type A = {x: number};
class B implements A {x: number};
interface C extends A {};

/**
 *  不同点：
 *  1、类型别名能用在任何类型，接口只能用在对象类型
 *  2、接口能够声明合并，类型别名不同
 */
interface Test {
    name: string;
}
interface Test {
    introduction: () => void;
}

export{}