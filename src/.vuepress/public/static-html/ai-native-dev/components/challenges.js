// 常见开发场景挑战模块
export function renderChallenges() {
    return `
        <div class="section-title">
            <h2>常见开发场景挑战</h2>
        </div>
        
        <div class="section-header">典型问题场景</div>
        <div class="four-col-grid">
            <div class="scenario-card">
                <div class="scenario-icon">📋</div>
                <h3>需求解读存在误差</h3>
                <p class="description">完成代码后又需修改，理解不统一导致方向偏离，影响整体开发节奏</p>
                <span class="scenario-tag tag-warm">返工重做</span>
            </div>
            
            <div class="scenario-card">
                <div class="scenario-icon">🖌️</div>
                <h3>界面样式调整频繁</h3>
                <p class="description">持续调试UI呈现，精确到像素级别，适配不同屏幕，设计沟通成本高</p>
                <span class="scenario-tag tag-gold">夜间修改</span>
            </div>
            
            <div class="scenario-card">
                <div class="scenario-icon">♻️</div>
                <h3>基础功能代码重复</h3>
                <p class="description">大量复制粘贴操作，数据增删改查反复编写，模式化工作占用时间</p>
                <span class="scenario-tag tag-gold">拖慢进度</span>
            </div>
            
            <div class="scenario-card">
                <div class="scenario-icon">🔍</div>
                <h3>审查暴露基础问题</h3>
                <p class="description">多轮次修改代码，命名规范、边界判断、异常捕获等细节容易遗漏</p>
                <span class="scenario-tag tag-warm">延时调试</span>
            </div>
        </div>
    `;
}

