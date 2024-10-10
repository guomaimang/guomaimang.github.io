---
article: true
category:
  - tech
date: 2021-05-01
index: 0
---

# Computer Organization

计算机只是执行程序的机器。那么，什么是程序？计算机如何执行程序？学习计算机组织的基本目标：充分了解这些组件的内部工作原理以及如何控制它们。

<!-- more -->

## 区分计算机组织和计算机架构

- 计算机体系结构：“该怎么办？”---设计和实现计算机系统的蓝图
- 计算机组织：“该怎么做？”---它说明了计算机系统的操作部分如何链接在一起以实现所提供的计算机体系结构

计算机体系结构先于计算机组织产生

我们做一个形象的举例：

- 计算机体系结构：是否应向计算机系统添加乘法指令？
- 计算机组织：如何将乘法指令添加到计算机系统？
  - 选项1：实现乘法单元
  - 选项2：使用多个加法单元

在现实中

- 相同的架构示例
  - 所有Intel x86家族共享相同的基本架构
  - IBM System / 370系列共享相同的基本架构
- 不同版本之间的不同组织
  - 不同的芯片速度
  - 不同的配置
  - 有时甚至是不同的连接

## 结构与功能

一台计算机由许多组件组成：CPU，RAM，磁盘等。

功能：指作为结构一部分的单个组件的操作
结构：是指组件之间相互关联（连接）的方式

比如说：打印机具有固定功能，但是可以由系统通过CPU或内存直接方式等进行连接或控制。

> 自上而下的方法：分析复杂系统（例如计算机）的典型方法
> 例子：香港理工大学
> 顶层：Poly U
> 第二级：学院（工学院）
> 第三级：部门（COMP）
> 每个部门都是一个组成部分，具有自己的职能；
> 它们以分层方式组织（结构：顶层，第二层和第三层）
>
> 自顶向下的理解方法，Dr. Kai Zhou

现在，我们用自上而下的理解方法理解计算机结构

