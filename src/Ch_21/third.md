# 引用第三方JS

可能会出现以下情况：
- 第三方JS库自带声明文件
- 第三方JS库没有自带声明文件，但DefinitelyTyped仓库中有
- 完全没有声明文件，需要自行编写

# 使用自带声明的第三方库

安装redis脚本：
```shell
npm install redis
```

在`\node_modules\redis\dist`中可以看到其中自带`index.d.ts`声明文件

# 使用DefinitelyTyped声明文件库

DefinitelyTyped是一个开源的声明文件库，几乎涵盖了所有主流JS库

安装方式如下：
```shell
npm install @types/库名称
```

以Jquery为例：
```shell
npm install jquery @types/jquery
```

# 自己编写声明模块

以下案例，如果开启了strict严格模式，会发生编译错误
```ts
import request from 'request'

request('http://www.baidu.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) //显示百度首页的HTML源码
    }
})
```

可以创建`request.d.ts`声明文件解决：
```ts
declare module 'request' {
    export default function request(
        url: string,
        callback: (error: string, response: { statusCode: number }, body: string)
        => void
    ): void;
}
```

# 将js项目迁移到ts

在`tsconfig.json`中开启以下配置：
```json
{
  "compilerOptions": {
    "allowJs": true,
    /*需要指明输出目录，否则编译后的文件和源文件同名，无法输出文件*/
    "outDir": "dist",
    ...
  }
}
```