---
article: false
date: 2022-12-03
order: 3
headerDepth: 1
---

# Mobile Ad Hoc Network

Mobile Ad Hoc Network (MANET) 「移动特设网络」

## 什么是 MANET

- 基于基础设施的无线网络
  - 拥有对有线骨干网的基础设施支持
    - Base stations (BS) are the bridges
    - A mobile host will communicate with the nearest BS
    - E.g., Cellular Networks / WLANs
  - 可靠，但设置成本高，设置时间长
- 无基础设施的无线网络
  - **移动广告网络（MANET）是由一群没有任何BS的移动设备组成。**
  - 移动设备支持多跳通信
  - 高度合作，每个移动设备不仅是一个发射器/接收器，也是一个路由器
  - A msg from a source to a destination may need the help of intermediate devices for relaying this msg

## MANET 应用程序

- 自动化战场
- 特设会议「Ad hoc meetings」
- Vehicle ad hoc networks
- 自动化的战场
- 无线传感器网络

## MANET 特性

- No centralized entity
- 动态网络拓扑结构「Dynamic network topology」
  - 每个节点都可以是移动的
  - 链接的形成和断裂与流动性有关
  - 网络拓扑结构变化频繁且不可预测
  - 缺乏对称的链接--可能是单向的链接
- 不太可靠
- 能量受限的操作

## MANETs中的路由

### 路由问题

- 路线发现：如何找到一条从源头S到目的地D的合适路径？
- 数据包转发：如何将一个数据包从S处送到D处？
- 路线维护：如何维护路径？

<img src="https://pic.hanjiaming.com.cn/2022/10/16/9b1b396223d91.png" alt="1665914109510.png" style="zoom:25%;" />

MANETs中的路由是具有挑战性的。

- MANETs 中的路由需要多跳通信
  - 数据从源头到目的地要经过多跳。
  - 节点发送和接收自己的数据包，同时也为其他节点转发数据包。（而传统有线网络中的大多数节点都不对数据包进行路由。）
- MANET 中的路由必须同时考虑第 2 层和第 3 层信息（连接性和干扰）。（而传统协议只依赖第三层信息）
- 由于移动节点，拓扑在 MANE T 中是动态的。
  - 在传统网络中，拓扑结构是相对静态的。
  - 当节点快速移动时，拓扑结构可能迅速变化。
- 在 MANET 中定期更新路由表会消耗能量和带宽，但在没有数据发送的情况下可能毫无用处。

### Requirements

路线计算应该是分布式和本地化的

- 参与路由计算和状态传播的节点应尽可能少。
- 使用短控制 msgs 来减少 msg 开销
- 路线应该是无环的
- 当主路由变得陈旧时，备份路由（多条不相连的路由）应该是可用的。

### Evaluation metrics

- 端到端的数据吞吐量和延迟
- 路线获取时间
- 无序交货百分比
- 效率
  - Message overhead
  - Energy efficiency

## MANET的路由协议

### 主动与反应式

<img src="https://pic.hanjiaming.com.cn/2022/10/16/9075ad89b0dd2.png" alt="1665915614115.png" style="zoom: 33%;" />

- Proactive Protocols「主动协议」
  - 表格驱动--持续维护一致的、最新的路线
  - 当网络拓扑结构发生变化时：更新的信息将在整个网络中传播
  - 大量的路由信息可能永远不会被使用。
  - 低延迟 - 需要时可立即准备好路由信息
  - 传统的链路状态和距离矢量路由协议
  - DSDV
- Reactive Protocols「反应式协议」
  - 按需服务--只在需要时维护路线
  - 路线发现通常是由源头发起的
  - 由于路由发现而产生的长延时，可能不适合实时通信
  - Flooding, AODV, DSR

### Trade-Off

路由发现的延迟

- 主动协议具有较低的延迟，因为路由在任何时候都被维护。
- 反应式协议有较高的延迟，因为只有当S试图向D发送时，才会发现从S到D的路由。

路由发现/维护的开销

- 由于持续的路由更新，积极主动的协议可能有更高的开销
- 反应式协议可能有较低的开销，因为只有在需要时才确定路由。

## Flooding <Badge text="算法设计" type="info" />

发送方S希望将数据包P发送给接收方D

- 发送方S向其所有邻居广播Package
- 每个邻居都收到Package
  - 如果第一次收到Package，它将Package转发给它的邻居们
  - 如果P是重复的，它将不会再次转发Package
- 如果接收器D可以从S到达，那么Package 可以到达D
- D不再转发 Package 了
- 序列号用于避免同一数据包被多次转发的可能性。

