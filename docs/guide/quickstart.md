# 快速开始

本节将介绍如何在项目中使用 My UI。

## 完整引入

如果你想一次性引入 My UI 的所有组件，可以使用以下方式：

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyUI from '@my-ui/ui'

// 导入样式
import '@my-ui/ui/dist/index.css'

const app = createApp(App)

// 注册 My UI
app.use(MyUI)

app.mount('#app')
```

## 按需引入

如果你只想引入部分组件，可以使用以下方式：

```js
import { createApp } from 'vue'
import App from './App.vue'
import { UButton, UInput, UForm, UFormItem } from '@my-ui/ui'

// 导入样式
import '@my-ui/ui/dist/index.css'

const app = createApp(App)

// 注册组件
app.component(UButton.name, UButton)
app.component(UInput.name, UInput)
app.component(UForm.name, UForm)
app.component(UFormItem.name, UFormItem)

app.mount('#app')
```

## 使用组件

注册完成后，你可以在模板中使用 My UI 的组件：

```vue
<template>
  <div>
    <u-button type="primary">主要按钮</u-button>
    <u-input v-model="input" placeholder="请输入内容"></u-input>
    
    <u-form :model="form" :rules="rules">
      <u-form-item label="用户名" prop="username">
        <u-input v-model="form.username" placeholder="请输入用户名"></u-input>
      </u-form-item>
      <u-form-item label="密码" prop="password">
        <u-input v-model="form.password" type="password" placeholder="请输入密码"></u-input>
      </u-form-item>
      <u-form-item>
        <u-button type="primary" @click="submitForm">提交</u-button>
        <u-button @click="resetForm">重置</u-button>
      </u-form-item>
    </u-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不能小于 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('提交成功!')
        } else {
          alert('表单验证失败!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>
```

## 使用 TypeScript

My UI 提供了完整的 TypeScript 类型定义，你可以在 TypeScript 项目中使用：

```ts
import { defineComponent, ref } from 'vue'
import { UButton, UInput } from '@my-ui/ui'

export default defineComponent({
  components: {
    UButton,
    UInput
  },
  setup() {
    const input = ref('')
    
    return {
      input
    }
  }
})
```

## 自定义主题

My UI 支持主题定制，你可以通过以下方式自定义主题：

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

更多关于主题定制的内容，请参考 [主题定制](./theme.md)。

## 下一步

- [组件](../components/) - 浏览所有组件
- [主题定制](./theme.md) - 了解如何定制 My UI 的主题
