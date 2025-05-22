import type { App } from 'vue'
import * as components from './components'
import { version } from '../package.json'

// 导入全局样式
import './styles/index.css'

// 创建插件安装函数
const install = (app: App) => {
  // 注册所有组件
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })

  return app
}

// 导出版本号
export { version }

// 导出所有组件
export * from './components'

// 导出主题相关
export * from './theme'

// 默认导出
export default {
  version,
  install
}
