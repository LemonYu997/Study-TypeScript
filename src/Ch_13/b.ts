//转移导出 将其他模块的导出在本模块再次导出
export {a} from "./a.js"

//转移导出并不会导入该模块
// console.log(a); //找不到a 报错