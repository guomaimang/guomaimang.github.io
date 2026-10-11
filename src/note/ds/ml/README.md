---
article: false
date: 2022-06-14
order: 0
---

# Machine Learning

提升心法「数学之道」与技法「Python之道」

- 心法：[regression-models/](regression-models/), [probabilistic-graphical-models/](probabilistic-graphical-models/), [neural-network-models/](neural-network-model/)
- 技法：[practical-skills/](practical-skills/)

## What is ML

机器学习是一个过程，据此，

- 计算机被赋予了学习从数据中做出决定的能力
- 而不需要明确地进行编程!

目前本节笔记计划覆盖的模型有

- Machine Learning
  - Regression Model
  - Probabilistic Graphical Models
- Deep Learning
  - Neural Network Model

![1675217276121.png](https://netdesk.orcsvc.com/f/mnYF9/08aa3bc7a2b46.png)

## Unsupervised learning

从无标签的数据中发现隐藏的答案

例子：将客户分为不同的类别（聚类）。

![1655201455429.png](https://netdesk.orcsvc.com/f/doEZcX/86deba1f8d1c3.png)

## Supervised learning

- 预测值是已知的
- 目的：根据特征，预测未见过的数据的目标值

![1655201518097.png](https://netdesk.orcsvc.com/f/a2M3Fq/d3edb7dc9d57d.png)

### Types of supervised learning

<img src="https://netdesk.orcsvc.com/f/k8ELsb/dcf6be010d80e.png" alt="1655201561347.png" style="zoom:50%;" />

- Classification: predicts **categorical** class labels
  - 根据训练集和分类属性中的值（类别标签）对数据进行分类（构建一个模型），并将其用于对新数据的分类。
  - 返回一个离散值（标签）作为输出，例如，将恒生指数（HSI）的趋势划分为上升、下降、水平。
- Regression: models **continuous-valued** functions, i.e., predicts unknown or missing values
  - 返回一个实际价值作为输出，例如，预测恒生指数的未来价值

## Naming conventions

- 特征=预测变量=自变量 (𝑥 : input variables/attributes/**features**)
- 目标变量=因变量=反应变量 (𝑦 : output variable/attribute/target variable)

即

- Feature = predictor variable = independent variable
- Target variable = dependent variable = response variable

