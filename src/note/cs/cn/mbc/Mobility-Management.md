---
article: true
date: 2022-12-03
order: 6
headerDepth: 1
category:
  - tech

---

# Mobility Management

为什么要进行移动性管理？

- 网络需要跟踪移动用户
- 在有线网络中，一个设备和它的位置之间存在着固定的关系
- 在无线网络中，移动设备可以自由移动，因此它的网络接入点会随着它在网络覆盖区的移动而改变。
  - 一个移动设备的ID不再提供移动设备的位置信息
  - 每个设备的位置都必须由网络来维护

The main objectives

- 位置管理 - 确定移动设备在某一特定时间的位置
  - 位置信息对于建立连接和信息传递是必需的。
  - 随着移动设备的开机、移动或关机，位置信息需要在位置数据库中更新。
  - 移动用户的移动造成了设备位置的不确定性，需要由网络来处理。
- 交接管理 - 在移动设备继续移动和改变其对网络的接入点时保持连接

<!-- more -->

---

蜂窝网络中的移动性管理

## Handoff Management

### Handoff process

- The process of transferring an ongoing call **from one channel** connected to the *core network* **to another channel**;
- During the call, the old traffic channel is released and a new traffic channel is assigned

### Reasons for handoff

- Mobile user moves out of the coverage of a BS「移动基站」
- 信号强度恶化「deteriorates」，低于阈值「threshold」
- Traffic load management

### Four stages

1. Handoff initialization: User or network agent identifies the need for handoff
2. New connection generation: 网络为交接连接寻找资源，并为连接的建立执行额外的路由操作。
3. Data-flow control: Network controls the delivery of the data-flow from the former connection path to the new connection path according to the agreement upon the service「网络根据*服务协议*控制数据流从原来的连接路径向新的连接路径的传输。」
4. Handoff completion: The unneeded resources of the previous connection are released

### Dissociation and re-association operations

- Dissociation
  - MS is dissociated with old BS
  - Traffic channel assigned to MS in old BS is released
- Re-association
  - MS is associated with new BS
  - Traffic channel in new BS is assigned to MS to support the ongoing call

### Handoff Decision Algorithms

交接决策算法决定了 触发启动交接过程决定的条件

交接决策算法是基于 当前 和 邻近cell 的 接收信号强度（RSS）或 接收信号功率P。

<img src="https://pic.hanjiaming.com.cn/2022/12/07/23cb90ce7cf38.png" alt="1670412905402.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/12/07/36771be26400e.png" alt="1670414730098.png" style="zoom: 33%;" />

### 切换过程的类型：硬切换和软切换

- Hard handoff
  - “Break before make” connection
    - MS stays connected to only one cell at a time
    - 在与目标cell建立连接之前，MS中断与旧cell的连接
  - 在切换期间造成瞬间通话中断
  - 例如，**FDMA 和 TDMA** 系统使用硬切换
- Soft handoff
  - “Make before break” connection
    - 在执行交接时，MS可以同时连接到多个cell，并使用合并的多个信号
    - 然后，它选择一个单元，并放弃其他单元
  - MS 立即从旧连接切换到新连接而不会中断通话
  - 例如，**CDMA**系统使用软交接。

### Intra-cell vs Inter-cell vs Inter-MSC

<img src="https://pic.hanjiaming.com.cn/2022/12/07/46913141b518d.png" alt="1670415516557.png" style="zoom:25%;" /><img src="https://pic.hanjiaming.com.cn/2022/12/07/47a2e7b4bb9dc.png" alt="1670415535253.png" style="zoom: 25%;" /><img src="https://pic.hanjiaming.com.cn/2022/12/07/26e2f1a3e57d4.png" alt="1670415584698.png" style="zoom: 25%;" />

- Intra-cell handoff
  - MS在cell内移动，但跨越扇区边界，或者MS在原流量信道中遇到无法忍受的信号强度下降
  - BS在同一cell找到一个具有适当信号强度的新流量通道
  - User’s call is transferred to the new channel
  - MS’s dissociation/re-association involve the traffic channels **within the same cell**
  - **MSC does not involve in the handoff**
- Inter-cell handoff
  - 移动台进入相邻cell
  - 用户的呼叫被转移到目标cell的一个新的流量通道上
  - 交接发生在由同一MSC管理的不同BS之间
  - MS的分离/再分离涉及两个BS的流量通道，以及每个BS和同一个MSC之间的链接，所有这些都在MSC的协调下进行
