<template>
  <div class="input-demo">
    <u-input v-model="input" disabled placeholder="禁用状态"></u-input>
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
