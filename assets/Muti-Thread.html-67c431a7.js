import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,a,b as n,d as s,e as p}from"./app-c31a6da5.js";const l={},i=p(`<h1 id="多线程实现" tabindex="-1"><a class="header-anchor" href="#多线程实现" aria-hidden="true">#</a> 多线程实现</h1><p>Java 使用多线程而不是多进程。</p><p>多线程中，最难处理的是IO。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><img src="https://pic.hanjiaming.com.cn/2022/04/14/096e7cecca441.png" alt="1649948280489.png" style="zoom:50%;"><p>程序使用Java 线程池创建多线程，而不是使用传统的方式。这样有利于后期管理线程。</p><p>实质上是多个socket并存，程序需要保持和客户端的通信。Silver Spork让每个子线程处理每个socket。当socket 过期后，子线程将被interrupt。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// create thread pool for timer exec</span>
<span class="token class-name">ExecutorService</span> workerExec <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个线程处理一个socket连接。当新的socket传入时，程序将启动一个新的worker 线程处理 和客户端的交互。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
workerExec<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>socket<span class="token punctuation">,</span> <span class="token operator">++</span>clientID<span class="token punctuation">,</span>logger<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,11),u={href:"https://www.runoob.com/java/java-multithreading.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1306581130018849",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/wxd0108/p/5479442.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/a1275302036/article/details/116662394",target:"_blank",rel:"noopener noreferrer"};function m(v,f){const e=o("ExternalLinkIcon");return c(),r("div",null,[i,a("p",null,[a("a",u,[n("https://www.runoob.com/java/java-multithreading.html"),s(e)])]),a("p",null,[a("a",d,[n("https://www.liaoxuefeng.com/wiki/1252599548343744/1306581130018849"),s(e)])]),a("p",null,[a("a",h,[n("https://www.cnblogs.com/wxd0108/p/5479442.html"),s(e)])]),a("p",null,[a("a",k,[n("https://blog.csdn.net/a1275302036/article/details/116662394"),s(e)])])])}const g=t(l,[["render",m],["__file","Muti-Thread.html.vue"]]);export{g as default};