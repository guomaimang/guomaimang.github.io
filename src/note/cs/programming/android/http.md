---
article: false
date: 2024-12-09
index: true
order: 5
headerDepth: 1


---

# Use HTTP

## HTTP Base

Hypertext Transfer Protocol (HTTP)

- 用于通过 Internet 传输超文本和其他文件格式的应用程序协议
- 当前广泛使用的版本：HTTP/1.1（1997年标准化）
- HTTP/2 规范于 2015 年 5 月作为 RFC 7540 发布
- 客户端（例如 Web 浏览器）向 URL 发送 HTTP 请求
- 服务器准备并返回请求的资源

An HTTP request has the following components

- URL – the unique identifier of the online resource
- Method/Verb – the action of the request (e.g. GET something?)
- HTTP Version – the version of the protocol you are using
- Headers – the metadata of the reques
- Body – Data to be sent to the server

### Uniform Resource Locator (URL)

- 特定类型的URI（统一资源标识符）
- 它意味着访问资源的方式

Syntax of a URL:

![1733684960284.png](https://pic.hanjiaming.com.cn/2024/12/09/6c05a72b6be0e.png)

### HTTP Request Methods

回想一下，HTTP 是一种文本协议（即使用 HTTP 发送的所有内容都假定为字符）

如果要发送文件（二进制数据），需要先对二进制数据进行编码后再发送

In an HTML form, set `enctype="multipart/form-data"`

```html
<form method="post" enctype="multipart/form-data">
    <input type="text" name="name">
    <input type="file" name="file">
    <input type="submit" value="Send!">
</form>
```

设置 `enctype="multipart/form-data"`告诉服务器，数据被分成多个部分，每个文件一个，再加上一个用于表单体中的文本数据。

### HTTP Headers

标头包含有关请求/响应的元数据，例如：

- 客户身份
- 内容类型（例如：纯文本、HTML、CSS、图片）
- Encoding of the content (e.g. ASCII, utf-8)
- Expiry date/time of the content
- Cookies
- 安全策略 CSR
- Some of the **response header** “keys”
  - Content-Length: length of the content of the resource
  - Content-Type: format of the resource
    (e.g. text/html)
  - Last - Modified：资源最后一次更改的时间
  - 服务器：为资源提供服务的 Web 服务器的名称

### HTTP Status Code

HTTP 状态代码包含在 HTTP 响应中以指示 HTTP 请求的结果

HTTP状态码的不同类别：

- 1XX: Informational
- 2XX: Successful
- 3XX: Redirection
- 4XX: Client-side error
- 5XX: Server-side error

### HTTP is a Stateless Protocol

- 服务器不会在请求之间保留有关客户端的信息
- 每个请求都被视为独立的
- 服务器端不存储会话信息

## Data Communication

如何在Android中对Web服务器执行HTTP请求？

- 首先需要在AndroidManifest.xml文件中请求权限
- 使用 `HttpURLConnection` HTTP 客户端执行HTTP 请求
- 注意：HTTP 请求还有很多替代方案，例如默认 HTTP 客户端（已弃用）、Ok HTTP、Ktor、Retrofit、Multiplatform（均为第三方）。

### HttpURLConnection

- **HttpURLConnection** can be used to perform both GET and POST actions
- Data is returned in the form of **InputStream**
- 根据数据的数据类型（例如图像、文本、文件等），需要将数据解码为适当的格式

For HTTP server, you need to trust the site,

Add a network security configuration file for POST method on http:

- Create a network_security_config.xml under res\xml
- Add a path of the file to the AndroidManifest.xml

## Exchanging Data

在应用程序编程中，我们通常不会请求网页。相反，我们从服务器请求数据，例如：

- List of latest news (news app)
- History of conversation (instant messaging app)

为了交换结构化数据，我们需要有一个通用的数据格式，常见的数据交换格式包括：

- XML (Extensible Markup Language)
  - Using different tags (e.g. `<title></title>`) to give meanings to the
    data
  - 可能导致数据长度显著增加
- JSON (JavaScript Object Notation)
  - JavaScript对象以字符串编码，可以处理多种数据类型，如字符串、数字、布尔值和数组。
  - 相比XML更紧凑，但仍易于人类阅读

## Checking Availability of Network

- 在使用网络进行数据通信之前，首先检查网络的可用性是一个好习惯。
- 在手机上，网络可能不稳定
- 用户可能已关闭数据传输，或切换到飞行模式
- 通过检查网络可用性，您可以在执行任何网络操作之前先提示用户

为了能够检查网络状态，您需要在 `AndroidManifest.xml`文件中请求以下权限

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## HTTP Servers

### What are HTTP Servers?

- 它持续监听特定端口（默认=80）的传入连接。
- 它处理HTTP请求并以HTTP响应的形式发送回复。
- 它解析请求并在必要时将请求发送给其他处理。例如，当需要动态内容时。

A simple HTTP Server’s Pseudo-code

![1733687113563.png](https://pic.hanjiaming.com.cn/2024/12/09/7bb495e4b7405.png)

之前的简单服务器是一个单线程服务器的例子。

- 对于 Web 应用程序/服务，它通常不仅仅是从磁盘提供静态文件。
- 执行业务逻辑、更新数据库、写入日志是常见的操作。
- 单线程的HTTP服务器无法同时处理许多客户端。

Other approaches

- Create a new **process** to handle a new request
- Create a new **thread** to handle a new request
- 预先创建一个工作者池（进程或线程），以处理新的请求
- **Event-driven**

### Nginx Web Server

- Pronounced “engine X”
- 一个“强聚焦于高并发、性能和低内存使用”的Web服务器
  - 使用事件驱动（异步）方法处理HTTP请求
  - 避免等待阻塞的系统调用（例如，从套接字读取，从内存或磁盘中的文件读取）
- 增加功能，如带缓存的反向代理、负载均衡，以及支持其他新协议，如SPDY或WebSockets

## Serving Dynamic Content

运行主要包含静态内容的网站，只需要一个Web服务器即可。然而，构建应用程序或服务需要更复杂的后端逻辑，并且通常需要动态生成内容。您还需要一个应用服务器。

HTTP服务器将向应用服务器发送请求，以执行计算或检索动态内容。

![1733770747642.png](https://pic.hanjiaming.com.cn/2024/12/10/11fc84c10e924.png)

### Common Gateway Interface (CGI)

- 外部应用程序与Web服务器接口的标准协议
- CGI程序是在Web服务器机器上运行的可执行程序
- CGI程序通常返回动态构建的HTML页面

典型例子：

- 访客计数器（显示页面的访客总数）
- 博客（获取最新博客文章）

![1733770917563.png](https://pic.hanjiaming.com.cn/2024/12/10/862ae9d05b9ac.png)

Limitations of CGI

- 对于调用 CGI 程序的每个请求，都会创建一个新进程，该进程将在执行结束时终止。
- 因此，CGI易于实现，但效率不高且不可扩展。
- 启动和终止进程的开销可能很大（当工作负载高时，操作系统需要做很多工作）
- 例如，想象CGI程序需要从磁盘加载一个巨大的字典以执行单词翻译

其他方法

- 为了减少启动和终止程序的开销，程序应托管在服务器应用程序中，保持一个持久进程始终运行并准备好处理请求。
- 一些例子包括Apache的mod_php或mod_python，FastCGI，SCGI，Python的WSGI，Python的ASGI

![1733771065579.png](https://pic.hanjiaming.com.cn/2024/12/10/b0bbb583ec4af.png)

### Web Server Gateway Interface (WSGI)

- 指定服务器和应用程序通信的接口
- 如果一个应用程序按照规范编写，它将能够在根据同一规范开发的任何服务器上运行。
-  使用WSGI接口的应用程序和服务器被称为“WSGI兼容”

Why WSGI?

- Web服务器无法运行Python应用程序
- 对于Apache，有一个名为mod_python的模块，它使Apache能够执行Python代码, 但 不再积极开发
- 因此，Python 社区提出了 WSGI 作为 Python 网络应用的标准接口

然而，WSGI存在一些问题...

- 对异步WSGI服务器的尝试，但仍然坚持请求/响应方法，以及可能存在一些其他问题，例如HTTP服务器重新发明，边缘情况处理，安全问题等。
- 异步编程的复杂性和学习曲线引入了新的挑战和代码中的错误。

### Asynchronous Server Gateway Interface (ASGI)

- Uses the event messages approach, instead of the request/response approach
-  Intended to handle HTTP/2 and WebSockets
- 没有策略执行点（PEP），它是安全框架中强制执行访问控制策略的组件

WSGI/ASGI

![预览 2024-12-10 03.13.19.png](https://pic.hanjiaming.com.cn/2024/12/10/39241dd21b360.png)

### Servers vs Applications

为什么我们有服务器和应用程序？

 It is an example of decoupling:

- 应用侧重于如何完成任务（例如，业务逻辑、更新数据库、提供动态内容等）。
- 服务器专注于如何路由请求、处理并发连接、优化计算资源等。
- 作为一名应用程序开发者，您可以专注于开发功能和特性，无需担心如何与Web服务器进行接口

### Communication between the Application and the Server

当一个新的请求到达WSGI服务器时：

- 服务器调用应用程序中相应的函数
- 参数通过环境变量传递给应用程序
- 服务器还向应用程序提供了一个回调函数
- 应用程序处理请求
- 应用程序使用服务器提供的回调函数将响应返回给服务器

![1733773228134.png](https://pic.hanjiaming.com.cn/2024/12/10/fd9bdfc3219c9.png)

::: tip Python Application Server

- **Nginx** as the HTTP server
- **Uvicorn** as a ASGI server
- **Python** as the programming language
- **FastAPI** as the Web framework

:::

## REST API

REST API 是一种应用程序编程接口 (API)。

- API是一组用于构建和集成应用程序软件的定义和协议集合。
- REST API遵循REST架构风格的设计原则。
- REST是表示状态转移的缩写，是一组关于您应该如何构建Web API的规则和指南。

REST Architectural Style

1. 由客户端、服务器和资源组成的客户端-服务器架构，通过HTTP管理请求。
2. 无状态客户端-服务器通信，意味着在获取请求之间不存储客户端信息，每个请求都是独立且不相连的。
3. 可缓存的简化客户端-服务器交互的数据。
4. 一个分层系统，组织每种类型的服务器（负责安全、负载均衡等），涉及将请求的信息检索到对客户端不可见的层级中。
5. 按需代码（可选）：在请求时从服务器发送可执行代码到客户端的能力，扩展客户端功能。
6. 组件之间有一个统一的接口，以便信息以标准形式传输。这需要：
   1. 请求的资源是可识别的，并且与发送给客户端的表示是分开的。
   2. 资源可以通过客户端通过他们接收到的表示进行操作，因为表示中包含足够的信息来这样做。
   3. 客户端返回的自我描述消息包含足够的信息来描述客户端应该如何处理它。
   4. 超文本/超媒体可用，意味着在访问一个资源后，客户端应该能够使用超链接找到他们可以采取的所有其他当前可用操作。

## Uvicorn

![1733774195605.png](https://pic.hanjiaming.com.cn/2024/12/10/26f85f3bea1ad.png)

- Uvicorn 是一个适用于 Unix/Linux、Mac 和 Windows 系统的 Python ASGI HTTP 服务器。
- 它充当 ASGI 应用程序的容器。
- 它管理一个或多个应用程序实例（多个工作人员）。

### Architecture of Uvicorn

- 由于是 Spawn Worker 模型，因此 Uvicorn 在大多数操作系统中都能正常运行。
- 默认进程管理器监控子进程的状态，并自动重启意外死亡的子进程。不仅如此，它还会通过管道监控子进程的状态。当子进程意外卡住时，相应的子进程将通过不可阻止的系统信号或接口被终止。
- 每个服务器工作进程运行一个您的应用程序的副本。

```shell
fastapi run --workers 4 main.py
```

<img src="https://pic.hanjiaming.com.cn/2024/12/10/39c9b731939ae.png" alt="1733774322007.png" style="zoom: 50%;" />

### Uvicorn Workers

- 由于Uvicorn工人使用的是spawn，所以它是多线程的。
- 启动申请至少需要 2 名工作人员。
- 如果您想充分利用计算机的核心数量，您可能需要同时使用 Gunicorn + Uvicorn。
  - In this case, **2n + 1** (n = number of cores) workers
  - 基于假设一半的工人正在执行I/O操作，而另一半的工人正在执行计算

## Nginx

Using Nginx as a Reverse Proxy and Load Balancer

### Nginx as a Reverse Proxy

- Nginx 是一个 Web 服务器，但也可以配置为反向代理服务器
- 它可以代理请求到另一个HTTP服务器或非HTTP服务器
- It supports the following non-HTTP protocol: FastCGI, uwsgi, SCGI, memcached
- 它可以缓冲来自服务器的响应以提升性能（当客户端较慢时）

### Configuring Nginx

- Nginx可以通过编辑配置文件来配置
- In Ubuntu, configuration files are usually stored under `/etc/nginx/`
- A main configuration file named `nginx.conf`
- One or more configuration files for each of the sites hosted by the server
(see `/etc/nginx/site-available` and `/etc/nginx/site-enabled`)

将 Nginx 配置为反向代理负载均衡器很简单。不过，在此之前我们先介绍一下“上游”「**upstream**」这个词。

![1733774749530.png](https://pic.hanjiaming.com.cn/2024/12/10/92b70f09abc5b.png)

注意：当没有指定负载均衡方法时，将使用round-robin方法

```
http {
    upstream myservers {
        server s1.myserver.com;
        server s2.myserver.com;
        server s3.myserver.com;
}
    server {
        listen 80;
        location / {
            proxy_pass http://myservers;
				} 
		}
}
```

![1733774840593.png](https://pic.hanjiaming.com.cn/2024/12/10/2ddfa3299e99e.png)

### Persistence (Stickiness)

- 有时我们需要同一个服务器为同一系列请求服务同一个客户端（为什么？）
- 轮询法和最少连接法不能保证同一客户端由同一服务器服务
- 持久性（或粘性）指的是负载均衡将请求转发到同一服务器的能力

Nginx中使用IP哈希作为负载均衡方法实现持久化



### Other functions

- Health checks of servers
- Buffering server response
- Routing requests to applications (e.g. to a Python Web app)



































































































