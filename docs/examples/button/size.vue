<template>
  <div class="button-demo">
    <div class="row">
      <u-button size="large">大型按钮</u-button>
      <u-button>默认按钮</u-button>
      <u-button size="small">小型按钮</u-button>
    </div>
    <div class="row">
      <u-button type="primary" size="large">大型按钮</u-button>
      <u-button type="primary">默认按钮</u-button>
      <u-button type="primary" size="small">小型按钮</u-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonSize'
}
</script>

<style scoped>
.button-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
