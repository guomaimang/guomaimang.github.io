---
article: false
date: 2022-10-26
order: 6
headerDepth: 2
---

# C 语言要点

## 函数指针

如果在程序中定义了一个函数，那么在编译时系统就会为这个函数代码分配一段存储空间，这段存储空间的首地址称为这个函数的地址。而且函数名表示的就是这个地址。既然是地址我们就可以定义一个指针变量来存放，这个指针变量就叫作函数指针变量，简称函数指针。

函数指针是指向函数的指针变量。函数指针可以像一般函数一样，用于调用函数、传递参数。

### 如何用函数指针调用函数

```c
int Func(int x);   /*声明一个函数*/
int (*p) (int x);  /*定义一个函数指针*/
p = Func;          /*将Func函数的首地址赋给指针变量p*/
```

最后需要注意的是，指向函数的指针变量没有 ++ 和 -- 运算。

### 示例

```c
# include <stdio.h>

int Max(int, int);  //函数声明

int main(void){
    int(*p)(int, int);  //定义一个函数指针
    int a, b, c;
    p = Max;  //把函数Max赋给指针变量p, 使p指向Max函数
    printf("please enter a and b:");
    scanf("%d%d", &a, &b);
    c = (*p)(a, b);  //通过函数指针调用Max函数
    printf("a = %d\nb = %d\nmax = %d\n", a, b, c);
    return 0;
}

int Max(int x, int y)  //定义Max函数{
    int z;

    if (x > y){
        z = x;
    }

    else{
        z = y;
    }

    return z;
}
```

函数指针变量的声明：`typedef int (*fun_ptr)(int,int); // 声明一个指向同样参数、返回值的函数指针类型`

## C 结构体

**结构**是 C 编程中另一种用户自定义的可用的数据类型，它允许您存储不同类型的数据项。

### 定义结构

为了定义结构，您必须使用 **struct** 语句。struct 语句定义了一个包含多个成员的新的数据类型，struct 语句的格式如下：

