---
article: false
date: 2022-10-26
order: 8
headerDepth: 2

---

# Character Device Drivers (II)

设备驱动程序和设备之间的通信。设备的命令/数据寄存器可以通过I/O端口访问，从

- 内存空间（内存映射的I/O）
- 独立空间（I/O空间）

取决于硬件的情况。

- ARM 32 - 内存映射的I/O
- Intel 32 – I/O 空间（独立且不同于内存空间）

## Multiplexed Ports

由于ARM 2410 中的大多数引脚都是复用的，我们需要在使用前确定选择哪个功能。

通常情况下，一个端口有三个不同的寄存器:

- Port Configuration Register – define which function

Port Pull-up Register: 在没有引脚功能设置的情况下启用/禁用工作（如果我们想使引脚的设置功能，应该将其设置为禁用，即把数值设置为1）。

未完待续
