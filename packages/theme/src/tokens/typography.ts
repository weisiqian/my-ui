/**
 * 排版设计令牌
 * 
 * 定义系统中使用的所有字体、字号、行高等排版相关的设计令牌
 */

/**
 * 排版设计令牌类型定义
 */
export interface TypographyTokens {
  // 字体族
  fontFamily: {
    base: string
    mono: string
  }

  // 字重
  fontWeight: {
    light: number
    regular: number
    medium: number
    semibold: number
    bold: number
  }

  // 字号
  fontSize: {
    xs: string
    sm: string
    base: string
    md: string
    lg: string
    xl: string
    xxl: string
    xxxl: string
  }

  // 行高
  lineHeight: {
    tight: number
    normal: number
    relaxed: number
    loose: number
  }

  // 字间距
  letterSpacing: {
    tighter: string
    tight: string
    normal: string
    wide: string
    wider: string
    widest: string
  }
}

/**
 * 默认排版设计令牌
 */
export const typography: TypographyTokens = {
  // 字体族
  fontFamily: {
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },

  // 字重
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },

  // 字号
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '30px'
  },

  // 行高
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2
  },

  // 字间距
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
}
