//历史遗留JS代码 a、b没有声明类型
import { excelHelper } from './library';
export function sum(a, b) {
    return a + b;
}

export const pi = 3.14159;
export function calculatingArea(r) {
    return r * r * pi;
}

export function printDirection(dirt) {
    switch(dirt) {
        case 0:
            console.log("up");
            break;
        case 1:
            console.log("down");
            break;
        case 2:
            console.log("left");
            break;
        case 3: 
            console.log("right");
            break;
    }
}

export function printPoint(point) {
    console.log(`location is ${point.x}, ${point.y}`);
}

export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get name() {
        return `${this.firstName} ${this.lastName}`
    }
    selfIntroduction() {
        console.log(`My name is ${this.name}`);
    }
} 

export var excelHelper;
(function (excelHelper) {
    excelHelper.fileName = "D:\\x.xls";
    function readExcelCell(row, col) {
        return cellValue;
    }
    excelHelper.readExcelCell = readExcelCell;
})(excelHelper || (excelHelper = {}))