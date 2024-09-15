---
article: false
date: 2022-12-13
order: 9
headerDepth: 1



---

# Software Evolution

1. 理解软件系统必须适应和发展，如果它们要保持有用的话，软件变化和发展应该被视为软件工程的一个组成部分。
2. 了解不同类型的软件维护，以及影响对**遗留软件系统**进行修改的成本的因素。
3. 了解**版本控制系统**应该提供的基本功能，以及如何在集中式和分布式系统中实现这些功能。
4. 了解什么是**遗留系统**，以及为什么这些系统对企业很重要。
5. 了解如何对遗留系统进行评估，以决定它们是否应该被废弃、维护、重新设计或替换。

## Software Change and Evolution

软件变化是不可避免的

- 错误必须被修复。
- 系统的性能或可靠性可能必须得到改善。
- 商业环境的变化。
- 新的计算机和设备被添加到系统中。
- 在使用该软件时，会出现新的要求。

进化的重要性

- 组织在其软件系统上有巨大的投资 - 它们是关键的商业资产。
- 为了保持这些资产对企业的价值，它们必须被改变和更新。
- 大公司的大部分软件预算都用于改变和发展现有软件，而不是开发新的软件。

<img src="https://pic.hanjiaming.com.cn/2022/12/15/a8bd862fcc3db.png" alt="1671044289106.png" style="zoom:50%;" />

## Evolution and Servicing

- Evolution：在一个软件系统的生命周期中，它正处于运行使用阶段，并随着新需求的提出和在系统中的实施而不断发展。
- Servicing：在这个阶段，软件仍然是有用的，但所做的唯一改变是保持其运行所需的改变，即错误修复和反映软件环境变化的改变。 没有增加新的功能。
- Retirement：该软件仍可使用，但只做必要的修改。用户必须解决他们发现的问题。

<img src="https://pic.hanjiaming.com.cn/2022/12/15/0827ab7befce7.png" alt="1671044507138.png" style="zoom: 50%;" />

## Evolution Processes

软件进化过程取决于

- 正在维护的软件的类型。
- The development processes used;
- The skills and experience of the people involved.

**Proposals for change** are the driver for system evolution. 「变革提案是系统演化的驱动力。」

- 来自系统利益相关者的错误报告
- 来自系统开发团队的软件改进新思路
- 适应新环境的要求
- 对新要求的请求

变化的识别和演变在整个系统的生命周期中持续进行。

## A General Model

软件进化过程的一般模型

<img src="https://pic.hanjiaming.com.cn/2022/12/15/73e31636d6879.png" alt="1671044787392.png" style="zoom:50%;" />

Change implementation

- 开发过程的迭代「Iteration」，对系统的修订被设计「designed」、实施「implemented」和测试。
- Development 和 Evolution 之间的一个关键区别是，Evolution 实施的第一阶段可能涉及到方案理解

## Urgent Change Requests

**可能**必须在不经历软件演化过程的所有阶段的情况下实施紧急变更

- 如果必须修复一个**严重的系统故障**，以便继续正常运行。
- 如果**系统环境的变化**（例如，操作系统升级）产生了意想不到的影响。
- 如果有需要非常快速反应的**业务变化**（例如，竞争产品的发布）。

## Agile Methods and Evolution

敏捷方法以增量开发为基础，所以从开发到演化是一个无缝的过渡。

- 进化只是基于频繁的系统发布的开发过程的一种延续。
- 当系统发生变化时，自动回归测试「Automated regression testing」尤其有价值。
- 变化可以表现为额外的用户故事。

Handover problems

- 开发团队采用了敏捷的方法，但 evolution team 更倾向于采用基于计划的方法
- 基于计划的方法已被用于开发，但 evolution team 更喜欢使用敏捷的方法。

## Software Maintenance

在一个程序投入使用后对其进行修改。

- 该术语多用于改变定制软件「custom software」。通用软件产品据说是通过进化「evolve」来创造新的版本。
- 维护通常不涉及对系统结构的重大改变。
- Software Maintenance 变化是通过**修改现有的组件和向系统添加新的组件来实现的**。

Types of maintenance

- Fault repairs
- Environmental adaptation
- Functionality addition and modification

### Maintenance Costs

- 通常大于开发成本（2x到100x，取决于应用）。
- 随着软件的维护而增加。
- 在维护过程中为系统增加新的功能通常比在开发过程中增加同样的功能更昂贵。
  - 程序维护工作是不受欢迎的。维护人员往往缺乏经验，而且领域知识有限。
  - 将维护和开发分开意味着开发团队没有动力去编写可维护的软件
  - 一个新的团队必须了解正在维护的程序
  - 随着程序的老化，它们的结构会退化，而且变得更难改变

### Maintenance Prediction

评估系统的哪些部分可能会导致问题，并具有较高的维护成本

- 预测一个 **系统的变更请求的数量** 需要了解**该系统与其外部环境之间的关系**。
- **复杂度**「Complexity」和 **过程数据** 可用于帮助预测可维护性
- 使用 **关于变更请求的预测信息** 和 **关于系统可维护性的预测** 来预测 **维护成本**

## Software Reengineering

