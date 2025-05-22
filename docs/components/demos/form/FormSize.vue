<template>
  <div>
    <div class="demo-row">
      <u-radio-group v-model="size" type="button">
        <u-radio label="large">大尺寸</u-radio>
        <u-radio label="medium">默认尺寸</u-radio>
        <u-radio label="small">小尺寸</u-radio>
      </u-radio-group>
    </div>
    <u-form
      ref="formRef"
      :model="sizeForm"
      :rules="rules"
      :size="size"
      label-width="100px"
    >
      <u-form-item label="用户名" prop="username">
        <u-input v-model="sizeForm.username" placeholder="请输入用户名" />
      </u-form-item>
      <u-form-item label="密码" prop="password">
        <u-input v-model="sizeForm.password" type="password" placeholder="请输入密码" />
      </u-form-item>
      <u-form-item>
        <u-button type="primary" @click="submitSizeForm">提交</u-button>
      </u-form-item>
    </u-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref(null)
const size = ref('medium')
const sizeForm = reactive({
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

const submitSizeForm = async () => {
  if (!formRef.value) return
  try {
    await formRef.value.validate()
    console.log('表单提交成功！', sizeForm)
  } catch (error) {
    console.log('表单验证失败')
  }
}
</script>

<style scoped>
.demo-row {
  margin-bottom: 20px;
}
</style> 