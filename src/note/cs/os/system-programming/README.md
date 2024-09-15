---
article: false
date: 2022-10-26
order: 1
headerDepth: 2


---

# System Programming

操作系统是计算机用户和硬件之间的一个中介「intermediary」。

- Make the hardware convenient to use
- Manages system resources
- Use the hardware in an efficient manner

![1666411873469.png](https://pic.hanjiaming.com.cn/2022/10/22/1778190b3aca9.png)

## Runtime View of OS

<img src="https://pic.hanjiaming.com.cn/2022/10/22/aa408ae4c5aae.png" alt="1666410677996.png" style="zoom:33%;" />

## Types of OSs

- Batch
  - Single CPU
  - User submits large number of tasks at one time: OS decides what to run and when
  - Back-to-back single tasking
- Time-Sharing
  - Multiple users connected to a single CPU
  - Many user terminals
  - 使用时间共享的方式同时「simultaneously」运行多个任务，让用户感觉有多个专用CPU在并行运行。

另一种分类方式

- Parallel
  - 多个CPU紧密耦合形成一台计算机
  - 更高的吞吐量和更好的容错性
  - 每个CPU可以运行批处理任务或分时多任务
- Distributed
  - 多个CPU通过网络松散地耦合在一起
- Real-time
  - 非常严格的响应时间要求
  - 周期性任务，每项任务的工作都有严格的截止日期

另一种分类方式

- Single Tasking System
  - 每个任务一旦启动，就会执行到最后，不受其他任务的干扰。
  - 简单实现：任务之间的顺序界限，以及资源访问。
  - 很少有安全风险
  - CPU和其他资源的利用率低
  - 例如：MS-DOS
- Multitasking System
  - 很复杂
  - 严重的安全问题：如何保护一个任务不受另一个任务的影响，因为它共享同一个内存块
  - 对系统资源的利用率高得多
  - 支持交互式用户/物理世界界面
  - 示例：Unix、Windows NT

## Hardware Basics

操作系统和硬件紧密联系在一起，基础硬件资源

- CPU
  - 