const e=JSON.parse('{"key":"v-3b0ec458","path":"/note/cs/programming/javascript/standard/operator.html","title":"基础运算","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-04-29T00:00:00.000Z","author":"javascriptInfo, Hirsun","description":"基础运算 术语 在正式开始前，我们先简单浏览一下常用术语。 运算元 —— 运算符应用的对象。比如说乘法运算 5 * 2，有两个运算元：左运算元 5 和右运算元 2。有时候人们也称其为“参数”而不是“运算元”。 如果一个运算符对应的只有一个运算元，那么它是 一元运算符。比如说一元负号运算符（unary negation）-，它的作用是对数字进行正负转换： let x = 1; x = -x; // 符号反转运算符 如果一个运算符拥有两个运算元，那么它是 二元运算符。减号还存在二元运算符形式： let x = 1, y = 3; alert( y - x ); // 2，二元运算符减号做减运算","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/programming/javascript/standard/operator.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"基础运算"}],["meta",{"property":"og:description","content":"基础运算 术语 在正式开始前，我们先简单浏览一下常用术语。 运算元 —— 运算符应用的对象。比如说乘法运算 5 * 2，有两个运算元：左运算元 5 和右运算元 2。有时候人们也称其为“参数”而不是“运算元”。 如果一个运算符对应的只有一个运算元，那么它是 一元运算符。比如说一元负号运算符（unary negation）-，它的作用是对数字进行正负转换： let x = 1; x = -x; // 符号反转运算符 如果一个运算符拥有两个运算元，那么它是 二元运算符。减号还存在二元运算符形式： let x = 1, y = 3; alert( y - x ); // 2，二元运算符减号做减运算"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"javascriptInfo, Hirsun"}],["meta",{"property":"article:published_time","content":"2022-04-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"基础运算\\",\\"description\\":\\"基础运算 术语 在正式开始前，我们先简单浏览一下常用术语。 运算元 —— 运算符应用的对象。比如说乘法运算 5 * 2，有两个运算元：左运算元 5 和右运算元 2。有时候人们也称其为“参数”而不是“运算元”。 如果一个运算符对应的只有一个运算元，那么它是 一元运算符。比如说一元负号运算符（unary negation）-，它的作用是对数字进行正负转换： let x = 1; x = -x; // 符号反转运算符 如果一个运算符拥有两个运算元，那么它是 二元运算符。减号还存在二元运算符形式： let x = 1, y = 3; alert( y - x ); // 2，二元运算符减号做减运算\\"}"]]},"headers":[{"level":2,"title":"术语","slug":"术语","link":"#术语","children":[]},{"level":2,"title":"数学","slug":"数学","link":"#数学","children":[]},{"level":2,"title":"类型转换","slug":"类型转换","link":"#类型转换","children":[{"level":3,"title":"用二元运算符 + 连接字符串","slug":"用二元运算符-连接字符串","link":"#用二元运算符-连接字符串","children":[]},{"level":3,"title":"数字转化，一元运算符 +","slug":"数字转化-一元运算符","link":"#数字转化-一元运算符","children":[]}]},{"level":2,"title":"赋值运算符","slug":"赋值运算符","link":"#赋值运算符","children":[]},{"level":2,"title":"运算符的优先级","slug":"运算符的优先级","link":"#运算符的优先级","children":[]},{"level":2,"title":"原地修改","slug":"原地修改","link":"#原地修改","children":[]},{"level":2,"title":"位运算符","slug":"位运算符","link":"#位运算符","children":[]},{"level":2,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[{"level":3,"title":"或运算寻找第一个真值","slug":"或运算寻找第一个真值","link":"#或运算寻找第一个真值","children":[]},{"level":3,"title":"与运算寻找第一个假值","slug":"与运算寻找第一个假值","link":"#与运算寻找第一个假值","children":[]},{"level":3,"title":"!非","slug":"非","link":"#非","children":[]},{"level":3,"title":"空值合并运算符","slug":"空值合并运算符","link":"#空值合并运算符","children":[]}]},{"level":2,"title":"逗号运算符","slug":"逗号运算符","link":"#逗号运算符","children":[]},{"level":2,"title":"值的比较","slug":"值的比较","link":"#值的比较","children":[{"level":3,"title":"常规比较","slug":"常规比较","link":"#常规比较","children":[]},{"level":3,"title":"严格相等","slug":"严格相等","link":"#严格相等","children":[]},{"level":3,"title":"对 null 和 undefined 进行比较","slug":"对-null-和-undefined-进行比较","link":"#对-null-和-undefined-进行比较","children":[]},{"level":3,"title":"null vs 0","slug":"null-vs-0","link":"#null-vs-0","children":[]},{"level":3,"title":"undefined","slug":"undefined","link":"#undefined","children":[]},{"level":3,"title":"避免问题","slug":"避免问题","link":"#避免问题","children":[]}]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":26.61,"words":2661},"filePathRelative":"note/cs/programming/javascript/standard/operator.md","localizedDate":"2022年4月29日","excerpt":"<h1> 基础运算</h1>\\n<h2> 术语</h2>\\n<p>在正式开始前，我们先简单浏览一下常用术语。</p>\\n<ul>\\n<li>\\n<p><strong>运算元</strong> —— 运算符应用的对象。比如说乘法运算 <code>5 * 2</code>，有两个运算元：左运算元 <code>5</code> 和右运算元 <code>2</code>。有时候人们也称其为“参数”而不是“运算元”。</p>\\n</li>\\n<li>\\n<p>如果一个运算符对应的只有一个运算元，那么它是 <strong>一元运算符</strong>。比如说一元负号运算符（unary negation）<code>-</code>，它的作用是对数字进行正负转换：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\nx <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">-</span>x<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 符号反转运算符</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>如果一个运算符拥有两个运算元，那么它是 <strong>二元运算符</strong>。减号还存在二元运算符形式：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">let</span> x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> y <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">alert</span><span class=\\"token punctuation\\">(</span> y <span class=\\"token operator\\">-</span> x <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 2，二元运算符减号做减运算</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{e as data};