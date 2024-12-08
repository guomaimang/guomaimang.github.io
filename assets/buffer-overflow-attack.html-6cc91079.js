import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-a901a58e.js";const i={},l=e(`<h1 id="buffer-overflow-attack" tabindex="-1"><a class="header-anchor" href="#buffer-overflow-attack" aria-hidden="true">#</a> Buffer Overflow Attack</h1><h2 id="computer-memory" tabindex="-1"><a class="header-anchor" href="#computer-memory" aria-hidden="true">#</a> Computer Memory</h2><p>从逻辑上讲，计算机内存可以被分为若干个存储位置。在我们的大多数计算机中，</p><ul><li>每个位置被分配一个 32位 的地址</li><li>每个内存位置可以存储 8位 的信息</li></ul><p>在C/C++程序中，一个整数类型占据了32位，<code>int abc = 888;</code></p><img src="https://pic.hanjiaming.com.cn/2023/04/27/5bc45aa260e22.png" alt="1682605002517.png" style="zoom:25%;"><p>The address of <strong>abc</strong> is the smallest address among the four. Thus, it is 0x6000.</p><h2 id="buffer-in-programs" tabindex="-1"><a class="header-anchor" href="#buffer-in-programs" aria-hidden="true">#</a> Buffer in Programs</h2><ul><li>计算系统中的 &quot;服务器 &quot;基本上是一个计算机程序，用于接受数据处理的请求</li><li>由于工作量的限制，系统无法立即为所有请求提供服务，因此需要对请求进行临时存储。-&gt; Called “Buffer”</li><li>缓冲区的实现可以是程序中的一个 &quot;数组&quot;。</li><li>编译器为数组中的所有元素预留了足够的空间，以连续的方式进行存储。</li></ul><p>下面是一个名为arr的整数数组在内存中的排列，其大小为3</p><img src="https://pic.hanjiaming.com.cn/2023/04/27/23ea8f6e68d87.png" alt="1682605290801.png" style="zoom:33%;"><h2 id="buffer-overflow" tabindex="-1"><a class="header-anchor" href="#buffer-overflow" aria-hidden="true">#</a> Buffer Overflow</h2><p>接口处的一种情况，在这种情况下，可以将更多的输入放入缓冲区或数据保存区域，而不是分配的容量，覆盖其他信息。</p><ul><li>例如，在C/C++环境中，并不总是有 &quot;超出边界/范围 &quot;的检查。</li><li>攻击者利用这种情况使系统崩溃，或插入特制的代码，使他们能够获得对系统的控制。</li></ul><h2 id="problems" tabindex="-1"><a class="header-anchor" href="#problems" aria-hidden="true">#</a> Problems</h2><ul><li>缓冲区溢出是不良编码行为的结果</li><li>特别是C/C++程序员，很容易受到使用不安全但易于使用的字符串处理函数的诱惑。 <ul><li>E.g., cin, strcpy, gets, strcat</li></ul></li></ul><h2 id="buffer-overflow-attacks" tabindex="-1"><a class="header-anchor" href="#buffer-overflow-attacks" aria-hidden="true">#</a> Buffer Overflow Attacks</h2><ul><li>它们利用了代码中的缓冲区溢出</li><li>缓冲区溢出攻击可以 <ul><li>通过运行拒绝服务攻击，造成对可用性的攻击 -&gt; 基本上意味着本应提供给真实用户的资源并不在</li><li>运行任意代码，修改数据，这是对完整性的攻击，或读取敏感信息，这是对保密性的攻击</li></ul></li><li>在某些情况下，攻击者试图利用以特权账户（如root或系统管理员）运行的程序。</li><li>他们利用这些特权来接触和攻击他们自己通常无法进入的领域。</li></ul><p>例如</p><ul><li>一个程序，X，由管理员创建，可以访问系统中的所有资源</li><li>由于 X 的漏洞，攻击者试图插入一段代码 Y</li><li>Y 现在可以拥有与系统中的管理员相同的权利 -&gt; Y may perform malicious actions</li></ul><h2 id="memory-stack-in-program-execution" tabindex="-1"><a class="header-anchor" href="#memory-stack-in-program-execution" aria-hidden="true">#</a> Memory Stack in Program Execution</h2><p>由于内存和内存管理的工作方式，缓冲区溢出是可能的</p><ul><li>在C/C++中，内存管理部分是由程序员选择的</li><li>在 Java、C# 和 python 中并非如此。为什么？</li><li>许多最有问题的缓冲区溢出攻击都是专门针对栈的</li></ul><p>堆栈包含与运行中的函数调用相关的堆栈框架</p><ul><li>框架包含的信息包括 <ul><li>返回地址「the return address」</li><li>本地变量「local variables」</li><li>函数参数「function arguments」</li></ul></li><li>堆栈内存向下增长到较低的地址（大多架构中）</li></ul><img src="https://pic.hanjiaming.com.cn/2023/04/29/61ef0bf96601f.png" alt="1682739960634.png" style="zoom:33%;"><ul><li>Text Segment (a.k.a. Code Segment) <ul><li>Executable binary</li><li>Read only</li></ul></li><li>Data Segment <ul><li>Initialized global variables or static variables</li><li>Uninitialized data</li></ul></li><li>Stack: Local variables (of function calls)</li><li>Heap: Dynamic memory allocation in the process</li><li>Registers <ul><li>一个CPU拥有有限的寄存器 <ul><li>用于 &quot;移动 &quot;和存储数据的特殊内存位置</li><li>最快且最接近CPU</li></ul></li><li>堆栈是我们可以存储那些不适合在寄存器中的函数的局部变量的地方，比如局部数组或结构。</li><li>有一个堆栈指针，<strong>指向堆栈中最近分配的地址，也就是堆栈的顶部，它实际上在内存中的位置较低。</strong></li></ul></li></ul><h2 id="the-stack" tabindex="-1"><a class="header-anchor" href="#the-stack" aria-hidden="true">#</a> The Stack</h2><ul><li>在一个函数中声明的变量被推到堆栈中 -&gt; 它们位于靠近函数调用者的返回地址的地方</li><li>返回地址是指一个函数完成后控制应返回的内存位置</li></ul><p>For example</p><ul><li>main()调用doSth()</li><li>doSth()的堆栈包含main()的地址，因此在doSth()完成后，它将返回main()</li></ul><p>程序也许覆盖存储在返回指针中的地址，因此程序无法返回到指令的正确位置</p><ul><li>在这种情况下，程序将中止</li><li>但如果我们是在攻击系统，我们可能会尝试做得更多：将返回地址改为包含恶意代码开始的地址</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>许多缓冲区溢出是由于使用了C语言标准库中的不安全函数造成的。</p><ul><li><code>gets(char *);</code></li><li><code>strcat(char *, char *);</code></li><li><code>sprintf(char *, char *, ...);</code></li></ul></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>

