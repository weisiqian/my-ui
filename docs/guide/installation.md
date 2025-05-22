# 安装

本节将介绍如何安装 My UI。

## 环境要求

- Node.js >= 16.0.0
- Vue >= 3.2.0

## 使用包管理器

我们推荐使用包管理器（如 npm、yarn 或 pnpm）安装 My UI。

### npm

```bash
npm install @my-ui/ui
```

### yarn

```bash
yarn add @my-ui/ui
```

### pnpm

```bash
pnpm add @my-ui/ui
```

## 使用 CDN

你也可以使用 CDN 引入 My UI。

```html
<!-- 引入 Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<!-- 引入 My UI -->
<script src="https://unpkg.com/@my-ui/ui"></script>
<!-- 引入 My UI 样式 -->
<link rel="stylesheet" href="https://unpkg.com/@my-ui/ui/dist/index.css">

<script>
  const app = Vue.createApp({})
  app.use(MyUI.default)
  app.mount('#app')
</script>
```

## 从源码构建

如果你想从源码构建 My UI，可以按照以下步骤操作：

1. 克隆仓库

```bash
git clone https://github.com/weisiqian/my-ui.git
```

2. 安装依赖

```bash
cd my-ui
pnpm install
```

3. 构建

```bash
pnpm build
```

构建后的文件将输出到 `packages/my-ui/dist` 目录。

## 下一步

- [快速开始](./quickstart.md) - 了解如何使用 My UI
- [主题定制](./theme.md) - 了解如何定制 My UI 的主题
