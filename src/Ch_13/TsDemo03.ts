/**
 * 模块与命名空间——命名空间
 * ES6之前会用这种方式实现内部模块功能
 * 之后可能会废弃，仅作了解
 */

//声明命名空间 每个命名空间都有独自的作用域
namespace SpaceA {
    let a: number = 1;
    function test() {};
}

namespace SpaceB {
    let a: string = "";
    function test(text: string) {
        console.log(text);
    }
}

let a: boolean = true;
function test(num: number) {}

//导出命名空间成员，给其他地方使用
namespace Space1 {
    export let a: string = "hello";
    export function test(text: string) {
        console.log(a + text);
    }
}

namespace Space2 {
    console.log(Space1.a);  //hello
    Space1.test("world");   //helloworld
}

console.log(Space1.a);      //hello
Space1.test("world");       //helloworld

//一次声名多个命名空间
namespace Space3.Space4 {
    export let b: string = "hello";
}
//以上写法相当于
namespace Space3 {
    export namespace Space4 {
        export let a: string = "hello";
    }
}

console.log(Space3.Space4.b);   //hello


//使用命名空间别名
import B = Space3.Space4.b;
console.log(B);     //hello

//引用另一个文件的命名空间
/// <reference path="g.ts" />
// console.log(SpaceG.g);


//命名空间也支持声明合并
namespace Space5 {
    export let a: string = "hello";
}
namespace Space5 {
    export function test(text: string) {
        console.log(text);
    }
}
console.log(Space5.a);  //hello
Space5.test("world");   //world


export{}