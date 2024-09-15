---
article: false
date: 2024-05-09
index: true
order: 7
headerDepth: 1

---

# Software-Defined Network

![1715244470821.png](https://pic.hanjiaming.com.cn/2024/05/09/5445eb8d7cd84.png)

1. Control Plane - The brain/decision maker, focuses on how that one switch interacts with its neighbors
2. Data Plane - Packet forwarder
3. Management plane - carries administrative traffic.

在传统网络中，所有三个平面都在路由器和交换机的固件「firmware」中实现。

![1715234266406.png](https://pic.hanjiaming.com.cn/2024/05/09/97d6b23f25bb8.png)

## Traditional Network: Switch

![1715234309588.png](https://pic.hanjiaming.com.cn/2024/05/09/ac0a7fd6aa6bf.png)

### Data Plane

Data Plane: processing and delivery of packets

- Based on state in routers and endpoints
- E.g.,IP,TCP,Ethernet,etc.
- Fast timescales(per-packet)

![1715234357157.png](https://pic.hanjiaming.com.cn/2024/05/09/eceec127dfe75.png)

### Control Plane

控制平面：建立路由器中的状态

- 确定数据包转发的方式和位置
- 路由、流量工程、防火墙状态.......

![1715234474703.png](https://pic.hanjiaming.com.cn/2024/05/09/2628e12da41b6.png)

### Management Plane

收集测量数据并配置设备

![1715234506021.png](https://pic.hanjiaming.com.cn/2024/05/09/4ef4cfe319814.png)

## Networking Lag Behind

Why dose Networking Lag Behind「网络滞后」?

Networks used to be simple: Ethernet,IP,TCP....

新的 "云 "要求导致了极大的复杂性

![1715237025232.png](https://pic.hanjiaming.com.cn/2024/05/09/d22a9be639305.png)

上述机制是独立设计和部署的。

Consequences:

- Complicated "control plane"design.
- 与优雅「elegantly」的模块化「modular」 "数据平面 "形成鲜明对比。

昂贵的交换机，带有执行这些功能的专有固件！

![1715238798026.png](https://pic.hanjiaming.com.cn/2024/05/09/bd72b684b9fc2.png)

![1715239047511.png](https://pic.hanjiaming.com.cn/2024/05/09/3a2f75f4dd410.png)

## SDN: New Concepts

1. Separate 
  - Control plane (which decides how to handle the traffic) from
  - Data plane (which forwards traffic according to decisions that the control plane makes).
  - Network intelligence and state are logically centralized.
2.  整合控制平面，使单一软件控制程序通过定义明确的应用程序接口（OpenFlow）控制多个数据平面元件（即路由器、交换机和其他中间设备）。
   1. Control program runs on commodity servers
      1. Decouple from specific networking hardware.
   2. "Programmable"data planes
      1. Maintain,control,and program data plane from the central entity.
      2. Generalized flow abstraction,open up to layers 1-7.

![1715243697135.png](https://pic.hanjiaming.com.cn/2024/05/09/ff46ac08f1875.png)

![1715243707713.png](https://pic.hanjiaming.com.cn/2024/05/09/4c016c3fdf041.png)

## Network OS

- Network OS:creates a consistent, up-to-date network view.
  - Runs on servers  (controllers) in the network.
- Uses an open protocol (e.g.,OpenFlow)to:
  - Get state information from forwarding elements
  -  Give control directives to forwarding elements
- OpenFlow: a protocol for remotely controlling the forwarding table of a switch or router (more to come)


![1715243836446.png](https://pic.hanjiaming.com.cn/2024/05/09/bfd3dc42902c4.png)

::: note What SDN really is?

![1715243866272.png](https://pic.hanjiaming.com.cn/2024/05/09/b00f9fd663995.png)

:::

**With SDN->Network Industry Go Virtualized and Centralized like Cloud**

![1715243945685.png](https://pic.hanjiaming.com.cn/2024/05/09/e8d5efa6a9238.png)
