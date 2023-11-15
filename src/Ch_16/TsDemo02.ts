/**
 * 内置引用对象——RegExp 正则表达式
 */
/**
 * RegExp常用匹配设置：
 *  i：查找时不区分大小写
 *  m：多行模式，查找到一行末尾时会继续查找
 *  g：全局模式，找到匹配字符串的全部内容
 * 两种创建方式：
 *  let 对象名称 = /正则表达式/匹配设置
 *  let 对象名称 = new RegExp("正则表达式", "匹配设置")
 */
//省略匹配设置
let regexp1a = /hello/;
let regexp1b = new RegExp("hello");

//使用1个匹配设置
let regexp2a = /hello/i;
let regexp2b = new RegExp("hello", "i");

//使用多个匹配设置
let regexp3a = /hello/im;
let regexp3b = new RegExp("hello", "im");

/**
 * 转义字符：
 *  \w 匹配任意英文字母
 *  \d 匹配任意数字
 */
//注意写法区别
let regexp4a = /\w\d/;
let regexp4b = new RegExp("\\w\\d");

/**
 * 在字符串方法中传入RegExp对象
 *  search()查找匹配到的位置索引
 *  replace()将匹配到的字符替换
 *  split() 将字符串按正则规则进行拆分
 *  match()查找字符串中与正则表达式匹配的文本
 * */
//search() 查找匹配到的位置索引
let s1 = "Hello world!";
let matchIndex = s1.search(/WORLD/i);
console.log(matchIndex);    //6 在第7个字符处匹配到world

//replace()将匹配到的字符替换
let s2 = "Hello SOMEONE! Goodbye Someone!";
let newS21 = s2.replace(/someone/i, "Nick");
//不是全局模式 只会替换首个匹配到的文本
console.log(newS21); //Hello Nick! Goodbye Someone!

//全局模式，替换全部匹配到的文本
let newS22 = s2.replace(/someone/ig, "Nick");
console.log(newS22);    //Hello Nick! Goodbye Nick!

//split() 将字符串按正则规则进行拆分
let s3 = "watches, feet, photos, boxes, children, stories, men, cities";
//匹配规则，一个逗号和一个空格
let reg3 = /, /;
console.log(s3.split(reg3)); //['watches', 'feet', 'photos', 'boxes', children', 'stories', 'men', 'cities']
console.log(s3.split(", ")); //['watches', 'feet', 'photos', 'boxes', children', 'stories', 'men', 'cities']

//match()查找字符串中与正则表达式匹配的文本
let s4 = "watches, feet, photos, boxes, children, stories, men, cities";
//非全局模式，找到以es结尾的单词
let reg41 = /\w+es/; 
console.log(s4.match(reg41));
/**
 * 输出以下内容
 * [
 *   'watches',
 *   index: 0,
 *   input: 'watches, feet, photos, boxes, children, stories, men, cities',
 *   groups: undefined
 * ]
 */
//返回匹配到的字符串
console.log(s4.match(reg41).toString());    //watches

//全局模式
let reg42 = /\w+es/g;
console.log(s4.match(reg42).toString());    //watches,boxes,stories,cities

/**
 * 直接使用RegExp对象
 *  test() 验证
 *  exec() 查找
 */
//test() 是否有匹配项
let regE1 = /World/i;
console.log(regE1.test("Hello world!"));    //true
console.log(regE1.test("Hello guys!"));     //false

//exec() 查找匹配的文本 
//非全局模式只会找到首个匹配文本
let s5 = "watches, feet, photos, boxes, children, stories, men, cities";
let reg51 = /\w+es/;
let result1 = reg51.exec(s5);
console.log(`${result1.toString()} (index: ${result1.index})`); //watches (index: 0)

//全局模式只会找到所有匹配文本
let reg52 = /\w+es/g;
let result2;
while ((result2 = reg52.exec(s5)) != null) {
    console.log(`${result2.toString()} (index: ${result2.index})`);
    // watches (index: 0)
    // boxes (index: 23)
    // stories (index: 40)
    // cities (index: 54)
}


export{}