---
article: false
date: 2022-12-07
order: 4
headerDepth: 1
---

# Language & Communication & Dialogue

## Interface Hall of Shame

- 提出充分和可理解的信息
- 提供 "真正的 "选择（用于解决问题）
- 避免含糊不清或自相矛盾的情况
- 节省用户的时间和精力

<img src="https://pic.hanjiaming.com.cn/2022/10/29/32f00225c411d.png" alt="1667027556068.png" style="zoom:33%;" />

## Talking to Machines

Coding language: 计算机和普通机器的根本区别在于，计算机可以通过语言来接近

Programming languages come in a variety of levels:

- 低层次：机器码、汇编等
- 高级别的：Java, Python, Ruby等
- 编译器将 语言 X 翻译成 语言 Y（例如，objective-c 到 Swift）
- 程序 到 另一个程序（原定义：高层到机器语言）
- 编程规范
- 将图形 转化为 程序（即可视化编程）
- 程序/规范 到 硬件

## FORTRAN的诞生

John Backus 开发了 Speedcoding：一种解释性语言，在 IBM 701上运行时比手写的汇编慢20倍。

- Backus的目标：将高级语言翻译成汇编语言
- 很多人认为这是不可能的：Backus 之前在其他项目中都失败过
- 1954-7年标志着FORTRAN I项目
- 到 1958 年：> 50% 的软件都在 FORTRAN 中
- 开发时间从几周缩短到几小时

::: info Sample Code in FORTRAN

你从来没有学过FORTRAN，但你可以理解它！

```fortran
program addNumbers

	! This simple program adds two numbers 
	implicit none
	
  ! Type declarations
  real :: a, b, result
  
	! Executable statements 
	a = 12.0
	b = 15.0
	result = a + b
	
	print *, 'The total is ', result 
	
end program addNumbers
```

:::

## 解释与预先编撰

尽管速度较慢，但 Speedcoding 和后来的 FORTRAN 如何在 1950 年代后期占据大部分软件编程？以牺牲系统资源为代价，注重使用的便利性。

- **Just in time compilation**：（常规）解释器一次只翻译一个程序语句
- **Ahead of time compilation**：将整个程序一次性翻译成机器代码
- 许多现代编程语言融合了两种方法（例如，Java）

<img src="https://pic.hanjiaming.com.cn/2022/10/29/32bbf6cdb0337.png" alt="1667029410881.png" style="zoom:33%;" />

解释（及时编译）和（提前）编译的优点和缺点？

- Cross platform
- Compiling time
- Execution efficiency「执行效率」

<img src="https://pic.hanjiaming.com.cn/2022/10/29/c0adb112a63c7.png" alt="1667029804139.png" style="zoom: 50%;" />

## Compiler Architecture

汇编的两个阶段：

- 分析阶段：将源程序分解为多个部分以构建中间表示
  - Lexical Analysis
  - Syntax Analysis
  - Semantic Analysis
- 综合阶段：从中间表示生成目标程序
  - Intermediate Code Generator
  - Code Optimizer
  - Code Generator

<img src="https://pic.hanjiaming.com.cn/2022/10/29/596af819bcabd.png" alt="1667030086412.png" style="zoom:33%;" />

## 编码语言 - 缺点

编码语言曾经是计算机的唯一界面。今天，编程语言会成为一个好的用户界面吗？

