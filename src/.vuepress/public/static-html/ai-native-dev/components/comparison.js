// 传统开发 vs AI编程对比模块
export function renderComparison() {
    return `
        <div class="comparison-section">
            <div class="section-title">
                <h2>传统开发 vs AI编程</h2>
            </div>
            <p class="comparison-subtitle">从困境到革新，开发模式的根本性转型</p>
            
            <div class="comparison-grid">
                <!-- 传统开发挑战 -->
                <div class="comparison-column traditional-column">
                    <div class="column-header traditional-header">
                        <span class="column-header-icon">⚠️</span>
                        <h3>传统开发的挑战</h3>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">需求理解障碍</div>
                        <div class="item-description">文档与实现之间存在鸿沟，反复沟通成本高昂</div>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">机械式编码</div>
                        <div class="item-description">大部分时间花在重复性的增删改查操作上，复制粘贴易出错</div>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">质量隐患多</div>
                        <div class="item-description">测试用例缺失，边界情况和异常处理容易忽略</div>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">文档维护困难</div>
                        <div class="item-description">编写耗时，同步不及时，文档与代码脱节严重</div>
                    </div>
                </div>
                
                <!-- AI编程优势 -->
                <div class="comparison-column ai-column">
                    <div class="column-header ai-header">
                        <span class="column-header-icon">⚡</span>
                        <h3>AI编程的优势</h3>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">需求即代码</div>
                        <div class="item-description">工作流程自动化，从需求文档直接生成技术实现方案</div>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">智能化生成</div>
                        <div class="item-description">自动创建CRUD、数据验证、API接口，告别重复劳动</div>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">质量内建</div>
                        <div class="item-description">单元测试、集成测试自动生成，覆盖各种边界场景</div>
                    </div>
                    
                    <div class="comparison-item">
                        <div class="item-title">文档实时同步</div>
                        <div class="item-description">代码即文档，自动生成并实时更新，保持同步</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

