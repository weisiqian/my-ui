# 示例代码块

My UI 文档使用自定义的 VitePress 插件来展示组件示例和源代码。本页面将介绍如何使用这个插件。

## 基本用法

在 Markdown 文件中，你可以使用以下语法来展示组件示例：

```md
::: demo 标题 || 描述文本
@/examples/组件名/示例名.vue
:::
```

例如：

```md
::: demo 按钮基础用法 || 使用 `type` 属性来定义按钮的类型。
@/examples/button/basic.vue
:::
```

这将渲染一个示例块，包含组件的实际效果和源代码。

## 示例

以下是一个按钮组件的示例：

::: demo 按钮基础用法 || 使用 `type` 属性来定义按钮的类型。
@/examples/button/basic.vue
:::

## 组件目录结构

所有示例组件都存放在 `docs/examples` 目录下，按组件类型分类：

```
docs/examples/
├── button/
│   ├── basic.vue
│   ├── size.vue
│   └── ...
├── form/
│   ├── basic.vue
│   ├── inline.vue
│   └── ...
└── ...
```

## 编写示例组件

示例组件是普通的 Vue 单文件组件（.vue 文件）。建议在组件中包含以下内容：

1. 组件的基本用法
2. 必要的样式
3. 简洁的代码，便于用户理解

示例：

```vue
<template>
  <div class="button-demo">
    <u-button>默认按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBasic'
}
</script>

<style scoped>
.button-demo {
  display: flex;
  gap: 8px;
}
</style>
```

## 在线编辑

示例代码块支持在线编辑功能，用户可以点击"在线编辑"按钮，在 Playground 中实时修改和预览代码。
