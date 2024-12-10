import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as d,a as e,b as n,d as a,e as r}from"./app-f25791fa.js";const c={},u=r(`<h1 id="cpp面向对象编程入门" tabindex="-1"><a class="header-anchor" href="#cpp面向对象编程入门" aria-hidden="true">#</a> CPP面向对象编程入门</h1><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><p>Allow programmers to create a container for a collection of data items (variables) which can be different types.「允许程序员为可能是不同类型的数据项（变量）的集合创建一个容器。」</p><p>Such container is regarded as a new data type.「这样的容器被视为一种新的数据类型。」</p><p>The definition of a structure is a blueprint「蓝图」 of what variables the structure should contain.「结构的定义是该结构应包含哪些变量的蓝图。」</p><p><strong>Struct 的实质是“容器”。可以看做一个类型。每个这种类型的“盒子”里面可以包含很多变量。</strong></p><h3 id="defined" tabindex="-1"><a class="header-anchor" href="#defined" aria-hidden="true">#</a> Defined</h3><p>To define a structure</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>struct structure_name {
	data_type variable1;
	data_type variable2;
	...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To declare the structure (or create a variable of it)</p><p><code>structure_name variable_name;</code></p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>struct Point {
	double x;
	double y;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can group the coordinates x and y into a structure called Point「我们可以将坐标x和y分组为一个称为Point的结构」</p><ul><li><p>To create a Point variable</p><ul><li><code>Point p1;</code></li><li><code>Point sunset;</code></li><li><code>Point arrayOfTimes[5];</code></li><li><code>Point *pointerToTime;</code></li></ul></li><li><p>To assign a value to x of p1：<code>p1.x = 10;</code></p></li><li><p>To assign a value to y of p1：<code>p1.y = 20;</code></p></li><li><p>To use the variable</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int num = p1.x; // assign the value to another variable

cout &lt;&lt; p1.x &lt;&lt; endl; // print p1.x out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/04/04/67f97e3f1a479.png" alt="image.png" title="image.png"><h4 id="实例应用" tabindex="-1"><a class="header-anchor" href="#实例应用" aria-hidden="true">#</a> 实例应用</h4><p>The following program computes the area of a triangle. It first reads in 3 pairs of coordinates x and y and then computes and displays the area of triangle.「以下程序计算三角形的面积。它首先读取3对坐标x和y，然后计算并显示三角形的面积。」</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;cmath&gt;
#include &lt;iomanip&gt;
using namespace std;

struct Point { // Define a point structure
	double x;
	double y;
};

int main() {
	Point p1, p2, p3;

  // Ask for inputs
  cout &lt;&lt; &quot;Please enter the first x coordinate: &quot;;
  cin &gt;&gt; p1.x;
  cout &lt;&lt; &quot;Please enter the first y coordinate: &quot;;
  cin &gt;&gt; p1.y;
  cout &lt;&lt; &quot;Please enter the second x coordinate: &quot;;
  cin &gt;&gt; p2.x;
  cout &lt;&lt; &quot;Please enter the second y coordinate: &quot;;
  cin &gt;&gt; p2.y;
  cout &lt;&lt; &quot;Please enter the third x coordinate: &quot;;
  cin &gt;&gt; p3.x;
  cout &lt;&lt; &quot;Please enter the third y coordinate: &quot;;
  cin &gt;&gt; p3.y;
  
  // Calculate and display the area
  cout &lt;&lt; &quot;The area is &quot; &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; fabs((p3.y - p1.y) * (p2.x - p1.x) - (p2.y - p1.y) * (p3.x - p1.x) / 2.0) &lt;&lt; endl;
  
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/04/04/abb3d9e874227.png" alt="image.png" title="image.png"><h3 id="comparison-relational-operators" tabindex="-1"><a class="header-anchor" href="#comparison-relational-operators" aria-hidden="true">#</a> Comparison (relational operators)</h3><p>To compare <em>struct</em>, you compare them member-wise</p><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/04/04/5585f66cc4e57.png" alt="image.png" title="image.png"><h3 id="array-structure" tabindex="-1"><a class="header-anchor" href="#array-structure" aria-hidden="true">#</a> Array Structure</h3><p>我们可以创建一个 Struct 类型的数组，比如</p><p>To declare an array of Point with a size of 3 and assign values to each set of x and y:「要声明一个大小为3的Point数组，并为每组x和y赋值：」</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Point p[3];

p[0].x = 10;
p[0].y = 26;
p[1].x = 31;
p[1].y = 43;
p[2].x = 56;
p[2].y = 69;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4><p>bank.cpp</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;cstring&gt;

using namespace std;

struct BankAccount {
  int accountNo;
  double balance;
};

struct BankCustomer {
  char name[51];
  int age;
  char gender;
  char address[101];
  BankAccount accounts[3];
};

void deposit(BankCustomer&amp;, int, double);
void print(const BankCustomer&amp;);

int main() {
  
  BankCustomer bc;
  
  // initialize the bank customer values
  strcpy(bc.name, &quot;Dennis Liu&quot;);
  bc.age = 20;
  bc.gender = &#39;M&#39;;
  strcpy(bc.address, &quot;PQ730, Mong Man Wai Building, PolyU&quot;);
  bc.accounts[0].accountNo = 1234;
  bc.accounts[0].balance = 1000;
  bc.accounts[1].accountNo = 0;
  bc.accounts[2].accountNo = 0;
  
  cout &lt;&lt; &quot;Before deposit:&quot; &lt;&lt; endl;
  print(bc);
  
  deposit(bc, 1234, 888);
  cout &lt;&lt; endl;
  cout &lt;&lt; &quot;After deposit:&quot; &lt;&lt; endl;
  print(bc);
  
  return 0;
}

void deposit(BankCustomer &amp;bc, int depositAcc, double amount) {
  if (amount &gt; 0) {
    for (int i = 0; i &lt; 3; i++) {
      if (bc.accounts[i].accountNo == depositAcc) {
        bc.accounts[i].balance += amount;
      } 
    } 
  } 
}

void print(const BankCustomer &amp;bc) {
  cout &lt;&lt; &quot;Name: &quot; &lt;&lt; bc.name &lt;&lt; endl;
  cout &lt;&lt; &quot;Age: &quot; &lt;&lt; bc.age &lt;&lt; endl;
  cout &lt;&lt; &quot;Gender: &quot; &lt;&lt; bc.gender &lt;&lt; endl;
  cout &lt;&lt; &quot;Address: &quot; &lt;&lt; bc.address &lt;&lt; endl;
	for (int i = 0; i &lt; 3; i++) {
		if (bc.accounts[i].accountNo != 0) {
			cout &lt;&lt; &quot;Account No: &quot; &lt;&lt; bc.accounts[i].accountNo &lt;&lt; &quot; || Balance: &quot; &lt;&lt; bc.accounts[i].balance &lt;&lt; endl; 
    } 
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/04/04/c1fc464e49e02.png" alt="image.png" title="image.png"><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> Call</h3><p>Call-by-value in function by default</p><p>To avoid overhead of copying the whole structure (may contain a lot of member variables and structures), we should use call-by-reference instead「为了避免复制整个结构（可能包含很多成员变量和结构）的开销，我们应该使用call-by-reference代替」</p><h4 id="使用指针访问" tabindex="-1"><a class="header-anchor" href="#使用指针访问" aria-hidden="true">#</a> 使用指针访问</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Point dot;
dot.x = 10
dot.y = 15
Point* ptr = &amp;dot

cout &lt;&lt; dot.x &lt;&lt; endl; // 输出 10
cout &lt;&lt; (*ptr).y &lt;&lt; endl; // 输出 15 (加括号的原因是 .的优先级大于 *)
cout &lt;&lt; ptr -&gt; x &lt;&lt; endl; // 输出 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不可以直接 输出 dot 或者 *ptr ,因为它是一个“放置变量的容器”。</p><p>注意：只有指针变量才能使用 - &gt; 运算符。</p><h2 id="object-oriented-programming" tabindex="-1"><a class="header-anchor" href="#object-oriented-programming" aria-hidden="true">#</a> Object-oriented Programming</h2><p>Object-oriented Programming（OOP）面向对象编程</p><p>To understand the concept of object-oriented programming, we must differentiate the following two terms「要理解面向对象编程的概念，我们必须区分以下两个术语」</p><ul><li>Class「类」</li><li>Object「对象」</li><li>method / Member Functions「方法/成员函数」</li><li>property / Data Members「属性/ 数据成员」</li></ul><p>注：举个例子，int是一个类（整数类）;<code>int x</code>，x是一个对象，是int类的一个对象。再举个例子：Point 是一个类，<code>Point y</code>, y是一个对象，是Point类的一个对象。</p><p>注意：C++ 里面没有 method 、property 这一说法，只有 Member Functions 、Data Members 这一说法。说错了可能会被当成外行人。</p><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h3><p>a framework/template/blueprint/definition of an entity</p><p>For example: Human</p><p>A normal Human has the following properties:</p><ul><li>Eye</li><li>Ear</li><li>Mouth</li><li>Nose</li></ul><p>In C++ terminology, the above are the attributes/data members possessed by a Human「在C ++术语中，以上是人类所拥有的属性/数据成员」</p><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3><p>An actal entity of a class「类的实际实体」</p><p>Mary is a Human：<strong>Mary is an</strong> <strong>object</strong> <strong>of the</strong> <strong>class</strong> <strong>Human</strong></p><p>Mary has</p><ul><li>Eye – Beautiful</li><li>Ear – Big</li><li>Mouth – Small</li><li>Nose – Hawk-liked</li></ul><p>The green adjectives are the “values” of the attributes</p><p>In C++ terminology, an object is an <strong>instance</strong> of a class</p><p>Besides Mary, Peter is also a Human</p><p>Peter may have different “values” from Mary</p><ul><li>Eye – Single-edged</li><li>Ear – Long</li><li>Mouth – Big</li><li>Nose – Flat</li></ul><p>Mary is an object of Human</p><p>Peter is another object of Human</p><h3 id="understand" tabindex="-1"><a class="header-anchor" href="#understand" aria-hidden="true">#</a> Understand</h3><p>我们通过以下例子来理解OOP</p><p>We rewrite the structure Time in the previous example using the approach of writing a class Time</p><p>Time.h: Header file——So the file extension is .h</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Time {
  
  public:
    Time(); // constructor 1
    Time(int,  int, int); // constructor 2
    void setTime(int , int, int); // set hour,minute,second
    void printUniversal(); // print universal-time format
    void printStandard(); // print standard-time format

  private:
    int hour; // 0 - 23 (24-hour clock format)
    int minute; // 0 - 59
    int second; // 0 - 59
  
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Contain the declaration of the class: Like the concept of prototype</li><li>No <strong>main()</strong> function</li><li>The file is not executable</li><li>To be included in other source files <code>#include &quot;Time.h&quot;</code> (注意不是&lt; &gt;)</li></ul><p>注意：class 中的函数是无顺序的，class中的函数不需要按循序执行，只是按需调用。</p><h4 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h4><p><code>Time()</code></p><ul><li><strong>Same name as the class name</strong>（如果要创建 Constructor 只需让其名称和 类的名称相同即可)</li><li>Called once only when an object is created: Will not be called again after object creation「仅在创建对象时调用一次：创建对象后将不会再次调用」</li><li>Mainly used for initializing data members of the class</li><li>A class may have a number of constructors, with different input arguments「一个类可能具有许多构造函数，并且具有不同的输入参数」</li><li>No return type</li></ul><p>在source file里，我们可以这样使用 Constructor</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Time solt1; //无参数，匹配到 constructor 1
Time solt2(9,0,0); //匹配到 constructor 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>constructor 没有return</p><h4 id="member-functions" tabindex="-1"><a class="header-anchor" href="#member-functions" aria-hidden="true">#</a> Member Functions</h4><p>Member Functions 也叫 method。</p><p>调用方式：ClassName.FunctionName()</p><p>在上述的例子里，以下是类的方法</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void setTime(int, int, int);
void printUniversal(); 
void printStandard();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Member function 还能 被定义在 class外</p><p><strong>Binary scope resolution operator ( :: )</strong></p><ul><li>“Ties” member name to class name 「将成员名称与班级名称联系起来」</li><li>Uniquely identify functions of particular class</li><li>Different classes can have member functions with same name 「不同的类可以具有相同名称的 Member function」</li></ul><p>Format for defining member functions「定义成员函数的格式」如下</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>ReturnType ClassName::MemberFunctionName(arguments)
{ 
  … 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批注：即我们可以实现在class的括号内声明方法，在class的括号外定义方法。当然没有声明和定义在哪里没有任何限制。而且即使方法定义在class的大括号外面，方法可以直接调用class中定义的属性和方法。注意使用 ClassName::MemberFunction()表示; Constructor也可以在class外定义</p><h4 id="data-members" tabindex="-1"><a class="header-anchor" href="#data-members" aria-hidden="true">#</a> Data Members</h4><p>Data Members 也叫 property.</p><p>调用方式：ClassName.MemberName</p><p>在上述的例子里，以下是类的属性</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int hour;
int minute;
int second;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Each Time object has its own set of data members: hour, minute and second.「每个Time对象都有自己的一组数据成员：hour, minute and second」</p><p>Since these data members are private, they can only be accessible by its member functions 「由于这些数据成员是私有的，因此只能通过其成员函数进行访问」</p><p>注意：只有 public 下的 属性和方法 可以被外界函数访问；private下的属性和方法不能被外界访问；public下的函数可以操作private下面的属性和方法。详细的在之后讨论。</p><h3 id="invocation" tabindex="-1"><a class="header-anchor" href="#invocation" aria-hidden="true">#</a> Invocation</h3><p>在外界可以通过 variableName.method() 或者 variableName.property 调用</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>t.hour
t.printUniversal();
t.printStandard();
t.setTime(13, 27, 6);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="access-specifiers" tabindex="-1"><a class="header-anchor" href="#access-specifiers" aria-hidden="true">#</a> Access Specifiers</h3><p><strong>public:</strong> Accessible by the “outside world” relative to the class</p><p><strong>private:</strong> Accessible only to <em>constructors</em> and <em>member functions</em> of class</p><p>private data members cannot be accessed (both read and write) by the “outside world”</p><h3 id="controlling-access-to-members" tabindex="-1"><a class="header-anchor" href="#controlling-access-to-members" aria-hidden="true">#</a> Controlling Access to Members</h3><ul><li>Class member access <ul><li>Explicitly set to private, and public</li><li>Default private without Specifier</li></ul></li><li>struct member access <ul><li>Default public without Specifier</li><li>Explicitly set to private, public, protected</li></ul></li><li>Access to class’s private data <ul><li>Controlled with access member functions <ul><li>Get function (accessor) – Read private data</li><li>Set function (mutator) – Modify private data</li></ul></li></ul></li></ul><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h3><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/04/08/73c61fa0e138e.png" alt="image.png" title="image.png"><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/04/08/036def0f70473.png" alt="image.png" title="image.png"><h3 id="advantages" tabindex="-1"><a class="header-anchor" href="#advantages" aria-hidden="true">#</a> Advantages</h3><ul><li>Code reuse <ul><li>A collection of classes forms the library as programming utilities</li><li>No “re-inventing the wheel”</li></ul></li><li>Interfaces <ul><li>Data encapsulation (information hiding) and implementation hiding</li></ul></li></ul><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>Struct 和 Class 里面要包含什么呢</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Entry {

private:
    static int get_id(){
    static int number = 0;
    number += 1;
    return number;
    }

public:
    Entry *next = nullptr;
    Entry *prev = nullptr;
    int id = get_id();
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子，可以看到，有一下两种语句</p><ul><li>函数的定义</li><li>变量的声明/定义/初始化</li></ul><p>但是，不能在 成员函数以外 进行写除了 上面两个以外 的任何语句；</p><h2 id="struct-和-class-的对比" tabindex="-1"><a class="header-anchor" href="#struct-和-class-的对比" aria-hidden="true">#</a> Struct 和 Class 的对比</h2><ul><li>Structure <ul><li>Contain data items only</li><li>All data are implicitly public</li><li>Less data integrity control capabilities</li></ul></li><li>Class <ul><li>Contain data members and object behaviours (member functions)</li><li>Hide information using private <ul><li>More data integrity control capabilities</li></ul></li><li>Extensible</li></ul></li></ul><p>批注</p><h3 id="含义上" tabindex="-1"><a class="header-anchor" href="#含义上" aria-hidden="true">#</a> 含义上</h3><ul><li>struct更适合看成是一个数据结构的实现体</li><li>class更适合看成是一个对象的实现体。</li></ul><h3 id="功能上" tabindex="-1"><a class="header-anchor" href="#功能上" aria-hidden="true">#</a> 功能上</h3><ul><li><p>相同点：它们都可以提供自己的接口函数，构造函数。</p></li><li><p>struct 没有 public 和private 之分，但 class 有。</p></li><li><p>struct没有继承，没有封装，要说封装只有初步封装。</p></li><li><p>struct只能叫做数据的集合，外部可以任意访问。</p></li><li><p>一个class可以由结构继承而来。</p></li><li><p>class把数据，接口可以以三种类型封装，private，public，protected；还可以继承和派生。</p></li><li><p>class就完成了封装，维护了数据安全，这就是面向对象的理念</p></li></ul><p>最本质的一个区别就是默认的访问控制：默认的继承访问权限</p><p>struct是public的，class是private的。</p><h2 id="header-file" tabindex="-1"><a class="header-anchor" href="#header-file" aria-hidden="true">#</a> Header file</h2><p>Head file 里面放什么？</p><ul><li>Class definitions and member function prototypes「类定义和成员函数原型」</li></ul><p>但是，head file 里面成员函数外面，<strong>不可以定义变量! 但可以声明。</strong></p><p>Included in each file using class. Eg. <code>#include &quot;Time.h&quot; </code></p><h2 id="声明、定义和初始化" tabindex="-1"><a class="header-anchor" href="#声明、定义和初始化" aria-hidden="true">#</a> 声明、定义和初始化</h2><ul><li>声明：用于向程序表明变量的类型和名字。</li><li>定义：用于为变量/函数分配存储空间，还可为变量/函数指定初始值。程序中，变量/函数有且仅有一个定义。 <ul><li>定义，定义的同时会完成声明。</li></ul></li><li>变量初始化：声明+定义+变量赋值</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>extern int a;       //声明，不是定义
int b;              //声明，也是定义，未初始化
int c = 10;         //声明，也是定义，也初始化了

extern double max(double d1,double d2);  //声明
double max(double d1,double d2);  //声明
double max(double d1,double d2);  
{
  XXX
}  //声明+定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="public、protected和private" tabindex="-1"><a class="header-anchor" href="#public、protected和private" aria-hidden="true">#</a> Public、Protected和Private</h2><p>Private, Public, Protected下的访问性不同</p><p>表现在 访问者不同 、继承特点不同</p><ul><li>Private：只能由该类中的函数、其友元函数访问，<strong>即只允许本类的成员函数访问</strong></li><li>Protected：可以被该类中的函数、子类的函数、以及其友元函数访问,但不能被该类的对象访问，<strong>即只允许子类及本类的成员函数访问</strong></li><li>Public: 可以被该类中的函数、子类的函数、其友元函数访问,也可以由该类的对象访问，<strong>即可以被任意实体访问</strong></li></ul><p>什么叫被该类的对象访问？eg. <code>student.id</code></p><p>注：友元函数包括两种：设为友元的全局函数，设为友元类中的成员函数</p><h2 id="c-类对象共享数据的实现" tabindex="-1"><a class="header-anchor" href="#c-类对象共享数据的实现" aria-hidden="true">#</a> C++类对象共享数据的实现</h2><h3 id="使用局部变量和全局变量共享数据" tabindex="-1"><a class="header-anchor" href="#使用局部变量和全局变量共享数据" aria-hidden="true">#</a> 使用局部变量和全局变量共享数据</h3><p>使用局部变量能够在调用和被调用函数之问通过参数传递实现不同函数块之问的数据共享。局部变量具有局部作用域，能很好地实现函数之间的数据隐蔽。但在传递过程中需要很大的系统开销，故一般只用于传递少量的数据。全局变量具有文件作用域。全局变量所存储的数据在程序中任何地方都可以访问，能够在程序中的所有函数之间实现数据共享。使用全局变量实现共享数据相当方便，但其副作用也相当大。因为全局变量无法对数据的访问权进行有效控制。也就是说，我们很难知道程序中数据在那些函数中共享，这样一旦共享的数据发生结构性调整，也就很难判断它到底影响到哪些函数，从而给程序维护带来相当大的困难。这种共享方式，直接影响到数据安全、程序代码重用和扩充。所以，在程序设计中，应可能少的使用这种共享方式。</p><h3 id="通过类的数据成员共享数据" tabindex="-1"><a class="header-anchor" href="#通过类的数据成员共享数据" aria-hidden="true">#</a> 通过类的数据成员共享数据</h3><p>C++中类内部封装的数据成员提供了同一类的函数成员之间进行数据共享机制。这种共享方式一方面实现了类内部函数的全面共享，同时也提供了通过设置适当的访问控制属性，把共享只限制在类的范围之内，这样对类外来说，类的数据成员仍是隐藏的，达到了共享与隐藏两全，解决了全局变量和局部变量所无法克服的矛盾。</p><p>例如：一个时钟类，该类中封装了私有数据成员有Hour，Minute，Second，在类的成员函数之间实现数据共享。在类的外面，对它们的访问只能通过类自身提供的外部接口进行，无法直接访问。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Clock //时钟类的声明
{
public：
	//公有数据成员函数
	void SetTime(int NewH =0，int NewM =0，int News=0)；
	void ShowTime()；
  
private：//私有数据成员
	int Hour，Minute，Second；//在类的成员函数之间共享
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过类的静态成员实现数据共享" tabindex="-1"><a class="header-anchor" href="#通过类的静态成员实现数据共享" aria-hidden="true">#</a> 通过类的静态成员实现数据共享</h3><p>C++中使用静态成员可以实现同一类的不同对象之间共享数据 j。类的普通数据成员在类的每一个对象都有一个拷贝，就是说每个对象的同名数据成员可以分别存储不同数值，这就保证对象拥有自身区别其他对象的特征的需要。静态数据成员是类的数据成员的一种特例，采用static关键字来声明；每个类只有一个拷贝，由该类的所有对象共同维护和使用，从而实现了同一类的不同对象之间的数据共享。</p><p>如果想实现和Private的访问者限制相同的且只属于自己的属性，要在Private下使用 static 定义。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

class Entry {

private:
    static int get_id(){
    static int number = 0;
    number += 1;
    return number;
    }

public:
    Entry *next = nullptr;
    Entry *prev = nullptr;
    int id = get_id();
};

int main() {
    Entry a,b;
    cout &lt;&lt; b.id &lt;&lt; a.id &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态成员变量确实起到了在不同对象间共享的作用！不过由于其是静态属性，内存是在全局/静态区域开辟的，属于栈内存区，内存大小使用受限。如果能动态从堆中申请内存，则可以使用大内存空间了。</p><h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h4><p>有一学生类：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">engineer</span>
<span class="token punctuation">{</span>
Private<span class="token operator">:</span>
	<span class="token keyword">int</span> ID<span class="token punctuation">;</span>
	<span class="token keyword">char</span> nalne<span class="token punctuation">;</span>
	<span class="token keyword">static</span> count<span class="token punctuation">;</span><span class="token comment">//静态数据成员，用来存放“人数”</span>
	string name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code-files" tabindex="-1"><a class="header-anchor" href="#source-code-files" aria-hidden="true">#</a> Source-code files</h2><ul><li>Member function definitions</li><li>Compiled and linked</li><li>File extension .cpp</li></ul><h2 id="附加材料" tabindex="-1"><a class="header-anchor" href="#附加材料" aria-hidden="true">#</a> 附加材料</h2><h3 id="time-h" tabindex="-1"><a class="header-anchor" href="#time-h" aria-hidden="true">#</a> time.h</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// prevent multiple inclusions of header file
#ifndef TIME_H
#define TIME_H

class Time {
  
  public:
    Time(); // constructor
    void setTime(int, int, int); // set hour, minute, second
    void printUniversal(); // print universal-time format
    void printStandard(); // print standard-time format
  
	private:
      int hour; // 0 - 23 (24-hour clock format)
      int minute; // 0 - 59
      int second; // 0 - 59
  
};

// Time constructor initializes each data member to zero and
// ensures all Time objects start in a consistent state 

Time::Time() { 
	hour = minute = second = 0; 
}	

// set new Time value using universal time, perform validity
// checks on the data values and set invalid values to zero 
void Time::setTime(int h, int m, int s) { 
  hour = (h &gt;= 0 &amp;&amp; h &lt; 24) ? h : 0; 
  minute = (m &gt;= 0 &amp;&amp; m &lt; 60) ? m : 0; 
  second = (s &gt;= 0 &amp;&amp; s &lt; 60) ? s : 0; 
} 

// print Time in universal format
void Time::printUniversal() {
  cout &lt;&lt; setfill(&#39;0&#39;) &lt;&lt; setw(2) &lt;&lt; hour &lt;&lt; &quot;:&quot;
  &lt;&lt; setw(2) &lt;&lt; minute &lt;&lt; &quot;:&quot;
  &lt;&lt; setw(2) &lt;&lt; second;
}

// print Time in standard format
void Time::printStandard() {
  cout &lt;&lt; ((hour == 0 || hour == 12) ? 12 : hour % 12) &lt;&lt; &quot;:&quot; &lt;&lt; setfill(&#39;0&#39;) &lt;&lt; setw(2) &lt;&lt; minute &lt;&lt; &quot;:&quot; &lt;&lt; setw(2) &lt;&lt; second &lt;&lt; (hour &lt; 12 ? &quot; AM&quot; : &quot; PM&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>time.cpp (在source file里调用time.h)</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &quot;Time.h&quot; // Include the header file to this source
using namespace std;

int main() {
  Time t;
  
  // output Time object t&#39;s initial values
  cout &lt;&lt; &quot;The initial universal time is &quot;;
  t.printUniversal(); // 00:00:00
  
  cout &lt;&lt; &quot;\\nThe initial standard time is &quot;;
  t.printStandard(); // 12:00:00 AM
  
  t.setTime(13, 27, 6); // change time
  
  // output Time object t&#39;s new values
  cout &lt;&lt; &quot;\\n\\nUniversal time after setTime is &quot;;
  t.printUniversal(); // 13:27:06
  
  cout &lt;&lt; &quot;\\nStandard time after setTime is &quot;;
  t.printStandard(); // 1:27:06 PM
  
  t.setTime(99, 99, 99); // attempt invalid settings
  
  // output t&#39;s values after specifying invalid values
  cout &lt;&lt; &quot;\\n\\nAfter attempting invalid settings:&quot; &lt;&lt; &quot;\\nUniversal time: &quot;;
  t.printUniversal(); // 00:00:00
  
  cout &lt;&lt; &quot;\\nStandard time: &quot;;
  t.printStandard(); // 12:00:00 AM
  cout &lt;&lt; endl;
  return 0; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下</p><blockquote><p>The initial universal time is 00:00:00</p><p>The initial standard time is 12:00:00 AM</p><p>Universal time after setTime is 13:27:06</p><p>Standard time after setTime is 1:27:06 PM</p><p>After attempting invalid settings:</p><p>Universal time: 00:00:00</p><p>Standard time: 12:00:00 AM</p></blockquote><h2 id="引用资料" tabindex="-1"><a class="header-anchor" href="#引用资料" aria-hidden="true">#</a> 引用资料</h2>`,162),o={href:"http://zhidao.baidu.com/question/748004411503788052.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/gatieme/article/details/50640424",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/fanyun_01/article/details/78145431",target:"_blank",rel:"noopener noreferrer"};function b(p,h){const i=s("ExternalLinkIcon");return t(),d("div",null,[u,e("ul",null,[e("li",null,[e("a",o,[n("zhidao.baidu.com/question/748004411503788052.html"),a(i)])]),e("li",null,[e("a",v,[n("https://blog.csdn.net/gatieme/article/details/50640424"),a(i)])]),e("li",null,[e("a",m,[n("https://blog.csdn.net/fanyun_01/article/details/78145431"),a(i)])])])])}const x=l(c,[["render",b],["__file","cpp-oop-std.html.vue"]]);export{x as default};
