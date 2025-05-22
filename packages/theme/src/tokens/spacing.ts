/**
 * 间距设计令牌
 * 
 * 定义系统中使用的所有间距、边距、内边距等
 */

/**
 * 间距设计令牌类型定义
 */
export interface SpacingTokens {
  // 基础间距单位
  unit: number

  // 间距比例
  scale: {
    none: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
    xxxl: string
  }

  // 组件内部间距
  padding: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }

  // 组件间距
  margin: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }

  // 布局间距
  layout: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}

/**
 * 默认间距设计令牌
 */
export const spacing: SpacingTokens = {
  // 基础间距单位 (4px)
  unit: 4,

  // 间距比例
  scale: {
    none: '0',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px'
  },

  // 组件内部间距
  padding: {
    xs: '4px 8px',
    sm: '6px 12px',
    md: '8px 16px',
    lg: '12px 20px',
    xl: '16px 24px'
  },

  // 组件间距
  margin: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px'
  },

  // 布局间距
  layout: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px'
  }
}
