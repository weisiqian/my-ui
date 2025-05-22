<template>
  <div class="demo-container">
    <div class="demo-container__preview">
      <slot></slot>
    </div>
    
    <div class="demo-container__code" v-if="$slots.code">
      <div class="demo-container__code-header">
        <div class="demo-container__code-title">{{ title }}</div>
        <div class="demo-container__code-actions">
          <button class="demo-container__code-action" @click="toggleCode">
            {{ codeVisible ? '隐藏代码' : '显示代码' }}
          </button>
        </div>
      </div>
      
      <div class="demo-container__code-content" v-show="codeVisible">
        <slot name="code"></slot>
      </div>
    </div>
    
    <div class="demo-container__description" v-if="$slots.description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DemoContainer',
  
  props: {
    title: {
      type: String,
      default: '示例'
    }
  },
  
  setup() {
    const codeVisible = ref(false)
    
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value
    }
    
    return {
      codeVisible,
      toggleCode
    }
  }
})
</script>

<style>
.demo-container {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  margin-bottom: 24px;
  transition: all 0.2s;
  overflow: hidden;
}

.demo-container:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.demo-container__preview {
  padding: 24px;
  border-bottom: 1px solid #ebeef5;
}

.demo-container__code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border-bottom: 1px solid #ebeef5;
  background-color: #fafafa;
}

.demo-container__code-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.demo-container__code-action {
  border: none;
  background: none;
  font-size: 13px;
  color: #409eff;
  cursor: pointer;
  outline: none;
}

.demo-container__code-content {
  background-color: #fafafa;
  padding: 16px;
  overflow: auto;
}

.demo-container__description {
  padding: 16px;
  border-top: 1px solid #ebeef5;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
}
</style>
