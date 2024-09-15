---
article: false
date: 2022-03-24
index: 4

---

# Process Management

A process is a program in execution. 

The terms process and job are used almost interchangeably in most textbooks. 

A process includes

- Value of program **counter** 
- Value of **registers** and processor **status word**
- **Stack** for temporary variables 
- **Text** for program code
- **Data section** for global variables 
- Heap for dynamic storage of variables (those created using malloc) 

<img src="https://pic.hanjiaming.com.cn/2022/03/23/a929cc51a209b.png" alt="1648029542561.png" style="zoom:33%;" />

在操作系统中，有多个进程同时执行。

有些计算机系统有多个CPU，但大多数较小的计算机系统只有一个CPU。当进程的数量超过CPU的数量时，每个CPU在每个时刻只能分配给一个进程执行，不是所有的进程在任何时刻都能得到CPU的服务。进程的状态还有其他可能性。这些条件被称为进程状态。为了跟踪进程的状态，以及当进程在CPU之间切换时应该保持的信息，为每个进程分配一个数据结构。这个数据结构是进程控制块，用来存储信息（如你的书包或用户的档案/桌面）。

## Process State

- new: process is being created. 
- running: process is running (program instructions are being executed).
- waiting: process is waiting for some event to occur. 
- ready: process is waiting to be assigned to a processor or CPU for execution. 
- terminated: process has finished execution. 

