# My UI

一个类似于 Naive UI 的 Vue 3 组件库，基于 TypeScript，支持主题定制。

## 特性

- 🛠️ 基于 Vue 3 和 TypeScript 开发
- 🎨 可定制的主题系统，支持亮色和暗色模式
- 📦 丰富的高质量组件
- 📚 详尽的文档和使用示例
- 🔍 完整的类型定义
- 🧩 基于 monorepo 结构，每个组件都是独立的包

## 安装

```bash
# 使用 npm
npm install @my-ui/ui

# 使用 yarn
yarn add @my-ui/ui

# 使用 pnpm
pnpm add @my-ui/ui
```

## 快速开始

### 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyUI from '@my-ui/ui'

const app = createApp(App)

app.use(MyUI)

app.mount('#app')
```

### 按需引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { UButton, UInput, UForm, UFormItem } from '@my-ui/ui'

const app = createApp(App)

app.component(UButton.name, UButton)
app.component(UInput.name, UInput)
app.component(UForm.name, UForm)
app.component(UFormItem.name, UFormItem)

app.mount('#app')
```

## 主题定制

My UI 提供了灵活的主题定制功能，你可以通过以下方式自定义主题：

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyUI, { createTheme, lightTheme } from '@my-ui/ui'

const app = createApp(App)

app.use(MyUI)

// 创建自定义主题
createTheme({
  ...lightTheme,
  common: {
    ...lightTheme.common,
    primaryColor: '#ff0000', // 自定义主色
  }
})

app.mount('#app')
```

## 组件

My UI 提供了丰富的组件，包括但不限于：

- 基础组件：Button、Input、Form 等
- 数据展示组件：Table、Pagination 等
- 反馈组件：Modal、Message 等
- 导航组件：Menu、Tabs 等

## 开发

### 环境要求

- Node.js >= 16
- pnpm >= 7

### 安装依赖

```bash
pnpm install
```

### 开发文档

```bash
pnpm --filter @my-ui/docs dev
```

### 开发组件

```bash
pnpm --filter @my-ui/* build
```

## 项目结构

```
my-ui/
├── packages/               # 组件包
│   ├── my-ui/             # 主包，导出所有组件
│   ├── components/         # 各个独立组件
│   │   ├── button/
│   │   ├── input/
│   │   ├── form/
│   │   └── ...
│   ├── theme/              # 主题相关
│   └── utils/              # 工具函数
├── docs/                   # VitePress 文档
├── pnpm-workspace.yaml     # workspace 配置
├── package.json            # 根目录配置
└── tsconfig.json           # TypeScript 配置
```

## 贡献指南

欢迎贡献代码，提交 issue 或 pull request。

## 许可证

[MIT](LICENSE)
