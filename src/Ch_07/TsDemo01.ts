/**
 * 数组与元组——数组
 */

//字符串数组
let array1: string[] = ["a", "b", "c", "d"];
//数值数组
let array2: number[] = [1,2,3,4,5];
//空数组
let array3: string[] = [];

//获取数组中的指定值
console.log(array1[1]); //b
console.log(array2[2]); //3
//获取数组中全部值
console.log(array1);    //[ 'a', 'b', 'c', 'd' ]

//获取数组自身属性——数组长度
console.log(array1.length); //4


/**
 * 数组遍历
 * for循环
 * for...in遍历  获取的是索引
 * for...of遍历 获取的是元素
 */
//for循环
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);     //a b c d
}

//for...in遍历  获取的是索引
for (let i in array1) {
    console.log(i);             //0 1 2 3
    console.log(array1[i]);     //a b c d
}

//for...of遍历 获取的是元素
for (let c of array1) {
    console.log(c);             //a b c d
}

/**
 * 数组转为字符串
 * toString()
 * join() 用指定分隔符相连
 */
let array4: string[] = ["a", "b", "c", "d"];
console.log(array4.toString()); //a,b,c,d
//用指定分隔符相连
console.log(array4.join("-"));  //a-b-c-d

/**
 * 添加和移除元素
 * unshift() 在首位添加字符
 * push() 在末尾添加字符
 * shift() 移除首位字符
 * pop() 移除末尾字符
 */
let array5: string[] = ["b", "c", "d"];
console.log(array5);    //[ 'b', 'c', 'd' ]
//在首位添加字符
array5.unshift("a")
console.log(array5);    //[ 'a', 'b', 'c', 'd' ]
//在末尾添加字符
array5.push("e");
console.log(array5);    //[ 'a', 'b', 'c', 'd', 'e' ]
//移除首位字符
array5.shift();
console.log(array5);    //[ 'b', 'c', 'd', 'e' ]
//移除末尾字符
array5.pop();
console.log(array5);    //[ 'b', 'c', 'd' ]

//一次添加和移除多个元素
array5.unshift("1", "2", "3");  
console.log(array5);    //[ '1', '2', '3', 'b', 'c', 'd' ]
array5.push("e", "f", "g"); 
console.log(array5);    //['1', '2', '3', 'b', 'c', 'd', 'e', 'f', 'g']


/**
 * 查找元素位置
 * indexOf()
 * lastIndexOf()
 */
let array6: string[] = ["a", "b", "c", "b"];
console.log(array6.indexOf("b"));       //1 第一个发现该元素的位置
console.log(array6.indexOf("d"));       //-1 没有找到时返回-1
console.log(array6.lastIndexOf("b"));   //3 最后一个出现该元素时的位置
console.log(array6.lastIndexOf("d"));   //-1 没有找到时返回的位置
//以下自定义函数用于判断当前元素值是否大于10
function myFunction(value) {
    return value > 10;
}
let numbers1: number[] = [4, 7, 9, 11, 15, 20];
//首个匹配的值是11，以下代码输出3
console.log(numbers1.findIndex(myFunction));    //3
let numbers2: number[] = [1, 2, 3];
//没有匹配的值，以下代码输出-1
console.log(numbers2.findIndex(myFunction));    //-1

/**
 * 数组排序
 * reverse() 反转数组
 * sort() 按字母顺序排序
 */
let array7: string[] = ["a", "x", "c"];
//反转数组
array7.reverse();
console.log(array7);    //[ 'c', 'x', 'a' ]
//数组排序 只会按顺序
array7.sort()
console.log(array7);    //[ 'a', 'c', 'x' ]

//sort()只会按字母顺序排序，对数字排序时会出问题
let array8 = [2, 5, 37, 11];
//会先将数字转为字符串再排序， 1xx < 2xx < 3xx < 4xx ...
array8.sort();
console.log(array8);    //[ 11, 2, 37, 5 ]

//想要根据数字排序，需要自定义排序规则
function sortNumber(value, nextValue) {
    return value - nextValue;
}
array8.sort(sortNumber);
console.log(array8);    //[ 2, 5, 11, 37 ]


