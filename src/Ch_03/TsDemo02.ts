/**
 * 字符串和转义符
 */

//字符串类型
let text1: string = "good morning";
let text2: string = "good afternoon";
//字符串hello "Alina"
let text3: string = 'hello "Alina"'
//字符串hello 'Rick'
let text4: string = "hello 'Rick'"

//跨行字符串 使用 ``
let morning: string = `good
morning
`
console.log(morning);
//输出
//good
//morning

let firstFriend: string = "Alina";
let secondFriend: string = "Rick";
//内嵌字符串表达式 
let hello: string = `hello ${firstFriend} and ${secondFriend}`;
console.log(hello);     //hello Alina and Rick

let c: number = 1;
let d: number = 2;
//内嵌字符串表达式 
let result: string = `${c} + ${d} = ${c + d}`
console.log(result);    //1 + 2 = 3    

/**
 * 常见转义字符：
 * \b：后退符
 * \f：换页符
 * \n：换行符
 * \r：回车符
 * \t：制表符
 * \v：垂直制表符
 * \'：单引号
 * \"：双引号
 * \\：反斜杠
 */
let emailMessage:string = "Hi Alina, \n\tPlease help to support for\"TypeScript\" training, thanks!";
console.log(emailMessage);
/**
 * Hi Alina,
        Please help to support for"TypeScript" training, thanks!
 */

//普通字符加 \ 会被忽略
console.log("\o\p\q");  //opq
console.log("opq");     //opq

export{}