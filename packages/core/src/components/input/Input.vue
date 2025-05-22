<template>
  <div
    :class="[
      'u-input',
      `u-input--${size}`,
      {
        'u-input--disabled': disabled,
        'u-input--focus': focused,
        'u-input--clearable': clearable && !disabled && !readonly && modelValue,
        'u-input--password': showPassword,
        'u-input--prefix': $slots.prefix || prefixIcon,
        'u-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
      }
    ]"
    :style="inputWrapperStyle"
  >
    <div v-if="$slots.prefix || prefixIcon" class="u-input__prefix">
      <span v-if="prefixIcon" class="u-input__prefix-icon" :class="prefixIcon"></span>
      <slot name="prefix"></slot>
    </div>

    <input
      ref="inputRef"
      :class="['u-input__inner', inputClass]"
      :style="inputInnerStyle"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="name"
      :form="form"
      :id="uniqueId"
      :tabindex="tabindex"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <div v-if="$slots.suffix || suffixIcon || clearable || showPassword" class="u-input__suffix">
      <span
        v-if="clearable && !disabled && !readonly && modelValue"
        class="u-input__clear"
        @click="handleClear"
      >
        <span class="u-input__clear-icon">×</span>
      </span>

      <span
        v-if="showPassword"
        class="u-input__password"
        @click="handleTogglePassword"
      >
        <span class="u-input__password-icon">
          {{ passwordVisible ? '👁️' : '👁️‍🗨️' }}
        </span>
      </span>

      <span v-if="suffixIcon" class="u-input__suffix-icon" :class="suffixIcon"></span>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted, nextTick } from 'vue'

// 生成唯一ID的计数器
let idCounter = 0

export default defineComponent({
  name: 'UInput',

  props: {
    type: {
      type: String,
      default: 'text',
      validator: (val: string) => {
        return ['text', 'password', 'number', 'email', 'tel', 'url'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => {
        return ['small', 'medium', 'large'].includes(val)
      }
    },
    value: {
      type: [String, Number],
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: undefined
    },
    minlength: {
      type: Number,
      default: undefined
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    form: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    tabindex: {
      type: [Number, String],
      default: 0
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    inputStyle: {
      type: [String, Object],
      default: ''
    }
  },

  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur', 'clear'],

  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null)
    const focused = ref(false)
    const passwordVisible = ref(false)

    // 生成唯一ID
    const uniqueId = ref(props.id || `u-input-${++idCounter}`)

    // 计算输入框样式
    const inputWrapperStyle = computed(() => {
      const style: Record<string, string> = {}

      // 应用尺寸
      if (props.size === 'small') {
        style['--input-height'] = '24px'
        style['--input-font-size'] = '12px'
      } else if (props.size === 'medium') {
        style['--input-height'] = '32px'
        style['--input-font-size'] = '14px'
      } else if (props.size === 'large') {
        style['--input-height'] = '40px'
        style['--input-font-size'] = '16px'
      }

      // 应用边框和颜色
      style['--input-border-color'] = focused.value
        ? '#18a058'
        : '#d9d9d9'
      style['--input-text-color'] = '#333639'
      style['--input-border-radius'] = '3px'

      return style
    })

    // 计算内部输入框样式
    const inputInnerStyle = computed(() => {
      if (typeof props.inputStyle === 'string') {
        return props.inputStyle
      }
      return props.inputStyle
    })

    // 计算内部输入框类名
    const inputClass = computed(() => {
      return []
    })

    // 处理输入事件
    const handleInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      emit('update:modelValue', value)
      emit('input', value)
    }

    // 处理变更事件
    const handleChange = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      emit('change', value)
    }

    // 处理聚焦事件
    const handleFocus = (event: FocusEvent) => {
      focused.value = true
      emit('focus', event)
    }

    // 处理失焦事件
    const handleBlur = (event: FocusEvent) => {
      focused.value = false
      emit('blur', event)
    }

    // 处理清除事件
    const handleClear = () => {
      emit('update:modelValue', '')
      emit('input', '')
      emit('clear')

      // 聚焦输入框
      nextTick(() => {
        inputRef.value?.focus()
      })
    }

    // 处理密码可见性切换
    const handleTogglePassword = () => {
      passwordVisible.value = !passwordVisible.value

      // 聚焦输入框
      nextTick(() => {
        inputRef.value?.focus()
      })
    }

    // 监听 value 属性变化
    watch(() => props.value, (val) => {
      if (val !== undefined && val !== props.modelValue) {
        emit('update:modelValue', val)
      }
    })

    // 组件挂载后
    onMounted(() => {
      // 如果有 value 但没有 modelValue，则更新 modelValue
      if (props.value !== undefined && props.modelValue === '') {
        emit('update:modelValue', props.value)
      }
    })

    return {
      inputRef,
      focused,
      passwordVisible,
      uniqueId,
      inputWrapperStyle,
      inputInnerStyle,
      inputClass,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleClear,
      handleTogglePassword
    }
  }
})
</script>

<style scoped>
.u-input {
  position: relative;
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
  height: var(--input-height);
  line-height: var(--input-height);
  font-size: var(--input-font-size);
}

.u-input__inner {
  width: 100%;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  color: var(--input-text-color);
  background-color: #fff;
  background-image: none;
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  transition: border-color 0.2s;
  outline: none;
  font-size: inherit;
}

.u-input__inner:hover {
  border-color: var(--input-border-color-hover, var(--input-border-color));
}

.u-input__inner:focus {
  border-color: var(--input-border-color-focus, var(--input-border-color));
}

.u-input--disabled .u-input__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.u-input--prefix .u-input__inner {
  padding-left: 30px;
}

.u-input--suffix .u-input__inner {
  padding-right: 30px;
}

.u-input__prefix,
.u-input__suffix {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  color: #c0c4cc;
  height: 100%;
}

.u-input__prefix {
  left: 5px;
}

.u-input__suffix {
  right: 5px;
}

.u-input__clear,
.u-input__password {
  cursor: pointer;
  margin: 0 5px;
}

.u-input__clear-icon,
.u-input__password-icon {
  font-size: 14px;
  color: #c0c4cc;
}

.u-input__clear:hover .u-input__clear-icon,
.u-input__password:hover .u-input__password-icon {
  color: #909399;
}
</style>
