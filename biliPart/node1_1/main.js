import { readFile, writeFile, appendFile } from 'node:fs/promises';

const data = await readFile('./data.json', 'utf-8');

// writeFile 覆盖写入
// await writeFile('./data.json', JSON.stringify(jsonData, null, 2));

// appendFile 追加写入
await appendFile('./data.json', 'this is append');

console.log(`output->data`, data)