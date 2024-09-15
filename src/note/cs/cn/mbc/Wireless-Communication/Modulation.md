---
article: false
date: 2022-12-03
order: 4
headerDepth: 1
---

# Modulation Techniques

## 调制和解调

调制「Modulation」：载波信号如何被操纵以携带数据信息的过程

- 信息信号： 通常是低频信号（基带信号）
- 载波信号：一个更高频率的正弦波，不携带任何纯粹形式的信息
- 调制信号：载波的一些参数（A、f和φ）需要随时间变化以代表基带信号。

解调「Demodulation」：调制的反向过程，从收到的信号中提取数据信息。

<img src="https://pic.hanjiaming.com.cn/2022/10/18/17006d9019e54.png" alt="1666085668642.png" style="zoom:33%;" />

::: note 为什么不直接发送基带信号？

- 缩小天线的尺寸（尺寸→波长）：天线的长短和波长成正比，和频率成反比，频率越高，波长越短，天线也就可以做得越短。
- 通过将基带信号转移到高频段，提供频分复用功能
- 避免由于无线介质特性导致的信号失真

<img src="https://pic.hanjiaming.com.cn/2022/10/18/f0fc7f4a1a3f2.png" alt="1666085738443.png" style="zoom: 25%;" />

:::

## 模拟调制

载波信号s(t )=A sin(2πft + φ)用于表示传输数据的方式不同

<img src="https://pic.hanjiaming.com.cn/2022/10/18/191e928bc81a1.png" alt="1666087254935.png" style="zoom:25%;" /><img src="https://pic.hanjiaming.com.cn/2022/10/18/1c258606e5af6.png" alt="1666087279105.png" style="zoom:25%;" />

## 数字调制

Digital modulation: 数字数据被转换成模拟信号（基带）

- 也被称为移位键法
- 无线介质只允许模拟信号传输

<img src="https://pic.hanjiaming.com.cn/2022/10/18/f30dff2205388.png" alt="1666087442742.png" style="zoom: 25%;" />

Differences in spectral efficiency, power efficiency, robustness, etc.

















