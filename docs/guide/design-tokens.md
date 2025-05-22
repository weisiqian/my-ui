# 设计令牌系统

设计令牌(Design Tokens)是一种集中管理设计决策的方式，它将设计属性（如颜色、字体、间距等）抽象为可重用的变量。Uni UI 的设计令牌系统提供了一套完整的设计变量，帮助您创建一致、可维护的用户界面。

## 颜色令牌

颜色令牌定义了系统中使用的所有颜色，包括品牌色、功能色和中性色。

### 品牌色

品牌色是应用程序的主要标识色，用于主要按钮、链接和强调元素。

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #18a058;"></div>
    <div class="token-info">
      <div class="token-name">primary</div>
      <div class="token-value">#18a058</div>
      <div class="token-description">主要品牌色，用于主要按钮、链接等</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #36ad6a;"></div>
    <div class="token-info">
      <div class="token-name">primaryHover</div>
      <div class="token-value">#36ad6a</div>
      <div class="token-description">主要品牌色的悬停状态</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #0c7a43;"></div>
    <div class="token-info">
      <div class="token-name">primaryPressed</div>
      <div class="token-value">#0c7a43</div>
      <div class="token-description">主要品牌色的按下状态</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #edf9f0;"></div>
    <div class="token-info">
      <div class="token-name">primarySuppl</div>
      <div class="token-value">#edf9f0</div>
      <div class="token-description">主要品牌色的补充色，用于背景等</div>
    </div>
  </div>
</div>

### 功能色

功能色用于表示不同的状态和操作，如信息、成功、警告和错误。

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #2080f0;"></div>
    <div class="token-info">
      <div class="token-name">info</div>
      <div class="token-value">#2080f0</div>
      <div class="token-description">信息色，用于提示信息</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #18a058;"></div>
    <div class="token-info">
      <div class="token-name">success</div>
      <div class="token-value">#18a058</div>
      <div class="token-description">成功色，用于成功状态</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #f0a020;"></div>
    <div class="token-info">
      <div class="token-name">warning</div>
      <div class="token-value">#f0a020</div>
      <div class="token-description">警告色，用于警告状态</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #d03050;"></div>
    <div class="token-info">
      <div class="token-name">error</div>
      <div class="token-value">#d03050</div>
      <div class="token-description">错误色，用于错误状态</div>
    </div>
  </div>
</div>

### 文本颜色

文本颜色用于不同层级的文本内容。

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #333639;"></div>
    <div class="token-info">
      <div class="token-name">text.primary</div>
      <div class="token-value">#333639</div>
      <div class="token-description">主要文本颜色，用于标题和正文</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #666666;"></div>
    <div class="token-info">
      <div class="token-name">text.secondary</div>
      <div class="token-value">#666666</div>
      <div class="token-description">次要文本颜色，用于次要信息</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #999999;"></div>
    <div class="token-info">
      <div class="token-name">text.tertiary</div>
      <div class="token-value">#999999</div>
      <div class="token-description">第三级文本颜色，用于辅助信息</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #c0c4cc;"></div>
    <div class="token-info">
      <div class="token-name">text.disabled</div>
      <div class="token-value">#c0c4cc</div>
      <div class="token-description">禁用状态的文本颜色</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #ffffff; border: 1px solid #eee;"></div>
    <div class="token-info">
      <div class="token-name">text.inverse</div>
      <div class="token-value">#ffffff</div>
      <div class="token-description">反色文本，用于深色背景</div>
    </div>
  </div>
</div>

### 背景颜色

背景颜色用于不同层级的背景。

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #ffffff; border: 1px solid #eee;"></div>
    <div class="token-info">
      <div class="token-name">background.primary</div>
      <div class="token-value">#ffffff</div>
      <div class="token-description">主要背景色，用于页面背景</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #f5f7fa;"></div>
    <div class="token-info">
      <div class="token-name">background.secondary</div>
      <div class="token-value">#f5f7fa</div>
      <div class="token-description">次要背景色，用于卡片、面板等</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #ebedf0;"></div>
    <div class="token-info">
      <div class="token-name">background.tertiary</div>
      <div class="token-value">#ebedf0</div>
      <div class="token-description">第三级背景色，用于分割线等</div>
    </div>
  </div>
