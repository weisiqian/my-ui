<template>
  <form
    :class="[
      'u-form',
      {
        'u-form--inline': inline,
        'u-form--label-left': labelPosition === 'left',
        'u-form--label-right': labelPosition === 'right',
        'u-form--label-top': labelPosition === 'top',
        [`u-form--${size}`]: size
      }
    ]"
    @submit.prevent
  >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, provide, toRefs, watch } from 'vue'

// 表单上下文键
export const formContextKey = Symbol('formContextKey')

export default defineComponent({
  name: 'UForm',

  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    labelPosition: {
      type: String,
      default: 'right',
      validator: (val: string) => {
        return ['left', 'right', 'top'].includes(val)
      }
    },
    labelWidth: {
      type: [String, Number],
      default: ''
    },
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    inlineMessage: {
      type: Boolean,
      default: false
    },
    statusIcon: {
      type: Boolean,
      default: false
    },
    showMessage: {
      type: Boolean,
      default: true
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
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
  },

  emits: ['validate'],

  setup(props, { emit }) {
    // 表单项集合
    const fields: any[] = []

    // 添加表单项
    const addField = (field: any) => {
      if (field) {
        fields.push(field)
      }
    }

    // 移除表单项
    const removeField = (field: any) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1)
      }
    }

    // 验证表单项
    const validateField = async (props: string | string[] = [], callback?: (isValid: boolean) => void) => {
      const props_arr = Array.isArray(props) ? props : [props]
      const fieldsToValidate = fields.filter(field => field.prop && (!props_arr.length || props_arr.includes(field.prop)))

      if (!fieldsToValidate.length) {
        callback?.(true)
        return Promise.resolve(true)
      }

      let errors: any[] = []

      for (const field of fieldsToValidate) {
        try {
          await field.validate('')
        } catch (e) {
          errors.push(e)
        }
      }

      const isValid = !errors.length
      callback?.(isValid)

      return isValid ? Promise.resolve() : Promise.reject(errors)
    }

    // 验证整个表单
    const validate = async (callback?: (isValid: boolean, invalidFields?: any) => void) => {
      const fieldsToValidate = fields.filter(field => field.prop)

      if (!fieldsToValidate.length) {
        callback?.(true)
        return Promise.resolve(true)
      }

      let errors: any = {}

      for (const field of fieldsToValidate) {
        try {
          await field.validate('')
        } catch (e) {
          errors[field.prop] = e
        }
      }

      const isValid = !Object.keys(errors).length
      callback?.(isValid, errors)

      return isValid ? Promise.resolve(true) : Promise.reject(errors)
    }

    // 重置表单
    const resetFields = (props?: string | string[]) => {
      const props_arr = Array.isArray(props) ? props : props ? [props] : []
      const fieldsToReset = fields.filter(field => field.prop && (!props_arr.length || props_arr.includes(field.prop)))

      fieldsToReset.forEach(field => {
        field.resetField()
      })
    }

    // 清除验证
    const clearValidate = (props?: string | string[]) => {
      const props_arr = Array.isArray(props) ? props : props ? [props] : []
      const fieldsToClear = fields.filter(field => field.prop && (!props_arr.length || props_arr.includes(field.prop)))

      fieldsToClear.forEach(field => {
        field.clearValidate()
      })
    }

    // 监听规则变化
    watch(() => props.rules, () => {
      if (props.validateOnRuleChange) {
        validate()
      }
    }, { deep: true })

    // 提供表单上下文
    provide(formContextKey, {
      ...toRefs(props),
      validateField,
      resetFields,
      clearValidate,
      addField,
      removeField
    })

    return {
      validate,
      validateField,
      resetFields,
      clearValidate
    }
  }
})
</script>

<style scoped>
.u-form {
  font-size: 14px;
}

.u-form--inline {
  display: flex;
  flex-wrap: wrap;
}

.u-form--inline .u-form-item {
  margin-right: 20px;
}

.u-form--label-left .u-form-item__label {
  text-align: left;
}

.u-form--label-right .u-form-item__label {
  text-align: right;
}

.u-form--label-top .u-form-item__label {
  display: block;
  margin-bottom: 8px;
  text-align: left;
}

.u-form--small {
  font-size: 12px;
}

.u-form--large {
  font-size: 16px;
}
</style>
