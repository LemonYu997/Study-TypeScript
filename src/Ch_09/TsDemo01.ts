/**
 * 接口与对象——对象的声明
 */

/**
 * 对象的声明
 *  1、一般形式
 *  2、声明在函数或数组中
 *  3、使用类型别名声明对象
 *  4、使用接口声明对象
 */
//一般形式
let myPhone = {
    system: "ios 15",
    ram: 8,
    size: 6.4,
    model: "8 plus",
    turnOn: function (){
        console.log(`${this.system}欢迎界面`);
    },
    sendMessage: function (receiver: string, message: string): void {
        console.log(`发送短信中...接收人：${receiver}；短信内容：${message}`);
    },
    makeCall: function (receiver: string): void {
        console.log(`拨打电话中...接听人：${receiver}`);
    }
}

//该手机的内存大小为8GB，尺寸为6.4，型号为8 plus
console.log(`该手机的内存大小为${myPhone.ram}GB，尺寸为${myPhone.size}，型号为${myPhone.model}`);
myPhone.turnOn();   //ios 15欢迎界面
myPhone.sendMessage("12388888888", "今天天气很好！");   //发送短信中...接收人：12388888888；短信内容：今天天气很好！
myPhone.makeCall("12388888888");    //拨打电话中...接听人：12388888888

//适用对象类型字面量声明对象
let person1: {
    firstName: string, 
    lastName: string, 
    selfIntroduction: () => void
};

//对象的结构必须严格与声明一致，否则会报错
person1 = {
    firstName: "Rick",
    lastName: "Zhang",
    selfIntroduction: function () {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}

//将对象声明在函数或数组中
function introduction(person: {firstName: string, lastName: string}) {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
}

let array1: {firstName: string, lastName: string} [] = [
    {firstName: "Rick", lastName: "Zhang"},
    {firstName: "Alina", lastName: "Zhao"}
];

//使用类型别名声明对象 给类型起一个新名字
type Person2 = {
    firstName: string,
    lastName: string
}

function introduction2(person: Person2) {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
}

let array2: Person2[] = [
    {firstName: "Rick", lastName: "Zhang"},
    {firstName: "Alina", lastName: "Zhao"}
]


//使用接口声明对象
interface Person3 {
    firstName: string,
    lastName: string
}

function introduction3 (person: Person3) {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
}

let array3: Person3[] = [
    {firstName: "Rick", lastName: "Zhang"},
    {firstName: "Alina", lastName: "Zhao"}
]

/**
 * 重载方法：
 *  1、重载签名形式
 *  2、同名方法形式
 */
//重载签名
let combineCaculator1: {
    name: string,
    combine: {
        (a: boolean, b: boolean): boolean
        (a: string, b: string): string
        (a: number, b:number): number
    }
}

//同名方法
let combineCaculator2: {
    name: string,
    combine(a: boolean, b: boolean): boolean,
    combine(a: string, b: string): string,
    combine(a: number, b: number): number
}

//在实现时都必须兼容前边声明的类型
combineCaculator1 = {
    name: "Combine Caculator",
    combine: function (a: any, b: any): any {
        if (typeof a == 'boolean' && typeof b == 'boolean') {
            return a || b;
        } else {
            return a + b;
        }
    }
}

//可以用对应的方式进行调用
console.log(combineCaculator1.combine(1, 2));       //3
console.log(combineCaculator1.combine("a", "b"));   //ab
console.log(combineCaculator1.combine(true, false));//true







export{}