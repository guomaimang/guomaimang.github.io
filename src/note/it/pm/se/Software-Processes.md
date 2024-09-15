---
article: false
date: 2022-12-14
order: 2
headerDepth: 2
---

# Software Processes

- 了解软件过程和软件过程模型的概念；
- 我们已经介绍了三种一般的软件过程模型，以及何时可以使用它们。
- 了解软件需求工程、软件开发、测试和进化的基本过程活动。
- 了解为什么要组织流程以应对软件需求和设计的变化。
- 了解软件过程改进的概念和影响软件过程质量的因素。

## Software Process

开发一个软件系统所需的一套结构化的活动。有许多不同的软件过程，但它们都涉及：

- Specification – 定义了系统应该做什么。
- Development - 生产符合规范的软件。
- Validation – checking that it does what it should do;
- Evolution – changing the system in response to changing needs.

## Plan-Driven and Agile Processes

- 计划驱动的过程是指所有的过程活动都是事先计划好的，并且根据这个计划来衡量进展。
- 在敏捷过程中，规划是渐进的，而且更容易改变过程以反映不断变化的客户需求。
  - 在实践中，大多数实践过程包括计划驱动和敏捷方法的要素。
  - 软件过程没有对错之分。

## Software Process Models

一个软件过程模型是一个过程的抽象表示。它从某种特定的角度对一个过程进行描述。

- The waterfall model：计划驱动的模型。规范、开发、验证和演化的独立和不同阶段。
- Incremental development：规范、开发和验证是交错进行的。可能是计划驱动的或敏捷的。
- Integration and configuration：系统是由现有的可配置组件组装而成。可能是计划驱动的或敏捷的。

在实践中，大多数大型系统的开发都采用了一个包含所有这些模型元素的过程。

### The Waterfall Model

在瀑布模型中，有单独确定的阶段。

- 需求分析和定义
- 系统和软件设计
- 实施和单元测试
- 集成和系统测试
- 操作和维护

<img src="https://pic.hanjiaming.com.cn/2022/12/14/b6286c6e6fd05.png" alt="1670990671778.png" style="zoom: 50%;" />

瀑布模型的主要缺点是很难在流程进行后适应变化。原则上，在进入下一阶段之前，必须完成一个阶段的工作。

- 不灵活地将项目划分为不同的阶段，使其难以应对不断变化的客户要求。
- 很少有业务系统有稳定的要求。

适合使用瀑布模型的系统类型

- 嵌入式系统，软件必须与硬件系统对接
- 需要对软件规格和设计进行广泛的安全和安保分析的关键系统
- 大型软件系统，是由几个伙伴公司开发的更广泛的工程系统的一部分

### Incremental Development

增量开发基于开发初始实现、从用户和其他人那里获得反馈并通过多个版本改进软件直到开发出所需系统的想法

- 这种方法可以是计划驱动的，也可以是敏捷的，或者更通常的是这些方法的混合。
- 您不必将每个增量交付给系统客户。

<img src="https://pic.hanjiaming.com.cn/2022/12/14/0d10da9f39648.png" alt="1671004591587.png" style="zoom:50%;" />

- Benefits
  - 适应不断变化的客户要求的成本降低了。
  - 更容易获得客户对已完成的开发工作的反馈。
  - 可以更快地向客户交付和部署有用的软件。
- Problems
  - 这个过程是不可见的。
  - 随着新增量的增加，系统结构趋于退化。

### Integration and Configuration

基于软件重用，系统从现有的组件或应用系统，或COTS（商业现货）系统中集成。

- 可以对重复使用的元素进行配置，使其行为和功能符合用户的要求。
- 重用现在是建立许多类型业务系统的标准方法

可重用软件的类型

- 为在**特定环境中**使用而配置的**独立的应用系统**。
- 作为组件或包开发的对象**集合**，可与.NET或 J2EE 等框架集成。
- 根据服务标准开发的、可供**远程调用**的**网络**服务。

#### Reuse-Oriented

