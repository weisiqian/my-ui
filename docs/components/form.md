# Form 表单

表单组件用于数据录入、校验，支持行内表单、多列表单、动态表单、自定义表单等多种场景。

## 基础用法

基础的表单包含各种输入表单项，比如输入框、选择器、开关、单选框、多选框等。

::: demo 基础表单 || 在表单中，每个输入字段需要使用 Form-Item 组件进行包裹，并可以设置对应的校验规则。
@/examples/form/basic.vue
:::

## 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

::: demo 行内表单 || 通过设置 `inline` 属性为 true 可以让表单域变为行内的表单域。
@/examples/form/inline.vue
:::

## 不同尺寸

表单组件提供了三种尺寸：large、medium、small。

::: demo 表单尺寸 || 通过设置 `size` 属性可以控制表单内组件的尺寸，支持 large、medium 和 small 三种尺寸。
@/examples/form/size.vue
:::

## 标签位置

通过设置 `label-position` 属性可以改变表单域标签的位置。

::: demo 标签位置 || 通过设置 `label-position` 属性可以控制标签的位置，可选值为 top、left 和 right。
@/examples/form/position.vue
:::

## API

### Form 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | `object` | — |
| rules | 表单验证规则 | `object` | — |
| label-position | 表单域标签的位置 | `'top' \| 'left' \| 'right'` | `'right'` |
| label-width | 表单域标签的宽度 | `string \| number` | — |
| label-suffix | 表单域标签的后缀 | `string` | — |
| inline | 行内表单模式 | `boolean` | `false` |
| inline-message | 是否以行内形式展示校验信息 | `boolean` | `false` |
| status-icon | 是否在输入框中显示校验结果反馈图标 | `boolean` | `false` |
| show-message | 是否显示校验错误信息 | `boolean` | `true` |
| size | 用于控制该表单内组件的尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用该表单内的所有组件 | `boolean` | `false` |
| validate-on-rule-change | 是否在 rules 属性改变后立即触发一次验证 | `boolean` | `true` |
| hide-required-asterisk | 是否隐藏必填字段的标签旁边的红色星号 | `boolean` | `false` |

### Form 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| validate | 对整个表单进行校验 | `(callback?: (isValid: boolean, invalidFields?: any) => void) => Promise<boolean>` |
| validateField | 对部分表单字段进行校验 | `(props: string \| string[], callback?: (isValid: boolean) => void) => Promise<void>` |
| resetFields | 对整个表单进行重置 | `(props?: string \| string[]) => void` |
| clearValidate | 移除表单项的校验结果 | `(props?: string \| string[]) => void` |

### FormItem 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签文本 | `string` | — |
| label-width | 表单域标签的宽度 | `string \| number` | — |
| prop | 表单域 model 字段 | `string` | — |
| required | 是否必填 | `boolean` | `false` |
| rules | 表单验证规则 | `object \| array` | — |
| error | 表单域验证错误信息 | `string` | — |
| validate-status | 表单域校验状态 | `'' \| 'error' \| 'validating' \| 'success'` | — |
| for | 原生 for 属性 | `string` | — |
| inline-message | 是否以行内形式展示校验信息 | `boolean` | — |
| show-message | 是否显示校验错误信息 | `boolean` | — |
| size | 用于控制该表单域下组件的尺寸 | `'small' \| 'medium' \| 'large'` | — |

### FormItem 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 表单域的内容 |
| label | 自定义标签文本的内容 |

<style>
.demo-row {
  margin-bottom: 20px;
}
.demo-row .u-button {
  margin-right: 10px;
}
</style>
