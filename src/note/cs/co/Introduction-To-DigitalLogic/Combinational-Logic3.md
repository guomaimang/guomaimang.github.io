---
article: false
date: 2021-05-01
---

# Combinational Logic 3


## Review

Work flow: from real-world problems to digital circuits「工作流程：从实际问题到数字电路」

- modeling of real-world problems (input, output, switching functions, Z = f (A,B,C, …, ))
- truth table: another representation of boolean functions
- SOP/POS forms
- digital circuits 

## Simplification

<img src="https://pic.hanjiaming.com.cn/2021/03/30/00f16665b8f84.png" alt="image.png" title="image.png" />

Given a Boolean expression, we may have two qustions

- can it be simplified?
- if you found simplification, is it the simplest form?
  - a systematical way — Karnaugh map (K-map)

**大致有以下方法**

- Algebraic simplification「代数简化」
  - applying the properties「属性/性质」 of boolean algebra「应用布尔代数的属性」
  - essentially「实质上」, it is done by observation — not good for complex expressions

- Karnaugh map (K-map)「卡诺地图」

  - a systematical way「成系统的方法」 to deal with expressions with few (up to 4, 5) variables「一种处理带有很少（最多4、5）个变量的表达式的系统方法」

- Quine-McKluskey tables 「奎因-麦克卢斯基表」(more variables)
  

### Karnaugh Map

A representation of boolean function「实质：一种布尔函数的表示方法」

- an array of squares「正方形阵列」
- each square represent a combination of input values「每个正方形代表输入值的组合」
- for n variables, there are 2^n￼ squares「对于n个变量，有个2^n个正方形」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/efaeaf9b96d46.png" alt="image.png" title="image.png" />

- each square can also represent a product term

<img src="https://pic.hanjiaming.com.cn/2021/03/30/ce3abfa9e2ea9.png" alt="image.png" title="image.png" />

#### Example

把 K-Map转换成 SOP式子

<img src="https://pic.hanjiaming.com.cn/2021/03/30/d09ee68d4536e.png" alt="image.png" title="image.png" />

#### Use for Simplification

Given any boolean function, how to do simplification use Karnaugh map?
Transform the boolean function to canonical form: each term must contain each variable「将布尔函数转换为规范形式：每个term必须包含每个变量」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/274e79c0adf55.png" alt="image.png" title="image.png" />

##### Operation

Group “1-squares” to blocks

<img src="https://pic.hanjiaming.com.cn/2021/03/30/7170bd7fe6d98.png" alt="image.png" title="image.png" />

**Grouping Squares into Blocks 「将方块分组」**

- Rules of grouping 1-squares into blocks
  - group adjacent 1-squares into one block
  - one block can contain ￼  2^i 1-squares (1, 2, 4, 8,…)
- Goals ogrou ouping 1-squares into blocks
	-  number of blocks should be minimized「块的数量应最小化」
	- size of a block should be maximized「块的大小应最大化」

##### Adjacent squares

「相邻方块」

Note: “00, 01, 11, 10” are arranged in this order such that adjacent squares differ in one variable

<img src="https://pic.hanjiaming.com.cn/2021/03/30/e0f6ffe72cb75.png" alt="image.png" title="image.png" />

Example

<img src="https://pic.hanjiaming.com.cn/2021/03/30/eaaf55ca2ba65.png" alt="image.png" title="image.png" />

以上都算相邻的

We wan to minimize the number of blocks「我们要最小化块数」

##### Reuse Block

We can reuse the 1-square to increase the size of the block「我们可以重用1平方来增加块的大小」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/e4d1af9c1699b.png" alt="image.png" title="image.png" />

Example 1

<img src="https://pic.hanjiaming.com.cn/2021/03/30/582c8291931de.png" alt="image.png" title="image.png" />

Which one is better?

Choose blocks with larger size even there are more overlaps — the first one can result in the simplest form「即使有更多的重叠，也要选择更大尺寸的块-第一个可以形成最简单的形式」

Example 2

<img src="https://pic.hanjiaming.com.cn/2021/03/30/46ba0ad173be9.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/30/3ebe93f31d16c.png" alt="image.png" title="image.png" />

##### Derive Term from Block

- Each block represents a term
- cancel the variable which has inconsistent values in the block 「取消块中值不一致的变量」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/5ab6dfe8856a1.png" alt="image.png" title="image.png" />

##### Example

