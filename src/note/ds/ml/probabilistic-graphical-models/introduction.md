---
article: true
date: 2023-01-03
order: 1

---

# Introduction

- 这一部分内容来自斯坦福大学的公开课：https://www.coursera.org/learn/probabilistic-graphical-models
- 参考书：https://mitpress.mit.edu/books/probabilistic-graphical-models

概率模型是机器学习中的重要模型。没有凭空现象，我更倾向于这是一种思想理念，能够为解决一类问题提供一种可行的模型。为了建立这种模型，我们需要深入理解这个模型的原理，以及如何建立。

概率模型是比较传统，或者说相对古老的机器学习模型。尽管现在像深度学习和神经网络更受欢迎，概率模型依然是学者不可忽视的重要模型。它常用于做推断和决策制定。

本节也只是记录了我的笔记。如遇全面的了解，敬请参考原课程。

<!-- more -->

## Models

构建模型可以参考两个来源

- 有领域的专家显式的指示
- 从数据中发觉潜在的

<img src="https://pic.hanjiaming.com.cn/2023/01/03/846c357e7092d.png" alt="1672759356454.png" style="zoom:33%;" />

模型的表示是显式的，声明的。

不确定性地方来源

- Partial knowledge of state of the world「对世界状况的部分了解，而不是全面的」
- Noisy observations
- Phenomena not covered by our model
- Inherent stochasticity「固有的随机性」

## Probability Theory

- 具有明确语义的声明性表述
- 强大的推理模式
- 既定的学习方法

Complex Systems

- Random variables X1,..., Xn
- Joint distribution P(X1,..., Xn)

## Graphical Models

两种常见的图形化表示模型

![1672759835044.png](https://pic.hanjiaming.com.cn/2023/01/03/dcfd0ab39b812.png)

![1672759865840.png](https://pic.hanjiaming.com.cn/2023/01/03/29f3ddeb0c017.png)

## Applications

- Medical diagnosis
- Fault diagnosis「故障诊断」
- Natural language processing
- Traffic analysis
- Social network models「社交网络模型」
- Message decoding
- Computer vision
  - Image segmentation
  - 3D reconstruction
  - Holistic scene analysis「整体场景分析」
- Speech recognition
- Robot localization & mapping「机器人定位和测绘」