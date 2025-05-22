import type { App } from 'vue'

// 导入主题
import { createTheme, useTheme, lightTheme, darkTheme } from '@my-ui/theme'

// 插件安装函数
const install = (app: App) => {
  return app
}

// 导出版本号
export const version = '0.1.0'

// 导出主题相关
export {
  // 主题
  createTheme,
  useTheme,
  lightTheme,
  darkTheme
}

// 默认导出
export default {
  version,
  install
}
