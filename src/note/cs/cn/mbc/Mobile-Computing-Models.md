---
article: false
date: 2022-12-03
order: 4
headerDepth: 1
---

# Mobile Computing Models

## Overview

移动计算环境在许多方面受到限制「constrained」

- Mobile devices are resource-poor「资源贫乏」, unreliable「不可靠」, highly heterogeneous「高度异构」
- Network connectivity is with low bandwidth and intermittent「断断续续」
- Mobility further induces「引起」 uncertainty「不确定性」 in the availability  of both communication and computational resources

这些限制对移动计算应用程序的设计和结构有很大影响。移动计算应用设计者需要设计适当的模型和架构来组织应用组件并指定它们的关系。

影响移动计算应用成功（或失败）的因素有很多，最重要的因素是为应用选择最合适的计算模型「computing model」和应用架构「application architecture」。

移动计算模型定义了一个设计和组织应用系统的范式「paradigm」。

- Divide the application system into a number of functional components and specify their relationships and interactions「将应用系统划分为多个功能组件，并指定它们之间的关系和交互」
  - Examples are mobile client-server model, mobile peer-to-peer model, mobile agent model
- 不要明确指定需要哪些机制以及如何实现它们

A mobile application architecture defines how a computing model is realized and implemented「移动应用架构定义了一个计算模型是如何实现和实施的」

- 描述每个实体的组成部分
- 指定组件之间的功能划分
- 提供关于每个组件的机制和实施的细节

示例：对于客户端 - 服务器模型，Thin client architecture / Smart client architecture

在移动计算环境中，有许多可能的模型来构建计算组件。

## Client-Server Model

客户/服务器模型是为分布式系统设计的

- 网络上的每台计算机或进程要么是客户端，要么是服务器
- 客户端拥有有限的资源，可以向服务器发送请求
- 服务器资源丰富，可以提供服务来回应客户的请求，请求的结果将被送回给客户
- 通信网络提供客户和服务器之间的连接
- 两个客户不能直接通信

<img src="https://static-file.hjm.red/2022/11/13/b16bdd77d9010.png" alt="1668291317134.png" style="zoom:50%;" />

## Mobile Client-Server Model

客户端/服务器模式仍然可以在移动环境中使用：移动客户端向位于固定网络的服务器请求服务

标准的C/S模式在移动环境中不能很好地工作：

- 不能假设连续的网络连接和强大的客户端能力
- 移动客户端的资源限制强制将客户端活动移回服务器端（“瘦客户端”）
- 客户端需要处理断开连接和网络的低通信带宽，并在客户端提供持久的服务（"智能客户端"）。
- 客户端的移动性给服务器带来了额外的问题--何时何地向客户发送回信。

标准的C/S模型需要仔细地重新组织客户端和服务器端的活动：

- 将C/S模式扩展到多个层级
- 进行进一步的优化
- Conduct further optimizations: 数据压缩、数据过滤、数据同步等

移动C/S模型的三层方法:

- Place some logic component in a middle tier (proxy)「代理可以执行更多处理操作和/或屏蔽移动计算限制」
- Proxies can perform more processing operations and/or mask out mobile computing limitations「代理人可以执行更多的处理操作和/或掩盖移动计算的限制」

两个三层移动C/S模型：

- CAS 模型（客户端/代理/服务器）
- CIS模式（客户/拦截/服务器）。

## Client-Agent-Server Model

<img src="https://static-file.hjm.red/2022/11/13/abfc2c1b847e7.png" alt="1668291294496.png" style="zoom:33%;" />

代理人代理是客户在固定网络上的代表

- 客户端和服务器之间的通信通过代理进行
- 代理人持续保持客户在固定网络上的存在
- 对服务器来说，代理看起来就像移动客户端，所以标准的C/S互动发生在代理和服务器之间
- 不同的协议可用于移动客户和代理之间以及代理和服务器之间的互动

### Agent functionalities

- 为移动客户端和服务器之间的通信交换信息「Exchange messages」和排队信息「queue messages」
- 从客户端卸载处理操作
- 处理客户和服务器之间的断开连接
- 优化无线链路的传输

### Advantages

