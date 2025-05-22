/**
 * 设计令牌系统入口文件
 * 
 * 这个文件导出所有设计令牌，并提供设计令牌的合并和覆盖机制
 */

import { colors, type ColorTokens } from './colors'
import { typography, type TypographyTokens } from './typography'
import { spacing, type SpacingTokens } from './spacing'
import { borders, type BorderTokens } from './borders'
import { shadows, type ShadowTokens } from './shadows'
import { animations, type AnimationTokens } from './animations'

/**
 * 设计令牌类型定义
 */
export interface DesignTokens {
  colors: ColorTokens
  typography: TypographyTokens
  spacing: SpacingTokens
  borders: BorderTokens
  shadows: ShadowTokens
  animations: AnimationTokens
}

/**
 * 主题模式
 */
export type ThemeMode = 'light' | 'dark'

/**
 * 默认设计令牌
 */
export const defaultTokens: Record<ThemeMode, DesignTokens> = {
  light: {
    colors,
    typography,
    spacing,
    borders,
    shadows,
    animations
  },
  dark: {
    colors: colors.dark,
    typography,
    spacing,
    borders,
    shadows,
    animations
  }
}

/**
 * 合并设计令牌
 * 
 * @param base 基础设计令牌
 * @param override 要覆盖的设计令牌
 * @returns 合并后的设计令牌
 */
export function mergeTokens(base: DesignTokens, override: Partial<DesignTokens>): DesignTokens {
  return {
    colors: { ...base.colors, ...override.colors },
    typography: { ...base.typography, ...override.typography },
    spacing: { ...base.spacing, ...override.spacing },
    borders: { ...base.borders, ...override.borders },
    shadows: { ...base.shadows, ...override.shadows },
    animations: { ...base.animations, ...override.animations }
  }
}

export * from './colors'
export * from './typography'
export * from './spacing'
export * from './borders'
export * from './shadows'
export * from './animations'
