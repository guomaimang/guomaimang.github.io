---
article: false
order: 7
date: 2023-12-14
headerDepth: 1
---

# Advanced Classification

More Classification Models, like

Bayes classifier, Association-based classifier, k-nearest neighbor (kNN), Neural network (shallow and deep models), etc.

## Bayesian Classification

- 概率学习：计算假设的显式概率，是解决某些类型的学习问题的最实用方法之一
- 递增：每个训练实例都能递增/递减假设正确的概率。先验知识可与观察到的数据相结合。
- 概率预测：预测多个假设，并按其概率加权
- 标准：即使贝叶斯方法在计算上难以处理，它们也可以提供最佳决策的标准，可以根据该标准来衡量其他方法

### Bayesian Theorem

<img src="https://pic.hanjiaming.com.cn/2023/12/15/adc8c891d90dd.png" alt="1702621698763.png" style="zoom:33%;" />

实际困难：需要对许多概率有初步了解，计算成本很高

### Classification

分类问题可以使用后验概率来形式化：

<img src="https://pic.hanjiaming.com.cn/2023/12/15/08a045eb66aea.png" alt="1702621859018.png" style="zoom:33%;" />

思路：为样本 X 分配类别标签 C，使 P(C|X) 最大

### Estimating a-posteriori probabilities

<img src="https://pic.hanjiaming.com.cn/2023/12/15/693a5324c36ee.png" alt="1702649534950.png" style="zoom: 33%;" />

### Naïve Bayes Classifier

一个简化的假设：属性是条件独立的：

<img src="https://pic.hanjiaming.com.cn/2023/12/15/3fd181fa97cde.png" alt="1702649605113.png" style="zoom:25%;" />

只计算类别分布，大大降低了计算成本。

### Naïve Bayesian Classification

<img src="https://pic.hanjiaming.com.cn/2023/12/15/c9fde32cb9cfe.png" alt="1702649679777.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/15/5d3ba137cd6cf.png" alt="1702649648141.png" style="zoom: 33%;" />

## Association-Based Classification

基于关联的分类的几种方法

<img src="https://pic.hanjiaming.com.cn/2023/12/15/3a0935267ff2c.png" alt="1702652389170.png" style="zoom:33%;" />

- ARCS: Quantitative association mining and clustering of association rules
- CAEP（Classification by aggregating emerging patterns）
  - 新兴模式 (EP)：支持度从一类到另一类显着增加的项集
  - 根据最低支持率和增长率开采 EP


::: info Eager learning vs lazy learning

- 决策树是一种具有代表性的急迫学习方法，它采取积极主动的步骤来建立学习任务的假设。
- 它明确描述了整个训练集的目标函数
- 让我们来看看一种更 "轻松 "的监督学习方法，即 "懒学习"，它主要体现在所谓的基于实例的模型上。

:::

## Instance-Based Classifiers

<img src="https://pic.hanjiaming.com.cn/2023/12/15/8597dd4df9a2d.png" alt="1702652939984.png" style="zoom: 33%;" />

## kNN Classification

<img src="https://pic.hanjiaming.com.cn/2023/12/15/b0569a4b030f5.png" alt="1702653076688.png" style="zoom:33%;" />

## NN Classification

### Advantages

- 预测准确率普遍较高
- 稳健，当训练样本包含错误时有效
- 输出可以是离散的、实值的，或者是多个离散或实值属性的向量
- 快速评估学习的目标函数

### Criticisms

- 训练时间长（模型构建时间）
- 难以理解学习的函数（权重）
- 不易纳入领域知识

<img src="https://pic.hanjiaming.com.cn/2023/12/15/5d92ecab7b762.png" alt="1702653180053.png" style="zoom:33%;" />

## Classification Measures

<img src="https://pic.hanjiaming.com.cn/2023/12/15/82e5a8d59fcf9.png" alt="1702622028286.png" style="zoom: 33%;" />

Classification Accuracy -》Estimating Error Rates

<img src="https://pic.hanjiaming.com.cn/2023/12/15/8ef15602f2fc7.png" alt="1702653391992.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/15/2c712ed516e3f.png" alt="1702653514300.png" style="zoom:33%;" />

## Ensemble Methods

