![1671005373353.png](https://pic.hanjiaming.com.cn/2022/12/14/735c8a8dd6074.png)

#### Advantages and disadvantages

- Advantages
  - 由于从头开始开发的软件更少，因此降低了成本和风险
  - 更快的系统交付和部署
- Disadvantages
  - 需求妥协是不可避免的，所以系统可能无法满足用户的真正需求
  - 失去对系统演变的控制

## Process Activities

- 真正的软件过程是技术、协作和管理活动的相互交错的序列，其总体目标是指定、设计、实施和测试一个软件系统。
- 规范、开发、验证和演化这四种基本过程活动在不同的开发过程中组织方式不同。
- 例如，在瀑布模型中，它们是按顺序组织的，而在增量开发中，它们是交错进行的。

## Software Specification

确定需要**哪些服务**并确定**系统运行和发展的制约因素**的过程。

需求工程流程

- Requirements elicitation and analysis: What do the system stakeholders require or expect from the system?
- Requirements specification: 详细定义需求
- Requirements validation: 检查要求的有效性

<img src="https://pic.hanjiaming.com.cn/2022/12/14/8742ed13d4ca2.png" alt="1671005810209.png" style="zoom:50%;" />

## Software Development

- 开发一个可执行的系统以交付给客户的过程。
- Software design: 设计一个软件结构来实现需求。
- Implementation: 将这种结构转化为可执行程序。
- 设计和实施的活动是密切相关的。它们可能是分开的，也可能是相互交错的。

## Design Activities

- 架构设计，你要确定系统的整体结构、主要组件（子系统或模块）、它们之间的关系以及它们的分布方式。
- 数据库设计，即设计系统数据结构，以及如何在数据库中表示这些数据。
- 接口设计，您可以在其中定义系统组件之间的接口。
- 组件选择和设计，在这里你要搜索可重用的组件，如果没有合适的组件，就设计新的软件组件。

<img src="https://pic.hanjiaming.com.cn/2022/12/14/67fcdea5e91ce.png" alt="1671006151145.png" style="zoom:50%;" />

## System Implementation

- 软件是通过开发一个或多个程序或配置一个应用系统来实现的。
- 对于大多数类型的软件系统来说，设计和实现是交错进行的活动。
- 编程是一项没有标准流程的个人活动。
- 缺陷「Defect」测试「Testing」和调试「Debug」是不同的过程。测试确定了缺陷的存在。调试是关于定位和纠正这些缺陷。

## Software Validation

Verification and validation (V&V)is intended to show that a system conforms to its specification and meets the requirements of the system customer.「验证和确认（V&V）的目的是表明一个系统符合其规格并满足系统客户的要求。」

- It involves checking processes, such as inspections and reviews, and system testing.
- Testing is the most commonly used V & V activity.
- 组件测试：单独的组件，例如函数或对象，或者它们的相关组是独立测试的；
- 系统测试：对系统进行整体测试。涌现特性的测试尤为重要。
- 客户测试：使用客户数据进行测试，以检查系统是否满足客户的需求。

<img src="https://pic.hanjiaming.com.cn/2022/12/14/5e3a856af24c0.png" alt="1671006673993.png" style="zoom:33%;" />

## Software Evolution

软件本质上是灵活的，可以改变。

- 随着需求的变化，支持业务的软件也必须不断发展和变化。
- 虽然开发和演化（维护）之间一直存在着分界线，但随着越来越少的系统是全新的，这种区分也越来越不重要。
- 把软件工程看作是一个进化的过程更为现实，在这个过程中，软件会根据不断变化的需求和客户的需要而不断地改变。

<img src="https://pic.hanjiaming.com.cn/2022/12/14/64d4e123cb872.png" alt="1671013262634.png" style="zoom: 33%;" />

## Coping with Change

在所有大型软件项目中，变化是不可避免的。

- 软件产品是现实世界的一个模型，它在不断地变化。
- 软件专业人员也是人，他们也会犯错。

移动目标问题：在开发软件产品时，需求会发生变化

- 对软件产品所做的任何改变都有可能导致回归故障。
- 如果变化太多，整个产品可能不得不重新设计和重新实现
- 对移动目标问题没有解决办法

改变导致返工，所以改变的成本既包括返工（如重新分析需求），也包括实施新功能的成本。

**Two Ways of Coping with Changing Requirements**

- System prototyping
  - 系统的一个版本或系统的一部分被快速开发，以检查客户的要求和设计决策的可行性。
  - 这是一种预测变化的方法，因为它允许用户在交付前对系统进行试验，从而完善他们的要求。
- Incremental delivery
  - 系统增量被交付给客户，供其评论和实验。
  - 这既支持对变化的预期，也支持对变化的容忍。

**Reducing Costs of Rework**

- 变更预测「Change anticipation」，即软件过程包括可以在需要重大返工之前预测可能的变更的活动。
  - 例如，可以开发一个原型系统，向客户展示系统的一些关键特征。

- 更改容忍度「Change tolerance」，其中流程的设计使得可以以相对较低的成本适应更改。
  - 这通常涉及到某种形式的渐进式发展。拟议的变化可以在尚未开发的增量中实施。如果这是不可能的，那么只有一个增量（系统的一小部分）可能要被改变以纳入变化。


### Software Prototyping

原型是一个系统的初始版本，用于展示概念，尝试设计方案，并找出更多关于问题及其可能的解决方案。

可以使用原型 

1. 在需求工程过程中帮助进行需求获取和 validation；
2. 在设计过程中，探索各种选择并开发一个用户界面设计。

Benefits

- Improved system usability.
- A closer match to users’ real needs.
- Improved design quality.
- Improved maintainability.
- Reduced development effort.

<img src="https://pic.hanjiaming.com.cn/2022/12/14/acf6a8c483eef.png" alt="1671015097649.png" style="zoom: 33%;" />

- 可能基于快速原型设计语言或工具
- 可能涉及遗漏的功能
  - 原型应该集中在产品中不太了解的领域。
  - 错误检查和恢复可能不包括在原型中。
  - 关注功能需求而不是非功能需求，如可靠性和安全性

### Incremental Delivery

开发和交付被分解成多个增量，每个增量提供部分所需功能。

- 用户需求被优先考虑，最高优先级的需求被包含在早期的增量中。
- 一旦开始开发一个增量，需求就被冻结了，尽管以后的增量的需求可以继续发展。

<img src="https://pic.hanjiaming.com.cn/2022/12/14/1b6e837ff9af7.png" alt="1671015636405.png" style="zoom:50%;" />

#### Advantages

- 早期增量充当原型，以帮助**引出对以后增量**的需求。
- 客户的价值可以通过每一个增量来实现，所以系统功能可以更早的实现。
- 将更改合并到系统中应该相对容易。
- **最优先的系统服务往往会得到最多测试。**

#### Problems

- **由于增量的功能比被替换系统要少，所以增量交付对替换系统来说很难实施。**
- 大多数系统都需要一套基本设施，这些设施被系统的不同部分所使用，但共同的设施可能很难通过增量交付来确定。
- **其本质是，规范是与软件一起开发的，这与许多组织的采购模式相冲突。**

