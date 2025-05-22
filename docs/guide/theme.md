# 主题定制

My UI 提供了灵活的主题定制功能，你可以根据自己的需求自定义主题。

## 主题系统

My UI 的主题系统基于 CSS 变量，你可以通过修改这些变量来自定义主题。

### 默认主题

My UI 提供了两套默认主题：亮色主题和暗色主题。

```js
import { createTheme, lightTheme, darkTheme } from '@my-ui/ui'

// 使用亮色主题
createTheme(lightTheme)

// 使用暗色主题
createTheme(darkTheme)
```

### 主题变量

以下是 My UI 的主题变量：

```js
// 亮色主题
const lightTheme = {
  name: 'light',
  common: {
    primaryColor: '#18a058',
    primaryColorHover: '#36ad6a',
    primaryColorPressed: '#0c7a43',
    infoColor: '#2080f0',
    successColor: '#18a058',
    warningColor: '#f0a020',
    errorColor: '#d03050',
    textColor: '#333639',
    textColorDisabled: '#c0c4cc',
    borderColor: '#d9d9d9',
    borderRadius: '3px',
    fontSize: '14px'
  },
  // 组件特定主题
  Button: {
    // ...
  },
  Input: {
    // ...
  }
  // 其他组件...
}

// 暗色主题
const darkTheme = {
  name: 'dark',
  common: {
    primaryColor: '#63e2b7',
    primaryColorHover: '#7fe7c4',
    primaryColorPressed: '#5acea7',
    infoColor: '#70c0e8',
    successColor: '#63e2b7',
    warningColor: '#f2c97d',
    errorColor: '#e88080',
    textColor: '#ffffff',
    textColorDisabled: '#686b6e',
    borderColor: '#4c4d4f',
    borderRadius: '3px',
    fontSize: '14px'
  },
  // 组件特定主题
  Button: {
    // ...
  },
  Input: {
    // ...
  }
  // 其他组件...
}
```

## 自定义主题

### 覆盖部分变量

你可以通过覆盖部分变量来自定义主题：

```js
import { createTheme, lightTheme } from '@my-ui/ui'

// 创建自定义主题
createTheme({
  ...lightTheme,
  common: {
    ...lightTheme.common,
    primaryColor: '#ff0000', // 自定义主色
    borderRadius: '5px', // 自定义圆角
  }
})
```

### 创建全新主题

你也可以创建一个全新的主题：

```js
import { createTheme } from '@my-ui/ui'

// 创建全新主题
createTheme({
  name: 'custom',
  common: {
    primaryColor: '#ff0000',
    primaryColorHover: '#ff3333',
    primaryColorPressed: '#cc0000',
    infoColor: '#2080f0',
    successColor: '#18a058',
    warningColor: '#f0a020',
    errorColor: '#d03050',
    textColor: '#333639',
    textColorDisabled: '#c0c4cc',
    borderColor: '#d9d9d9',
    borderRadius: '5px',
    fontSize: '14px'
  },
  // 组件特定主题
  Button: {
    textColor: '#333639',
    textColorPrimary: '#fff',
    // ...
  },
  Input: {
    textColor: '#333639',
    borderColor: '#d9d9d9',
    // ...
  }
  // 其他组件...
})
```

## 动态切换主题

你可以动态切换主题：

```js
import { createTheme, lightTheme, darkTheme } from '@my-ui/ui'

// 初始使用亮色主题
createTheme(lightTheme)

// 切换到暗色主题
function toggleTheme() {
  createTheme(darkTheme)
}

// 切换回亮色主题
function toggleTheme() {
  createTheme(lightTheme)
}
```

## 使用 CSS 变量

如果你想直接使用 CSS 变量，可以在 CSS 中使用：

```css
.my-button {
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  font-size: var(--font-size);
}
```

## 暗色模式

My UI 支持暗色模式，你可以通过以下方式启用暗色模式：

```js
import { createTheme, darkTheme } from '@my-ui/ui'

// 使用暗色主题
createTheme(darkTheme)
```

你也可以根据系统主题自动切换：

```js
import { createTheme, lightTheme, darkTheme } from '@my-ui/ui'

// 根据系统主题自动切换
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
createTheme(prefersDark ? darkTheme : lightTheme)

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  createTheme(e.matches ? darkTheme : lightTheme)
})
```

## 示例

这是一个完整的主题定制示例：

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyUI, { createTheme, lightTheme } from '@my-ui/ui'

// 导入样式
import '@my-ui/ui/dist/index.css'

const app = createApp(App)

// 注册 My UI
app.use(MyUI)

// 创建自定义主题
createTheme({
  ...lightTheme,
  common: {
    ...lightTheme.common,
    primaryColor: '#ff0000', // 自定义主色
    borderRadius: '5px', // 自定义圆角
  },
  Button: {
    ...lightTheme.Button,
    textColorPrimary: '#ffffff', // 自定义按钮文字颜色
  }
})

app.mount('#app')
```
