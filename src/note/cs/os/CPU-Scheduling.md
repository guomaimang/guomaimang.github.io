---
article: false
date: 2022-03-24
index: 2

---

#  CPU Scheduling

## Scheduling

An operating system executes a variety of programs for users. 

When a program is executed, it becomes a process, i.e. a process is a program in execution. 

In an OS, there are multiple processes executing at the same time. 

- Some computer systems have multiple CPUs, but most smaller ones have only one CPU. 
- When the number of processes is more than number of CPUs, each CPU can only be allocated to a process for execution at each moment. 
- Not all process can receive the CPU service at any moment. 
- Process would alternate between “served by a CPU” (running) and “waiting” (ready/waiting) states. There are other possibilities to the process state. 

We are concerned about the decision of which process should get the CPU when the CPU is not in used. 

- This is called CPU scheduling, and the operating system component that makes this decision is called the CPU scheduler. 
- The CPU scheduler needs to maximize CPU utilization in the presence of multi-programming. 

**Scheduling is one would like to serve the CPU bursts effectively.** 

对CPU和I/O突发事件的仔细观察以及通过CPU突发事件直方图的分布表明了CPU调度的真正需要。

![1648030970354.png](https://pic.hanjiaming.com.cn/2022/03/23/c0ec24dff7598.png)

## Scheduling Algorithms

- First Come First Serve (FCFS) 
- Shortest Job First (SJF) 
- Shortest Remaining Time (SRT) 
- Priority (PR) 
- Round Robin (RR) 
- Multi-Level Queue 
- Multi-Level Feedback Queue 

## Scheduling Consideration

- CPU utilization
  - 用于实际工作的CPU时间百分比（非空闲）
  - Want high CPU utilization. 
- Throughput 
  - Number of processes completing execution per time unit. 
  - Want high throughput. 
- Turnaround time
  - Amount of time to complete process execution since arrival. 
  - Want short turnaround time. 
- Waiting time
  - Amount of time a process spends waiting in ready queue. 
  - Want short waiting time.  
- Response time
  - Amount of time from the moment a request was submitted until the first response is produced (may not be output). 
  - Want short response time. 
