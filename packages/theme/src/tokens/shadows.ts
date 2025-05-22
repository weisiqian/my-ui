/**
 * 阴影设计令牌
 * 
 * 定义系统中使用的所有阴影
 */

/**
 * 阴影设计令牌类型定义
 */
export interface ShadowTokens {
  // 阴影层级
  elevation: {
    none: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }

  // 内阴影
  inset: {
    none: string
    xs: string
    sm: string
    md: string
  }

  // 文字阴影
  text: {
    none: string
    sm: string
    md: string
    lg: string
  }
}

/**
 * 默认阴影设计令牌
 */
export const shadows: ShadowTokens = {
  // 阴影层级
  elevation: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },

  // 内阴影
  inset: {
    none: 'none',
    xs: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  },

  // 文字阴影
  text: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 3px 6px rgba(0, 0, 0, 0.1)'
  }
}
