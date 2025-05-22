import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Uni UI',
  description: 'A Vue 3 Component Library',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { 
        text: '主题', 
        items: [
          { text: '主题定制', link: '/guide/theme' },
          { text: '设计令牌', link: '/guide/design-tokens' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/your-username/uni-ui' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '主题定制', link: '/guide/theme' },
            { text: '设计令牌', link: '/guide/design-tokens' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' }
            // 其他组件...
          ]
        }
      ]
    },
    locales: {
      '/': {
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '组件', link: '/components/' },
          { 
            text: '主题', 
            items: [
              { text: '主题定制', link: '/guide/theme' },
              { text: '设计令牌', link: '/guide/design-tokens' }
            ]
          },
          { text: 'GitHub', link: 'https://github.com/your-username/uni-ui' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/guide/' },
                { text: '快速开始', link: '/guide/getting-started' },
                { text: '主题定制', link: '/guide/theme' },
                { text: '设计令牌', link: '/guide/design-tokens' }
              ]
            }
          ]
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Components', link: '/en/components/' },
          { 
            text: 'Theme', 
            items: [
              { text: 'Theme Customization', link: '/en/guide/theme' },
              { text: 'Design Tokens', link: '/guide/design-tokens.en' }
            ]
          },
          { text: 'GitHub', link: 'https://github.com/your-username/uni-ui' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/en/guide/' },
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Theme Customization', link: '/en/guide/theme' },
                { text: 'Design Tokens', link: '/guide/design-tokens.en' }
              ]
            }
          ]
        }
      }
    }
  }
})
