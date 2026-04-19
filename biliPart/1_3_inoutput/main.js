// js in and output 

import readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const name = await rl.question('请输入姓名： \n');
console.log(`你好，${name}！`);

const year = await rl.question('请输入出生年份： \n');

const age = new Date().getFullYear() - year;

const answer = await rl.question(`你今年${age}岁了吗？(y/n) \n`);

if (answer.toUpperCase() === 'Y') {
    console.log(`welcome ${name} 你${age}年！`);
}
else {
    console.log(`ok ${name} 调整后，你今年${age - 1}岁！`);
}

rl.close();