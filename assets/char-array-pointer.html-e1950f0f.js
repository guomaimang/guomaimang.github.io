import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e}from"./app-a1c6ff48.js";const r={},a=e(`<h1 id="char、数组和指针的关系构想" tabindex="-1"><a class="header-anchor" href="#char、数组和指针的关系构想" aria-hidden="true">#</a> char、数组和指针的关系构想</h1><h2 id="证明-数组和指针的相似性" tabindex="-1"><a class="header-anchor" href="#证明-数组和指针的相似性" aria-hidden="true">#</a> 证明：数组和指针的相似性</h2><p>数组的名称 就是指针，他们在内存结构上十分相似。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
   int arr[10];
   arr [0] = 610;
   arr [1] = 612;
   arr [2] = 616;
   arr [5] = 671;

   int* ptr = arr;

   cout &lt;&lt; arr[0] &lt;&lt; endl;  //610
   cout &lt;&lt; arr &lt;&lt; endl;  // 0x7ffeee2b2960
   cout &lt;&lt; &amp;arr[0] &lt;&lt; endl;  // 0x7ffeee2b2960
   cout &lt;&lt; ptr &lt;&lt; endl;  // 0x7ffeee2b2960
   cout &lt;&lt; *arr &lt;&lt; endl; // 610
   cout &lt;&lt; *ptr &lt;&lt; endl; // 610
  
   cout &lt;&lt; arr[1] &lt;&lt; endl;  // 612
   cout &lt;&lt; ptr[1] &lt;&lt; endl;
   cout &lt;&lt; *(arr+1) &lt;&lt; endl; // 612
	 cout &lt;&lt; *(ptr+1) &lt;&lt; endl; // 612

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>cout &lt;&lt; arr &lt;&lt; endl;</code></p><ul><li>arr 是数组的名称；但是，根据我们的构想，数组就是指针； <ul><li>所以这里会输出数组地址；</li><li>根据我们所学的知识，数组的地址就是数组的首个元素的地址，即 arr[0] 的地址。</li><li>这里体现了 arr[0] 的本质 是 元素；arr的本质是内存地址/指针，存储着arr [0] 的 内存地址。</li></ul></li><li><strong>探究结果</strong><ul><li>arr 的实质是 指针</li><li>&amp;arr[0] 和 arr 和 ptr 返回的结果一样，都是 arr[0] 的地址</li></ul></li></ul></li><li><p><code>out &lt;&lt; *(ptr+1) &lt;&lt; endl;</code></p><ul><li>根据我们的构想，数组就是指针。这样看来，两者在内存的存储有相似之处。 <ul><li>arr[0] 的内存地址+4 = arr[1] 的地址</li><li>ptr 指向 arr的第一个元素; ptr +1 指向 arr的第二个元素；</li><li>这里体现了指针变量类型定义的必要性 <ul><li>不同类型的数据长度不同，比如int占32bits，double占64bits</li><li>指针类型实现了 指针+n = 地址 + n*数据长度</li></ul></li></ul></li><li><strong>探究结果</strong><ul><li>可以使用指针访问 数组的元素。</li><li>指针+1 实现 访问数组的下一个元素。</li><li>arr 和 ptr 名称等价，可替换</li></ul></li></ul></li></ul><p>注：使用ptr[0]的索引元素，ptr必须指向数组！未指向数组则不可使用[n]索引元素！</p><p>尽管如此，也只能说 数组的名称 就是指针，但是不能说数组就是指针。此外，定义一个数组，我们是已经知道数组的大小。</p><h2 id="证明-char-array转换机制" tabindex="-1"><a class="header-anchor" href="#证明-char-array转换机制" aria-hidden="true">#</a> 证明：char array转换机制</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    char arr[11] = &quot;Hanjiaming&quot;;
    cout &lt;&lt; arr[0] &lt;&lt; endl; // H
    cout &lt;&lt; *arr &lt;&lt; endl; // H
    cout &lt;&lt; arr &lt;&lt; endl; // Hanjiaming
    cout &lt;&lt; &amp;arr[0] &lt;&lt; endl; // Hanjiaming
  
    cout &lt;&lt; arr[1] &lt;&lt; endl; // a
    cout &lt;&lt; &amp;arr[1] &lt;&lt; endl; // anjiaming
  
    char* ptr = arr;
    cout &lt;&lt; ptr &lt;&lt; endl; // Hanjiaming
    cout &lt;&lt; *ptr &lt;&lt; endl; // H
  
  	void* ptr2 = arr;
    cout &lt;&lt; ptr2 &lt;&lt; endl; // 0x7ffeef13997d	
  	
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cout &lt;&lt; *arr &lt;&lt; endl; </code><ul><li>根据数组和指针的关系构思，可知此时会输出H</li></ul></li><li><code>cout &lt;&lt; arr &lt;&lt; endl;</code><ul><li>此处输出 Hanjiaming，而不是 一个地址；原因是发生了char 转换机制</li></ul></li><li><code>cout &lt;&lt; *ptr2 &lt;&lt; endl </code>的语句不合法 <ul><li>void类型的指针不可以使用 * 运算符。</li></ul></li></ul><h3 id="转换机制-c-的重载特性" tabindex="-1"><a class="header-anchor" href="#转换机制-c-的重载特性" aria-hidden="true">#</a> 转换机制/C++的重载特性</h3><p>cout 识别 输出：如果&quot;&lt;&lt;&quot;后面是一个char 类型的指针 或 地址对应内存 存储 char 类型的数据，那么就从该地址对应内存按字节读取并输出，直到碰到\\0为止，这是C++的重载特性</p><p>重载特性在编译器层面，是c++编译器决定的。</p><p>注意：变量和指针的值实质上没有发生任何改变，只不过编译器以神奇的方式让输出显示的不一样。</p><p>但是，如果我们想知道一个char array的某个元素的值，我们可以让新建一个 void 指针指向 该 char array；</p><h3 id="char-的-转换机制" tabindex="-1"><a class="header-anchor" href="#char-的-转换机制" aria-hidden="true">#</a> char 的 转换机制</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main() {
    char arr = &#39;H&#39;;
    cout &lt;&lt; arr &lt;&lt; endl; // H
    cout &lt;&lt; &amp;arr &lt;&lt; endl; // H
  
  	void* ptr = arr;
  	cout &lt;&lt; ptr &lt;&lt; endl; // 0x7ffeef13997d
    cout &lt;&lt; &amp;arr+1 &lt;&lt; endl; // 空，猜测为 \\0
  
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用材料" tabindex="-1"><a class="header-anchor" href="#引用材料" aria-hidden="true">#</a> 引用材料</h2><ul><li>COMP1011</li></ul>`,19),t=[a];function d(s,c){return i(),n("div",null,t)}const m=l(r,[["render",d],["__file","char-array-pointer.html.vue"]]);export{m as default};
