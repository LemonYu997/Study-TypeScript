/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: { "^.+\\.ts?$": "ts-jest" },   //自定义转换设置，由ts-jest来处理ts文件
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]  //指定要测试文件类型扩展名
};