- 客户端功能转移到代理--更适合瘦客户端应用
- 复杂的客户请求可以由代理管理，只有最终的结果被传送给客户
- 服务器也可以将一些活动转移给代理（例如，压缩）
- 代理人可以缓存一些结果以提高性能

### Disadvantages

- 客户端应用程序需要更改才能与代理通信
- 不支持客户端的断开连接操作

## Client-Intercept-Server Model

<img src="https://static-file.hjm.red/2022/11/13/f5e1637aedaa6.png" alt="1668291955699.png" style="zoom:33%;" />

- 一对代理: 一个留在客户端，另一个留在固定网络上
- 代理人对客户和服务器都是透明的
- 两个代理合作，促进有效的数据优化「data optimization」和协议转换「protocol translation」

### Client intercept agent functionalities

- 进行一些预取和压缩操作
- 缓存数据，以便在断开连接时满足客户的请求

### Server intercept agent functionalities

- 信息传递和排队
- 从客户端卸下一些处理操作
- 处理客户和服务器之间的断开连接
- 优化无线链路的传输

### Advantages

- 更适合于有足够计算能力和存储的客户端
- 不需要改变客户端和服务器端的应用程序代码
- 之间可以执行不同的协议: 客户端<->客户代理；服务器代理<->服务器
- The pair of agents masks disconnection and optimizes transmission

### Disadvantages

- 客户端需要更多的资源来运行拦截代理
- 需要在服务器和客户端都开发拦截代理
- 系统开销将增加更多

## Mobile Peer-to-Peer Model

### 广义的C/S模型

- 没有中心服务器，实际上客户端和服务器之间没有区别--所有节点都有双重角色，既是服务器又是客户端（需要资源丰富的节点）。
- 节点之间可以直接通信
- 节点的操作是完全分散的「decentralized」和异步的「asynchronous」
- 服务器可以移动并遭受断线

### Mobile P2P applications

- 数据共享
- Instant messaging
- Collaboration
- Entertainment

<img src="https://static-file.hjm.red/2022/11/13/9d3db7f85b124.png" alt="1668293134291.png" style="zoom:50%;" />

### Advantages

- 自组织网络的良好计算模型
- 协作应用程序的良好架构
- 更加灵活：服务器端也可以移动
- 良好的系统扩展性

### Disadvantages

- 双方都需要资源丰富的设备
- 协议设计很复杂

## Mobile Agent

### Model

移动代理是一个 "移动的过程"「process on the move」

- 它从一台主机分派到网络中
- 它在一个主机上执行一段时间，停止执行，将自己派往另一个主机，并在那里恢复执行。所有这些都在它自己的控制之下。

<img src="https://static-file.hjm.red/2022/11/13/e4cb14b9a69e5.png" alt="1668293838816.png" style="zoom:33%;" />

### Features

- Mobility
	- 移动代理可以主动穿越网络，携带在前一个主机计算的部分/中间结果
	- 不仅仅是消息传递的替代品；在其行进的途中可以执行额外的任务
- Autonomy: 自己决定做什么以及如何、何时、何地行动
- Asynchrony: 移动代理和用户可以在同一时间执行，而不会互相阻挡

### Applications

特别适合于那些移动计算应用

- 需要较长的连接时间和/或用户有不良的连接/高度的流动性
- 当移动代理在网络上执行任务时，用户可以断开连接并做其他事情
- 例如，信息搜索、检索、过滤、电子商务、网络管理等。

### Advantages

- 减少远程通信
  - 在本地执行任务：节省网络带宽 -> 中间结果数据在本地处理，而不是在网络上来回传输
  ![1670062646576.png](https://pic.hanjiaming.com.cn/2022/12/03/033d2d0ddfa6d.png)
- 克服消息传递延迟「latency」
  - 本地的、与对方的 "即时 "互动
  - 最新更新的信息
- 适应性「adaptive」强
  - 支持断开连接「disconnected」/间歇「intermittent」连接
  - 支持低网络带宽
- 可以四处寻找最好的服务器
- Be intelligent: Agent acts on behalf of client when needed

### Problems

- 需要强大的移动设备: 必须在设备上安装移动代理平台
- 移动代理的自主操作的容错性
- 安全问题是主要障碍

