# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

使用 `type`、`size` 和 `disabled` 属性来定义按钮的样式。

::: demo 基础用法 || 使用 `type` 属性来定义按钮的类型。
@/examples/button/basic.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用按钮。

<DemoContainer title="禁用状态">
  <div class="button-demo">
    <u-button disabled>默认按钮</u-button>
    <u-button type="primary" disabled>主要按钮</u-button>
    <u-button type="info" disabled>信息按钮</u-button>
    <u-button type="success" disabled>成功按钮</u-button>
    <u-button type="warning" disabled>警告按钮</u-button>
    <u-button type="error" disabled>错误按钮</u-button>
  </div>

  <template #code>

  ```vue
  <template>
    <div class="button-demo">
      <u-button disabled>默认按钮</u-button>
      <u-button type="primary" disabled>主要按钮</u-button>
      <u-button type="info" disabled>信息按钮</u-button>
      <u-button type="success" disabled>成功按钮</u-button>
      <u-button type="warning" disabled>警告按钮</u-button>
      <u-button type="error" disabled>错误按钮</u-button>
    </div>
  </template>

  <style>
  .button-demo {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  </style>
  ```

  </template>

  <template #description>
  添加 `disabled` 属性可以禁用按钮，禁用状态下按钮不可点击。
  </template>
</DemoContainer>

## 按钮尺寸

使用 `size` 属性来设置按钮的大小。

::: demo 按钮尺寸 || 使用 `size` 属性设置按钮大小，可选值为 `small`、`medium`（默认）和 `large`。
@/examples/button/size.vue
:::

## 圆角按钮

使用 `round` 属性来设置圆角按钮。

<DemoContainer title="圆角按钮">
  <div class="button-demo">
    <u-button round>圆角按钮</u-button>
    <u-button type="primary" round>主要按钮</u-button>
    <u-button type="info" round>信息按钮</u-button>
    <u-button type="success" round>成功按钮</u-button>
    <u-button type="warning" round>警告按钮</u-button>
    <u-button type="error" round>错误按钮</u-button>
  </div>

  <template #code>

  ```vue
  <template>
    <div class="button-demo">
      <u-button round>圆角按钮</u-button>
      <u-button type="primary" round>主要按钮</u-button>
      <u-button type="info" round>信息按钮</u-button>
      <u-button type="success" round>成功按钮</u-button>
      <u-button type="warning" round>警告按钮</u-button>
      <u-button type="error" round>错误按钮</u-button>
    </div>
  </template>

  <style>
  .button-demo {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  </style>
  ```

  </template>

  <template #description>
  使用 `round` 属性设置圆角按钮。
  </template>
</DemoContainer>

## 加载状态

使用 `loading` 属性来设置按钮的加载状态。

<DemoContainer title="加载状态">
  <div class="button-demo">
    <u-button loading>加载中</u-button>
    <u-button type="primary" loading>加载中</u-button>
    <u-button type="info" loading>加载中</u-button>
    <u-button type="success" loading>加载中</u-button>
    <u-button type="warning" loading>加载中</u-button>
    <u-button type="error" loading>加载中</u-button>
  </div>

  <template #code>

  ```vue
  <template>
    <div class="button-demo">
      <u-button loading>加载中</u-button>
      <u-button type="primary" loading>加载中</u-button>
      <u-button type="info" loading>加载中</u-button>
      <u-button type="success" loading>加载中</u-button>
      <u-button type="warning" loading>加载中</u-button>
      <u-button type="error" loading>加载中</u-button>
    </div>
  </template>

  <style>
  .button-demo {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  </style>
  ```

  </template>

  <template #description>
  添加 `loading` 属性即可让按钮处于加载状态，此时按钮不可点击。
  </template>
</DemoContainer>

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'default' \| 'primary' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` |
| size | 按钮尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| round | 是否圆角 | `boolean` | `false` |
| circle | 是否圆形 | `boolean` | `false` |
| ghost | 是否幽灵按钮 | `boolean` | `false` |
| dashed | 是否虚线边框 | `boolean` | `false` |
| tag | 按钮标签 | `string` | `'button'` |
| color | 自定义按钮颜色 | `string` | — |
| textColor | 自定义文字颜色 | `string` | — |
| block | 是否块级按钮 | `boolean` | `false` |
| icon | 图标类名 | `string` | — |
| iconPosition | 图标位置 | `'left' \| 'right'` | `'left'` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `(event: MouseEvent) => void` |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内容 |

<style>
.button-demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
