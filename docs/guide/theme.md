# 主题定制

My UI 提供了灵活的主题定制功能，你可以根据自己的需求自定义主题。

## 主题系统

My UI 的主题系统基于设计令牌(Design Tokens)和 CSS 变量，你可以通过修改这些变量来自定义主题。

### 设计令牌系统

设计令牌是一种集中管理设计决策的方式，它将设计属性（如颜色、字体、间距等）抽象为可重用的变量。My UI 的设计令牌系统包括以下几个方面：

- **颜色(Colors)**: 品牌色、功能色、中性色等
- **排版(Typography)**: 字体、字号、行高、字重等
- **间距(Spacing)**: 内边距、外边距、布局间距等
- **边框(Borders)**: 边框宽度、样式、圆角等
- **阴影(Shadows)**: 阴影效果
- **动画(Animations)**: 过渡时间、缓动函数等

### 默认主题

My UI 提供了两套默认主题：亮色主题和暗色主题。

```js
import { createTheme, lightTheme, darkTheme } from '@my-ui/ui'

// 使用亮色主题
createTheme(lightTheme)

// 使用暗色主题
createTheme(darkTheme)
```

### 主题变量

以下是 My UI 的主题变量：

```js
// 亮色主题
const lightTheme = {
  name: 'light',
  common: {
    primaryColor: '#18a058',
    primaryColorHover: '#36ad6a',
    primaryColorPressed: '#0c7a43',
    infoColor: '#2080f0',
    successColor: '#18a058',
    warningColor: '#f0a020',
    errorColor: '#d03050',
    textColor: '#333639',
    textColorDisabled: '#c0c4cc',
    borderColor: '#d9d9d9',
    borderRadius: '3px',
    fontSize: '14px'
  },
  // 组件特定主题
  Button: {
    // ...
  },
  Input: {
    // ...
  }
  // 其他组件...
}

// 暗色主题
const darkTheme = {
  name: 'dark',
  common: {
    primaryColor: '#63e2b7',
    primaryColorHover: '#7fe7c4',
    primaryColorPressed: '#5acea7',
    infoColor: '#70c0e8',
    successColor: '#63e2b7',
    warningColor: '#f2c97d',
    errorColor: '#e88080',
    textColor: '#ffffff',
    textColorDisabled: '#686b6e',
    borderColor: '#4c4d4f',
    borderRadius: '3px',
    fontSize: '14px'
  },
  // 组件特定主题
  Button: {
    // ...
  },
  Input: {
    // ...
  }
  // 其他组件...
}
```

## 使用设计令牌

### 设计令牌结构

My UI 的设计令牌系统按照类别组织，每个类别包含相关的设计属性：

```js
// 设计令牌结构示例
const tokens = {
  colors: {
    // 品牌色
    primary: '#18a058',
    primaryHover: '#36ad6a',
    primaryPressed: '#0c7a43',

    // 功能色
    info: '#2080f0',
    success: '#18a058',
    warning: '#f0a020',
    error: '#d03050',

    // 中性色
    text: {
      primary: '#333639',
      secondary: '#666666',
      // ...
    },
    background: {
      primary: '#ffffff',
      secondary: '#f5f7fa',
      // ...
    },
    border: {
      primary: '#d9d9d9',
      // ...
    }
  },
  typography: {
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...',
      mono: 'SFMono-Regular, Menlo, Monaco, Consolas, ...'
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '14px',
      // ...
    },
    // ...
  },
  spacing: {
    // ...
  },
  borders: {
    // ...
  },
  shadows: {
    // ...
  },
  animations: {
    // ...
  }
}
```

### 访问设计令牌

你可以在组件中使用 `useTheme` 钩子来访问设计令牌：

```vue
<script setup>
import { computed } from 'vue'
import { useTheme } from '@my-ui/ui'

const { mergedTheme } = useTheme()

// 访问设计令牌
const primaryColor = computed(() => mergedTheme.value.tokens.colors.primary)
const fontSize = computed(() => mergedTheme.value.tokens.typography.fontSize.base)
</script>
```