<img src="https://pic.hanjiaming.com.cn/2021/03/30/72ba18e7e4139.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/30/d994af1a1fb61.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/30/b0a3f2d691366.png" alt="image.png" title="image.png" />

##### Summary

Steps of using K-map for simplification

- given any boolean function
- transform it canonical form
- draw the K-map
- group the 1-squares into blocks
- derive terms from blocks

#### Another feature

featute 此处翻译为 特点，而不是功能

Another feature of K-map — “don’t care” conditions

Motivation: for some problems, we do not need to define a complete truth table

- that is, some combinations of input values are not meaningful「也就是说，输入值的某些组合是没有意义的」
  - example: consider decimal incrementer: input = X, output = (X+1) mod 10, where X ranges from 0 to 9「示例：考虑十进制增量器：输入= X，输出=（X + 1）mod 10，其中X的范围是0到9」
    - we use 4 bits to represent the input/output — there is redundant「有余的」

for don’t care conditions, we mark the corresponding「相应的」 squares in K-map as “d”

<img src="https://pic.hanjiaming.com.cn/2021/03/30/a62516c47d5d6.png" alt="image.png" title="image.png" />

#### d-square in K-map

you can specify「指定」the value of “d” (1 or blank) in the K-map
Purpose: reduce the number of blocks & increase the size of blocks

<img src="https://pic.hanjiaming.com.cn/2021/03/30/914e95253c0f5.png" alt="image.png" title="image.png" />

## Sequential Circuits

Sequential Circuits「顺序电路」

### Comparation

Combinational Circuits「组合电路」 vs. Sequential Circuits「顺序电路」

**Combinational Circuits** are memoryless「组合电路是无记忆的」

- the output depends only on the current input (there is an exceptional case of ROM)「输出仅取决于当前输入（ROM有一个例外情况）」
- there is another class of logic circuits with such property: the outputs depend not only on the current inputs, but also on the past behavior of the circuit — there are storage elements (memory) in the circuits「还有另一类具有这种特性的逻辑电路：输出不仅取决于电流输入，还取决于电路的过去行为—电路中有存储元件（存储器）」

### Concept

- the contents of the storage elements represent the state of the circuit「存储元件的内容表示电路的状态」
- the input may leave the circuit in the same state, or cause it to a new state;「输入可能使电路保持相同状态，或使其变为新状态；」
  - output (next state) = current input + current state「输出（下一个状态）=当前输入+当前状态」
- **over time, the circuit changes through a sequence of states as a result of changes in the inputs「随着时间的流逝，由于输入的变化，电路会通过一系列状态变化」**
- **circuits that exhibit this behavior are referred to as sequential circuits「表现出这种行为的电路称为顺序电路」**

#### Example

Simple but useful examples of sequential circuits

- different types of Flip-Flops
- registers
- counters

### Flip-Flops

There are a variety of flip-flops, all of which share two properties「有各种各样的触发器，它们都具有两个特性」

- it is a bistable「双稳态」 device: it exists in one of two states and, in the absence of input, remains in that state「**它是一个双稳态设备：它处于两种状态之一，并且在没有输入的情况下仍保持该状态**」
- it has two outputs, Qand -Q (the complement of each other)「它有两个输出，Q和Q拔（彼此互补）」

#### S-R Latch (S-R Flip-Flop)

S-R Latch (S-R Flip-Flop) 「S-R锁存器」

- Use the output Q as the state of the Latch
- it has two stable states: Q = 1 and Q = 0

<img src="https://pic.hanjiaming.com.cn/2021/03/30/46a5593f4dc88.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/30/c5376ec0b1d38.png" alt="image.png" title="image.png" />

We can see that S-R Latch can be used as a storage element to store 1 bit (1-bit memory)「我们可以看到S-R锁存器可以用作存储1位（1位内存）的存储元素」

Note the feedback path in the circuit「Note the feedback path in the circuit」

注：连线的地方电压相同，即表示信号相同。如下图

<img src="https://pic.hanjiaming.com.cn/2021/03/30/df3c99ef7bbc1.png" alt="image.png" title="image.png" />

##### Change Input

<img src="https://pic.hanjiaming.com.cn/2021/03/30/3f1160950f9c3.png" alt="image.png" title="image.png" />

##### Characteristic Table

Use characteristic table to describe a sequential circuit：describe the relations between next state (output) and input & current state「使用特性表来描述时序电路：描述下一个状态（输出）与输入和当前状态之间的关系」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/6c73c80248826.png" alt="image.png" title="image.png" />

