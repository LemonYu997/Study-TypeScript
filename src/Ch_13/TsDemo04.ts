/**
 * 声名合并 不推荐使用
 */

//类和接口合并
class Point {
    x: number;
}
interface Point {
    y: number;
}
let point: Point = new Point();
point.x = 1;
point.y = 1;

//枚举和命名空间合并
enum Color {
    red = 1,
    green = 2,
    blue = 3
}
namespace Color {
    export let yellow = 4;
    export function printName(color: Color) {
        console.log(Color[color]);
    }
}

console.log(Color.yellow);      //4
Color.printName(Color.red);     //red

//函数和命名空间合并
function Greeting(name: string): void {
    console.log(Greeting.prefix + name + Greeting.suffix);
}
namespace Greeting {
    export let prefix;
    export let suffix;
}
Greeting.prefix = "Hello ";
Greeting.suffix = ", Nice to meet you";
Greeting("Sam");    //Hello Sam, Nice to meet you


export{}