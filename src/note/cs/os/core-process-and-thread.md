---
article: false
date: 2021-05-01
index: 5
---

# 核心、进程与线程

以下内容适用于C/C++，不适用于Python和Java.

## Introduction

### Program

Program「程序」，一个程序可以创建多个 Process「进程」。

### Process

process「进程」

- A process is an instance of a running program「进程是正在运行的程序的实例」
- A program is static, like a cookbook「程序是静态的，就像菜谱一样」
- A process is dynamic, has lifetime, like cooking「一个过程是动态的，有生命，就像烹饪一样」
- Many processes can be started running the same program「可以启动多个进程来运行同一程序」
- Important resources needed by each process「每个进程需重要资源」

<img src="https://pic.hanjiaming.com.cn/2021/04/12/0f61ea2c09673.png" alt="image.png" title="image.png" />

### Thread

Thread「线程」，一个Process 可以由调用多个  Thread。

### The concept of concurrency

concurrency「并发」

- There are more than one thread, before one running thread finishes, another thread has stared execution「有多个程序，在一个正在运行的程序完成之前，另一个程序已开始执行」
- Multiple programs use the CPU alternatively「多个程序交替使用CPU」
- The operating system offers the capability to shift between threads「**操作系统**提供了在线程之间切换的功能」

<img src="https://pic.hanjiaming.com.cn/2021/04/27/61a504e94e9d8.png" alt="1c3d9e2d8b80d.png" title="1c3d9e2d8b80d.png" />

#### 流程图

这里的Processing翻译为流程，但不是进程！它演示的是线程的切换，而不是进程。

- Typical work flow of switching among processings「**流程间切换的典型工作流程」**
  - Start processing A
  - Save the context of A (registers) to A’s memory region「将A（寄存器）的上下文保存到A的内存区域」
  - Load the context of processing B「加载流程B的上下文」
  - Start to execute processing B「开始执行流程B」

……

<img src="https://pic.hanjiaming.com.cn/2021/04/12/c882a12a2cc16.gif" alt="CleanShot 2021-04-12 at 18.38.26.gif" title="CleanShot 2021-04-12 at 18.38.26.gif" />

### 核心「core」和线程「thread」的关系

计算机的CPU**核数**是同时可以**并行**的线程数量

- 线程是CPU调度分配的最小单位
- 由于超线程技术，实际上可以并行的线程数量通常是**物理核数**的两倍
- 我们只关心可以并行的线程数量，**所以 以后所说的核数是操作系统看到的核数**，所指的核也是超线程技术之后的那个核（不是物理核）
- **操作系统看到的核心数 = 可以并行的线程数量（非物理核心数）**，所以我们认为 **核心数 = 可以并行的线程数量**

故，我们可以认为，一个核心只能同时执行一个线程

### 进程「process」 和 线程 的关系

- 进程是操作系统资源分配（内存，显卡，磁盘）的最小单位
- 线程是执行调度（即CPU调度）的最小单位（CPU看到的都是线程而不是进程）

- 一个进程可以有一个或多个线程
- 线程之间共享进程的资源，通过这样的范式，就可以减少进程的创建和销毁带来的代价，可以让进程少一点，保持相对稳定，不断去调度线程就好。

### 并行 和 并发

Concurrent 翻译成 并发

这两个词是对**线程**而言的。

- 并行：多个线程同时运行在不同的核心中
- 并发：多个线程交叉运行在一个核心中

- 如果计算机有多个CPU核心，线程就可以**并行**运行在不同的核。
- 对于每一个核心，多个线程交叉运行，这多个线程可以称之为并发，即为了均衡负载，CPU调度器会不断的在单核上切换不同的线程执行。一个核只能运行一个线程，这是一个暂停一个线程进而启动另一个线程的活动，目的就是不让CPU空闲。

### 启发