注：00不变，S 改 1 下一个Q为1，R 改 1下一个Q为0；S和R只有一个可以变成一，另一个必须为0；

<img src="https://pic.hanjiaming.com.cn/2021/03/30/6ff37fadfde5b.png" alt="image.png" title="image.png" />

S改1，Q有两个△t；R改1，Q有一个△t；

我们发现在Q和-Q的改变时间不一致，我们现在不关心这个问题。

我们要求R和S的改变时间必须一致，我们必须要解决这个问题。

##### Synchronization Issue

The change of inputs causes the change of states「输入的变化导致状态的变化」

- in digital computers, we want to unify「统一」 the timings of changes「在数字计算机中，我们希望统一变更的时间」
- solution: use a clock signal such that the changes of inputs occur only when a clock pulse「时钟脉冲」 occurs「解决方案：使用时钟信号，以使输入的更改仅在出现时钟脉冲时才发生」
  - all changes are synchronized to this clock (time is digitalized「数字化」)「所有更改都同步到此时钟（时间已数字化）」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/229e871cb2fec.png" alt="image.png" title="image.png" />

How to use clock for synchronization?「如何使用时钟进行同步？」

use AND gate: consider Y = X AND Clock, when Clock = 0, Y=0; when Clock = 1, Y = X

<img src="https://pic.hanjiaming.com.cn/2021/03/30/35bbd05034c1b.png" alt="image.png" title="image.png" />

#### Clocked S-R Flip-Flop

1-bit memory

- use S and R to control the writing of bit 0/1「使用S和R控制位0/1的写入」
- use clock to control when to write —when the flip-flop is “triggered「触发」”「使用时钟来控制何时写入，即“触发”触发器时」
- we use Timing Diagram「时序图」 to illustrate 「说明」the changing of input/output with respect to the clock signal「我们使用时序图来说明输入/输出相对于时钟信号的变化」「高中生物的有性生殖使用过」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/5c360c8cff032.png" alt="image.png" title="image.png" width = "200px"/>

注：我们的目的就是让R和S输入的时间保持一致。

##### Idealized Timing Diagram

Edge-triggered Flip-Flops 「边缘触发的触发器」

the output changes at the “edge” of the clock signal (when the clock signal changes)「输出在时钟信号的“边缘”改变（当时钟信号改变时）」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/f8c1f2831440b.png" alt="image.png" title="image.png" />

flip-flops could be positive-edge-trigged or negative edge trigged「触发器可以是正边沿触发或负边沿触发」

**idealized: no gate delay would be shown in the timing diagram「理想化：时序图中不会显示门延迟」**

注：理想化模型没有门延迟，即不考虑Gate Delay

use the bubble for indication「用气泡指示」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/02da801eebe7a.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/30/5adbada2dc219.png" alt="image.png" title="image.png" />

#### Other Common Flip-Flops

##### D Flip-Flop

- one problem with S-R flip-flop is that R = S = 1 should be avoid
- D flop-flop uses a single input source: it is a S-R flip-flop with ￼S = -R

<img src="https://pic.hanjiaming.com.cn/2021/03/30/5752c5d3f3b1c.png" alt="image.png" title="image.png" />

- the output is always equal to the most recent input value D「the output is always equal to the most recent input value D」
- storage for one bit of data

<img src="https://pic.hanjiaming.com.cn/2021/03/30/490ea72a39fcc.png" alt="image.png" title="image.png" />

##### J-K Flip-Flop

all combinations of two input values are valid (including 1 1)「两个输入值的所有组合均有效（包括1 1）」

<img src="https://pic.hanjiaming.com.cn/2021/03/30/faed0bb251af9.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/30/d65a2ed19d8d5.png" alt="image.png" title="image.png" />

### Registers

- used in CPU to store one or more bits (multiple flip-flops)「在CPU中用于存储一个或多个位（多个触发器）」
- two types: shift registers and parallel registers「两种类型：移位寄存器和并行寄存器」
- parallel registers: a set of 1-bit memories that change state simultaneously「同时的」「并行寄存器：一组同时改变状态的1位存储器」
- shift registers: states are changed sequentially「移位寄存器：状态顺序更改」

#### Example: 8-bit Parallel Registers

注意：source of data (can use MUX to connect to multiple sources)「根据资料：可以使用MUX连接到多个源」

<img src="https://pic.hanjiaming.com.cn/2021/03/31/ba11cde6dca4a.png" alt="image.png" title="image.png" />