- Inter-MSC handoff
  - MS的移动跨越了两个细胞的边界，而这两个细胞是由不同的MSCs管理的。
  - Handoff occurs between different BSs that connect to different MSCs
  - MS的分离/重新关联涉及两个BS的流量通道，通过不同MSC和BS之间的链接，以及MSC之间的链接。
  - 两种MSC都涉及交接

## Location Management

Location management

- Locate and track MSs
- Discover the current access point of the MS for call/message delivery
- Update the location database

Two main methods for location management

- Without location update
- Location update with location areas (LAs)

### Without Location Update

- Basic idea
  - 网络没有维护 MS 的当前位置信息
  - 每当有呼叫到达时，网络就会在覆盖区域内发送搜索信息。
  - 当 MS 收到搜索信息时，MS 对信息进行回复，以便网络找到 MS 的位置。
- Advantages
  - Simplicity「简洁性」
  - No location update cost
- Disadvantages
  - High searching cost for incoming calls
  - Need some response time for searching MS

### Location Update with Location Areas

Location area (LA)

- 网络被划分为若干个不重叠的分区
- 每个分区由一定数量的相邻单元组成，称为LA
- LA对位置的不确定性提出了一个上限「upper bound」

<img src="https://pic.hanjiaming.com.cn/2022/12/07/356af9cd26ab0.png" alt="1670419763956.png" style="zoom: 33%;" />

- Basic idea
  - MS 向系统报告其当前的 LA 信息 - 位置更新：周期性地或当 MS 移动穿过 LA 边界时
  - 系统通过位置更新维护 MS 的 LA
    - 它知道MS位于哪个LA
    - 但它不知道 MS 精确定位在哪个 cell 
  - 当一个新信息到达时，系统只搜索 LA 内部的 MS
- Advantage
  - 由于系统将搜索区域限制在 LA 内，因此节省了搜索成本

### Location Database

位置信息被保存在两个位置数据库中：归属位置寄存器「home location register」 (HLR) 和 访客位置寄存器visitor location register」 (VLR)

- HLR
  - A home DB for each MS「每个MS的主数据库」
  - Located at a pre-specified zone「位于一个预先指定的区域」
  - 在 "用户档案 "中维护用户数据和当前的LA
  - 当MS移动时，LA信息将被更新。
- VLR
  - 一个动态数据库，包含关于MS的临时信息。
  - 位于MSC，为来访的MS提供服务
  - 当一个MS移动到一个新的MSC区域时，该MSC的VLR将从HLR请求关于MS的信息。
  - 如果MS稍后进行呼叫，VLR将拥有呼叫设置所需的信息，而不必每次都查询HLR。

### Location Management Operations

- Subscription：当用户订阅服务时，在 HLR 中永久创建用户配置文件记录
- Location update (registration)
  - MS在需要时向网络发送位置更新报告（例如，当它通电时，或移动到新的区域）。
  - 网络更新位置数据库中 MS 的 LA 信息
  - Network authenticates the MS
  - 网络更新位置数据库中MS的LA信息
- Call delivery
  - Network queries the precise location information of MS when a call arrives「当呼叫到达时，网络查询MS的精确位置信息」
  - 网络要求BSs在本地广播「broadcast」一个寻呼「paging」信息
  - Target MS replies so that the network knows the precise cell where MS locates
  - Call is delivered to the BS of the found cell

### Location Update Process<Badge text="算法设计" type="info" />

- U1: MS进入新的LA并向BS发送位置更新信息
- U2：信息转发给MSC，MSC向VLR发起注册查询
- U3：如果MS被VLR知道，VLR更新成新的位置，注册完成；
  否则VLR确定MS的HLR的位置并向HLR发送位置注册消息。
- U4：HLR对MS进行认证，更新数据库中当前VLR的身份，并向VLR确认位置注册；
  用户资料的全部或部分可能被转发给新的VLR。
- U5：HLR向旧的VLR发送注册取消信息
- U6：旧VLR删除MS的记录并确认取消

<img src="https://pic.hanjiaming.com.cn/2022/12/07/39e0c0feba019.png" alt="1670424940027.png" style="zoom:33%;" />

### Call Delivery Process<Badge text="算法设计" type="info" />

