---
article: false
date: 2024-12-12
index: true
order: 6
headerDepth: 1


---

# Peer-to-Peer Networking

## Wireless Communication with Peers

- 到目前为止，我们主要讨论了客户端-服务器架构
- 客户端通过网络从服务器请求数据或服务。（例如：内网或互联网）
- 有一些情况下，我们希望建立点对点连接
  - 直接与附近的设备共享文件
  - 在没有Wi-Fi接入点（AP）的情况下玩多人游戏

<img src="https://pic.hanjiaming.com.cn/2024/12/12/f823605be3961.png" alt="1733993914686.png" style="zoom:50%;" />

Methods for P2P wireless communication

- Peer-to-peer Wi-Fi (Wi-Fi Direct)
- Bluetooth
- NFC

## Wireless Fidelity (Wi-Fi)

- Wi-Fi联盟的商标
- A family of products using the **IEEE 802.11** standards
- Usually used to set up a “wireless local area network” (**WLAN**)

<img src="https://pic.hanjiaming.com.cn/2024/12/12/f8f5386408060.png" alt="1733993986872.png" style="zoom:50%;" />

Wi-Fi Peer-to-Peer/Wi-Fi Direct

- 使用Wi-Fi协议直接连接设备，无需无线接入点（AP）
- Supported in **Android 4.0** or above
- 设备通过建立P2P群组相互通信
  - 设备将成为“组所有者”（充当组中的 AP）
  - Other device will become “**Clients**”

## Bluetooth

- 用于短距离数据和语音通信的无线解决方案
- 适用于构建个人区域网络（PAN）
- 范围从0.5米到100米，通常小于10米

![1733994587891.png](https://pic.hanjiaming.com.cn/2024/12/12/72d86d3c1e892.png)

## Near-Field Communication (NFC)

- For short-range (**<10cm**) data communication
- One of the **RFID** (Radio Frequency Identification) standards
- Data rate: 106 kbps to 424 kbps
- Allows **two-way** communication between two devices









