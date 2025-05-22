<template>
  <div class="input-demo">
    <u-input v-model="password" type="password" show-password placeholder="请输入密码"></u-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ''
    }
  }
}
</script>

<style>
.input-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