</div>

### 边框颜色

边框颜色用于不同层级的边框。

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #d9d9d9;"></div>
    <div class="token-info">
      <div class="token-name">border.primary</div>
      <div class="token-value">#d9d9d9</div>
      <div class="token-description">主要边框颜色</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #e4e7ed;"></div>
    <div class="token-info">
      <div class="token-name">border.secondary</div>
      <div class="token-value">#e4e7ed</div>
      <div class="token-description">次要边框颜色</div>
    </div>
  </div>
</div>

## 排版令牌

排版令牌定义了系统中使用的所有字体、字号、行高等排版相关的设计属性。

### 字体族

<div class="token-typography">
  <div class="token-item">
    <div class="token-sample" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      The quick brown fox jumps over the lazy dog
    </div>
    <div class="token-info">
      <div class="token-name">fontFamily.base</div>
      <div class="token-value">-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...</div>
      <div class="token-description">基础字体，用于大多数文本</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">
      The quick brown fox jumps over the lazy dog
    </div>
    <div class="token-info">
      <div class="token-name">fontFamily.mono</div>
      <div class="token-value">SFMono-Regular, Menlo, Monaco, Consolas, ...</div>
      <div class="token-description">等宽字体，用于代码等</div>
    </div>
  </div>
</div>

### 字号

