/**
 * 动画设计令牌
 * 
 * 定义系统中使用的所有动画、过渡等
 */

/**
 * 动画设计令牌类型定义
 */
export interface AnimationTokens {
  // 过渡时间
  duration: {
    instant: string
    fast: string
    normal: string
    slow: string
    slower: string
  }

  // 过渡缓动函数
  easing: {
    linear: string
    ease: string
    easeIn: string
    easeOut: string
    easeInOut: string
  }

  // 过渡属性
  property: {
    none: string
    all: string
    common: string
    colors: string
    opacity: string
    shadow: string
    transform: string
  }
}

/**
 * 默认动画设计令牌
 */
export const animations: AnimationTokens = {
  // 过渡时间
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms'
  },

  // 过渡缓动函数
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },

  // 过渡属性
  property: {
    none: 'none',
    all: 'all',
    common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform'
  }
}
