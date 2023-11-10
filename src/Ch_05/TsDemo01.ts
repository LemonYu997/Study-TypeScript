/**
 * 流程控制-选择语句
 * 1、if    if...else...    if...else if
 * 2、switch
 */

//选择语句 if
let score = 61;
if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}

//隐式转换 会转为true
if ("hello") {
    console.log("World")
}

let month = 8;
if (month <= 3) {
    console.log("第1季度");
} else if (month <= 6) {
    console.log("第2季度");
} else if (month <= 9) {
    console.log("第3季度");
} else {
    console.log("第4季度");
}


let year = 4;
let salary = 12000;
let bonus: number;
if (year < 2) {
    if (salary < 5000) {
        bonus = salary;
    } else {
        bonus = salary * 1.2;
    }
} else if (year >= 2 && year < 5) {
    if (salary < 10000) {
        bonus = salary * 1.5;
    } else {
        bonus = salary * 1.7;
    }
} else {
    //工作满5年
    if (salary < 15000) {
        bonus = salary * 2;
    } else {
        bonus = salary * 2.2;
    }
}
console.log(`年终奖为${bonus}`);    //年终奖为20400

//switch
let today = 6;
switch (today) {
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    case 4:
        console.log("星期四");
        break;
    case 5:
        console.log("星期五");
        break;
    case 6:
        console.log("今天是休息日");
        console.log("星期六");
        break;
    case 7:
        console.log("今天是休息日");
        console.log("星期日");
        break;
}

let a = 1;
switch (a) {
    case 1:
        console.log("1");   //1
    case 2:
        console.log("2");   //2 没有break，会顺序执行
    case 3:
        console.log("3");   //3 没有break，会顺序执行
    case 4:
        console.log("4");   //4 没有break，会顺序执行
        break;
    case 5:
        console.log("5");
        break;
}

let day = 1;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("工作日");  //工作日
        break;
    case 6:
    case 7:
        console.log("休息日");
        break;
    default:
        console.log("此星期不存在！");
        break;
}

export{}