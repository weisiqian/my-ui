import { h } from 'vue'
import Theme from 'vitepress/theme'
import MyUI from '@my-ui/core'
import DemoContainer from './components/DemoContainer.vue'
import MyUIDemoBlock from '../plugins/demo-block/components/DemoBlock.vue'
import './styles/vars.css'
import './styles/custom.css'

console.log('DEMO-OPEN:', `<MyUIDemoBlock title="…" …>`)
console.log('DEMO-CLOSE:', '</MyUIDemoBlock>')


// 导入组件样式
import '../../styles/index.css'
import '../../styles/components.css'

export default {
  ...Theme,

  enhanceApp({ app }) {
    // 注册 My UI 组件
    app.use(MyUI)

    // 注册演示容器组件
    app.component('DemoContainer', DemoContainer)

    // 注册 Demo 块组件
    app.component('MyUIDemoBlock', MyUIDemoBlock)
  }
}
