---
article: false
date: 2022-12-03
order: 5
headerDepth: 1
---

# Spread Spectrum

## 扩频技术

「Spread Spectrum Techniques」

扩频使用大范围的频率来传输窄带信号，以抵御干扰。

- 无线电传输的问题：在干扰期间，窄带信号可能会被抹去
- 解决方案：使用特殊编码将窄带信号传播成宽带信号，以防止窄带干扰

![1666088769800.png](https://pic.hanjiaming.com.cn/2022/10/18/272e209f4d707.png)

两种不同的扩频方法

- DSSS（直接序列扩频）「Direct Sequence Spread Spectrum」
- FHSS（跳频扩频）「Frequency Hopping Spread Spectrum」

## 传播和干扰

<img src="https://pic.hanjiaming.com.cn/2022/10/18/d6cec98707807.png" alt="1666088795002.png" style="zoom: 25%;" />

## 扩展和频率选择性衰落

「Spreading and Frequency Selective Fading」

<img src="https://pic.hanjiaming.com.cn/2022/10/18/d3427c9b251fa.png" alt="1666089383550.png" style="zoom: 25%;" />

## DSSS

在发送 msg 之前，每个 msg 数据流都与扩频码混合

- 扩码：m-bit 码片序列
- 其效果是将信号频谱扩散到一个更宽的频段上
- 一种技术是使用异或将 msg 数据流与扩展码混合

## Features

- 允许多个用户使用同一频段
  - 对于知道发射信号模式的专用接收器来说，扩频信号很容易被检测出来。
  - 对其他人来说，扩频信号看起来像背景噪音
- 更高的可靠性和安全性
  - 抵抗频率选择性衰减和干扰
  - 提供安全的通信并抵制窃听

































