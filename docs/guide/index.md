# 介绍

My UI 是一个基于 Vue 3 的组件库，类似于 Naive UI，使用 TypeScript 开发，支持主题定制。

## 特性

- 🛠️ **基于 Vue 3 和 TypeScript 开发**：使用最新的 Vue 3 Composition API 和 TypeScript 开发，提供完整的类型支持。
- 🎨 **可定制的主题系统**：灵活的主题系统，支持自定义主题和暗色模式。
- 📦 **丰富的组件**：提供丰富的高质量组件，满足各种业务需求。
- 📚 **详尽的文档**：提供详细的 API 文档和使用示例，帮助你快速上手。
- 🔍 **完整的类型定义**：所有组件都提供完整的 TypeScript 类型定义，提供良好的开发体验。
- 🧩 **基于 monorepo 结构**：每个组件都是独立的包，可以单独安装和使用。

## 安装

使用包管理器安装 My UI：

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

## 示例

这是一个简单的示例，展示了如何使用 My UI 的按钮组件：

```vue
<template>
  <div>
    <u-button>默认按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="error">错误按钮</u-button>
  </div>
</template>
```

## 浏览器兼容性

My UI 支持所有现代浏览器，包括：

- Chrome
- Firefox
- Safari
- Edge

不支持 Internet Explorer。

## 贡献

欢迎贡献代码，提交 issue 或 pull request。

## 许可证

[MIT](https://github.com/yourusername/my-ui/blob/main/LICENSE)
