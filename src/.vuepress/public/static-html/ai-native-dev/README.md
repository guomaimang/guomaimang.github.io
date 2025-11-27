# AI Native Development - 模块化结构

## 📁 目录结构

```
ai-native-dev/
├── index.html              # 主HTML文件（入口）
├── styles.css              # 全局样式文件
├── main.js                 # 主JavaScript文件（组件加载器）
├── components/             # 组件模块目录
│   ├── challenges.js       # 常见开发场景挑战模块
│   ├── ai-paradigm.js      # AI驱动的编程新范式模块
│   └── comparison.js       # 传统开发 vs AI编程对比模块
├── ai-native-content.html  # 原始文件（已废弃，保留作参考）
└── README.md               # 项目说明文档
```

## 🎯 模块说明

### 核心文件

- **index.html**: 页面入口，包含基础HTML结构和容器
- **styles.css**: 所有样式定义，包括响应式设计
- **main.js**: 主控制器，负责加载和渲染所有组件

### 组件模块（components/）

每个组件都是一个独立的JavaScript模块，导出渲染函数：

1. **challenges.js** - 展示常见开发场景挑战
2. **ai-paradigm.js** - 介绍AI驱动的编程新范式
3. **comparison.js** - 对比传统开发与AI编程

## 🚀 如何添加新模块

### 步骤1: 创建新组件

在 `components/` 目录下创建新的JS文件：

```javascript
// components/new-section.js
export function renderNewSection() {
    return `
        <div class="section-title">
            <h2>新章节标题</h2>
        </div>
        <div class="content">
            <!-- 你的HTML内容 -->
        </div>
    `;
}
```

### 步骤2: 在main.js中导入

```javascript
// main.js
import { renderNewSection } from './components/new-section.js';

// 在initApp函数中添加
const content = `
    ${renderChallenges()}
    ${renderAIParadigm()}
    ${renderComparison()}
    ${renderNewSection()}  // 新增
`;
```

### 步骤3: 添加对应样式（可选）

在 `styles.css` 中添加新组件的样式。

## 💡 使用建议

### 样式组织
- 通用样式放在 `styles.css` 顶部
- 组件特定样式按功能分组
- 使用注释标记各个样式区块

### 组件设计原则
- 每个组件保持独立，易于维护
- 组件返回纯HTML字符串
- 复杂交互可在组件内添加事件监听

### 扩展性
- 可以轻松添加数据驱动的组件
- 支持从API获取数据后动态渲染
- 可引入状态管理库（如需要）

## 🔧 技术栈

- **纯HTML/CSS/JavaScript**: 无需构建工具
- **ES6 Modules**: 原生模块系统
- **响应式设计**: 移动端优先

## 📝 注意事项

1. 使用ES6 modules需要通过HTTP(S)协议访问（不能直接打开文件）
2. 建议使用本地服务器测试（如Live Server、http-server等）
3. 所有组件路径使用相对路径，便于部署

## 🌟 未来扩展

可以考虑添加：
- 动画效果库
- 组件懒加载
- 国际化支持
- 主题切换功能
- 数据驱动的内容管理

