import type MarkdownIt from 'markdown-it'
import type { Plugin } from 'vite'
import { demoBlockPlugin as mdDemoBlockPlugin } from './markdown'
import type { ResolvedConfig } from 'vitepress'

export interface DemoBlockPluginOptions {
  /**
   * 组件示例的根目录
   * @default 'examples'
   */
  componentsDir?: string

  /**
   * 自定义容器名称
   * @default 'demo'
   */
  blockName?: string

  /**
   * 路径别名
   */
  alias?: Record<string, string>

  /**
   * 是否禁用 SSR
   * @default false
   */
  clientOnly?: boolean
}

/**
 * 用于解析 Markdown 中的 demo 块的插件
 */
export function demoBlockPlugin(
  md: MarkdownIt,
  options: DemoBlockPluginOptions = {}
) {
  return mdDemoBlockPlugin(md, options)
}

/**
 * 用于在 VitePress 中注册 demo 块插件
 */
export function MyUIDemoBlock(options: DemoBlockPluginOptions = {}): Plugin {
  const { componentsDir = 'examples', blockName = 'demo' } = options

  return {
    name: 'vitepress-plugin-my-ui-demo-block',

    configureServer(server) {
      // 监听示例组件目录的变化，以便热更新
      return () => {
        server.watcher.add(`${componentsDir}/**/*.vue`)
      }
    },

    // 在 VitePress 配置中注册 Markdown 插件
    config(config) {
      return {
        markdown: {
          config(md: MarkdownIt) {
            md.use(mdDemoBlockPlugin, options)
          }
        }
      }
    }
  }
}

export default MyUIDemoBlock