#### Example: 5-bit Shift Registers

<img src="https://pic.hanjiaming.com.cn/2021/03/31/7cdd601ebcc30.png" alt="image.png" title="image.png" />

with each clock pulse, data are shifted to the right on position, and the rightmost bit is transferred out「每个时钟脉冲都会将数据移到右边的正确位置，最右边的位会被移出」

shift registers can be used to interface to serial I/O devices, or perform logical shift in ALU「移位寄存器可用于与串行I / O设备接口，或在ALU中执行逻辑移位」

### Counters

**A register whose value will increment by 1**

- for a counter composed of N flip-flops, the value ranges from 0 to ￼; that is, the output of each flip-flop serves as one bit of the N-bit number「对于由N个触发器组成的计数器，该值的范围是0到；也就是说，每个触发器的输出都作为N位数字的一位」
- asynchronous counter「异步计数器」: states of flip-flops will NOT change at the same time
- synchronous counter「同步计数器」: states of flip-flops WILL change at the same time

#### Ripple Counter

Ripple Counter「纹波计数器」

An asynchronous counter is also referred to as a ripple counter「波纹计数器」
the change that occurs to increment the counter starts at one end and “ripples” through to the other end「递增计数器所发生的变化始于一端，“波纹”直至另一端」

<img src="https://pic.hanjiaming.com.cn/2021/03/31/7b224d57f61b7.png" alt="image.png" title="image.png" />

note: the states (outputs) of the flip-flops does not change at the same time; instead, the change ripples through to the other end「注意：触发器的状态（输出）不会同时改变。相反，变化会波及到另一端」

<img src="https://pic.hanjiaming.com.cn/2021/03/31/bdaad33ba47d3.png" alt="image.png" title="image.png" />

all the inputs to the JK flip-flops are 1 「JK触发器的所有输入均为1」
the clock controls the toggling of output: if there is a clock pulse, the output is toggled「时钟控制输出的切换：如果有时钟脉冲，则切换输出」
the JK flip-flops are sequentially connected: the output of the previous flip-flop serves as the clock (control signal) of the next flip-flop「JK触发器顺序连接：前一个触发器的输出用作下一个触发器的时钟（控制信号）」

<img src="https://pic.hanjiaming.com.cn/2021/03/31/b2ca0cf84ed94.png" alt="image.png" title="image.png" />

#### Synchronous Counter

- use the outputs of N flip-flops to denote the number「使用N个触发器的输出表示数字」
- states change at the same time「状态同时改变」
- use synchronous counter as the example to show the design process of sequential circuits — from truth table to SOP to circuits「以同步计数器为例，演示时序电路的设计过程-从真值表到SOP再到电路」

##### Example: 3-bit Synchronous Counter

- Use 3 J-K flip-flops to implement 3-bit counter「使用3个J-K触发器实现3位计数器」
- output of 3 J-K flip-flops: CBA「3 J-K触发器的输出：CBA」
- states: 000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 110 ->111 -> 000
- **key: identify the required inputs to change one state to the next state「关键：确定所需的输入以将一种状态更改为另一种状态」**

注：我们的目标是让states按照000 -> 001 -> 010 -> 011 -> 100 -> 101 -> 110 ->111 -> 000改变。（尽管前面可以用加法器进行加法）

<img src="https://pic.hanjiaming.com.cn/2021/03/31/de298fe87628c.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/31/85ee98afbc1d3.png" alt="image.png" title="image.png" />

注：我们现在得到了C的表，只需按照相同的步骤得到A与B的即可，最后拼到一起。

Now, we can use the same way in the designing of combinatorial circuits: 

- treat A, B, C as inputs (feedback path)「将A，B，C视为输入（反馈路径）」
- treat each J, K as a function of A, B,C「将每个J，K视为A，B，C的函数」
- then construct a Karnaugh map for each J, K「然后为每个J，K构造一个卡诺图」

<img src="https://pic.hanjiaming.com.cn/2021/03/31/f6225eada68e7.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/03/31/c9b1f171b107b.png" alt="image.png" title="image.png" />

Exercise after class: draw the timing diagram for this sequential circuit (how A, B, C would change with Clock?)「课后练习：画出该时序电路的时序图（A，B，C随时钟如何变化？）」

<img src="https://pic.hanjiaming.com.cn/2021/03/31/fea3c77366af1.png" alt="image.png" title="image.png" />



