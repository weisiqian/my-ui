import type MarkdownIt from 'markdown-it'
import type { DemoBlockPluginOptions } from './index'
import path from 'path'
import fs from 'fs'
import container from 'markdown-it-container'

/**
 * 用于解析 Markdown 中的 demo 块的插件
 */
export function demoBlockPlugin(
  md: MarkdownIt,
  options: DemoBlockPluginOptions = {}
) {
  const {
    componentsDir = 'examples',
    blockName = 'demo',
    clientOnly = false,
    alias = {}
  } = options

  // 自定义容器插件
  md.use(container, blockName, {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/) !== null
    },
    render(tokens: any[], idx: number) {
      const token = tokens[idx]

      // 开始标记
      if (token.nesting === 1) {
        // 获取标题和描述
        const titleMatch = token.info.trim().match(/^demo\s+(.*)$/)
        let title = ''
        let description = ''

        if (titleMatch && titleMatch[1]) {
          const parts = titleMatch[1].split('||').map((s: string) => s.trim())
          title = parts[0]
          description = parts[1] || ''
        }

        // 获取下一个 token 的内容，即组件路径
        const contentToken = tokens[idx + 1]
        const content = contentToken.content.trim()

        // 解析组件路径
        const componentPathMatch = content.match(/^@\/(.+)\.vue$/) || content.match(/^(.+)\.vue$/)
        if (!componentPathMatch) {
          return `<div class="my-ui-demo-block-error">无效的组件路径: ${content}</div>`
        }

        let componentPath = componentPathMatch[1]
        let fullComponentPath = ''

        // 处理路径别名
        if (componentPath.startsWith('@/')) {
          // 如果路径以 @ 开头，则替换为项目根目录
          componentPath = componentPath.replace('@/', '')
          fullComponentPath = path.resolve(process.cwd(), componentPath + '.vue')
        } else {
          // 处理其他别名
          let aliasReplaced = false
          Object.entries(alias).forEach(([key, value]) => {
            if (componentPath.startsWith(key)) {
              componentPath = componentPath.replace(key, value)
              aliasReplaced = true
            }
          })

          if (aliasReplaced) {
            fullComponentPath = path.resolve(componentPath + '.vue')
          } else {
            // 如果没有别名，则假设是相对于 examples 目录的路径
            fullComponentPath = path.resolve(process.cwd(), componentsDir, componentPath + '.vue')
          }
        }

        // 读取组件源码
        let componentCode = ''
        try {
          componentCode = fs.readFileSync(fullComponentPath, 'utf-8')
        } catch (error) {
          return `<div class="my-ui-demo-block-error">找不到组件: ${fullComponentPath}</div>`
        }

        // 提取组件名称
        const componentName = path.basename(componentPath)
        const componentNamePascalCase = componentName
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')

        // 构建 demo-block 组件
        const demoBlockProps = [
          `title="${title}"`,
          `description="${description}"`,
          `component-name="${componentNamePascalCase}"`,
          `component-path="${componentPath}"`,
          `source-code=${JSON.stringify(componentCode)}`
        ]

        // 如果需要禁用 SSR，则添加 client-only 属性
        if (clientOnly) {
          demoBlockProps.push('client-only')
        }

        return `<MyUIDemoBlock ${demoBlockProps.join(' ')}>`
      } else {
        // 结束标记
        return '</MyUIDemoBlock>'
      }
    }
  })
}
