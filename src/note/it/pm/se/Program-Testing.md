---
article: false
date: 2022-12-13
order: 8
headerDepth: 1


---

# Program Testing

1. 了解从开发期间的测试到系统客户的验收测试的各个阶段。
2. 已经介绍了帮助你选择测试用例的技术，这些用例旨在发现程序缺陷。
3. 理解 "测试优先 "的开发方式，即在编写代码之前设计测试，并自动运行这些测试。
4. 了解三种不同类型的测试 - 组件测试、系统测试和发布测试。
5. 了解开发测试和用户测试之间的区别。

## Program Testing

- 测试的目的是表明一个程序做了它想做的事情，并在投入使用前发现程序的缺陷。
- 当你测试软件时，你使用人工数据执行一个程序。
- 你检查测试运行的结果是否有错误、异常或关于程序的非功能属性的信息。
- 可以揭示错误的存在，但不能揭示其不存在。
- Testing is part of a more general verification and validation proces，其中也包括静态验证技术。

向开发者和客户证明软件符合其要求。

### Program Testing Goals

- 向开发人员和客户证明软件满足其要求。
  - 对于定制软件，这意味着需求文件中的每个需求都应该有至少一个测试。
  - 对于通用软件产品来说，这意味着应该对所有的系统功能以及这些功能的组合进行测试，这些功能将被纳入到产品发布中。
- 发现软件的行为不正确、不理想或不符合其规范的情况。
	- 缺陷测试「Defect Testing 」关注的是根除不理想的系统行为，如系统崩溃、与其他系统不需要的互动、不正确的计算和数据损坏。
- 对于通用软件产品来说，这意味着应该对所有的系统功能以及这些功能的组合进行测试，这些功能将被纳入到产品发布中。

### Validation and Defect Testing

- The first goal leads to validation testing
  - 你期望系统在使用一组反映系统预期用途的测试用例时能够正确执行。
- The second goal leads to defect testing
  - 测试用例旨在暴露缺陷。缺陷测试中的测试用例可以故意模糊，不需要反映系统的正常使用情况。
  - 成功的测试是使系统运行不正确并因此暴露系统中的缺陷的测试。

### Verification & Validation (V&V)

- Verification: "Are we building the product right”.
  - 过程
  - 该软件应符合其规格。
- Validation: "Are we building the right product”.
  - 交付
  - 该软件应该做用户真正需要的事情。

V&V 的目的是 **建立对系统 "适用于目的"的信心。**

- 软件目的：信心水平取决于软件对一个组织的关键程度。
- 用户期望：用户可能对某些类型的软件期望较低。
- 营销环境：让产品尽早上市可能比在程序中发现缺陷更重要。

### Software Inspections

这些涉及到人们检查源表示，目的是发现异常和缺陷。

- 它们可以应用于系统的任何表示（需求、设计、配置数据、测试数据等）。
- 在测试过程中，错误可以掩盖（隐藏）其他错误。因为 inspection 是一个静态的过程，你不必关心错误之间的相互作用。
- 除了搜索程序缺陷外，检查还可以考虑程序更广泛的质量属性，如符合标准、可移植性和可维护性。

它们已被证明是发现程序错误的一种有效技术。

## Stages of Testing

1. 开发测试「Development testing」，在开发过程中对系统进行测试以发现错误和缺陷。
2. 发布测试「Release testing」，其中一个单独的测试团队在向用户发布之前测试系统的完整版本。
3. 用户测试「User testing」，即系统的用户或潜在用户参与到系统的测试中。

<img src="https://pic.hanjiaming.com.cn/2022/12/15/ca6891e3a6a25.png" alt="1671038771185.png" style="zoom:50%;" />

Choosing Unit Test Cases

- 测试用例应该表明，当按预期使用时，你所测试的代码单元做了它应该做的事。
- 如果代码单元中存在缺陷，应该由测试用例来揭示。
- 这导致两种类型的单元测试用例：
  - 其中第一项应反映程序的正常运行，应显示代码单元按预期工作。
  - 另一种测试用例应该是基于测试经验的，即哪里出现了常见问题。它应该使用异常的输入来检查这些输入是否被正确处理，并且不会使程序崩溃。

