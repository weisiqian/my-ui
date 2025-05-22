const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 获取 docs 目录的绝对路径
const docsDir = path.join(__dirname, 'docs');

// 检查 docs 目录是否存在
if (!fs.existsSync(docsDir)) {
  console.error('docs 目录不存在！');
  process.exit(1);
}

// 切换到 docs 目录
process.chdir(docsDir);

// 检查 node_modules 目录是否存在
if (!fs.existsSync(path.join(docsDir, 'node_modules'))) {
  console.log('正在安装依赖...');
  execSync('pnpm install', { stdio: 'inherit' });
}

// 启动 VitePress 开发服务器
console.log('正在启动 VitePress 开发服务器...');
execSync('pnpm dev', { stdio: 'inherit' });
