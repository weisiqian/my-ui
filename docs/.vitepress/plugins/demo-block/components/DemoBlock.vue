<template>
  <div class="my-ui-demo-block">
    <div v-if="title" class="my-ui-demo-block__title">{{ title }}</div>
    <div v-if="description" class="my-ui-demo-block__description">{{ description }}</div>

    <div class="my-ui-demo-block__preview">
      <div class="my-ui-demo-block__preview-actions">
        <button class="my-ui-demo-block__preview-action-button" @click="toggleSourceCode">
          {{ sourceCodeVisible ? '关闭源码' : '查看源码' }}
        </button>
      </div>
      <ClientOnly>
        <component :is="AsyncComponent" class="my-ui-demo-block__component" />
      </ClientOnly>
    </div>

    <div v-show="sourceCodeVisible" class="my-ui-demo-block__source-code">
      <pre><code v-html="highlightedCode"></code></pre>
    </div>

    <div class="my-ui-demo-block__actions">
      <span class="my-ui-demo-block__action-text" @click="toggleSource">
        {{ sourceVisible ? '收起代码' : '显示代码' }}
      </span>
      <div>
        <button v-if="playgroundEnabled" class="my-ui-demo-block__action-button" @click="openPlayground">
          在线编辑
        </button>
        <button class="my-ui-demo-block__action-button" @click="copyCode">
          {{ copied ? '已复制' : '复制代码' }}
        </button>
      </div>
    </div>

    <div v-show="sourceVisible" class="my-ui-demo-block__source">
      <pre><code v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'MyUIDemoBlock',
  props: {
    title: String,
    description: String,
    componentName: { type: String, required: true },
    /** 形如 /examples/form/basic（无 .vue） */
    componentPath: { type: String, required: true }
  },
  setup(props) {
    /* ---------- 关键：用绝对路径 glob ---------- */
    const modules = import.meta.glob('/examples/**/*.vue', { eager: true })
    const sources = import.meta.glob('/examples/**/*.vue', {
      eager: true,
      as: 'raw'
    })

    const AsyncComponent = defineAsyncComponent(() => {
      const key = `${props.componentPath}.vue` as keyof typeof modules
      const mod = modules[key] as { default: any } | undefined
      if (!mod) {
        return Promise.reject(new Error(`组件找不到：${String(key)}`))
      }
      return Promise.resolve(mod.default)
    })

    /* ---------- 源码与复制 ---------- */
    const sourceVisible = ref(false)
    const toggleSource = () => (sourceVisible.value = !sourceVisible.value)

    /* ---------- 查看源码功能 ---------- */
    const sourceCodeVisible = ref(false)
    const toggleSourceCode = () => (sourceCodeVisible.value = !sourceCodeVisible.value)

    const copied = ref(false)
    const rawCode = ref('')
    const copyCode = async () => {
      if (!rawCode.value) {
        const rawKey = `${props.componentPath}.vue` as keyof typeof sources
        rawCode.value = (sources[rawKey] as string) || `// 无法加载源码：${String(rawKey)}`
      }
      await navigator.clipboard.writeText(rawCode.value)
      copied.value = true
      setTimeout(() => (copied.value = false), 2000)
    }

    /* ---------- playground ---------- */
    const playgroundEnabled = ref(true)
    const openPlayground = () => console.log('打开 playground:', props.componentPath)

    /* ---------- 简单高亮 ---------- */
    const highlightedCode = ref('')
    const highlight = (code: string) =>
      code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/(".*?")/g, '<span class="token string">$1</span>')
        .replace(/\b(const|let|function|import|export)\b/g, '<span class="token keyword">$1</span>')

    onMounted(() => {
      const rawKey = `${props.componentPath}.vue` as keyof typeof sources
      const code = (sources[rawKey] as string) || ''
      rawCode.value = code
      highlightedCode.value = highlight(code)
    })

    return {
      AsyncComponent,
      sourceVisible,
      toggleSource,
      sourceCodeVisible,
      toggleSourceCode,
      copied,
      copyCode,
      playgroundEnabled,
      openPlayground,
      highlightedCode
    }
  }
})
</script>

<style>
.my-ui-demo-block {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.my-ui-demo-block__title {
  font-weight: 500;
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.my-ui-demo-block__description {
  padding: 8px 16px;
  color: var(--vp-c-text-2);
}

.my-ui-demo-block__preview {
  padding: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  position: relative;
}

.my-ui-demo-block__preview-actions {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
}

.my-ui-demo-block__preview-action-button {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.my-ui-demo-block__preview-action-button:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand);
}

.my-ui-demo-block__component-path {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 8px;
}

.my-ui-demo-block__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.my-ui-demo-block__action-button {
  margin-left: 8px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.my-ui-demo-block__action-button:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand);
}

.my-ui-demo-block__action-text {
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.2s ease;
}

.my-ui-demo-block__action-text:hover {
  color: var(--vp-c-brand);
}

.my-ui-demo-block__source {
  background-color: var(--vp-code-block-bg);
  padding: 16px;
}

.my-ui-demo-block__source-code {
  background-color: var(--vp-code-block-bg);
  padding: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  max-height: 400px;
  overflow: auto;
}

.token.string {
  color: #42b983;
}

.token.keyword {
  color: #d63200;
}
</style>