## Testing Strategies

- 分区测试「Partition testing」，即确定具有共同特征并应以相同方式处理的输入组。
  - 你应该从这些组别中选择测试。
- 基于指南的测试「Guideline-based testing」，你使用测试指南来选择测试用例。
  - 这些准则反映了以前的经验，即程序员在开发代码单元时经常犯的各种错误。

### Partition Testing

- 输入数据和输出结果通常属于不同的类，其中类的所有成员都是相关的。
- 这些类中的每一个都是一个等价分区或域，其中程序对每个类成员的行为是等价的。
- 应从每个分区选择测试案例。

![1671039324530.png](https://pic.hanjiaming.com.cn/2022/12/15/0b381cfb6366f.png)

### Testing Guidelines

- Software with sequences
	- 用只有一个值的序列测试软件
	- 在不同的测试中使用不同大小的序列
	- 派生测试以便访问序列的第一个、中间和最后一个元素
- General software
  - 选择迫使系统产生所有错误信息的输入方式
  - 设计导致输入缓冲器溢出的输入
  - 无数次重复相同的输入或一系列的输入
  - 强制计算结果太大或太小。


## Component Testing

- 软件组件通常是复合单元，因为它们是由几个相互作用的对象组成的。
  - 例如，在气象站系统中，重新配置组件包括处理重新配置的每个方面的对象。
- 你通过定义的组件接口访问这些对象的功能。
- 因此，测试组件的重点应该是**显示组件接口的行为符合其规范。**

## Interface Testing

目标是检测由于接口错误或对接口的无效假设而造成的故障。

### Interface types

- Parameter interfaces. Data passed from one method or procedure to another.
- Shared memory interfaces. Block of memory is shared between procedures or functions.
- Procedural interfaces. Sub-system encapsulates a set of procedures to be called by other sub-systems.
- Message passing interfaces. Sub-systems request services from other sub-systems.

### Interface Errors

- Interface misuse：一个调用组件调用另一个组件，并在使用其接口时出现错误，例如参数的顺序错误。
- Interface misunderstanding：一个调用组件嵌入了关于被调用组件行为的假设，这些假设是不正确的。
- Timing errors：被调用组件和调用组件以不同的速度运行，并且会访问过时的信息。

### Interface Testing Guidelines

- 设计测试，使调用过程的参数处于其范围的两端。
- 始终用空指针测试指针参数。
- 设计导致组件失败的测试。
- 在消息传递系统中使用压力测试。
- 在共享内存系统中，改变组件被激活的顺序。

## System Testing

涉及到整合组件以创建系统的一个版本，然后测试整合后的系统。

- 检查组件是否兼容，是否正确互动，并在正确的时间通过其接口传输正确的数据。
- 为确定系统交互而开发的用例可以作为系统测试的基础。
- 与用例相关的 sequence diagrams 记录了正在测试的组件和交互。

系统测试显然与组件测试重叠，但有两个重要区别

- The complete system is tested.
- System testing is a collective rather than an individual process.

## Testing Policies

详尽的系统测试是不可能的，所以可以制定定义所需系统测试覆盖率的测试策略。

::: info 测试政策示例

- 所有通过菜单访问的系统功能都应进行测试。
- 必须对通过同一菜单访问的功能组合（如文本格式化）进行测试。
- 在提供用户输入的地方，所有的功能都必须用正确和错误的输入进行测试。

:::

## Test-Driven Development

测试驱动开发（TDD）是一种程序开发的方法，其中你将测试和代码开发交错进行。

- 测试是在代码之前编写的，"通过 "测试是开发的关键动力。
- 你逐步开发代码，并对该**增量**进行测试。**在你开发的代码通过测试之前，你不会进入下一个增量。**

**TDD**是作为**敏捷方法**的一部分被引入的，比如极限编程。然而，它也**可以**用于计划驱动的开发过程中。

Benefits of Test-Driven Development

- Code coverage: All code written has at least one test.
- Regression testing: 回归测试套件「Regression Test Suite」是随着程序的开发而逐步开发的。
- Simplified debugging: 当一个测试失败时，问题出在哪里应该是很明显的。新写的代码需要被检查和修改。
- System documentation: 测试本身是一种文档形式，描述了代码应该做什么。

::: tip Regression Testing

- 回归测试是对系统的测试，以检查变化是否 "破坏 "了以前的工作代码。
- 在人工测试过程中，回归测试是昂贵的。但是，**在自动化测试中，它是简单而直接的**。每次对程序进行修改时，所有的测试都会重新运行。
- 在提交更改之前，测试必须“成功”运行。

:::

## Release Testing

- 发布测试是**对系统的特定版本进行测试**的过程，其目的是供**开发团队以外**的人使用。
- 发布测试过程的主要目标是使系统的供应商相信它足够好，可以使用。
  - 因此，发布测试必须表明系统提供其指定的功能、性能和可靠性，并且在正常使用中不会出现故障。
- 发布测试通常是一个黑箱测试「black-box」过程，测试只来自于系统规范。

Release testing is a form of system testing.

- 基于需求的测试包括检查每个需求并为其开发一个或多个测试。
- 场景测试使用典型场景来开发系统的测试用例。

Important differences:

- 一个没有参与系统开发的独立团队，应该负责发布测试。
- 开发团队的系统测试应着重于发现系统中的错误（defect testing）。
- 发布测试的目的是检查系统是否满足其要求，是否足以供外部使用（validation testing）。

## Requirements-Based Testing

<img src="https://pic.hanjiaming.com.cn/2022/12/15/108404af1f9da.png" alt="1671071999321.png" style="zoom: 50%;" />

## Features Tested by Scenario

- 通过登录系统进行身份验证。
- Home visit scheduling.
- 将指定的病人记录下载并上传到一台笔记本电脑
- ...

## Performance Testing

- 发布测试的一部分可能涉及测试系统的新兴属性，如性能和可靠性。
- 测试应该反映系统的使用概况。
- 性能测试通常涉及规划一系列的测试，在这些测试中，负载被稳步增加，直到系统性能变得不可接受。
- 压力测试是性能测试的一种形式，系统被故意超载，以测试其故障行为。

## User Testing

- 用户或客户测试是测试过程中的一个阶段，用户或客户对系统测试提供意见和建议。
- 用户测试是必不可少的，即使已经进行了全面的系统和发布测试。
- 原因是来自用户工作环境的影响对系统的可靠性、性能、可用性和稳健性有很大影响。这些在测试环境中是无法复制的。

### Types of User Testing

- Alpha testing
  - 软件的用户与开发团队合作，在开发者的现场测试软件。
  - 在开发软件产品或定制软件时使用
- Beta testing
  - 向用户提供软件的发行版，使他们能够对软件进行试验。
  - 大多用于在许多不同场合使用的软件产品。
- Acceptance testing
  - 客户对系统进行测试，以决定它是否可以从系统开发商那里接受并部署在客户环境中。
  - 定制系统开发的一个固有部分。

### The Acceptance Testing Process

敏捷方法和验收测试

- 在敏捷方法中，用户/客户是开发团队的一部分，负责对系统的可接受性进行决策。
- 没有单独的验收测试过程。
- 这里的主要问题是嵌入式用户是否 "典型"，是否能代表所有系统利益相关者的利益。

## Summary

- 测试只能显示程序中存在的错误。它不能证明没有剩余的错误。
- 开发测试是软件开发团队的责任。在系统发布给客户之前，**应该由一个单独的团队负责测试。**
- 开发测试包括单元测试，即测试单个对象和方法的组件测试，即测试相关的对象组和系统测试，即测试部分或整个系统。
- 开发测试包括单元测试，即测试单个对象和方法的组件测试，即测试相关的对象组和系统测试，即测试部分或整个系统。
- 在测试软件时，你应该尝试 "打破 "软件，利用经验和准则来选择在其他系统中有效发现缺陷的测试案例类型。
- 只要有可能，你就应该编写自动测试。这些测试被嵌入到一个程序中，可以在每次对系统进行改变时运行。
- 测试优先开发是一种开发方法，即在要测试的代码之前编写测试。
- 场景测试包括发明一个典型的使用场景，并使用它来推导出测试案例。
- 验收测试是一个用户测试过程，目的是决定软件是否足够好，可以在其运行环境中部署和使用。















