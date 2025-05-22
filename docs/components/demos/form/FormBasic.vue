<template>
  <u-form
    ref="form"
    :model="form"
    :rules="rules"
    label-width="100px"
  >
    <u-form-item label="用户名" prop="username">
      <u-input v-model="form.username" placeholder="请输入用户名" />
    </u-form-item>
    <u-form-item label="邮箱" prop="email">
      <u-input v-model="form.email" placeholder="请输入邮箱" />
    </u-form-item>
    <u-form-item label="密码" prop="password">
      <u-input v-model="form.password" type="password" placeholder="请输入密码" />
    </u-form-item>
    <u-form-item>
      <u-button type="primary" @click="submitForm">提交</u-button>
      <u-button @click="resetForm">重置</u-button>
    </u-form-item>
  </u-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱地址', trigger: 'blur' }
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
          console.log('表单提交成功！', this.form)
        } else {
          console.log('表单验证失败')
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