---
article: false
date: 2021-05-01
---

# MIPS汇编语言简易入门3

## Remind

阅读本文之前，你可能需要先学习 MIPS汇编语言简易入门3 

**本文探讨内容**

- Program flow control
- Subroutine linkage

## Program Flow Control

- Program is the ordered sequence of instructions
- instructions are executed sequentially

We want more functionalities: e.g., in high-level-languages, we have if-else, while ( condition), …

Assembly language build up these functionalities(功能) from basic instructions (the philosophy of RISC「RISC的原理」)

### Jump Instruction

Recall: j addr and instruction cycle:   
fetch — update PC — execute

How j addr should work?   
fetch j addr— updata PC — execute j addr (PC = addr)

But NOT that easy!

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/c7305e78034c3.png" alt="image.png" title="image.png" width = "240px" />

#### Branch Delay Slot

Underlying reason (not required): MIPS is pipelined

To increase speed, processor will cleverly fetch **multiple instructions** and starts working on them all — a pipeline of instructions.  

The instruction following jump is almost completed when jump is executed

Instead of wasting efforts, processor will allow to complete that instruction after jump instruction 

The instruction right after jump instruction is called Brach Delay Slot. Not only jump instructions, all the instuctions that include jumping to another address need use Brach Delay Slot.

Effect: branch delay slot will always be executed

How to deal with this? — put a no-op instruction right after jump instruction

**Example**

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/45857a7c3509e.png" alt="image.png" title="image.png" />

**Importantly, PC will be set to addr after the branch delay slot is executed (not after j addr is executed)**

### Example of Jump

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/de312597b4e81.png" alt="CleanShot 2021-02-18 at 21.08.02@2x.png" title="CleanShot 2021-02-18 at 21.08.02@2x.png" />

Hirsun的批注：有一说一，我觉得就是个执行先后的问题。一般执行 Instruction 和PC的改变的执行是同时的。根据上图的解释，如果没有pipeline mechanism（管道机制），PC 就会 按照 jump 0x00400000指令 变成 00400000。但是 因为 pipeline mechanism 的存在，能够先让PC改变，之后再执行这个周期的指令。MIPS在jump 指令使用后 使用 Branch Delay Slot 指令，由于PC收到指令，要变成 00400000。

## Other Branch Instructions

Jump is one of the uncondition branch instructions.

Jump addr 带走消息

- 跳转到 addr指定的指令
- 正常做法：使用符号地址；在跳转指令之后立即放置“ no-op”指令

当然，还有其他的 branch instructions

主要研究目标：如何使用这些指令以高级语言实现控制结构
例如，跳转可用于实现“无条件循环”

### Conditional Branch Instructions

条件分支指令仅在满足特定条件时才分支到新地址

- branch on equal: beq u,v, addr # if $u == $v, branches to addr
- branch on not equal: bne u,v, addr # if $u != $v, branches to addr
- branch on less than zero: bltz s, addr # if $s <0, branches to addr; note: $s in 2’s complement form
- branch on greater than or equal to zero: bge z  s, addr # if $s>=0, branches to zero. note: $s in 2’s complement form

以上 branch instructions 之后 都要添加 Branch Delay Slot 指令。

### Example 1

Essentially, the conditional branch instructions implement the “if … then do sth” control structure

branch on equal: beq u,v, addr # if $u == $v, branches to addr

程序流程图

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/4e28793169c1d.png" alt="CleanShot 2021-02-21 at 19.13.23@2x.png" title="CleanShot 2021-02-21 at 19.13.23@2x.png" />

### Example 2

Two-way decision control structure: if true, do A; else do B

combine of conditional branch and jump

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/5ce351b5c2f6d.png" alt="CleanShot 2021-02-21 at 19.17.22@2x.png" title="CleanShot 2021-02-21 at 19.17.22@2x.png" />

**A good practice: draw the flow chart of the program first** 

### Example 3

Program task: calculate the absolute value of A stored at a given address

- idea: if A < 0: store -A; else do nothing
- we can use one conditional branch instruction

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/34703d7692684.png" alt="CleanShot 2021-02-21 at 19.29.38@2x.png" title="CleanShot 2021-02-21 at 19.29.38@2x.png" />

the blank should fill with 0.

Question1: Determine if A is negative or not

- check the “sign” bit (at position 31) of A (assume 2’s complement form)
- shift right logical: srl $t0, $t1, const; shift the bits in $t1 to the right for const positions, and fill the left positions with 0; store the result in $t0
- note, we stored the value of A in $8; question: what’s the value of $9 after srl $9, $8, 31

Question2: Determine if A is negative or not

- the value of $9: first 31 bits are all 0, the last bit is the sign bit of A
- as a result, if $9 == 0, A is positive (or 0)

```assembly
    .text
    .globl main

main:
# Load A
    lui      $10, 0x1000 # initialize the base register
    lw      $8, 0 ($10)  # load A to register $8
# Is A negative?
    srl    $9, $8, 31  # shift the sign bit to position 0
    beq   $0, $9, done # check if $9 == 0
    sll     $0, $0, 0  # branch delay slot
# Store -A
    subu  $8, $0, $8   #calculate -A
    sw      $8, 0($10)  # store -A back to the address
done: 
         .data
A:     .word -1
```

