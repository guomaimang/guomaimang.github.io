---
article: false
date: 2022-12-03
order: 1
headerDepth: 2
---

# WLAN

通过无线接入连接的局域网络（LAN）。

特征：very flexible, no wiring needed, save cost, robust, high-speed Internet access

<img src="https://pic.hanjiaming.com.cn/2022/10/18/83f9af334a5ab.png" alt="1666096225060.png" style="zoom:33%;" />

## WLAN 网络基础设施

### Infrastructure network

- 物理上相互靠近的笔记本电脑（20-100米）被链接到一个接入点（AP）。
- AP控制对共享通道的访问
  - 例如，可以对 AP 进行编程以选择跳频序列之一，并且无线设备与相应的 FH 序列同步
- AP作为无线和有线网络之间的桥梁。
- 几个AP可以一起工作，提供更广泛的无线覆盖（例如，为整个建筑或校园）。

<img src="https://pic.hanjiaming.com.cn/2022/10/18/f6cdc968cbd5f.png" alt="1666096473000.png" style="zoom:33%;" />

### Ad hoc network

没有中央控制器，无线设备使用MAC协议（例如，IEEE 802.11使用CSMA/CA）来访问共享通道。

## WLAN Standards

两套标准系列

- IEEE 802.11
- ETSI HiperLAN（高性能无线局域网）

## 802.11 System Architecture

**Infrastructure-based WLAN**

- Station (STA)：具有无线介质访问机制的终端和与AP的无线电联系
- Access Point (AP)：设备连接到分配系统，并提供与站点的无线连接
- Basic Service Set (BSS)：一组使用相同无线电频率信道的站和AP
- 扩展服务集 (ESS)
  - 一组BSS整合在一起
  - ESS在LLC层看来与独立的BSS相同
  - 移动台可以透明地从一个BSS移动到另一个LLC
- Distribution System (DS) :连接ESS中的AP以形成一个逻辑网络
- Portal: 桥接到其他（有线）网络

<img src="https://pic.hanjiaming.com.cn/2022/10/18/92d8119dde13f.png" alt="CleanShot 2022-10-18 at 23.07.44@2x.png" style="zoom: 33%;" />

**Ad Hoc WLAN**

独立基本服务组合（IBSS）: A group of stations using the same radio frequency

<img src="https://pic.hanjiaming.com.cn/2022/10/18/2397a2b4fb9e5.png" alt="1666106124841.png" style="zoom:33%;" />

IEEE 802.11x规定了物理层（PHY）和介质访问控制（MAC）标准

<img src="https://pic.hanjiaming.com.cn/2022/10/18/9637fb48775c7.png" alt="1666106280121.png" style="zoom:25%;" />

## ETSI

**ETSI: E**uropean **T**elecommunications **S**tandards **I**nstitute

## Wi-Fi

Stand for Wireless Fidelity, a family of wireless network protocols

Wi-Fi联盟（成立于1999年）由800多家公司组成，以认证产品的互操作性和向后兼容性，并推广基于IEEE 802.11标准的WLAN技术。

Wi-Fi联盟在2018年宣布了一个新的命名规则。

<img src="https://pic.hanjiaming.com.cn/2022/10/18/4360f9a37499a.png" alt="1666107495234.png" style="zoom:50%;" />

## Hiper LAN

HiperLAN - 高性能无线局域网

- 欧洲ETSI制定的无线局域网标准
- 该标准规定了MAC和PHY层的通用空中接口
- 在5.15 GHz和17.1 GHz频段上运行
- 覆盖范围为50米
- 专为 ad hoc 计算而设计

一系列的标准

- HiperLAN/1 - 用于商业工作区的室内局域网（~20 Mbps）。
- HiperLAN/2 - 室内宽带多媒体（~50 Mbps），用于室内宽带多媒体