![1667030611526.png](https://pic.hanjiaming.com.cn/2022/10/29/600d987cf59d7.png)

## Dialogue Design

### Example

- System presents an output observed by the user who performs a task「系统呈现出一个由执行任务的用户观察到的输出」
- User articulates an input that makes the system perform「用户阐述一个输入，使系统执行。」

<img src="https://pic.hanjiaming.com.cn/2022/10/29/a6b391bf86325.png" alt="1667030749143.png" style="zoom:33%;" />

### What

对话是两方或多方之间的对话，通常是合作的。

- In user interfaces
  - 指的是互动的 逻辑/结构「logic/structure」
  - 句法层面的人机 "对话"
- Levels
  - Lexical「词汇」：图标的形状、实际按下的键、字符
  - Syntactic「句法」：输入和输出的顺序（击键、点击）
  - Semantic「语义」：对内部应用/数据的影响，击键的意义，点击的意义

### Why

「Dialog notations」对话符号帮助我们

- 分析系统
- 将词汇和语义分开

在系统建立之前：对话符号「Dialog notations」帮助我们理解提议的设计（即快速原型制作）

与客户/利益相关者讨论你的系统

- 将想法转化为代码
- Systematic testing「系统性测试」
- 1000% 的 生产力提高
- Formalism saves time「形式主义节省了时间」

### Prototyping

<img src="https://pic.hanjiaming.com.cn/2022/10/29/fbb847571b37f.png" alt="1667031538000.png" style="zoom:50%;" />

### How

人机对话「dialogues」是非常受限制的「constrained」。一些人与人之间的对话也是非常受限制的（例如，法律、财务）。

我们如何描述对话（“符号”）？

- State Transition Networks (STN)
- State diagrams (UML)
- Flow charts
- Petri nets
- JSD diagrams (Jackson Structured Design Diagrams)
- Formal Grammars
- Production Rules

## 状态转换网络（STN）

Formal descriptions to analyze

- Inconsistency「不连贯性」
- Reversibility「可逆性」
- Completeness「完整性」
- Potential errors「潜在的错误」

State Transition Networks (STNs) 「状态转换网络（STNs）」

- Circles: States
- Arcs: Actions/Events

<img src="https://pic.hanjiaming.com.cn/2022/10/29/21e1d0a8e8d8f.png" alt="1667035836286.png" style="zoom:50%;" />

### Hierarchical STNs

- 只是一个STN在另一个STN里面
- Named sub-dialogs「命名的子对话框」
- 对管理复杂的对话至关重要

Hierarchical STNs

- Circles: States
- Arcs: Actions/Events
- Rectangles: sub-STN

<img src="https://pic.hanjiaming.com.cn/2022/10/29/ac4a275a0089e.png" alt="1667036161482.png" style="zoom:50%;" />

### STN - Concurrent Dialogues

- Several things happen simultaneously「有几件事同时发生」
- 示例：用于文本格式的简单对话框

<img src="https://pic.hanjiaming.com.cn/2022/10/29/50db190b8b583.png" alt="1667036499052.png" style="zoom: 33%;" />

- Put STNs together
- 谨防组合爆炸「Beware of combinatorial explosion」

![1667036597447.png](https://pic.hanjiaming.com.cn/2022/10/29/7f83ccf460a13.png)

### STN - Design of Escapes

- Web中的'返回'，Escape/Cancel键
  - 到处都有类似的行为
  - End up with spaghetti of identical behaviors!
- How do we show this?
  - 使用分层菜单：每个子菜单的“正常”退出加上
  - 分离逃生弧在子菜单中“无处不在”

![1667036956469.png](https://pic.hanjiaming.com.cn/2022/10/29/ea6697ac77b7f.png)

### STN - Design of Help Menus

- 各地的菜单结构几乎相同。
- 回到对话中的同一点可以在 STN 上指定，但非常混乱。Usually best added at a ‘meta’ level.

![1667125192017.png](https://pic.hanjiaming.com.cn/2022/10/30/3f36afcb87442.png)

## State Diagram (UML)

![1670669628809.png](https://pic.hanjiaming.com.cn/2022/12/10/a3a13515aea15.png)

## Flow charts

![1670669668673.png](https://pic.hanjiaming.com.cn/2022/12/10/ba779fa7a387b.png)

## Nature Language Processing

### 信息处理模式

- 人类作为信息处理机器
- 现在的计算机通过多种感官渠道与我们交流

![1670669817390.png](https://pic.hanjiaming.com.cn/2022/12/10/fc8d622bd3494.png)

### Implications

- 提出的信息量：虽然大量的信息通过我们的五种感官进入，但我们可以在同一时间内专注于少量的信息。
- 需要如何重复介绍：在感觉输入和长期记忆之间建立联系
- 现在，许多大公司（如谷歌）使用定量方法（如眼睛注视数据）来研究GUI设计

### Mismatch Between User and System Models

执行的鸿沟

- 用户的意图和允许的行动之间的不匹配
- "我如何使用该系统？"

评价的鸿沟

- 用户的期望和系统的表述之间的差异
- "当前的系统状态是什么？"

### 响应时间

- 系统处理输入和呈现输出的时间
- 异常长的响应时间可能会导致
  - 用户挫败感
  - 错误输入
  - 效率较低（这与引入GUI的目标相矛盾）



