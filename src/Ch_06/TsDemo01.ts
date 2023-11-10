/**
 * 引用类型：
 *  原始值：存储在 stack 栈中的数据，直接存储在变量的存储空间中
 *  引用值：存储在 heap 堆中的对象，存储在变量中的值是一个指针，指向实际存储对象的内存地址
 */

//原始值——值的复制
let number1 = 7;
let number2 = number1;  //复制的是值而不是引用
//修改number1，number2不会变
number1 = 8;
console.log(number2);   //7

let bool1 = true;
let bool2 = bool1;      //复制的是值而不是引用
bool1 = false;
console.log(bool2);     //false

//引用值——对象引用
let object1 = {property1: 1};
let object2 = object1;  //复制的是地址引用值
object1.property1 = 2;
console.log(object2.property1); //2 会跟随改变

let array1 = ["a", "b", "c"];
let array2 = array1;    //复制的是地址引用值
array1[1] = "x";
console.log(array2);    //[ 'a', 'x', 'c' ]

//如果重新赋值，会指向新的地址，之前的就不会改变
object2 = {property1: 3};
array2 = ["x", "y", "z"];
//之前的不会改变
console.log(object1);   //{ property1: 2 }
console.log(array1);    //[ 'a', 'x', 'c' ]

/**
 * 值的传递
 */
//对原始类型来说，传参之后，函数内的是新值，修改不会影响原先的值
let n1 = 7;
function testNumber(para: number) {
    para = 8;
}
testNumber(n1);
console.log(n1);    //7 
let b1 = true;
function testBool(para: boolean) {
    para = false;
}
testBool(b1);
console.log(b1);    //true

//对引用类型来说，传入的是地址值，修改会影响原先的值
let o1 = {property: 1};
function testObject(para: any) {
    para.property = 2;
}
testObject(o1);
console.log(o1);    //{ property: 2 }
let ar1 = ["a", "b", "c"];
function testArray(para: string[]) {
    para[1] = "x";
}
testArray(ar1);
console.log(ar1);   //[ 'a', 'x', 'c' ]

/**
 * 值的比较
 */
//原始值会比较值本身
let num1 = 7;
let num2 = 7;
console.log(num1 == num2);  //true
let bb1 = true;
let bb2 = true;
console.log(bb1 == bb2);    //true

//引用值会比较地址
let obj1 = {property: 1};
let obj2 = {property: 1};
console.log(obj1 == obj2);  //false
let obj3 = obj1;
console.log(obj1 == obj3);  //true
obj1.property = 5;  
console.log(obj1 == obj3);  //true  比较的是地址，属性值改变也不影响

/**
 * 常量 修改时会引起编译错误
 */
const nn1 = 7;
const bl1 = true;
// nn1 = 5; 报错
// bl1 = false; 报错

//const修饰的引用地址不能变，但是属性可以变
const oo1 = {property: 1};
const arr1 = ["a", "b", "c"];
oo1.property = 2;   //属性值可以变
arr1[1] = "x";      //属性值可以变
//引用值变会报错
// oo1 = {property: 1}; 报错
// arr1 = ["a"];    报错

export{}