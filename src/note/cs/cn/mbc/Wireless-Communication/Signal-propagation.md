---
article: false
date: 2022-12-03
order: 3
headerDepth: 1
---

# Signal Propagation

## Antennas

电磁信号是通过天线产生、传输和接收的。

- 发射天线--发射器使用发射天线，以**无线电或微波信号**的形式向周围环境输送辐射。
- 接收天线--将来自环境的信号转换为交流电，并将其传递给接收器

![1666082707500.png](https://pic.hanjiaming.com.cn/2022/10/18/a40876f6d7f85.png)

### Isotropic radiator

- 在所有方向的辐射相等（三维）。
- 只是一个理论上的参考天线。

### Real antennas

- 不是各向同性的辐射器
- 一些简单的天线：天线的尺寸与波长成正比，以获得更好的发射/接收性能

## Signal Propagation

信号在自由空间的传播是一条直光（line of sight，LOS）。

自由空间传播模型：在真空中，接收器的接收功率与1/d<sup>2</sup>成正比（d=发送者和接收器之间的距离）。

![1666083284909.png](https://pic.hanjiaming.com.cn/2022/10/18/73034cff40d9c.png)

## Signal Propagation Ranges

Transmission range

- 交流是可能的
- 低错误率

Interference range

- 沟通是不可能的
- 信号干扰了其他的传输

<img src="https://pic.hanjiaming.com.cn/2022/10/18/ab9d929a875f1.png" alt="1666083368887.png" style="zoom:33%;" />

## 信号传播：复杂性

信号的传播还受到以下因素的影响：

- 穿过障碍物后的阴影
- 在大型障碍物上的反射
- 在小障碍物上的散射
- 障碍物边缘的衍射

<img src="https://pic.hanjiaming.com.cn/2022/10/18/e8d36794f9b0c.png" alt="1666084219333.png" style="zoom:33%;" />

## Multipath Propagation

由于反射、散射、衍射等原因，信号从发送方到接收方可以采取许多不同的路径。

- 不同路径上的信号在不同时间到达：一个符号可能会干扰“相邻”符号：符号间干扰 (ISI)。
- 到达接收器的信号可能有不同的相位，也可能完全不相位而相互抵消。
  - 信号的失真取决于不同部分的相位

## Fading Effects

由于以下原因，渠道特征随时间和地点而变化

- change of signal paths
- different delay variations of different signal paths
- different phases of different signal paths

接收功率的快速波动（fast fading / short term fading）

<img src="https://pic.hanjiaming.com.cn/2022/10/18/c7a28cd5ff8b3.png" alt="1666084768568.png" style="zoom:33%;" />

周围的障碍物：平均接收功率的缓慢变化 (slow fading / long term fading)

<img src="https://pic.hanjiaming.com.cn/2022/10/18/28d2f4ada0f10.png" alt="1666084915287.png" style="zoom:33%;" />









