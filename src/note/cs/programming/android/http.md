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

### Serving Dynamic Content













































































