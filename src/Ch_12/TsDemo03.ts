/**
 * 联合类型与交叉类型
 * 联合类型 |
 * 交叉类型 &
 */

//联合类型 可以使用多个类型赋值
type NumberOrString = number | string;
let n: NumberOrString;
n = "hello";
n = 1234;

//联合类型可以为任意类型
type A = NumberOrString | (() => void) | number[] | {x: string};
let a: A;
a = 1234;
a = "hello";
a = function () {};
a = [1, 2, 3];
a = {x: "hello"};

//类型不明确时无法执行具体操作
function connnection(a: string | boolean, b: string | boolean) {
    //编译错误，+ 号不能应用在 string | boolean 类型上
    // return a + b; 报错

    //使用断言后才能进行操作
    if (typeof a == "boolean") {
        return a && b;
    } else {
        return a + b;
    }
}

//对象联合类型赋值时，必须要完全满足其中的某个对象类型结构
type Bird = {
    name: string;
    wings: string;
    legs: number;
}
type Fish = {
    name: string;
    gills: string;
    fishScale: boolean;
}
type BirdOrFishOrBoth = Bird | Fish;

let b: BirdOrFishOrBoth;
//可以是Bird类型结构
b = {
    name: "swallow",
    wings: "Small wings",
    legs: 2
}
//可以使Fish类型结构
b = {
    name: "goldFish",
    gills: "small gill",
    fishScale: true
}
//可以即是Bird又是Fish
b = {
    name:"bird fish",
    gills: "big gill",
    wings: "big wings",
    legs: 2,
    fishScale: true
}
//可以完全满足Fish结构，部分满足Bird结构
b = {
    name: "flying gish",
    gills: "big gill",
    fishScale: true,
    legs: 2
}
//可以完全满足Bird结构，部分满足Fish结构
b = {
    name: "swiming bird",
    wings: "big wings",
    legs: 2,
    fishScale: false
}

//如果没有至少满足其中一个结构，会报错
// b = {name: "false"} 报错


//交叉类型 &
//编译器会认为是同时符合交叉类型的所有子类型
//不存在的类型，编译器认为是never
type NumberAndString = number & string;
//never不能用数字赋值 
// let c: NumberAndString = 1; 报错

//用在对象、接口，表示交叉类型拥有所有各自的全部成员
interface Colorful {
    color: string
}
interface Circle {
    radius: number;
    rolling: () => void;
}

type ColorfulAndCircle = Colorful & Circle;
let test: ColorfulAndCircle = {
    color: "red",
    radius: 5,
    rolling: function () {console.log("圆环滚动中！")}
}

//缺少属性就会报错
// test = {
//     name: "a"
// }

//以下类型等同于 {x: number, y: number} | {z: number}
type T = {x: number} & {y: number} | {z: number}


export{}