![](https://pic.hanjiaming.com.cn/2021/01/20210120122000689.png)注明：CPU速度快，内存速度慢，I/O速度更慢！

下一层

![](https://pic.hanjiaming.com.cn/2021/01/20210120120331560.png)

对于上图中的CPU

![](https://pic.hanjiaming.com.cn/2021/01/20210120120749929.png)

对于上图CPU中的Control Unit（简称CU，又叫做控制单元），有

![](https://pic.hanjiaming.com.cn/2021/01/20210120120912226.png)

所有计算机功能都与以下内容有关：

- 数据处理
- 数据存储
- 数据移动
- 控制/管理

在我看来，计算机的根本功能是存储，计算，传输和展现数据。计算机的本质是人类的工具。

## 计算机简史

### ENIAC（电子数值积分器和计算机）

- 专为第二次世界大战而设计，可计算武器的轨迹表
- 宾夕法尼亚大学John Mauchly教授领导的项目
- 从1943年开始，于1946年完成，一直使用到1955年，对于战争而言为时已晚

**它是一个十进制的计算器，**而不是二进制的。它拥有20个10位累加器。他并不是通过程序编写程序，而是通过开关（switches）来进行手动编程。它由18,000个真空管，30吨的重量和15,000平方英尺的尺寸组成，功耗为140 kW。它每秒可进行5,000次加法。

![](https://pic.hanjiaming.com.cn/2021/01/20210120122650700.png)

### 冯·诺依曼机器/图灵机

1946年，普林斯顿高等研究院（the Institute for Advance Study at Princeton，IAS ）开始设计“存储程序”计算机，被称为IAS计算机.

- **冯·诺依曼结构最重要的思想是“存储程序(Stored-program)”**
- 工作方式：
  - 任何要计算机完成的工作都要先被编写成程序，然后将程序和原始 数据送入主存并启动执行。一旦程序被启动，计算机应能在不需操 作人员干预下，自动完成逐条取出指令和执行指令的任务。
  - 冯·诺依曼结构计算机也称为冯·诺依曼机器（Von Neumann Machine）。
  - 几乎现代所有的通用计算机大都采用冯·诺依曼结构，因此，IAS计 算机是现代计算机的原型机。

- 存储程序概念（SPC）的想法：用内存（Main memory）存储程序和数据
- CPU中的 ALU（算术和逻辑单元）对二进制数据进行运算
- CPU中的 CU（控制单元）解释 存储器的 中的指令并执行
- CPU中的 CU（控制单元）控制 单元操作的输入和输出设备

**到目前为止，SPC模型仍是所有计算机系统的基础。**

#### 冯·诺依曼结构是怎样的？

- 有主存，用来存 放程序和数据
- 有一个自动逐条取出指令的 部件
- 有具体执行指令 （即运算）的部件
- 程序由指令构成 
  - 指令描述如何对数据进 行处理
- 有将程序和原始数 据输入计算机的部件
- 有将运算结果输出 计算机的部件

冯·诺依曼结构的主要思想

![](https://pic.hanjiaming.com.cn/2021/01/20210120125621722.png)![](https://pic.hanjiaming.com.cn/2021/01/20210120125509877.png)

-  计算机应由运算器、控制器、存储器、输入设备和输出设备 五个基本部件组成。

- 各基本部件的功能是： 

- 存储器不仅能存放数据，而且也能存放指令，形式上两者 没有区别，但计算机应能区分数据还是指令；
- 控制器应能自动取出指令来执行；
- 运算器应能进行加/减/乘/除四种基本算术运算，并且也 能进行一些逻辑运算和附加运算；
- 操作人员可以通过输入设备、输出设备和主机进行通信。

- 内部以二进制表示指令和数据。每条指令由操作码和地址码 两部分组成。操作码指出操作类型，地址码指出操作数的地 址。由一串指令组成程序。
- 采用“存储程序”工作方式。

- 数据表示
  - 二进制（010111…）
  - 40 bit Words（计算机中的基本单位）
  - 2 x 20位指令（每个字符）
- 寄存器集（CPU中的存储器）
  - 内存缓冲寄存器（MBR）
  - 内存地址寄存器（MAR）
  - 指令寄存器（IR）
  - 指令缓冲寄存器（IBR）
  - 程序计数器（PC）
  - 累加器（ACC）
  - 乘商器（MQ）

![](https://pic.hanjiaming.com.cn/2021/01/20210120125043694.png)

### 现代计算机结构

- CPU：中央处理器；PC：程序计数器；
- MAR：存储器地址寄存器 ALU：算术逻辑部件；
- IR：指令寄存器；MDR：存储器数据寄存器
- GPRs：通用寄存器组（由若干通用寄存器组成，早期就是累加器）

![](https://pic.hanjiaming.com.cn/2021/01/20210120144838515.png)

1. 程序在执行前

  - 数据和指令事先存放在存储器中，每条指令和每个数据都有地址， 指令按序存放，指令由OP(操作码)、ADDR(地址码)字段组成，程序起始地址置PC
2. 开始执行程序
  1. 根据PC取指令
  2. 指令译码
  3. 取操作数
  4. 指令执行
  5. 回写结果
  6. 修改PC的值
  7. 继续执行下一条指令

简单的流程图:

![](https://pic.hanjiaming.com.cn/2021/01/20210120145008348.png)

计算机的基本部件及功能

- 运算器（数据运算）：ALU、GPRs、标志寄存器等
- 存储器（数据存储）：存储阵列、地址译码器、读写控制电 路
- 总线（数据传送）：数据(MDR)、地址(MAR)和控制线
- 控制器（控制）：对指令译码生成控制信号
- 计算机实现的所有任务都是通过执行一条一条指令完成的

## 硬件发展

**基于晶体管的机器**

- 晶体管
  - 更换真空管
  - 更小更便宜
  - 散热少
  - 硅制固态设备
  - 1947年由William Shockley等人在Bell Labs发明。
- 第二代机器
  - 基于晶体管的计算机
  - NCR和RCA生产的小型晶体管机
  - IBM 7000
  - DEC-1957年

![](https://pic.hanjiaming.com.cn/2021/01/20210120130142793.png)

**微电子-集成电路**

从字面上看，即“小型电子产品”

计算机由 门，存储单元 和 互连 组成，这些可以在半导体（第三代）上制造，例如：硅片

![](https://pic.hanjiaming.com.cn/2021/01/20210120130500356.png)

## 计算机换代

- 真空管：1946-1957年
- 晶体管：1958年-1964年
- 小规模整合：1965年-芯片上多达100个设备
- 中规模整合：直到1971年-芯片上100-3,000个设备
- 大规模整合：1971年至1977年-芯片上3,000-100,000个设备
- 大规模整合：1978年至1991年-芯片上100,000-100,000,000个设备
- 超大规模集成： 1991至芯片上超过100,000,000个设备

**摩尔定律**

关于英特尔联合创始人戈登·摩尔（Gordon Moore）提高芯片上组件密度的问题  
芯片上的晶体管数量每年将翻一番（1970年之前）  
自1970年以来，发展速度有所放缓，晶体管数量每18个月翻一番

好处

- 芯片成本几乎保持不变
- 更高的包装密度意味着更短的电气路径，从而提供更高的性能
- 较小的尺寸增加了灵活性
- 降低功率和冷却要求
- 更少的互连增加了可靠性

随着时间变化，每个CPU上晶体管的数量的变化

![](https://pic.hanjiaming.com.cn/2021/01/20210120131010165.png)

**英特尔的CPU芯片**

- 1971年：4004
  - 第一个微处理器
  - 所有CPU组件都在单个芯片上
  - 4位CPU
- 1972年：8008
  - 8位CPU
  - 两者均针对特定应用而设计
- 1974年：8080
  - 英特尔首款通用微处理器
- 然后8086、80286（16位CPU）
- 80386、80486，Pentium，P2，P3，P4（32位CPU）
- P4 D，Core 2 Duo，Core 2 Quad…，i3，i5，i7，19（64位CPU）

**逻辑（CPU）和内存性能差距**

![](https://pic.hanjiaming.com.cn/2021/01/20210120132000954.png)

![](https://pic.hanjiaming.com.cn/2021/01/20210120132121610.png)

**典型的I / O设备数据速率**

I/O是最慢的，但是我们依据给它们排个名

![](https://pic.hanjiaming.com.cn/2021/01/20210120132233201.png)

CPU相对较快，但内存/ IO相对较慢。所以，我们的电脑慢的时候，不要怪CPU，应该怪内存和I/O的速度慢。

而且，CPU具有

- 板载L1和L2缓存
- 高速 BUS/多 BUS
- 数据流分析

所以，关键在于平衡以下这些

- 处理器组件
- 主存（Main memory）
- I / O设备
- 互连结构