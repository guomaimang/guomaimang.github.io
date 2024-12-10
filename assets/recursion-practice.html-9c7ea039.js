import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as l,a as e,b as s,d as r,e as c}from"./app-f25791fa.js";const u={},t=c(`<h1 id="递归实践" tabindex="-1"><a class="header-anchor" href="#递归实践" aria-hidden="true">#</a> 递归实践</h1><p>递归分为单向递归和双向递归，我们日常说的递归是双向递归。</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><h3 id="递归的定义" tabindex="-1"><a class="header-anchor" href="#递归的定义" aria-hidden="true">#</a> 递归的定义</h3><p>编程语言中，函数 Func(Type a,……)直接或间接调用函数本身，则该函数称为「递归函数」。</p><p>在实现递归函数之前，有两件重要的事情需要弄清楚:</p><ul><li>递推关系：一个问题的结果与其子问题的结果之间的关系。</li><li>基本情况（base case）：不需要进一步的递归调用就可以直接计算答案的情况。可理解为递归跳出条件。</li></ul><p>一旦我们计算出以上两个元素，再想要实现一个递归函数，就只需要根据递推关系调用函数本身，直到其抵达基本情况。</p><p>实际上，递归就是数学归纳法。</p><h2 id="递归函数的特点" tabindex="-1"><a class="header-anchor" href="#递归函数的特点" aria-hidden="true">#</a> 递归函数的特点</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><img src="https://pic.hanjiaming.com.cn/2021/05/03/7a6f62a5c7933.png" alt="image.png" title="image.png"><ul><li>有两种case：base case 和 general case <ul><li>general case 一般的情况</li><li>base case：第一次到终点</li></ul></li><li>general case 的 return 需要调用自己，base return 不需要调用自己</li></ul><p><strong>一言以蔽之：我调用我自己</strong></p><h3 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h3><p>一下图解为双向递归；</p><img src="https://pic.hanjiaming.com.cn/2021/05/03/8414929e19b03.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/05/03/cb87524eada53.png" alt="image.png" title="image.png"><h2 id="如何写出一个递归函数" tabindex="-1"><a class="header-anchor" href="#如何写出一个递归函数" aria-hidden="true">#</a> 如何写出一个递归函数</h2><h3 id="范式-由下到上" tabindex="-1"><a class="header-anchor" href="#范式-由下到上" aria-hidden="true">#</a> 范式：由下到上</h3><ul><li>寻找递归递推关系</li><li>寻找递归基本情况，跳出时返回基本情况的结果</li><li>修改递归函数的参数</li><li>递归调用并返回中间变量</li><li>使用递归函数的返回值与当前参数进行计算，并返回最终结果</li></ul><p><strong>实例: 累加</strong>——下面我们以累加的示例说明写递归的思路</p><p>1+2+3+4+...+<em>n</em> ，函数表达式为 f(n) = f(n-1) + n</p><h3 id="寻找基本情况" tabindex="-1"><a class="header-anchor" href="#寻找基本情况" aria-hidden="true">#</a> 寻找基本情况</h3><p>累加示例中，基本情况为 n = 1 时，f(1) = 1。</p><h3 id="寻找递推关系-难点" tabindex="-1"><a class="header-anchor" href="#寻找递推关系-难点" aria-hidden="true">#</a> 寻找递推关系（难点）</h3><p>累加示例中，递推关系为 f(n) = f(n-1) + n，f(n) 每次执行时依赖 f(n-1) 的结果，所以我们把 <strong>f(n-1) 的结果</strong>看作是<strong>中间变量</strong>。</p><p><strong>中间变量其实就是联系递归函数的纽带，分析出中间变量递归函数也就实现了 80%。</strong></p><p>大白话：当前结果必须借助前一个结果，前一个借助前前一个... 一直到时我们找到了「基本情况」。</p><p>然后拿到「基本情况」开始往回计算。这个过程我们简称为「由下到上」。</p><p>下面我们用 f(5) = 1 + 2 + 3 + 4 + 5 = 15 这个过程进行分析。</p><h3 id="由下到上" tabindex="-1"><a class="header-anchor" href="#由下到上" aria-hidden="true">#</a> 由下到上</h3><p>在每个递归层次上，我们首先递归地调用自身，然后根据返回值进行计算。（依赖返回值）</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/** 
 * 模拟程序执行过程：
 * 5 + sum(4)
 * 5 + (4 + sum(3)
 * 5 + 4 + (3 + sum(2))
 * 5 + 4 + 3 + (2 + sum(1))
 * ------------------&gt; 到达基本情况 sum(1) = 1 ，开始执行 ③ 行代码
 * 5 + 4 + 3 + (2 + 1)
 * 5 + 4 + (3 + 3)
 * 5 + (4 + 6)
 * (5 + 10)
 * 15
 * &lt;p&gt;
 * 由下到上：最终从 1 + 2 + 3 + 4 + 5 计算...
 * 递归函数「开始」部分调用自身，这个过程就是找到基本情况），然后根据返回值进行计算。
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例-帕斯卡三角" tabindex="-1"><a class="header-anchor" href="#实例-帕斯卡三角" aria-hidden="true">#</a> 实例: 帕斯卡三角</h2><h3 id="递推关系" tabindex="-1"><a class="header-anchor" href="#递推关系" aria-hidden="true">#</a> 递推关系</h3><p>下面的插图（来源力扣）给出了一个 5 行的帕斯卡三角，根据上面的定义，我们生成一个具有确定行数的帕斯卡三角形。</p><img src="https://pic.hanjiaming.com.cn/2021/05/03/43de18459e176.gif" alt="791faf0c40cfff8190b7fddd60e68e812044a51b28cddead4b8a74c3c411a848-PascalTriangleAnimated2.gif" title="791faf0c40cfff8190b7fddd60e68e812044a51b28cddead4b8a74c3c411a848-PascalTriangleAnimated2.gif"><p>首先，我们定义一个函数 f(i, j)，它将会返回帕斯卡三角形第 i 行、第 jj列的数字。可以看到，每行的最左边和最右边的数字是基本情况，它总是等于 1。</p><p>每个数是它左上方和右上方的数的和。</p><ul><li>递推关系：f(i, j) = f(i - 1, j - 1) + f(i - 1, j)</li><li>基本情况：f(i,j) = 1 ，当 j=1,j=1 或者 i=j 时。</li></ul><h2 id="单向递归和双向递归" tabindex="-1"><a class="header-anchor" href="#单向递归和双向递归" aria-hidden="true">#</a> 单向递归和双向递归</h2><h3 id="单向递归" tabindex="-1"><a class="header-anchor" href="#单向递归" aria-hidden="true">#</a> 单向递归</h3><p>单向递归又叫做由上到下的递归。</p><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><ul><li>多个传递变量</li><li>传递变量的个数 = 形参个数</li><li>形参中包括一个中间变量，用于存放最终结果</li><li>base case 用于返回最终结果</li></ul><h4 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int asum(intnumber,intoutcome){
//base
if (number==0){
return outcome;
}
//general
outcome *= number;
number -= 1;
return asum(number,outcome);
}

int main(){
cout &lt;&lt; asum(3,1);
return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="范式" tabindex="-1"><a class="header-anchor" href="#范式" aria-hidden="true">#</a> 范式</h4><p>由下到上-范式</p><ul><li>寻找递归递推关系</li><li>寻找递归基本情况，跳出时返回基本情况的结果</li><li>修改递归函数的参数</li><li>递归调用并返回中间变量</li><li>使用递归函数的返回值与当前参数进行计算，并返回最终结果</li></ul><h4 id="通用代码" tabindex="-1"><a class="header-anchor" href="#通用代码" aria-hidden="true">#</a> 通用代码</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int fun(参数,中间变量) {
  // base case
	if (基本情况条件){
  	return 基本情况的结果与中间变量的计算结果;
    } 
  // general case
  中间变量 = 根据参数与中间变量重新计算;
  修改参数；
	return fun(参数,中间变量);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双向递归" tabindex="-1"><a class="header-anchor" href="#双向递归" aria-hidden="true">#</a> 双向递归</h3><h4 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h4><ul><li>通常只有一个形参</li><li>中间变量不需要传递</li><li>base case 返回 最基本情况的结果</li><li>general case 返回 最终结果</li></ul><h4 id="举例-1" tabindex="-1"><a class="header-anchor" href="#举例-1" aria-hidden="true">#</a> 举例</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int asum(int number){

    // base
    if (number == 0){
        return 1;
    }

    // general
    int outcome = asum(number-1);
    outcome *= number;
    return outcome;
}

int main() {
    cout &lt;&lt; asum(3);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通用代码-1" tabindex="-1"><a class="header-anchor" href="#通用代码-1" aria-hidden="true">#</a> 通用代码</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int fun(参数) {
  // base case
	if (基本情况条件){
    return 基本情况的结果; }
  
  // general case
    变量1 = fun(修改后的参数); 
    最终结果 = 根据 修改前的参数 与 变量1 计算;
    return 最终结果;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用</p>`,61),v={href:"https://leetcode-cn.com/circle/article/koSrVI/",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"COMP1011’s PowerPoint",-1);function m(b,o){const i=a("ExternalLinkIcon");return d(),l("div",null,[t,e("ul",null,[e("li",null,[e("a",v,[s("https://leetcode-cn.com/circle/article/koSrVI/"),r(i)])]),h])])}const f=n(u,[["render",m],["__file","recursion-practice.html.vue"]]);export{f as default};
