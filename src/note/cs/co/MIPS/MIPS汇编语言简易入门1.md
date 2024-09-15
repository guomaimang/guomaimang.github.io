---
article: false
date: 2021-05-01
---

# MIPS汇编语言简易入门1

> 汇编语言（Assembly Language）是任何一种用于电子计算机、微处理器、微控制器或其他可编程器件的低级语言，亦称为符号语言。在汇编语言中，用助记符代替机器指令的操作码，用地址符号或标号代替指令或操作数的地址。在不同的设备中，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。特定的汇编语言和特定的机器语言指令集是一一对应的，不同平台之间不可直接移植。
>
> 百科

## 为什么选择学习MIPS汇编语言？

MIPS (Microprocessor without Interlocked Pipeline Stages)

- 过去非常流行：三分之一的RISC芯片基于MIPS
- 今天仍在使用：路由器、嵌入式系统、视频游戏机
- 学习MIPS对学习其他RISC汇编语言100%有帮助，比如ARM

还有其他类型的汇编语言，比如Arm、intel_x86

本教程主要使用英文介绍MIPS-32bit

## 学习依赖知识

在学习本文之前，你可能要先学习我的这几篇文章。

- 计算机组织简介
- 数位系统以及其算法1
- C & C++中的常见的运算符和运算操作

高级语言常常被转换成汇编语言。

