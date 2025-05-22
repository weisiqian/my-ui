import type { InjectionKey, Ref } from 'vue'

export type FormSize = 'small' | 'medium' | 'large'
export type FormLabelPosition = 'left' | 'right' | 'top'

export interface FormRule {
  required?: boolean
  message?: string
  trigger?: 'blur' | 'change' | Array<'blur' | 'change'>
  min?: number
  max?: number
  pattern?: RegExp
  validator?: (rule: any, value: any, callback: (error?: Error) => void) => void
}

export type FormRules = Record<string, FormRule | FormRule[]>

export interface FormProps {
  model?: Record<string, any>
  rules?: FormRules
  labelPosition?: FormLabelPosition
  labelWidth?: string | number
  labelSuffix?: string
  inline?: boolean
  inlineMessage?: boolean
  statusIcon?: boolean
  showMessage?: boolean
  size?: FormSize
  disabled?: boolean
  validateOnRuleChange?: boolean
  hideRequiredAsterisk?: boolean
}

export interface FormItemProps {
  label?: string
  labelWidth?: string | number
  prop?: string
  required?: boolean
  rules?: FormRule | FormRule[]
  error?: string
  validateStatus?: '' | 'error' | 'validating' | 'success'
  for?: string
  inlineMessage?: boolean
  showMessage?: boolean
  size?: FormSize
}

export interface FormContext {
  model: Ref<Record<string, any> | undefined>
  rules: Ref<FormRules | undefined>
  size: Ref<FormSize | undefined>
  disabled: Ref<boolean>
  labelPosition: Ref<FormLabelPosition>
  labelWidth: Ref<string | number | undefined>
  labelSuffix: Ref<string | undefined>
  inline: Ref<boolean>
  inlineMessage: Ref<boolean>
  statusIcon: Ref<boolean>
  showMessage: Ref<boolean>
  validateField: (props: string | string[], callback?: (isValid: boolean) => void) => Promise<void>
  resetFields: (props?: string | string[]) => void
  clearValidate: (props?: string | string[]) => void
}

export interface FormItemContext {
  prop: Ref<string | undefined>
  validateState: Ref<'' | 'error' | 'validating' | 'success'>
  validate: (trigger?: string, callback?: (isValid: boolean) => void) => Promise<void>
  resetField: () => void
  clearValidate: () => void
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')
