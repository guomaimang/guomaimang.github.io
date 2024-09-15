---
article: false
date: 2022-10-26
order: 7
headerDepth: 2
---

# Character Device Driver

在Unix中，有两个通用接口「 generic interfaces」与字符设备驱动开发有关。

用户程序：设备被视为特殊文件，用户只能通过文件操作系统调用（如打开、关闭、读、写等）访问设备，就像访问普通文件一样。

内核：为所有设备驱动程序提供通用接口和内核例程「generic interface and kernel routines」，以实现功能，并将功能注册到内核数据结构（如char/block设备驱动程序表）。

## Interface for User Programs

设备被当作文件对待：用户程序通过文件操作系统调用访问设备。

每个文件都有一个inode，每个设备驱动都有一个主要号码。

当在用户程序中使用设备驱动程序时，我们需要创建一个特殊的文件，将其 major number (driver) 和 an inode 相关联，即 `mknod /dev/lab1 c 251 0`

## 设备驱动开发（内核）

Two tasks

1. 在通用接口的基础上实现功能
2. 将设备驱动注册到内核数据结构中（char/block 设备驱动表）。

The major number is the ID of a device driver.

## Char设备驱动的通用接口

在<linux/fs.h>中定义了一个名为file_operations的数据结构。它基本上是一个函数指针的数组。

```c
struct file_operations{
	struct module * owner;
	...
	int (*open)(struct inode *, struct file *);
	ssize_t (*read)(struct file *, char *, size_t, loff_t *); ssize_t (*write)(struct file *, 		const char *, size_t, loff_t *); int (*release)(struct inode *, struct file *);
	...
}
```

为了开发一个char驱动，我们需要在上述通用接口的基础上为设备实现相应的功能。

## "Hello World"

Header files include the prototypes of kernel routines and data structures needed in the program. 「头文件包括程序中需要的内核例程和数据结构的原型。」

```c
#include <linux/config.h> 
#include <linux/module.h> 
#include <linux/kernel.h> 
#include <linux/init.h>
#include <linux/fs.h>
#include <linux/string.h> 
#include <asm/uaccess.h>
```

Use "static",变量的有效范围在包含它的文件中是有限的，因此我们可以避免名称污染。

```c
#define DEVICE_NAME "comp309_char_lab1" 

static char msg[] = "Hello World!!!\n";
static int major;
```

![1666717092130.png](https://pic.hanjiaming.com.cn/2022/10/26/39f1de5668d9b.png)

![CleanShot 2022-10-26 at 00.58.57@2x.png](https://pic.hanjiaming.com.cn/2022/10/26/8096370ec6601.png)

![1666719437623.png](https://pic.hanjiaming.com.cn/2022/10/26/639dc39a5d8a1.png)

## Kernel/User Memory Space

在Unix中，内核虚拟内存地址空间和用户虚拟内存地址空间是分开的。只有内核才能访问的资源也称为“内核域”「kernel land」，而用户可以访问的资源也称为“用户域”「user land」。

<img src="https://pic.hanjiaming.com.cn/2022/10/26/df06748f872cb.png" alt="1666717491269.png" style="zoom: 33%;" />

## Register/Unregister

Register/Unregister a Character Device Driver

**Register**: inform the kernel that we have a set of generic interface functions implemented for a certain kind of device

```c
int register_chrdev(unsigned int major, const char * name, struct file_operations *fops);
```

- major: 如果它是0，系统将自动分配一个未使用的主编号，并返回它；如果它大于0，这个函数将尝试保留这个编号作为字符设备的主编号，成功后返回0。
- name: 一个指向该字符设备驱动程序名称的 char 指针。
- fops: 一个指向file_operations结构的指针，通用接口函数「generic interface functions」的指针存放在这里。

**Unregister**: 通知内核，指定的字符设备驱动应该被删除。

```c
int unregister_chrdev(unsigned int major, const char * name);
```

- major: major number of the character device.
- name: a char pointer to the name of this character device driver.

## Compile and Load/Unload

Linux为设备驱动管理提供了一个动态模块加载/卸载方法。

Linux provides a dynamic module load/unload method for device driver management.

Compile:

- 在 Makefile 和 KConfig 中添加模块依赖关系
- Run command "make menuconfig" to set up the module as "dynamically load/unload"
- Run command "make"

Load/Unload:

- `insmod xxx.ko`
- `rmmod xxx`

where xxx is the module name.

## Test

To the user land, 设备被视为文件，因此我们需要使用 "mknod "命令为设备驱动程序创建一个文件，例如

```c
mknod /dev/lab1 c 251 0
```

User programs access devices through file operation system calls 「用户程序通过文件操作系统调用访问设备」例如, e.g.

```c
int fd;
fd = open("/dev/lab1", O_RDONLY);
```

```c
// Application Program

#include <linux/types.h> 
#include <linux/stat.h> 
#include <linux/fcntl.h> 
main(){
	int fd, count, I;
	char buf[100];
	fd = open("/dev/lab1", O_RDONLY); count = read(fd, buf, 100); printf("count-%d\n", count); 		buf[count] = '\0';
	printf("%s", buf);
}
```

## Summary

- Two generic interfaces are provided for using devices in Unix
  - In the kernel, a generic interface is provided.
  - For user programs, devices are treated as files.
- 要开发一个设备驱动程序，基本上我们需要完成两项任务。
  - 在通用接口的基础上实现功能
  - Register the device driver into the kernel data structure (the char/block device driver table)

我们提供了一个简单的设备驱动程序 "Hello"，作为理解字符设备驱动程序内部的一个例子。
