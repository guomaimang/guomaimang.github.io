import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as o,a as i,b as e,d as n,w as l,e as d}from"./app-c31a6da5.js";const c={},u=i("h1",{id:"machine-learning",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#machine-learning","aria-hidden":"true"},"#"),e(" Machine Learning")],-1),p=i("p",null,"提升心法「数学之道」与技法「Python之道」",-1),g=d('<h2 id="what-is-ml" tabindex="-1"><a class="header-anchor" href="#what-is-ml" aria-hidden="true">#</a> What is ML</h2><p>机器学习是一个过程，据此，</p><ul><li>计算机被赋予了学习从数据中做出决定的能力</li><li>而不需要明确地进行编程!</li></ul><p>目前本节笔记计划覆盖的模型有</p><ul><li>Machine Learning <ul><li>Regression Model</li><li>Probabilistic Graphical Models</li></ul></li><li>Deep Learning <ul><li>Neural Network Model</li></ul></li></ul><figure><img src="https://pic.hanjiaming.com.cn/2023/02/01/08aa3bc7a2b46.png" alt="1675217276121.png" tabindex="0" loading="lazy"><figcaption>1675217276121.png</figcaption></figure><h2 id="unsupervised-learning" tabindex="-1"><a class="header-anchor" href="#unsupervised-learning" aria-hidden="true">#</a> Unsupervised learning</h2><p>从无标签的数据中发现隐藏的答案</p><p>例子：将客户分为不同的类别（聚类）。</p><figure><img src="https://pic.hanjiaming.com.cn/2022/06/14/86deba1f8d1c3.png" alt="1655201455429.png" tabindex="0" loading="lazy"><figcaption>1655201455429.png</figcaption></figure><h2 id="supervised-learning" tabindex="-1"><a class="header-anchor" href="#supervised-learning" aria-hidden="true">#</a> Supervised learning</h2><ul><li>预测值是已知的</li><li>目的：根据特征，预测未见过的数据的目标值</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/06/14/d3edb7dc9d57d.png" alt="1655201518097.png" tabindex="0" loading="lazy"><figcaption>1655201518097.png</figcaption></figure><h3 id="types-of-supervised-learning" tabindex="-1"><a class="header-anchor" href="#types-of-supervised-learning" aria-hidden="true">#</a> Types of supervised learning</h3><img src="https://pic.hanjiaming.com.cn/2022/06/14/dcf6be010d80e.png" alt="1655201561347.png" style="zoom:50%;"><ul><li>Classification: predicts <strong>categorical</strong> class labels <ul><li>根据训练集和分类属性中的值（类别标签）对数据进行分类（构建一个模型），并将其用于对新数据的分类。</li><li>返回一个离散值（标签）作为输出，例如，将恒生指数（HSI）的趋势划分为上升、下降、水平。</li></ul></li><li>Regression: models <strong>continuous-valued</strong> functions, i.e., predicts unknown or missing values <ul><li>返回一个实际价值作为输出，例如，预测恒生指数的未来价值</li></ul></li></ul><h2 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions" aria-hidden="true">#</a> Naming conventions</h2><ul><li>特征=预测变量=自变量 (𝑥 : input variables/attributes/<strong>features</strong>)</li><li>目标变量=因变量=反应变量 (𝑦 : output variable/attribute/target variable)</li></ul><p>即</p><ul><li>Feature = predictor variable = independent variable</li><li>Target variable = dependent variable = response variable</li></ul>',20);function h(m,f){const a=t("RouterLink");return s(),o("div",null,[u,p,i("ul",null,[i("li",null,[e("心法："),n(a,{to:"/note/ds/ml/regression-models/"},{default:l(()=>[e("regression-models/")]),_:1}),e(", "),n(a,{to:"/note/ds/ml/probabilistic-graphical-models/"},{default:l(()=>[e("probabilistic-graphical-models/")]),_:1}),e(", "),n(a,{to:"/note/ds/ml/neural-network-model/"},{default:l(()=>[e("neural-network-models/")]),_:1})]),i("li",null,[e("技法："),n(a,{to:"/note/ds/ml/practical-skills/"},{default:l(()=>[e("practical-skills/")]),_:1})])]),g])}const _=r(c,[["render",h],["__file","index.html.vue"]]);export{_ as default};