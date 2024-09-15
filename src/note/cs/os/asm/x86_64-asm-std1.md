---
category:
  - tech
date: 2021-05-01
---

# x86汇编语言基础1

为什么要学习机器码？

- Many years ago, people write programs with machine code
- Nowadays, people write programs with high-level languages mainly for productivity and portability reasons
- To write a program that runs is easy
- To write a program that **runs well (reliable and efficient),** you need to understand how the machine execute programs

<!-- more -->

## 相关定义

- Architecture (instruction set architecture - ISA)「体系结构（指令集体系结构-ISA）」: The parts of a processor design that one needs to understand to write assembly code

- - Examples: instruction set specification, registers「指令集规范，寄存器」
  - We will mainly focus on the x86-64 architecture there

- Microarchitecture「微体系结构」: Implementation of the architecture

- - Examples: cache sizes and core frequency「体系结构的实现」

- Code Forms

- - Machine Code「机器码」: The byte-level programs that a processor executes「处理器执行的字节级程序」
  - Assembly Code「汇编语言」: A text representation of machine code「机器代码的文本表示」

## From high-level language to assembly

<img src="https://pic.hanjiaming.com.cn/2021/03/25/04cf656a84795.png" alt="CleanShot 2021-03-25 at 12.58.57@2x.png" title="CleanShot 2021-03-25 at 12.58.57@2x.png" />

## Assembly programmer’s view

### Programmer-Visible State

- PC: Program counter
  - Address of next instruction
    - Called “EIP” (IA32) or “RIP” (x86-64)

  - Register file

    - Memory inside the CPU
    - Used for instruction execution「用于指令执行」

  - Condition codes

    - Store status information about most recent arithmetic operation「存储有关最新算术运算的状态信息」
    - Used for conditional branching「Used for conditional branching」

### Memory

- Byte addressable array
- Code, user data, (some) OS data
- Includes stack used to support procedures

## Machine instruction example

<img src="https://pic.hanjiaming.com.cn/2021/03/25/214984684622a.png" alt="image.png" title="image.png" />

## Data types

### “word” in x86-64 ISA

- Word: 16 bits, 2 bytes

- Double words: 32 bits, 4 bytes

- Quad words: 64 bits, 8 bytes

  | **C declaration** | **Intel data type** | **Assembly code** **suffix** | **Size (bytes)** |
  | ----------------- | ------------------- | ---------------------------- | ---------------- |
  | char              | Byte                | b                            | 1                |
  | short             | Word                | w                            | 2                |
  | int               | Double word         | l                            | 4                |
  | long              | Quad word           | q                            | 8                |
  | char *            | Quad word           | q                            | 8                |
  | float             | Single precision    | s                            | 4                |
  | double            | Double precision    | l                            | 8                |

注明：在不同的ISA架构中，word的长度不同

### “word” in MiPS-x64 ISA

- Word: 32 bits, 4 bytes
- Double words: 64 bits, 8 bytes

## X86-64 registers

### 寄存器图示

<img src="https://pic.hanjiaming.com.cn/2021/03/25/1872bf430d78c.png" alt="CleanShot 2021-03-25 at 13.09.25@2x.png" title="CleanShot 2021-03-25 at 13.09.25@2x.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/25/8ed7a273e1d82.png" alt="CleanShot 2021-03-25 at 13.10.15@2x.png" title="CleanShot 2021-03-25 at 13.10.15@2x.png" />

### 寄存器的兼容实现

64位系统向下兼容的原因

<img src="https://pic.hanjiaming.com.cn/2021/03/25/a466ad1044f57.png" alt="image.png" title="image.png" />

## Instruction

### Moving data

#### movq,Source, Dest

- Source values can be constants, from registers or from memory「源值可以是常量，可以是寄存器中的值，也可以是存储器中的值」
- Results can be stored in either registers or memory「结果可以存储在寄存器或存储器中「结果可以存储在寄存器或存储器中」
- Moving different data sizes: movq, movl, movw, movb（依照来源和目的地的最大长度，使用相应的指令」

#### Operand Types 

Operand Types  (basically, where data are stored)

- **Immediate**:  Constant integer data
  - Example: \$ 0x400，$-533
  - Like C constant, prefixed with  `$` in the assembly code
    像C常量一样，在汇编代码中以$开头


- **Register**: One of 16 integer registers
  - Example: %rax, %r13
  - But %rsp reserved for special use
    - Others have special uses for particular instructions


  - **Memory**: 8 consecutive bytes of memory at address given by register
  - Simplest example: (%rax)
          - Various other “address modes” 
          - 实现原理：指针

<img src="https://pic.hanjiaming.com.cn/2021/03/25/6cd4e45feb41e.png" alt="image.png" title="image.png" />

**Cannot do memory-memory transfer with a single instruction!**

### Some arithmetic operations

Two Operand Instructions

Format	Computation
addq	Src,Dest	Dest = Dest + Src
subq	Src,Dest	Dest = Dest − Src
imulq	Src,Dest	Dest = Dest * Src
salq	Src,Dest	Dest = Dest << Src		**Also called shlq**
sarq	Src,Dest	Dest = Dest >> Src		**Arithmetic**
shrq	Src,Dest	Dest = Dest >> Src		**Logical**
xorq	Src,Dest	Dest = Dest ^ Src
andq	Src,Dest	Dest = Dest & Src
orq	Src,Dest	Dest = Dest | Src

Watch out for argument order!
No distinction between signed and unsigned int 

<img src="https://pic.hanjiaming.com.cn/2021/03/25/0e5da5ac90015.png" alt="image.png" title="image.png" />

### Leaq

<img src="https://pic.hanjiaming.com.cn/2021/03/25/1f7cc711cdb16.png" alt="image.png" title="image.png" />

## Memory addressing

### simple modes

<img src="https://pic.hanjiaming.com.cn/2021/03/25/66402b3e17e2f.png" alt="image.png" title="image.png" />

#### Complete memory addressing modes

<img src="https://pic.hanjiaming.com.cn/2021/03/25/f56035d621009.png" alt="CleanShot 2021-03-25 at 15.16.52@2x.png" title="CleanShot 2021-03-25 at 15.16.52@2x.png" />

## 引用

- COMP1411@Polyu PowerPoint