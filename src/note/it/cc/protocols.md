---
article: false
date: 2024-05-05
index: true
order: 4
headerDepth: 2

---

# Networking Protocols

![1715244529078.png](https://pic.hanjiaming.com.cn/2024/05/09/d170d3e2a5e09.png)

如何将数据报发送到群集中正确的物理主机？

- IP 数据报包含一个 IP 地址
  - IP 地址在操作系统中配置（例如 DHCP）
- 大多数集群交换机都在数据链路层「datalink」（第 2 层）运行。
  - L2交换机只理解MAC地址
  - 端口的概念只存在于计算机中
- 需要将 IP 地址映射到 MAC 地址的方法

<u>Solution: Address Resolution Protocol</u>

<img src="https://pic.hanjiaming.com.cn/2024/05/05/a33452ca4daa0.png" alt="1714906636069.png" style="zoom:30%;" />

## ARP Protocol

Address Resolution Protocol「地址解析协议」

![1714907623129.png](https://pic.hanjiaming.com.cn/2024/05/05/2048668154b73.png)

- A Network Layer (Layer 2)protocol
- Translates the IP address of a computer on a local network to an equivalent layer 2 address (MAC address)

Example: Sending a packet from machine A to B using level-2 switch.

- 问题：给定 B 的 IP 地址，如何确定 B 的 MAC 地址？
- ARP Protocol: A 想要向 B 发送数据报，而 A 不知道 B 的 MAC 地址。
- Solution:
  - A 广播 ARP 查询数据包，其中包含 B 的 IP 地址
    - Dest MAC address: FF-FF-FF-FF-FF-FF
    - **all machines on LAN receive ARP query**
  - B receives ARP packet, replies to A with its (B's)MAC address (unicast)
    - Dest MAC address = A's MAC address
  - A 在其 ARP 表中缓存（保存）IP 到 MAC 地址对，直到信息变旧（超时）
  - ARP is "plug-and-play「即插即用」": 节点无需网络管理员干预即可创建 ARP 表
    - 节点无需网络管理员的干预即可创建其 ARP 表

## ARP Packet Format

![1714910064089.png](https://pic.hanjiaming.com.cn/2024/05/05/4c589b972c297.png)

example

![1714910395850.png](https://pic.hanjiaming.com.cn/2024/05/05/7ed2ff7257546.png)

## ARP Table

由于为每个 IP 数据报发送 ARP 请求/应答的效率很低，因此主机会对当前条目 ARP 表进行缓存。

LAN上的每个IP节点（主机、路由器）都有一个ARP表

- ARP Table: IP/MAC address mappings for some LAN nodes:IP address; MAC address; TTL>
- TTL (Time To Live):time after which address mapping will be forgotten (typically 20 min)

![1714911402118.png](https://pic.hanjiaming.com.cn/2024/05/05/57ad7dc47af71.png)

## ARP Command

- arp 命令本身用于查看 ARP 表中的当前信息。
- 该表将网段上机器的 IP 地址与它们的 MAC 地址进行了映射。

![1714911721912.png](https://pic.hanjiaming.com.cn/2024/05/05/528cbbf9de132.png)

## NAT Protocol

如何将数据包从专用网络内的集群节点发送到外部世界（反之亦然）？

![1714912094254.png](https://pic.hanjiaming.com.cn/2024/05/05/3674c14eb386e.png)

NAT is a router function where IP addresses (and possibly port numbers) of IP datagrams are replaced at the boundary of a private network

- Run on routers that connect private networks to the public Internet
- Replace the IP address-port pair <u>of an IP packet</u> with another IP address-port pair
- 使专用网络「private network」上的主机能够与 Internet 上的主机进行通信

Also known as:

- IP Masquerading - Linux
- Port Address Translation (PAT) - Cisco

::: note Private Network

Private IP network is an IP network that is not directly connected to the Internet.

- Not allocated to any specific organization
- Non-routable: IP packets addressed by them cannot be transmitted onto the public Internet

Private IP address ranges: 

<img src="https://pic.hanjiaming.com.cn/2024/05/05/509346147c04d.png" alt="1714912602556.png" style="zoom:25%;" />

:::

这些地址通常用于家庭、办公室和企业局域网（LAN）。

![1714912691966.png](https://pic.hanjiaming.com.cn/2024/05/05/6140baa7a7bf4.png)

## NAT Motivation

Motivation: "Single Entry Point" -> **uses just one IP address** for the whole cluster as far as outside world is concerned:

- 可以在不通知外界的情况下更改本地网络中设备的IP地址（易于使用）
- 可以在不改变本地网络设备IP地址的情况下更换ISP（方便管理）
- Devices inside local net not explicitly addressable, visible by outside world (more secure).「本地网内的设备不可明确寻址，但可被外界看到（更安全）。」

Claim: 50% of broadband users are behind NATs

Outgoing Web Client Through NAT: 

![1714922465953.png](https://pic.hanjiaming.com.cn/2024/05/05/b8a1ded6a1874.png)

![1714922534921.png](https://pic.hanjiaming.com.cn/2024/05/05/6e4cad55ff8fa.png)

原理：实际上是NAT服务器在做端口映射。

![1714922778208.png](https://pic.hanjiaming.com.cn/2024/05/05/57d2c2e78ea0d.png)

![1714922626507.png](https://pic.hanjiaming.com.cn/2024/05/05/9d080c914ef51.png)

*注意：伪装会更改源端口以及源地址，以确保多路分解。值取决于实现。