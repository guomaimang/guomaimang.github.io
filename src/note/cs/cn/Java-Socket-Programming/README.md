---
category:
  - tech
date: 2022-04-19
index: 0
star: true
---

# Java Socket Programming

套接字编程是进程之间通信的重要依赖。本章节将使用Java原生实现套接字通信程序。

本文档清晰的讲述了Silver Spork 这一程序的思路和开发过程。

- Document: [https://guomaimang.github.io/note/cs/cn/java-socket-programming](https://guomaimang.github.io/note/cs/cn/Java-Socket-Programming)
- Demo: [http://cn2322.hanjiaming.com.cn:8082](http://cn2322.hanjiaming.com.cn:8082/)
- Github: [https://github.com/guomaimang/Silver-Spork](https://github.com/guomaimang/Silver-Spork)

## Background

### Requirement

使用Java, 开发一个套接字程序 **Silver Spork**, 设计一个轻量的HTTP Server, 以实现使用HTTP协议的WEB服务, 功能类似Nginx。

- [x] Use Java Muti-Thread to process socket
- [x] Create a connection socket when contacted by a client (browser)
- [x] Receive the HTTP request from this connection
- [x] Parse the request to determine the specific file being requested
- [x] Get the requested file from the server’s file system
- [x] Proper request and responsemessage exchanges 
- [x] Create an HTTP response message consisting of the requested file preceded by header lines;
- [x] Can't use the HTTPServer class directly
- [x] Only process GET and HEAD request
- [x] Only response HTTP1.1 200, 400, 404, 304
- [x] Handle Last-Modified and If-Modified-Since headerfields
- [x] Handle Connection: Keep-Aliveheader field

With

- [x] A good summary.
- [x] A clear README text file
- [x] High quality.
- [x] A full demonstration.

### Environment

- 开发环境
  - Macos
  - Java 17
  - Intelj idea 2021

- 测试环境
  - ![img](https://img.shields.io/badge/Build%20on%20Windows%2010-Pass-brightgreen) ![img](https://img.shields.io/badge/Build%20on%20Macos-Pass-brightgreen) ![img](https://img.shields.io/badge/Build%20on%20Centos%20Linux%207.9-Pass-brightgreen) 
  - Postman
  - Chrome dev100
  - IPv4 + IPv6

## Organization

### File

- Public: Storing static website pages
- src: Storing Java source code
  - HttpServer.java: Program Ontology, also Launcher
    - class->clock: Executable, timing stop process
    - class->worker: Handler for single socket
  - Request.Java: Parsing the incoming Request message
  - Response.Java: Sending messages based on Response
  - Logger.java: Take down the log

### Configurable global variables

- serverRoot: Specifies the location where the static site files are stored, i.e. the root directory of the site.
  - Default is "public"
  - The site owner can place files in this directory
- port: Server socket port 
  - Default is 8080
- logger: set the location of log file
  - Default is "log.txt"

## Advantage

- 必要的日志记录。
- 使用原生Java，从socket开始开发。没有使用任何现有的httpServer库。
- 可拓展性强。使用Java进行模块化开发。有利于功能拓展和二次开发。
- 开发规范。
  - 注释清晰。
  - 例如使用Java beans设置变量。
  - 没有无用的接口。
  - 没有使用危险函数/方法。

## Reference

https://docs.oracle.com/javase/tutorial/networking/sockets/clientServer.html

https://blog.csdn.net/allway2/article/details/120255402

https://www.runoob.com/java/java-networking.html

https://nginx.org/en/