1. 并发虽然让我们看起来不同线程之间的任务是并行执行的，但是实际上却由于增加了线程切换的开销使得代价更大了。如果是多核多线程，且线程数量大于核数，其中有些线程就会不断切换，并发执行，但实际上最大的并行数量还是当前这个进程中的核的数量，所以盲目增加线程数不仅不会让你的程序更快，反而会给你的程序增加额外的开销。
2. 任务可以分为计算密集型和IO密集型，假设我们现在使用一个进程来完成这个任务，对计算密集型任务，可以使用【核心数】个线程，就可以占满cpu资源，进而可以充分利用cpu，如果再多，就会造成额外的开销；对于IO密集型任务（涉及到网络、磁盘IO的任务都是IO密集型任务），线程由于被IO阻塞，如果仍然用【核心数】个线程，cpu是跑不满的，于是可以使用更多个线程来提高cpu使用率。
3. **实现并行计算有三种方式，多线程，多进程，多进程+多线程**
4. 如果是多进程，因为每个进程资源是独立的（地址空间和数据空间），就要在操作系统层面进行通信，如管道，队列，信号等；多线程的话会共享进程中的地址空间和数据空间，一个线程的数据可以直接提供给其他线程使用，但方便的同时会造成变量值的混乱，所以要通过**线程锁**来限制线程的执行
5. 其他语言，CPU 是多核时是支持多个线程同时执行。但在 Python 中，无论是单核还是多核，一个进程同时只能由一个线程在执行。其根源是 GIL 的存在。GIL 的全称是 Global Interpreter Lock(全局解释器锁)，来源是 Python 设计之初的考虑，为了数据安全所做的决定。某个线程想要执行，必须先拿到 GIL，我们可以把 GIL 看作是“通行证”，并且在一个 Python 进程中，GIL 只有一个。拿不到通行证的线程，就不允许进入 CPU 执行。所以多线程在python中很鸡肋。

## Miti-Process

Miti-Process 「多进程」

### Programs so far

When a program runs

- It totally occupies the CPU
- It consumes memory
- It will not stop until the last instruction is finished
- The program now runs in an isolated world「该程序现在在一个孤立的世界中运行」

<img src="https://pic.hanjiaming.com.cn/2021/04/12/ada31da66f1b4.png" alt="image.png" title="image.png" />

USERS: I want to run multiple programs at the same time「用户：我想同时运行多个程序」

COMPUTER DESIGNERS: I want the hardware to be used more efficiently「计算机设计师：我希望硬件得到更有效的利用」

<img src="https://pic.hanjiaming.com.cn/2021/04/12/c37baeb6f7818.png" alt="image.png" title="image.png" />

## Fork()

### Introduction

fork 应用于 Unix，可以在 MacOS或Linux 进行实验。

一个进程，包括代码、数据和分配给进程的资源。

fork（）函数通过系统调用创建一个与原来进程几乎完全相同的进程，也就是两个进程可以做完全相同的事，但如果初始参数或者传入的变量不同，两个进程也可以做不同的事。

一个进程调用fork（）函数后，系统先给新的进程分配资源，例如存储数据和代码的空间。然后把原来的进程的所有值都复制到新的新进程中，只有少数值与原来的进程的值不同。相当于克隆了一个自己。

**遇到fork()后，它把进程当前的情况拷贝一份!**

```c++
#include <unistd.h>
#include <stdio.h> 
int main () 
{ 
	pid_t fpid; //fpid表示fork函数返回的值
	int count=0;
	fpid=fork();
  
	if (fpid < 0) 
		printf("error in fork!"); 
	else if (fpid == 0) {
		printf("i am the child process, my process id is %d/n",getpid()); 	
		count++;
	}
	else {
		printf("i am the parent process, my process id is %d/n",getpid()); 
		count++;
	}
  
	printf("统计结果是: %d/n",count);
	return 0;
}
```

运行结果

> i am the child process, my process id is 5574
>   统计结果是: 1
>   i am the parent process, my process id is 5573
>   统计结果是: 1

在语句fpid=fork()之前，只有一个进程在执行这段代码，**但在这条语句的同时（包含这条语句）**，就变成两个进程在执行了，这两个进程的几乎完全相同，将要执行的下一条语句都是if(fpid<0)……

为什么两个进程的fpid不同呢，这与fork函数的特性有关。

fork调用的一个奇妙之处就是它仅仅被调用一次，却能够返回两次，它可能有三种不同的返回值：