## 自定义主题

### 覆盖部分变量

你可以通过覆盖部分变量来自定义主题：

```js
import { createTheme, lightTheme } from '@my-ui/ui'

// 创建自定义主题
createTheme(
  lightTheme, // 基础主题
  {
    // 传统主题覆盖
    common: {
      primaryColor: '#ff0000', // 自定义主色
      borderRadius: '5px', // 自定义圆角
    }
  },
  {
    // 设计令牌覆盖
    colors: {
      primary: '#ff0000',
      primaryHover: '#ff3333',
      primaryPressed: '#cc0000'
    },
    borders: {
      radius: {
        sm: '5px'
      }
    }
  }
)
```

### 创建全新主题

你也可以创建一个全新的主题：

```js
import { createTheme, defaultTokens } from '@my-ui/ui'

// 创建全新主题
createTheme({
  name: 'custom',
  // 设计令牌
  tokens: {
    ...defaultTokens.light,
    colors: {
      ...defaultTokens.light.colors,
      primary: '#ff0000',
      primaryHover: '#ff3333',
      primaryPressed: '#cc0000'
    }
  },
  // 传统主题配置（向后兼容）
  common: {
    primaryColor: '#ff0000',
    primaryColorHover: '#ff3333',
    primaryColorPressed: '#cc0000',
    infoColor: '#2080f0',
    successColor: '#18a058',
    warningColor: '#f0a020',
    errorColor: '#d03050',
    textColor: '#333639',
    textColorDisabled: '#c0c4cc',
    borderColor: '#d9d9d9',
    borderRadius: '5px',
    fontSize: '14px'
  },
  // 组件特定主题
  Button: {
    textColor: '#333639',
    textColorPrimary: '#fff',
    // ...
  },
  Input: {
    textColor: '#333639',
    borderColor: '#d9d9d9',
    // ...
  }
  // 其他组件...
})
```

## 动态切换主题

你可以动态切换主题：

```js
import { createTheme, lightTheme, darkTheme } from '@my-ui/ui'

// 初始使用亮色主题
createTheme(lightTheme)

// 切换到暗色主题
function toggleTheme() {
  createTheme(darkTheme)
}

// 切换回亮色主题
function toggleTheme() {
  createTheme(lightTheme)
}
```

## 使用 CSS 变量

如果你想直接使用 CSS 变量，可以在 CSS 中使用：

```css
.my-button {
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-size: var(--font-size);
}
```

## 暗色模式

My UI 支持暗色模式，你可以通过以下方式启用暗色模式：

```js
import { createTheme, darkTheme } from '@my-ui/ui'

// 使用暗色主题
createTheme(darkTheme)
```

你也可以根据系统主题自动切换：

```js
import { createTheme, lightTheme, darkTheme } from '@my-ui/ui'

// 根据系统主题自动切换
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
createTheme(prefersDark ? darkTheme : lightTheme)

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  createTheme(e.matches ? darkTheme : lightTheme)
})
```

## CSS 变量

My UI 的设计令牌会被转换为 CSS 变量，你可以在自定义组件中使用这些变量：

```css
.my-custom-button {
  /* 使用颜色设计令牌 */
  background-color: var(--u-color-primary);
  color: var(--u-color-text-inverse);

  /* 使用边框设计令牌 */
  border: var(--u-border-width-thin) var(--u-border-style-solid) var(--u-color-primary);
  border-radius: var(--u-border-radius-sm);

  /* 使用排版设计令牌 */
  font-size: var(--u-font-size-sm);
  font-weight: var(--u-font-weight-medium);

  /* 使用间距设计令牌 */
  padding: var(--u-spacing-padding-md);
  margin: var(--u-spacing-margin-sm);

  /* 使用动画设计令牌 */
  transition: all var(--u-animation-duration-normal) var(--u-animation-easing-ease-out);
}

.my-custom-button:hover {
  background-color: var(--u-color-primary-hover);
}
```

## 在组件开发中使用设计令牌

### 设计令牌与传统主题系统的对比

