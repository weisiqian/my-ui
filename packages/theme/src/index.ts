import { ref, computed, inject, provide } from 'vue'
import type { InjectionKey, Ref, ComputedRef } from 'vue'
import { defaultTokens, type DesignTokens, type ThemeMode, mergeTokens } from './tokens'

/**
 * 主题类型
 */
export interface Theme {
  name: string
  // 设计令牌
  tokens: DesignTokens
  // 向后兼容的主题配置
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

/**
 * 默认亮色主题
 */
export const lightTheme: Theme = {
  name: 'light',
  // 设计令牌
  tokens: defaultTokens.light,
  // 向后兼容的主题配置
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

/**
 * 默认暗色主题
 */
export const darkTheme: Theme = {
  name: 'dark',
  // 设计令牌
  tokens: defaultTokens.dark,
  // 向后兼容的主题配置
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

/**
 * 主题注入键
 */
export const themeKey: InjectionKey<{
  theme: Ref<Theme>
  themeOverrides: Ref<Partial<Theme> | null>
  mergedTheme: ComputedRef<Theme>
  // 设计令牌相关
  tokens: ComputedRef<DesignTokens>
  tokensOverrides: Ref<Partial<DesignTokens> | null>
}> = Symbol('my-theme')

/**
 * 创建主题
 *
 * @param theme 基础主题
 * @param themeOverrides 主题覆盖配置
 * @param tokensOverrides 设计令牌覆盖配置
 * @returns 主题相关的响应式对象
 */
export function createTheme(
  theme: Theme = lightTheme,
  themeOverrides: Partial<Theme> | null = null,
  tokensOverrides: Partial<DesignTokens> | null = null
) {
  const themeRef = ref(theme)
  const themeOverridesRef = ref(themeOverrides)
  const tokensOverridesRef = ref(tokensOverrides)

  // 合并主题
  const mergedTheme = computed(() => {
    if (!themeOverridesRef.value) return themeRef.value

    // 深度合并主题
    const merged = { ...themeRef.value }
    const overrides = themeOverridesRef.value

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

  // 合并设计令牌
  const tokens = computed(() => {
    const baseTokens = themeRef.value.tokens

    if (!tokensOverridesRef.value) return baseTokens

    // 合并设计令牌
    return mergeTokens(baseTokens, tokensOverridesRef.value)
  })

  // 提供主题
  provide(themeKey, {
    theme: themeRef,
    themeOverrides: themeOverridesRef,
    mergedTheme,
    tokens,
    tokensOverrides: tokensOverridesRef
  })

  return {
    theme: themeRef,
    themeOverrides: themeOverridesRef,
    mergedTheme,
    tokens,
    tokensOverrides: tokensOverridesRef
  }
}

/**
 * 使用主题
 *
 * @returns 主题相关的响应式对象
 */
export function useTheme() {
  const theme = inject(themeKey)

  if (!theme) {
    throw new Error('useTheme() must be used after createTheme()')
  }

  return theme
}

// 导出设计令牌相关
export * from './tokens'
