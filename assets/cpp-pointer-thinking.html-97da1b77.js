import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as d}from"./app-e3be25bd.js";const s={},r=d(`<h1 id="对c-指针的额外思考" tabindex="-1"><a class="header-anchor" href="#对c-指针的额外思考" aria-hidden="true">#</a> 对c++指针的额外思考</h1><h3 id="指针的两个作用" tabindex="-1"><a class="header-anchor" href="#指针的两个作用" aria-hidden="true">#</a> 指针的两个作用</h3><p><strong>指针的实质：变量</strong></p><p>故我们可将指针称为指针变量</p><ul><li>指向作用：用于指向一个变量，指针存储着变量的地址。<strong>多称作指针</strong></li><li>存储作用：存储着一个<strong>内存地址</strong>，以备用。<strong>多称作指针变量</strong></li></ul><p><strong>* 这个符号是连接这两个作用的桥梁，因为 * 能查看 一个指针变量中存的地址 对应的内存中的值</strong></p><h3 id="函数形参中的指针变量" tabindex="-1"><a class="header-anchor" href="#函数形参中的指针变量" aria-hidden="true">#</a> 函数形参中的指针变量</h3><p>我们应该把函数形参中的指针看做指针变量。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int func(int* ptr,int x){
  // 传入的第一个参数应该是一个地址；
}

func(address,number)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：使用<code> func(address,number)</code> 不是 call by pointer，是call by value；</p><p>因为我们将address传给函数的时候，address被函数复制传递给了ptr;</p><p>所以我们对 ptr 的任何更改都不会影响到原来的address。</p><p>call by pointer 是指使用 指针指向的方式 进行修改值。</p><p>如果我们想在此处使用 call by reference, 要使用<code>&amp;</code>「和号」。</p><p>&amp; 返回存储这个 变量的 内存地址。</p><p>目的：让 对 ptr 的任何更改都会 同步到原来的address</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int func(int** ptr,int x){
  // 传入的第一个参数应该是一个地址；
  // 此时 我们需要传入一个 地址的地址，即指针的指针
  
  // 使用 *ptr 获取到 传入的address
  // 使用 **ptr 获取到 传入的address指向的值
}

func(&amp;address,number)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),a=[r];function c(l,t){return n(),i("div",null,a)}const u=e(s,[["render",c],["__file","cpp-pointer-thinking.html.vue"]]);export{u as default};
