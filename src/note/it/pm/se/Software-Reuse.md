---
article: false
date: 2022-12-13
order: 9
headerDepth: 1




---

# Software Reuse

在过去的20年中，已经有一个重大的转变，即转向基于系统化软件重用的设计过程。

基于重复使用的软件工程

- 系统再利用：完整的系统，其中可能包括几个应用程序，可以被重新使用。
- 应用程序重用：一个应用程序可以通过不加改变地合并到其他应用程序或通过开发应用程序系列来重用。
- 组件重用：从子系统到单个对象的应用程序组件都可以重用。
- 对象和函数重用：可以重用实现单个定义良好的对象或函数的小规模软件组件。

软件重用的好处和问题

- Benefits
  - 加速开发
  - 有效利用专家
  - 增加可靠性
  - 降低开发成本
  - 减少了过程风险
  - 遵守标准
- Problems
  - 创建、维护和使用一个组件库
  - 寻找、理解和调整可重用的组件
  - 增加的维护成本
  - Not-invented-here syndrome

The Reuse Landscape：从简单的功能到完整的应用系统，在一系列的层次上都可以进行重用。重用范围涵盖了可能的重用技术的范围。

## Some Approaches

- Application frameworks：抽象类和具体类的集合被调整和扩展以创建应用系统。
- Application system integration：两个或更多的应用系统被整合以提供扩展功能
- Architectural patterns：支持常见类型的应用系统的标准软件架构被用作应用程序的基础。
- Component-based software engineering：系统是通过整合符合组件模型标准的组件（对象的集合）而开发的。
- Design patterns：在各个应用中出现的通用抽象被表示为设计模式，显示了抽象和具体的对象和互动。
- Model-driven engineering：软件被表示为领域模型和独立于实现的模型，代码由这些模型生成。
- Program libraries：实现常用抽象的类和函数库可供重复使用。
- Service-oriented systems：通过连接共享服务来开发系统，这些服务可能由外部提供。
- Software product lines：一个应用类型围绕着一个共同的架构被概括，这样它就可以为不同的客户进行调整。

## Reuse Planning Factors

- 软件的开发计划。
- 预期的软件寿命。
- 开发团队的背景、技能和经验。
- 软件的关键性和它的非功能要求。
- 应用领域。
- 软件的执行平台。

## Application Frameworks

一个应用程序框架是一个通用的结构，它被扩展以创建一个更具体的子系统或应用程序。

- "一组集成的软件工件（如类、对象和组件），它们相互协作，为一系列相关的应用提供可重复使用的架构。"
- 框架被实现为抽象和具体对象类的集合。类可以直接重复使用，并且可以使用继承和多态性等功能进行扩展。
- 框架提供对通用功能的支持，这些功能可能会在所有类似类型的应用程序中使用
- 框架支持 design reuse，因为它们为应用程序提供了一个骨架结构，以及系统中特定类的重用。

## Web Application Frameworks

现在所有常用的网络编程语言都可以使用WAF。

- E.g., Spring for Java, Django for Python, and Angular for JavaScript.
- 支持动态网站的建设，作为网络应用的前端。
- The architecture of a WAF is usually based on the Model-View- Controller composite pattern.

Features

- 安全性：WAFs 可能包含帮助实现用户身份验证（登录）和访问的类。
- 动态网页：提供的类可帮助您定义网页模板并从系统数据库动态填充这些模板。
- 数据库支持：框架可以提供类，为不同的数据库提供抽象接口。
- 会话管理：创建和管理会话（用户与系统的一些交互）的类通常是 WAF 的一部分。
- 用户交互：大多数 Web 框架现在都提供 AJAX 支持（Holdener，2008 年），这允许创建更具交互性的网页。

## Extending Frameworks

- 框架是通用的，并被扩展以创建一个更具体的应用或子系统。它们为系统提供了一个骨架架构。
- Extending the framework involves
  - 增加继承框架中抽象类操作的具体类。
  - 添加（回调「callback」）方法，这些方法在响应被框架识别的事件时被调用。
- 框架的一个问题是其复杂性，这意味着需要很长的时间来有效地使用它们。







