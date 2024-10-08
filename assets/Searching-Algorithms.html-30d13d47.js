import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as a}from"./app-b1e5a1a1.js";const r={},l=a(`<h1 id="searching-algorithms" tabindex="-1"><a class="header-anchor" href="#searching-algorithms" aria-hidden="true">#</a> Searching Algorithms</h1><h2 id="goal" tabindex="-1"><a class="header-anchor" href="#goal" aria-hidden="true">#</a> Goal</h2><p>Given an array A of n numbers (in ascending order)</p><ul><li>Find the position of a key k from the array A</li><li>return –1 if not found</li></ul><p>A: | 1 | 3 | 8 | 12 | 17 | 23 | 35</p><h2 id="algorithm-1-linear-search" tabindex="-1"><a class="header-anchor" href="#algorithm-1-linear-search" aria-hidden="true">#</a> Algorithm 1: Linear search</h2><p>Assume k appears at most once in the array. Once k is found, the algorithm stops.</p><ul><li>Best Case: K is in the first element</li><li>Worse Case: K is in the last element; element not found</li><li>Average case: Half of the array is searched</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>for(int i=0;i&lt;n;i++){
  if(A[i]==target){
    returni;
  }
else{
  return-1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Worse Case: O(n): K is in the last element/element not found</li><li>Best Case: O(1): K is in the first element</li><li>Average case: O(n): Half of the array is searched</li><li>Overall, the running time of linear search is O(n): Most of the time we are interested in the worse case: You know for certain that the algorithm must perform at least that well「总体而言，线性搜索的运行时间为O（n）：在大多数情况下，我们对最坏的情况感兴趣：您可以肯定地知道该算法至少必须表现得很好」</li></ul><h2 id="algorithm-2-binary-search" tabindex="-1"><a class="header-anchor" href="#algorithm-2-binary-search" aria-hidden="true">#</a> Algorithm 2: Binary search</h2><ul><li>Suppose someone picks a number k between 1 and 100</li><li>You are allowed to ask questions of the form “Is k greater than x”, where x is an integer you choose</li><li>Ask as few questions as possible</li></ul><p><strong>Binary search for a sorted array</strong></p><ul><li>Comparing a search key K with the array’s middle element A[m]「将搜索键K与数组的中间元素A [m]进行比较」 <ul><li>If they match, the algorithm stops;「如果它们匹配，则算法停止」</li><li>Otherwise, the same operation is repeated for the first half of the array if K &lt;A[m] , or for the second half if K&gt;A[m]</li></ul></li><li>When to stop: If the remaining array to be searched is empty, then the key cannot be found and return -1「如果要搜索的其余数组为空，则找不到键并返回-1」</li></ul><img src="https://pic.hanjiaming.com.cn/2021/05/13/990cd785d8d30.png" alt="1620891792710.png" title="1620891792710.png"><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    //init the array and target value
    int arr[10] = {5,98,62,90,90,76,90,12,7,5};
    int target = 12;

    // sort the array
    const int ARRAY_SIZE = 10;
    int* data = arr;
    int insert;

    for (int next = 1; next &lt; ARRAY_SIZE; next++) {
        insert = data[next];
        int moveItem = next;

        while ((moveItem &gt; 0) &amp;&amp; (data[moveItem - 1] &gt; insert)) {
            data[moveItem] = data[moveItem - 1];
            moveItem--;
        }

        data[moveItem] = insert;
    }

    // show the sorted array
    for(int i = 0;i&lt;10;i++){
        cout &lt;&lt; data[i] &lt;&lt; &quot; &quot;;
    }

    // search
    int l = 0,r= ARRAY_SIZE,m;
    while (l &lt;= r){
        m = (l+r)/2;
        if(target == data[m]){
            cout &lt;&lt; endl &lt;&lt; m;
            break;
        } else if(target &lt; data[m]){
            r = m - 1;
        } else{
            l = m + 1;
        }
    }

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><img src="https://pic.hanjiaming.com.cn/2021/05/13/cd8b27066aa84.png" alt="1620891910294.png" title="1620891910294.png"><img src="https://pic.hanjiaming.com.cn/2021/05/13/3d9e44365568c.png" alt="1620891946016.png" title="1620891946016.png"><h3 id="time-complexity-of-binary-search" tabindex="-1"><a class="header-anchor" href="#time-complexity-of-binary-search" aria-hidden="true">#</a> Time complexity of binary search</h3><ul><li>Basic operation: The number of times the search key is compared with an element of the array「搜索键与数组元素进行比较的次数」</li><li>Assume three-way comparison: after one comparison of K with A[m], the algorithm can determine whether K is smaller, equal to, or larger than A[m]「在将K与A [m]进行一次比较之后，该算法可以确定K是小于，等于还是大于A [m]」</li><li>Worse case: The key is not in the array「密钥不在数组中」</li></ul><img src="https://pic.hanjiaming.com.cn/2021/05/13/bf5395c442ba5.png" alt="1620892133875.png" title="1620892133875.png"><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><ul><li>COMP1011 @ PolyU&#39;s PowerPoint</li></ul>`,25),s=[l];function t(d,c){return i(),n("div",null,s)}const h=e(r,[["render",t],["__file","Searching-Algorithms.html.vue"]]);export{h as default};
