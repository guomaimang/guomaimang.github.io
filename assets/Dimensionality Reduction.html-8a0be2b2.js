import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,e as a,a as s}from"./app-3b7bc918.js";const n={},e=a('<h1 id="dimensionality-reduction" tabindex="-1"><a class="header-anchor" href="#dimensionality-reduction" aria-hidden="true">#</a> Dimensionality Reduction</h1><ul><li>假设：数据位于或接近一个低d维的子空间上</li><li>这个子空间的红轴是数据的有效代表</li><li>降维的目标是发现数据的红轴</li></ul><figure><img src="https://static-file.hirsun.tech/2023/04/23/7e80322743695.png" alt="CleanShot 2023-04-21 at 13.15.00@2x" tabindex="0" loading="lazy"><figcaption>CleanShot 2023-04-21 at 13.15.00@2x</figcaption></figure><ul><li>我们不是用2个坐标来表示每个点，而是用1个坐标来表示每个点（对应于红线上的点的位置）。</li><li>这样做我们会产生一点误差，因为这些点并不完全位于直线上。</li></ul><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why</h2><ul><li>数据以前所未有的速度积累</li><li>数据预处理是有效的机器学习和数据挖掘的一个重要部分 <ul><li>ML 和 DM 技术可能对高维数据无效</li></ul></li><li>降维是缩小数据规模的一种有效方法 <ul><li>内在维度可能很小</li><li>发现隐藏的相关性/主题，例如，经常一起出现的词</li><li>去除冗余和嘈杂的特征，例如，并非所有单词都有用</li></ul></li><li>解释和可视化</li><li>更容易存储和处理数据</li></ul><h2 id="rank-of-a-matrix" tabindex="-1"><a class="header-anchor" href="#rank-of-a-matrix" aria-hidden="true">#</a> Rank of a Matrix</h2><ul><li>Q: What is rank of a matrix A?</li><li>A的线性独立列的数量</li></ul><figure><img src="https://static-file.hirsun.tech/2023/04/23/696cd266b1792.png" alt="CleanShot 2023-04-21 at 13.18.30@2x" tabindex="0" loading="lazy"><figcaption>CleanShot 2023-04-21 at 13.18.30@2x</figcaption></figure><h2 id="latent-factor-models" tabindex="-1"><a class="header-anchor" href="#latent-factor-models" aria-hidden="true">#</a> Latent Factor Models</h2><p><strong>SVD:</strong> A = U Σ V<sup>T</sup></p><p>![CleanShot 2023-04-21 at 13.25.40@2x](/Users/hanjiaming/Downloads/Dimensionality Reduction.assets/CleanShot 2023-04-21 at 13.25.40@2x.png)</p><figure><img src="https://static-file.hirsun.tech/2023/04/23/0c9afdef4ca47.png" alt="CleanShot 2023-04-21 at 13.25.16@2x" tabindex="0" loading="lazy"><figcaption>CleanShot 2023-04-21 at 13.25.16@2x</figcaption></figure><p>以因子的内积来估计未知的评级</p><h2 id="singular-value-decomposition" tabindex="-1"><a class="header-anchor" href="#singular-value-decomposition" aria-hidden="true">#</a> Singular Value Decomposition</h2><figure><img src="https://static-file.hirsun.tech/2023/04/23/1e05d01f08aa6.png" alt="CleanShot 2023-04-21 at 13.26.43@2x" tabindex="0" loading="lazy"><figcaption>CleanShot 2023-04-21 at 13.26.43@2x</figcaption></figure><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3><p>始终有可能将一个真实的 matrix A into A = U Σ V<sup>T</sup> ,where</p><ul><li><strong>U,</strong> Σ**, V**: unique</li><li>U，V：柱状正态「column orthonormal」 <ul><li>U<sup>T</sup> U=I;VU<sup>T</sup> V=I (I: identity matrix)</li><li>列是正交的单位向量</li></ul></li><li>Σ: diagonal <ul><li>条目（奇异值）为正数，并按递减顺序排序 (σ1 &gt;= σ2 &gt;= σ3 ... &gt;= 0)</li></ul></li></ul><h3 id="definition" tabindex="-1"><a class="header-anchor" href="#definition" aria-hidden="true">#</a> Definition</h3>',20),m=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"A"),s("mrow",null,[s("mo",{stretchy:"false"},"["),s("mi",null,"m"),s("mo",null,"×"),s("mi",null,"n"),s("mo",{stretchy:"false"},"]")])]),s("mo",null,"="),s("msub",null,[s("mi",null,"U"),s("mrow",null,[s("mo",{stretchy:"false"},"["),s("mi",null,"m"),s("mo",null,"×"),s("mi",null,"r"),s("mo",{stretchy:"false"},"]")])]),s("msub",null,[s("mi",{mathvariant:"normal"},"Σ"),s("mrow",null,[s("mo",{stretchy:"false"},"["),s("mi",null,"r"),s("mo",null,"×"),s("mi",null,"r"),s("mo",{stretchy:"false"},"]")])]),s("msup",null,[s("mrow",null,[s("mo",{fence:"true"},"("),s("msub",null,[s("mi",null,"V"),s("mrow",null,[s("mo",{stretchy:"false"},"["),s("mi",null,"n"),s("mo",null,"×"),s("mi",null,"r"),s("mo",{stretchy:"false"},"]")])]),s("mo",{fence:"true"},")")]),s("mi",null,"T")])]),s("annotation",{encoding:"application/x-tex"}," A_{[m \\times n]}=U_{[m \\times r]} \\Sigma_{[r \\times r]}\\left(V_{[n \\times r]}\\right)^{T} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0385em","vertical-align":"-0.3552em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"["),s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"mbin mtight"},"×"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mclose mtight"},"]")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.4364em","vertical-align":"-0.3552em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"["),s("span",{class:"mord mathnormal mtight"},"m"),s("span",{class:"mbin mtight"},"×"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mclose mtight"},"]")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord"},"Σ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"["),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"×"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mclose mtight"},"]")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size1"},"(")]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"V"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"-0.2222em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"["),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mbin mtight"},"×"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mclose mtight"},"]")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size1"},")")])]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0812em"}},[s("span",{style:{top:"-3.3029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"T")])])])])])])])])])])])])],-1),r=a('<ul><li>A: Input data matrix <ul><li>m x n矩阵（例如，m个文件，n个术语）。</li></ul></li><li>U: Left singular vectors <ul><li>m x r矩阵（m文件，r概念）。</li></ul></li><li>Σ: Singular values <ul><li>r x r对角线矩阵（每个 &quot;概念 &quot;的强度）。</li><li>(r : 矩阵A的 rank)</li></ul></li><li>V: Right singular vectors</li><li>n x r matrix (n terms, r concepts)</li></ul><p>![CleanShot 2023-04-21 at 13.37.37@2x](/Users/hanjiaming/Downloads/Dimensionality Reduction.assets/CleanShot 2023-04-21 at 13.37.37@2x.png)</p><h2 id="dr-with-svd" tabindex="-1"><a class="header-anchor" href="#dr-with-svd" aria-hidden="true">#</a> DR with SVD</h2><ul><li>与其使用两个坐标（𝒙，𝒚）来描述点的位置，不如只使用一个坐标𝒛</li><li>点的位置是它沿着矢量𝒗𝟏的位置</li><li>如何选择𝒗𝟏？ <ul><li>最大限度地减少重建误差</li></ul></li></ul><p>目标：使重建误差之和最小化</p>',5),p=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"N")]),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"j"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"D")]),s("msup",null,[s("mrow",null,[s("mo",{fence:"true"},"∥"),s("msub",null,[s("mi",null,"x"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"j")])]),s("mo",null,"−"),s("msub",null,[s("mi",null,"z"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"j")])]),s("mo",{fence:"true"},"∥")]),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"}," \\sum_{i=1}^{N} \\sum_{j=1}^{D}\\left\\|x_{i j}-z_{i j}\\right\\|^{2} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.2421em","vertical-align":"-1.4138em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8283em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8283em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"D")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4138em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"∥"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"ij")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"ij")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},"∥")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.954em"}},[s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])])])],-1),c=s("p",null,"where 𝒙𝒊𝒋 are the “old” and 𝒛𝒊𝒋 are the “new” coordinates",-1),h=s("p",null,`SVD给出了投射的 "最佳 "轴：'最佳'=最大限度地减少重建误差`,-1),o=s("p",null,"换言之，最小重建误差",-1),g=[e,m,r,p,c,h,o];function u(d,y){return t(),i("div",null,g)}const x=l(n,[["render",u],["__file","Dimensionality Reduction.html.vue"]]);export{x as default};