![img](https://pic.hanjiaming.com.cn/2021/02/20210201070359426.png)

汇编语言将会被转换为机器语言

![img](https://pic.hanjiaming.com.cn/2021/02/20210201070136689.png)

## 产生可执行文件

![img](https://pic.hanjiaming.com.cn/2021/02/20210201070322967.png)

- 程序（program）通常包含几个模块。
- 模块（module）通常包含对其他模块的引用（以使用数据或子例程）。
- 链接（linker）：组合独立组装的目标文件并解析引用

## 汇编语言的作用

首先，使用编译器将高级语言转换为汇编语言（在某些情况下）
第二，直接用作编写程序的语言，它具有独特的优势

![img](https://pic.hanjiaming.com.cn/2021/02/20210201070502906.png)

![img](https://pic.hanjiaming.com.cn/2021/02/20210201070631197.png)

## 优缺点

主要优点

- 速度快，存储空间小，不需要编译器
- 可以利用高级语言不具备的某些硬件功能。
- 什么时候使用？当对速度，尺寸，性能等有严格要求时…
  - 示例：设计汽车制动器的控制单元

主要缺点

- 特定于机器的：必须完全重写才能在另一台计算机体系结构上运行
- 比高级语言更长的时间-耗时且漏洞多
- 很难写

## 功能特点

- 基于寄存器的架构
  - CPU对寄存器执行操作
  - 操作可以分为两类：
    - 内存访问（在内存和寄存器之间加载和存储数据）
    - ALU操作（寄存器之间的操作）
- 精简指令集计算机（RISC）
  - 只有一小部分简单的说明
  - 在此集合上建立更复杂的功能
  - 与复杂指令集计算机（CISC）不同，在复杂指令集计算机（CISC）中，一条指令可能对应于复杂操作
  - 两种不同的设计理念

- 关键点
  - 寄存器 （Registers）
  - 主内存（知道要访问的地址）
  - 指示
- MIPS汇编语言：如何使用指令实现某些功能在寄存器（和存储器）之间进行操作

------

## 预备知识

### 栈的理解

栈某种意义上讲，它像是一个开口的盒子，先放进去的东西总是会被后放进去的东西压在下面，那么如果想拿出被压住的东西，必须要先取出顶部的东西，也就是后放进去的东西。换个说法就是先入后出。那它有点像什么呢?想象一下装在盘子里的若干张油饼。

对，他们是摞在一起的。如果想拿下面的油饼是不是要先拿开上面的呢?或许，这就是栈的根源。但是，又和“栈”这个字有什么关系呢?单纯的从释义上看，好似找不出什么关联性。但是当我们打开汉英词典：

对计算机中提及的“栈”的英文愿意是stack!我们一定要记得，是一群说英语的人创造了计算机，也是他们研究了初的算法。那么stack又是什么意思?

注意箭头指向的那一摞书们，和饼们的相处方式是不是很像!堆叠到一起。那个根源出来了，其实栈就是一种将数据依次“堆叠”的一种数据组织方式。

### 位拓展

First digital extention：1101 0111 -> 1111 1111 1101 0111，0011 1001 -> 0000 0000 0011 1001

Zero extention： 1101 0111 -> 0000 0000 1101 0111

Immediate and const are lenth of 16bits,which need to be extended brfore they are saved in memory. 

How to realize it?

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/1d536ed6301da.png" alt="CleanShot 2021-02-18 at 10.58.22@2x.png" title="CleanShot 2021-02-18 at 10.58.22@2x.png" />

## MIPS Registers

- 32 general-purpose registers
  - each has 32 bits
  - some are reserved for special purposes
  - Naming: how to refer to these registers
    - start with “$”
    - directly use register number: $0 through $31 (decimal)
    - they also have names: $t1, $sp (better to use names in assembly language)
- Hi and Lo registers
  - for multiplication and division
    - e.g., with 32 bits numbers, multiplication and division result in 64 bits numbers
  - not directly addressable; must use special instructions to access (mfhi — move from Hi, mflo — move from lo)
- 栈的走向是从高地址到低地址

| *Register* *Number*寄存器编号 | *Alternative*  *Name*寄存器名 | *Description*寄存器用途                                      |
| ----------------------------- | ----------------------------- | ------------------------------------------------------------ |
| *0*                           | *zero*                        | *the value 0*永远返回零                                      |
| *1*                           | *$at*                         | *(**a**ssembler **t**emporary) reserved by the assembler*汇编保留寄存器（不可做其他用途） |
| *2-3*                         | *$v0 - $v1*                   | *(**v**alues) from expression evaluation and function results*（**V**alue简写）存储表达式或者是函数的返回值 |
| *4-7*                         | *$a0 - $a3*                   | *(**a**rguments) First four parameters for subroutine.* *Not preserved across procedure calls*（**A**rgument简写）存储子程序的前4个参数，在子程序调用过程中释放 |
| *8-15*                        | *$t0 - $t7*                   | *(**t**emporaries) Caller saved if needed. Subroutines can use w/out saving.* *Not preserved across procedure calls*（**T**emp简写）临时变量，同上调用时不保存 |
| *16-23*                       | *$s0 - $s7*                   | *(**s**aved values) - Callee saved.*  *A subroutine using one of these must save original and restore it before exiting.* *Preserved across procedure calls*（**S**aved or **S**tatic简写？）静态变量？调用时保存 |
| *24-25*                       | *$t8 - $t9*                   | *(**t**emporaries) Caller saved if needed. Subroutines can use w/out saving.* *These are in addition to $t0 - $t7 above.* *Not preserved across procedure calls.*（**T**emp简写）算是前面$0~$7的一个继续，属性同$t0~$t7 |
| *26-27*                       | *$k0 - $k1*                   | *reserved for use by the interrupt/trap handler*（brea**K** off简写？）中断函数返回值，不可做其他用途 |
| *28*                          | *$gp*                         | ***g**lobal **p**ointer.*  *Points to the middle of the 64K block of memory in the static data segment.**（**G**lobal **P**ointer简写）指向64k(2^16)大小的静态数据块的中间地址（字面上好像就是这个意思，块的中间）* |
| *29*                          | *$sp*                         | ***s**tack **p**ointer*  *Points to last location on the stack.**(***S**tack **P**ointer简写）栈指针，指向的是栈顶 |
| *30*                          | *$s8/$fp*                     | ***s**aved value / **f**rame **p**ointer* *Preserved across procedure calls*(**S**aved/**F**rame **P**ointer简写)帧指针 |
| *31*                          | *$ra*                         | ***r**eturn **a**ddress*返回地址，目测也是不可做其他用途     |

![img](https://pic.hanjiaming.com.cn/2021/02/20210201090154664.png)

## Other MIPS Registers

- Special registers

  - e.g., PC

  - programmer cannot access with most instructions

- Hi and Lo registers

  - for multiplication and division
  - e.g., with 32 bits numbers, multiplication and division result in 64 bits numbers
  - not directly addressable; must use special instructions to access (mfhi — move from Hi, mflo — move from lo)

------

## MIPS内存布局

MIPS内存布局:内存的组织方式 (MIPS Memory Layout — How is memory organized)

- 用户程序只能使用一部分内存
  - 从0x80000000到0x FFFFFFFF（顶部）用于操作系统和ROM
- 可以用于用户程序的部分分为三个部分
- 文本，数据和堆栈段（Text Segment, Data Segment, and Stack Segment）

![img](https://pic.hanjiaming.com.cn/2021/02/20210201091353168.png)

- Text segment：存储用户程序的机器语言（文本）
- Data segment：存储程序运行的数据
  - 静态数据（static data）：数据的大小是已知的，并且在由汇编程序分配时不会更改
  - 动态数据（dynamic data）：在程序执行时分配和释放
- Stack Segment：用来存放局部变量和函数返回地址。随着过程的激活和停用，变量和参数被压入并弹出堆栈。

注意：堆栈段向下增长，动态段向上增长

### 一些关于内存的基本事实

**MIPS内存和地址**

- MIPS有32位和64位，大多数学习的是32位，我们也将讨论32位。

- 存储器中的基本“单位（units）”是 字节byte（8 位「bits比特」）

  - bit比特值 可为0或1
- 字节值 可为一个字节
  
- 8比特bit = 1字节byte，是因为8个bit可以表示一个byte
  
- 内存中总共有2 ^ {32}个字节；

- 每个字节的地址为32bits长；

- 地址范围：0x00000000至0x FFFFFFFF

  - 注：0x表示十六进制数
  - 注：地址0x后面的每一个值都占一个字节，

32位=4字节，可表示4^16 = 2 ^32个不同的地址 。故地址是32位长。
所以32位处理器也代表每个地址长度为32比特，64位处理器也代表每个地址长度为64比特。由此推断32bit处理器最大支持 2^32byte = 4GByte内存，64位处理器最大支持 2^64 = 2147483648GByte内存。

![img](https://pic.hanjiaming.com.cn/2021/02/20210202091158498.png)

**操作方式**

- Operations（操作方式）
  - load: copy a bit pattern (could be data or instruction) in a designated(特定的） address in memory to a register (memory -> register)
  - store: copy a bit pattern from register to memory at a designated address (register -> memory)
- 内存通常以连续字节（一组字节）进行访问
  - one byte = 8 bits
  - one word = 4 bytes = 32bits(仅适用于MIPS) 
  - double word = 8 bytes = 64bits (仅适用于MIPS)
- Memory is used to store instructions and data
  - instruction has a fixed length of one word（指令的固定长度为一个字）
- data can have various bytes

但是在x86_64中

- one byte = 8 bits
- one word = 2 bytes(仅适用于x86_64)
- double word = 4 bytes = 64 bits(仅适用于x86_64)

![此图像的alt属性为空；文件名为20210204163743709.png](https://pic.hanjiaming.com.cn/2021/02/20210204163743709.png)

对于连续的字节（一组字节），我们经常使用第一个字节的地址（即地址最低的字节），稍后会详细介绍

## MIPS Instructions 介绍

- There are 3 types of instructions in MIPS
  - R-type instructions
  - I-type instructions
  - J-type instructions
- each instruction has 32 bits（fixed）

### R-type Instructions

**Format**

- three arguments（参数）: two source registers（源寄存器） (**rt** and **rs**) and one destination register（目标寄存器） (**rd**) 

- written as instruction

   

  rd, rs, rt

  - example: `add $t0, $t1, $t2 `meaning that add the values in $t1 and $t2 and stores the result in $t0

**The machine code**

- “**instruction rd, rs, rt**” is a line of code in assembly language
- need to translate it to machine language (binary) — assembler
- the machine code has fixed format (32 bits)

![img](https://pic.hanjiaming.com.cn/2021/02/20210202160228473.png)

- **op** or **opcode**(operation code)：indicate the type of an instruction; all R-type instructions have opcode 000000

- rs, rt, rd

  ：indicate which register

  - length = 5bits
    - 5bits reason：there are 2^4 =32 general-purpose registers
    - example: rd = 01000 -> register $8 = $t0

- **shamt**: used in shift instruction; how many positions (bits) to shift

- **funct**: indicate which instruction; e.g., 100000 -> add

举例：add

![img](https://pic.hanjiaming.com.cn/2021/02/20210202160848827.png)

举例：shift（移位）

![img](https://pic.hanjiaming.com.cn/2021/02/20210202161043964.png)

### I-type Instructions

**Format**

- three arguments: two registers (**rt** and **rs**) and a 16-bit “immediate” value
- immediate value
  - store the value directly within the instruction
  - could be a constant serving as one operand in the arithmetic operation ,or an address in load/store instructions
- assembly language: **instruction** **rs, rt, imm** (but not always)

**Machine code**

- op: specify which instruction (different from R-type)

![img](https://pic.hanjiaming.com.cn/2021/02/20210202161622665.png)

**Example: bitwise OR operation (ori)**

- assembly language:

  ```
   ori rs, rt, imm
  ```

  - operation: take the bit-wise OR between the value stored in rs and imm, then store the result in rt
  - example: ori $0, $8, 0x2
    - what is $0? : constant value 0
    - what is 0x2 —> It means 2 in hexadecimal,but its essence is 0000 0000 0000 0000 0000 0000 0000 0010 in 32 bits.

![img](https://pic.hanjiaming.com.cn/2021/02/20210202164224390.png)

Is there any problem for the bit-wise OR?
Yes! Value in $0 has 32 bits, imm has 16 bits; how can we do bit-wise OR?

- zero extension: MIPS will zero-extend the 16-bit operand imm to 31 bits, by padding with zeros on the left
  - 0000 0000 0000 0000 0000 0000 0000 0010 (0x2)
  - 0000 0000 0000 0000 0000 0000 0000 0000 (value in $0)
  - 0000 0000 0000 0000 0000 0000 0000 0010 (put in $8)

What’s the effect of ori (bit-wise OR)?
such as: loading the value stored in imm to the target register, by using the constant value in $0;
举例：use ori to load decimal 17 into register $t1
`ori $0 $t1 0xF1`

**Example: load word (lw)**

- operation: load a word from memory at a designated address to a register

- problem: we need to specify the memory address (32 bits) in the instruction (32 bits); how can we do that?

  - the address of that memory has 32 bits,the length of instruction is 32-bit
  - solution: An instruction that refers to memory uses a **base register** and an **offset**. The base register is a general purpose register that contains a 32-bit address. The offset is a 16-bit signed integer contained in the instruction. The sum of the address in the base register with the (sign-extended) offset forms the memory address.
  - memory address = base address + offset

  - offset: a 16-bit signed constant (immediate value「立即数」)

  - basere (a name of the register to put data in) : the register containing the base address

- assembly language: **lw, destreg, offset (basereg)**

**Example: lw $8, 0x60 ($10)**

suppose $10 stores the value 0x00400000 (base address)
memory address = 0x00400060
load the word in the memory (0x00400060) to $8

![img](https://pic.hanjiaming.com.cn/2021/02/20210202170315338.png)

**Example: store word (sw)**

- assembly language: **sw, t, offset (basereg)**
- operation: copy the data stored in register t to the memory at address ( base address in basereg + offset)
- example: sw $12, 0x50 ($13)

**Other data transfer instructions (not exhaustive) in I-type**

![img](https://pic.hanjiaming.com.cn/2021/02/20210202173920386.png)

###  J-type Instructions

- Function: control the program flow to a given instruction
- Format: **instruction addr**

Typical example: **j addr** (jump to the instruction at address addr / change the content of pc)

![img](https://pic.hanjiaming.com.cn/2021/02/20210202174531959.png)

![img](https://pic.hanjiaming.com.cn/2021/02/20210202175302333.png)

为什么Address总是相隔4个：一条指令在内存中占用4个字节，只索引第一个地址编码即可。所以我们使用最低字节的地址来指代连续字节。

**Machine code**

![img](https://pic.hanjiaming.com.cn/2021/02/20210202174135128.png)

Again, we have a problem: addr has 26 bits, the address of an instruction has 32 bits. How is this solved in MIPS? — we need a mechanism to transform the 26-bit address in the instruction to a 32-bit address.

- one instruction occupies 4 bytes in memory (recall that each byte in memory has an address)

- we use the address of the lowest byte to refer to contiguous bytes

  - restriction: the address of the lowest byte should be a multiple of 4

  - as a result, the right-most two bits in the address of an instruction are always 00
  - we still need 30 bits

- the left-most 4 bits in the address

  - they are set as the left-most 4 bits of the content in PC
    - why? do not jump too far away
    - so we only need 26bits

the target address we want to jump to (how did we get it?)

![img](https://pic.hanjiaming.com.cn/2021/02/20210202181541238.png)

------

## 做题笔记

1. ori指令可以将负整数的二进制补码表示形式放入寄存器吗？ 不能，因为负数的二进制补码拓展要在前面补1，但是ori 通常与$0结合使用，会导致前面补0.

## 相关网站和软件推荐

- 美国中央康涅狄格州立大学MIPS学习和联系：https://chortle.ccsu.edu/assemblytutorial/
- Qtspim，用于编辑MIPS文件：http://spimsimulator.sourceforge.net/
- MIPS文件在线运行器：https://spim.app.zhongxueguan.cn/
- Compiler-Explorer：https://godbolt.org/
- https://phoenix.goucher.edu/~kelliher/f2009/cs220/mipsir.html
- http://www.cs.uwm.edu/classes/cs315/Bacon/Lecture/HTML/ch05s07.html

## 引用

- https://www.cnblogs.com/thoupin/p/4018455.html
- https://blog.csdn.net/czh500/article/details/89947536
- https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/
- Dr. Kai,ZHOU's PowerPoint
- 美国中央康涅狄格州立大学，https://chortle.ccsu.edu/assemblytutorial/
