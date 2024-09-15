---
article: false
date: 2022-12-04
order: 5
headerDepth: 1

---

# Mobile APP Architectures

基于 移动客户端 - 服务器模式 的移动计算应用体系结构类型

瘦客户端

- 需要与网络持续连接
- 使用微浏览器来显示信息
- 通常用于信息服务应用程序

智能客户端

- 结合移动数据库技术进行持久性数据存储
- 允许离线访问重要数据
- 将本地数据与企业系统进行同步
- 最适用于 "偶尔连接 "环境中的应用

## Thin Client

瘦客户端（无线互联网）应用使用与互联网应用相同的架构

- 业务逻辑和企业数据都存储在服务器上
- 客户端是一个带有互联网浏览器的移动设备，称为微浏览器「Microbrowser」
  - 微浏览器提供有限的用户界面和功能
  - 客户端设备上不需要其他软件
- 与有线互联网应用的区别在于如何将信息传输给终端用户。

<img src="https://pic.hanjiaming.com.cn/2022/12/04/96e05681661dc.png" alt="1670160693926.png" style="zoom:33%;" />

::: note Components

- Microbrowser client
- Wireless network
- Wireless gateway
- Server
- Back-end system

:::

### Microbrowser Client

无线设备有一个预装的微浏览器，其操作类似于桌面互联网浏览器。

- 浏览器使用一个URL地址来联系指定的无线网络服务器
- 浏览器解析包含标记语言的响应，并将结果显示给用户

有各种各样的微浏览器和标记语言被使用：不同的微浏览器有自己独特的方式来浏览应用程序

::: tip 实现

相当于APP内嵌套 Webview。

:::

### Wireless Network

瘦客户机应用程序向服务器发送请求（和从服务器接收数据）需要无线网络连接。

- 每个请求都通过无线网络传到无线网关，后者将请求转发到服务器。
- 瘦客户端应用程序要求必须一直保持与服务器的连接。

微浏览器负责处理与无线网络的通信。

- 开发人员不需要知道底层「underlying」无线网络如何工作，可以专注于应用逻辑
- 这是一个显著的优势，因为有大量的无线网络协议正在被使用

### Wireless Gateway

当无线网络不是基于 Internet 协议时，基站包含一个网关，可以转换请求并将其作为超文本传输协议 (HTTP) 发送到 Web 服务器。

- 网关作为无线和有线网络之间的桥梁
- 它由无线网络供应商托管（在一个基站中）。
- 它允许瘦客户端应用程序通过同一入口访问互联网服务和数据。

::: info 网关功能

- 转换不同的协议:  wireless protocol ↔ IP, WAP ↔ HTTP, HTML ↔ WML etc.
- 优化「Optimize」通信流
- 向无线客户端推送「push」信息
- 增强安全性「security」

:::

### Server

Web servers

- Listen to the incoming HTTP request
- 从企业数据源中收集内容，并为客户适当格式化数据
- Send response back to the client

Wireless application servers

- 通常位于企业内部
- 提供应用逻辑「logics」和核心功能

### Back-end System

- Provide enterprise data source
- 允许Web服务器和应用服务器使用 首选「preferred」/标准「standard」 访问机制「mechanisms」访问企业数据源

::: tabs 

@tab Advantages

**瘦客户端优点**

- 将互联网计算应用扩展到移动环境
- 需要最少到零的软件部署
  - 无需任何额外的客户端配置即可部署应用程序
  - 整个配置、适应和更新只发生在服务器上
- 保持最新数据: 所有的数据都是最新版本，没有陈旧的数据。
- 提供高度的数据安全性: 所有数据都存储在公司防火墙后面的服务器上，没有数据存储在客户端

@tab Disadvantages

**瘦客户端缺点**

