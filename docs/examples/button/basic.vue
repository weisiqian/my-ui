<template>
  <div class="button-demo">
    <u-button>默认按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="danger">危险按钮</u-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBasic'
}
</script>

<style scoped>
.button-demo {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