1. 在父进程中，fork() 返回新创建子进程的进程ID；
2. 在子进程中，fork() 返回0；
3. 如果出现错误，fork() 返回一个负值；

### 父进程与子进程

在fork函数执行完毕后，如果创建新进程成功，**则出现两个进程，一个是子进程，一个是父进程。**在子进程中，fork函数返回0，在父进程中，fork返回新创建子进程的进程ID。我们可以通过fork返回的值来判断当前进程是子进程还是父进程。

#### 相对父进程和相对子进程

当一个子进程创建了新的子进程，那么这个新的子进程相对于创建它的子进程就是相对子进程，创建这个子进程的进程叫相对父进程，相对父进程和相对子进程具有父子进程应该具有的属性。

比如子进程里创建的相对子进程返回的pid就是0，但是子进程里相对父进程就返回真实的pid。

同样的，相对父进程的waitpid()将会等待相对子进程的结束。

### 流程

1. 使用 fork()
2. 在此处创建一个新的进程
3. 复制当前已经有的变量到洗呢进程里面
4. 父子进程同时运行

有时候，fork会copy整个语句，比如在if语句里。

怎样理解？

**只需记住不是从#include处开始复制代码的，而是遇到fork()后，把进程当前的情况拷贝一份!**

### fork() 出错原因

使用fork() 创建的进程都是子进程。

1. 当前的进程数已经达到了系统规定的上限，这时errno的值被设置为EAGAIN。
2. 系统内存不足，这时errno的值被设置为ENOMEM。

### 父子进程的顺序

创建新进程成功后，系统中出现两个基本完全相同的进程，这两个进程执行没有固定的先后顺序，哪个进程先执行要看系统的进程调度策略。

每个进程都有一个独特（互不相同）的进程标识符（process ID）。

在子进程里，可以通过 getpid（）函数获得，通过getppid（）函数获得父进程 pid。

## Write a Muti-Process program

### Write a program

- a process A is created and started with the program; 
- when A runs, A creates a new process B, running the same program as A, and concurrently with A

「编写程序：创建进程A，并从该程序启动；当A运行时，A创建一个新进程B，与A运行相同的程序，并与A同时运行」

A: parent process「父进程」; B: child process「子进程」

<img src="https://pic.hanjiaming.com.cn/2021/04/12/54dad6e8053f7.png" alt="image.png" title="image.png" />

注意：在子进程中使用pid = fork(),得到的pid是0，但是子进程真正的pid中并不是0。

<img src="https://pic.hanjiaming.com.cn/2021/04/12/7463d9a1537dc.png" alt="image.png" title="image.png" />

### Modeling with process graph

Modeling with process graph「使用过程图建模」

- A process graph is a tool for capturing the partial ordering of statements in a concurrent program「流程图是用于捕获并发程序中语句的部分排序的工具」
- Each vertex is the execution of a statement「每个顶点都是一条语句的执行」
- a -> b means a happens before b「A-> b表示a在b之前发生」
- Edges can be labeled with current value of variables「边缘可以用变量的当前值标记」
- printf vertices can be labeled with its output「printf顶点可以用其输出标记」
- Each graph begins with a vertex with no in-edges「printf顶点可以用其输出标记」

<img src="https://pic.hanjiaming.com.cn/2021/04/12/6d8d2c1091240.png" alt="image.png" title="image.png" />

### Example

How many “Example” output lines does this program print?

```c++
void try()
{
	fork();
	printf("Example\n");
	fork();
	return;
}

int main()
{
	try(); 
	fork();
	printf("Example\n");
	exit(0);
}
```

<img src="https://pic.hanjiaming.com.cn/2021/04/27/88d93530116f2.png" alt="image.png" title="image.png" />

### Synchronizing parent with child

<img src="https://pic.hanjiaming.com.cn/2021/04/12/f74e31cf3e862.png" alt="image.png" title="image.png" />

Is the following outputs valid? Why?

- ACBCBCC
- ABCCBCC
- ABCBCCC

#### The wait() function

```cpp
wait(int* status);
```

wait() 会暂时停止**目前进程**的执行, **直到有信号来到 或 任一子进程结束**

##### 作用

