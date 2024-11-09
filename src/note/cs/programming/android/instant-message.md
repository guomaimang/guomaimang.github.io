---
article: false
date: 2024-11-09
index: true
order: 7
headerDepth: 1

---

# Instant Messaging

## Pull and Push

到目前为止，我们在网络编程中遇到的全部示例都可以被视为使用“拉取”方法。

- Communication is always initiated by the client
- 客户端在需要时从服务器“拉取”数据或服务（例如，当用户启动应用程序或按下按钮时）。

**HTTP** is a **pull-based** protocol

- 用户浏览网络并积极决定浏览哪个网站，跟随哪个链接等。
- 一种有效且经济的方式（每个用户选择他们需要的）
- 然而，如果某些资源被定期请求， pull mode 模型可能会给服务器带来沉重的负载

有些情况下，服务器希望与客户端（们）建立通信：

- 当新电子邮件到达时
- 当一个节点通过服务器向用户发送消息时
- 当应用程序/数据需要更新时

在这些情况下，服务器需要将数据或服务“推送”到客户端。这种情况下越来越常见，因为智能手机越来越受欢迎。

## Implementing Push

万维网，特别是HTTP协议，是为“拉”而设计的，要在网上实现“推”需要额外的工程实现。一些在网络上“模拟”推送的方法有

- Polling「轮询」 (periodic pull)
- Comet Model 「彗星模型」
- BOSH
- WebSockets

### Polling

客户端定期轮询服务器以检查是否有新消息或更新可用

**Advantages**

- Easy to implement
- No extra development on the server-side

**Disadvantages**

- Unnecessary network traffic generated
- Extra workload on the server

<img src="https://pic.hanjiaming.com.cn/2024/11/09/29adb2c711866.png" alt="1731146674274.png" style="zoom:33%;" />

::: info Examples

- Post-Office Protocol (POP) for email: 使用POP3协议的电子邮件客户端会定期向邮件服务器发送请求以检查新邮件
- RSS Feed Readers
  - RSS资源由HTTP提供服务，因此都是基于拉取的
  - RSS 提要阅读器定期轮询 RSS 服务器并检查提要的新更新

轮询可能会给服务器、客户端和网络带来沉重的负载。

:::

### Comet Model

Comet 模型（也称为反向 Ajax 或长轮询）是一种用于实现服务器到客户端的实时通信的技术。

- “Comet”是一个Web应用程序模型，用于实现允许服务器将数据推送到客户端（浏览器）的Web应用程序。
- 它允许服务器在数据可用时主动向客户端发送数据，而不是客户端定期轮询服务器。

Comet 应用程序的实现分为两大类

- Streaming
- Long-polling

#### Streaming

- A persistent connection is established between the browser and the server
- Data is sent from the server a **chunked block**
- 事件会逐步发送到浏览器（例如，使用 `<script>` 标签执行JavaScript命令）

<img src="https://pic.hanjiaming.com.cn/2024/11/09/147408e758f9a.png" alt="1731158919823.png" style="zoom:33%;" />

::: warning 提示

虽然 HTTP/2 支持服务器推送（Server Push）和流（Streams），但它仍然是基于 HTTP 的请求/响应模型的。

服务器推送允许服务器在客户端请求前预先发送数据，但这仍然需要一个初始的客户端请求。

- 流允许在单个 TCP 连接上并行处理多个请求和响应，但每个流仍然是基于请求/响应的。另一方面
- WebSocket 是全双工的，一旦连接建立，服务器和客户端都可以随时发送数据。

:::

#### Long-polling

- 请求从客户端发送到服务器
- 



























