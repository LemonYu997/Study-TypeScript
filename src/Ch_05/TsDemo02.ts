/**
 * 流程控制-循环语句
 * 1、for
 * 2、while do...while
 * 3、for in, for of, foreach
 */

//for语句  (前置语句; 条件表达式; 后置语句)
let a = 1;
for (let i = 2; i <= 100; i++) {
    a += i;
    // console.log(a);
}

let text = "hello";
for (let i = 5; text; i++) {
    //每次减少一个字符
    text = text.slice(0, text.length - 1);
    console.log(text);
}

//while语句
let n1 = 1;
let i = 2;
while (i <= 100) {
    n1 += i;
    // console.log(n1);
    i++;
}

//do...while 语句
n1 = 1;
i = 2;
do {
    n1 += i;
    console.log(n1);
    i++;
} while (i <= 100);

do {
    console.log("executed!");
} while (false);

//break和continue关键字
for (let i = 1; i <= 3; i++) {
    if (i == 2) {
        break;
    }
    console.log(i);     //1 到2的时候就被中断了
}

for (let i = 1; i <= 3; i++) {
    if (i == 2) {
        continue;
    }
    console.log(i);     //1 3  2被跳过
}

export{}