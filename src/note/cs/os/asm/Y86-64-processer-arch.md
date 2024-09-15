---
article: false
date: 2021-05-01
---

# Y86-64处理器架构简介

<img src="https://pic.hanjiaming.com.cn/2021/04/06/d920281841490.png" alt="image.png" title="image.png" />

## ISA(指令集架构)

>  **指令集架构**（英语：Instruction Set Architecture，缩写为ISA），又称**指令集**或**指令集体系**，是[计算机体系结构](https://zh.wikipedia.org/wiki/计算机体系结构)中与[程序设计](https://zh.wikipedia.org/wiki/程序設計)有关的部分，包含了[基本数据类型](https://zh.wikipedia.org/wiki/資料型別)，指令集，[寄存器](https://zh.wikipedia.org/wiki/寄存器)，[寻址模式](https://zh.wikipedia.org/wiki/寻址模式)，[存储体系](https://zh.wikipedia.org/w/index.php?title=存储体系&action=edit&redlink=1)，[中断](https://zh.wikipedia.org/wiki/中斷)，[异常处理](https://zh.wikipedia.org/wiki/异常处理)以及外部[I/O](https://zh.wikipedia.org/wiki/I/O)。指令集架构包含一系列的[opcode](https://zh.wikipedia.org/w/index.php?title=Opcode&action=edit&redlink=1)即操作码（[机器语言](https://zh.wikipedia.org/wiki/機器語言)），以及由特定处理器执行的基本命令。
>
> 不同的处理器“家族”——例如[Intel](https://zh.wikipedia.org/wiki/Intel) [IA-32](https://zh.wikipedia.org/wiki/IA-32)和[x86-64](https://zh.wikipedia.org/wiki/X86-64)、[IBM](https://zh.wikipedia.org/wiki/IBM)/Freescale Power和[ARM](https://zh.wikipedia.org/wiki/ARM)处理器家族——有不同的指令集架构。[[1\]](https://zh.wikipedia.org/wiki/指令集架構#cite_note-1)
>
> 指令集体系与[微架构](https://zh.wikipedia.org/wiki/微架構)（一套用于执行指令集的微处理器设计方法）不同。使用不同微架构的电脑可以共享一种指令集。例如，[Intel](https://zh.wikipedia.org/wiki/英特爾)的[Pentium](https://zh.wikipedia.org/wiki/奔騰)和[AMD](https://zh.wikipedia.org/wiki/超微半导体)的[AMD Athlon](https://zh.wikipedia.org/wiki/AMD_Athlon)，两者几乎采用相同版本的[x86](https://zh.wikipedia.org/wiki/X86)指令集体系，但是两者在内部设计上有本质的区别。
>
> 维基百科

### Designing an ISA

- Designing processor states visible to programmers「设计对程序员可见的处理器状态」
- Designing a set of instructions「设计一套指令」
- Encoding the instructions「对指令编码」

All the above designs will be exemplified by the Y86-64 ISA --- a much simpler X86 ISA enough to demonstrate the key concepts「以上所有设计都将以Y86-64 ISA为例-一种更简单的X86 ISA，足以演示关键概念」

## Circuits

<img src="https://pic.hanjiaming.com.cn/2021/04/06/0f104d60eef46.png" alt="image.png" title="image.png" />

### Digital circuits

#### Logic gates

Logic gates：Basic computing electronic circuit elements「Basic computing electronic circuit elements」

<img src="https://pic.hanjiaming.com.cn/2021/04/06/8a4d6b082289a.png" alt="image.png" title="image.png" />

- Logic gates are always active, is some input to a gate changes, then within some small amount of time, the output will change accordingly「逻辑门始终处于活动状态，某个门的某些输入会发生变化，然后在短时间内，输出将相应地发生变化」
- Can be represented by hardware control language (HCL)「可以用硬件控制语言（HCL）表示」
  - 比如：out = a && b; out = a || b …

### Combinational circuits

<img src="https://pic.hanjiaming.com.cn/2021/04/06/3ab61659e1f5e.png" alt="image.png" title="image.png" />

#### Example 1

if a and b are equal, output 1; otherwise, output 0With **and**, **or** and **not** gates

<img src="https://pic.hanjiaming.com.cn/2021/04/06/1bff53702ecca.png" alt="image.png" title="image.png" />

#### Example 2

selecting a or b according to s

<img src="https://pic.hanjiaming.com.cn/2021/04/06/115ad8e71b87a.png" alt="image.png" title="image.png" />

#### Example 3

From a single bit to multiple bits (word)

<img src="https://pic.hanjiaming.com.cn/2021/04/06/054f5031eabdd.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/06/4fc3c0a80d5b1.png" alt="image.png" title="image.png" />

#### Arithmetic Logic Unit (ALU)

<img src="https://pic.hanjiaming.com.cn/2021/04/06/28c1935a003ca.png" alt="image.png" title="image.png" />

- Using and, or, not gates to implement arithmetic logic「Using and, or, not gates to implement arithmetic logic」
- Compute the result, and set the conditional codes「Compute the result, and set the conditional codes」
- Inputs and outputs are multi-bit word「Inputs and outputs are multi-bit word」

### Storage elements

Storage elements are special electronic circuits that can retain data values「存储元件是可以保留数据值的特殊电子电路」

- Storage elements can be read or written
- Storage elements can be addressed
- Storage elements rely on clocks to retain data values「存储元件依靠时钟来保留数据值」

<img src="https://pic.hanjiaming.com.cn/2021/04/06/0957074806422.png" alt="image.png" title="image.png" />



## Y86-64 processor

### state

<img src="https://pic.hanjiaming.com.cn/2021/04/06/2bd639cb02fff.png" alt="image.png" title="image.png" />

- 15 64-bit general purpose registers
- Conditional codes
  - ZF: zero; 
  - SF: negative; 
  - OF: overflow
- Program Counter：Indicates address of next instruction
- Memory
    - Byte-addressable storage array「字节-可寻址存储阵列」
    - Words stored in little-endian byte order「以little-endian字节顺序存储的单词」

#### little-endian

其实*big endian*是指低地址存放最高有效字节（*MSB*），而*little endian*则是低地址存放最低有效字节（*LSB*）。

用文字说明可能比较抽象，下面用图像加以说明。比如数字*0x12345678*在两种不同字节序*CPU*中的存储顺序如下所示：

<img src="https://pic.hanjiaming.com.cn/2021/04/06/953f738b410d7.png" alt="image.png" title="image.png" />

从上面两图可以看出，采用*big endian*方式存储数据是符合我们人类的思维习惯的。

### Instruction set

<img src="https://pic.hanjiaming.com.cn/2021/04/06/aeb49c2d6fe40.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/06/56d0691aa2d6f.png" alt="image.png" title="image.png" />

### Encoding registers

给寄存器编码

Each register is uniquely specified by a 4-bit ID「每个寄存器由一个4位ID唯一地指定」

<img src="https://pic.hanjiaming.com.cn/2021/04/06/a49025d5218d5.png" alt="image.png" title="image.png" />

ID 15 (0xF) indicates “no register”「ID 15（0x F）表示“无寄存器”」

###  Instruction examples

<img src="https://pic.hanjiaming.com.cn/2021/04/06/91a28ca36c197.png" alt="image.png" title="image.png" />

**Uniqueness (requirement on designing an ISA)「唯一性（设计ISA的要求）」**

- The encodings must have a unique interpretation「编码必须具有唯一的解释」
- Given a sequence of bytes (machine code), it can be interpreted into only one valid sequence of instructions「给定一个字节序列（机器代码），它只能解释为一个有效的指令序列」
- From the first instruction, always being able to find the start byte of the next instruction「从第一条指令开始，总是能够找到下一条指令的起始字节

### Standard stages to execute one instruction

- We have ……
  - Hardware building blocks that can do arithmetic computation
  - Hardware storage elements to store data
  - Machine instructions defined
- We want to put all these things together to build a CPU
  - That can read and understand a program in machine instructions
  - That can perform the functions specified by the machine instructions
    - By operating the computation and storage elements of the CPU

<img src="https://pic.hanjiaming.com.cn/2021/04/06/d8d400734d87c.png" alt="image.png" title="image.png" />

- As there are so many instructions, it will be not wise to design a specific hardware circuit for each instruction「由于指令太多，为每个指令设计特定的硬件电路是不明智的。」
- The execution of instructions is standardized, i.e., all instructions follow the same steps, an in each step share the same hardware「指令的执行是标准化的，即所有指令都遵循相同的步骤，并且每一步都共享相同的硬件」

| **Stages/Steps** | **Functions**                                                |
| ---------------- | ------------------------------------------------------------ |
| Fetch            | Read an instruction from the memory「从内存中读取指令」      |
| Decode           | Read operands「操作数」 from registers「从寄存器读取操作数」 |
| Execute          | Compute value or address「数学计算」                         |
| Memory access    | Read or write data from/to memory「从内存读取数据或向内存写入数据」 |
| Write back       | Write results to registers「将结果写入寄存器」               |
| PC update        | Update PC, get ready for the next instruction「更新PC，准备下一条指令」 |

<img src="https://pic.hanjiaming.com.cn/2021/04/06/7da880ef9f9e4.png" alt="image.png" title="image.png" />

#### Computed values

Stored in CPU on hardware lines/pins

<img src="https://pic.hanjiaming.com.cn/2021/04/06/fcd00f369cbe0.png" alt="image.png" title="image.png" />

####  Run the machine codes

Use an example program to show how the CPU run a program in the machine code form「使用示例程序来显示CPU如何以机器代码形式运行程序」

<img src="https://pic.hanjiaming.com.cn/2021/04/06/f8e7c1dcc5d1f.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/06/cd2a72a3bce61.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/06/2adaee0b7cf78.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/06/f098f6890120f.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/06/c01a577b8fe0c.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/16/17e1736f22460.png" alt="image.png" title="image.png" />



#### Pipeline

<img src="https://pic.hanjiaming.com.cn/2021/04/06/04f3b2593ea6d.png" alt="image.png" title="image.png" />

- The whole production process is composed of multiple stages「整个生产过程由多个阶段组成」
- Worker on each stage do only ONE thing「每个阶段的工人只能做一件事情」
- Products line up on the pipeline, each goes through all stages「产品在流水线中排列，每个阶段都经过各个阶段」

Rethinking the sequential machine

Every instruction goes through six stages「每条指令都经过六个阶段」

In the sequential implementation, when the instruction is in one stage, e.g., execute, all the hardware components in other stages are idle「在顺序实现中，当指令处于一个阶段，例如执行时，其他阶段的所有硬件组件都处于空闲状态」

This is under-utilization of the processor hardware「这是在-处理器硬件的利用率不足」

##### Understanding the performance of pipeline

Executing an instruction consumes 300ps (1ps = 10-12s)

How many instructions can we execute in 1s? (throughput, IPS)  
1/(300 * 10-12) = 3.33 X 109 instructions（**在无同时执行的情况下**）

<img src="https://pic.hanjiaming.com.cn/2021/04/06/2deff4a398e41.png" alt="image.png" title="image.png" />

Decompose the execution of each instruction into 3 stages, each stage takes 100ps to execute「将每个指令的执行分解为3个阶段，每个阶段需要100ps的执行时间」

<img src="https://pic.hanjiaming.com.cn/2021/04/06/315916204a29a.png" alt="image.png" title="image.png" />

How many instructions can we execute in 1s? (throughput, IPS)「我们可以在一秒内执行多少条指令？ （吞吐量，IPS）」

- 1/(100 * 10-12) = 1010
- 3 times faster than the execution above



- Adding registers between two consecutive pipeline stages「在两个连续的流水线阶段之间添加寄存器」
- Each time a clock signal arrives, the result of stage-x will be written to the register between stage-x and stage-(x+1)「每次时钟信号到达时，stage-x 的结果将被写入stage-x和 stage-（x + 1）之间的寄存器中」
- **Once the result of stage-x is written, the next stage can start execution with the result as its input「写入stage-x的结果后，下一个stage可以开始执行，并将结果作为输入」**
- Accessing registers introduces extra time delay; the end-to-end latency of finishing a single instruction is increased「访问寄存器会带来额外的时间延迟；完成一条指令的端到端延迟增加了」

<img src="https://pic.hanjiaming.com.cn/2021/04/06/54c468a9e7c77.png" alt="image.png" title="image.png" />

##### Redesign the CPU with pipeline

<img src="https://pic.hanjiaming.com.cn/2021/04/06/a6c6c55580000.png" alt="image.png" title="image.png" />

##### Bad pipeline design

Nonuniform partitioning「分区不均匀」  
**Latency is determined by the longest stage「延迟由最长的阶段决定」**

<img src="https://pic.hanjiaming.com.cn/2021/04/06/6780b3fb4bee8.png" alt="image.png" title="image.png" />

###### Make the pipeline stages uniform

<img src="https://pic.hanjiaming.com.cn/2021/04/06/906da6b8887b9.png" alt="image.png" title="image.png" />

- More stages: deep pipeline
- More stage registers -> more time overhead
- Sometimes, a stage cannot be decomposed「分解的」

##### Data hazard in pipelines

Data hazard in pipelines「管道中的数据危害」

- Data dependencies: the results computed by one instruction are used as the data for a following instruction「数据依存关系：一条指令计算的结果用作下一条指令的数据」
- Data hazard: data dependencies have the potential to cause an erroneous computation by the pipeline「数据危害：数据依赖性可能会导致管道计算错误」

<img src="https://pic.hanjiaming.com.cn/2021/04/06/db1bcd3177182.png" alt="image.png" title="image.png" />

###### Solution: Stalling

<img src="https://pic.hanjiaming.com.cn/2021/04/06/6cbdf7ace4050.png" alt="image.png" title="image.png" />

##### Other Problems

- Stalling a pipeline reduces performance「停滞管道会降低性能」
- There are other ways to remove the data hazards「还有其他方法可以消除数据危害」
- There are control hazards, and of course solutions「有控制危险，当然也有解决办法」
- There are out-of-order pipelines (instruction execution sequence are changed), multi-issue pipelines「有乱序管道（指令执行顺序已更改），多发布管道」
- ……

Pipelines are a very important feature to the performance of contemporary powerful CPUs, very complex designs exist「管道是当代功能强大的CPUs性能的非常重要的特征，存在非常复杂的设计」

------

## 补充材料

### Y86-64 instruction set

<img src="https://pic.hanjiaming.com.cn/2021/05/13/dfabed4fb112d.png" alt="1620889874072.png" title="1620889874072.png" />

### 补充一些指令的stage

#### mrmovq

<img src="https://pic.hanjiaming.com.cn/2021/05/13/64dbe34aa455e.png" alt="1620890018309.png" title="1620890018309.png" />

#### jg

<img src="https://pic.hanjiaming.com.cn/2021/05/13/40ea4c2492224.png" alt="1620890069997.png" title="1620890069997.png" />

#### cmovle

<img src="https://pic.hanjiaming.com.cn/2021/05/13/5192d957a02b8.png" alt="1620890163626.png" title="1620890163626.png" />

### x86/x64 指令长度

AMD manual Vol3 第 1.1 Instruction Byte Brder 节中明确地说：An instruction can be between one and 15 bytes in length.

### 做题笔记

1. 对于每个指令，都有执行Decode、Write back、Memory 这几个过程。le xxx 指令只有这三个过程


## 引用材料

- https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4%E9%9B%86%E6%9E%B6%E6%A7%8B
- https://blog.csdn.net/sunshine1314/article/details/2309655
- AMD manual Vol3
- COMP1411 @ PolyU's PowerPoint