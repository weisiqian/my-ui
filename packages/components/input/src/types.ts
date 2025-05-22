export type InputSize = 'small' | 'medium' | 'large'
export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url'

export interface InputProps {
  type?: InputType
  size?: InputSize
  value?: string | number
  modelValue?: string | number
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  showPassword?: boolean
  showWordLimit?: boolean
  maxlength?: number
  minlength?: number
  prefixIcon?: string
  suffixIcon?: string
  autosize?: boolean | { minRows?: number; maxRows?: number }
  name?: string
  form?: string
  id?: string
  tabindex?: number | string
  validateEvent?: boolean
  inputStyle?: string | object
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
  (e: 'change', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'clear'): void
}
