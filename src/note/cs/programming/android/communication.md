---
article: false
date: 2024-11-30
index: true
order: 11
headerDepth: 1

---

# Communication

## WebSocket

到目前为止，我们在网络编程中遇到的全部示例都可以被视为使用“拉取”方法。

- 通信始终由客户端发起
- 客户端在需要时从服务器“拉取”数据或服务（例如，当用户启动应用程序或按下按钮时）

![1732953843243.png](https://pic.hanjiaming.com.cn/2024/11/30/e8441296b4064.png)

### Limitations of HTTP

- **HTTP** is a **pull-based** protocol
- 用户浏览网络并积极决定浏览哪个网站，跟随哪个链接等。
- 一种有效且经济的方式（每个用户选择他们需要的）
- 但是，如果定期请求某些资源，拉取模型可能会给服务器带来沉重的负载

### Characteristic

- HTTP是半双工的：一次只能有一方发送数据，就像使用对讲机一样
- WebSocket 是一种协议，它通过 TCP 连接在两台计算机之间提供全双工通信通道。
- 设计用于在 Web 浏览器和 Web 服务器中实现
- Supported since IE 10, Firefox 11, Chrome 16, Safari 6, Opera 12.10, Android Browser 4.4.

浏览器（或移动应用）与服务器之间持久的连接，双方可以随时向对方发送数据

- 更低的延迟（避免 TCP 握手）
- 开销较小（每条消息仅 2 个字节）
- 减少不必要的通信（仅在需要时发送数据）

WebSocket是HTML5标准的一部分

- 主要 Web 浏览器的最新版本支持
- JavaScript 中的简单 API
- iOS 和 Android 上也提供了库

当您想要开发以下应用程序时特别有用：

- 实时多人游戏
- Chatrooms
- Real-time news feed
- Collaborative apps (e.g. consider something like Google Documents)
- Live commenting

Once the handshake is completed:

- 初始 HTTP 连接将被 Web Socket 连接替换（使用相同的底层 TCP/IP 连接）
- 客户端和服务器现在都可以开始向对方发送数据
- 数据以帧的形式传输
  - 一旦收到所有帧，消息（有效负载）将被重建
  - 由于建立了 Web Socket 连接，因此传输消息时产生的开销会少得多

### Design Principles

- TCP 之上的附加层
- 启用客户端和服务器之间的双向通信
- 支持低延迟应用程序，无需 HTTP 开销
- 基于Web起源的浏览器安全模型
- 支持多个服务器端端点

## socket.io

一个基于 Node.js 的库，用于服务器和一个或多个客户端之间的实时双向通信

- 使用WebSocket进行数据通信（当WebSocket不受支持时，回退到较旧解决方案）
- 最初是为服务器端的 Node.js 和客户端的 Java 脚本编写的，现在有适用于 Python、Android 和 iOS 的库

socket.io has two parts: 1) **Server** and 2) **Client**

- 客户端库可在JavaScript（Web）、Android和iOS中使用。
- 允许您跨多个平台构建实时应用程序

Socket.io 是事件驱动的

- 连接后，服务器和客户端可以通过触发或“发出”事件来相互通信
- 创建回调函数以在发生某些事件时执行不同的操作

Socket.io：服务器端程序流程图

<img src="https://pic.hanjiaming.com.cn/2024/11/30/2b4a0c3fea9a5.png" alt="1732956723721.png" style="zoom:33%;" />

## Events

- 服务器和客户端都可以生成事件，如果对方有该事件的处理程序，则将调用该处理程序来执行一些操作
- 在FastAPI-SocketIO中，有几种不同类型的事件
  - **Special events** (‘connect’, ‘disconnect’, ‘join’, ‘leave’)
  - **Unnamed events** (‘message’ or ‘json’)
  - **Custom events** (a name of your choice, e.g. ‘my event’)

## Authentication & Authorization

您很可能希望您的用户在您的应用程序中创建一个帐户，并登录以使用其服务

理由：

1. 有必要；您的应用程序可能需要唯一地标识每个用户
2. 跟踪用户对应用程序的使用情况
3. 允许用户在不同设备上检索数据
4. 呈现更加个性化的信息和服务

User Authentication: 隐私和安全问题的最佳实践

- 不要将密码明文存储在数据库中，在从应用程序发送之前用盐对其进行哈希处理（例如使用 MD5 或 SHA1 或更安全的密码）
- **Do not store** user password in the device
- Use **HTTPS** whenever possible
- 在将用户的输入发送到服务器之前验证用户的输入（例如电子邮件和密码）
