console.log(`output->home`, process.env.HOME);
console.log(`output->process.env.PATH`, process.env.PATH);

// 这些是 Node.js 中每个模块都有的特殊变量
console.log("__filename:", __filename); // 当前文件的绝对路径
console.log("__dirname:", __dirname); // 当前文件所在目录
console.log("module:", module); // 当前模块信息
console.log("exports:", exports); // 模块导出对象