<div class="token-typography">
  <div class="token-item">
    <div class="token-sample" style="font-size: 12px;">
      The quick brown fox jumps over the lazy dog (12px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.xs</div>
      <div class="token-value">12px</div>
      <div class="token-description">超小字号，用于辅助文本</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 14px;">
      The quick brown fox jumps over the lazy dog (14px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.sm</div>
      <div class="token-value">14px</div>
      <div class="token-description">小字号，用于正文</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 16px;">
      The quick brown fox jumps over the lazy dog (16px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.md</div>
      <div class="token-value">16px</div>
      <div class="token-description">中字号，用于小标题</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 18px;">
      The quick brown fox jumps over the lazy dog (18px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.lg</div>
      <div class="token-value">18px</div>
      <div class="token-description">大字号，用于标题</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 20px;">
      The quick brown fox jumps over the lazy dog (20px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.xl</div>
      <div class="token-value">20px</div>
      <div class="token-description">超大字号，用于大标题</div>
    </div>
  </div>
</div>

### 字重

<div class="token-typography">
  <div class="token-item">
    <div class="token-sample" style="font-weight: 300;">
      The quick brown fox jumps over the lazy dog (300)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.light</div>
      <div class="token-value">300</div>
      <div class="token-description">细体</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 400;">
      The quick brown fox jumps over the lazy dog (400)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.regular</div>
      <div class="token-value">400</div>
      <div class="token-description">常规</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 500;">
      The quick brown fox jumps over the lazy dog (500)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.medium</div>
      <div class="token-value">500</div>
      <div class="token-description">中等</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 600;">
      The quick brown fox jumps over the lazy dog (600)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.semibold</div>
      <div class="token-value">600</div>
      <div class="token-description">半粗体</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 700;">
      The quick brown fox jumps over the lazy dog (700)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.bold</div>
      <div class="token-value">700</div>
      <div class="token-description">粗体</div>
    </div>
  </div>
</div>

## 间距令牌

间距令牌定义了系统中使用的所有间距、边距、内边距等。

### 基础间距

<div class="token-spacing">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 4px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.xs</div>
      <div class="token-value">4px</div>
      <div class="token-description">超小间距</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 8px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.sm</div>
      <div class="token-value">8px</div>
      <div class="token-description">小间距</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 12px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.md</div>
      <div class="token-value">12px</div>
      <div class="token-description">中间距</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 16px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.lg</div>
      <div class="token-value">16px</div>
      <div class="token-description">大间距</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 24px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.xl</div>
      <div class="token-value">24px</div>
      <div class="token-description">超大间距</div>
    </div>
  </div>
</div>

### 内边距

<div class="token-spacing">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-padding-box" style="padding: 4px 8px;">内容</div>
    </div>
    <div class="token-info">
      <div class="token-name">padding.xs</div>
      <div class="token-value">4px 8px</div>
      <div class="token-description">超小内边距</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-padding-box" style="padding: 8px 16px;">内容</div>
    </div>
    <div class="token-info">
      <div class="token-name">padding.md</div>
      <div class="token-value">8px 16px</div>
      <div class="token-description">中内边距</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-padding-box" style="padding: 16px 24px;">内容</div>
    </div>
    <div class="token-info">
      <div class="token-name">padding.xl</div>
      <div class="token-value">16px 24px</div>
      <div class="token-description">超大内边距</div>
    </div>
  </div>
</div>

## 边框令牌

边框令牌定义了系统中使用的所有边框、圆角等。

### 边框宽度

<div class="token-border">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-width: 1px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">width.thin</div>
      <div class="token-value">1px</div>
      <div class="token-description">细边框</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-width: 2px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">width.base</div>
      <div class="token-value">2px</div>
      <div class="token-description">基础边框</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-width: 3px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">width.thick</div>
      <div class="token-value">3px</div>
      <div class="token-description">粗边框</div>
    </div>
  </div>
</div>

### 边框样式

<div class="token-border">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-style: solid;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">style.solid</div>
      <div class="token-value">solid</div>
      <div class="token-description">实线边框</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-style: dashed;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">style.dashed</div>
      <div class="token-value">dashed</div>
      <div class="token-description">虚线边框</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-style: dotted;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">style.dotted</div>
      <div class="token-value">dotted</div>
      <div class="token-description">点线边框</div>
    </div>
  </div>
</div>

### 圆角

<div class="token-border">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 2px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.xs</div>
      <div class="token-value">2px</div>
      <div class="token-description">超小圆角</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 3px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.sm</div>
      <div class="token-value">3px</div>
      <div class="token-description">小圆角</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 5px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.md</div>
      <div class="token-value">5px</div>
      <div class="token-description">中圆角</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 8px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.lg</div>
      <div class="token-value">8px</div>
      <div class="token-description">大圆角</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 9999px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.full</div>
      <div class="token-value">9999px</div>
      <div class="token-description">全圆角</div>
    </div>
  </div>
</div>

## 阴影令牌

阴影令牌定义了系统中使用的所有阴影效果。

### 阴影层级

<div class="token-shadow">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.xs</div>
      <div class="token-value">0 1px 2px 0 rgba(0, 0, 0, 0.05)</div>
      <div class="token-description">超小阴影，用于微小的高度差</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.sm</div>
      <div class="token-value">0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)</div>
      <div class="token-description">小阴影，用于卡片、按钮等</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.md</div>
      <div class="token-value">0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)</div>
      <div class="token-description">中阴影，用于下拉菜单、弹出框等</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.lg</div>
      <div class="token-value">0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)</div>
      <div class="token-description">大阴影，用于模态框等</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.xl</div>
      <div class="token-value">0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)</div>
      <div class="token-description">超大阴影，用于全屏对话框等</div>
    </div>
  </div>
</div>

### 内阴影

<div class="token-shadow">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">inset.xs</div>
      <div class="token-value">inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)</div>
      <div class="token-description">超小内阴影，用于输入框等</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(0, 0, 0, 0.06);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">inset.sm</div>
      <div class="token-value">inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(0, 0, 0, 0.06)</div>
      <div class="token-description">小内阴影，用于按下状态等</div>
    </div>
  </div>
</div>

## 动画令牌

动画令牌定义了系统中使用的所有动画、过渡等。

### 过渡时间