- C1: MS x makes a call request to BS for MS y
- C2：消息被转发到 MSC 并且查询 y 的 VLR 以获取 y 的位置
- C3：如果失败，查询接收者y的HLR
- C4：HLR确定y的当前VLR，并向VLR发送路由请求信息。
- C5：y 的 VLR 对其 HLR 的响应
- C6：HLR将位置信息转发给x的MSC
- C7：呼叫x的MSC建立到y的接收MSC的连接
- C8: Receiving MSC pages y via all the cells in the LA in which y is currently located
- C9: y通过服务BS回复；MSC将cell内的业务信道分配给y，完成x和y之间的呼叫连接

### Paging Process<Badge text="算法设计" type="info" />

1. 当呼叫到达时，系统通过要求MS可能居住的cell的BS在本地广播寻呼信息，启动对目标MS的搜索。
2. 所有的MS都能听到寻呼信息，但只有目标MS会发回响应信息
3. 该地区的几个BS可能会听到响应信息。他们都会向MSC报告MS在他们的覆盖范围内，并报告信号强度的测量结果。
4. MSC收到这些报告，选择信号最强的一个作为目标MS的服务BS。

### Parallel Paging vs Sequential Paging

- Parallel paging
  - All cells are paged simultaneously「所有单元格同时被分页」
  - 减少延迟 - 有利于有延迟限制的分页
- Sequential paging
  - Cells are paged once a time until the MS is located
    - 最短距离优先：系统从MS最后更新的位置开始，按照最短距离第一的顺序对小区进行排序，并根据顺序对小区进行分页
    - 最高定位概率优先：系统估计MS可能在LA内的每个单元中定位的概率，按照概率递减的顺序对单元进行排序，并按照顺序对单元进行排序。
  - 节省带宽 - 有利于在没有延迟限制的情况下进行传呼

### Location Management Cost <Badge text="计算题" type="info" />

