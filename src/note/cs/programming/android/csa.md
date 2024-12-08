---
article: false
date: 2024-12-08
index: true
order: 4
headerDepth: 1

---

# Client-Server Architecture

## Data Communication

使用某种形式的传输介质在两个设备之间交换数据

简化沟通模型：

![Typora 2024-12-08 19.35.02.png](https://pic.hanjiaming.com.cn/2024/12/08/7437afb7f0f8a.png)

Protocols: rules that govern how data is transmitted in this system

## Method of Communication

### Switching

当两台计算机需要通过网络进行通信时，我们需要知道如何将它们连接起来

<img src="https://pic.hanjiaming.com.cn/2024/12/08/c9c4f2bef39e4.png" alt="预览 2024-12-08 21.31.15.png" style="zoom:33%;" />

### Circuit Switching

- 当两台计算机需要相互通信时，在两台计算机之间建立专用通信链路（电路）
- 在通信之前，会建立一条专用电路，所有数据都必须通过这条路径传输

### Packet Switching

- 数据被分解成小块（数据包），并通过所有可能的路径通过网络发送到目的地
- 数据包在从源到目的地的传输过程中可以通过不同的路径，不建立专用电路

Advantages of Packet Switching

- 可以更有效地利用网络: 同一个链接可以被许多不同的连接共享
- More fault tolerant: 考虑交换机在通信过程中损坏的情况

## What are Protocols?

- 控制通信双方如何交互的一组规则
- 通信实体之间的协议
- 两个设备在通信时需要就共同协议达成一致。

一些协议应涵盖的问题

- 寻址方案的格式
- 我们如何指定数据流的开始和结束？
- 我们如何处理错误或数据丢失？
- 如何处理数据传输中的问题？

## Layered Architecture

The ISO OSI (Open System Interconnection) 7-Layer Model

- 计算机网络如何工作的理论模型
- 它将网络的不同功能组织成 7 个不同的层
- 它指定了不同层级和不同端点之间通信的接口。

<img src="https://pic.hanjiaming.com.cn/2024/12/08/8604944efed2a.png" alt="1733667119910.png" style="zoom: 55%;" />

<img src="https://pic.hanjiaming.com.cn/2024/12/08/e5d94dcb936c6.png" alt="1733667188933.png" style="zoom:50%;" />

## Client/Server Paradigm

### TCP/IP

TCP/IP协议族中定义了三种传输层协议

- User Datagram Protocol (UDP)
- Transmission Control Protocol (TCP)
- Stream Control Transmission Protocol (SCTP)
  - 新的可靠且面向消息的协议结合了UDP和TCP的最佳特性
  - For streaming applications (e.g. video streaming)

一个称为客户端的过程从另一个主机上的一个称为服务器的过程中请求服务。以下必须定义：

- 本地主机（源IP地址）
- 本地进程（源端口号）
- 远程主机（目的IP地址）
- 远程进程（目的端口号）

在客户端-服务器模型中，如果我们把客户端视为本地主机，那么服务器就是远程主机，反之亦然。

### Connectionless vs. Connection-oriented Protocol

Connectionless

- 发送方和接收方之间没有预先建立的连接
- 数据包未编号，可能顺序错乱
- 未确认已收到数据包
- 不可靠
- Uses UDP

Connection Oriented

- 发送者和接收者之间首先建立连接
- 具有传输层级的流量控制和错误控制
- Reliable
- Uses TCP or SCTP

### Characteristics of User Datagram Protocol (UDP)

- UDP是无连接和不可靠的
- 非常简单，使用最少的开销
- 更快、更高效，适用于许多轻量级或时间敏感的目的
- 适用于发送短消息的过程，不太关心可靠性
- 用于组播和广播
- Common network applications that use UDP:
  - Domain Name System (DNS)
  - Trivial File Transfer Protocol (TFTP)

UDP 数据包称为用户数据报，具有固定大小的 8 字节标头，包含 4 个字段：

- 源端口号：源主机上运行的进程使用的端口号（16位）
- 目的端口号：目标主机上运行的进程使用的端口号（16位）
- Length：16位字段，定义用户数据报、报头加数据的总长度（实际上与IP中的长度字段重复）
  UDP 长度 = IP 长度 − IP 标头长度
- Checksum: A checksum for the user datagram

### Transmission Control Protocol (TCP)

TCP: a stream-oriented protocol

- TCP 以字节流的形式传送数据，而不是独立的数据报
- 一大块数据被分成多个段，这些段彼此相关
- TCP 创建了一个环境，其中两个进程似乎通过一条假想的隧道连接起来

发送和接收过程可能不会以相同的速度写入或读取数据

- TCP 需要缓冲区来存储、流量控制和错误控制
- 实现缓冲区的一种方法是使用 1 字节位置的循环数组
- TCP 缓冲区大小是可配置的
  （例如，缓冲区大小 = 2 * 带宽 * 延迟）
  （最大可达兆字节）
- UDP没有缓冲区，队列长度相对较小

TCP delivers data as **segments**

- TCP为每个报文段添加一个报头（用于控制目的），并将该报文段传递给底层IP层进行传输
- 这些报文段被封装在IP数据报中并进行传输（整个操作对进程来说是透明的）

<img src="https://pic.hanjiaming.com.cn/2024/12/09/f4d12d44c81b6.png" alt="1733678312442.png" style="zoom:50%;" />

## Socket Programming

<img src="https://pic.hanjiaming.com.cn/2024/12/09/fac76786b1a7f.png" alt="1733678536265.png" style="zoom:50%;" />

### Ports

- 端口号是一个16位无符号整数（即0到65535）
- 端口号受到监管并分为 3 个不同的范围（由互联网号码分配机构 (IANA) 监管）
- 知名端口（0 - 1023）：已注册知名应用程序，例如：
  - 21: FTP
  - 80: HTTP
  - 443: HTTPS
  - 465: SMTPS
- 注册端口 (1024–49151)：为其他应用程序注册
- 已注册端口（1024-49151）：为其他应用程序注册
- 动态/私有端口 (49151–65535)：可供私有应用程序使用

### The Client-Server Model

- 许多网络应用程序遵循客户端-服务器模型
- 在这样的模型中，服务器持续运行以等待来自客户端的请求。

![1733678866511.png](https://pic.hanjiaming.com.cn/2024/12/09/e1eb1028f0cc5.png)

### 我们如何编写服务器程序？

- 创建一个套接字
- 将套接字绑定到地址和端口
- 聆听客户的要求
- 处理客户请求
- 将响应发送给客户端

### Network Programming

You can choose from TCP or UDP when developing your networking application

- 服务器和客户端必须使用相同的协议才能相互通信
- 网络编程中重要的类
  - **TCP**: ServerSocket, Socket
  - UDP: DatagramSocket, DatagramPacket

::: tip Some notes about this simple server program

- 它使用SocketServer类，这是一个用于创建使用TCP的服务器的类
- Socket.accept() is a “blocking” function
- 数据通过数据流（而不是数据包）接收和发送
- 客户端和服务器地址可以通过使用提取。
- Client and server address can be extracted by using
  `getRemoteSocketAddress` and `getLocalSocketAddress`
- It can only serve one client, (once the request is processed, the server is closed)

:::

### 我们如何编写客户端程序呢？

<img src="https://pic.hanjiaming.com.cn/2024/12/09/1a92ac00e4a35.png" alt="1733679223871.png" style="zoom:45%;" />

使用UDP

- 在UDP中，数据以数据包的形式发送
- 在将数据发送到服务器之前，您必须将数据打包在数据报包中
- 有可能在传输过程中数据包被“丢弃”，客户端收不到任何响应
- Packet size should not be too large (up to 65508 bytes)
- 如果您发送多个数据包，它们可能会乱序到达
- 关于客户端大小，您可能需要处理以下错误：
  - 超时（服务器一段时间没有响应）
  - 从另一台服务器收到数据包
  - 数据包顺序到达异常

## Multi-threading

- 程序中的命令和操作是按顺序执行的
- 您在程序中编写的大多数命令和操作都是“阻塞”或“同步”的
- 这意味着必须先完成一个命令，然后才能执行另一个命令。

如果为客户端提供服务的操作非常耗时，则会出现问题，例如：

- 从数据库中检索大量数据
- 读取和写入文件（I/O操作）
- 大量计算（例如对数据进行排名和排序）

Thread: Multi-threading and Concurrent Programming

- 一个程序或应用可以被称为一个进程
- 线程是“轻量级进程”，它们在“同一”时间（并行运行）在进程内执行不同的操作
- CPU将处理时间分配给不同的进程以及进程内的不同线程。
- 每个进程至少有一个线程（主线程）

使用多线程的原因

- 提高了吞吐量：单个进程中包含许多并发计算操作和I/O请求。
- 轻量级：与单独进程之间的切换相比，多线程最大限度地减少了上下文切换所需的时间。
- 改进的服务器响应速度：大或复杂的请求或慢速客户端不会阻塞其他服务请求。服务器的整体吞吐量大大提高。
- 程序结构简化：可以使用线程简化复杂应用程序的结构，例如服务器级和多媒体应用程序。可以为每个活动编写简单的例程，使复杂程序的设计和编码更加容易，并能更好地适应用户需求的广泛变化。

## Coroutines

### Kotlin Coroutines

- Kotlin 引入了一种编写异步、非阻塞代码的新方法；协程。
- 与线程类似，协程可以并发运行、等待并相互通信，不同之处在于创建它们的成本远低于线程。
- 与线程不同，协程不直接映射到本机线程。相反，它们由 Kotlin 运行时管理，可以挂起和恢复，而不会阻塞底层线程。

```kotlin
delay(1000L);          // only delay the current coroutine
Thread.sleep(1000L);   // delay the current thread
```

协程相对于线程的优点

- 结构化并发：协程提供了一种管理并发的结构化方法，使得处理复杂的异步操作更加容易。简而言之，协程不需要回调结构。
- 轻量级：与线程相比，协程是轻量级的，因为它们不需要创建和管理额外的系统资源。这使得协程在内存使用方面更加高效。
- 挂起和恢复：协程允许在特定点挂起和恢复执行，使得在不阻塞主线程的情况下处理长时间运行的任务变得更容易。这有助于保持UI的响应性，并提升整体用户体验。
-  Jetpack 集成：协程提供内置的异常处理机制，使得在协程上下文中处理和传播异常变得更加容易。
- 与 threads for coroutines 不同，应用程序默认情况下不会等待其完成执行

Before

<img src="https://pic.hanjiaming.com.cn/2024/12/09/cd8f73ea74976.png" alt="1733680728992.png" style="zoom:50%;" />

### Basics of Coroutine

- 作用域生成器：协程作用域用于声明您自己的作用域。与挂起和释放底层线程不同。
- 显式作业：启动协程构建器返回作业对象，其任务是显式等待子协程完成。 Job 充当队列中协程的句柄。
  - **Job** – 对具有多个状态和最终完成的生命周期的可取消工作流程进行建模
- 挂起功能：挂起功能是指可以暂停然后稍后继续执行的功能，它们可以在协程内部使用，也可以使用其他挂起功能。

### Coroutines Dispatcher

Dispatcher – 确定相应的协程使用哪些线程进行执行。使用调度器，我们可以将协程执行限制在特定线程，将其调度到线程池，或者让它无限制地运行

- **Default Dispatcher**: (Dispatchers.Default): CPU-intensive work
  - 它由一个线程池支持，线程的数量通常等于CPU核心的数量。
- **Main Dispatcher**（Dispatchers.Main）：UI相关任务
  - 它确保协程在主/UI 线程上运行，从而可以安全地更新用户界面。
- **IO Dispatcher** (Dispatchers.IO)：I/O 绑定任务，例如网络或数据库操作。
  - 它使用更大的线程池来处理可能更高数量的并发 I/O 操作。
- **Dispatcher** – 确定相应协程使用哪个或哪些线程来执行。使用调度程序，我们可以将协程执行限制到特定线程，将其调度到线程池，或者让它不受限制地运行
- **Unconfined Dispatcher** (Dispatchers.Unconfined): execution on multiple threads
  - 此调度器在调用线程中运行协程，直到第一个挂起点。挂起后，它在适当的线程中继续执行，这可能与原始调用线程不同。

## Processes and Threads in Android

在Android中，一个应用程序的所有组件都在同一个进程和线程（主线程）中运行。

- 应用程序的执行线程负责绘制布局，处理用户输入，因此也被称为UI线程。
- 不应在UI线程上执行长时间操作
- 如果UI线程被阻塞几秒钟，将出现“应用程序无响应”（ANR）对话框
- 此外，其他线程不应操作UI

为Kotlin引入的协程可以在Android中使用，然而，必须遵循两条规则：

- 任何时候不要阻塞UI线程（主线程）
- 不要从主线程以外的线程访问UI组件

为了使其“线程安全”，在协程内部，始终请求主线程更新UI。

Example: GET and POST Requests with Coroutines













