---
article: false
date: 2021-05-01
---

# GNU家族简介及GDB汇编玩法 

## GNU

### GNU是什么？

GNU是一个[自由软件](http://www.gnu.org/philosophy/free-sw.html)操作系统—就是说，它尊重其使用者的自由。GNU操作系统包括GNU软件包（专门由GNU工程发布的程序）和由第三方发布的自由软件。GNU的开发使你能够使用电脑而无需安装可能会侵害你自由的软件。

我们建议安装[这些GNU版本](http://www.gnu.org/distros/free-distros.html)（更确切地说是，GNU/Linux发行版），它们完全是自由软件。[更多关于 GNU](http://www.gnu.org/#More-GNU)。

<img src="https://pic.hanjiaming.com.cn/2021/04/05/34cec6fc501ac.jpg" alt="trisquel9-mate.jpg" title="trisquel9-mate.jpg" />

### GNU 和 Linux 的关系

**Linux只是一个操作系统内核而已（不是操作系统），而GNU提供了大量的自由软件来丰富在其之上各种应用程序。**

严格来讲，Linux这个词本身只表示Linux内核（但在实际上人们已经习惯了用Linux来形容 「整个基于Linux内核，并且使用GNU 工程各种工具和数据库的操作系统」）

Linux的历史是和GNU紧密联系在一起的。从1983年开始的GNU计划致力于开发一个自由并且完整的类Unix操作系统，包括软件开发工具和各种应用程序。到1991年Linux内核发布的时候，GNU已经几乎完成了除了系统内核之外的各种必备软件的开发。在Linus Torvalds和其他开发人员的努力下，GNU组件可以运行于Linux内核之上。

Linux确实存在，许多人都在使用它，但它仅仅是所用系统的一部分。Linux是内核：它是为你运行的其他程序分配计算机资源的程序。内核是操作系统的基本部分，但是它自己并无用处；它只能在完整的操作系统框架下才能发挥作用。Linux一般和GNU操作系统一起使用：整个系统基本上就是GNU加上Linux，或叫GNU/Linux。所有被叫做“Linux”的发行版实际上是GNU/Linux发行版。包含 GNU软件 和 Linux内核的软件 被称为 Linux发行版 或 Linux发行套件。

一般来讲，一个Linux发行套件 包含大量的软件，比如软件开发工具，数据库，Web服务器（例如Apache)，X Window，桌面环境（比如GNOME和KDE），办公套件（比如OpenOffice.org）······

绝大多数基于Linux内核的操作系统使用了大量的GNU软件，包括了shell程序、工具、程序库、编译器及工具；还有许多其他程序，例如Emacs。

正是由于Linux使用了许多GNU程序，GNU计划的开创者Richard Stallman博士提议将Linux操作系统改名为GNU/Linux。但有些人只把操作系统叫做"Linux"。有部分Linux套件，包括Debian，采用了“GNU/Linux”的称呼。但大多数商业 Linux套件 依然将操作系统称为Linux。有些人也认为“操作系统”一词指的应该只是系统的内核，其他程序都只能算是应用软件，这么一来，该操作系统的内核应叫Linux，而Linux套件是在Linux内核的基础上加入各种GNU工具。

GNU操作系统 由[自由软件基金会](http://www.gnu.org/#mission-statement)资助。

“自由软件基金会（FSF）是一个非盈利组织。我们的使命是在全球范围内促进计算机用户的自由。我们捍卫所有软件用户的权利。”

## GCC

GCC（GNU Compiler Collection，GNU编译器套件）是由GNU开发的编程语言译器。GNU编译器套件包括C、C++、 Objective-C、 Fortran、Java、Ada和Go语言前端，也包括了这些语言的库（如libstdc++，libgcj等） 。

GCC原本作为GNU操作系统的官方编译器，现已被大多数类Unix操作系统（如Linux、BSD、Mac OS X等）采纳为标准的编译器，GCC同样适用于微软的Windows。GCC是自由软件过程发展中的著名例子，由自由软件基金会以GPL协议发布。

GCC的初衷是为GNU操作系统专门编写的一款编译器。GNU系统是彻底的自由软件。此处，“自由”的含义是它尊重用户的自由 

### GNU Compiler Collection

GCC原名为GNU C语言编译器（GNU C Compiler），只能处理C语言。但其很快扩展，变得可处理C++，后来又扩展为能够支持更多编程语言，如Fortran、Pascal、Objective -C、Java、Ada、Go以及各类处理器架构上的汇编语言等，所以改名GNU编译器套件（GNU Compiler Collection）

之后，gcc 有时就被 限定的称为 GNU Compiler Collection 的 c 的编译器；

所以gcc现在有两个意思。

### g++

g++ 是  GNU Compiler Collection 的 c++ 的编译器，但是也支持编译c.

### 过程模拟

linux下，gcc 是指gcc c编译器。我们从一个程序到一个可执行文件来说明gcc的几个选项：

- 如果你写的代码是hello.c，你的程序将经历下面的步骤到达硬盘或者内存成为可执行文件。
- gcc -E main.c -o main.i //第一步：hello.c（文本）经过预编译生成hello.i（文本）
- gcc -S main.i -o main.S //第二步：hello.i（文本）经过编译器生成hello.s（汇编。文本）
- gcc -c main.c -o main.o //第三步：hello.s（文本）经过汇编器生成hello.o（二进制）。
- gcc main.o -o main  //第四步：hello.o（二进制）经过链接器生成hello可执行文件

### 部分文件后缀约定

gcc所遵循的部分约定规则：

1. c为后缀的文件，C语言源代码文件。
2. a为后缀的文件，是由目标文件构成的档案库文件。
3. .h为后缀的文件，是程序所包含的头文件。
4. .i 为后缀的文件，是C源代码文件且不应该对其执行预处理。
5. .m为后缀的文件，是Objective-C源代码文件。
6. .o为后缀的文件，是编译后的目标文件。
7. .s为后缀的文件，是汇编语言源代码文件。

## GDB

GDB: The GNU Project Debugger「GDB：GNU项目调试器」

### 什么是 GDB？

GDB，**GNU项目调试器**，使您可以查看另一个程序在“执行”期间正在执行的操作–或该程序崩溃时正在执行的操作。

GDB可以做四种主要的事情（以及支持这些事情的其他事情）来帮助您捕获行为中的错误：

- 启动您的程序，并指定可能影响其行为的所有内容。
- 使程序在指定条件下停止。
- 检查程序停止时发生的情况。

更改程序中的内容，以便您可以尝试纠正一个错误的影响，然后继续了解另一个错误。这些程序可能与GDB（本机）在同一台计算机上执行，在另一台计算机（远程）上或在模拟器上执行。 GDB可以在大多数流行的UNIX和Microsoft Windows变体以及Mac OS X上运行。

### GDB支持什么语言

GDB supports the following languages (in alphabetical order):

- Ada
- Assembly
- C
- C++
- D
- Fortran
- Go
- Objective-C
- OpenCL
- Modula-2
- Pascal
- Rust

### GDB 和 GCC的区别

GDB是调试工具，GCC是编译器。

### 玩法

| **Objectives**                                               | **GDB commands**                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Getting started with a program                               | gcc **–g** example.c –O filename<br />g –o example filename<br />gdb example |
| Check out the C and assembly code                            | list, list 1,24 disas main, disas /m, disas /r               |
| Display source code and assembly code in independent windows | Enter split window mode: layout split Set focus: focus src, focus asm Exit the mode: Ctrl-X a |
| Insert a break point And run the program                     | b function_name/line_number run                              |
| Execute the c code step by step                              | next/n                                                       |
| Execute the assembly code step by step                       | nexti/ni                                                     |
| Check out the CPU registers with values                      | info registers, info registers eflags/rax…                   |
| Watch the value of a variable                                | print var                                                    |
| Examine memory with an address                               | x /d $regname                                                |

- 实验环境 Centos Linux 7.2
  
- 编译器：gcc（未安装使用以下命令安装）
  
  ```shell
  yum install gcc gcc-c++
  ```
  
- 调试器：gdb （未安装使用以下命令安装）

  ```shell
  yum install gdb
  ```

- 实验文件：example.c

  ```c
  int main()
  {
      long a, b;
      a = 2;
      b = 15;
  
      long *pa, *pb;
      pa = &a;
      pb = &b;
  
      long t1 = *pa;
      *pa = *pb;
      *pb = t1;
  
      return t1 * 12;
  }
  ```

#### Get start with a program

如果你想直接编译program而不debug，使用 `gcc example.c –o filename`

此时我将filename 改为 examp

如果后续你想要使用gdb 对 program 进行debug, 使用  `gcc -g example.c –o filename`

此时我将filename 改为 example

使用 `ls-al` 查看当前文件夹下的情况

<img src="https://pic.hanjiaming.com.cn/2021/04/05/f2d0a56dd78b8.png" alt="image.png" title="image.png" />

可以发现 带有 -g 参数的 生成的可执行程序大小 大于 不带 -g 参数的。

#### 查看汇编操作

1. 使用`gdb`进入调试页面,使用`quit`退出。

2. 使用 `gdb example `进入对 example 的调试页面

3. 进入后 使用 `list`  显示 源代码

   <img src="https://pic.hanjiaming.com.cn/2021/04/05/fa7faacd9415d.png" alt="image.png" title="image.png" />

4. 使用 `contral + L`清屏进入新页面

5. 使用 disassemble functionName  或 disas functionName 查看指定函数对应的汇编代码；

   <img src="https://pic.hanjiaming.com.cn/2021/04/05/49a44f64bc2cf.png" alt="image.png" title="image.png" />

6. 使用 disas /m functionName 查看一一对应版本

   <img src="https://pic.hanjiaming.com.cn/2021/04/05/2c9b7638f8f33.png" alt="image.png" title="image.png" />

7. 使用 dis /r functionName

   <img src="https://pic.hanjiaming.com.cn/2021/04/05/6bedf838f3cc7.png" alt="image.png" title="image.png" />
   
8. 使用 layout split

   <img src="https://pic.hanjiaming.com.cn/2021/04/05/42b8dbed6798a.png" alt="image.png" title="image.png" />

   使用 focus asm 和 focus src 来切换聚焦

#### 调试操作

1. 使用 start 开始 debug

   <img src="https://pic.hanjiaming.com.cn/2021/04/05/d8e5dc1db54ee.png" alt="image.png" title="image.png" />

2. 使用 next 查看下一段

   <img src="https://pic.hanjiaming.com.cn/2021/04/06/606c365e68609.png" alt="image.png" title="image.png" />

3. 使用  disas main 可查看停在了哪里

   <img src="https://pic.hanjiaming.com.cn/2021/04/06/7bae01a31eec5.png" alt="image.png" title="image.png" />

4. nexti
	<img src="https://pic.hanjiaming.com.cn/2021/04/06/74cea3fca9bc6.png" alt="image.png" title="image.png" />
	
5. 使用 info register 或 info reg查看当前寄存器中的值
	<img src="https://pic.hanjiaming.com.cn/2021/04/06/c274117cb4819.png" alt="image.png" title="image.png" />
	
6. 使用 info all-register 可查看 CPU所有寄存器的当前值

7. 使用 info b 可查看 当前程序设定的断点「breakpoint」

8. 使用 b main ，在main函数头处打断点（即设定第一次停止的地方，此后每运行一个语句都会停止。）

9. 使用 run 开始 debug

10. 使用print variableName 查看相应变量的当前的值

  <img src="https://pic.hanjiaming.com.cn/2021/04/06/c274117cb4819.png" alt="image.png" title="image.png" />

11. <img src="https://pic.hanjiaming.com.cn/2021/04/06/22573de80ecfc.png" alt="image.png" title="image.png" />


## 引用材料

- www.gnu.org/software/gdb
- http://www.gnu.org/
- COMP1411@PolyU lec6 PowerPoint

