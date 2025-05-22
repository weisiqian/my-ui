<template>
  <div class="input-demo">
    <u-input v-model="input" placeholder="请输入内容"></u-input>
    <div class="input-value">输入的内容：{{ input }}</div>
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
.input-value {
  font-size: 14px;
  color: #666;
}
</style>
