import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as t,a as e,b as n,d as i,e as c}from"./app-c4852ce4.js";const s={},o=c(`<h1 id="初识-c-中的-argc与argv" tabindex="-1"><a class="header-anchor" href="#初识-c-中的-argc与argv" aria-hidden="true">#</a> 初识 c++ 中的 argc与argv</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>在许多C ++ IDE和编译器中，当它为您生成main函数时，它看起来像这样：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main(int argc, char *argv[])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main(int argc, char **argv)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而不是</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="main-函数特点" tabindex="-1"><a class="header-anchor" href="#main-函数特点" aria-hidden="true">#</a> main 函数特点</h2><p>main() 函数是 C++ 程序的入口函数，C++ 标准规定 main() 函数的返回值类型为 int，返回值用于表示程序的退出状态，返回 0 表示程序正常退出，返回非 0，表示出现异常。C++ 标准规定，main() 函数原型有两种：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>//第一种
int main();

//第二种
int main(int argc，char* argv[]);
int main(int argc，char** argv);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 main() 函数的返回值为int，而函数内没有出现 return 语句时，同样可以通过编译并正常运行。这是因为编译器在 main() 函数的末尾自动添加了return 0;语句。所以，main() 函数是 C++ 程序经过特殊处理的函数，其他的返回值类型不是 void 的函数，如果没有使用 return 语句，编译器将报错。虽然编译器会隐式添加return 0;，但还是建议开发人员避免使用这条规则，因为显示添加可避免出错时无法返回错误码，并且不会误认为 main() 函数可以没有 return 语句。</p><p>argc 和 argv 是 特定的名称，c++ 的 main 函数只接受这两个参数。数组argv中的元素支持从外界传入。</p><p>带参的 main() 函数可以提供用户向程序输入的参数，例如<code>int main(int argc,char* argv[])</code>，其中，argc 代表参数的个数，argv 数组中每一个元素用于保存命令行参数的内容。</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p><strong><code>argv</code>和<code>argc</code>是在C和C ++中将命令行参数传递给<code>main()</code> 。</strong></p><ul><li>argc用来统计你运行程序时送给main函数的命令行参数的个数。</li><li>* argv[ ]: 字符串数组，用来存放指向你的字符串参数的指针数组，每一个元素指向一个参数. <ul><li>argv[0] 指向程序运行的全路径名</li><li>argv[1] 指向在DOS命令行中执行程序名后的第一个字符串</li><li>argv[2] 指向执行程序名后的第二个字符串</li><li>......</li><li>argv[argc]为NULL</li></ul></li></ul><p>argc 是 argument count的缩写，表示传入main函数的参数个数，<code>argc</code>将是<code>argv</code>指向的字符串的个数。 （实际上）这将是1加上参数的数量，因为几乎所有的实现都将程序名放在数组的前面。</p><p>按照惯例，这些变量分别命名为<code>argc</code> （ <em>参数计数</em> ）和<code>argv</code> （ <em>参数向量</em> ），但是可以给它们指定任何有效的标识符： <code>int main(int num_args, char** arg_strings)</code>同样有效。</p><p>如果您不打算处理命令行参数，则也可以完全省略它们，产生<code>int main()</code> 。</p><p>数组argv中的元素支持从外界传入。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="第一案例-探索argv-0" tabindex="-1"><a class="header-anchor" href="#第一案例-探索argv-0" aria-hidden="true">#</a> 第一案例：探索argv[0]</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main(int argc, char** argv) {
    std::cout &lt;&lt; &quot;Have &quot; &lt;&lt; argc &lt;&lt; &quot; arguments: &quot;;
    for (int i = 0; i &lt; argc; ++i) {
        std::cout &lt;&lt; argv[i] &lt;&lt; std::endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><blockquote><p>Have 1 arguments: /Users/hanjiaming/project/cpp/untitled35/cmake-build-debug/untitled35</p></blockquote><p>我们发现，argv数组的第一个元素是 运行该程序的地址。</p><h3 id="第二案例-从外界传入参数" tabindex="-1"><a class="header-anchor" href="#第二案例-从外界传入参数" aria-hidden="true">#</a> 第二案例：从外界传入参数</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

int main(int argc, char** argv) {
    std::cout &lt;&lt; &quot;Have &quot; &lt;&lt; argc &lt;&lt; &quot; arguments:&quot; &lt;&lt; std::endl;
    for (int i = 0; i &lt; argc; ++i) {
        std::cout &lt;&lt; argv[i] &lt;&lt; std::endl; // // argv[i] is the argument at index i
    }
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在命令行中使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./main a1 b2 c3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会输出</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Have 4 arguments:
./test
a1
b2
c3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="他言" tabindex="-1"><a class="header-anchor" href="#他言" aria-hidden="true">#</a> 他言</h2><p>Python 也有类似的功能</p><img src="https://pic.hanjiaming.com.cn/2021/04/26/180110370b64d.png" alt="CleanShot 2021-04-26 at 23.07.22@2x.png" title="CleanShot 2021-04-26 at 23.07.22@2x.png"><p>引用</p>`,37),u={href:"https://blog.csdn.net/xyw_blog/article/details/15686961",target:"_blank",rel:"noopener noreferrer"},v={href:"https://my.oschina.net/u/3797416/blog/3160121",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.runoob.com/python/python-command-line-arguments.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/K346K346/article/details/49331965",target:"_blank",rel:"noopener noreferrer"};function h(p,b){const a=d("ExternalLinkIcon");return l(),t("div",null,[o,e("ul",null,[e("li",null,[e("a",u,[n("https://blog.csdn.net/xyw_blog/article/details/15686961"),i(a)])]),e("li",null,[e("a",v,[n("https://my.oschina.net/u/3797416/blog/3160121"),i(a)])]),e("li",null,[e("a",m,[n("https://www.runoob.com/python/python-command-line-arguments.html"),i(a)])]),e("li",null,[e("a",g,[n("https://blog.csdn.net/K346K346/article/details/49331965"),i(a)])])])])}const f=r(s,[["render",h],["__file","argc-argv.html.vue"]]);export{f as default};