/**
 * 数组裁剪与合并
 * splice() 裁剪并补充
 * concat() 合并
 * slice() 裁剪
 * reduce() 和reduceRight() 自定义合并
 */
//splice() 裁剪并补充
let array9 = ["a", "b", "c", "d"];
//从索引2开始，移除0个元素，并插入"c"和"d"
array9.splice(2, 0, "c", "d");
console.log(array9);    //[ 'a', 'b', 'c', 'd', 'c', 'd' ]
//从索引3开始，移除2个元素，不插入任何元素
array9.splice(3, 2);
console.log(array9);    //[ 'a', 'b', 'c', 'd' ]

//concat() 合并
let array10 = ["a", "b"];
let array11 = ["c", "d"];
let array12 = array10.concat(array11);
console.log(array10);   //[ 'a', 'b' ]
console.log(array12);   //[ 'a', 'b', 'c', 'd' ]
let array13 = array10.concat(array11, array12);
console.log(array13);   //['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']

//slice() 裁剪
let array14 = ["a", "b", "c", "d", "e"];
//从索引1处开始裁剪，返回被裁的部分
let array15 = array14.splice(1);
console.log(array14);   //[ 'a' ]
console.log(array15);   //[ 'b', 'c', 'd', 'e' ]

//reduce() 和reduceRight() 自定义合并
function myReduce(total, value) {
    return total + value;
}
let array16 = [5, 11, 23, 9];
//从左至右遍历，并将其合并为一个值
let sum = array16.reduce(myReduce);
console.log(sum);   //48


/**
 * 数组的筛选和迭代
 * forEach() 为每个元素调用一个函数
 * map() 为每个元素调用一个函数，并返回一个新数组
 * filter() 给每个数组调用一次筛选函数，筛选出符合指定条件的元素
 * find() 返回符合筛选条件的首个元素
 * every() 为每个元素调用一次筛选函数，判断是否全都符合条件
 * some() 为每个元素调用一次筛选函数，判断是否至少有一个符合条件
 */
//forEach()
function myForeach(value, index, array) {
    console.log(`当前值为${value}，索引号为${index}，遍历进度为${index + 1} / ${array.length}`);    
}
let array17 = ["a", "b", "c"];
array17.forEach(myForeach);
/**
 * 输出结果：
 * 当前值为a，索引号为0，遍历进度为1 / 3
 * 当前值为b，索引号为1，遍历进度为2 / 3
 * 当前值为c，索引号为2，遍历进度为3 / 3
 */

//map()
function myMap(value) {
    return Number(value);
}
let array18 = ["111", "222", "333"];
let array19 = array18.map(myMap);
console.log(array19);   //[ 111, 222, 333 ]

//find() 和 filter()
function myFilter(value) {
    return value > 10;
}
let array20 = [4, 7, 9, 11, 15, 20];
console.log(array20.filter(myFilter));  //[ 11, 15, 20 ]
console.log(array20.find(myFilter));    //11

//every() 和 some()
function myBool(value) {
    return value > 10;
}
let array21 = [9, 10, 11];
let array22 = [100, 200, 30];
let array23 = [1, 2, 3];
console.log(array21.every(myBool)); //false 只有部分满足，没有全部满足
console.log(array21.some(myBool));  //true 部分满足

console.log(array22.every(myBool)); //true
console.log(array22.some(myBool));  //true

console.log(array23.every(myBool)); //false
console.log(array23.some(myBool));  //false

/**
 * 只读数组
 * const关键字只能限定数组的地址不能改变，不能限制值是否改变
 * readonly声明数组只读，不能修改
 */
let array24: readonly string[] = ["a", "b", "c"];
console.log(array24[1]);    //b
// array24.push("d");  //报错 不能添加
// array24[1] = "x";   //报错 不能修改


/**
 * 多维数组 矩阵
 */
let array25: string[][] = [["a", "b"], ["x", "y"]];
let array26: number[][][] = [[[1, 2], [7,8]], [[100, 101], [700, 701]]];
console.log(array25);   //[ [ 'a', 'b' ], [ 'x', 'y' ] ]
console.log(array26);   //[ [ [ 1, 2 ], [ 7, 8 ] ], [ [ 100, 101 ], [ 700, 701 ] ] ]


export{}