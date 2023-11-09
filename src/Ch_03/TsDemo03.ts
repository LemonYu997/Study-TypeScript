//枚举类型 默认从0开始
enum MonthOfYear1 {
    January,        //默认0
    February,       //1
    March,          //2
    April,
    May,
}

let month1: MonthOfYear1 = MonthOfYear1.March;
console.log(month1); //2

//手动赋值后，后序值会自动加1
enum MonthOfYear2 {
    January = 1,        
    February = 2,       
    March,          
    April,
    May,
}
let month2: MonthOfYear2 = MonthOfYear2.March;
console.log(month2); //3

//字符串枚举
enum MonthOfYear3 {
    January = "1月",        
    February = "2月",       
    March = "3月",          
    April = "4月",
    May = "5月",
}
let month3: MonthOfYear3 = MonthOfYear3.March;
console.log(month3); //3月

//正常情况下应谨慎使用枚举，以下示例不推荐使用
//异构枚举 不推荐
enum MonthEnum {
    January = 1,
    February = "2月",
    March = 3,
    April = "4月",
    May = 5,
}

//声明合并 不推荐
enum Answer {
    no = 0
}
enum Answer {
    yes = 1
}

let a1: Answer = Answer.yes;
let a2: Answer = Answer.no;

//索引查找 不推荐
enum Answer2 {
    no,
    yes
}
let inputString: string = "yes";
// let userAnswer: Answer2 = Answer2[inputString];
// console.log(userAnswer);

//反向映射 不推荐
enum Answer3 {
    no,
    yes
}
let nameOfyes: string = Answer3[Answer3.yes];
console.log(nameOfyes);


/**
 * 常量枚举
 */
const enum Answer4 {
    no,
    yes
}
let actualAnswer: Answer4 = Answer4.yes;

export{}
