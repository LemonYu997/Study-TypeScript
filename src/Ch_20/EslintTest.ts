let a: number = 1;
let b: boolean = true;

function isequal(a: any, b: any) {
    return a = b;
}

console.log(isequal(a, b));

/**
  未修改规则前进行Eslint检查后：
  1:5   error  'a' is never reassigned. Use 'const' instead  prefer-const
  2:5   error  'b' is never reassigned. Use 'const' instead  prefer-const
  4:21  error  Unexpected any. Specify a different type      @typescript-eslint/no-explicit-any
  4:29  error  Unexpected any. Specify a different type      @typescript-eslint/no-explicit-any

  错误1：a没有再次赋值，可以用const关键字声明
  错误2：b没有再次赋值，可以用const关键字声明
  错误3：可以推断出参数a为数值类型，可以移除any声明
  错误4：可以推断出参数b为布尔类型，可以移除any声明

  修改规则后进行Eslint检查：
  4:21  error    Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  4:29  error    Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  8:1   warning  Unexpected console statement              no-console
 */