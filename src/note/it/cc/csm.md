---
article: false
date: 2024-02-29
index: true
order: 2
headerDepth: 1
---

# Cloud Service Model

![1715244572306.png](https://pic.hanjiaming.com.cn/2024/05/09/aa4b0271a4762.png)

## 云服务模式

![1709205332804.png](https://pic.hanjiaming.com.cn/2024/02/29/2e4218444fc64.png)

- Infrastructure as a service (laas): A form of cloud computing that delivers <u>fundamental compute, network, and storage resources to consumers on-demand</u>, over the internet, and on a **pay-as-you-go basis**.
- Platform as a service (paas): Provides customers **a development and hosting platform** for <u>deploying customer-created applications</u>.
- Software as a service (saas): A model of software deployment where an **application is hosted (in a cloud center) as a service** provided to customers across the internet.

![1709206766053.png](https://pic.hanjiaming.com.cn/2024/02/29/9834d66a78b92.png)

![1709206983587.png](https://pic.hanjiaming.com.cn/2024/02/29/ecc0128a8abc5.png)

![1709207014300.png](https://pic.hanjiaming.com.cn/2024/02/29/de0c3a0836956.png)

- laas：亚马逊弹性计算云（ec2）、谷歌计算引擎（gce）、微软azure laas、阿里巴巴云弹性计算服务（ecs）、.NET、微软云计算服务（laas）。
- Caas（laas 的另一种形式）：亚马逊弹性容器服务（ecs）、谷歌 kubernetes 引擎（gke）、docker 云、azure kubernetes 服务（aks）、腾讯 kubernetes 引擎
- Paas：谷歌应用程序引擎（gae），aws 弹性beanstalk，微软azure，..
- Faas（“轻量级 paas”）：aws lambda、google 云函数、azure 函数、ibm 云函数。

<img src="https://pic.hanjiaming.com.cn/2024/02/29/3d0eb441ce1dc.png" alt="1709207174763.png" style="zoom:33%;" />

## IAAS

允许不同的虚拟机（VM）共享底层物理机资源，每个虚拟机运行自己的操作系统。

虚拟化资源：虚拟CPU（vCPU）、虚拟网络接口（vNIC）、虚拟磁盘等。

![1709370535428.png](https://pic.hanjiaming.com.cn/2024/03/02/15885d5a87439.png)

- Virtualized Network Interface (vNIC)
  - 看起来很像任何物理以太网 NIC。
  - "Virtualized" MAC = address MAC address "assigned"to vNIC (eth0)
- Use of **software bridge** or **virtual switch** to <u>emulate a hardware bridge</u>

::: tip

VIF 表示虚拟机上的虚拟网卡

:::

![1709371167447.png](https://pic.hanjiaming.com.cn/2024/03/02/14cb7f7bb3b97.png)

<img src="https://pic.hanjiaming.com.cn/2024/03/02/c1b37bb7524f7.png" alt="1709371354802.png" style="zoom: 50%;" />

![CleanShot 2024-03-02 at 17.39.29@2x.png](https://pic.hanjiaming.com.cn/2024/03/02/6f4baab65b597.png)

::: note IAAS-EC2

![1709385334702.png](https://pic.hanjiaming.com.cn/2024/03/02/0adb3f6a10d42.png)

- An AWS EC2 Instance is nothing but a virtual machine in the AWS cloud「An AWS EC2 Instance is nothing but a virtual machine in the AWS cloud」
- Amazon Machine Image (AMI) = preconfigured server templates, which 提供启动 EC2 实例所需的信息

Choose an Amazon Machine Image (AMI): 

- Instance type:small,medium,micro,large,.
- Operating system:Linux,Windows...
- Architecture 32-bit or 64-bit
- Region:Asia Pacific,US,EU,
- Launch permissions:public/explicit/implicit
- Storage for the Root Device

![1709385791175.png](https://pic.hanjiaming.com.cn/2024/03/02/3bbb3b3ec7159.png)

:::

## CAAS

### Container Technologies

容器位于物理服务器及其主机操作系统（通常为 Linux 或 Windows）之上。前言：谷歌使用容器运行几乎所有谷歌应用程序（如 Gmail、YouTube）

![1709385959549.png](https://pic.hanjiaming.com.cn/2024/03/02/91279318df7e3.png)

A “container” = a virtualized server

CaaS typically refers to a complete container environment「完整的容器环境」,including orchestration tools「编排工具」 (e.g.,Kubernetes), an image catalog「镜像目录」 (Registry), cluster management software 「集群管理软件」,and a set of developer tools and APls.

### Container Orchestration

容器协调器：实现容器生命周期管理自动化（创建/终止、资源分配、联网、自动扩展、故障恢复......）。

![1709386324568.png](https://pic.hanjiaming.com.cn/2024/03/02/af51ab620912e.png)

![1713640582129.png](https://pic.hanjiaming.com.cn/2024/04/21/ece75faff1cdb.png)

Tasks done by Container Orchestration

- Provisioning「调配」 and deployment「部署」 of s containers
- Redundancy「冗余」 and availability「可用性」 of containers
- 扩展或移除容器，以便在主机基础设施上均匀分布应用程序负载
- 在主机资源短缺或主机死亡的情况下，将容器从一台主机转移到另一台主机
- Allocation of resources between containers
- Load balancing between containers
- Health monitoring of containers and hosts
- Configuration of an application in relation to the containers running it

<img src="https://pic.hanjiaming.com.cn/2024/03/02/dfa935fcc8b6d.png" alt="1709387020971.png" style="zoom:50%;" />

::: tip AWS EC2 vs. AWS Fargate

- AWS EC2(laaS)
  - Deploy and manage your own cluster of EC2 instances for running the containers.(more human cost)
  - Billing is based on the cost of the underlying EC2 instances.
  - Suitable for: <u>Large workload optimized for running cost.</u>
- AWS Fargate (CaaS):

  - "Serverless":No need for choosing EC2 instances and cluster capacity **reduce human cost** (auto-scaling,auto-failover).
  - Billing is based on how many vCPU and size of memory_your task consumed.
  - Suitable for
    1. Tiny workload (e.g.,FaaS)
    2. Small workload,with occasional bursts
    3. Periodic tasks (e.g.,cron job that runs once an hour)

:::

## PAAS

Cloud providers offer an <u>Internet-based platform</u> to **developers** <u>who want to create services but don't want to build their own Cloud infrastructure</u>.

- Target users  = Cloud services/application developers
- Internet-based platform: <u>a set of web-based development tools</u> hosted on a cloud provider's infrastructure.

The custome interacts(e.g.,compile,debug,deploy) with the platform through the provided APl

- customer only needs to take care of data and application,the management of rest of the layers (e.g.,VMs/containers, software) lies in hands of the PaaS service provider.

::: tip PaaS Example: Amazon Elastic Beanstalk

You simply upload your application,and AEB automatically handles the deployment from capacity provisioning「容量配置」,load balancing 「负载均衡」,scaling「缩放」, and application health monitoring.

:::

![1709387746233.png](https://pic.hanjiaming.com.cn/2024/03/02/278e19b154b9b.png)

## FAAS

- 应用程序被分成不同的功能，这些功能由事件触发。
  - Event-driven ("If X happens then do Y"): functions are invoked on-demand.
- "Pay-per-execution'"pricing model:
  - You pay for the resources your functions use,not VM instance type and used hours.
- "Serverless":Zero administration
  - 开发人员无需关心服务器（虚拟机容器）的设置和管理，Faas 提供商会为您构建和管理它们！（与 Fargate 的概念相同）。
- Auto-scaling: instantly scaled depending on the load.
  - Horizontal scaling: +- number of containers/Pods;
  - Vertical Scaling +-CPU Memory ;
  - Cluster scaling: +- number of servers.
- **Short-lived**, provisioning time (charged) <u>in milliseconds</u>
  - 用于运行功能的容器会在收到请求时启动，并在执行结束后立即退出_（仅持续一次创新）。


::: tip Example: AWS Lambda

- An event-driven,serverless computing platform
- 使用 Node.js、Python、Java、Go、Ruby、C# 编写函数作为 zip 文件上传（代码、库和依赖项）
  - 作为 zip 文件上传（代码、库和依赖项）

Using AWS Lambda with Amazon API Gateway

- Amazon API 网关用作 HTTP 服务器，用于将请求重定向到 Lambda 函数。
- 您可以创建 REST 和 WebSocket API，充当应用程序访问 Lambda 函数的“前门”

![1714927856528.png](https://pic.hanjiaming.com.cn/2024/05/06/a1b909800805e.png)

:::

::: info FaaS vs. PaaS Comparison

- PaaS:deploy an entire application
  - PaaS 包括基础设施（服务器、存储和网络）以及中间件、开发工具、数据库管理系统和电子计算机。
  - 旨在支持基于网络的应用程序的整个生命周期：构建、测试、部署、管理和更新
  - 通常始终至少在一台服务器（虚拟机实例）上运行
- FaaS: deploy a single function,or part of an application
  - 设计为无服务器架构（按需调用函数）--最好是在 CaaS 上。
  - 介于 Saas 和 Paas 之间（有些人认为 FaaS 只是另一种 PaaS）。

:::

## SAAS

A model of software deployment where an application is hosted as a service provided to customers across the Internet. 「一种软件部署模式，将应用程序托管为一项服务，通过互联网提供给客户。」

- Deployment/Delivery Model
  - Hosted and managed by vendor「供应商」
  - Delivered across the Internet
- Usage-based pricing
  - Per user per month
  - Per transaction
  - Per GB of storage per month

Examples: Google Drive,YouTube,Gmail, Microsoft Office 365,DropBox,Photoshop Online, IBM Marketing Center,Facebook,On-line shopping,…

::: details Example

![1714978181593.png](https://pic.hanjiaming.com.cn/2024/05/06/59718b411e1e4.png)

![1714978195138.png](https://pic.hanjiaming.com.cn/2024/05/06/02c114932b540.png)

![1714978222491.png](https://pic.hanjiaming.com.cn/2024/05/06/e2bd9e9db60b5.png)

![1714978313652.png](https://pic.hanjiaming.com.cn/2024/05/06/0bcfd5156c47a.png)

![1714978355412.png](https://pic.hanjiaming.com.cn/2024/05/06/93510dbc6b47a.png)

![1714978368127.png](https://pic.hanjiaming.com.cn/2024/05/06/5c30c96e1d501.png)

:::

::: note Cloud Gaming

![1714978261116.png](https://pic.hanjiaming.com.cn/2024/05/06/298378769c6e2.png)

:::

## AIaaS

Artificial Intelligence as a Service

![1714978679832.png](https://pic.hanjiaming.com.cn/2024/05/06/b3120ac608ddf.png)

![1714978703649.png](https://pic.hanjiaming.com.cn/2024/05/06/a1ece7a5d5fd2.png)

![1714978856109.png](https://pic.hanjiaming.com.cn/2024/05/06/665f8d0b50d36.png)

## IoT Cloud

- Cloud loT Core:supports the standard MQTT and HTTP protocols
- Cloud Functions:enable backend code to run in response to events

## BaaS

Blockchain as a Service

允许客户利用基于云的解决方案来构建、托管和使用自己的区块链应用程序、智能合约和功能（基于云的服务提供商管理所有必要的任务和活动，以保持基础设施的灵活性和可操作性）。

## Other Applications

![1714979031166.png](https://pic.hanjiaming.com.cn/2024/05/06/39532fec2d2b2.png)

![1714979045172.png](https://pic.hanjiaming.com.cn/2024/05/06/82237a09a27b9.png)
