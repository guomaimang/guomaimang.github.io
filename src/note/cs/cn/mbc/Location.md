---
article: false
date: 2022-12-04
order: 7
headerDepth: 1


---

# Location Based Services

## LBS

对于一个移动应用程序，能够知道用户的当前位置是很重要的。

此位置信息提供了独特的上下文类别：

- 移动设备的地理位置
- 移动设备的物理环境，例如噪音水平和可用带宽
- 相对位置：与所需设施的接近程度
- 用户的活动和行为：驾驶汽车或坐在房间里

基于位置的服务 (LBS) 是一种应用程序，它可以

- 查找移动设备的地理位置
- 根据用户的位置，向用户提供所需的内容
- LBS通过提供定制化的数据访问，不仅基于用户的偏好，也基于用户的特定位置，提高了用户的效率。

LBS - 技术交叉点：LBS是多种技术的交叉点

- Internet
- 无线通信和移动设备
- 定位技术
- 地理信息系统

## LBS Applications

- Emergency services
- Intelligent transportation services
- Tracking service
- Advertising
- Game

## LBS Components

- Mobile devices
- Wireless network infrastructure
- Mobile positioning component
- Service and content provider
- Geographic information system (GIS)

### Mobile positioning component

确定移动设备的地理位置。该位置可以通过使用移动设备、使用基站或使用全球定位系统（GPS）获得

### Service and content provider

- 根据用户的地理位置向其提供服务和内容
- 例如，计算位置，寻找路线，搜索与位置有关的黄页，或搜索用户感兴趣的具体信息等等。

### Geographic information system (GIS)

- 一个可以操作地理数据的计算机系统
  - 创建、存储、管理、分析和展示空间数据
- 一个将位置信息与其他相关信息联系起来的软件，使其对移动和固定用户都有意义和价值
  - 提供地理坐标和相关信息之间的多维映射，如建筑位置、街道布局、人口密度和其他信息，这些信息来自维护当局（如测绘机构）或商业/行业合作伙伴（如黄页、交通公司）。

## Techniques

所有定位技术的目标是捕捉移动设备的位置，并将其转换为有意义的X、Y、（Z）坐标。

- 有许多技术可以获得移动用户的位置
  - 有许多技术可以获得移动用户的位置
  - 当精确度增加时，成本也会增加
  - 决定使用哪种技术取决于对准确性和成本因素的权衡

定位技术的类型：

- 户外解决方案
  - 基于网络的解决方案
    - 利用蜂窝网络基础设施获得地理定位信息
    - 具有成本效益，但准确性较低
    - 定位精度从几百米到几公里不等
  - 基于手机的解决方案
    - 位置情报被储存在终端内
    - 高度提高精度，但对手机制造商和网络运营商来说，增加了大量成本
    - 可以获得50至100米内的位置信息
  - 基于GPS的解决方案
    - 使用卫星为GPS接收机提供信号，以确定其位置
    - 定位精度在有干扰的情况下可以达到100米，无干扰时可以达到15米
- Indoor solutions
  - 基于红外线的、基于超声波的、基于无线电的

## Network-based Solutions

- 使用固定BS确定位置
- 每个BS包含无线电拦截设备，以接收来自移动设备的信号。
- 移动设备的位置可以通过使用一个或多个BS的信号来计算。当使用更多的BS时，可以实现更高水平的定位精度
- 与所有类型的手机一起工作
- 大多数解决方案的响应时间为几秒钟

### Cell Identity

- 确定设备在哪个小区，并将BS的位置报告为移动设备的位置
- 准确度取决于细胞的大小：移动设备在小区中的位置不明
- 最简单和最具成本效益的方式

### Improving the accuracy of cell identity

- 将一个细胞分成若干部分：减少每个地区可能的移动设备的位置
- Timing advance (TA)
  - TA是BS和移动设备之间的测量时间差，用于了解移动设备离BS有多远。
  - 这些信息并不准确，但可以提高确定用户位置的准确性。
- 小区全球身份识别与时间提前（CGI-TA）。
  - Accuracy is around 1000 meters
  - 由于BS的密度较高，在城市比农村地区更准确

<img src="https://pic.hanjiaming.com.cn/2022/12/12/69d0a459cfa5f.png" alt="1670848923860.png" style="zoom:33%;" />

### Time of Arrival (TOA)

- 手机在时间T0发出一个信号
- 信号在T1、T2、T3时间被传输范围内的所有BS收到
- 每个站点测量从发送信号到接收信号所需的时间（ti=Ti-T0，i=1,2,3）。
- 由于信号以固定速度移动，设备和BS之间的距离可以确定di = ti c
- 通过使用来自三个BS的距离信息，它能够确定设备相对于BS的坐标 - 这被称为三角计算{triangulation calculation}。
- 由于BSs的位置是固定的，相对坐标可以转化为绝对坐标

