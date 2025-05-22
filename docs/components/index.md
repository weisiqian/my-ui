# 组件

My UI 提供了一系列高质量的 Vue 3 组件，帮助您快速构建界面。

## 基础组件

这些组件是构建界面的基础，几乎在每个项目中都会用到。

<div class="component-list">
  <div class="component-item">
    <div class="component-item__icon">
      <u-button type="primary">Ab</u-button>
    </div>
    <div class="component-item__content">
      <h3 class="component-item__title">
        <a href="./button">Button 按钮</a>
      </h3>
      <p class="component-item__description">按钮用于开始一个即时操作。</p>
    </div>
  </div>
  
  <div class="component-item">
    <div class="component-item__icon">
      <u-input placeholder="Input" style="width: 100px"></u-input>
    </div>
    <div class="component-item__content">
      <h3 class="component-item__title">
        <a href="./input">Input 输入框</a>
      </h3>
      <p class="component-item__description">输入框用于用户输入文本内容。</p>
    </div>
  </div>
  
  <div class="component-item">
    <div class="component-item__icon">
      <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background-color: var(--primary-color); color: white; border-radius: 4px;">F</div>
    </div>
    <div class="component-item__content">
      <h3 class="component-item__title">
        <a href="./form">Form 表单</a>
      </h3>
      <p class="component-item__description">表单用于收集、验证和提交数据。</p>
    </div>
  </div>
</div>

## 数据展示

这些组件用于展示数据，帮助用户更好地理解和分析信息。

<div class="component-list">
  <div class="component-item">
    <div class="component-item__icon">
      <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background-color: var(--primary-color); color: white; border-radius: 4px;">T</div>
    </div>
    <div class="component-item__content">
      <h3 class="component-item__title">
        <a href="./table">Table 表格</a>
      </h3>
      <p class="component-item__description">表格用于展示和操作结构化数据。</p>
    </div>
  </div>
</div>

## 反馈组件

这些组件用于向用户提供操作反馈。

<div class="component-list">
  <div class="component-item">
    <div class="component-item__icon">
      <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background-color: var(--primary-color); color: white; border-radius: 4px;">M</div>
    </div>
    <div class="component-item__content">
      <h3 class="component-item__title">
        <a href="./modal">Modal 模态框</a>
      </h3>
      <p class="component-item__description">模态框用于创建对话框和弹出窗口。</p>
    </div>
  </div>
</div>

<style>
.component-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.component-item {
  display: flex;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  transition: all 0.3s;
}

.component-item:hover {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  border-color: var(--primary-color);
}

.component-item__icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.component-item__content {
  flex: 1;
}

.component-item__title {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
}

.component-item__title a {
  color: var(--text-color);
  text-decoration: none;
}

.component-item__title a:hover {
  color: var(--primary-color);
}

.component-item__description {
  margin: 0;
  font-size: 14px;
  color: #666;
}
</style>
