// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import container from 'markdown-it-container'

// 路径别名配置
const alias = {
  '@': resolve(process.cwd(), 'docs')
}

export default defineConfig({
  title: 'My UI',
  description: 'A Vue 3 component library similar to Naive UI',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '主题', link: '/theme/' },
      { text: 'Playground', link: '/playground' },
      { text: 'GitHub', link: 'https://github.com/yourusername/my-ui' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '主题定制', link: '/guide/theme' },
            { text: '示例代码块', link: '/guide/demo-block' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Form 表单', link: '/components/form' }
          ]
        },
        {
          text: '数据展示',
          items: [{ text: 'Table 表格', link: '/components/table' }]
        },
        {
          text: '反馈组件',
          items: [{ text: 'Modal 模态框', link: '/components/modal' }]
        }
      ],
      '/theme/': [
        {
          text: '主题',
          items: [
            { text: '主题系统', link: '/theme/' },
            { text: '定制主题', link: '/theme/custom' },
            { text: '暗色模式', link: '/theme/dark-mode' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/yourusername/my-ui' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    }
  },

  markdown: {
    config(md) {
      md.use(container, 'demo', {
        validate(params: string) {
          return /^demo\s+/.test(params.trim())
        },
        render(tokens: any[], idx: number) {
          const token = tokens[idx]
          if (token.nesting === 1) {
            /* ----------- 开 始 ----------- */
  
            // ➊ 解析标题 / 描述
            const info = token.info.trim().slice(4).trim()          // 去掉 'demo'
            const [title = '', description = ''] =
              info.split('||').map((s) => s.trim())
  
            // ➋ 向后找第一条 inline -> .vue 行
            let pathToken: any | null = null
            for (let i = idx + 1; i < tokens.length; i++) {
              if (tokens[i].type === 'inline' && /\.vue\s*$/.test(tokens[i].content)) {
                pathToken = tokens[i]
                break
              }
              // 遇到下一个容器就提前退出，避免跨 demo
              if (tokens[i].type === 'container_demo_open') break
            }
            if (!pathToken) {
              return `<div class="my-ui-demo-block-error">未找到组件路径行</div>\n`
            }
  
            const rawPath = pathToken.content.trim()                // "@/examples/form/basic.vue"
            const m = rawPath.match(/^@\/examples\/(.+)\.vue$/)
            if (!m) {
              return `<div class="my-ui-demo-block-error">无效组件路径: ${rawPath}</div>\n`
            }
            const componentPath = m[1]                               // "form/basic"
            const componentName = componentPath
              .split('/').pop()!
              .split('-')
              .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
              .join('')
  
            // ➌ 清空那一行，避免它参与渲染
            pathToken.type = 'html_block'
            pathToken.content = ''
            pathToken.children = []
  
            // ➍ 返回开标签
            return (
              `<div class="my-ui-demo-block-wrapper">\n` +
              `<MyUIDemoBlock ` +
              `title="${title}" ` +
              `description="${description}" ` +
              `component-name="${componentName}" ` +
              // 这里加一个 '/'，得到 "/examples/form/basic"
              `component-path="/examples/${componentPath}">\n`
            )
          }
  
          /* ----------- 结 束 ----------- */
          return `</MyUIDemoBlock>\n</div>\n`
        }
      })
    }
  },

  vite: {
    resolve: { alias }
  }
})