Flooding can be used to

- 直接发送数据包
- 发送控制数据包以找到一个路径，然后该路径可用于发送数据包。

#### Advantages

- 简洁性
- 当信息传输频率低时，效率高
- 显式路由发现/维护的开销相对较高：适用于例如，节点不经常传送小数据包，而在连续的数据包传送之间发生许多拓扑结构的变化
- 数据传输的高可靠性：数据包可能通过多条路径传递到目的地

#### Disadvantages

- 重复的数据包造成的开销非常大
  - 数据包可能被传送到太多不需要接收它们的节点（在最坏的情况下，从发送方到达的所有节点都可能收到数据包）
  - 节点可能会收到同一数据包的太多冗余副本
- 争论问题：当邻居试图重传数据包时，他们很可能会相互争夺媒介。
- 碰撞问题：重传有可能在同一时间开始并相互碰撞

#### Flooding Problem

洪水可能导致广播风暴问题：在最坏的情况下，一个数据包的传输可能会引发巨大的数据包在整个网络中传播，这可能会导致高数据包冗余、高节点争用和高数据包碰撞，最终导致整个网络功能的崩溃。

如何解决这个问题？解决办法是，减少节点的数量，解决方案是减少重传数据包的节点数量

- Probability-based scheme：一个节点将以预定的概率p**重传**该数据包。
- Counter-based scheme：如果收到的拷贝数少于c（一个预定义的计数器），节点将**重新发送**数据包。否则，不要重传该数据包。（In practice, c = 3 is enough）
- Distance-based scheme：一个节点可能从几个发件人那里收到相同的数据包。节点计算到每个发件人的距离。
  - 如何找到距离？信号强度或GPS设备
- etc

## 目的地序列距离向量(DSDV) <Badge text="算法设计" type="info" />

DSDV是基于距离矢量的路由协议

广泛应用于有线网络

- 距离向量路由
- 定期与所有邻居交换路由信息：路由信息包含可到达的目的地节点和到每个目的地节点的距离。
- 如果有几条通往目的地的路径，它将选择最短的路径。

### 算法

- 一个节点定期向其邻居广播其估计的距离。
- 然后每个邻居在这个距离上加一。如果这个新距离小于它当前的估计值，它就采用新的距离。

<img src="https://pic.hanjiaming.com.cn/2022/10/17/d8f0bed609ea4.png" alt="1665975028500.png" style="zoom:33%;" />

### 示例

