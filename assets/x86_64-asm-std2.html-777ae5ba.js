import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as a}from"./app-3b7bc918.js";const n={},d=a('<h1 id="x86汇编语言基础2" tabindex="-1"><a class="header-anchor" href="#x86汇编语言基础2" aria-hidden="true">#</a> x86汇编语言基础2</h1><h2 id="processor-states-x86-64-partial" tabindex="-1"><a class="header-anchor" href="#processor-states-x86-64-partial" aria-hidden="true">#</a> Processor states (x86-64, partial)</h2><p>Information about currently executing program「有关当前执行程序的信息」</p><ul><li>Temporary data：( %rax, … )</li><li>Location of runtime stack：( %rsp )</li><li>Location of current code control point「Location of current code control point」：( %rip, … )</li><li>Status of recent tests「Status of recent tests」：( CF, ZF, SF, OF )</li></ul><p>这些信息放在寄存器内</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/fb773836663b0.png" alt="image.png" title="image.png"><h2 id="condition-codes" tabindex="-1"><a class="header-anchor" href="#condition-codes" aria-hidden="true">#</a> Condition codes</h2><h3 id="single-bit-registers" tabindex="-1"><a class="header-anchor" href="#single-bit-registers" aria-hidden="true">#</a> Single bit registers</h3><p>条件码长 1bit，置放在三个寄存器中。</p><ul><li>CF Carry Flag (for unsigned)</li><li>SF Sign Flag (for signed)</li><li>ZF Zero Flag</li><li>OF Overflow Flag (for signed)</li></ul><h3 id="implicitly-set-as-side-effect-by-arithmetic-operations" tabindex="-1"><a class="header-anchor" href="#implicitly-set-as-side-effect-by-arithmetic-operations" aria-hidden="true">#</a> Implicitly set (as side effect) by arithmetic operations</h3><p>「通过算术运算隐式设置（作为副作用）」</p><p>Example: addq Src,Dest ↔ t = a+b</p><ul><li>CF set if carry out from most significant bit (unsigned overflow)</li><li>ZF set if t == 0</li><li>SF set if t &lt; 0 (as signed)</li><li>OF set if two’s-complement (signed) overflow <ul><li>a&gt;0 &amp;&amp; b&gt;0 &amp;&amp; t&lt;0) || (a&lt;0 &amp;&amp; b&lt;0 &amp;&amp; t&gt;=0)</li></ul></li></ul><p>Note: leaq does not alter any condition codes</p><p>注：像add、sub、xor这样的算数指令或者二进制计算指令都会通过隐式设置改变condition code</p><h3 id="explicit-setting-by-compare-instruction" tabindex="-1"><a class="header-anchor" href="#explicit-setting-by-compare-instruction" aria-hidden="true">#</a> Explicit Setting by Compare Instruction</h3><p>cmpl/cmpq Src, Dest</p><p>cmpl b,a like computing a-b without setting destination, but no actual subtraction is really conducted, i.e., the value of dest is not changed</p><ul><li>CF set if carry out from most significant bit (unsigned overflow)</li><li>ZF set if t == 0</li><li>SF set if t &lt; 0 (as signed)</li><li>OF set if two’s-complement (signed) overflow <ul><li>a&gt;0 &amp;&amp; b&gt;0 &amp;&amp; t&lt;0) || (a&lt;0 &amp;&amp; b&lt;0 &amp;&amp; t&gt;=0)</li></ul></li></ul><h3 id="explicit-setting-by-test-instruction" tabindex="-1"><a class="header-anchor" href="#explicit-setting-by-test-instruction" aria-hidden="true">#</a> Explicit Setting by Test instruction</h3><p>testl/testq Src, Dest</p><p>testl b,a like computing a&amp;b without setting Dest with the computing result</p><ul><li><p>Sets condition codes based on value of Src &amp; Dest</p></li><li><p>Useful to have one of the operands be a mask「掩码」</p></li><li><p>ZF set when a&amp;b == 0</p></li><li><p>SF set when a&amp;b &lt; 0</p></li></ul><h3 id="reading-condition-codes" tabindex="-1"><a class="header-anchor" href="#reading-condition-codes" aria-hidden="true">#</a> Reading condition codes</h3><h4 id="setx-instructions" tabindex="-1"><a class="header-anchor" href="#setx-instructions" aria-hidden="true">#</a> SetX Instructions</h4><p>Set single byte based on combinations of condition codes</p><table><thead><tr><th>SetX</th><th>Condition</th><th>Description</th></tr></thead><tbody><tr><td>sete</td><td>ZF</td><td>Equal / Zero</td></tr><tr><td>setne</td><td>~ZF</td><td>Not Equal / Not Zero</td></tr><tr><td>sets</td><td>SF</td><td>Negative</td></tr><tr><td>setns</td><td>~SF</td><td>Nonnegative</td></tr><tr><td>setg</td><td><sub>(SF^OF)&amp;</sub>ZF</td><td>Greater (Signed)</td></tr><tr><td>setge</td><td>~(SF^OF)</td><td>Greater or Equal (Signed)</td></tr><tr><td>setl</td><td>(SF^OF)</td><td>Less (Signed)</td></tr><tr><td>setle</td><td>(SF^OF)|ZF</td><td>Less or Equal (Signed)</td></tr><tr><td>seta</td><td><sub>CF&amp;</sub>ZF</td><td>Above (unsigned)</td></tr><tr><td>setb</td><td>CF</td><td>Below (unsigned)</td></tr></tbody></table><p>批注：一般为 setX reg;如果condition成立，reg将变成1，反之则为0；</p><p>SetX Instructions: Set single byte to (0 or 1) based on combination of condition codes「根据条件代码的组合将单字节设置为（0或1）」</p><p>addressable byte registers or memory「可寻址字节寄存器或存储器」</p><ul><li>Does not alter remaining 3 bytes</li><li>Typically use movzbl to finish job</li></ul><img src="https://pic.hanjiaming.com.cn/2021/04/06/e6653cab0b018.png" alt="image.png" title="image.png"><h2 id="conditional-branches" tabindex="-1"><a class="header-anchor" href="#conditional-branches" aria-hidden="true">#</a> Conditional branches</h2><h3 id="jump-instructions" tabindex="-1"><a class="header-anchor" href="#jump-instructions" aria-hidden="true">#</a> Jump instructions</h3><p>Jump instructions – change the control flow</p><h4 id="jx-instructions" tabindex="-1"><a class="header-anchor" href="#jx-instructions" aria-hidden="true">#</a> jX instructions</h4><ul><li>Change the instruction sequence by jumping to a target address either specified by absolution address or by a value in some register or memory</li><li>Unconditional (jmp) and conditional (jX other than jmp)</li></ul><table><thead><tr><th>jX</th><th>Condition</th><th>Description</th><th>cmp a, b</th></tr></thead><tbody><tr><td>jmp</td><td>1</td><td>Unconditional</td><td>---</td></tr><tr><td>je</td><td>ZF</td><td>Equal / Zero</td><td>b == a</td></tr><tr><td>jne</td><td>~ZF</td><td>Not Equal / Not Zero</td><td>b != a</td></tr><tr><td>js</td><td>SF</td><td>Negative</td><td>b &lt; a</td></tr><tr><td>jns</td><td>~SF</td><td>Nonnegative</td><td>b &gt;= a</td></tr><tr><td>jg</td><td><sub>(SF^OF)&amp;</sub>ZF</td><td>Greater (Signed)</td><td>b &gt; a</td></tr><tr><td>jge</td><td>~(SF^OF)</td><td>Greater or Equal (Signed)</td><td>b &gt;= a</td></tr><tr><td>jl</td><td>(SF^OF)</td><td>Less (Signed)</td><td>b &lt; a</td></tr><tr><td>jle</td><td>(SF^OF)|ZF</td><td>Less or Equal (Signed)</td><td>b &lt;= a</td></tr><tr><td>ja</td><td><sub>CF&amp;</sub>ZF</td><td>Above (unsigned)</td><td>b &gt; a</td></tr><tr><td>jb</td><td>CF</td><td>Below (unsigned)</td><td>b &lt; a</td></tr></tbody></table><p>注：即condition成立的时候，将会执行跳转，否则将不执行。</p><h4 id="implementing" tabindex="-1"><a class="header-anchor" href="#implementing" aria-hidden="true">#</a> Implementing</h4><p>Implementing conditional branches with jX</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/7c97bcd7db07b.png" alt="image.png" title="image.png"><h4 id="goto" tabindex="-1"><a class="header-anchor" href="#goto" aria-hidden="true">#</a> goto</h4><ul><li>We use the C goto statement to illustrate the control flow of jump in a more readable way</li><li>Try to avoid using goto when you are doing C programming</li></ul><img src="https://pic.hanjiaming.com.cn/2021/04/06/188662bcd7dcc.png" alt="image.png" title="image.png"><h5 id="general-form-of-expressing-if-then-else" tabindex="-1"><a class="header-anchor" href="#general-form-of-expressing-if-then-else" aria-hidden="true">#</a> General form of expressing if-then-else</h5><img src="https://pic.hanjiaming.com.cn/2021/04/06/0ed20c682dfba.png" alt="image.png" title="image.png" width="240px"><h2 id="conditional-moves" tabindex="-1"><a class="header-anchor" href="#conditional-moves" aria-hidden="true">#</a> Conditional moves</h2><img src="https://pic.hanjiaming.com.cn/2021/04/06/eb331ce2afde3.png" alt="image.png" title="image.png"><p>Why using conditional moves?</p><p>Modern processors use pipelines to execute a sequence of instructions「现代处理器使用流水线执行一系列指令」</p><p>Branching operation may cause the pipeline to stall「Branching operation 可能会导致管道停顿」</p><p>As a result, executing both branches will be faster then “test and jump”</p><h3 id="conditional-branches-by-conditional-moves" tabindex="-1"><a class="header-anchor" href="#conditional-branches-by-conditional-moves" aria-hidden="true">#</a> Conditional branches by conditional moves</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/8687f4ff69e98.png" alt="image.png" title="image.png"><h2 id="implementation-of-some-statements" tabindex="-1"><a class="header-anchor" href="#implementation-of-some-statements" aria-hidden="true">#</a> Implementation of some statements</h2><h3 id="do-while-loop" tabindex="-1"><a class="header-anchor" href="#do-while-loop" aria-hidden="true">#</a> do-while loop</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/39f7c5eeb5632.png" alt="image.png" title="image.png"><h3 id="while-loop" tabindex="-1"><a class="header-anchor" href="#while-loop" aria-hidden="true">#</a> while loop</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/9d7a8d8c1e5e5.png" alt="image.png" title="image.png"><h3 id="for-loop" tabindex="-1"><a class="header-anchor" href="#for-loop" aria-hidden="true">#</a> for loop</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/f8e82c5b5bd6d.png" alt="image.png" title="image.png"><h3 id="switch-statement" tabindex="-1"><a class="header-anchor" href="#switch-statement" aria-hidden="true">#</a> switch statement</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/8ce3ba0b8a808.png" alt="image.png" title="image.png"><p>*8 的原因是 标签 是 64bit 长 的地址，而且标签是相邻的。</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/0314eac9cd251.png" alt="image.png" title="image.png"><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><ul><li>COMP1411@Polyu PowerPoint</li></ul>',69),o=[d];function r(s,l){return e(),i("div",null,o)}const p=t(n,[["render",r],["__file","x86_64-asm-std2.html.vue"]]);export{p as default};