<div class="token-animation">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="150ms">150ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.fast</div>
      <div class="token-value">150ms</div>
      <div class="token-description">快速过渡，用于简单的状态变化</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="250ms">250ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.normal</div>
      <div class="token-value">250ms</div>
      <div class="token-description">正常过渡，用于大多数交互</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="350ms">350ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.slow</div>
      <div class="token-value">350ms</div>
      <div class="token-description">慢速过渡，用于复杂的状态变化</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="500ms">500ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.slower</div>
      <div class="token-value">500ms</div>
      <div class="token-description">更慢的过渡，用于重要的状态变化</div>
    </div>
  </div>
</div>

### 缓动函数

<div class="token-animation">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="linear">linear</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.linear</div>
      <div class="token-value">linear</div>
      <div class="token-description">线性过渡，匀速变化</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease">ease</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.ease</div>
      <div class="token-value">ease</div>
      <div class="token-description">默认缓动，先快后慢</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease-in">ease-in</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.easeIn</div>
      <div class="token-value">cubic-bezier(0.4, 0, 1, 1)</div>
      <div class="token-description">渐入缓动，开始慢，结束快</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease-out">ease-out</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.easeOut</div>
      <div class="token-value">cubic-bezier(0, 0, 0.2, 1)</div>
      <div class="token-description">渐出缓动，开始快，结束慢</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease-in-out">ease-in-out</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.easeInOut</div>
      <div class="token-value">cubic-bezier(0.4, 0, 0.2, 1)</div>
      <div class="token-description">渐入渐出缓动，开始慢，中间快，结束慢</div>
    </div>
  </div>
</div>

## 在组件中使用设计令牌

设计令牌系统的主要目的是在组件开发中提供一致的设计语言。以下是在组件中使用设计令牌的示例。

### 在 Vue 组件中使用

```vue
<template>
  <button
    :class="[
      'u-button',
      `u-button--${type}`,
      `u-button--${size}`,
      {
        'u-button--disabled': disabled,
        'u-button--loading': loading,
        'u-button--round': round
      }
    ]"
    :style="buttonStyle"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTheme } from '@uni-ui/theme'

export default defineComponent({
  name: 'UButton',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => {
        return ['small', 'medium', 'large'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const { mergedTheme } = useTheme()

    // 使用设计令牌计算按钮样式
    const buttonStyle = computed(() => {
      const theme = mergedTheme.value
      const tokens = theme.tokens
      const style: Record<string, string> = {}

      // 应用主题 - 使用设计令牌
      if (props.type === 'default') {
        style['--button-text-color'] = tokens.colors.text.primary
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.border.primary}`
        style['--button-bg-color'] = tokens.colors.background.primary
      } else if (props.type === 'primary') {
        style['--button-bg-color'] = tokens.colors.primary
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.primary}`
      } else if (props.type === 'info') {
        style['--button-bg-color'] = tokens.colors.info
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.info}`
      }

      // 应用尺寸 - 使用设计令牌
      if (props.size === 'small') {
        style['--button-padding'] = tokens.spacing.padding.xs
        style['--button-font-size'] = tokens.typography.fontSize.xs
      } else if (props.size === 'medium') {
        style['--button-padding'] = tokens.spacing.padding.md
        style['--button-font-size'] = tokens.typography.fontSize.sm
      } else if (props.size === 'large') {
        style['--button-padding'] = tokens.spacing.padding.lg
        style['--button-font-size'] = tokens.typography.fontSize.md
      }

      // 应用圆角 - 使用设计令牌
      style['--button-border-radius'] = props.round
        ? tokens.borders.radius.full
        : tokens.borders.radius.sm

      // 应用过渡效果 - 使用设计令牌
      style['--button-transition'] = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.easeInOut}`

      return style
    })

    return {
      buttonStyle
    }
  }
})
</script>

<style>
.u-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: var(--button-transition);
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  appearance: none;

  padding: var(--button-padding);
  font-size: var(--button-font-size);
  border-radius: var(--button-border-radius);
  color: var(--button-text-color);
  background-color: var(--button-bg-color, transparent);
  border: var(--button-border);
}

.u-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 其他样式... */
</style>
```

