# 引入扩展工具

ESlint：静态检查

Jest：单元测试

# Eslint

安装：
```shell
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

安装三个包的作用：
- eslint：ESLint的核心包
- @typescript-eslint/parser：ESLint代码解析器
- @typescript-eslint/eslint-plugin：ESLint插件

在根目录下生成`.eslintrc`配置文件：
```json
{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ]
}
```

配置忽略路径：
```json
node_modules
dist
testing
```

使用以下命令来进行检查：
```shell
npx eslint . --ext .ts
```

# Jest

安装：
```shell
npm install jest ts-jest @types/jest -D
```

安装包解释：
- jest：Jest核心包
- ts-jest：Jest针对TypeScript的预处理器
- @types/jest：Jest的TypeScript声明文件

创建Jest配置文件
```shell
npx ts-jest config:init
```

配置文件内容：
```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: { "^.+\\.ts?$": "ts-jest" },   
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
```

创建`JestTest.ts`:
```ts
export function sum(a: number, b: number) {
    return a + b;
}
```

创建`JestTest.test.ts`，Jest会自动识别.test.ts作为单元测试文件：
```ts
import { sum } from './JestTest';
　
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

编译后执行以下命令运行测试：
```shell
tsc
npx jest
```

注意`package.json`中的`type`配置应为`commonjs`