---
article: false
date: 2024-12-23
index: true
order: 14
headerDepth: 1
category:
  - tech
---

# Redis Sentinel 高可用架构

## Redis 主从复制

### 基础架构

要了解 Redis 的高可用架构，首先要了解 Redis 主从复制的过程。

<img src="https://pic.hanjiaming.com.cn/2024/12/23/2b5920d032139.png" alt="1734968032549.png" style="zoom:25%;" />

构建高可用架构的基础是构建多个数据相同的节点。我们这里构建了三个 Redis 节点，一个 master 主节点和两个 slave 从属节点，形成一主两从的小集群。这是最常见的 Redis 集群形态。

- **Master 主节点**：主要负责数据的写入操作。
- **Slave 从属节点**：分担来自应用的读取压力，可以配置读写分离。

### 主从复制过程

Redis 主从复制的背后原理如下：

![1734968070213.png](https://pic.hanjiaming.com.cn/2024/12/23/720a3f5a15fdd.png)

1. **建立连接**：当 Redis 的 slave 向 master 建立连接时，执行 `SLAVE OF` 命令。
2. **生成快照**：作为 Redis 主节点，执行 `BGSAVE` 命令生成一个 RDB 快照。RDB 是 Redis 中的一种数据备份方式，会将内存中的数据以二进制文件形式在本地保存。
3. **发送快照**：将生成的 RDB 快照发送到从属服务器上。
4. **数据还原**：从属服务器接收到 RDB 快照后，读取并还原数据，确保主从数据一致。
5. **命令转发**：初始化完毕后，主服务器每接收到一个写命令，会将该命令转发给所有从属服务器，从属服务器重新执行命令，保持数据一致。

### 主从复制缺点

<u>如果 Redis master 主节点挂掉，整个小集群就会瘫痪，这是现实应用中不允许的。</u>

## Redis Sentinel 高可用架构

### Sentinel 架构概述

Redis 官方提供了一个名为 Sentinel 的高可用集群架构方案。

Sentinel（哨兵）就像一个哨兵一样（本质是监听程序），为 Redis 集群保驾护航。

<img src="https://pic.hanjiaming.com.cn/2024/12/23/d00e250454586.png" alt="1734968166702.png" style="zoom:33%;" />

Sentinel 集群推荐至少六个节点，其中三个 Sentinel 和三个 Redis 主从。

- **Sentinel 集群**：由三台 Sentinel 服务器构建，其中一个为 leader 领导者角色。
- **健康状态检测**：每个 Sentinel 节点会向 Redis 主从实例发送 PING 命令，确保健康状态，形成网状通信结构。

每个 Sentinel 以每秒钟一次的频率向它所知的Master，Slavel以及其他Sentinel实例发送一个PING命令。

### 故障检测与转移

<img src="https://pic.hanjiaming.com.cn/2024/12/23/3db28088e5f51.png" alt="1734968318414.png" style="zoom:33%;" />

当 Redis master 因某种原因挂掉，Sentinel 会执行以下步骤：

1. **主观下线**：

   - Sentinel leader 向 master 发起请求，超时无响应
   - 如果一个实例 (instance) 距离最后一次有效回复PING命令的时间超过 own-after-milliseconds 选项所指定的值，刚这个实例会被 Sentinel 标记为主观下线。
   - 主观下线可能是网络通信不畅导致的误判。

2. **客观下线**：

   - Sentinel leader 通知其他 Sentinel 节点向 master 发起 PING 请求。
   - 如果足够数量的 Sentinel 节点在指定范围内确认 master 无响应，则标记为客观下线，认为 master 真正宕机。

3. **故障转移**：选择新主节点 -> 剔除无效从属节点，选出数据最完整的 slave 节点作为新主节点。

   - 剔除主观认为已下线、断线或超过一定时长无响应的从属节点。
     <img src="https://pic.hanjiaming.com.cn/2024/12/23/a9f9de0f2bbfc.png" alt="1734968560486.png" style="zoom:33%;" />
   - 剔除与失效主服务器连接断开时长超过 `down-after` 选项时长十倍的从属节点。
   - **根据同步数据的偏移量选出数据最完整的 slave 节点。**
   - 如果多个 slave 数据完全同步，则按编号从小到大顺序提升。
    - **提升新主节点**：Sentinel leader 向新主节点下达 `SLAVE OF NO ONE` 命令，提升为主节点。
    - **更新配置**：其他 Sentinel 节点订阅新主节点消息，更新本地配置文件。
    - **重建连接**：Sentinel leader 向所有从属服务器下达 `SLAVE OF` 命令，与新主节点建立连接，重新同步数据。 
    - **旧主节点恢复**：原有 master 恢复后，降级为 slave，与新主节点全量同步数据。

![1734968639651.png](https://pic.hanjiaming.com.cn/2024/12/23/682d7e5ca0863.png)

### Sentinel 自身高可用

Sentinel 本身通过 raft 算法进行选举，确保高可用。

<img src="https://pic.hanjiaming.com.cn/2024/12/23/b262ab2cd48d8.png" alt="1734968722889.png" style="zoom:33%;" />

- 选举过程

  - 集群中超过半数节点投票通过，节点成为主服务器（leader），负责故障转移和命令下达。
  - leader 挂掉后，剩余节点重新选举新的 leader。
  
- 节点发现

  - **每个 Sentinel 节点接入后，将自己的信息注册到 master 节点上。**
- **Sentinel 节点通过 master 获取其他 Sentinel 节点的 IP 地址信息，进行选举和通信。**

## 总结

Redis Sentinel 高可用集群通过故障检测、选举新主节点、更新配置和重建连接等步骤，确保 Redis 集群的高可用性。

Sentinel 自身通过 raft 算法进行选举，保证服务不中断。















