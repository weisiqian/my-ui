<template>
  <u-form
    ref="formRef"
    :model="inlineForm"
    :rules="rules"
    inline
  >
    <u-form-item label="用户名" prop="username">
      <u-input v-model="inlineForm.username" placeholder="请输入用户名" />
    </u-form-item>
    <u-form-item label="密码" prop="password">
      <u-input v-model="inlineForm.password" type="password" placeholder="请输入密码" />
    </u-form-item>
    <u-form-item>
      <u-button type="primary" @click="submitInlineForm">提交</u-button>
    </u-form-item>
  </u-form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref(null)
const inlineForm = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

const submitInlineForm = async () => {
  if (!formRef.value) return
  try {
    await formRef.value.validate()
    console.log('表单提交成功！', inlineForm)
  } catch (error) {
    console.log('表单验证失败')
  }
}
</script> 