using namespace std<span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span> sNumber<span class="token punctuation">;</span>
       <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
Student aRec<span class="token punctuation">,</span> bRec<span class="token punctuation">;</span> 

aRec<span class="token punctuation">.</span>sNumber <span class="token operator">=</span> <span class="token number">1234567</span><span class="token punctuation">;</span> 
<span class="token function">strcpy</span><span class="token punctuation">(</span>aRec<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;david&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bRec<span class="token punctuation">.</span>sNumber <span class="token operator">=</span> <span class="token number">1234568</span><span class="token punctuation">;</span>
<span class="token function">strcpy</span><span class="token punctuation">(</span>bRec<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;alexander&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Illegel access of memory space</span>

cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Student name: &quot;</span> <span class="token operator">&lt;&lt;</span> aRec<span class="token punctuation">.</span>name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> 
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Student number: &quot;</span> <span class="token operator">&lt;&lt;</span> aRec<span class="token punctuation">.</span>sNumber <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> 
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Student name: &quot;</span> <span class="token operator">&lt;&lt;</span> bRec<span class="token punctuation">.</span>name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Student number: &quot;</span> <span class="token operator">&lt;&lt;</span> bRec<span class="token punctuation">.</span>sNumber <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The stacks of X86 and ARM grow towards lower addresses. The stack analysis is as below.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>+ ......         +
+----------------+  
+ <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         +
+----------------+          
+ ......         + 
+----------------+ &lt;-- Stack <span class="token property">Top</span><span class="token punctuation">:</span> Lower Address
+ bRec.sNumber   +
+----------------+
+ bRec.name      +
+----------------+   
+ aRec.sNumber   +
+----------------+
+ aRec.name      +
+----------------+ &lt;-- Bottom of the <span class="token property">stack</span><span class="token punctuation">:</span> Higher Adderss
+ ......         +
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if If only concerned with member variables, then</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>+----------------+ &lt;-- Stack <span class="token property">Top</span><span class="token punctuation">:</span> Lower Address
+ bRec.sNumber[0]+
+----------------+
+ bRec.sNumber[1]+
+----------------+
+ bRec.sNumber[2]+
+----------------+
+ bRec.sNumber[3]+
+----------------+
+ bRec.name[0]   +
+----------------+   
+ bRec.name[1]   +
+----------------+  
+ bRec.name[2]   +
+----------------+  
+ bRec.name[3]   +
+----------------+  
+ bRec.name[4]   +
+----------------+  
+ bRec.name[5]   +
+----------------+  
+ bRec.name[6]   +
+----------------+  
+ bRec.name[7]   + &lt;-- Stack overflow
+----------------+  
+ aRec.sNumber[0]+ 
+----------------+
+ aRec.sNumber[1]+
+----------------+
+ aRec.sNumber[2]+
+----------------+
+ aRec.sNumber[3]+
+----------------+
+ aRec.name[0]   +
+----------------+   
+ aRec.name[1]   +
+----------------+  
+ aRec.name[2]   +
+----------------+  
+ aRec.name[3]   +
+----------------+  
+ aRec.name[4]   +
+----------------+  
+ aRec.name[5]   +
+----------------+  
+ aRec.name[6]   +
+----------------+  
+ aRec.name[7]   +
+----------------+ &lt;-- Bottom of the <span class="token property">stack</span><span class="token punctuation">:</span> Higher Adderss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that both the diagram above does not show the padding.</p><p>Obviously, the length of <code>alexander</code> exceeds 8, it will occupy the extra bytes of a Rec.sNumber.</p>`,42),t=[l];function c(r,o){return s(),a("div",null,t)}const p=n(i,[["render",c],["__file","buffer-overflow-attack.html.vue"]]);export{p as default};