<img src="https://pic.hanjiaming.com.cn/2022/12/12/7a1a6d702edc6.png" alt="1670849084923.png" style="zoom: 33%;" />

- TOA不需要对手机做任何改变
- 准确度相当不错，在城市地区约为50米，在农村地区为500米。
- 时间（t1、t2、t3）之间的差异必须非常准确
- 所有BS和MS的时钟都需要同步。
- BS可以紧密地同步
- MS时钟可能有时钟漂移，在距离计算中引入了误差

### Time Difference of Arrival (TDOA)

- TDOA不会受到MS同步错误的影响
- MS在时间T0发出一个信号，所有BS在时间T1、T2、T3收到信号
- 每个站估计MS和BS之间的距离为 di = tic=（Ti-T0）c，i=1，2，3
- 两个距离之间的差异是
  - d12=d1–d2=(t1-t2)c=(T1–T2)c
  - d13=d1–d3=(t1-t3)c=(T1–T3)c
  - d23=d2–d3=(t2-t3)c=(T2–T3)c

<img src="https://pic.hanjiaming.com.cn/2022/12/12/ff0b2b24d4e3a.png" alt="1670816458458.png" style="zoom: 33%;" />

- TDOA只需要在BS之间进行紧密同步, 也就是说，它需要一个同步的网络
- 这一要求确保了估计的距离是实际距离的良好近似值。

### Angle of Arrival (AOA)

- 与TOA相似
- BS不是测量时间，而是测量设备信号到达的角度
- 通过比较多个BS（**至少2个**）之间的AOA数据，可以计算出相对位置
- AOA不常被使用：难以达到良好的准确性

### Handset-based Solutions

E-OTD（增强型观察时间差）

- 类似于TDOA，但手机进行时间测量，而不是BS。
- 必须知道BS的位置，从不同的BS发送的数据必须是同步的
  - BS（至少3个）向移动设备发送信号
  - 记录信号的到达时间
  - 衡量BS之间的时间差异
  - 使用时间差来计算移动设备与BSs的位置关系
- E-OTD为确定移动位置提供了一种准确和具有成本效益的方法：精度在 50 到 100 米内

<img src="https://pic.hanjiaming.com.cn/2022/12/12/000378c2f7f2a.png" alt="1670850064607.png" style="zoom: 50%;" />

位置测量单元（LMU）用于为测量提供准确的时间来源 - 同步来自BS的信号传输时间

## GPS (Global Positioning System)

- GPS uses 24 global satellites to send signals to GPS enabled receivers
- 接收器可以在任何单一时间点与3或4颗卫星进行通信
  - 接收器和卫星之间应该有一条视线
  - GPS在建筑物内不工作
- GPS提供三维的位置信息,即：纬度、经度和海拔高度
  - 三个组成部分
    - Satellites
    - 控制和监测站（例如，用于监测和同步卫星时钟）
    - 接收器

卫星不断广播信号，可由具有GPS功能的设备接收。

- 装置测量信号从卫星到达它的时间，以确定它们之间的距离
- 从 3 颗不同的卫星进行测量，以便可以执行三角测量计算以确定绝对位置坐标
  - 设备可以自己直接计算位置坐标，也可以将测量结果发送到网络服务器进行处理

GPS需要非常精确地测量时间

- 偏差1毫秒可导致超过300公里的位置变化
- Need time synchronization
- GPS可以提供准确的定位结果: 100m with interference, 15m without interference.

Limitations

- Line-of-sight, do not work indoors
- 定位信息的时间延迟很长：20 ~ 40秒

## Enhanced GPS

- GPS 接收器使用辅助服务器来完成复杂的计算
  - 援助服务器被放置在有良好卫星信号的固定间隔内（每200公里至400公里）。
  - 协助服务器具有高计算能力，并能高速访问参考网络。
- 手机接收GPS信号并将这些读数发送到协助服务器上
- 辅助数据帮助GPS接收器迅速确定其位置，用1~8秒

## Indoor Positioning Technologies

- 以前的解决方案都是户外解决方案，它们不能在建筑物内使用。
- 室内定位解决方案使用不同的传感介质进行定位技术
  - 红外线
  - 超声
  - 收音机
- 室内定位技术有两个基本类别
  - Network based
    - 移动发送者发出唯一的代码，识别一个移动对象
    - 固定接收器接收信号并向系统报告
  - Device based
    - 固定的发送者发出独特的代码，识别一个位置
    - 室内定位解决方案使用不同的传感介质进行定位技术

### Infrared-based positioning

- Active Badges, Accuracy is several meters
- Locust Swarm

### Ultrasound-based positioning

- Active Bat, Accuracy is 3cm

### Radio-based positioning

- WLAN定位
  - Proximity sensing，精度在几十到几百米之间
  - Lateration，精度在几十米左右，受无线环境影响大
  - Finger printing，精度在几米左右
- i Beacon
- RFID (radio frequency identification) positioning





























