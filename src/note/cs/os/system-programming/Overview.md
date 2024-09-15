---
article: false
date: 2022-10-26
order: 2
headerDepth: 2



---

# Overview

"Unix是一个多任务、多用户计算机操作系统系列，源于最初的AT&T Unix，由Ken Thompson、Dennis Ritchie和其他人于1970年代在贝尔实验室研究中心开始开发。"-- 维基百科

![1666630642095.png](https://pic.hanjiaming.com.cn/2022/10/25/d12fd3ea9c0de.png)

## Unix 哲学

- 模块化设计 「Modular design」
- 一组简单的工具，具有有限的定义明确的功能
- 文件系统
- 进程间通信 「Inter-process communication」

这些工具可以通过 shell 轻松地进行组合（通过>、>>、<、|、``），以完成复杂的任务。

## What makes up Unix

Kernel is the heart of the OS. It 

- interacts with the hardware
- conduct key functions of the OS, such as memory management, task scheduling, file management

Shell是通过命令行与用户进行交互的工具。当你从终端输入设备中输入一行命令时，Shell解释该命令并执行预定的程序（或程序的组成）。C Shell、Bourne Shell和Korn Shell是最有名的Shell，它们在大多数Unix变体中都可用（Linux通常使用类似Bourne Shell的bash）。

<img src="https://pic.hanjiaming.com.cn/2022/10/25/b109e55871a99.png" alt="1666630892557.png" style="zoom: 33%;" />

命令和工具支持各种日常活动，如ls、vi、gcc、cp、mv、cat、grep。有超过250个标准的命令和实用程序，还有许多其他的第三方软件。大多数命令和工具都有各种选项。这些都建立了一个巨大的词汇表来表达用户的各种需求。

文件和目录组织数据。所有文件都被组织到目录中，而目录又被进一步组织成一个树状结构，称为文件系统。

## Unix Kernel

The kernel is the core of the Unix OS.

- 控制硬件并执行各种低级功能。
- 一组在特权模式「privileged mode」下运行的软件模块（可完全访问系统资源）。

### Main duties

- process scheduling and management
- 进程间通信「inter-process communication」
- memory management
- file management
- network stack management「网络堆栈管理」
- date and time services
- system accounting
- security
- device management
- interrupt and exception handling

### System Calls

Unix系统的其他部分，以及用户程序，通过系统调用向内核请求各种服务。系统调用是进入内核的一个入口，通常被包装成一个函数调用，作为操作系统API的一部分。

在函数调用内部，典型的实现：

1. a software interrupt (trap) switches the CPU hardware to the kernel mode
2. execute kernel routines
3. switches back (via scheduling*) to the user mode to resume the user application.

## Unix Libraries

除了系统调用库，用户程序还可以调用许多其他的用户级库函数。

![1666631599129.png](https://pic.hanjiaming.com.cn/2022/10/25/1d29d16e12700.png)

## Commands and Utilities

命令和实用程序：A large set of tools for various basic user level functions

- 一个词汇和一个语法，将基本的用户级功能与几乎任意的复杂功能相结合
- 不是内核的一部分，但却是操作系统的一部分
- 通常是通过Shell访问

## Unix Shell

- 一个强大的命令解释器（一个用户级的应用程序），用于Unix - 接受用户的文本命令并执行它们
- 可以结合各种用户层面的应用，为更复杂的功能服务
- 同一用户的多个 shell，或多个用户的多个 shell 可以共存

## Device Drivers

设备驱动程序对硬件进行封装，为内核的其他部分和用户层面提供硬件的独立性。

![1666631976678.png](https://pic.hanjiaming.com.cn/2022/10/25/b14b4a5fa6b66.png)

## Unix 特点

- Portability「可移植性，便携性」
- Multiuser Operation
- Multitask Processing
- Hierarchical File System「分层文件系统」
- Powerful Shell
- Pipes
- Networking
- Robustness「稳健性」

### Unix is Portable

Unix是一个相对独立的硬件操作系统。各种机制（设备驱动、内核内部和用户层面的各种C程序接口）被设计用来封装硬件的特性，便于在硬件平台之间进行移植。

可移植性的一个关键是设备驱动程序，这些特定的模块将硬件细节从内核的其他部分和用户层面封装起来。

### Unix supports multi-users

Unix是一个多用户、多任务的操作系统。

多个用户可以同时运行多个任务。这与传统的PC操作系统，如MS-DOS或Windows有很大不同，后者允许多个任务的并发执行，但不允许多个用户。

### Unix supports multi-tasking

- Unix是一个多任务操作系统。
  - 即使对于单个用户，分时仍然可以支持多任务。
- Unix有一些程序，如全系统的会计程序，会不时地自动运行。
- Unix支持后台处理，它允许用户 "在后台 "启动一个任务，然后继续进行其他活动。Unix的时间在前端命令和后台工作之间共享。
- Unix允许从现有任务中创建新任务。

### Hierarchical file system

- Unix 的文件被组织到独立的目录中。
- 目录本身被组织成一个树状结构。有一个主目录，即所谓的根目录，各种子目录从根目录分支出来。
- 分层结构为以反映自然结构的方式对信息进行分组提供了最大的灵活性。

此外，

- 单个用户的数据可以按活动进行分组
- 来自许多不同用户的数据可以按照企业组织进行分组
- 因此，存储的数据更容易定位和管理

### Unix's pipe is novel

Unix最著名的功能之一是管道。管道将一条命令的标准输出直接传递给另一条命令，作为其标准输入使用，例如

```bash
who | sort
```

允许按顺序连接任意数量的命令，并自动处理从一个程序到下一个程序的数据流

```bash
who | sort | lp
```

产生的效果与执行一个大程序而不是几个小程序的效果相同

- 允许将几个简单的程序组合起来执行更复杂的功能
- 消除了对新软件开发的需求

### Unix 支持网络

- 网络支持是内置在Unix系统中的。
- 支持 TCP/IP 协议，并提供新的操作系统抽象，即套接字，它允许应用程序级程序访问 Internet。
- 套接字抽象作为应用层程序和底层TCP/IP协议之间的一个接口。

### Unix is robust

当遇到一个错误时，Unix程序不会中止。相反，程序会收到一个表示错误状况的返回值，由程序来检查错误并进行处理。

- 通常情况下，如果返回类型是int，返回的错误值为负值，如果返回类型是指针，则为NULL。
- 可以调用C库函数perror()，向标准错误文件输出一个信息字符串，以进一步解释错误。

## Unix 变体

![1666633141817.png](https://pic.hanjiaming.com.cn/2022/10/25/f4ead0a9e2013.png)

严格来说，Linux的源代码并不是从 Unix 家族树上继承下来的。Linux是一个类似 Unix 的操作系统。**但如果你考虑到便携式操作系统接口（POSIX）标准，那么Linux可以被视为一种Unix。**

> "Linux是由Linux Torvalds在全网黑客的协助下从头开始编写的一个克隆的Unix"
>
> ——官方Linux内核README文件

