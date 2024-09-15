---
article: false
date: 2024-05-05
index: true
order: 11
headerDepth: 0
---

# Kubernetes Operation

![1715244355633.png](https://pic.hanjiaming.com.cn/2024/05/09/945434d8ccc1e.png)

## Use YAML to Define a K8S Pod

![1714987460485.png](https://pic.hanjiaming.com.cn/2024/05/06/1d4cb8478462f.png)

![1714987493247.png](https://pic.hanjiaming.com.cn/2024/05/06/aaeca641c540b.png)

- apiVersion: Which version of the Kubernetes API you're using to create this object.
- Kind: What kind of object you want to create,e.g.,Pod, Deployment,Service,ResourceQuota,etc.
- Metadata Labels: put a "tag"to a Kubernetes resource,to help you manage and identify the resource better
- Spec: The spec field is where you'll describe the object in greater detail

## Creating the first Pod

![1714988174595.png](https://pic.hanjiaming.com.cn/2024/05/06/cf7efd9ec39cb.png)

::: warning 必须禁用交换功能，Kubelet 才能正常工作

**Kubernetes principle:"predictability and consistency"**

- 工作负载需求应与主机内存相匹配，以提高可预测性和一致性。
- 杀死单个容器以释放内存，而不是让多个容器在一台机器上以不可预知的（可能是缓慢的）速度运行。

<img src="https://pic.hanjiaming.com.cn/2024/05/06/1b332a43e9c2f.png" alt="1714988294456.png" style="zoom:33%;" />

:::

## Requests and Limits

Requests:

- 调度程序会使用这些信息来决定将 Pod 放在哪个节点上。
- 至少保留该容器的请求量
- 实际上，所有容器使用的内存都比请求的要多。

Limit:

- 如果容器试图使用超过其限制的资源，系统就会终止该容器。
- **在 Kubernetes 中，限制适用于容器，而不是 Pod**
- Overcommit：所有限制的总和 大于 节点容量，这很常见

![1714988705305.png](https://pic.hanjiaming.com.cn/2024/05/06/0721172eaa86d.png)

::: tip 区分

Requests 是保证容器至少可以得到的资源，而 Limits 是容器可以使用的最大资源。

- **Requests**: 这是你为容器设置的最低资源需求。
  - 当 Kubernetes 调度器（scheduler）决定在哪个节点上运行新的 Pod 时，它会考虑每个 Pod 的请求。
  - 节点必须有足够的可用资源来满足 Pod 的请求，否则 Pod 不会被调度到该节点上。
  - 这样可以确保每个 Pod 至少有它所需的资源量。
- **Limits**: 这是你为容器设置的最大资源需求。
  - 如果一个容器试图超出这个限制，它可能会被系统杀掉。如果它持续地超出限制，它可能会被反复杀掉。
  - 如果你没有设置限制，那么容器可以使用节点上所有可用的资源。

例如，如果你为一个容器设置了 1 CPU 的请求和 2 CPU 的限制，那么这个容器至少会得到 1 CPU 的资源，但是它可能会使用多达 2 CPU 的资源。

:::

## Namespace and Namespace Quota

### Create Namespace

命名空间「Namespaces」适用于多个用户分布在多个团队或项目中的环境。

![1714988779187.png](https://pic.hanjiaming.com.cn/2024/05/06/48d8fd30988fa.png)

命名空间配额限制一个命名空间中所有 pod 可消耗的群集资源数量。

使用：当多个用户或团队共享一个具有固定节点数的集群时，每个团队使用的资源不应超过其合理份额。

![1714988833655.png](https://pic.hanjiaming.com.cn/2024/05/06/600f7e4d65949.png)

### Set Namespace Quota

![1714988865188.png](https://pic.hanjiaming.com.cn/2024/05/06/07b493fb137da.png)

### View Namespace Quota

![1715021131713.png](https://pic.hanjiaming.com.cn/2024/05/07/e1bd937455b40.png)

- limit aggregate resource consumption per namespace
- 您可以限制在给定命名空间中请求/消耗的资源

![1715021852242.png](https://pic.hanjiaming.com.cn/2024/05/07/d109e86ae0fdb.png)

## Assigning Pods to Nodes



### by nodeName

- 通过设置 nodeName 将 pod 安排到某个特定节点
- (节点选择约束的最简单形式）

::: warning

警告：灵活性较差。如果命名的节点不存在或没有足够的资源，pod 将无法运行，在某些情况下可能会被自动删除（不建议使用）。

:::

<img src="https://pic.hanjiaming.com.cn/2024/05/07/1d62e48b38bda.png" alt="1715066760995.png" style="zoom: 25%;" />

### by nodeSelector

- nodeSelector 是节点选择约束的最简单推荐形式
- Note:the node must have each of the indicated keyvalue pairs as labels

![1715067036286.png](https://pic.hanjiaming.com.cn/2024/05/07/14e673ac9bc38.png)



