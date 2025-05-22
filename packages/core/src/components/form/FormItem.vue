<template>
  <div
    :class="[
      'u-form-item',
      {
        'u-form-item--error': validateState === 'error',
        'u-form-item--success': validateState === 'success',
        'u-form-item--validating': validateState === 'validating',
        'u-form-item--required': isRequired,
        [`u-form-item--${computedSize.value}`]: computedSize.value
      }
    ]"
  >
    <label
      v-if="label || $slots.label"
      :class="['u-form-item__label', { 'u-form-item__label--required': isRequired }]"
      :style="labelStyle"
      :for="uniqueId"
    >
      <slot name="label">{{ label }}</slot>
      {{ form?.labelSuffix }}
    </label>

    <div class="u-form-item__content" :style="contentStyle">
      <slot></slot>

      <div
        v-if="validateMessage && showErrorMessage"
        :class="[
          'u-form-item__error',
          {
            'u-form-item__error--inline': form?.inlineMessage || inlineMessage
          }
        ]"
      >
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, computed, provide, onMounted, onBeforeUnmount, watch, getCurrentInstance } from 'vue'
import { formContextKey } from './Form.vue'

// 生成唯一ID的计数器
let formItemIdCounter = 0

// 表单项上下文键
export const formItemContextKey = Symbol('formItemContextKey')

