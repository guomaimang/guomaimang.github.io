---
article: false
date: 2022-07-12
order: 1
headerDepth: 1
---

# Bayesian Network

## Bayesian Networks

将多个因子联系起来。

<img src="https://pic.hanjiaming.com.cn/2023/01/04/2c549d22b7173.png" alt="1672813249056.png" style="zoom:25%;" />

<img src="https://pic.hanjiaming.com.cn/2023/01/04/44ecf810fa08b.png" alt="1672813272267.png" style="zoom:25%;" />

下图展示的就是一个参数化的贝叶斯网络。

![1672818055475.png](https://pic.hanjiaming.com.cn/2023/01/04/22436cb2d736a.png)

后续将了解如何让从贝叶斯网络得到联合概率分布。

We can directly apply the chain rule for Bayesian networks here. This comes from the standard chain rule of probability, which states that 
$$
P(D, I, G, S, L)=P(D) P(I \mid D) P(G \mid D, I) P(S \mid D, I, G) P(L \mid D, I, G, S)
$$
::: tip 贝叶斯网络

A Bayesian network is:

- A directed acyclic graph「有向无环图」 (DAG)G whose nodes represent the random variables X1,....Xn
- For each node Xi, a CPD $P\left(X_{i} \mid {P a r}_{G}\left(X_{i}\right)\right)$
- The BN represents a joint distribution

:::

## Chain Rule

简单的说，就是把各个 CPD 乘起来。

<img src="https://pic.hanjiaming.com.cn/2023/01/04/1d8b39d40ded5.png" alt="1672818570064.png" style="zoom:25%;" />

这种情况下，我们得到一个scope = 5 的因子。

## 建立贝叶斯网络

1. 选择随机变量
2. 选择顺序（最好是从根到子）
3. 当有变量剩下的时候
   1. Add node 𝑋𝑖 to the BN
   2. Set parents of 𝑋𝑖 to the **minimal** subset such that 𝑋𝑖 is conditionally independent from non-parent nodes preceding i, given its parents.
   3. Define 𝑃 ( 𝑋𝑖|𝑝𝑎𝑟𝑒𝑛𝑡(𝑋𝑖) ) CPT

::: tip CPT是什么

全称 Conditional Probabilities Table

<img src="https://pic.hanjiaming.com.cn/2022/07/12/0f43a80bff265.png" alt="1657559527848.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/07/12/3b78b2ecee145.png" alt="1657559578197.png" style="zoom: 33%;" />

:::

## Noisy-or

基于 Y 的 Parent 预测 P(Y = 1 | Parent)

<img src="https://pic.hanjiaming.com.cn/2022/07/12/0f43a80bff265.png" alt="1657559527848.png" style="zoom:33%;" />

由 $P\left(Y=0 \mid x_{\ldots} \ldots x_{k}\right)=1-O R\left(x_{1} \ldots x_{k}\right)$ 和 $O R\left(x_{1} \cdots x_{k}\right)=\left\{\begin{array}{ll}
1 & \text { if any } x_{i}=1 \\
0 & \text { otherwise }
\end{array}\right.$ ，可得
$$
P\left(Y=0 \mid x_{1} \cdots x_{k}\right)=\prod_{i=1}^{k}\left(1-p_{i}\right)^{x_{i}}
$$

$$
P\left(Y=1 \mid x_{1} \cdots x_{k}\right)=1-\prod_{i=1}^{k}\left(1-p_{i}\right)^{x_{i}}
$$

其中  x<sub>i</sub> = 0 或者 x<sub>i</sub> = 1

::: info 例题

Let $P\left(Y=1 \mid X_{1}=0, \ldots, X_{i}=1, X_{j}=1, \ldots, X_{k}=0\right)=\frac{1}{3}$ and $p_{i}=\frac{1}{5}$，what is p<sub>j </sub>?
$$
1-\left(1-\frac{1}{5}\right)\left(1-p_{j}\right)=\frac{1}{3}
$$
:::

## Active Trails

When can X influence y? 

<img src="https://pic.hanjiaming.com.cn/2023/01/04/a61d2f7ea179b.png" alt="1672833132167.png" style="zoom: 25%;" />

When can X influence Y Given evidence about Z?

<img src="https://pic.hanjiaming.com.cn/2023/01/04/443fefb3036d3.png" alt="1672834828989.png" style="zoom: 25%;" />

<img src="https://pic.hanjiaming.com.cn/2023/01/04/420257cc0ec28.png" alt="1672835030957.png" style="zoom: 25%;" />

A trail X1 - ... - Xn is active given Z if:

- If or any v-structure Xi-1􏰀 → 􏰀 Xi􏰁 ← Xi+1 we have that *Xi  or one of its descendants ∈Z*
- no other Xi is in Z

## 条件独立

When is **X conditionally independent of Y** given E(evidence)?

- $P(X, Y \mid E)=P(X \mid E) P(Y \mid E)$
- $P(Y \mid X , E)= P(Y \mid E)$
- $P(X \mid Y , E)= P(X \mid E)$

::: tip 

Theorem: $P(X, Y \mid E)=P(X \mid E) P(Y \mid E)$ if and only if every **UNDIRECTED** path from a node in X to a node in Y is "d-separated" ("blocked") by E.

:::

