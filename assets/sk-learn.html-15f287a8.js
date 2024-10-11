import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-62cd3f25.js";const i={},t=e(`<h1 id="supervised-learning-sk-learn" tabindex="-1"><a class="header-anchor" href="#supervised-learning-sk-learn" aria-hidden="true">#</a> Supervised Learning sk-learn</h1><h2 id="before-doing" tabindex="-1"><a class="header-anchor" href="#before-doing" aria-hidden="true">#</a> Before doing</h2><ul><li>Requirements <ul><li>无缺失值</li><li>数据为数字格式</li><li>数据存储在 pandas DataFrame 或 NumPy 数组中</li></ul></li><li><strong>Perform Exploratory Data Analysis (EDA)  first</strong></li><li>Classication: Target variable <strong>consists of categories</strong></li><li>Regression: Target variable is <strong>continuous</strong></li></ul><h2 id="scikit-learn-syntax" tabindex="-1"><a class="header-anchor" href="#scikit-learn-syntax" aria-hidden="true">#</a> scikit-learn syntax</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>module <span class="token keyword">import</span> Model

<span class="token comment"># 创建模型</span>
model <span class="token operator">=</span> Model<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 训练/拟合 模型</span>
<span class="token comment"># X 与 y 接受 numpy.ndarray</span>
<span class="token comment"># X 可以为二维数组</span>
model<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">)</span>

<span class="token comment"># 预测模型</span>
predictions <span class="token operator">=</span> model<span class="token punctuation">.</span>predict<span class="token punctuation">(</span>X_new<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>predictions<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array([0, 0, 0, 0, 1, 0])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),l=[t];function r(o,c){return s(),a("div",null,l)}const u=n(i,[["render",r],["__file","sk-learn.html.vue"]]);export{u as default};