### 在 CSS 中使用

设计令牌会被转换为 CSS 变量，你可以在样式中直接使用：

```css
.custom-card {
  /* 使用颜色设计令牌 */
  background-color: var(--u-color-background-secondary);
  color: var(--u-color-text-primary);

  /* 使用边框设计令牌 */
  border: var(--u-border-width-thin) var(--u-border-style-solid) var(--u-color-border-primary);
  border-radius: var(--u-border-radius-md);

  /* 使用阴影设计令牌 */
  box-shadow: var(--u-shadow-elevation-sm);

  /* 使用间距设计令牌 */
  padding: var(--u-spacing-padding-md);
  margin: var(--u-spacing-margin-md);

  /* 使用排版设计令牌 */
  font-size: var(--u-font-size-sm);
  font-weight: var(--u-font-weight-regular);

  /* 使用动画设计令牌 */
  transition: all var(--u-animation-duration-normal) var(--u-animation-easing-ease-out);
}

.custom-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--u-shadow-elevation-md);
}
```

## 主题切换

设计令牌系统支持亮色和暗色主题切换。以下是一个简单的主题切换示例：

```vue
<template>
  <div class="theme-switch">
    <button @click="toggleTheme">
      切换主题: {{ currentTheme }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTheme, lightTheme, darkTheme } from '@uni-ui/theme'

export default defineComponent({
  setup() {
    const { theme } = useTheme()
    const currentTheme = ref(theme.value.name)

    const toggleTheme = () => {
      if (theme.value.name === 'light') {
        theme.value = darkTheme
      } else {
        theme.value = lightTheme
      }
      currentTheme.value = theme.value.name
    }

    return {
      currentTheme,
      toggleTheme
    }
  }
})
</script>
```

<style>
/* 设计令牌展示样式 */
.token-grid,
.token-typography,
.token-spacing,
.token-border,
.token-shadow,
.token-animation {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.token-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
}

.token-sample {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: 60px;
}

.token-info {
  padding: 15px;
  background-color: #fff;
}

.token-name {
  font-weight: bold;
  margin-bottom: 5px;
  font-family: monospace;
}

.token-value {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 5px;
  font-family: monospace;
}

.token-description {
  font-size: 0.9em;
  color: #333;
}

/* 颜色令牌样式 */
.token-color {
  width: 100%;
  height: 60px;
  border-radius: 3px;
}

/* 边框令牌样式 */
.token-border-box {
  width: 100px;
  height: 100px;
  border: 2px solid #333;
}

.token-radius-box {
  width: 100px;
  height: 100px;
  background-color: #333;
}

/* 阴影令牌样式 */
.token-shadow-box {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 5px;
}

/* 间距令牌样式 */
.token-spacing-box {
  background-color: #333;
}

.token-padding-box {
  background-color: #f0f0f0;
  border: 1px dashed #999;
}

/* 动画令牌样式 */
.token-animation-box {
  width: 100px;
  height: 40px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.3s;
}

.token-animation-box:hover {
  transform: scale(1.1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .token-grid,
  .token-typography,
  .token-spacing,
  .token-border,
  .token-shadow,
  .token-animation {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// 为动画示例添加交互效果
document.addEventListener('DOMContentLoaded', () => {
  const animationBoxes = document.querySelectorAll('.token-animation-box');

  animationBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const duration = box.getAttribute('data-duration');
      const easing = box.getAttribute('data-easing');

      if (duration) {
        box.style.transition = `transform ${duration} ease`;
      } else if (easing) {
        box.style.transition = `transform 0.5s ${easing}`;
      }

      box.style.transform = 'translateX(50px)';

      setTimeout(() => {
        box.style.transform = 'translateX(0)';
      }, 1000);
    });
  });
});
</script>