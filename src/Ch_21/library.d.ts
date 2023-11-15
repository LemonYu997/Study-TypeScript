//声明文件  定义library.js中的参数类型
declare function sum(a: number, b: number): number
export {sum}

/**
 * 声明形式通常有以下几种：
 * declare var/let/const：声明全局变量
 * declare function：声明全局函数
 * declare class：声明全局类
 * declare enum：声明全局枚举类型
 * declare namespace：声明对象
 * declare module：生命模块
 */

//声明全局变量和方法
declare const pi: number;
declare function calculatingArea(r:number): number;
export {pi, calculatingArea}

//声明全局枚举和函数
export declare const enum direction {
    up = 0,
    down = 1,
    left = 2,
    right = 3
}
export declare function printDirection(dirt: direction): void;

//使用接口或类型别名
interface Point {x: number, y: number}
//使用别名方式声明
// type Point = {x: number, y: number}
export declare function printPoint(point: Point): void;

//声明全局类
export declare class Person {
    get name(): string;
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
    selfIntroduction(): void;
}

//声明对象
export declare namespace excelHelper {
    let fileName: string;
    function readExcelCell(row: number, col: number): string;
}