1. Suspend current process until one of its children terminates「暂停当前过程，直到其子进程之一终止」
2. Return value is the pid of the child process that terminates「返回值是终止的子进程的pid」

##### 返回值

- 如果在调用wait() 时子进程已经结束, 则wait()会立即返回子进程结束状态值. 
- 如果在调用wait() 时子进程还没有结束, 则wait()会等待任何一个子进程结束，之后立刻返回子进程结束状态值. 

##### 参数设置

`int* status`

这个参数将保存子进程的状态信息，有了这个信息父进程就可以了解子进程为什么会推出，是正常推出还是出了什么错误。如果status不是空指针，则状态信息将被写入指针指向的内存。当然，如果不关心子进程为什么推出的话，也可以传入将status设置为空指针，即nullptr .

- status: If status != nullptr, the integer it points to will be set to a value that indicates the reason why the child terminates「child _ status：如果 status！= nullptr，则它指向的整数将设置为一个值，该值指示子级终止的原因」
- Use **macros**「宏」 to extract the information given by status

#### waitpid()

```c++
#include <sys/types.h> 
#include <sys/wait.h>
pid_t waitpid(pid_t pid,int *status,int options);
```

对于父进程而言

- 如果在调用waitpid()函数时，当指定等待的子进程已经停止运行或结束了，则waitpid()会立即返回；
- 如果子进程还没有停止运行或结束，则调用waitpid()函数的进程则被阻暂停运行，直到指定的进程停止运行并返回退出码后。
- 如果waitpid()函数执行成功，则返回子进程的进程号；
- 如果有错误发生，则返回-1，并且将失败的原因存放在errno变量中。
- 失败的原因主要有
  - 没有子进程（errno设置为ECHILD）
  - 调用被某个信号中断（errno设置为EINTR）
  - 选项参数无效（errno设置为EINVAL）

子进程碰到waitpid()直接跳过。但相对父进程会等待相对子进程。

##### 参数设置

`pid_t pid`

参数pid为欲等待的子进程识别码，其具体含义如下：

| 参数值 | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| pid<-1 | 等待进程组号为pid绝对值的任何子进程。                        |
| pid=-1 | 等待任何子进程，此时的waitpid()函数就退化成了普通的wait()函数。 |
| pid=0  | 等待进程组号与目前进程相同的任何子进程，也就是说任何和调用waitpid()函数的进程在同一个进程组的进程。 |
| pid>0  | 等待进程号为pid的子进程。                                    |

所以可以说，waitpid() 和 wait() 函数一个不同的地方就在 waitpid() 支持指定的进程号。

这些参数可以用“|”运算符连接起来使用。

`int options`

参数options提供了一些另外的选项来控制waitpid()函数的行为。如果不想使用这些选项，则可以把这个参数设为0。

主要使用的有以下两个选项：

| 参数      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| WNOHANG   | 如果pid指定的子进程没有结束，则waitpid()函数立即返回0，而不是阻塞在这个函数上等待；如果结束了，则返回该子进程的进程号。 |
| WUNTRACED | 如果子进程进入暂停状态，则马上返回值。                       |

如果像这样调用waitpid函数：waitpid(-1, status, 0)，这此时waitpid()函数就完全退化成了wait()函数。

#### MACROS

MACROS「宏」

| **MACROS**           | **Indication**                                               |
| -------------------- | ------------------------------------------------------------ |
| WIFEXITED(status)    | Returns true if the child terminated normally, via a call to exit or a return.「如果子进程正常结束，它就返回真；否则返回假。」 |
| WEXITSTATUS(status)  | Returns the exit status of a normally terminated child. This status is only defined if WIFEXITED() returned true.「如果WIFEXITED(status)为真，则可以用该宏取得子进程exit()返回的结束代码。」 |
| WIFSIGNALED(status)  | Returns true if the child process terminated because of a signal that was not caught.「如果子进程因为一个未捕获的信号而终止，它就返回真；否则返回假。」 |
| WTERMSIG(status)     | Returns the number of the signal that caused the child process to terminate. This status is only defined if WIFSIGNALED() returned true.「如果WIFSIGNALED(status)为真，则可以用该宏获得导致子进程终止的信号代码。」 |
| WIFSTOPPED(status)   | Returns true if the child that caused the return is currently stopped.「如果当前子进程被暂停了，则返回真；否则返回假。」 |
| WSTOPSIG(status)     | Returns the number of the signal that caused the child to stop. This status is only defined if WIFSTOPPED() returned true.「如果WIFSTOPPED(status)为真，则可以使用该宏获得导致子进程暂停的信号代码。」 |
| WIFCONTINUED(status) | Returns true if the child process was restarted by receipt of a SIGCONT signal.「如果子进程通过接收到SIGCONT信号而重新启动，则返回true。」 |

