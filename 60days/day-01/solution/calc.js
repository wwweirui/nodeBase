/**
 * 编写一个 calc.js，支持通过命令行参数进行计算：

node calc.js add 3 5      # 输出: 8
node calc.js subtract 10 3 # 输出: 7
node calc.js multiply 4 6  # 输出: 24
node calc.js divide 15 3   # 输出: 5
要求：

使用 process.argv 解析参数
处理除以零的错误
处理无效操作符的错误
使用不同的退出码来表示成功(0)和失败(1)
 * 
 * 
 */

// 0: 可执行文件 1：当前脚本文件路径 2:命令行参数
// process.argv.slice(2)  从第三个参数开始，获取所有参数
const [operator, num1, num2] = process.argv.slice(2);

if (!operator || num1 === undefined || num2 === undefined) {
  console.error("请输入操作符和两个数字");
  console.log("例如：node calc.js add 3 5");
  process.exit(1);
}
const a = Number(num1);
const b = Number(num2);

if (isNaN(a) || isNaN(b)) {
  console.error("请输入数字");
  console.log("例如：node calc.js add 3 5");
  process.exit(1);
}
let res;
switch (operator) {
  case "add":
    res = a + b;
    break;
  case "subtract":
    res = a - b;
    break;
  case "multiply":
    res = a * b;
    break;
  case "divide":
    if (b === 0) {
      console.error("除数不能为0");
      console.log("例如：node calc.js divide 15 3");
      process.exit(1);
    }
    res = a / b;
    break;
  default:
    console.error("无效操作符");
    console.log("例如：node calc.js add 3 5");
    process.exit(1);
    break;
}
console.log(res);
process.exit(0);
