---
article: false
date: 2022-07-18
order: 7
---

# Evaluation Metrics

## Overview

![1676959225137.png](https://pic.hanjiaming.com.cn/2023/02/21/d657646154b7c.png)

![1676959341812.png](https://pic.hanjiaming.com.cn/2023/02/21/36695501a0151.png)

## Classification Metrics

- True Positives (TP)：数据点的实际类别为 True，预测的类别也为 True
- True Negatives (TN)：数据点的实际类别为 False，预测的也为 False
- False Positives (FP): 数据点的实际类别为 False，**预测**为 True
- False Negatives (FN)：数据点的实际类别为 True，预测为 **False**

![CleanShot 2023-02-21 at 14.03.02@2x.png](https://pic.hanjiaming.com.cn/2023/02/21/dc5fc25954001.png)

### Accuracy

当数据中的目标变量类大多数是是一个类时，从不用作度量。

::: warning Example

- 在日常生活中，每100人中有5人患有癌症。
- 考虑到一个假的癌症检测模型只输出'健康'，其准确率可以达到95%。
- 虽然它的准确性很好，但它是一个好模型吗？不
- 观察结果：当数据中的目标变量类别是一个类别的大多数时，准确率表现不好。

:::

### Precision and Recall

- Precision 就是要精确；即使我们只设法捕捉到一个真实的案例，而且我们捕捉得很正确，那么我们就是100%的精确。
- Recall 与不是关心正确捕获案例，**而是关心是捕获所有真实案例**。

## F1 Score

$$
\text { F1 Score }=\frac{2 \times \text { Precision } \times \text { Recall }}{\text { Precision }+\text { Recall }}
$$

- A single score that represents both Precision and Recall
- F1 分数是 Precision 和 Recall 的调和平均值「harmonic mean」
- 与算术平均数不同，调和平均值 与大数相比，更接近于小数
- 因此，之前的癌症检测模型的F1分数将为0（“阳性”是指患有癌症）

## ROC

<img src="https://pic.hanjiaming.com.cn/2023/02/21/82955cfc5c4c7.png" alt="1676959739345.png" style="zoom: 15%;" />