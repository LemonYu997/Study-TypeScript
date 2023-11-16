# 后端开发

常用后端开发框架：
- Express：基于Nodejs，常见
- Koa：极简后端框架
- NestJs：完备的企业级后端框架，支持面向对象编程和函数式编程，底层基于Express实现
- Hapi.js：基于Nodejs

## Express

安装：
```shell
npm install express cors
npm install @types/express @types/cors -D
```

`tsconfig.json`配置：
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

注意`package.json`的`type`得一致是`commonjs`

在`package.json`中注册start命令，可以快速启动

```json
  "scripts": {
    "start": "tsc && node ./dist/Ch_22/index.js"
  },
  "type": "commonjs",
```

# 前端开发

常用框架：

- React：起源于FaceBook，MVC模式开发Web应用，使用虚拟Dom技术
- Vue：数据驱动的Web界面渐进式轻量级MVVM框架，关注视图层
- AngularJS：谷歌开源，扩展了HTML语法，MVVM架构、模块化、双向绑定

## React

先创建`client-side`目录，再创建React App：
```shell
npx create-react-app client-side --template typescript
```

进入`client-side`目录下可以快速启动：
```shell
cd client-side
npm start
```

访问地址为：http://localhost:3000

安装axios：
```shell
npm install axios
```