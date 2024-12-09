---
article: false
date: 2024-11-30
index: true
order: 10
headerDepth: 1
---

# Asynchronous Tasks

## HTTP Request-Response Cycle

- 应用程序服务器仅在客户端发出**请求**时才执行工作
- 客户端在应用服务器完成其工作并返回响应之前等待响应
- HTTP请求-响应周期预计在短时间内完成（没有人喜欢等待！）

但并不是所有的任务都能在短时间内完成

因此，有必要在后台执行一些任务（即在HTTP请求-响应周期之外）

- 有很多场景下，后台任务都是必要的
- 考虑一个移动应用程序，当您共享新文件时，通知将发送给您的朋友

<img src="https://pic.hanjiaming.com.cn/2024/11/30/472ed6b728a69.png" alt="1732943957769.png" style="zoom:33%;" />

在HTTP响应-请求周期之外执行的任务被称为异步（非阻塞）任务

<img src="https://pic.hanjiaming.com.cn/2024/11/30/9e19011f99ba1.png" alt="1732944054020.png" style="zoom:33%;" />

实现异步任务的一个简单方法是在系统中安排在特定时间（以及定期）运行的“作业”。

例如：

- 更新系统中的各种计数器（例如，用户数量、帖子、消息）
- 生成用户推荐好友列表
- 根据电子商务网站中的用户反馈计算两种产品的相似度
- 从外部来源（例如新闻或天气信息）收集信息

## Regular Jobs - Cron

- Cron 是 Unix/Linux 系统中用于设置定期任务的调度器
- Type “**crontab -e**” to edit the configuration file (**cron table**)
- 配置文件中的每一行定义了一个单独的任务

<img src="https://pic.hanjiaming.com.cn/2024/11/30/af8aecd9d24b9.png" alt="1732944388209.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2024/11/30/fa9ec14b95adb.png" alt="1732944483268.png" style="zoom: 25%;" />

## Message Queues

### Limitation of Cron Jobs

Cron 用于安排周期性任务。然而：

- 发送到您的服务器的请求可能不会在时间上均匀分布
- 不是所有任务都能在特定时间内完成
- 将逻辑或负载均衡纳入执行一系列相关工作的过程中并非易事。

实现异步任务可能并不简单：

- 任务可能必须按顺序执行
- 可能会有很多并发任务
- 任务可能有不同的优先级
- 不同的任务可能需要不同数量的资源

我们需要一些“中间人”来帮助我们管理服务器应用程序和工人之间的任务/消息。

### How to?

**我们如何异步执行任务？这就像是在不同规模上的多线程/多进程**

在多进程处理中，我们创建一个消息队列，以便系统的不同部分可以相互通知任何更新

<img src="https://pic.hanjiaming.com.cn/2024/11/30/b611f8fd54ed5.png" alt="1732945292648.png" style="zoom:40%;" />

类似的消息队列可以在各个程序或组件之间使用

Message Queues

- 通过在应用服务器和服务之间有一个“经纪人”「**broker**」，我们实际上拥有一个更健壮的系统
- 将 HTTP 请求-响应周期从繁重的任务中解放出来
- 客户免受后台任务失败的影响
- 如果出现失败，broker可以确保再次提交任务进行重试

Asynchronous Message Queues

- 在 Python 应用程序中实现异步消息队列的一种流行方法涉及使用以下各项的组合：
  - Celery – 作为任务队列
  - Rabbitmq – 作为消息代理
  - Redis – 作为后端数据存储

## RabbitMQ

常用开源消息代理软件之一。一些功能包括：

- Delivery acknowledgement
- Clustering and queues mirroring
- 可在多种编程语言中使用的客户端库
- Management UI

使用 Rabbit MQ 作为消息代理时的架构（注意：以下组件不一定驻留在同一台机器上）

<img src="https://pic.hanjiaming.com.cn/2024/11/30/5e8d954d1313a.png" alt="1732947197905.png" style="zoom:33%;" />

### AMQP

RabbitMQ使用AMQP协议进行消息传递

- AMQP = **Advanced Message Queuing Protocol**
- 用于发送和接收消息的应用层协议
- Defines how messages are routed and stored in the broker
- 定义了客户端与服务器（代理）之间通信的方式

RabbitMQ 是一种通用消息代理，您可以使用不同的技术和语言（只要您使用 AMQP 协议）来实现生产者和消费者。

<img src="https://pic.hanjiaming.com.cn/2024/11/30/64779347ebd8b.png" alt="1732950784438.png" style="zoom:33%;" />

### Model

**A single queue with a single consumer**

<img src="https://pic.hanjiaming.com.cn/2024/11/30/14f1bade02e11.png" alt="1732948027871.png" style="zoom:33%;" />

**在多个工作人员之间分发消息**

- 简单地创建更多工人并让他们从同一个队列中消费
- RabbitMQ将按轮询方式向它们分发消息
- 一条消息将仅传递给一位消费者

<img src="https://pic.hanjiaming.com.cn/2024/11/30/c035852ce1ca1.png" alt="1732948082241.png" style="zoom:33%;" />

在某些情况下，我们希望将消息传递给所有消费者→发布/订阅模型

- 示例：监控某些统计数据（股价、天气状况等）的变化
- 当发生（在出版商处）某事时，需要采取多个动作（由订阅者执行）时很有用

### Exchanges

**Exchanges** -  A core concept in RabbitMQ

