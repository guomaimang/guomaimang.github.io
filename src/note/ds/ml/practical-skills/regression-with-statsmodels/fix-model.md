---
article: false
date: 2022-06-14
order: 6
---

# Fix model

## Leverage

Leverage「杠杆率」：**杠杆率衡量的是解释变量对每个观察点的不寻常或极端程度。**非常粗略地讲，高杠杆率意味着解释变量的值与数据集中的其他点不同。在简单线性回归的情况下，只有一个解释值，这通常意味着解释值非常高或非常低。

**高杠杆点是 解释变量 离其他点最远的点。**如下图红点所示

<img src="https://pic.hanjiaming.com.cn/2022/06/25/9493c57a4df51.png" alt="1656153202216.png" style="zoom:50%;" />

## Influence

Influence「影响力」衡量的是，如果模型计算中不包含每个观察值，模型会发生多大的变化，一次一个。也就是说，与在整个数据集上运行线性回归相比，如果您对除该点以外的所有数据点运行线性回归，它会测量预测线的外观有多么不同。

影响力的标准度量是库克距离，它根据残差大小和点的杠杆率计算影响力。不妨当做力与力矩的关系。远离趋势线的观测值具有很大的影响，因为它们的残差很大，并且与其他观测值相距甚远。

::: warning

虽然影响力是杠杆的函数，但远离趋势线的点不一定具有更高的杠杆率。

:::

```python
# Create summary_info
summary_info = mdl_price_vs_dist.get_influence().summary_frame()

# Add the hat_diag column to taiwan_real_estate, name it leverage
taiwan_real_estate["leverage"] = summary_info["hat_diag"]

# Add the cooks_d column to taiwan_real_estate, name it cooks_dist
taiwan_real_estate["cooks_dist"] = summary_info["cooks_d"]

# Sort taiwan_real_estate by cooks_dist in descending order and print the head.
print(taiwan_real_estate.sort_values(by = "cooks_dist", ascending = False).head())
```

![1656155715892.png](https://pic.hanjiaming.com.cn/2022/06/25/5c8669a192b8c.png)

