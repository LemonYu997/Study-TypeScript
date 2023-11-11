/**
 * 数组与元组——元组
 * 可以声明不同类型，但长度必须指定
 */
let tuple1: [number, number] = [100, 200];
let tuple2: [string, number, boolean] = ["a", 1, true];

//修改元组值时，其值必须和定义完全对应
// tuple2 = ["a", 1];  //报错
// console.log(tuple2[3]); //报错 超出索引范围

//可选元素和剩余元素
//类型后跟?表示该元素不是必须的
let tuple3: [number, number, string?, number?] = [100, 200];
tuple3 = [100, 200, "a"];
tuple3 = [100, 200, "a", 400];

//可选元素 用...表示可以任意数量元素(甚至没有)
let tuple4: [number, ...string[]] = [1];
tuple4 = [1, "a"];
tuple4 = [1, "a", "b", "c"];

//可选元素和剩余元素混用
let tuple5: [number, boolean?, ...string[]] = [1];
tuple5 = [1, true];
tuple5 = [1, true, "a", "b", "c"];

/**
 * 元组的方法
 * 数组的方法元组都能使用，可以绕过元组规则
 */
let tuple6: [string, number, boolean] = ["a", 1, true];
tuple6.push(4); //末尾添加元素4
console.log(tuple6);    //[ 'a', 1, true, 4 ]
tuple6.shift(); //移除首位元素
console.log(tuple6);    //[ 1, true, 4 ]
tuple6.unshift(2);  //首位添加元素2
console.log(tuple6);    //[ 2, 1, true, 4 ]

//元组可以转为数组 但数组不能转为元组
let array: number[] = [1, 2];
let tuple: [number, number] = [3, 4];
// tuple = array; 报错
array = tuple;
console.log(array); //[ 3, 4 ]

export{}