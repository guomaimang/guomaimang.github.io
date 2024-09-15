---
article: false
date: 2023-01-03
order: 2
headerDepth: 1
---

# Definition

## Joint Distribution

![1672802499700.png](https://pic.hanjiaming.com.cn/2023/01/04/ecba77281d6c7.png)

对于这三个变量，这个表描述了他们的联合概率分布。

### Reduction

如果基于一个条件：condition on g = g1，删除无用信息，如下，这个过程成为 reduction

<img src="https://pic.hanjiaming.com.cn/2023/01/04/c6160ca1bac39.png" alt="1672802800187.png" style="zoom:33%;" />

之后进行归一化（a joint distribution is a factor）

![1672802866569.png](https://pic.hanjiaming.com.cn/2023/01/04/1548d350a2a89.png)

### Marginalization

所谓边际化，即去除一个变量的影响。

![1672803130625.png](https://pic.hanjiaming.com.cn/2023/01/04/00300f99dd166.png)

通过求和可知。

## Factors

<img src="https://pic.hanjiaming.com.cn/2023/01/04/51ba8f9ab499e.png" alt="1672804408880.png" style="zoom:25%;" />

**A joint distribution is a factor**

### Conditional Probability Distribution

除了上面是联合分布因子，还有 Conditional Probability Distribution (CPD)「条件概率分布」

<img src="https://pic.hanjiaming.com.cn/2023/01/04/ec4d7c2b9e2be.png" alt="1672804045963.png" style="zoom:50%;" />



每一行的加和都是1。

### General factors

这也是一种因子，尽管输出值不是在0-1之间。因为因子比一定是概率相关的。

<img src="https://pic.hanjiaming.com.cn/2023/01/04/e00e5c91fef1a.png" alt="1672804197972.png" style="zoom:50%;" />

## Factor Operations

因子是因子，概率是概率。因子之间的运算和概率无关。

### Factor Product

因子之间可以做乘积。即把两个表格乘起来。

![1672804513112.png](https://pic.hanjiaming.com.cn/2023/01/04/745c3b0d2debd.png)

### Factor Marginalization

和概率中的边际化操作很相似。

<img src="https://pic.hanjiaming.com.cn/2023/01/04/55af76a9cbabf.png" alt="1672804673864.png" style="zoom:50%;" />

### Factor Reduction

和概率中的 Reduction 操作很相似。

![1672804827838.png](https://pic.hanjiaming.com.cn/2023/01/04/49fa1d21694fd.png)

::: tip Why factors

我们发现因子是帮助我们定义概率分布和高维空间的重要概念。我们如果要定义一个非常大的概率分布，包含N个随机变量，可以通过把小的定义域的因子乘在一起，来定义高维的概率分布。也可用因子的计算来推导概率。

:::

 