## Count Loop

A common type of program loop — execute for some fixed times, controlled by an integer (counter)

Three critical(关键的) parts

- initialize the counter 
- test the counter value and end the loop on the correct value
- increment the counter

A top-driven loop in assembly language

- check the condition on the top
- use a combination of conditional branch, jump, and conditional set instructions

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/b842a22b543e0.png" alt="image.png" title="image.png" width = "240px"/>

### Conditional Set Instructions

Used to implement relational operations

- idea: set a register to 1 or 0 to show the relation between two values (often used as a flag)
- note: it will not change the program flow itself — rather, it can be used as some condition to trigger the branch instructions

#### Set on Less Than slt

```assembly
slt d, s, t # $s and $t contains signed integers in 2’s complement  
# set $d = 1 if $s < $t; else, set $d = 0
```

#### Other conditional set instructions

```assembly
sltu d, s, t # used with unsigned integers
slti d, s, imm # Set on Less Than Immediate 
               # if $s < imm, set $d =1; 
               # else, set $d = 0
sltiu d, s, imm # used with unsigned integers
```

#### Example

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/3a5a1e262454c.png" alt="CleanShot 2021-02-21 at 21.57.51@2x.png" title="CleanShot 2021-02-21 at 21.57.51@2x.png" />

### Example

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/8fadb34273d15.png" alt="CleanShot 2021-02-21 at 22.03.02@2x.png" title="CleanShot 2021-02-21 at 22.03.02@2x.png" />

## Subroutine Linkage

子程序（Subroutine）是什么？

- 子例程是代码的逻辑划分，可以被视为独立操作
- 所有高级语言都有子例程的概念，也称为过程，函数，方法
- 子程序可以根据需要在程序中使用

### Try with Jump Instruction

假设我们使用sub来标记子例程的起始地址

想法：调用子程序=跳转到子程序

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/744d1cbc702df.png" alt="image.png" title="image.png" width = "240px"/>

在主程序中，我们跳到子程序（即调用子程序）

完成子程序后，我们需要返回主程序

How？jump 到ret（在j子之后，将指令重新标记）

**如果我们想在主程序中多次调用子程序怎么办？**

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/1386938b9a278.png" alt="CleanShot 2021-02-21 at 22.15.49@2x.png" title="CleanShot 2021-02-21 at 22.15.49@2x.png" />

问题是很多地方调用了sub，我们不知道执行完sub后该回到哪个地方。

所以，这个时候我们就要用到 $ra Register

### $ra Register

- $ra ($31) is the register used for linkage, it holds the return address for a subroutine
- idea: when we call a subroutine, we store the return address in $ra; when the subroutine is finished, the program returns to that address
- implementation: a pair of instructions jal and jr

#### jal and jr Instruction

##### jal sub

(1) set $ra to PC + 4

the result is that $ra stores the address of the (n+2)th instruction (suppose jar is the nth instruction)

in memory: jal| branch delay slot | instruction that will return to

(2) set PC to sub

##### jr $ra

set PC to $ra

#### Jal Example

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/1577980e7d9b2.png" alt="CleanShot 2021-02-21 at 22.50.45@2x.png" title="CleanShot 2021-02-21 at 22.50.45@2x.png" />

### Calling Convention

Calling convention is the agreement about how subroutines are called and how control is returned

- an agreement at the software level
- different languages and different operating systems for the same processor usually have different calling conventions

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/9eb3aee3c3557.png" alt="image.png" title="image.png"  width = "240px"/>

#### Use of Registers

Caller (e.g., main routine) and Callee (subroutine) both use registers to store data「调用者（例如主例程）和被调用者（子例程）都使用寄存器来存储数据」

conflict may happen — caller stored some data in a register and the callee may also use the register and change the data

it’s silly to go back to the caller to check which registers are used when writing subroutines — we need agreement among programmers

#### Different roles of registers

- $t0 - t9: subroutines can use without caution
- $s0 - $s7: saved registers; if need to use it, save the value first and restore the value after use
- $a0 - $a3: contain arguments for the subroutine
- $v0 - $v1: contain values returned from the subroutine

翻译

「$ t0-t9：子程序可以不加警告地使用  
$ s0-$ s7：保存的寄存器；如果需要使用它，请先保存该值，然后再使用后恢复该值  
$ a0-$ a3：包含子例程的参数  
$ v0-$ v1：包含从子例程返回的值」

Example: is the following code a good convention（惯例）?

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/21/f5423e234325c.png" alt="CleanShot 2021-02-21 at 23.10.25@2x.png" title="CleanShot 2021-02-21 at 23.10.25@2x.png" />

#### A Simple MIPS Calling Convention

Try to obey the following simple convention

- use jal and jr with $ra to call subroutines
- do not call another subroutine within a subroutine
- obey the conventional use of registers

Note: there are more complex calling conventions

## 推荐

a good online source: https://chortle.ccsu.edu/AssemblyTutorial/index.html#part7

## 引用资料

- COMP2421@Polyu's learning lecture
