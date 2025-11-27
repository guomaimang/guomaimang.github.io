// 主脚本 - 加载和渲染所有组件
import { renderChallenges } from './components/challenges.js';
import { renderAIParadigm } from './components/ai-paradigm.js';
import { renderComparison } from './components/comparison.js';

// 初始化应用
function initApp() {
    const container = document.getElementById('app-container');
    
    if (!container) {
        console.error('未找到容器元素');
        return;
    }
    
    // 渲染所有组件
    const content = `
        ${renderChallenges()}
        ${renderAIParadigm()}
        ${renderComparison()}
    `;
    
    container.innerHTML = content;
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);