![1648029654341.png](https://pic.hanjiaming.com.cn/2022/03/23/eeab4d5486150.png)

## Process Control Block

Each process is represented by a Process Control Block (PCB). 

![1648029768256.png](https://pic.hanjiaming.com.cn/2022/03/23/aa3581a389fa6.png)

## CPU Switching

![1648029811588.png](https://pic.hanjiaming.com.cn/2022/03/23/63e93a7aecffb.png)

## Process Scheduling Queues

Several types of queues in computer system: 

- Job queue: set of all processes in the system. 
- Ready queue: set of all processes residing in main memory, ready and waiting to be executed. 
- Device queues: set of processes waiting for an I/O device. 

Processes migrate (i.e. move) among the various queues. 

预备队列中的进程获得CPU，随后可能在设备队列中等待I/O。

每种队列的进程调度器决定谁将获得下一个服务。

![1648030204043.png](https://pic.hanjiaming.com.cn/2022/03/23/5b474f2633fce.png)

![1648030245515.png](https://pic.hanjiaming.com.cn/2022/03/23/9cf0763956659.png)

## Scheduler

一个进程在其出生（创建）和死亡（终止）之间会在不同的队列中移动。当进程在等待不同的服务时，调度器会选择被服务的进程。

### Long-term scheduler

Also called job scheduler.

- Select which processes should be brought into the ready queue (only process in ready queue are eligible for CPU). 
- 长期调度器关注的是工作或进程的执行准入。
- 把一个进程放在准备队列中的决定很少发生，也许在进程被创建时可能发生一次。
  - 决策应该是一个相当好的（它可以承受更长的运行时间）。
  - 长期调度器控制多程序的程度（有可能竞争CPU的进程数量）。

### Medium-term scheduler

一些系统提供了中期调度程序。

- 当有太多的进程竞争CPU时，应该从就绪队列中暂时删除一些进程。
- 当使用CPU的进程很少时，一些被删除的进程应该返回到就绪队列中。
- Control multi-programming degree after process admission. 
- If not done carefully, this could lead to thrashing. 

![1648048184245.png](https://pic.hanjiaming.com.cn/2022/03/23/a6f340dddd67d.png)

### Short-term scheduler

Also called CPU scheduler.

- Select which process should be executed next and be allocated the CPU. 
- 短期调度器关注的是CPU的分配。
  - 给一个进程分配CPU的决定每秒钟发生很多次。
  - 决策的步骤必须非常快（所以它将是简单的）。

Short-term scheduler makes decision on which process to get CPU. 

- 短期调度器决定哪个进程获得CPU.
  - 简单的调度器只是以先到先得的方式向CPU提交进程.
  - 更好的调度器分配CPU以提高系统性能.
    - 等待CPU的时间.
    - 进程的完成时间.
    - 响应性。

Different types of processes would need different treatment. 

**Processes can roughly be classified into two types:** 

### I/O-bound process 

- A process that spends more time doing I/O than computations. 
- Between long duration of waiting, there are many short periods of using CPU (many short CPU bursts).
- Example: interactive programs, e.g. editor. 

### CPU-bound process 

- A process that spends more time doing computations than I/O. 
- Between occasional I/O, there are long periods of using CPU (few very long CPU bursts). 
- Example: computation programs, e.g. finding next move in chess playing. 

- 一个进程最初可能是I/O绑定的，然后变成CPU绑定的，反之亦然。
- 介于I/O和CPU之间的中间进程，有适度的I/O。

A computer system will not be effective if all processes are I/O-bound. A system will not perform well if all processes are CPU-bound. Long-term scheduler makes decision to maintain a good mix of CPU-bound and I/O-bound processes. (**No** long-term scheduler in Unix and Windows. )

## Context Switching

Short-term scheduler controls which process gets CPU next. 

Sequence of events to bring CPU from an executing process to another is called context switching. 

- 当CPU切换到另一个进程时，系统必须保存旧进程的状态，并为新进程加载先前保存的状态。
- 旧进程的状态将在 "time-up "中断发生时被放在堆栈中。
- 在决定了CPU的继任者之后，scheduler改变了PC，并从中断中返回到新进程。

Context switching time is a kind of **overhead(开销)**. 

- System does no useful work while switching from one process to another. 
- Time cost is dependent on hardware support, e.g. amount of efforts to save the state of the old process. 

![1648048868790.png](https://pic.hanjiaming.com.cn/2022/03/23/63e93a7aecffb.png)

## Process Creation

A process is created when a program is run. 

When you type **a.out** in Linux, the Linux shell (CLI) creates a new process for **a.out**, loads the code into the process and lets it run. 

Processes are normally identified by an integer, called process identifier or pid. 

There is a relationship between a process that creates another process. 

- The creating process is called the parent process. 
- The created process is called the child process. 

A child process could be the parent of another process, and a tree or hierarchy of processes could be formed. 

<img src="https://pic.hanjiaming.com.cn/2022/03/24/965b4db76203e.png" alt="1648051662702.png" style="zoom:50%;" />

Linux example: To show the parent/children processes use **-H** option for **ps** command (does not work for Mac Unix), e.g. **ps -Hlf** or **ps -Helf** 

![1648051707034.png](https://pic.hanjiaming.com.cn/2022/03/24/e63cd2c35d620.png)

![1648051753793.png](https://pic.hanjiaming.com.cn/2022/03/24/c23a95b556cf3.png)

Use **fork** system call to create new process. 

To replace process memory with a new program, use **exec** and its family of system calls. 

Parent uses **wait** to collect child and then continues. 

![1648051860205.png](https://pic.hanjiaming.com.cn/2022/03/24/ae47cd00e3de1.png)

### In Unix/Linux

![1648052069422.png](https://pic.hanjiaming.com.cn/2022/03/24/ff74d3a81ef12.png)

Relationship between parent and child: 

- Resource sharing 
  - Parent and child **share no resources**. 
- Execution 
  - Parent and child **execute concurrently**. 
- Address space 
  - Child duplicates that of parent. 
    - Child may have an independent program loaded into it, with special **exec** system calls. 

Parent is informed about the completion of a child. Parent should **wait** for a child to collect it. 

![1648052272885.png](https://pic.hanjiaming.com.cn/2022/03/24/1ffe6e74f44b8.png)

## Process Termination

After a process executes its last statement, it asks the OS to terminate it by calling **exit**. 

It passes return data back to parent process via **wait**. 

Parent may terminate the execution of children processes by calling **abort** if 

- Child has exceeded usage of resources beyond its allocation. 
- Task assigned to child is no longer required. 
- Parent itself is exiting. 

- 有些操作系统不允许一个子进程继续下去，如果它的父进程终止了，子进程也将被终止。
- 一个已经完成的子进程没有被它的父进程收集或接走，被称为僵尸进程。僵尸进程消耗PCB.
- 一些操作系统允许特殊安排的子进程在父进程终止后继续运行。
- 一个没有父进程的进程被称为孤儿进程。

### In Unix/Linux

Recall that we have mentioned about process termination arrangement in Unix/Linux. 

- Parent should be informed about the completion of a child. 
- Parent should **wait** for a child to collect it. 

如果父方不等待子方完成，如果父方在子方完成之前完成，子方将成为孤儿（没有父方）。另一方面，一个完成的子进程如果没有被父方收集或接走，则称为僵尸（活着的死人）。

So **wait** is necessary. 

## The **exec** family

- The **exec** family of system calls allow a Unix/Linux child process to execute another program (instead of the parent program). 
- Include header file **unistd.h** (**#include <unistd.h>**). 

| System call                                                  | Feature                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **int** **execl****(const char \*path, const char \*arg0, ...);** | Execute a program at pathname **path**, last argument must be **NULL**. |
| **int** **execlp****(const char \*file, const char \*arg0, ...);** | Execute a program named by **file**, last argument must be **NULL**. |
| **int** **execle****(const char \*path, const char \*arg0, ..., char \*const envp[]);** | Same as **execl**, but access environment variables via ***envp[]**. |
| **int** **execv****(const char \*path, char \*const argv[]);** | Same as **execl**, but arguments are stored in ***argv[]** instead. |
| **int** **execvp****(const char \*file, char \*const argv[]);** | Same as **execlp**, but arguments are stored in ***argv[]** instead. |
| **int** **execve****(const char \*path, char \*const argv[], char \*const envp[]);** | Same as **execv**, but access environment variables via ***envp[]**. |

A non-zero return value indicates an error from system call. 

- List of arguments in **execl**, **execlp** and **execle** are terminated by a NULL pointer. 
  - The path is a string containing the file name, including the full path, to be executed. 
  - The second argument arg0 is the name of the program for execution, e.g. “ls”. 
- For **execlp** and **execvp**, the first argument is a file name instead of the path name. 
  - If the string contains a "/", it is considered as a path name. Otherwise, it is a file name and the system will search for the file according to the directories in environment variable PATH. 
- For **execv**, **execvp** and **execve**, arguments for the program are packed within *argv[]. 
- For **execle** and **execve**, there is a final argument *envp[] storing the environment variables and values for the program. 

![1648052498655.png](https://pic.hanjiaming.com.cn/2022/03/24/ffe86e0805ef0.png)

Unix和Linux中对孤儿的特殊安排。

- 一个孤儿进程将被一个新的父进程收养。
- 愿意成为所有孤儿进程的新父进程的特殊进程的pid为1。 它是init进程。
- pid为0的进程是用于分页的交换器，pid为1的进程是用于启动和关闭Unix的第一个运行进程。

在上面的例子中，一个进程有它的父进程1（见第三列PPID）。

- 一个学生进程正在做一些事情，但不知何故从未完成（仍在运行），但该会话的原始shell进程已经终止（注销）了
- 注意，在 CentOS Linux 上，进程1被称为systemd（即系统守护进程），而不是init.
- Process 1在MacOS上被称为 launchd（即启动守护进程），而不是init。

![1648052944772.png](https://pic.hanjiaming.com.cn/2022/03/24/4c33f09a6e948.png)

## Cooperating Processes

- 一个独立的进程不能影响或被另一个进程的执行所影响。
- 一个合作的进程可以影响或被另一个进程的执行所影响。
- 大多数较大的系统有一个相互合作的进程集合。
- Web server and web browser (client) pair is a form of cooperating processes, residing over the network at different computers.

进程合作的优点：

- 信息共享：并发访问数据.
- 计算速度加快：分解成进程的子任务.
- 模块化：更好地结构化功能.
- 方便性：在并发工作模式下建立一个用户模型。

A very common view point of cooperating processes is the model of a producer and a consumer. 

## Interprocess Communication

- Producer process produces information (called item) that is consumed by a consumer process. 
- Information (item) produced by producer must be stored up for consumer usage later (since consumer may not be running at the same speed as producer). 

Producer-consumer problem is related to a problem to coordinate producer(s) and consumer(s), especially when the buffer to hold the intermediate data is not unlimited. 

- Producer could store data into a shared array or shared queue and consumer takes it out there. 
  - Shared array is like the board and everyone can see and draw. 
- Producer may send a message containing the data to consumer for consumer to read. 
  - Message is like an SMS and only the pair knows 

![1648093032934.png](https://pic.hanjiaming.com.cn/2022/03/24/aaef2764bda67.png)

合作进程进行通信和同步行动的机制

- 共享内存系统：进程通过读/写共享变量进行通信。
- 消息传递系统：进程之间通过传递信息进行通信，不使用共享变量。

Interprocess communication (IPC) normally refers to message passing approach with two operations: **send**(message), **receive**(message). 

- If process P and Q wish to communicate, they need to establish a communication link between them and exchange messages via send/receive. 
- Communication link could be physical (e.g., shared memory, hardware bus) or logical (e.g., channel or socket). 

## Synchronization

Concurrent access to shared data by cooperating processes (or threads) may make data inconsistent. 

同步确保共享一个逻辑地址空间的合作进程的有序执行，以保证数据的一致性。

- Synchronization requests processes to wait for the signal to go ahead, to avoid the race condition. 
- Examples include sleeping barber problem, reader-writer problem, society room problem. 

![1648093272191.png](https://pic.hanjiaming.com.cn/2022/03/24/43ef2b86ade17.png)