传统的主题系统通常直接在组件中硬编码样式值或引用特定的主题变量，这种方式存在以下问题：

1. **缺乏语义化**：直接使用颜色值如 `#18a058` 无法表达其用途
2. **难以维护**：样式分散在各个组件中，修改需要全局搜索替换
3. **一致性差**：不同组件可能使用不同的值表达相同的设计意图
4. **扩展性有限**：添加新的主题或变体需要修改大量代码

设计令牌系统通过提供语义化、分层的设计变量解决了这些问题，使得组件样式更加一致、可维护和可扩展。

### 替换硬编码样式值

下面是一个示例，展示如何将传统的硬编码样式值替换为设计令牌引用：

#### 传统方式（硬编码值）

```js
// 在组件中使用硬编码值
const buttonStyle = computed(() => {
  const theme = mergedTheme.value
  const style = {}

  if (props.type === 'primary') {
    style['--button-bg-color'] = theme.common.primaryColor // '#18a058'
    style['--button-text-color'] = theme.Button.textColorPrimary // '#fff'
    style['--button-border'] = theme.Button.borderPrimary // '1px solid #18a058'
  }

  style['--button-font-size'] = theme.Button.fontSizeMedium // '14px'
  style['--button-border-radius'] = theme.Button.borderRadius // '3px'

  return style
})
```

#### 使用设计令牌

```js
// 在组件中使用设计令牌
const buttonStyle = computed(() => {
  const theme = mergedTheme.value
  const tokens = theme.tokens
  const style = {}

  if (props.type === 'primary') {
    style['--button-bg-color'] = tokens.colors.primary
    style['--button-text-color'] = tokens.colors.text.inverse
    style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.primary}`
  }

  style['--button-font-size'] = tokens.typography.fontSize.sm
  style['--button-border-radius'] = tokens.borders.radius.sm

  return style
})
```

### 完整组件示例

下面是一个使用设计令牌的完整按钮组件示例：

```vue
<template>
  <button
    :class="[
      'u-button',
      `u-button--${type}`,
      `u-button--${size}`,
      {
        'u-button--disabled': disabled,
        'u-button--loading': loading,
        'u-button--round': round
      }
    ]"
    :style="buttonStyle"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="u-button__loading">
      <span class="u-button__loading-icon"></span>
    </span>
    <span class="u-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTheme } from '@my-ui/theme'

