---
article: false
date: 2022-10-26
order: 5
headerDepth: 2




---

# Device Driver

设备驱动程序是一种特殊的库，可以加载到操作系统内核中，并将应用程序与I/O设备连接起来。

在 Unix 中，以下基础设施与设备驱动程序相关：

- Unix系统架构
- File subsystem 和 与他相关的 char/block device driver tables
- 字符/块设备驱动表

<img src="https://pic.hanjiaming.com.cn/2022/10/23/093fde83a513b.png" alt="1666500503092.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/10/23/d82b776b999f4.png" alt="1666500601783.png" style="zoom:50%;" />

::: tip 将设备驱动与操作系统分离的优势

OS designers

- 在设计操作系统时，可能没有设备可用。
- 不需要担心如何操作设备（设置寄存器，检查状态，...）。
- 通过为设备驱动开发提供一个通用接口，专注于操作系统本身。

Device driver designers

- 不需要担心操作系统中如何管理I/O（如何设计内核数据结构以有效操作设备，......）。
- 重点是按照通用I/O接口用与设备有关的命令实现设备的功能

:::

## 字符/块设备驱动表

- Major Number: 设备驱动程序在 char/block **设备驱动程序表中的索引**（id）。
- Minor Number: **一个数字用于设备驱动内部**，例如，一个驱动可能控制许多设备，那么Minor Number可以用来区分它们。

![1666500793162.png](https://pic.hanjiaming.com.cn/2022/10/23/d3abe28f1a123.png)

## Devices and Files

在Unix中，设备被视为特殊文件「special files」。一个文件与一个inode相关联。我们可以使用以下bash 语句来创建一个设备文件的特殊文件:

```c
mknod <file_name> <c or b> <major_number> <minor_number>
```

当我们为一个设备文件创建一个特殊的文件（inode）时，我们将 major_numbe / minor_number 与该文件（inode）相关联。（与一个特殊文件相关的主要号码被用来识别其在内核中对应的设备驱动程序。）

Basically, there are two types of device files: **character device file** and **block device file**.

![1666501353551.png](https://pic.hanjiaming.com.cn/2022/10/23/8dc379ca35864.png)

### Major Design Issues

- 操作系统/设备驱动程序通信
- 设备驱动程序/硬件通信
- 设备驱动程序操作
  - 解释从操作系统收到的命令
  - 安排多个服务请求
  - 管理跨两个接口的数据传输
  - 接受和处理硬件中断
  - 保持设备和内核的数据结构的完整性

### Types of Device Drivers

基于设备驱动程序与Linux通信方式的差异

- Block
- Character
- Network

## Block Device Drivers

通过一个固定大小的缓冲区集合与操作系统进行通信。

![1666501605620.png](https://pic.hanjiaming.com.cn/2022/10/23/3204f2a72cf70.png)

操作系统管理着一个缓冲区缓存；通过访问缓存中的缓冲区来满足用户对数据的请求。

当请求的数据不在缓存中时，驱动程序被调用；当缓存中的缓冲区被改变，必须被写出来时（写回设备）。

通过使用缓冲区缓存，块驱动程序与用户请求的许多细节隔离；只需要处理来自操作系统的请求以填充或清空固定大小的缓冲区。

主要支持含有文件系统的设备。

## Character Device Drivers

字符设备可以处理任意大小的I/O请求；支持几乎所有类型的设备。

用于一次处理一个字节的数据（如键盘）；或者在处理小于或大于设备驱动程序使用的标准固定大小的缓冲区的数据时效果最好（如ADC）。

字符设备驱动程序的通信结构：

![1666502640504.png](https://pic.hanjiaming.com.cn/2022/10/23/65b14388a1e9f.png)

::: info 块/字符驱动程序之间的主要区别

- Block driver - 仅与缓冲区缓存交互
- Character driver - 直接与来 自用户进程 的 用户请求 互动
  - I/O 请求从用户进程直接传递（基本不变）到驱动程序
  - Character driver 负责在内核内存空间和用户内存空间之间直接传输数据。

:::

## 程序设计的一般考虑因素

- 设备驱动是内核的一部分，不是普通的用户进程，这意味着我们只能在设备驱动程序中使用**内核例程**「kernel routines」，特别是不能使用C库函数或用户级的系统调用。
- 一些内核例程可能与C库函数的名称相同，但它们的实现方式完全不同。
- 节约使用堆栈（本地数组和递归函数调用），因为内核中的堆栈空间是有限的，不能扩展。
- 注意浮点运算：可能导致不正确的结果
- 注意繁忙的等待：可能会锁定整个系统

## Summary

- 设备驱动程序是一个计算机程序，它将操作系统和它的I/O设备粘合在一起。
- 在Unix中，一个设备被当作一个特殊的文件对待。
- 根据设备驱动程序和操作系统之间不同的通信方式，Linux中有三种类型的设备驱动程序：块、字符和网络。





