![1666616850341.png](https://pic.hanjiaming.com.cn/2022/10/24/0c0b8fe08c2e2.png)

```c
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book;

void printBook( struct Books book )
{
   printf( "Book title : %s\n", book.title);
   printf( "Book author : %s\n", book.author);
   printf( "Book subject : %s\n", book.subject);
   printf( "Book book_id : %d\n", book.book_id);
}
```

### 指向结构的指针

```c
struct Books *struct_pointer;
struct_pointer = &Book1;

// 为了使用指向该结构的指针访问结构的成员，您必须使用 -> 运算符，如下所示：
struct_pointer->title;
```

### 深入理解

struct 不是 class。它就像数组一样，仅仅是创建一个集合而已。

```c
//此声明声明了拥有3个成员的结构体
//同时又声明了结构体变量s1
//这个结构体并没有标明其标签
struct 
{
    int a;
    char b;
    double c;
} s1;
```

```c
//此声明声明了拥有3个成员的结构体
//结构体的标签被命名为SIMPLE,没有声明变量
struct SIMPLE
{
    int a;
    char b;
    double c;
};

//用SIMPLE标签的结构体，另外声明了变量t1、t2、t3
//这相当于创建了 一个 SIMPLE 的 struct，一个 SIMPLE 的数组，一个 SIMPLE 的指针。
struct SIMPLE t1, t2[20], *t3;
```

### 初始化

即初次赋值可通过

```c
#include <stdio.h>
 
struct Books{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book = {"C 语言", "RUNOOB", "编程语言", 123456};
```

## typedef

C语言允许用户使用 typedef 关键字来定义自己习惯的数据类型名称，来替代系统默认的基本类型名称、数组类型名称、指针类型名称与用户自定义的结构型名称、共用型名称、枚举型名称等。

例如，C 语言在 C99 之前并未提供布尔类型，但我们可以使用 typedef 关键字来定义一个简单的布尔类型，如下面的代码所示：

```c
typedef int BOOL;
#define TRUE 1
#define FALSE 0
```

定义好之后，就可以像使用基本类型数据一样使用它了，如下面的代码所示：

```c
BOOL bflag=TRUE;
```

### 为基本数据类型定义新的类型名

![1666696771840.png](https://pic.hanjiaming.com.cn/2022/10/25/1365b9ecb8a8f.png)

### 为自定义数据类型定义类型名

```c
// struct
typedef struct tagPoint
{
    double x;
    double y;
    double z;
} Point;

// 给 struct 起别名
typedef struct tagPoint Point

// []
typedef int INT_ARRAY_100[100];
INT_ARRAY_100 arr;

// pointer
typedef char* PCHAR;
PCHAR pa;

//
```

## #define

C语言中，可以用 #define 定义一个标识符来表示一个常量。其特点是：定义的标识符不占内存，只是一个临时的符号，预编译后这个符号就不存在了。

预编译又叫预处理。预编译不是编译，而是编译前的处理，编译器正式开始编译程序之前，会执行一段预处理程序（又称预处理器）专门对程序执行预处理操作。

用 #define 定义标识符的一般形式为：`\#define 标识符 常量  //注意, 最后没有分号`

## C 头文件

头文件是扩展名为 **.h** 的文件，包含了 C 函数声明和宏定义，被多个源文件中引用共享。有两种类型的头文件：程序员编写的头文件和编译器自带的头文件。

```c
// 这种形式用于引用系统头文件。它在系统目录的标准列表中搜索名为 file 的文件。在编译源代码时，您可以通过 -I 选项把目录前置在该列表前。
#include <file>

// 这种形式用于引用用户头文件。它在包含当前文件的目录中搜索名为 file 的文件。在编译源代码时，您可以通过 -I 选项把目录前置在该列表前。
#include "file"
```

## 错误输出函数 perror()

perror() 用来将上一个函数发生错误的原因输出到标准设备 (stderr) 。

参数 s 所指的字符串会先打印出,后面再加上错误原因字符串。此错误原因依照全局变量error 的值来决定要输出的字符串。

## extern 关键字

我们知道，程序的编译单位是源程序文件，一个源文件可以包含一个或若干个函数。

在函数内定义的变量是局部变量，而在函数之外定义的变量则称为外部变量，外部变量也就是我们所讲的全局变量。它的存储方式为静态存储，其生存周期为整个程序的生存周期。全局变量可以为本文件中的其他函数所共用，它的有效范围为从定义变量的位置开始到本源文件结束。

然而，如果全局变量不在文件的开头定义，有效的作用范围将只限于其定义处到文件结束。如果在定义点之前的函数想引用该全局变量，则应该在引用之前用关键字 extern 对该变量作“外部变量声明”，表示该变量是一个已经定义的外部变量。有了此声明，就可以从“声明”处起，合法地使用该外部变量。

### 变量的声明和定义

extern是 c 引入的一个关键字，它可以应用于一个**全局变量，函数或模板声明**，说明该符号具有外部链接*(external linkage)*属性。也就是说，这个符号在别处定义。

一般而言，C 全局变量的作用范围仅限于当前的文件，但同时C也支持分离式编译，允许将程序分割为若干个文件被独立编译。于是就需要在文件间共享数据，这里 extern 就发挥了作用。

- 变量的声明指向程序表名变量的类型和名字，即使得名字为程序所知，一个文件如果想使用别处定义的名字则必须包含对那个名字的声明。
- 变量的定义指申请存储空间，并将其与变量名相关联，除此之外，还可以为变量指定初始值。

在程序中变量可以声明多次，但只能定义一次。

**凡是没有带extern的声明同时也都是定义**。而对函数而言，带有{}是定义，否则是声明。如果想声明一个变量而非定义它，就在变量名前添加关键字extern，且不要显式的初始化变量。

```c
//fileA.cpp
int i;                //声明并定义i
int j = 1;            //声明并定义j
double max(double d1,double d2){} //定义

//fileB.cpp
extern int i;          //声明i而非定义
extern int j = 2;     //定义j而非声明，会报错，多重定义
int j;                //错误，重定义，注意这里的j是在全局范围内声明
extern double max(double d1,double d2); //声明
```

### 案例分析

```c
#include <stdio.h>
int max(int x,int y);

int main(void)
{
    int result;
    /*外部变量声明*/
    extern int g_X;
    extern int g_Y;
    result = max(g_X,g_Y);
    printf("the max value is %d\n",result);
    return 0;
}

/*定义两个全局变量*/
int g_X = 10;
int g_Y = 20;
int max(int x, int y)
{
    return (x>y ? x : y);
}
```

代码中，全局变量 g_X 与 g_Y 是在 main 函数之后声明的，因此它的作用范围不在 main 函数中。如果我们需要在 main 函数中调用它们，就必须使用 extern 来对变量 g_X 与 g_Y 作“外部变量声明”，以扩展全局变量的作用域。也就是说，如果在变量定义之前要使用该变量，则应在使用之前加 extern 声明变量，使作用域扩展到从声明开始到本文件结束。

如果整个工程由多个源文件组成，在一个源文件中想引用另外一个源文件中已经定义的外部变量，同样只需在引用变量的文件中用 extern 关键字加以声明即可。下面就来看一个多文件的示例:

```c
/****max.c****/
#include <stdio.h>
/*外部变量声明*/
extern int g_X ;
extern int g_Y ;
int max()
{
    return (g_X > g_Y ? g_X : g_Y);
}
/***main.c****/
#include <stdio.h>
/*定义两个全局变量*/
int g_X=10;
int g_Y=20;
int max();
int main(void)
{
    int result;
    result = max();
    printf("the max value is %d\n",result);
    return 0;
}
```

对于多个文件的工程，都可以采用上面这种方法来操作。对于模块化的程序文件，可在其文件中预先留好外部变量的接口，也就是只采用 extern 声明变量，而不定义变量，max.c 文件中的 g_X 与 g_Y 就是如此操作的。

通常，这些外部变量的接口都是在模块程序的头文件中声明的，当需要使用该模块时，只需要在使用时具体定义一下这些外部变量即可。main.c 里的 g_X 与 g_Y 则是相关示例。

不过，需要特别注意的是，由于用 extern 引用外部变量，可以在引用的模块内修改其变量的值，因此，如果有多个文件同时要对应用的变量进行操作，而且可能会修改该变量，那就会影响其他模块的使用。因此，我们要慎重使用。

## const and pointer

- 指向 const 的指针: `const int *p` 或者 `int const *p`, 地址p可以随便改，指针指向的内容不能改

- `int * const p = 地址`，地址p不能改，内容可以改。

  - 因为地址p是不能被修改的，所以必须被初始化。

- 都不可变

  ```c
  const int * const p = 地址值
  int const * const p = 地址值
  ```

## static 修饰函数

static函数与普通函数作用域不同,仅在本文件。只在当前源文件中使用的函数应该说明为内部函数(static修饰的函数)，内部函数应该在当前源文件中说明和定义。对于可在当前源文件以外使用的函数，应该在一个头文件中说明，要使用这些函数的源文件要包含这个头文件.

static函数在内存中只有一份，普通函数在每个被调用中维持一份拷贝。

当我们同时编译多个文件时，所有未加static前缀的全局变量和函数都具有全局可见性。为理解这句话，我举例来说明。我们要同时编译两个源文件，一个是static_extern.c，另一个是static_main.c。

```c
// static_main.c
#include<stdio.h>
void main(void)
{
	extern char i;    // extern variable must be declared before use
    printf("%c ", i);
    msg();
    return 0;
}

// static_extern.c
char i = 'A'; // global variable
void msg() 
{
    printf("I Love Beijing!I Love hanyue!\n"); 
}
```

所有未加 static 前缀的全局变量和函数都具有全局可见性，其它的源文件也能访问。此例中，i是全局变量，msg 是函数，并且都没有加 static 前缀，因此对于另外的源文件 static_main.c 是可见的。如果加了static，就会对其它源文件隐藏。例如在 i 和 msg 的定义前加上 static， static_main.c就看不到它们了。利用这一特性可以在不同的文件中定义同名函数和同名变量，而不必担心命名冲突。Static可以用作函数和变量的前缀，对于函数来讲，static的作用仅限于隐藏。

::: tip 为什么在 static_extern.c 中定义的全局变量i和函数 msg 能在 static_main.c中使用?

所有未加static前缀的全局变量和函数都具有全局可见性，其它的源文件也能访问。此例中，i是全局变量，msg是函数，并且都没有加static前缀，因此对于另外的源文件 static_main.c 是可见的。如果加了static，就会对其它源文件隐藏。例如在 i 和 msg 的定义前加上static， static_main.c 就看不到它们了。利用这一特性可以在不同的文件中定义同名函数和同名变量，而不必担心命名冲突。Static可以用作函数和变量的前缀，对于函数来讲，static的作用仅限于隐藏。

:::

## Ref.

- https://www.cnblogs.com/honernan/p/13431431.html
- http://c.biancheng.net/view/404.html
- http://c.biancheng.net/view/187.html
- https://blog.csdn.net/qq_37858386/article/details/79064900
- http://c.biancheng.net/view/298.html