export default defineComponent({
  name: 'UButton',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => {
        return ['small', 'medium', 'large'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    const { mergedTheme } = useTheme()

    // 计算按钮样式 - 使用设计令牌
    const buttonStyle = computed(() => {
      const theme = mergedTheme.value
      const tokens = theme.tokens
      const style: Record<string, string> = {}

      // 应用主题 - 使用设计令牌
      if (props.type === 'default') {
        style['--button-text-color'] = tokens.colors.text.primary
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.border.primary}`
        style['--button-bg-color'] = tokens.colors.background.primary
      } else if (props.type === 'primary') {
        style['--button-bg-color'] = tokens.colors.primary
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.primary}`
      } else if (props.type === 'info') {
        style['--button-bg-color'] = tokens.colors.info
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.info}`
      } else if (props.type === 'success') {
        style['--button-bg-color'] = tokens.colors.success
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.success}`
      } else if (props.type === 'warning') {
        style['--button-bg-color'] = tokens.colors.warning
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.warning}`
      } else if (props.type === 'error') {
        style['--button-bg-color'] = tokens.colors.error
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.error}`
      }

      // 应用尺寸 - 使用设计令牌
      if (props.size === 'small') {
        style['--button-height'] = '24px' // 可以替换为 tokens.spacing.height.sm
        style['--button-padding'] = tokens.spacing.padding.xs
        style['--button-font-size'] = tokens.typography.fontSize.xs
      } else if (props.size === 'medium') {
        style['--button-height'] = '32px' // 可以替换为 tokens.spacing.height.md
        style['--button-padding'] = tokens.spacing.padding.md
        style['--button-font-size'] = tokens.typography.fontSize.sm
      } else if (props.size === 'large') {
        style['--button-height'] = '40px' // 可以替换为 tokens.spacing.height.lg
        style['--button-padding'] = tokens.spacing.padding.lg
        style['--button-font-size'] = tokens.typography.fontSize.md
      }

      // 应用圆角 - 使用设计令牌
      style['--button-border-radius'] = props.round
        ? tokens.borders.radius.full
        : tokens.borders.radius.sm

      // 应用字重和过渡效果
      style['--button-font-weight'] = String(tokens.typography.fontWeight.medium)
      style['--button-transition'] = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.easeInOut}`

      return style
    })

    // 点击事件处理
    const handleClick = (event: MouseEvent) => {
      if (props.disabled || props.loading) return
      emit('click', event)
    }

    return {
      buttonStyle,
      handleClick
    }
  }
})
</script>

<style>
.u-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: var(--button-transition, all 0.2s);
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  appearance: none;

  height: var(--button-height);
  padding: var(--button-padding);
  font-size: var(--button-font-size);
  border-radius: var(--button-border-radius);
  color: var(--button-text-color);
  background-color: var(--button-bg-color, transparent);
  border: var(--button-border);
  font-weight: var(--button-font-weight, 400);
}

/* 其他样式... */
</style>
```

### 生成CSS变量

设计令牌系统的一个重要特性是能够将设计令牌转换为CSS变量，这样可以在组件样式中直接使用。下面是一个示例，展示如何将设计令牌转换为CSS变量：

```js
// 将设计令牌转换为CSS变量
function generateCSSVariables(tokens) {
  const cssVars = {}

  // 颜色
  Object.entries(tokens.colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      cssVars[`--u-color-${key}`] = value
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        cssVars[`--u-color-${key}-${subKey}`] = subValue
      })
    }
  })

  // 排版
  Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
    cssVars[`--u-font-size-${key}`] = value
  })

  Object.entries(tokens.typography.fontWeight).forEach(([key, value]) => {
    cssVars[`--u-font-weight-${key}`] = String(value)
  })

  // 边框
  Object.entries(tokens.borders.width).forEach(([key, value]) => {
    cssVars[`--u-border-width-${key}`] = value
  })

  Object.entries(tokens.borders.style).forEach(([key, value]) => {
    cssVars[`--u-border-style-${key}`] = value
  })

  Object.entries(tokens.borders.radius).forEach(([key, value]) => {
    cssVars[`--u-border-radius-${key}`] = value
  })

  // 间距
  Object.entries(tokens.spacing.padding).forEach(([key, value]) => {
    cssVars[`--u-spacing-padding-${key}`] = value
  })

  Object.entries(tokens.spacing.margin).forEach(([key, value]) => {
    cssVars[`--u-spacing-margin-${key}`] = value
  })

  // 动画
  Object.entries(tokens.animations.duration).forEach(([key, value]) => {
    cssVars[`--u-animation-duration-${key}`] = value
  })

  Object.entries(tokens.animations.easing).forEach(([key, value]) => {
    cssVars[`--u-animation-easing-${key}`] = value
  })

  return cssVars
}

// 应用CSS变量到文档根元素
function applyCSSVariables(cssVars) {
  const root = document.documentElement

  Object.entries(cssVars).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}

// 使用示例
const cssVars = generateCSSVariables(theme.tokens)
applyCSSVariables(cssVars)
```

这样，设计令牌就会被转换为CSS变量，可以在组件样式中直接使用：

```css
.u-button {
  background-color: var(--u-color-primary);
  color: var(--u-color-text-inverse);
  border-radius: var(--u-border-radius-sm);
  font-size: var(--u-font-size-sm);
  /* 其他样式... */
}
```

### 设计令牌与传统主题系统的兼容性和过渡策略

为了平稳过渡到设计令牌系统，我们建议采用以下策略：

1. **渐进式迁移**：不需要一次性将所有组件迁移到设计令牌系统，可以逐步替换
2. **双系统并行**：保持传统主题系统的向后兼容性，同时引入设计令牌系统
3. **映射关系**：建立传统主题变量与设计令牌之间的映射关系，确保一致性
4. **优先使用设计令牌**：对于新组件，优先使用设计令牌系统
5. **文档更新**：更新组件文档，明确指出哪些组件使用了设计令牌系统
6. **CSS变量转换**：提供工具函数，将设计令牌转换为CSS变量

#### 映射示例

```js
// 传统主题变量与设计令牌的映射关系
function mapThemeToTokens(theme) {
  return {
    colors: {
      primary: theme.common.primaryColor,
      primaryHover: theme.common.primaryColorHover,
      primaryPressed: theme.common.primaryColorPressed,
      info: theme.common.infoColor,
      success: theme.common.successColor,
      warning: theme.common.warningColor,
      error: theme.common.errorColor,
      text: {
        primary: theme.common.textColor,
        disabled: theme.common.textColorDisabled
      },
      border: {
        primary: theme.common.borderColor
      }
    },
    borders: {
      radius: {
        sm: theme.common.borderRadius
      }
    },
    typography: {
      fontSize: {
        base: theme.common.fontSize
      }
    }
  }
}
```

## 完整示例

这是一个完整的主题定制示例，包括设计令牌的自定义：

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyUI, { createTheme, lightTheme, defaultTokens } from '@my-ui/ui'

// 导入样式
import '@my-ui/ui/dist/index.css'

const app = createApp(App)

// 注册 My UI
app.use(MyUI)

// 创建自定义主题
createTheme(
  lightTheme,
  {
    // 传统主题覆盖（向后兼容）
    common: {
      ...lightTheme.common,
      primaryColor: '#ff0000', // 自定义主色
      borderRadius: '5px', // 自定义圆角
    },
    Button: {
      ...lightTheme.Button,
      textColorPrimary: '#ffffff', // 自定义按钮文字颜色
    }
  },
  {
    // 设计令牌覆盖
    colors: {
      primary: '#ff0000',
      primaryHover: '#ff3333',
      primaryPressed: '#cc0000'
    },
    borders: {
      radius: {
        sm: '5px'
      }
    }
  }
)

app.mount('#app')
```

## 最佳实践

在组件开发中使用设计令牌系统时，建议遵循以下最佳实践：

### 1. 使用语义化命名

选择能够表达设计意图的名称，而不是描述外观：
- ✅ 好的例子：`tokens.colors.primary`、`tokens.spacing.padding.md`
- ❌ 不好的例子：`tokens.colors.green`、`tokens.spacing.padding.16px`

### 2. 保持层次结构

按照类别和用途组织设计令牌，便于查找和使用：
- 颜色：`colors.primary`、`colors.text.primary`
- 间距：`spacing.padding.sm`、`spacing.margin.lg`
- 排版：`typography.fontSize.base`、`typography.fontWeight.medium`

### 3. 避免硬编码值

不要在组件中直接使用硬编码的样式值，始终使用设计令牌：
- ✅ 好的例子：`tokens.colors.primary`
- ❌ 不好的例子：`'#18a058'`

### 4. 使用计算属性

在组件中使用计算属性来组合设计令牌，提高可读性和可维护性：

```js
const buttonBorder = computed(() =>
  `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.primary}`
)
```

### 5. 提供默认值

在使用设计令牌时，提供合理的默认值，确保在令牌不可用时组件仍能正常工作：

```js
style['--button-font-size'] = tokens.typography.fontSize.sm || '14px'
```

### 6. 文档化设计令牌

为设计令牌提供详细的文档，包括用途、默认值和使用示例。

### 7. 测试不同主题

确保组件在不同主题下都能正常工作，特别是亮色和暗色主题。

### 8. 渐进式迁移

对于现有组件，可以逐步迁移到设计令牌系统，不必一次性完成所有改动。

### 9. 使用CSS变量

将设计令牌转换为CSS变量，便于在样式中使用：

```css
.u-button {
  background-color: var(--u-color-primary);
  border-radius: var(--u-border-radius-sm);
}
```

### 10. 保持一致性

确保在整个组件库中一致地使用设计令牌，避免混合使用设计令牌和硬编码值。