export default defineComponent({
  name: 'UFormItem',

  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: [String, Number],
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: undefined
    },
    rules: {
      type: [Object, Array],
      default: () => []
    },
    error: {
      type: String,
      default: ''
    },
    validateStatus: {
      type: String,
      default: '',
      validator: (val: string) => {
        return ['', 'error', 'validating', 'success'].includes(val)
      }
    },
    for: {
      type: String,
      default: ''
    },
    inlineMessage: {
      type: Boolean,
      default: undefined
    },
    showMessage: {
      type: Boolean,
      default: undefined
    },
    size: {
      type: String,
      default: '',
      validator: (val: string) => {
        return ['', 'small', 'medium', 'large'].includes(val)
      }
    }
  },

  setup(props) {
    const form = inject(formContextKey, undefined)
    const instance = getCurrentInstance()

    // 生成唯一ID
    const uniqueId = ref(props.for || `u-form-item-${++formItemIdCounter}`)

    // 验证状态
    const validateState = ref(props.validateStatus || '')
    // 验证消息
    const validateMessage = ref(props.error || '')
    // 是否正在验证
    const validating = ref(false)

    // 计算尺寸
    const computedSize = computed(() => props.size || form?.size || 'medium')

    // 计算标签样式
    const labelStyle = computed(() => {
      if (form?.labelPosition === 'top') {
        return {}
      }

      const labelWidth = props.labelWidth || form?.labelWidth
      if (labelWidth) {
        return {
          width: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth
        }
      }

      return {}
    })

    // 计算内容样式
    const contentStyle = computed(() => {
      if (form?.labelPosition === 'top') {
        return {}
      }

      const labelWidth = props.labelWidth || form?.labelWidth
      if (labelWidth) {
        return {
          marginLeft: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth
        }
      }

      return {}
    })

    // 是否显示错误消息
    const showErrorMessage = computed(() => {
      return props.showMessage !== undefined
        ? props.showMessage
        : form?.showMessage !== undefined
          ? form.showMessage
          : true
    })

    // 获取字段值
    const fieldValue = computed(() => {
      const model = form?.model
      if (!model || !props.prop) {
        return
      }

      return model[props.prop]
    })

    // 获取验证规则
    const getRules = () => {
      const formRules = form?.rules
      const selfRules = props.rules

      if (!formRules && !selfRules) {
        return []
      }

      const prop = props.prop
      if (!prop) {
        return []
      }

      const rules = formRules?.[prop] || []
      const selfRulesArr = Array.isArray(selfRules) ? selfRules : selfRules ? [selfRules] : []

      return [...rules, ...selfRulesArr]
    }

    // 判断是否必填
    const isRequired = computed(() => {
      if (props.required !== undefined) {
        return props.required
      }

      const rules = getRules()
      return rules.some(rule => rule.required)
    })

    // 验证字段
    const validate = async (trigger = '', callback?: (isValid: boolean) => void) => {
      const rules = getRules()

      if (!rules || !rules.length) {
        callback?.(true)
        return Promise.resolve(true)
      }

      const prop = props.prop
      if (!prop) {
        callback?.(true)
        return Promise.resolve(true)
      }

      const model = form?.model
      if (!model) {
        callback?.(true)
        return Promise.resolve(true)
      }

      // 过滤规则
      const filteredRules = trigger
        ? rules.filter(rule => !rule.trigger || (Array.isArray(rule.trigger) ? rule.trigger.includes(trigger) : rule.trigger === trigger))
        : rules

      if (!filteredRules.length) {
        callback?.(true)
        return Promise.resolve(true)
      }

      // 设置验证状态
      validateState.value = 'validating'
      validating.value = true

      // 执行验证
      const value = model[prop]
      const errors: string[] = []

      for (const rule of filteredRules) {
        try {
          // 必填验证
          if (rule.required && (value === undefined || value === null || value === '')) {
            errors.push(rule.message || `${props.label || prop} is required`)
            continue
          }

          // 最小长度验证
          if (rule.min !== undefined && typeof value === 'string' && value.length < rule.min) {
            errors.push(rule.message || `${props.label || prop} must be at least ${rule.min} characters`)
            continue
          }

          // 最大长度验证
          if (rule.max !== undefined && typeof value === 'string' && value.length > rule.max) {
            errors.push(rule.message || `${props.label || prop} cannot exceed ${rule.max} characters`)
            continue
          }

          // 正则验证
          if (rule.pattern && !rule.pattern.test(value)) {
            errors.push(rule.message || `${props.label || prop} format is invalid`)
            continue
          }

          // 自定义验证器
          if (rule.validator) {
            await new Promise<void>((resolve, reject) => {
              rule.validator(rule, value, (error?: Error) => {
                if (error) {
                  reject(error.message)
                } else {
                  resolve()
                }
              })
            })
          }
        } catch (e) {
          if (typeof e === 'string') {
            errors.push(e)
          } else if (e instanceof Error) {
            errors.push(e.message)
          }
        }
      }

      // 更新验证状态
      validating.value = false

      if (errors.length) {
        validateState.value = 'error'
        validateMessage.value = errors[0]
        callback?.(false)
        return Promise.reject(errors[0])
      } else {
        validateState.value = 'success'
        validateMessage.value = ''
        callback?.(true)
        return Promise.resolve(true)
      }
    }

    // 重置字段
    const resetField = () => {
      const prop = props.prop
      if (!prop || !form?.model) return

      // 重置值
      const model = form.model
      const initialValue = instance?.props.value

      if (initialValue !== undefined) {
        model[prop] = initialValue
      } else {
        model[prop] = Array.isArray(model[prop]) ? [] : typeof model[prop] === 'object' ? {} : ''
      }

      // 清除验证状态
      validateState.value = ''
      validateMessage.value = ''
      validating.value = false
    }

    // 清除验证
    const clearValidate = () => {
      validateState.value = ''
      validateMessage.value = ''
      validating.value = false
    }

    // 监听值变化
    watch(fieldValue, () => {
      validate('change')
    })

    // 监听验证状态
    watch(() => props.validateStatus, (val) => {
      validateState.value = val || ''
    })

    // 监听错误信息
    watch(() => props.error, (val) => {
      validateMessage.value = val || ''
    })

    // 组件挂载时
    onMounted(() => {
      if (props.prop) {
        form?.addField?.({
          prop: props.prop,
          validate,
          resetField,
          clearValidate
        })
      }
    })

    // 组件卸载前
    onBeforeUnmount(() => {
      if (props.prop) {
        form?.removeField?.({
          prop: props.prop
        })
      }
    })

    // 提供表单项上下文
    provide(formItemContextKey, {
      prop: computed(() => props.prop),
      validateState,
      validate,
      resetField,
      clearValidate
    })

    return {
      form,
      validateState,
      validateMessage,
      isRequired,
      labelStyle,
      contentStyle,
      showErrorMessage,
      uniqueId,
      validate,
      resetField,
      clearValidate,
      computedSize
    }
  }
})
</script>

<style scoped>
.u-form-item {
  margin-bottom: 18px;
}

.u-form-item__label {
  display: inline-block;
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  color: #606266;
  line-height: 32px;
  padding-right: 12px;
  box-sizing: border-box;
}

.u-form-item__label--required::before {
  content: '*';
  color: #f56c6c;
  margin-right: 4px;
}

.u-form-item__content {
  position: relative;
  font-size: 14px;
  line-height: 32px;
}

.u-form-item__error {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 0;
}

.u-form-item__error--inline {
  position: relative;
  top: 0;
  margin-left: 10px;
}

.u-form-item--error .u-form-item__content input,
.u-form-item--error .u-form-item__content textarea,
.u-form-item--error .u-form-item__content select {
  border-color: #f56c6c;
}

.u-form-item--small .u-form-item__label {
  line-height: 24px;
  font-size: 12px;
}

.u-form-item--small .u-form-item__content {
  line-height: 24px;
  font-size: 12px;
}

.u-form-item--large .u-form-item__label {
  line-height: 40px;
  font-size: 16px;
}

.u-form-item--large .u-form-item__content {
  line-height: 40px;
  font-size: 16px;
}
</style>