- 在不改变功能的情况下，**重组或重写部分或全部的遗留系统**，使其更容易维护。
- 适用于较大系统中的一些**但不是所有子系统**需要经常维护的情况。
- Advantages of reengineering over replacement
  - Reduced **risk**
  - Reduced **cost**
- Reengineering cost factors
  - 要重新设计的软件的质量
  - 可用于重新设计的工具支持
  - 需要的数据转换的范围
  - 是否有专家人员进行重新设计
- 软件重新设计的局限性
  - 转换**编程范式**是**不可能**的
  - 重大的架构或数据管理变化是**昂贵的**
  - 由此产生的系统可能不如**一个新系统**的可维护性

## Refactoring

- 对一个项目进行改进的过程，**通过改变来减缓退化的速度**。
  - 当你重构一个程序时，**你不应该增加功能**，而应该专注于程序改进。
  - 把它看作是 "预防性维护"
- Refactoring vs. Re-engineering
  - Refactoring 是在整个开发和演化过程中不断改进的过程，**它的目的是避免结构和代码退化，从而增加维护系统的成本和困难。**
  - Re-engineering 发生在系统维护了一段时间并且维护成本增加之后，它使用自动化工具来处理和重新设计遗留系统以创建一个**新的**、更易于维护的系统

## Version Management

### Codelines and Baselines

**追踪软件组件**或**配置项目的不同版本**以及使用这些组件的系统的过程。

- 它还涉及到确保不同的开发者对这些版本的修改不会相互干扰。
- 版本管理可以被认为是管理代码线「codelines」和基线「baselines」的过程。
  - 代码线是一个**源代码**版本的**序列**，序列中的后期版本来自早期版本。
  - 基线规定了特定系统中**包含的组件版本**以及**使用的库和配置文件**等。

<img src="https://pic.hanjiaming.com.cn/2022/12/15/fade3107be9ff.png" alt="1671046598471.png" style="zoom:50%;" />

主线「mainline」是一个从原始基线发展起来的系统版本序列。

### Version Control Systems

- 版本控制（VC）系统识别、存储和控制对不同版本的组件的访问。现代版本控制系统有两种类型
  - 集中式系统，有一个单一的主资源库，维护正在开发的软件组件的所有版本。
  - 分布式系统，其中组件库的多个版本同时存在。

### Project Repository and Private Workspace

项目库维护着所有组件的 "主 "版本，用于创建系统建设的基线。

- 在修改组件时，开发人员将这些组件从资源库中复制（检出）到他们的工作区，并在这些副本上工作。
- 当他们完成修改后，修改后的组件会被返回（checked-in）到版本库中。

Centralized vs. distributed

- 在集中式版本控制中，**私有工作区只包含项目库的组件**。
- 在分布式版本控制中，**私有工作区是项目库的一个克隆**。

![1671046939105.png](https://pic.hanjiaming.com.cn/2022/12/15/09baac2590296.png)

### Benefits of Distributed Version Control

- 它为存储库提供了一个备份机制：如果资源库被破坏，工作可以继续，项目资源库可以从本地副本中恢复。
- 它允许离线工作，以便开发人员可以在没有网络连接的情况下提交更改。
- 项目支持是默认的工作方式：开发人员可以在他们的本地机器上编译和测试整个系统，并测试他们所做的修改。
- 分布式 VC 对于开源开发至关重要：几个人可能同时在同一个系统上工作，没有任何中央协调。

## Storage Management

当版本控制系统最初开发时，存储管理是其最重要的功能之一

- 由于磁盘空间昂贵，系统不保留每个版本的完整副本，而是存储一个版本与另一个版本之间的差异（deltas）列表。
-  将这些内容应用于主版本（通常是最新的版本），可以重新创建一个目标版本。

由于磁盘存储现在相对便宜，Git 使用了一种替代的、更快的方法。

- Git 不使用增量，而是对存储的文件及其关联的元信息应用标准压缩算法。
- 它不存储文件的重复副本。检索文件只需将其解压缩，无需应用一系列操作。

## Legacy Systems

依赖于不再用于新系统开发的语言和技术的旧系统。

- 它们的结构可能已经因变化而退化了
- 它们可能依赖于旧的硬件，并可能有相关的遗留流程和程序。
- 遗留系统不仅是软件系统，而且是更广泛的社会技术系统，包括硬件、软件、库和其他支持性软件和业务流程。

## Summary

- 软件开发和进化可以被认为是一个综合的、迭代的过程，可以用螺旋模型表示。
- 对于定制系统，软件维护的成本通常超过软件开发的成本。
- The process of **software evolution** is *driven by requests for changes* and includes **change impact analysis,** **release planning** and **change implementation.**
- 遗留系统是指**使用过时的软件和硬件技术开发的**、对企业仍然**有用**的旧软件系统。
- There are 3 types of software maintenance, namely **bug fixing,** **modifying software to work in a new environment**, and **implementing new or changed requirements**.
- Software re-engineering is concerned with re-structuring and re- documenting software to make it easier to understand and change.
- Refactoring, making program changes that preserve functionality, is a form of preventative maintenance.
- Version management involves keeping track of the different versions of software components as changes are made to them.











