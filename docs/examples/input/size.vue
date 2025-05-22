<template>
  <div class="input-demo">
    <u-input v-model="input" size="small" placeholder="小型输入框"></u-input>
    <u-input v-model="input" placeholder="默认输入框"></u-input>
    <u-input v-model="input" size="large" placeholder="大型输入框"></u-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
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
