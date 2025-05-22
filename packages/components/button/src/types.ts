export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  round?: boolean
  circle?: boolean
  ghost?: boolean
  dashed?: boolean
  tag?: string
  color?: string
  textColor?: string
  block?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}
