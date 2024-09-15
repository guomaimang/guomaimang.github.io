---
article: false
date: 2024-02-16
index: true
order: 1
headerDepth: 1
category:
  - tech

---

# Introduce to Cloud

![1715244252488.png](https://pic.hanjiaming.com.cn/2024/05/09/c6c0a4f5563c5.png)

A computing paradigm where **data** and **services** reside in <u>massively scalable data centers</u> and can be ubiquitously accessed from any connected devices <u>over the Internet</u>.

「一种计算模式，数据和服务驻留在大规模可扩展的数据中心，并可通过互联网从任何连接设备进行普遍访问。」

狭窄/简短的说法：

- Utility Computing「效用计算」 的升级版：基本上是通过互联网提供虚拟服务器。
- 效用计算：一种服务提供模式；服务提供商根据需要向客户提供计算资源和基础设施管理，并按特定使用情况而不是统一费率收费。

More Practical 的说法：

- 云计算 是 "指<u>利用大规模数据中心</u>通过**互联网**提供的软件、存储或处理服务"。
- Cloud computing, the notion of "outsourcing hardware and software to Internet service providers「将硬件和软件外包给互联网服务提供商」",.......**(Key:"Don't do it yourself !"**

<img src="https://pic.hanjiaming.com.cn/2024/02/16/5a7cd4b117d2f.png" alt="1708068869283.png" style="zoom:33%;" />

::: tip Major Cloud Platforms Players

- #1 Amazon:32% 
- #2 Microsoft:21%
- #3 Google 8% 
- #4 Alibaba

:::

<img src="https://pic.hanjiaming.com.cn/2024/02/16/e72be387aef4c.png" alt="1708070271454.png" style="zoom: 33%;" />

**Everything imaginable as a service**

![1708070330194.png](https://pic.hanjiaming.com.cn/2024/02/16/c7611d76390c3.png)

::: tip Top cloud computing trends for 2023

- AI
- Edge computing「边缘计算」
- Internet of Things「物联网」
- Multi-cloud and Hybrid cloud「多云和混合云」
- Cloud disaster recovery 「云灾难恢复」

:::

## Why Cloud

### 传统数据中心的企业资源规划

<img src="https://pic.hanjiaming.com.cn/2024/02/16/b33181ce01eb1.png" alt="1708071331296.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2024/02/16/7d68525fc9f24.png" alt="1708071385479.png" style="zoom:33%;" />



- 云：动态资源扩展，而不是高峰配置
- 定价方案：“按使用付费”

### Pay as you go

usage-based pricing:

- 大多数服务按分钟、字节等收费。
- 无最低费用或预付费用
- 当应用程序的使用率不固定时，它就会发挥作用

### Economies of scale

规模经济

- 大规模采购、供电和管理机器的单位成本低于客户的成本。
- 权衡：快速增长与效率
- 权衡：灵活性与成本

迭代「iteration」速度

- 软件即服务「Software as a service」意味着快速上市、更新和详细监控/反馈
- 与普通软件分发的迭代速度相比

## Cloud Basic

### Common Cloud Applications

- Web and mobile applications
- Data analytics: MapReduce, SQL, ML, etc
- Stream Processing
- Batch Computation: HPC, Video, etc.

### Cloud Software Stacks

![1708072668030.png](https://pic.hanjiaming.com.cn/2024/02/16/6db97a961560e.png)

### How to build a cloud

- First Step: Datacenter and Hardware
  - 通常组织为少数且大部分独立的集群
- Hardware: compute
  - 多核 CPU 服务器 -> 1 和 2 插槽
  - What’s new:
    - GPUs
    - Custom Accelerators (AI), TPU, NPU...
    - FPGAs: Field Programmable Gate Arrays「现场可编程门阵列」
- Hardware: Storage
  - The basic
    - 磁盘托盘「Disk trays」
    - SSD, NVM, Flash
  - What’s new
    - Non-volatile memories「非易失性存储器」
    - New **archival** storage, e.g., glass
  - Distributed with compute or NAS systems -> Remote storage access for many use cases

![CleanShot 2024-02-16 at 16.54.12@2x.jpg](https://pic.hanjiaming.com.cn/2024/02/16/5cd3e7b19a9be.jpg)

- Hardware: Networking
  - The basic
    - 40, 100, 200, GbE「Gigabit Ethernet」 NICs「Clos topologies，网卡」
    - 100GbE to 200GbE switches「交换机」
  - What’s new
    - Software Defined Networking (SDN)
    - In network computation
    - Smart NICs
    - FPGAs

::: info Clos topology

"Clos topology"是一种网络交换结构，由Charles Clos在1953年提出，用于实现大规模的电话交换网络。Clos网络是一种多级交换网络，它可以提供非常高的网络带宽和非阻塞的交换能力。

在Clos网络中，交换机被组织为三层结构：输入阶段、中间阶段和输出阶段。每一阶段都包含一定数量的交换元素。输入阶段的交换元素将流量分配到中间阶段，中间阶段的交换元素将流量再次分配到输出阶段，最后，输出阶段的交换元素将流量发送到目的地。

这种网络结构可以通过增加中间阶段的交换元素来轻松扩展，从而支持更大的网络规模和更高的网络带宽。Clos网络被广泛应用在数据中心网络、高性能计算网络以及其他需要大规模非阻塞交换能力的场景。

:::

::: info SDN

软件定义网络（Software Defined Networking，SDN）是一种网络架构，其核心思想是将网络的控制层和数据层分离，使网络控制变得直接可编程，基础设施抽象化以应用程序和网络服务。

在传统的网络架构中，每个网络设备（如路由器或交换机）都有自己的控制和数据平面。控制平面负责决定如何处理网络流量（例如，确定数据包的路由），而数据平面则负责实际处理和转发数据包。

在SDN中，这种情况发生了变化。控制平面从网络设备中抽象出来，并在一个中心位置（称为 SDN 控制器）进行集中管理。这意味着网络管理员可以直接编程控制整个网络的流量，而不是需要单独配置每个设备。这可以提供更大的灵活性和自动化，使网络更容易适应变化的需求和条件。

SDN 的另一个关键组成部分是南向接口和北向接口。南向接口用于 SDN 控制器和网络设备之间的通信，通常使用 OpenFlow 协议。北向接口则用于应用程序和 SDN 控制器之间的通信，允许应用程序请求网络服务并获取网络信息。

SDN 技术在数据中心、云计算、网络功能虚拟化（NFV）等领域有广泛应用，因为它可以提供更高的网络可见性、灵活性和自动化。

:::

### How to evaluate a cloud service

Throughput

- Requests per second
- Concurrent users
- Gbytes/sec processed

Latency

- Execution time
- Per request latency

## Cloud Service Models

云中的共享资源作为云服务提供给用户 -> 3 种主要服务模式：

- Infrastructure as a Service (IaaS)
- Platform as a Service (PaaS)
- Software as a Service (SaaS)

所有服务模式都具有云计算的基本特征：

- elasticity「弹性」
- scalability「可扩展性」
- on-demand computing「按需计算」
- multi-tenancy「多租户」
- <u>metering service</u> and <u>pay-per-use pricing</u> model「计量服务和按使用付费的定价模式。

### Infrastructure as a Service

- provide <u>distributed virtualized computational resources</u>, such as servers, storage, network, and virtual machines, as services.
  - 通过 OpenStack、Apache Cloudstack 等软件来创建和管理虚拟机、磁盘。
- users install their required guest operating system, middleware, runtime, data, and applications on top of the virtual machine.
- 配置从云提供商处获得的基础设施需要很高的技术技能。

<img src="https://pic.hanjiaming.com.cn/2024/02/16/cc5ee3484f52f.png" alt="1708085540796.png" style="zoom: 50%;" />

### Platform as a Service (PaaS)

- 提供应用程序开发所需的硬件结构和软件平台：网络服务器、应用服务器、数据库服务器和编程环境。
- 促进从**基于桌面的解决方案**向**网络应用解决方案过渡**。
- 只注重应用程序开发
- 便于以简单、独立的微服务形式开发应用程序。
- additional services
- K8S, MapReduce

<img src="https://pic.hanjiaming.com.cn/2024/02/16/4350ab7f11271.png" alt="1708085689077.png" style="zoom: 50%;" />

### Software as a Service (SaaS)

- 将 完全开发的应用程序 作为 服务 在 提供商的基础设施 上运行
- 用户通过互联网订阅和使用应用程序。
- eg., Salesforce’s CRM
- Email, GitHub

<img src="https://pic.hanjiaming.com.cn/2024/02/16/a5a1dcadc0c34.png" alt="1708085870905.png" style="zoom:50%;" />

::: note Difference between IaaS, PaaS, and SaaS

![1708086040853.png](https://pic.hanjiaming.com.cn/2024/02/16/939aa69d0fd0c.png)

:::

::: note Relationship between IaaS, PaaS, and SaaS

![1708086493832.png](https://pic.hanjiaming.com.cn/2024/02/16/c24fa7598d2fa.png)

:::

## Different types of Clouds

Also called *cloud service deployment models*

- Public cloud: 由特定组织提供给公众开放使用，该组织也是服务的主办方
- Private cloud: 用于单一组织；可由内部或外部托管
- Hybrid cloud: 由两个或两个以上的云（私有云、社区云或公共云）组成，这些云仍是独特的实体，但被绑定在一起，提供多种部署模式的优势，由内部和外部托管
- Community cloud: 由多个组织共享；通常由外部托管，但也可由其中一个组织内部托管

### Public Cloud

云服务提供商通过互联网向所有注册按需付费的公共用户提供服务和基础设施

- 多租户
- 安全问题

大型基础设施可租赁。

- 客户根据某些服务级别协议 (SLA) 通过 Internet 远程访问资源
- 例如，亚马逊、谷歌、微软、阿里巴巴、腾讯、华为 > 通常拥有全球数据中心网络。
- 完全客户自助 -> 服务通过网络服务接受请求并授予资源

#### Advantages of Public Cloud

- 公共云的拥有成本低于私有云和混合云。
- 公共云由云服务提供商负责维护，因此无需担心维护问题。
- 公共云更容易集成。因此，它为消费者提供了更灵活的方法。
- 公共云是独立于位置的，因为它的服务是通过互联网提供的。
- 公共云可根据计算资源的需求进行高度扩展。
- 公众均可访问，因此用户数量不受限制。

#### Disadvantages of Public Cloud

- 公共云的安全性较低，因为资源是公开共享的。
- 性能取决于与云提供商的高速互联网网络链接。
- 客户端无法控制数据。

### Private Cloud

- 云由单一机构拥有和管理，该机构仅通过一个自助服务门户，在私有局域网上按需向用户提供服务。
- 通过云平台（例如 Eucalyptus 和 OpenStack）进行部署，或者通过将云功能添加到已经虚拟化的基础设施中来部署。
- 企业的资源集中到一个中央单位。
- 无论是在组织内部还是在第三方供应商设施内。

<img src="https://pic.hanjiaming.com.cn/2024/02/26/e4d48d0c4c87c.png" alt="1708950205996.png" title="1708950205996.png" style="zoom: 50%;" />

关键技术：

- 虚拟化技术（VMWare、Xen、KVM、Docker、K8S）
- 虚拟专用网络 (VPN)（适用于许多国家/地区的公司）。

与公共云相比，成本更高，但更安全（在防火墙后面）。

#### Advantages of Private Cloud 

- 私有云为用户提供了高度的安全性和隐私性。
- 私有云的速度更快，空间容量更大，性能更佳。
- 它允许 IT 团队快速分配和交付按需 IT 资源。
- 组织可以完全控制云，因为云是由组织自己管理的。因此，组织无需依赖任何人。
- 它适合需要独立云供个人使用且数据安全是第一要务的组织。

#### Disadvantages of Private Cloud

- 需要熟练的人员来管理和运营云服务。
- 私有云可在组织内部访问，因此运行区域有限。
- 私有云不适合用户基数大的组织，也不适合没有预建基础设施和足够人力来维护和管理云的组织。

### Hybrid Cloud

利用私有云和公共云在同一组织内执行不同功能的集成云服务。

- 在公共云上进行非敏感操作；而在内部（私有云）处理敏感操作
- 旨在以低成本实现高安全性和高可扩展性。
- 管理混合云非常复杂，因为很难管理一种以上的部署模式。
- 利用公共云的可扩展性和成本效益，同时将敏感数据保存在私有云的安全环境中，而不会暴露在公共云中。

Netflix、Hulu、Uber 和 Airbnb 在新剧首播或出行高峰期都非常依赖混合云。

![1709205296625.png](https://pic.hanjiaming.com.cn/2024/02/29/b7dd9566b213e.png)

#### Advantages of Hybrid Cloud

- 混合云适用于需要比公共云更高安全性的组织。
- 混合云可帮助您更快地交付新产品和服务。
- 混合云是降低风险的绝佳途径。
- 混合云因公共云而提供灵活的资源，因私有云而提供安全的资源。

#### Disadvantages of Hybrid Cloud

- 在混合云中，安全功能不如私有云。
- 管理混合云非常复杂，因为很难管理一种以上的部署模式。
- 在混合云中，服务的可靠性取决于云服务提供商。

### Community Cloud

社群云 被定义为多个组织根据共同的运营和监管要求共享资源和服务的云基础设施。

- 整合多个公共云的服务。
- 可与内部传统资产/数据中心和私有云混合使用。
- 享受不同供应商提供的不同质量/费用的服务。
- 更高的可用性
- 降低供应商锁定

社区云与公共云类似，不同之处在于它的访问仅限于具有共同关注点/兴趣的云消费者的特定社区，例如

- 医疗保健、研究和教育
- 高安全性：只有在经过可信身份验证（监管机构要求）后才授予对云的访问权限。
- 高可用性：资源可用率达到 99.999%（或更高）。例如，银行业务
- 高性能：高频交易（HFT）、云挖矿、HPC。

#### Advantages of Community Cloud

- 社区云具有成本效益，因为整个云是由多个组织或社区共享的。
- 社区云适合那些希望拥有比公共云更安全的协作云的组织。
- 它提供比公共云更好的安全性。
- 它提供了协作和分配环境。
- 社区云允许我们在不同组织之间共享云资源、基础设施和其他功能。

#### Disadvantages of Community Cloud

- 对于每个组织来说，这并不是一个好的选择。
- 安全功能不如私有云。
- 如果没有合作就不适合。
- 所有社区成员共享固定数量的数据存储空间和带宽。

<img src="https://pic.hanjiaming.com.cn/2024/02/26/d99a56bfb7dd1.png" alt="1708950175886.png" title="1708950175886.png" />













