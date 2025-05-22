/**
 * 边框设计令牌
 * 
 * 定义系统中使用的所有边框、圆角等
 */

/**
 * 边框设计令牌类型定义
 */
export interface BorderTokens {
  // 边框宽度
  width: {
    none: string
    thin: string
    base: string
    thick: string
  }

  // 边框样式
  style: {
    solid: string
    dashed: string
    dotted: string
  }

  // 圆角
  radius: {
    none: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    full: string
  }
}

/**
 * 默认边框设计令牌
 */
export const borders: BorderTokens = {
  // 边框宽度
  width: {
    none: '0',
    thin: '1px',
    base: '2px',
    thick: '3px'
  },

  // 边框样式
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted'
  },

  // 圆角
  radius: {
    none: '0',
    xs: '2px',
    sm: '3px',
    md: '5px',
    lg: '8px',
    xl: '12px',
    full: '9999px'
  }
}
