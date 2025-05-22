<template>
  <button
    :class="[
      'u-button',
      `u-button--${type}`,
      `u-button--${size}`,
      {
        'u-button--disabled': disabled,
        'u-button--loading': loading,
        'u-button--round': round,
        'u-button--circle': circle,
        'u-button--ghost': ghost,
        'u-button--dashed': dashed,
        'u-button--block': block
      }
    ]"
    :style="buttonStyle"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="u-button__loading">
      <span class="u-button__loading-icon"></span>
    </span>
    <span v-if="icon && iconPosition === 'left'" class="u-button__icon u-button__icon--left">
      <span class="u-button__icon-inner" :class="icon"></span>
    </span>
    <span v-if="$slots.default" class="u-button__content">
      <slot></slot>
    </span>
    <span v-if="icon && iconPosition === 'right'" class="u-button__icon u-button__icon--right">
      <span class="u-button__icon-inner" :class="icon"></span>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

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
    },
    circle: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: (val: string) => {
        return ['left', 'right'].includes(val)
      }
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    // 计算按钮样式
    const buttonStyle = computed(() => {
      const style: Record<string, string> = {}

      // 自定义颜色
      if (props.color) {
        style['--button-bg-color'] = props.color
        style['--button-border-color'] = props.color

        if (!props.textColor) {
          style['--button-text-color'] = '#fff'
        }
      }

      // 自定义文本颜色
      if (props.textColor) {
        style['--button-text-color'] = props.textColor
      }

      // 应用主题
      if (props.type === 'default') {
        style['--button-text-color'] = '#333639'
        style['--button-border'] = '1px solid #d9d9d9'
      } else if (props.type === 'primary') {
        style['--button-bg-color'] = '#18a058'
        style['--button-text-color'] = '#fff'
        style['--button-border'] = '1px solid #18a058'
      } else if (props.type === 'info') {
        style['--button-bg-color'] = '#2080f0'
        style['--button-text-color'] = '#fff'
        style['--button-border'] = '1px solid #2080f0'
      } else if (props.type === 'success') {
        style['--button-bg-color'] = '#18a058'
        style['--button-text-color'] = '#fff'
        style['--button-border'] = '1px solid #18a058'
      } else if (props.type === 'warning') {
        style['--button-bg-color'] = '#f0a020'
        style['--button-text-color'] = '#fff'
        style['--button-border'] = '1px solid #f0a020'
      } else if (props.type === 'error') {
        style['--button-bg-color'] = '#d03050'
        style['--button-text-color'] = '#fff'
        style['--button-border'] = '1px solid #d03050'
      }

      // 应用尺寸
      if (props.size === 'small') {
        style['--button-height'] = '24px'
        style['--button-padding'] = '0 10px'
        style['--button-font-size'] = '12px'
      } else if (props.size === 'medium') {
        style['--button-height'] = '32px'
        style['--button-padding'] = '0 14px'
        style['--button-font-size'] = '14px'
      } else if (props.size === 'large') {
        style['--button-height'] = '40px'
        style['--button-padding'] = '0 18px'
        style['--button-font-size'] = '16px'
      }

      // 应用圆角
      style['--button-border-radius'] = props.round
        ? '9999px'
        : props.circle
          ? '50%'
          : '3px'

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

<style scoped>
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
  transition: all 0.2s;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;

  height: var(--button-height);
  padding: var(--button-padding);
  font-size: var(--button-font-size);
  border-radius: var(--button-border-radius);
  color: var(--button-text-color);
  background-color: var(--button-bg-color, transparent);
  border: var(--button-border);
  font-weight: var(--button-font-weight, 400);
}

.u-button--default {
  background-color: #fff;
}

.u-button--primary,
.u-button--info,
.u-button--success,
.u-button--warning,
.u-button--error {
  color: #fff;
}

.u-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.u-button--loading {
  cursor: default;
  pointer-events: none;
}

.u-button--block {
  display: flex;
  width: 100%;
}

.u-button--ghost {
  background-color: transparent !important;
}

.u-button--dashed {
  border-style: dashed !important;
}

.u-button__loading {
  margin-right: 8px;
}

.u-button__loading-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-right-color: transparent;
  animation: u-button-loading-spin 1s linear infinite;
}

.u-button__icon {
  display: inline-flex;
  align-items: center;
}

.u-button__icon--left {
  margin-right: 6px;
}

.u-button__icon--right {
  margin-left: 6px;
}

.u-button__content {
  display: inline-flex;
  align-items: center;
}

@keyframes u-button-loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
