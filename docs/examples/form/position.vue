<template>
  <div>
    <div class="demo-row">
      <u-radio-group v-model="labelPosition" type="button">
        <u-radio label="top">顶部对齐</u-radio>
        <u-radio label="left">左对齐</u-radio>
        <u-radio label="right">右对齐</u-radio>
      </u-radio-group>
    </div>
    <u-form
      ref="formRef"
      :model="positionForm"
      :rules="rules"
      :label-position="labelPosition"
      label-width="100px"
    >
      <u-form-item label="用户名" prop="username">
        <u-input v-model="positionForm.username" placeholder="请输入用户名" />
      </u-form-item>
      <u-form-item label="密码" prop="password">
        <u-input v-model="positionForm.password" type="password" placeholder="请输入密码" />
      </u-form-item>
      <u-form-item>
        <u-button type="primary" @click="submitPositionForm">提交</u-button>
      </u-form-item>
    </u-form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const formRef = ref(null)
    const labelPosition = ref('right')
    const positionForm = reactive({
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

    const submitPositionForm = async () => {
      if (!formRef.value) return
      try {
        await formRef.value.validate()
        console.log('表单提交成功！', positionForm)
      } catch (error) {
        console.log('表单验证失败')
      }
    }

    return {
      formRef,
      labelPosition,
      positionForm,
      rules,
      submitPositionForm
    }
  }
}
</script>

<style scoped>
.demo-row {
  margin-bottom: 20px;
}
</style>
