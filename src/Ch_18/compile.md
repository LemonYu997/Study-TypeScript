# 编译命令

查看帮助和版本：
```shell
tsc --help
tsc --help --all

tsc --version
```

先进入文件路径下：
```shell
cd .\src\Ch_18
```

直接编译指定文件：
```shell
tsc HelloWorld.ts
```

同时编译多个文件：
```shell
tsc .\a.ts .\b.ts
```

# 编译选项

通过`--outDir`指定输出路径：
```shell
tsc .\a.ts .\b.ts --outDir output
```

通过`--outFile`指定输出文件的名称：
```shell
tsc .\a.ts .\b.ts --outFile c.js  
```

通过`--target`指定编译的ES版本：
```shell
tsc a.ts --target es6
```

通过`--module`指定使用的模块（默认es6）：
```shell
tsc a.ts --module commonjs
```

通过`--removeComments`声明编译后移除注释：
```shell
tsc a.ts --removeComments
```

# 编译调试命令

`--noEmit`：编译检查，不会输出JS文件

`--watch`：进入观察模式，修改文件自动编译

# 类型检查命令

`--strict`：开启严格检查，相当于开启所有检查选项

`--alwaysStrict`：按照ES定义的严格模式编译文件，js文件增加`use strict`代码

`--strictNullChecks`：检查某个对象的属性或方法时是否可能为null或undefined
```ts
interface User {
    name: string;
    age?: number;
}
function printUserInfo(user: User) {
    //错误TS2532: user.age可能值为'undefined'
    console.log(`I am ${user.name}, I am ${user.age.toString()} old.`)
}
```

`--strictBindCallApply`：函数传参和声明不一致时发生编译错误
```ts
function printString(str: string) {
    return console.log(str);
  }

printString.call(this, "x");

//错误TS2345: boolean类型的值不可分配给string类型的参数
printString.call(this, false);
```

`--strictFunctionTypes`：对函数参数严格检查，如果类型不兼容，会报错
```ts
function sayHello(name: string) {
    console.log("Hello, " + name);
}
type StringOrNumberFunc = (numOrStr: string | number) => void;
//错误TS2322：不能将类型"(name: string) => void"分配给类型"StringOrNumberFunc"。参数
//"name"和"numOrStr" 的类型不兼容
let func: StringOrNumberFunc = sayHello;
func(10);
```

`--strictPropertyInitialization`：检查是否为类的各个属性设置了默认值，未设置将报错
```ts
class User {
    name: string;
    userType = "user";
    //phoneNumber不会引起编译错误，因为显式声明中的类型包含undefined，所以允许默认值为undefined
    phoneNumber: string | undefined;
    //错误TS2564: "age"属性既没有设定初始值，也没在构造函数中赋值
    age: number;
    constructor(name: string) {
        this.name = name;
    }
}
```

`--noImplicitAny`：不允许任意参数隐式推断为any
```ts
function printArrayLength(array) {
    //错误TS7006: 参数"array"隐式具有"any"类型
    console.log(array.length);
}
printArrayLength(42);
```

`--noImplicitThis`：不允许this可以隐式推断为any
```ts
function selfIntroduction() {
    //"this"隐式具有"any"类型，因为它没有类型声明
    console.log(`My name is ${this.name}`);
}
　
let user = {
    name: "harry",
    selfIntroduction: selfIntroduction
}
　
user.selfIntroduction();
```

`--useUnkonwnInCatchVariables`：通过类型断言或类型防护使用unknown类型会报错
```ts
try {
    //...
}
catch (err) {
    //错误TS2571: 对象的类型为'unknown'
    console.log(err.message);
}
```
解决方案：
```ts
try {
    //...
}
catch (err: any) {
    console.log(err.message);
}
```

# 查看配置

执行以下命令，查看编译时会执行的配置（不会真的执行编译）：
```shell
tsc --showConfig
```

# 编译指定子项目

要确定`src`路径下已配置好`tsconfig.json`
```shell
tsc --build src --verbose
```

`tsc --build`还支持以下选项，使用前必须搭配`--build`：
- `--verbose`：用于输出详细的日志
- `--dry`：显示将要执行的操作，但不真的执行，缩写为`-d`
- `--clean`：删除制定项目的输出，缩写为`-f`
- `--force`：强制把所有项目当做非最新版本对待