- 生产者通常将消息发送到交换器，交换器将根据其中定义的某种逻辑将消息分派到零个、一个或多个队列
- 进一步解耦生产者（们）和消费者（们）

<img src="https://pic.hanjiaming.com.cn/2024/11/30/69a838e01562a.png" alt="预览 2024-11-30 14.37.29.png" style="zoom:33%;" />

#### Direct Exchange

直接将路由消息发送到由路由键指定的队列

<img src="https://pic.hanjiaming.com.cn/2024/11/30/9a8cfd70a5881.png" alt="1732948731796.png" style="zoom: 50%;" />

#### Fanout Exchanges

- 将消息路由到绑定到交换器的所有队列
- Also known as the pub/sub model
- 在MMO游戏、体育新闻网站、群聊、股价更新等中很有用。

<img src="https://pic.hanjiaming.com.cn/2024/11/30/b13ed1567432d.png" alt="1732948799489.png" style="zoom:50%;" />

- 立即向所有队列广播消息（忽略路由键）
- 设置一个exchange，让exchange为多个消费者提交消息到多个队列

<img src="https://pic.hanjiaming.com.cn/2024/11/30/528e19e80c405.png" alt="1732948856721.png" style="zoom:33%;" />

#### Topic Exchanges

<img src="https://pic.hanjiaming.com.cn/2024/11/30/cc105066385a4.png" alt="1732950681504.png" style="zoom:33%;" />

- 路由消息到名称与路由键中给出的模式匹配的队列
- 在根据某些标准分发信息方面很有用，例如地理位置、按类别更新的新闻等。
- 消息也可以由交易所根据其“主题”进行路由，例如：

#### Headers Exchanges

基于报头字段中的属性进行路由消息，而不是基于路由键属性。

## Events vs. Commands

- 信息内容可以根据您的需求进行定制
- You can issue “**commands**”, e.g., “increment user’s number of likes”
- You can also issue “**events**”, e.g., “user_id=3 likes photo_id=5”

一般来说，发送“事件”消息（以使您的应用程序事件驱动）更好

- 事件可以被负责执行不同任务的工人消费
- 允许系统之间更好的隔离
- 不需要在您的应用程序中硬编码操作

::: info Message Queues in a Distributed System

消息队列在分布式系统中非常重要，原因有以下几点：

- 允许解耦不同组件并移除依赖
- 提高容错性。当一个组件失败时，其他所有组件可以继续与队列交互。
- 通过允许生产者、消费者以及队列本身独立增长，实现细粒度可伸缩性。
- 提高编写请求的性能，因为实际的写入操作可以由后台工作者以异步方式进行。

:::

## Celery

- 用Python编写的Python应用程序的分布式任务队列
- 它必须得到消息代理的支持（即 Rabbitmq）
- 允许异步任务的实施更深入地集成到您的Python应用程序中

Before you use Celery

<img src="https://pic.hanjiaming.com.cn/2024/11/30/f4ce748268f60.png" alt="1732953138461.png" style="zoom:33%;" />

After you use Celery

- 允许您通过在Python中简单地进行函数调用即可发送消息/调用异步任务
- Helps you manage your workers (e.g. restart them in case of a failure or if an exception is raised)

<img src="https://pic.hanjiaming.com.cn/2024/11/30/b7fe87f2cc0bc.png" alt="1732953194439.png" style="zoom:33%;" />

- 很多情况下，您只是想提交任务而不关心结果（例如用户喜欢一篇文章、用户对照片的评论等）
- 在其他情况下，您可能想跟踪任务的进度（例如，让用户了解上传文件的进度）
- 对于后一种情况，Celery需要一个“后端”存储来临时存储异步任务的状态
- 通常使用Redis（键值存储）作为后端

<img src="https://pic.hanjiaming.com.cn/2024/11/30/39e34f6b85822.png" alt="1732953249237.png" style="zoom:33%;" />

Celery Architecture

为了可扩展性，这些组件都可以设置在不同的机器上（Workers 应该指向同一个消息代理的 URI）

<img src="https://pic.hanjiaming.com.cn/2024/11/30/005c410cf0bd4.png" alt="1732953356056.png" style="zoom:50%;" />

## Case Study

考虑一个社交应用，其中用户可以成为彼此的朋友。常见的操作有哪些？

- 获取指定用户的朋友列表
- 获取两个指定用户常见好友列表
- 如果其他用户是他/她朋友的朋友，则推荐用户添加其他用户为朋友

直接存储友谊网络的一种简单方法是使用包含以下数据的集合：

<img src="https://pic.hanjiaming.com.cn/2024/11/30/054fba13e4f7c.png" alt="1732953451612.png" style="zoom:25%;" />

- 如何获取两个指定用户（例如 user_id = 1 和 user_id = 2）的共有好友列表？
  - 检索这两个用户的好友列表，然后在您的应用程序代码中找到这两个列表的交集
  - 通过将好友表与自身连接，执行复杂对象查询，并让数据库返回共同好友列表
- 无论如何，实时计算这个列表都不会很高效。同时，这个列表不太可能经常发生变化。

我们如何使用异步任务来提高这个功能的效率呢？

![1732953541697.png](https://pic.hanjiaming.com.cn/2024/11/30/ba3b887e61d95.png)

使用消息队列时请注意

- 如果要执行的操作比向代理发送消息消耗更多时间或资源，请使用异步任务
- 确保工作人员消费消息的速度比生产者生成消息的速度快
- 考虑信息的的重要性，并在必要时使用确认回复











