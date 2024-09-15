---
article: false
date: 2022-12-03
order: 1
headerDepth: 1
---

# Wireless Communication

- Wireless Communications: A wireless communication used electromagnetic waves to transfer signals through the air. 「无线通信使用电磁波在空气中传输信号。」

- 电磁波在电磁频谱中包含不同的频带。

  - 电磁频谱是电磁辐射的频率范围

  - 频带是频谱的一小部分

    光谱是一个连续谱；不同波段之间的界限不是自然存在的，而是科学家们发明的，他们试图根据它们的特征对其进行分类

## Frequency Range

大部分无线通信使用无线电/微波，一些使用红外线（例如，用于家用设备）。

Majority of wireless communications use radio/microwave, some use Infrared. 「大多数无线通信使用无线电/微波，有些使用红外线。」

<img src="https://pic.hanjiaming.com.cn/2022/10/14/dbba19c419bf5.png" alt="1665759402967.png" style="zoom: 25%;" />

- 无线电：30 MHz to 1 GHz
  - 适用于全方位应用
- 微波：1 GHz to 40 GHz
  - 适用于定向传输
  - 用于卫星/雷达通信
  - 也用于加热
- 红外线：300 GHz to 200 THz
  - 适用于狭窄区域内的本地点对点/多点应用
  - 远程控制，光学网络

<img src="https://pic.hanjiaming.com.cn/2022/10/16/c380a88024d16.png" alt="1665909414856.png" style="zoom:50%;" />

## 简化的无线通信系统

<img src="https://pic.hanjiaming.com.cn/2022/10/16/b95be39451b3d.png" alt="1665910003693.png" style="zoom: 50%;" />

- Transmitter
- Signal is propagated
- Receiver

## Data vs Signals

信号是物理世界中数据的代表。

- 模拟数据，例如语音，具有连续值
- 数字数据，如文本，有离散的值

信号也可以是模拟的或数字的

- 数字信号在离散的时间内有离散的值
- 模拟信号在连续的时间内具有连续的数值

## Analog vs Digital

模拟或数字数据可以由不同系统中的模拟或数字信号来呈现。

- 模拟信号：一些传输介质，如大气，只能传播模拟信号
- 数字信号：抗噪声干扰，衰减更多（危害数据的完整性，需要中继器将信号转发到更远的地方）

![1665910732356.png](https://pic.hanjiaming.com.cn/2022/10/16/15ec34a255e61.png)

## Signals

信号可以被看作是时间或频率的函数，一个信号在时域和频域看起来非常不同。

![1665910917564.png](https://pic.hanjiaming.com.cn/2022/10/16/c1e25e4537027.png)

### Time Domain Signals

<img src="https://pic.hanjiaming.com.cn/2022/10/16/1718fc46f7e9e.png" alt="1665910972215.png" style="zoom: 33%;" />

![1665910996132.png](https://pic.hanjiaming.com.cn/2022/10/16/d2fcb8d0e9af7.png)

### Frequency Domain Signals

根据傅里叶分析，任何信号都是由许多分量组成的，每个分量都是具有不同振幅、频率和相位的正弦波

参考高中物理：波的叠加

<img src="https://pic.hanjiaming.com.cn/2022/10/16/e588e343893f2.png" alt="1665911234054.png" style="zoom: 25%;" />

## Bandwidth of Signals

- Spectrum - the range of frequencies that a signal contains
- Bandwidth (BW) - the width of the spectrum of a signal, i.e., the difference between the highest and lowest frequencies available in a signal「带宽（BW）--信号的频谱宽度，即信号中最高和最低频率之间的差异。」

- E.g., S(t) = (4/π)[sin(2πft) + (1/3)sin(2π(3f)t)] has the bandwidth of 2f (=3f-f)
- 例如，一般信号的带宽是有限的
- **例如，数字方波信号具有无限的带宽**

<img src="https://pic.hanjiaming.com.cn/2022/10/16/d51c0afd804bd.png" alt="CleanShot 2022-10-16 at 17.23.48@2x.png" style="zoom: 50%;" />

## Channel Capacity

传输介质为信号的传输提供通道。通道是由传输介质提供的单一路径，通过

- 物理隔离，例如通过电缆
- 逻辑分离，例如通过频分或时分多路复用。

每个通道都有一个信号传输的上限--通道容量「Channel Capacity」

**在模拟通信中，信道容量由带宽来衡量，即信道可支持的信号频率的宽度。**

- The unit is Hz, KHz, MHz and GHz
- 例如，电话线的每个通道的带宽为3100Hz，用于传输语音信号。

**在数字通信中，信道容量是由数据率来衡量的，即在单位时间内（每秒）传输的单位比特的数量。**

- The unit is bps, Kbps, Mbps, and Gbps
- 例如，光纤可以携带数据速率为20Gbps的数字信号

两者都用于描述一个通信系统的信息传输能力。