![1670700587503.png](https://pic.hanjiaming.com.cn/2022/12/11/f74644a8e3fa0.png)

### Location Management Issues

影响位置管理性能的因素很多

- Size of location area
- Location update methods
- Location database organization

位置管理需要

- 最大限度地降低位置管理成本（数据库的更新成本和查询成本）。
- 在位置更新成本和呼叫传递成本之间做出权衡

### Size of Location Areas

Big size vs. small size

- Big LA
  - 降低位置更新成本
  - 增加寻呼成本
- Small LA
  - 增加位置更新成本
  - 降低寻呼成本

### Location Update Methods<Badge text="算法设计" type="info" />

#### Static LAs vs. dynamic LAs

- Static LAs 是固定的区域，可能不符合流动性变化和呼叫模式。例如，位于LA边界的用户可能在两个LA之间来回移动，这导致频繁的位置更新信息
- dynamic LAs 可以根据某些标准来确定。MS的位置更新过程可以基于时间、用户移动水平和用户密度水平等因素
  - 例如，用户的高流动性可能导致大量的LA
  - 结合使用位置更新和传呼操作
  - 在它们之间做一个权衡

#### 动态位置更新方案

![1670701114680.png](https://pic.hanjiaming.com.cn/2022/12/11/4a580c9f15925.png)

- 基于时间：MS 以固定时间间隔（使用时间阈值）定期执行位置更新
- 基于距离：MS定位更新是通过移动到离前一个位置足够远的位置来触发的（使用距离阈值）
- 基于运动：MS的定位更新是通过跨越一定数量的不同小区边界来触发的（使用移动阈值）。
  - 在某些情况下是有用的，例如，用户在LA边界之间来回移动

![1670701137297.png](https://pic.hanjiaming.com.cn/2022/12/11/e30e1a12fae61.png)

### Location Database Organization

位置信息应该被组织起来，以减少查询成本和更新成本。

#### HLR/VLR的缺点

- HLR对一个MS的分配是永久性的
  - 用户可以永久移动到一个新的地方，但仍然必须联系以前的 HLR
  - 例如，如果MS被转移到欧洲，而其HLR在中国，成本将非常高。
- 没有利用流动的地域性
  - 用户倾向于在当地流动
  - 如果MS目前位于远离其HLR的地方，例如MS在欧洲漫游而其HLR在中国，那么成本也会非常高。

#### Enhanced schemes

- 用于最小化HLR查询成本的呼叫传递方案

  - 每个用户的位置缓存
    - 每次调用用户x时，x的VLR被缓存在调用者c的MSC的VLR中。
    - 随后对x起源的任何调用，只要x没有移动到一个新的LA，任何从该MSC发起的对x的后续调用都可以重复使用这一信息。
    - 问题：如何处理无效的缓存？
      - 急切的缓存 - 每当一个用户移动到一个新的LA，这个用户的VLR的所有缓存条目都会被更新。**如果用户经常移动，位置更新成本会增加**
      - 惰性缓存：不执行缓存更新；调用时，先访问缓存的VLR；如果被击中，完成；如果错过，请联系 HLR。**错过时有额外的成本，因为必须先访问缓存的VLR。**
  - 用户资料复制
    - 观察：每个用户通常与少数用户进行频繁的交流
    - 如何利用这一观察？
      - 提前在选定的VLR上复制这些经常被呼叫的用户的用户资料
      - 当从某个LA发起呼叫时，相应的MSC会确定被叫MS的用户配置文件的复制是否在本地可用。
        - 如果可用，则不需要 HLR 查询
    - 当MS移动到另一个LA时，网络会更新MS的用户配置文件的所有复制。
    - 查询HLR的成本可以降低，但位置更新的开销会更高。
- 用于最小化HLR位置更新成本的方案

  - Pointer forwarding
    - 每当一个MS移动到一个新的LA，一个转发指针就会从它以前的VLR建立到新的VLR上。
    - 对MS的呼叫将首先查询HLR以确定第一个VLR，然后沿着链路到达当前VLR
    - 指针链的长度可以被限制在一个最大值K，以减少定位MS的延迟。
    - 当指针链的长度达到K时，不允许额外的转发，并将位置变化报告给HLR
    - 这种方法可以减少更新HLR的成本，但可能会导致更长的搜索延迟。
  - Local anchoring
    <img src="https://pic.hanjiaming.com.cn/2022/12/11/faa22c72f88d0.png" alt="1670737211733.png" style="zoom:50%;" />
    - 靠近 MS 的 VLR 被选为本地锚点
    - **当 MS 移动到一个新的LA时，MS将对本地锚进行位置更新，而不是MS的HLR**
    - 在对 MS 的呼叫请求到达之前，MS 的本地锚点不会更改
    - 当有新的呼叫到来时，为用户服务的 VLR 成为新的本地锚点，并向 HLR 进行位置更新
    - 这个方案可以避免频繁更新HLR
    - 缺点是，当用户不断移动而没有收到任何呼叫时，对本地锚点的更新可能会变得无用。


---

无线 IP 网络中的移动性管理

## Mobile IP

IP stands for Internet protocol

- 一个用于互联网的网络层协议
- IP假设终端主机在固定的物理位置，IP地址与终端主机绑定在一起
  - 每个IP地址都有网络部分和主机部分（网络ID+主机ID）。
- IP地址使IP路由算法能够将数据包发送到正确的网络。
  - 中间路由器在转发数据包时查看网络ID

如果主机在网络之间移动会怎样？

- 移动主机「Mobile Host（MH）」移动到一个新的网络时不能改变IP地址
- 如果没有特定的支持，当 MH 远离其专用网络时，消息传递到 MH 是不可能的
- The solution is using mobile IP

移动IP是作为一种透明地处理MH的流动性的手段而开发的。

- 尽管移动主机可能连接到任何 assess point，但允许使用永久地址将数据包路由到 M H
- 使MH能够在网络之间无缝移动，而不会在发送数据包时中断进程
- 不需要更改 非MHs/路由器 的软件
- 不需要更改 IP 地址或 IP 地址格式
- 需要额外的基础设施组件

## Mobile IP Architecture

- Mobile host (MH): 移动主机（MH）可以在不改变其IP地址的情况下从一个网络改变其接入点到另一个网络。
- Home address: When a MH has been registered at the home network, it has a permanent IP address called its home address
- Home network: 当 MH 在归属网络注册后，它有一个永久的 IP 地址，称为归属地址
- Foreign network: The network where the MH currently accesses the network
- Care-of-address (COA): 当一个MH在国外网络中定位时，它有一个临时的IP地址，称为 "关心地址"，它可以识别MH在国外网络中的当前位置。
- Home agent (HA): 位于 MH Home network 中的路由器
- 具有额外的功能
  - Advertise itself periodically
  - Bind MH’s home address with its COA
  - Forward packets to foreign network when MH is away
  - Encapsulate messages that are delivered to MH
- Foreign agent (FA)
  - 位于外部网络的另一台路由器用于 MH
  - 具有增强的功能
    - Advertise itself periodically
    - 当 MH 远离 HA 时，它使用 FA 向 HA 发送/接收数据
    - 转发MH的注册请求
    - 解封传递给MH的信息
- Correspondent host (CH)「通讯员」：一个CH，不管是固定的还是移动的，都可以向MH发送数据包。

<img src="https://pic.hanjiaming.com.cn/2022/12/11/6e91917d8f507.png" alt="1670739049365.png" style="zoom:50%;" />

## Location Management

- Agent Discovery
- Registration
- Data Delivery

### Agent Discovery

MH 使用发现程序来识别他们的 HA 和 FA

- MH must determine if it is attached to its home network or a foreign network
  - MH 侦听来自 HA 和 FA 的周期性 ICMP 路由器通告消息
  - 如果需要立即发布广告，MH也可以发出一个ICMP路由器请求消息。
  - MH compares network ID of the router's IP address with the network ID of MH’s IP address
    - The same network ID, MH stays at home network
    - Different network IDs, MH locates at a foreign network
  - 如果MH被转移到另一个国外网络，它需要从FA获得一个新的COA

### Registration

- MH must register when
  - 一个MH进入了一个新的网络区域
  - 注册的计时器已过期
- 注册包括
  - MH registers itself with the FA and gets a COA
  - MH 向它的 HA 注册自己，通知它的 HA 当前的 COA。这是由 FA 代表 MH 完成的
  - MH 过期续签
- Deregistration：当MH返回主网络时，它自己取消了注册。

### Registration Procedure

MH 使用注册程序将其 COA 通知 HA。

- MH向FA发送注册请求，并提供其 Home address
- FA 将注册请求转发给 HA
- 如果 HA 接受注册，它会更新将 MH 的 Home address 与其 COA 相关联的移动性绑定表
- HA 通知 FA 注册被接受
- FA 更新其访客列表，将 MH 的 Home address 映射到其 MAC 地址和 FA 地址
- FA通知MH，注册已被接受

![1670741892624.png](https://pic.hanjiaming.com.cn/2022/12/11/d6462f4071217.png)

### Data Delivery

隧道「Tunneling」 - 在本地网络和外国网络之间建立一个隧道，并在隧道中向该MH发送封装的数据。

- 当CH向MH发送数据包时，所有数据包的目的地址都是MH的Home address，因此，所有数据包都被发送到Home network。
- 在接收到数据包后，HA识别出数据包的目标地址属于MH。然后
  - HA在其移动性绑定表中查找MH的COA
  - 该数据包被包裹在一个新的数据包中，COA作为新数据包的目标地址 - 被称为封装。
  - HA将数据包转发到拥有COA的国外网络。
- FA 识别 COA，解包（简称解封装）并使用其原始 home address 发送给 MH

![1670742730420.png](https://pic.hanjiaming.com.cn/2022/12/11/e629873420267.png)

### Routing Inefficiency

- 隧道化导致路由效率低下
- Triangle routing
- Double crossing

### Routing Optimization

路由优化—让 MH 将其 COA 告知 CH，因此 CH可以直接将数据包发送给MH

- 当HA收到不在家的MH的数据包时，HA会向CH发送绑定更新信息。
  - 绑定更新信息有MH的当前COA
  - CH缓存COA，未来的数据包直接发送到COA。
- 当MH移动到新的FA时，缓存在CH中的COA就会变得陈旧。
  - 如果不重新传输到新地址，发送到旧FA的数据包可能会被丢弃。
  - 绑定可能会过时，然后 CH 向 MH 的 HA 发送绑定请求消息

## Handoff Management

当 MH 移动到新的 FA2

- FA 定期发送广告信息
- MH 注册到新的FA2
- FA2向HA发送移动性绑定
- FA2通知旧FA1更新MH的位置
- FA1 向 FA2 发送 ACK
- FA1将MH的任何数据包转发给FA2
- FA2向MH发送交接完成信息

当 CH 向旧 FA 发送数据包时

- 如果老FA知道MH现在的FA
- 该数据包被转发到当前的FA
- 老的 FA 向 HA 发送绑定警告信息
- HA 向 CH 发送绑定更新消息
- 未来的数据包将直接发送到新的FA

如果旧的FA不知道MH的现任FA

- 该数据包被转发到HA
- HA将数据包转发给当前的FA
- HA向CH发送绑定更新消息
- 未来的数据包将直接发送到新的FA