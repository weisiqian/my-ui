<template>
  <div class="input-demo">
    <u-input v-model="input" prefix-icon="search-icon" placeholder="搜索内容"></u-input>
    <u-input v-model="input" suffix-icon="calendar-icon" placeholder="选择日期"></u-input>
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
