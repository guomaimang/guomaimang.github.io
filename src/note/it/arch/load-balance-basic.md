---
article: false
date: 2024-12-23
index: true
order: 8
headerDepth: 1
category:
  - tech
---

# 负载均衡器基础知识

在多台服务器前构建出一个负载均衡的设备，简称的负载均衡器。

可以让用户的请求按照某种方式将请求分配给不同服务器进行处理。

<img src="https://pic.hanjiaming.com.cn/2024/12/23/ca50d4fa9f92b.png" alt="1734953491570.png" style="zoom:33%;" />

这解决了三个问题

- 高可用性
- 使每一台设备压力平均分配
- 支持故障发现与转移

## Tomcat

- 提供Web应用的服务器。
- 单台Tomcat无法提供高可用服务，因为它可能会宕机。
- 通过在前面加一个负载均衡器，连接多台Tomcat，可实现高可用性。

## 负载均衡器的作用

- 高可用性：一台Tomcat宕机时，其他Tomcat可以顶上。
- 压力均衡：让后端节点设备的压力保持相对平均。
- 故障发现与故障转移
  - 通过监控后端节点状态（如定时发送心跳包）。
  - 如果节点无法正常返回数据，负载均衡器会将其摘除。

## 负载均衡器的分类

### 按软硬件分类

<img src="https://pic.hanjiaming.com.cn/2024/12/23/b2cf80dfd7e57.png" alt="1734953652458.png" style="zoom:20%;" />

- **硬件负载均衡器**:
  - 专用设备，如F5公司的负载均衡器。
  - 性能优越，满足企业级应用要求。
  - 成本较高，价格从十几万到上百万不等。
  - 适合预算充裕的大公司。
- **软件负载均衡器**:
  - 运行在服务器或PC机上的软件。
  - 成本较低，适合中小型公司。
  - 在Java领域应用广泛。

### 按网络层面分类

<img src="https://pic.hanjiaming.com.cn/2024/12/23/9ecb892c3f544.png" alt="1734953858993.png" style="zoom: 25%;" />

- **四层代理**:
  - 基于传输层（TCP协议）。
  - 典型代表：Linux系统中的LVS（虚拟Linux服务器）。
- **七层代理**:
  - 基于应用层（如HTTP、FTP、SMTP协议）。
  - 典型代表：Nginx。

## OSI七层模型

![1734953884562.png](https://pic.hanjiaming.com.cn/2024/12/23/b2d665ef47b2a.png)

- **物理层**: 最底层。
- **数据链路层**:
- **网络层**:
- **传输层**: 四层代理所在层（TCP协议）。
- **会话层**:
- **表示层**:
- **应用层**: 七层代理所在层（HTTP、FTP、SMTP等协议）。

## 四层代理与七层代理的对比

![1734953988363.png](https://pic.hanjiaming.com.cn/2024/12/23/36a821339927d.png)

- **功能性**:
  - 四层代理（如LVS）：支持基本的TCP代理和轮询负载均衡。
  - 七层代理（如Nginx）：支持多种负载均衡策略（轮询、权重、IP哈希、URL哈希等），并提供资源压缩和附加处理功能。
- **执行效率**:
  - 四层代理：效率更高，类似于汇编语言的效率。
  - 七层代理：相对较低。
- **作用协议**:
  - 四层代理：TCP或UDP协议。
  - 七层代理：HTTP、FTP、SMTP等应用协议。
- **应用场景**:
  - 四层代理：实时应用集群、大规模消息分发、军事应用、集群内部数据分发。
  - 七层代理：企业级开发、外部应用程序、APP后端应用。

## Nginx 负载均衡策略

<img src="https://pic.hanjiaming.com.cn/2024/12/23/5e757ca69f766.png" alt="1734954007302.png" style="zoom:33%;" />

- **轮询策略**:
  - 类似排排坐吃果果，依次将请求分发到不同节点。
- **权重策略**:
  - 根据节点性能设置权重，性能高的节点分配更多请求。
  - 例如，八核服务器权重30，32核服务器权重70。
- **IP哈希策略**:
  - 根据用户IP计算哈希值，将请求固定分配到某个节点。
  - 缺点：无法保证负载均衡。
- **URL哈希策略**:
  - 根据用户请求的URL计算哈希值，将请求固定分配到某个节点。
  - 缺点：同样无法保证负载均衡。
- **Fair策略**:
  - 需要第三方模块支持。
  - 根据服务器的响应情况（如延迟）动态分配请求。

## 负载均衡器的实际应用

- **硬件负载均衡器**: 适合大公司，用于高性能和高可靠性要求的场景。
- **软件负载均衡器**: 适合中小型公司，用于成本较低且灵活的场景。
- **四层代理**: 用于高效传输的实时应用集群和内部数据分发。
- **七层代理**: 用于企业级开发和外部应用程序的负载均衡。

## 总结

负载均衡器在现代Web应用中起着至关重要的作用，通过合理选择和配置，可以实现高可用性、均衡压力、故障发现与转移等关键功能。

根据企业的需求和预算，可以选择硬件或软件负载均衡器，并根据具体应用场景选择四层代理或七层代理，以达到最佳的负载均衡效果。