- 需要持久的无线连接：当用户在不同地点之间移动时，很难保持持久的连接性
- 应用性能受网络条件的影响很大：通过无线网络传输「transferred」的每个请求都会受到网络吞吐量「throughput」和延迟「latency」的影响。
- 可用性：如果在服务器端出现问题，所有的用户将被阻止。
- Application testing is difficult
  - 在所有的微浏览器上测试应用程序是困难的。
  - Emulators「模拟器」 不能准确代表最终用户的体验，因为它不是通过无线网络执行的。

:::

## Smart Client

智能客户端应用程序允许用户即使在与网络断开连接时也能访问数据

- 在客户端设备上开发的应用软件代替了微浏览器，即使在无法连接网络的情况下也可以使用。
- 通过将应用软件部署到设备端，客户端应用程序可以有一些 "智能"（业务逻辑）来处理数据。
- 应用软件结合了移动数据库技术，为企业系统提供持久的数据存储管理和数据同步。

<img src="https://pic.hanjiaming.com.cn/2022/12/04/62287d5a0200b.png" alt="1670162564319.png" style="zoom:50%;" />

::: note Components

- Smart client
- Wireless networks
- Synchronization server
- Back-end enterprise system

:::

### Smart client

智能客户端应用程序在客户端运行

- 为终端用户提供丰富和定制的用户界面
- 客户端应用逻辑决定了客户应用的行为方式
  - 应用程序从哪里获得数据（从本地存储或服务器）
  - 数据如何在设备上呈现、处理和存储
  - 哪一组数据被送回企业系统进行同步「同步」
- 拥有持久的数据存储，在本地存储数据，以提供离线数据访问
- 持久性数据存储是智能客户端设备的一个关键组成部分
  - 在设备上本地存储应用程序的数据
  - 在没有无线连接的情况下提供快速、可靠的数据访问
- 通过无线连接与同步服务器进行通信

### Synchronization Server

Interface to the client application

- 接收来自客户端应用程序的数据
- 支持断开连接的操作
- 确保传输的数据量最小
  - 数据可以以各种格式发送
  - 客户端和服务器都知道如何破译「decipher」传输的数据。

Synchronization logic

- 确定如何处理「manipulate」数据，例如，数据子集「subsetting」、数据转换「transformation」、数据压缩「compression」等
- Detect and resolve data conflicts
  - 只需将更新的内容，应用于数据存储或
  - 执行复杂的行动以检测和解决冲突

与后端数据源整合：使用标准DBMS提供对企业数据源的访问

智能客户端应用程序需要数据同步

- 什么是数据同步「synchronization」：应用数据如何在移动设备和后端企业系统之间进行同步
- 为什么智能客户端应用程序需要数据同步：为了确保客户端和服务器上相同数据的不同副本之间的一致性
  - 将数据从移动设备备份到服务器
  - 从/到移动设备更新数据
  - 将更新从服务器传播到所有移动设备
- 在哪里执行数据同步？
  - 大部分是在同步服务器上执行
  - 智能客户端需要知道某些同步知识，如同步服务器的位置、要同步的数据等。

::: tabs 

@tab Advantages

**Smart Client Advantages**

- Offline data access：即使在没有无线网络的情况下，用户仍然可以访问和修改应用数据。这克服了瘦客户机架构的限制
- Performance：性能是已知的，由处理器速度、数据访问等决定。
- Distributed computing: 在客户端执行和处理数据可以减少服务器的负载
- Security：在客户端和服务器端控制用户数据，不涉及第三方系统

@tab Disadvantages

**Smart Client Disadvantages**

- Application deployment: 由于应用程序需要被部署到移动设备上，应用程序的部署和管理成为负担
- Development complexity: 为具有不同移动操作系统的各种移动设备开发应用程序是困难的
- Security risk: 移动操作系统向病毒敞开大门

:::

## Summary

- Three mobile computing models are introduced：**Mobile client/server, mobile P2P, mobile agent**
- Two three-tier models for mobile C/S model：**Client/agent/server, client/intercept/server**
- Two mobile application architectures are described: **Thin client, smart client**
