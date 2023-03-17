import * as fs from 'fs';
import * as path from 'path';

function parseEnv() {
  // 引入文件
  const localEnv = path.resolve('.env');
  // 引入线上环境文件
  const prodEnv = path.resolve('.env.production');
  // 引入开发环境文件
  const devEnv = path.resolve('.env.development');

  if (
    !fs.existsSync(localEnv) &&
    !fs.existsSync(prodEnv) &&
    !fs.existsSync(devEnv)
  ) {
    throw new Error('缺少环境配置文件');
  }

  // 判断当前环境是否存在开发环境 .env 文件，若存在则为开发环境，若不存在则为生产环境并返回对应的 filePath
  const filePath = fs.existsSync(devEnv) ? devEnv : prodEnv;
  console.log(filePath);
  return { path: filePath };
}

export default parseEnv();
