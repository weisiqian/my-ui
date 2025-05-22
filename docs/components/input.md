# Input 输入框

输入框用于用户输入文本内容。

## 基础用法

使用 `v-model` 指令来实现双向绑定。

::: demo 基础用法 || 使用 `v-model` 指令可以实现输入框的双向绑定。
@/examples/input/basic.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用输入框。

::: demo 禁用状态 || 添加 `disabled` 属性可以禁用输入框，禁用状态下输入框不可编辑。
@/examples/input/disabled.vue
:::

## 可清空

使用 `clearable` 属性来启用清空功能。

::: demo 可清空 || 添加 `clearable` 属性可以启用清空功能，当输入框有内容时，鼠标悬停会显示清空按钮。
@/examples/input/clearable.vue
:::

## 密码框

使用 `show-password` 属性来启用密码框。

::: demo 密码框 || 添加 `show-password` 属性可以启用密码框，点击右侧图标可以切换密码的显示和隐藏。
@/examples/input/password.vue
:::

## 不同尺寸

使用 `size` 属性来设置输入框的大小。

::: demo 不同尺寸 || 使用 `size` 属性设置输入框大小，可选值为 `small`、`medium`（默认）和 `large`。
@/examples/input/size.vue
:::

## 前缀和后缀

使用 `prefix-icon` 和 `suffix-icon` 属性来设置前缀和后缀图标。

::: demo 前缀和后缀 || 使用 `prefix-icon` 和 `suffix-icon` 属性可以设置输入框的前缀和后缀图标。
@/examples/input/icon.vue
:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 输入框类型 | `'text' \| 'password' \| 'number' \| 'email' \| 'tel' \| 'url'` | `'text'` |
| value / v-model | 绑定值 | `string \| number` | — |
| size | 输入框尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| placeholder | 输入框占位文本 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| show-password | 是否显示切换密码图标 | `boolean` | `false` |
| show-word-limit | 是否显示字数统计 | `boolean` | `false` |
| maxlength | 最大输入长度 | `number` | — |
| minlength | 最小输入长度 | `number` | — |
| prefix-icon | 前缀图标类名 | `string` | — |
| suffix-icon | 后缀图标类名 | `string` | — |
| name | 原生 name 属性 | `string` | — |
| form | 原生 form 属性 | `string` | — |
| id | 输入框 id | `string` | — |
| tabindex | 输入框 tabindex | `number \| string` | `0` |
| validate-event | 是否触发表单验证 | `boolean` | `true` |
| input-style | 输入框样式 | `string \| object` | — |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 在输入框值改变时触发 | `(value: string) => void` |
| change | 在输入框值改变且失去焦点时触发 | `(value: string) => void` |
| focus | 在输入框获得焦点时触发 | `(event: FocusEvent) => void` |
| blur | 在输入框失去焦点时触发 | `(event: FocusEvent) => void` |
| clear | 在点击清空按钮时触发 | `() => void` |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |

<style>
.input-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}
.input-value {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}
</style>
