import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

// 主题类型
export interface Theme {
  name: string
  common: {
    primaryColor: string
    primaryColorHover: string
    primaryColorPressed: string
    infoColor: string
    successColor: string
    warningColor: string
    errorColor: string
    textColor: string
    textColorDisabled: string
    borderColor: string
    borderRadius: string
    fontSize: string
  }
  Button: {
    textColor: string
    textColorPrimary: string
    textColorInfo: string
    textColorSuccess: string
    textColorWarning: string
    textColorError: string
    border: string
    borderPrimary: string
    borderInfo: string
    borderSuccess: string
    borderWarning: string
    borderError: string
    borderRadius: string
    fontWeight: string
    fontSizeSmall: string
    fontSizeMedium: string
    fontSizeLarge: string
    heightSmall: string
    heightMedium: string
    heightLarge: string
    paddingSmall: string
    paddingMedium: string
    paddingLarge: string
  }
  Input: {
    textColor: string
    borderColor: string
    borderColorHover: string
    borderColorFocus: string
    borderRadius: string
    heightSmall: string
    heightMedium: string
    heightLarge: string
    fontSizeSmall: string
    fontSizeMedium: string
    fontSizeLarge: string
  }
  // 其他组件的主题配置...
}

// 默认亮色主题
export const lightTheme: Theme = {
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
  Button: {
    textColor: '#333639',
    textColorPrimary: '#fff',
    textColorInfo: '#fff',
    textColorSuccess: '#fff',
    textColorWarning: '#fff',
    textColorError: '#fff',
    border: '1px solid #d9d9d9',
    borderPrimary: '1px solid #18a058',
    borderInfo: '1px solid #2080f0',
    borderSuccess: '1px solid #18a058',
    borderWarning: '1px solid #f0a020',
    borderError: '1px solid #d03050',
    borderRadius: '3px',
    fontWeight: '400',
    fontSizeSmall: '12px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px',
    heightSmall: '24px',
    heightMedium: '32px',
    heightLarge: '40px',
    paddingSmall: '0 10px',
    paddingMedium: '0 14px',
    paddingLarge: '0 18px'
  },
  Input: {
    textColor: '#333639',
    borderColor: '#d9d9d9',
    borderColorHover: '#36ad6a',
    borderColorFocus: '#18a058',
    borderRadius: '3px',
    heightSmall: '24px',
    heightMedium: '32px',
    heightLarge: '40px',
    fontSizeSmall: '12px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px'
  }
  // 其他组件的主题配置...
}

// 默认暗色主题
export const darkTheme: Theme = {
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
  Button: {
    textColor: '#ffffff',
    textColorPrimary: '#18a058',
    textColorInfo: '#2080f0',
    textColorSuccess: '#18a058',
    textColorWarning: '#f0a020',
    textColorError: '#d03050',
    border: '1px solid #4c4d4f',
    borderPrimary: '1px solid #63e2b7',
    borderInfo: '1px solid #70c0e8',
    borderSuccess: '1px solid #63e2b7',
    borderWarning: '1px solid #f2c97d',
    borderError: '1px solid #e88080',
    borderRadius: '3px',
    fontWeight: '400',
    fontSizeSmall: '12px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px',
    heightSmall: '24px',
    heightMedium: '32px',
    heightLarge: '40px',
    paddingSmall: '0 10px',
    paddingMedium: '0 14px',
    paddingLarge: '0 18px'
  },
  Input: {
    textColor: '#ffffff',
    borderColor: '#4c4d4f',
    borderColorHover: '#7fe7c4',
    borderColorFocus: '#63e2b7',
    borderRadius: '3px',
    heightSmall: '24px',
    heightMedium: '32px',
    heightLarge: '40px',
    fontSizeSmall: '12px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px'
  }
  // 其他组件的主题配置...
}

// 全局主题状态
export const currentTheme = ref<Theme>(lightTheme)
export const themeOverrides = ref<Partial<Theme> | null>(null)

// 合并主题
export const mergedTheme = computed(() => {
  if (!themeOverrides.value) return currentTheme.value

  // 深度合并主题
  const merged = { ...currentTheme.value }
  const overrides = themeOverrides.value

  // 合并 common
  if (overrides.common) {
    merged.common = { ...merged.common, ...overrides.common }
  }

  // 合并各个组件的主题
  if (overrides.Button) {
    merged.Button = { ...merged.Button, ...overrides.Button }
  }

  if (overrides.Input) {
    merged.Input = { ...merged.Input, ...overrides.Input }
  }

  // 其他组件的主题合并...

  return merged
})

// 创建主题
export function createTheme(theme: Theme = lightTheme, customOverrides: Partial<Theme> | null = null) {
  currentTheme.value = theme
  themeOverrides.value = customOverrides

  return {
    theme: currentTheme,
    themeOverrides,
    mergedTheme
  }
}

// 使用主题
export function useTheme() {
  return {
    theme: currentTheme,
    themeOverrides,
    mergedTheme
  }
}
