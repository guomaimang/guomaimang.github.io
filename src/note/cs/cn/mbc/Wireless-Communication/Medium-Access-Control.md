---
article: false
date: 2022-12-03
order: 6
headerDepth: 1
---

# Medium Access Control

介质访问控制（MAC）方法调节多个终端访问共享介质

- 确定如何将介质资源（频率、时隙或扩频码等）分配给共享介质的终端
- 就像交通管制系统：当车辆试图穿过同一街道的十字路口时，他们需要交通法规（交通灯）来避免碰撞

## MAC Methods

基于信道的MAC方法

- 使用多路复用技术协调多个终端共享介质--每个终端都被分配到介质中的独立通道进行传输。
- 提供对介质的无碰撞多重访问
- 更适用于旨在传输语音的无线网络。GSM, Amps, IS-95, ...

## CSMA

Carrier Sense Multiple Access。CSMA - 发送者在发送数据包之前会感知到载波。

- Persistent CSMA：当介质繁忙时，站点可以持续等待介质空闲，然后以概率 p 进行传输
- Non-persistent CSMA：当介质繁忙时，一个站不会一直监测无线介质，而是在预定的时间再次监听介质。

CSMA/CD是CSMA的一个加强版。CD (collision detection)：一旦检测到碰撞，发送方就会终止传输

- CSMA/CD在有线网络中运行良好，但在无线网络中不适用
- 在无线网络中，CS和CD不起作用
  - 如果一个发送终端对发送方来说是 "隐藏 "的（在发送方的传输范围之外），CS就不起作用。发送方不能感应到传输。
  - CD不起作用，因为在接收方发生的碰撞不能被发送方发现。

<img src="https://pic.hanjiaming.com.cn/2022/12/13/a4dc019ee2b00.png" alt="1670901114982.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/12/13/e4280403b6ba8.png" alt="1670901170790.png" style="zoom: 33%;" />

## MACA

MACA使用短信令包（RTS/CTS）来避免碰撞

- RTS - 请求（或准备）发送，如果发送方想发送一个数据包，它首先向接收方广播一个简短的RTs数据包，以请求正确的
- CTS - 清除发送，接收方一旦准备好接收，就广播一个CTS数据包来授予权利。
- DATA 当发送方收到CTS时，它向接收方发送数据。

<img src="https://pic.hanjiaming.com.cn/2022/12/13/72f923d74727a.png" alt="1670901426228.png" style="zoom:50%;" />

MACA避免了隐藏的终端问题。MACA避免了暴露的终端问题。

## MACAW

- MACAW通过要求接收方在每次成功传输数据后发送确认（ACK）来增强MACA的功能
- 与上层网络相比，MAC层可以更快地恢复传输错误
- MACAW可以解决隐藏终端的问题，但一般不解决暴露终端的问题。

<img src="https://pic.hanjiaming.com.cn/2022/12/13/6a8bf4ed685f8.png" alt="1670901526625.png" style="zoom:50%;" />

## Polling

一个 "中心 "终端（所有其他终端都能听到的基站/接入点）可以根据一定的时间表轮询所有其他终端