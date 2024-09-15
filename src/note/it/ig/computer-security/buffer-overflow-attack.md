---
article: false
date: 2023-04-25
order: 8
headerDepth: 1
---

# Buffer Overflow Attack

## Computer Memory

从逻辑上讲，计算机内存可以被分为若干个存储位置。在我们的大多数计算机中，

- 每个位置被分配一个 32位 的地址
- 每个内存位置可以存储 8位 的信息

在C/C++程序中，一个整数类型占据了32位，`int abc = 888;`

<img src="https://pic.hanjiaming.com.cn/2023/04/27/5bc45aa260e22.png" alt="1682605002517.png" style="zoom:25%;" />

The address of **abc** is the smallest address among the four. Thus, it is 0x6000.

## Buffer in Programs

- 计算系统中的 "服务器 "基本上是一个计算机程序，用于接受数据处理的请求
- 由于工作量的限制，系统无法立即为所有请求提供服务，因此需要对请求进行临时存储。->  Called “Buffer”
- 缓冲区的实现可以是程序中的一个 "数组"。
- 编译器为数组中的所有元素预留了足够的空间，以连续的方式进行存储。

下面是一个名为arr的整数数组在内存中的排列，其大小为3

<img src="https://pic.hanjiaming.com.cn/2023/04/27/23ea8f6e68d87.png" alt="1682605290801.png" style="zoom:33%;" />

## Buffer Overflow

接口处的一种情况，在这种情况下，可以将更多的输入放入缓冲区或数据保存区域，而不是分配的容量，覆盖其他信息。

- 例如，在C/C++环境中，并不总是有 "超出边界/范围 "的检查。
- 攻击者利用这种情况使系统崩溃，或插入特制的代码，使他们能够获得对系统的控制。

## Problems

- 缓冲区溢出是不良编码行为的结果
- 特别是C/C++程序员，很容易受到使用不安全但易于使用的字符串处理函数的诱惑。
  - E.g., cin, strcpy, gets, strcat

## Buffer Overflow Attacks

- 它们利用了代码中的缓冲区溢出
- 缓冲区溢出攻击可以
  - 通过运行拒绝服务攻击，造成对可用性的攻击 -> 基本上意味着本应提供给真实用户的资源并不在
  - 运行任意代码，修改数据，这是对完整性的攻击，或读取敏感信息，这是对保密性的攻击
- 在某些情况下，攻击者试图利用以特权账户（如root或系统管理员）运行的程序。
- 他们利用这些特权来接触和攻击他们自己通常无法进入的领域。

例如

- 一个程序，X，由管理员创建，可以访问系统中的所有资源
- 由于 X 的漏洞，攻击者试图插入一段代码 Y
- Y 现在可以拥有与系统中的管理员相同的权利 -> Y may perform malicious actions

## Memory Stack in Program Execution

由于内存和内存管理的工作方式，缓冲区溢出是可能的

- 在C/C++中，内存管理部分是由程序员选择的
- 在 Java、C# 和 python 中并非如此。为什么？
- 许多最有问题的缓冲区溢出攻击都是专门针对栈的

堆栈包含与运行中的函数调用相关的堆栈框架

- 框架包含的信息包括
  - 返回地址「the return address」
  - 本地变量「local variables」
  - 函数参数「function arguments」
- 堆栈内存向下增长到较低的地址（大多架构中）

<img src="https://pic.hanjiaming.com.cn/2023/04/29/61ef0bf96601f.png" alt="1682739960634.png" style="zoom:33%;" />

- Text Segment (a.k.a. Code Segment)
  - Executable binary
  - Read only
- Data Segment
  - Initialized global variables or static variables
  - Uninitialized data
- Stack: Local variables (of function calls)
- Heap: Dynamic memory allocation in the process
- Registers
  - 一个CPU拥有有限的寄存器
    - 用于 "移动 "和存储数据的特殊内存位置
    - 最快且最接近CPU
  - 堆栈是我们可以存储那些不适合在寄存器中的函数的局部变量的地方，比如局部数组或结构。
  - 有一个堆栈指针，**指向堆栈中最近分配的地址，也就是堆栈的顶部，它实际上在内存中的位置较低。**

## The Stack

- 在一个函数中声明的变量被推到堆栈中 -> 它们位于靠近函数调用者的返回地址的地方
- 返回地址是指一个函数完成后控制应返回的内存位置

 For example

- main()调用doSth()
- doSth()的堆栈包含main()的地址，因此在doSth()完成后，它将返回main()

程序也许覆盖存储在返回指针中的地址，因此程序无法返回到指令的正确位置

- 在这种情况下，程序将中止
- 但如果我们是在攻击系统，我们可能会尝试做得更多：将返回地址改为包含恶意代码开始的地址

::: info

许多缓冲区溢出是由于使用了C语言标准库中的不安全函数造成的。

- `gets(char *);`
- `strcat(char *, char *);`
- `sprintf(char *, char *, ...);`

:::

## Example

```c
#include <iostream>
#include <cstring>

using namespace std;

struct Student {
       int sNumber;
       char name[8];
};

int main() {
Student aRec, bRec; 

aRec.sNumber = 1234567; 
strcpy(aRec.name, "david");
bRec.sNumber = 1234568;
strcpy(bRec.name, "alexander"); // Illegel access of memory space

cout << "Student name: " << aRec.name << endl; 
cout << "Student number: " << aRec.sNumber << endl; 
cout << "Student name: " << bRec.name << endl;
cout << "Student number: " << bRec.sNumber << endl;

}
```

The stacks of X86 and ARM grow towards lower addresses. The stack analysis is as below. 

```css
+ ......         +
+----------------+  
+ main()         +
+----------------+          
+ ......         + 
+----------------+ <-- Stack Top: Lower Address
+ bRec.sNumber   +
+----------------+
+ bRec.name      +
+----------------+   
+ aRec.sNumber   +
+----------------+
+ aRec.name      +
+----------------+ <-- Bottom of the stack: Higher Adderss
+ ......         +
```

if If only concerned with member variables, then

```css
+----------------+ <-- Stack Top: Lower Address
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
+ bRec.name[7]   + <-- Stack overflow
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
+----------------+ <-- Bottom of the stack: Higher Adderss
```

Note that both the diagram above does not show the padding.

Obviously, the length of `alexander` exceeds 8, it will occupy the extra bytes of a Rec.sNumber.
