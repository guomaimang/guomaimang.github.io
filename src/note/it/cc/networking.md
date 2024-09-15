---
article: false
date: 2024-04-07
index: true
order: 3
headerDepth: 2
---

# Networking

![1715244408072.png](https://pic.hanjiaming.com.cn/2024/05/09/97efe5ed22dd6.png)

## Basic Knowledge

### OSI 7 Layers

![1712422474583.png](https://pic.hanjiaming.com.cn/2024/04/07/cd0cf0ff479fe.png)

### Linux Networking

![1712422757768.png](https://pic.hanjiaming.com.cn/2024/04/07/aff2131733b8b.png)

A protocol defines the 

- format of packets 「数据包格式」
- and the rules for communicating them across the network「以及在网络上传输这些信息的规则。」.

![1712423060553.png](https://pic.hanjiaming.com.cn/2024/04/07/5066042e34b69.png)

### TCP/IP Packet Layout

<img src="https://pic.hanjiaming.com.cn/2024/04/07/6fa9238e7ba8a.png" alt="1712423502914.png" style="zoom: 50%;" />

::: tip TCP&UDP

- UDP (User Datagram Protocol) 数据包的长度由一个16位的字段来定义，所以理论上，UDP数据包的最大长度是 $2^{16}$ 字节，即 65536 字节。然而，这个长度包含了UDP头部的长度，而UDP头部的长度是8字节，所以UDP的有效载荷（Payload）的最大长度是 65536 - 8 = 65528字节。
- TCP (Transmission Control Protocol) 本身并没有明确规定 payload（有效负载）的最大长度。TCP 的数据长度是由 TCP 报文段的数据字段决定的，理论上这个长度可以达到 65535 字节，因为 TCP 报文段的长度字段是 16 位的，所以最大值为 $2^{16}-1=65535$。

:::

::: warning

实际上 TCP/UDP 的 payload 长度还受到 IP 层的限制。

- IPv4 的数据包（也被称为 "payload"）的最大长度是由总长度字段定义的，该字段是一个 16 位的值，所以其最大值是 $2^{16} - 1$，等于 65535 字节（64KB）。**然而，这个长度包括了 IP 头部的长度**
  - IP 头部的长度通常是 20 字节（当没有选项字段的时候）
  - 但可以增加到 60 字节（当选项字段完全被使用的时候）
  - IPv6 有一个叫做 "jumbogram" 的选项，它允许数据包的长度超过这个限制。
- 以太网（Ethernet）的最大传输单元（MTU）是1500字节

现代的网络协议，如TCP/IP，已经采用了一些技术来解决这个问题，例如分段和重组。因为如果需要传输的数据量非常大，那么就需要将数据分割成多个数据报进行传输，这可能会增加网络传输的复杂性和出错的可能性。**在实际的以太网环境中，大多数数据报的大小都会被限制在1500字节以下，以避免过度的分片和重组。**

:::

## How to send a message

### Data fragmentation

- Application sends message
- Data fragmentation TCP breaks it into **64 KBytes (65535 bytes)**segments

#### At TCP Layer

<img src="https://pic.hanjiaming.com.cn/2024/04/07/9941bef73050a.png" alt="1712423718657.png" style="zoom:33%;" />

#### At IP Layer

<img src="https://pic.hanjiaming.com.cn/2024/04/07/bb76ef48a38f3.png" alt="1712423790674.png" style="zoom: 33%;" />

IP添加20字节报头，发送到网络（IP允许处理的最大数据报是64KB。）

::: info How much overhead with TCP

20 bytes of TCP + 20 bytes of IP = 40 bytes app layer overhead

:::

### TCP header Port Number

![1712431473090.png](https://pic.hanjiaming.com.cn/2024/04/07/db206c1c91394.png)

::: tip 在OSI七层模型中，哪一层的协议包含IP地址？

在OSI七层模型中，IP地址是在第三层，也就是网络层(Network Layer)处理的。其他层不包含IP地址。

:::

### TCP: Reliable Byte Stream Delivery

![1712431824196.png](https://pic.hanjiaming.com.cn/2024/04/07/5b0047c6c200d.png)

### Network Driver Layer

<img src="https://pic.hanjiaming.com.cn/2024/04/07/97b2e59119d47.png" alt="1712465355981.png" style="zoom:50%;" />

#### Data Fragmentation by Network Driver

- Within the payload of the Ethernet frame is the IP datagram.
- The **IP datagram** contains a source IP address and destination IP address.

![1714058377948.png](https://pic.hanjiaming.com.cn/2024/04/25/52761c4cddce8.png)

#### Ethernet Frame/Packet

![1714059408395.png](https://pic.hanjiaming.com.cn/2024/04/25/549a4933eac6d.png)

![1714059506649.png](https://pic.hanjiaming.com.cn/2024/04/25/0b59475e8674b.png)

#### Ethernet MAC Address

Each network card is uniquely identified by a 48 bit (6 bytes) address called **Ethernet address**, also known as **Media Access Control (MAC)** address.

![1714061597077.png](https://pic.hanjiaming.com.cn/2024/04/26/c271392c60aee.png)

#### Connecting Devices

- Repeater/Hub (Layer 1)
  - 在 OSl 物理层工作，重新生成网络信号，并将其重新发送到其他网段。
- Layer 2 Switch
  - Acts on the data link layer (MAC address level)
  - Most switches operate at Layer 2 (low-cost,dumb,but fast)
- Layer 3 Switch/Router
  - Work at the OSI layer 3(Network layer)
  - Use the "**logical address**"(IP address)of packets and routing tables to determine the best path for data delivery.
- Layer 4 Switch (Load balancer)
  - Based on both Layer 3 (IP addressing) and Layer 4 (**TCP/UDP port numbers**)information.
  - Layer 4 headers are examined to determine port numbers.




::: tip

- 记住简单的一句话就好：报文源目的IP始终不变，MAC过一跳变一次。在此不考虑nat。
- 路由器用报文的目的IP查转发表，就能得到下一跳的IP，用下一跳的IP查MAC表就能知道下一跳的mac。
  那么转发表是怎么生成的呢？来自路由表，而路由表是通过IGP BGP之类的路由协议得来的端到端的路由。如果MAC表中没有对应的IP的表项怎么办呢，可以通过ARP协议学习到。
- 有路由表告诉你去往目的ip下一跳ip是什么，有arp表告诉你下一跳ip的mac是多少

:::

### Layer 2 Switch

When device A sends out a frame to another device,its MAC address is updated in the switch's lookup table.

![1714064982910.png](https://pic.hanjiaming.com.cn/2024/04/26/f1f3ee4f54804.png)

### Layer 3 Switch/Router

- A router is a device used to connect different networks,
- while a switch is the backbone of a network.

A "Layer 3" switch is simply a switch that has the added ability to do Layer 3 routing.

![1714065162564.png](https://pic.hanjiaming.com.cn/2024/04/26/cb03b1e137956.png)











