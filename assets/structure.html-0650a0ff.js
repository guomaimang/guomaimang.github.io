import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as p,a,b as n,d as o,e as s}from"./app-5979a3e3.js";const l={},r=s(`<h1 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构" aria-hidden="true">#</a> 代码结构</h1><p>我们将要学习的第一个内容就是构建代码块。</p><h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2><p>语句是执行**行为（action）**的语法结构和命令。</p><p>当存在换行符（line break）时，在大多数情况下可以省略分号，但是不推荐省略。</p><p>通常，每条语句独占一行，以提高代码的可读性：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分号" tabindex="-1"><a class="header-anchor" href="#分号" aria-hidden="true">#</a> 分号</h2><p>下面的代码也是可以运行的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d={href:"https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion",target:"_blank",rel:"noopener noreferrer"},u=s(`<p><strong>在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！</strong></p><p>有很多换行并不是分号的例子，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alert(3 +
1
+ 2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码输出 <code>6</code>.</p><p>**但存在 JavaScript 无法确定是否真的需要自动插入分号的情况。**最好不要省略分号，尤其对新手来说。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这行注释独占一行</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这行注释跟随在语句后面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 两个消息的例子。
这是一个多行注释。
*/</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释的内容被忽略了，所以如果我们在 <code>/* ... */</code> 中放入代码，并不会执行。</p><h3 id="临时禁用代码" tabindex="-1"><a class="header-anchor" href="#临时禁用代码" aria-hidden="true">#</a> 临时禁用代码</h3><p>有时候，可以很方便地临时禁用代码。</p><p>在大多数的编辑器中，一行代码可以使用 <code>key:Ctrl+/</code> 快捷键进行单行注释，诸如 <code>key:Ctrl+Shift+/</code> 的快捷键可以进行多行注释（选择代码，然后按下快捷键）。</p><p>对于 Mac 电脑，应使用 <code>key:Cmd</code> 而不是 <code>key:Ctrl</code>，使用 <code>key:Option</code> 而不是 <code>key:Shift</code>。</p><p>注释会增加代码总量，但这一点也不是什么问题。有很多工具可以帮你在把代码部署到服务器之前缩减代码。这些工具会移除注释，这样注释就不会出现在发布的脚本中。所以，注释对我们的生产没有任何负面影响。</p><p>在后面的教程中，会解释如何更好地写注释。</p>`,17);function v(h,k){const e=c("ExternalLinkIcon");return i(),p("div",null,[r,a("p",null,[n("在这，JavaScript 将换行符理解成“隐式”的分号。这也被称为 "),a("a",d,[n("自动分号插入"),o(e)]),n("。")]),u])}const g=t(l,[["render",v],["__file","structure.html.vue"]]);export{g as default};