![1665976055529.png](https://pic.hanjiaming.com.cn/2022/10/17/f29b25cbc6eb5.png)

![1665976075800.png](https://pic.hanjiaming.com.cn/2022/10/17/1405cf16e93b5.png)

![1665976096132.png](https://pic.hanjiaming.com.cn/2022/10/17/f20ae66d9a6df.png)

![1665976106817.png](https://pic.hanjiaming.com.cn/2022/10/17/2292cf2762012.png)

### DSDV 协议

每个节点都维护一个路由表，包括

- 目的地 Destination - 所有可能的目的地
- 下一个  Next - 到每个目的地的下一跳
- 公制 Metrx - 到每个目的地的公制
- 序列号 Sequence number - 源自目的地的 SN 确保
- 安装时间 Install Time - 条目最后被修改的时间（用于从表中删除陈旧的条目）。
- 稳定数据 Stable Data- 一个指向保存路由稳定程度信息的表的指针（用于抑制网络的波动）。

<img src="https://pic.hanjiaming.com.cn/2022/10/17/26638b0aae9c9.png" alt="1665976130315.png" style="zoom: 33%;" />

每个路由都被标记为目的地序列号

- 每个节点执行周期性的路由更新，发布一个新的序列号
- 顺序号继续增加它的值，这表示一个路由信息的 "新鲜度"。
  - 序列号较大的路由更新鲜
  - **如果序列号相同，则使用 metric 最小的一个。**
- 序列号将与以该节点为目的地的路由条目相关联（所谓的目的地序列化）。
- 用来避免循环的序列号：解决DV路由的问题（数到无穷大，循环）。

### DSDV 协议：路由通告

节点向每个邻居公布自己的路由信息

- 路由信息包括
  - Destination address
  - Metric: number of hops to destination
  - Destination sequence number
- 设置目的地序列号的规则
  - **在每个广告中，节点增加自己的目的地序列号（只使用偶数）。**
  - 如果目标节点不再可达（超时），节点将该节点的序列号增加 1（奇数序列号）并设置 metric = ∞

### DSDV 协议：路由选择

更新的路由信息与自己的路由表进行比较

- 选择具有较高目的地序列号的路由（这确保总是使用来自目的地的最新信息）。
- 当序列号相等时选择具有更好度量的路由

### DSDV 协议：拓扑变化

当发现新的路线时

- 节点立即发送路由通告消息
- 新路由的路由更新信息会立即传播给邻居。
- 全面更新/增量更新
  - 全面更新：路由通告消息包含自己表中的所有路由信息
  - 递增式更新：路由广告信息只包括已经改变的条目

<img src="https://pic.hanjiaming.com.cn/2022/10/17/fbfe3eac6b124.png" alt="1665989877784.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/10/17/c4a5ef2442338.png" alt="1665989904484.png" style="zoom: 33%;" />

远距离矢量路由协议中的断裂链接

- 节点为断开的链接分配一个度量值∞
- 任何通过断裂链路的路线也被赋予一个∞的值
- **"∞"路由被分配新的奇数序列号**，并立即触发路由更新信息传播
- 如果一个节点对"∞"路由有一个相等/较高的序列号，并有一个有限的度量，则该节点的路由表将被更新，并立即发送一个路由更新信息。

<img src="https://pic.hanjiaming.com.cn/2022/10/17/a4352d01bbc8f.png" alt="1665991131359.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/10/17/dfd32c4b5654b.png" alt="1665991188497.png" style="zoom:33%;" />

## Ad hoc 按需距离矢量 (AODV) <Badge text="算法设计" type="info" />

- 纯粹的按需路由协议（减少数据包的开销）
  - 一个节点不执行路由发现或维护，直到它需要一个到另一个节点的路由，或者它作为一个中间节点提供其路由服务。
  - 不在活动路径上的节点不维护路由信息，不参与路由表交换
- 使用广播路由发现机制
- Use hop-by-hop routing: 路由是基于中间节点维护的动态表项而建立的

### AODV Protocol

- 每个节点使用HELLO消息来确定本地连接性
- 顺序号被分配给路由和路由表项, 以取代陈旧的缓存路由条目
- 以取代陈旧的缓存路由条目: 节点序列号，广播ID

AODV Protocol: Path Discovery

每当节点想进行通信时，就会启动路径发现程序。节点向邻近节点广播**<u>路线请求包（RREQ）</u>**。当一个邻居节点收到RREQ。

- 如果邻居本身就是目标，或者知道一个更近的路线，那么该节点将发送**<u>路线回复（RREP）</u>**。
- 否则，节点在增加 hop_cnt 后传播 RREQ，并设置一个**指向接收到 RREQ 的邻居**的指针（反向路径）。

```
< source_addr, source_sequence_# , 
broadcast_id, 
dest_addr, dest_sequence_#, 
hop_cnt >
```

- RREQ由<source_addr , broadcast_id>唯一标识
- broadcast_id随每个RREQ递增
- Dest_sequence_# 表示到目的地的路由的新鲜度
- source_sequence_# 表示反向路由到源的新鲜度

### AODV 协议：路径发现

当一个邻居节点收到RREQ

- 如果邻居本身就是目标，或者知道一个更近的路线，那么该节点将发送路线回复（RREP）。
- 否则，节点在增加 hop_cnt 后传播 RREQ，并设置一个**指向接收到 RREQ 的邻居**的指针（反向路径）。

### 反向路径设置

当一个节点转发一个RREQ时，它在其路由表中为来源建立一个反向路由条目。这个反向路由条目包含

- source node ID
- source sequence number
- used to maintain freshness about reverse route to source 「用来保持对源头反向路线的新鲜度」
- number of hops
- neighbor ID 「neighbor ID」

## 动态源路由（DSR）

### 源路由与分布式路由

- Source routing： Source决定了到目的地的整条路径
- Distributed routing
  - 每个节点自己决定其下一跳。
  - 到目的地的路径是由所有节点的下一跳节点逐步确定的

![CleanShot 2022-12-11 at 19.25.58@2x.png](https://pic.hanjiaming.com.cn/2022/12/11/3041f778736d3.png)

- 一个反应式（按需）、无循环的协议
- 没有定期的路由广告消息 (从而减少网络带宽的开销)
  - 只有在需要向某一目的地发送数据包的路径，而目前没有路径可用时，才会触发路由发现「Route discovery」
  - 只有在使用路径时才需要进行路径维护「Route maintenance」，它确保了路径可以连续使用。

每个节点都维护一个路由缓存，储存它所学到的路由。

- 如果没有从路由缓存中找到一个路由，源头会尝试使用路由发现来发现一个路由
- 航线维护监控使用中的航线的正确运行。

### DSR 协议：路由回复





































