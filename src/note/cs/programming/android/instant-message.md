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

Streaming（HTTP 流式返回）支持客户端发送一个请求，然后服务器通过该连接持续发送多个响应 （一次请求，多次响应）。

这种技术允许服务器在同一连接上连续地发送数据更新，而无需客户端反复发送新的请求。这种机制在需要实时数据推送的应用中非常有用。

- A persistent connection is established between the browser and the server
- Data is sent from the server a **chunked block**
- 事件会逐步发送到浏览器（例如，使用 `<script>` 标签执行JavaScript命令）

<img src="https://pic.hanjiaming.com.cn/2024/11/09/147408e758f9a.png" alt="1731158919823.png" style="zoom:33%;" />

这种方法可以实现几乎实时的通信，但在处理 Comet 场景下的长时间打开的连接时可能会遇到一些挑战，例如连接超时和内存管理问题。

#### Long-polling

- 请求从客户端发送到服务器
- 服务器保持连接，直到某些事件发生，然后响应发送回客户端
- 客户端在收到响应后，立即向服务器发出另一个请求
- （通常使用Ajax实现）

<img src="https://pic.hanjiaming.com.cn/2024/11/10/0d2aec06f6c29.png" alt="1731172410517.png" style="zoom:50%;" />

这相当于服务器与每个客户终端打开至少一个 TCP 连接。

### BOSH

BOSH 代表双向「Bidirectional」 - 通过同步「Synchronous」 HTTP 传输

- 它利用 HTTP 长轮询
- 建立单个TCP 连接，接收服务器推送的数据
- 如果不需要推送数据，服务器发送一个空的 `<body/>`消息
- 如果客户端需要向服务器发送数据，将使用第二个套接字来发送HTTP POST请求
- 然后，新旧连接将交换角色（此后新连接将用于长轮询）

Example

假设我们正在开发一个实时聊天应用，需要实现服务器向客户端推送新消息的功能。在聊天应用中，服务器需要实时向客户端推送新消息，而客户端也需要向服务器发送消息。为了实现这一点，我们可以使用BOSH协议。

BOSH协议允许双向通信，并且利用HTTP长轮询技术，可以确保客户端和服务器之间的连接始终保持活跃，适合实时聊天应用的需求。

1. **客户端初始化连接**：客户端向服务器发送一个HTTP请求，建立一个TCP连接。
2. **服务器保持连接**：如果服务器没有新消息，保持连接打开，直到有新消息或连接超时。
3. **服务器推送消息**：当有新消息时，服务器通过已建立的TCP连接推送消息给客户端。
4. **客户端发送消息**：客户端使用第二个套接字发送HTTP POST请求，将消息发送到服务器。
5. **连接角色交换**：每次数据传输后，旧连接和新连接交换角色，新连接用于之后的长轮询。

### WebSocket

相比于 Comet，WebSocket 更加高效，适用于各种实时应用场景。

### XMPP

![1731176303711.png](https://pic.hanjiaming.com.cn/2024/11/10/3bda209437769.png)

- XMPP是“可扩展消息与状态协议” 「Extensible Messaging and Presence Protocol」的缩写
  - 这意味着XMPP是一种协议，允许用户发送和接收消息，并查看其他用户的在线状态。
  - 可扩展性意味着这个协议可以根据需求进行扩展和定制。
- XMPP最初被称为Jabber，这是一个用于实时和即时消息传递的开源项目。
- XMPP使用的是客户端-服务器架构，而不是点对点（P2P）架构。
- XMPP采用去中心化和联邦模型
  - 这意味着它没有一个中央服务器，而是由多个不同域的服务器组成。
  - 每个域都有自己的服务器，这些服务器可以互相通信。
- 每个用户连接到一个公共的XMPP服务器，该服务器会将用户的消息中继到其他域的用户。这种方式确保了消息可以在不同域之间传递。

## Mobile Push

“推送”是移动设备上的一个重要功能，因为它允许用户在不主动打开应用的情况下接收更新或消息。

在两个流行的移动平台上，推送都是通过各自对应的服务来实现的：

- IOS：Apple Push Notification Service (APNS)
- Android: ~~Google Cloud Messaging (GCM) (**deprecated**)~~ , Firebase Cloud Messaging (FCM)

一般来说，移动设备上的推送是使用以下架构来实现的

- 在移动设备和推送服务器之间建立了一个持久的TCP连接。
- 应用程序请求推送服务器在必要时向客户端推送消息。

![1731176511014.png](https://pic.hanjiaming.com.cn/2024/11/10/7447b8ee5ce61.png)

Google 和 Apple 提供的推送通知服务是向应用程序推送消息的标准化方式

然而，这不是唯一的方法：

- 它可以用作一种信号形式（更新请求、短期通知等）
- 你的应用仍然可以实施自己的通信协议，用于与对等节点和服务器交换数据
- 部分手机厂商有自家的 Push 渠道，如小米的 Mi Push。

## Firebase Cloud Messaging 

(FCM)

Firebase（ https://firebase.google.com/ ）是一个平台和一系列支持构建移动应用的工具。它包括实时数据库、身份验证、推送通知、广告、使用分析等。

### FCM Architectural Overview

<img src="https://pic.hanjiaming.com.cn/2024/11/10/92ef573145d30.png" alt="1731218508157.png" style="zoom: 33%;" />

### Notification vs. Data Messages

With FCM, you can send two types of messages to clients:

- 通知消息，有时被称为“显示消息”。这些消息由 FCM SDK 自动处理。
  - （后台应用程序）通知消息将发送到通知托盘。
  - （前台应用程序）通知消息由回调函数处理。
- 数据消息，由客户端应用程序处理。
  - （后台或前台的应用程序）客户端应用程序在回调函数中接收数据有效负载。

<img src="https://pic.hanjiaming.com.cn/2024/11/10/0d9d2e2a75c40.png" alt="1731218871818.png" style="zoom:50%;" />





