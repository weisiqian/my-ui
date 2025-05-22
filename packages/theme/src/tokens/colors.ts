/**
 * 颜色设计令牌
 * 
 * 定义系统中使用的所有颜色
 */

/**
 * 颜色设计令牌类型定义
 */
export interface ColorTokens {
  // 品牌色
  primary: string
  primaryHover: string
  primaryPressed: string
  primarySuppl: string

  // 功能色
  info: string
  infoHover: string
  infoPressed: string
  infoSuppl: string

  success: string
  successHover: string
  successPressed: string
  successSuppl: string

  warning: string
  warningHover: string
  warningPressed: string
  warningSuppl: string

  error: string
  errorHover: string
  errorPressed: string
  errorSuppl: string

  // 中性色
  text: {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
    disabled: string
    inverse: string
  }

  background: {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
    disabled: string
    inverse: string
  }

  border: {
    primary: string
    secondary: string
    tertiary: string
    quaternary: string
    disabled: string
  }

  // 亮色/暗色主题
  dark?: ColorTokens
}

/**
 * 默认颜色设计令牌 - 亮色主题
 */
export const colors: ColorTokens = {
  // 品牌色
  primary: '#18a058',
  primaryHover: '#36ad6a',
  primaryPressed: '#0c7a43',
  primarySuppl: '#edf9f0',

  // 功能色
  info: '#2080f0',
  infoHover: '#4098fc',
  infoPressed: '#1060c9',
  infoSuppl: '#edf4ff',

  success: '#18a058',
  successHover: '#36ad6a',
  successPressed: '#0c7a43',
  successSuppl: '#edf9f0',

  warning: '#f0a020',
  warningHover: '#fcb040',
  warningPressed: '#c97c10',
  warningSuppl: '#fff8e6',

  error: '#d03050',
  errorHover: '#de576d',
  errorPressed: '#ab1f3f',
  errorSuppl: '#ffedee',

  // 中性色
  text: {
    primary: '#333639',
    secondary: '#666666',
    tertiary: '#999999',
    quaternary: '#cccccc',
    disabled: '#c0c4cc',
    inverse: '#ffffff'
  },

  background: {
    primary: '#ffffff',
    secondary: '#f5f7fa',
    tertiary: '#ebedf0',
    quaternary: '#e4e7ed',
    disabled: '#f5f7fa',
    inverse: '#333639'
  },

  border: {
    primary: '#d9d9d9',
    secondary: '#e4e7ed',
    tertiary: '#ebedf0',
    quaternary: '#f2f6fc',
    disabled: '#e4e7ed'
  },

  // 暗色主题
  dark: {
    // 品牌色
    primary: '#63e2b7',
    primaryHover: '#7fe7c4',
    primaryPressed: '#5acea7',
    primarySuppl: '#1a2a1f',

    // 功能色
    info: '#70c0e8',
    infoHover: '#8acbec',
    infoPressed: '#66afd3',
    infoSuppl: '#1a2b3c',

    success: '#63e2b7',
    successHover: '#7fe7c4',
    successPressed: '#5acea7',
    successSuppl: '#1a2a1f',

    warning: '#f2c97d',
    warningHover: '#f5d599',
    warningPressed: '#e6c260',
    warningSuppl: '#2b2111',

    error: '#e88080',
    errorHover: '#e98b8b',
    errorPressed: '#e57272',
    errorSuppl: '#2b1a1a',

    // 中性色
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
      tertiary: '#c0c0c0',
      quaternary: '#909090',
      disabled: '#686b6e',
      inverse: '#333639'
    },

    background: {
      primary: '#333639',
      secondary: '#2e3033',
      tertiary: '#292a2d',
      quaternary: '#232427',
      disabled: '#2e3033',
      inverse: '#ffffff'
    },

    border: {
      primary: '#4c4d4f',
      secondary: '#3e3e40',
      tertiary: '#323234',
      quaternary: '#28282a',
      disabled: '#3e3e40'
    }
  }
}
