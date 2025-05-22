<template>
  <div class="input-demo">
    <u-input v-model="input" clearable placeholder="请输入内容"></u-input>
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