#### Example

<img src="https://pic.hanjiaming.com.cn/2021/04/12/6e4c29d42fdc5.png" alt="image.png" title="image.png" />

- HC -> HP -> CT -> bye
- HP -> HC -> CT -> bye

<img src="https://pic.hanjiaming.com.cn/2021/04/12/47a3c48d0ddf3.png" alt="image.png" title="image.png" />

## Signals

- An OS mechanism to allow one process interrupt another process. 「一种允许一个进程中断另一进程的OS机制。」
- A signal is a small message that notifies a process that an event of some type has occurred in the system「信号是一条小消息，用于通知进程系统中发生了某种类型的事件」
- A signal receiver can respond according to the signal occured「信号接收器可以根据发生的信号做出响应」

### kill

- With command, e.g., kill
  - Let the child process enter an infinite loop
  - Use the command “kill” to terminate the child process
- With command, e.g., kill
  - Let the child process enter an infinite loop「让子进程进入无限循环」
  - Use the command “kill” to terminate the child process「使用命令“ kill”终止子进程」

<img src="https://pic.hanjiaming.com.cn/2021/04/12/0145b834c05d9.png" alt="image.png" title="image.png" />

### Receiving a signal

We let the process to listen to signal SIGINT「我们让进程监听信号SIGINT」

SIGINT = Ctrl-C

- The process will wait by calling pause()「该过程将通过调用pause（）**等待**」
- When the user press Ctrl-C, a signal handler will be executed「当用户按下Ctrl-C时，将执行信号处理程序」

### Interrupts

- A CPU provides hardware signals, called interrupts, to represent that something happens「CPU提供称为中断的硬件信号，以表示发生了某些事情」
  - For example, pressing Ctrl+C will generate an interrupt「例如，按Ctrl + C将产生一个中断」
- Programs will be developed to handle different interrupts, called interrupt handlers「将开发用于处理不同中断的程序，称为中断处理程序」
- At the end of each instruction cycle, the CPU will check if any interrupt has come「在每个指令周期结束时，CPU将检查是否有任何中断发生」
  - **Fetch -> decode -> execute -> check interrupt**
- If an interrupt occurs, the corresponding interrupt handler will be called to perform specified functionality「如果发生中断，则将调用相应的中断处理程序以执行指定的功能」

### Steps to process a signal

- In modern computer systems, interrupts will be received and managed by the operating system「在现代计算机系统中，中断将由操作系统接收和管理」
- Using signal() to register interrupt handler
- OS will transfer the control to application process to execute interrupt handler「操作系统将控制权转移到应用程序进程以执行中断处理程序」

<img src="https://pic.hanjiaming.com.cn/2021/04/12/60842a8078403.png" alt="image.png" title="image.png" />

## Issues not covered so far

「到目前为止未涵盖的问题」

- How each switching is triggered? 「如何触发每个切换？」(interrupts, will explain soon)
- Who is managing the switching? 「谁在管理交换？」(an operating system)
- When thread A pauses, there are B, C, D, …, which one should I switch to? (thread scheduling, to learn in OS courses)「当线程A暂停时，有B，C，D，...，我应该切换到哪一个？ 

引用

- https://zhuanlan.zhihu.com/p/82123111
- https://blog.csdn.net/jason314/article/details/5640969
- https://blog.csdn.net/cuit2016123070/article/details/83280125
- https://blog.csdn.net/Roland_Sun/article/details/32084825

## Java

对于Java，只考虑并行和多线程。通常的，Java使用多线程（Muti-Thread) 编程，而不是多进程（Muti-Process)