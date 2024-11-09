import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as n}from"./app-45633549.js";const d={},l=n(`<h1 id="block-collection" tabindex="-1"><a class="header-anchor" href="#block-collection" aria-hidden="true">#</a> Block Collection</h1><h2 id="定义-声明-和-赋值变量" tabindex="-1"><a class="header-anchor" href="#定义-声明-和-赋值变量" aria-hidden="true">#</a> 定义(声明) 和 赋值变量</h2><table><thead><tr><th></th><th>对或者错，错误原因</th></tr></thead><tbody><tr><td>int 3;</td><td>cannot start with digit int a=3;</td></tr><tr><td>double;</td><td>double b;</td></tr><tr><td>int = 19;</td><td>int c=19;</td></tr><tr><td>float myten = 10.23;</td><td>正确</td></tr><tr><td>double_sum = 2.2;</td><td>double sum = 2.2;</td></tr><tr><td>int that_value 212;</td><td>int that_value = 212;</td></tr></tbody></table><table><thead><tr><th>Invalid variable naming</th><th>Valid variable naming</th><th>Description</th></tr></thead><tbody><tr><td>int monthly income</td><td>int monthly_income</td><td>Monthly income of integer type</td></tr><tr><td>---</td><td>int counter**;**</td><td>Counter of integer type</td></tr><tr><td>double %scale</td><td>double scale**;**</td><td>Scale of double type</td></tr><tr><td>---</td><td>double bike_sales**;**</td><td>Sales of bike of double type</td></tr></tbody></table><table><thead><tr><th>Program Segment</th><th>User input</th><th>Answer</th></tr></thead><tbody><tr><td>int first, second, third;cin &gt;&gt; first &gt;&gt; second &gt;&gt; third;</td><td>24 25 26</td><td>正确</td></tr><tr><td>double fourth, fifth, sixth;cin &gt;&gt; fourth &gt;&gt; fifth &gt;&gt; sixth;</td><td>24.4 25.5 26</td><td>正确</td></tr><tr><td>int seventh, eighth, ninth;cin &gt;&gt; seventh &gt;&gt; eighth &gt;&gt; ninth;</td><td>24.4 25.5 26.6</td><td>×</td></tr><tr><td>double tenth, eleventh, twelfth;cin &gt;&gt; tenth &gt;&gt; eleventh &gt;&gt; twelfth;</td><td>23.4 24.5</td><td>×</td></tr></tbody></table><p>提示：长位向段位兼容</p><table><thead><tr><th>Program Segment</th><th>Answer</th></tr></thead><tbody><tr><td>int d = 4;</td><td>√</td></tr><tr><td>double a; int d = d * (6 + d);</td><td>×</td></tr><tr><td>double d = &quot;3&quot;;</td><td>×</td></tr></tbody></table><h2 id="计算语句" tabindex="-1"><a class="header-anchor" href="#计算语句" aria-hidden="true">#</a> 计算语句</h2><table><thead><tr><th>Program Segment</th><th>Answer</th></tr></thead><tbody><tr><td>int z = 9 + 2;</td><td>11</td></tr><tr><td>int z = 9 - 2;</td><td>7</td></tr><tr><td>int z = 5 * 2;</td><td>10</td></tr><tr><td>int z = 8 / 4;</td><td>2</td></tr><tr><td>int z = 9 / 4;</td><td><strong>2</strong></td></tr><tr><td>double z = 9 / 4;</td><td><strong>2</strong></td></tr><tr><td>int z = 222 / 300;</td><td>0</td></tr><tr><td>double z = 222.0 / 300.0;</td><td>0.74</td></tr><tr><td>int z = 222 / 300.00;</td><td>0</td></tr><tr><td>double z = pow(3, 6);</td><td><strong>729</strong></td></tr></tbody></table><h3 id="常用代码" tabindex="-1"><a class="header-anchor" href="#常用代码" aria-hidden="true">#</a> 常用代码</h3><h4 id="数组从大到小排序" tabindex="-1"><a class="header-anchor" href="#数组从大到小排序" aria-hidden="true">#</a> 数组从大到小排序</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt; 
#include &lt;iomanip&gt;
using namespace std; 

int main() {
	const int ARRAY_SIZE = 10;
	int data[ARRAY_SIZE] = { 2, 64, 4, 33, 10, 12, 89, 68, 45, 7 };
	int i, insert;
	cout &lt;&lt; &quot;Data items in original order\\n&quot;; 
  
	for (i = 0; i &lt; ARRAY_SIZE; i++) {
		cout &lt;&lt; setw(4) &lt;&lt; data[i];
	}
  
	for (int next = 1; next &lt; ARRAY_SIZE; next++) { 
		insert = data[next];
		int moveItem = next;

		while ((moveItem &gt; 0) &amp;&amp; (data[moveItem - 1] &lt; insert)) { // 改成大于号后变成由小到大排序
    	data[moveItem] = data[moveItem - 1];
			moveItem--;
  		}
    
		data[moveItem] = insert;
	}
  
	cout &lt;&lt; &quot;\\nData items in new order\\n&quot;; 
  for (i = 0; i &lt; ARRAY_SIZE; i++) {
		cout &lt;&lt; setw(4) &lt;&lt; data[i];
  	}
  
	cout &lt;&lt; endl; 
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="统计一个范围内的质数个数" tabindex="-1"><a class="header-anchor" href="#统计一个范围内的质数个数" aria-hidden="true">#</a> 统计一个范围内的质数个数</h4><p>Counting Prime Numbers</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

bool isPrime(int n) {
  for (int i = 2; i &lt; n; i++) {
    if (n % i == 0) {
      return false; 
    } 
  }
  return true; 
}

int countPrime(int n) {
  // base case
  if (n == 2) {
    return 1;
  }
  // general case
  if (isPrime(n)) {
    return countPrime(n - 1) + 1;
  } else{
    return countPrime(n - 1);
  } 
}

int main() {
int input;
cout &lt;&lt; &quot;Please enter an integer: &quot;; 
cin &gt;&gt; input;
cout &lt;&lt; &quot;Total number of prime between 1 and &quot; &lt;&lt; input &lt;&lt; &quot; is &quot; &lt;&lt; countPrime(input) &lt;&lt; &quot;.&quot; &lt;&lt; endl; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三目运算" tabindex="-1"><a class="header-anchor" href="#三目运算" aria-hidden="true">#</a> 三目运算</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
#include &lt;stdio.h&gt;
#include &lt;iostream&gt;
using namespace std;
int main()
{
	int a=0, b=3, c=2;
	a = (b &gt; c ? b : c);      //b大于c，所以a=b=3
	cout &lt;&lt; &quot;a=&quot; &lt;&lt; a &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;stdio.h&gt;
#include &lt;iostream&gt;
using namespace std;
int main()
{
	int a=0, b=1, c=2;
	a = b &gt; c ? b : c;      //b小于c，所以a=c=2
	cout &lt;&lt; &quot;a=&quot; &lt;&lt; a &lt;&lt; endl;    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call-by-pointer" tabindex="-1"><a class="header-anchor" href="#call-by-pointer" aria-hidden="true">#</a> Call by Pointer</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


void swp(long* xp, long* yp){
    long t0 = *xp;
    long t1 = *yp;
    *xp = t1;
    *yp = t0;
}


int main() {
    long x=1,y=2;
    swp(&amp;x,&amp;y);
    cout &lt;&lt; x &lt;&lt; &quot; &quot; &lt;&lt; y &lt;&lt; &quot;\\n&quot;;

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="size-of" tabindex="-1"><a class="header-anchor" href="#size-of" aria-hidden="true">#</a> size of()</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main()
{
    cout &lt;&lt; &quot;Size of char : &quot; &lt;&lt; sizeof(char) &lt;&lt; endl;
    cout &lt;&lt; &quot;Size of short : &quot; &lt;&lt; sizeof(short) &lt;&lt; endl;
    cout &lt;&lt; &quot;Size of int : &quot; &lt;&lt; sizeof(int) &lt;&lt; endl;
    cout &lt;&lt; &quot;Size of long  : &quot; &lt;&lt; sizeof(long) &lt;&lt; endl;
    cout &lt;&lt; &quot;Size of float : &quot; &lt;&lt; sizeof(float) &lt;&lt; endl;
    cout &lt;&lt; &quot;Size of double : &quot; &lt;&lt; sizeof(double) &lt;&lt; endl;
    cout &lt;&lt; &quot;Size of long double : &quot; &lt;&lt; sizeof(long double) &lt;&lt; endl;
    cout &lt;&lt; &quot;Size of bool : &quot; &lt;&lt; sizeof(bool) &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果（单位为byte）</p><blockquote><p>Size of char : 1<br> Size of short : 2<br> Size of int : 4<br> Size of long : 8<br> Size of float : 4<br> Size of double : 8<br> Size of long double : 16<br> Size of bool : 1</p></blockquote><p>sizeof() 不需要用到其他任何库</p>`,25),s=[l];function a(r,c){return e(),i("div",null,s)}const o=t(d,[["render",a],["__file","Block-Collection-std.html.vue"]]);export{o as default};
