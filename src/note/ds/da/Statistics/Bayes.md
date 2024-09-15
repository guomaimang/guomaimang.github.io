---
article: false
date: 2022-07-09
order: 7
headerDepth: 2
author: Hirsun，Belter

---

# 全概率公式和贝叶斯公式

## 条件概率公式

设A, B是两个事件，且P(B)>0， 则在事件B发生的条件下，事件A发生的条件概率(conditional probability)为：P(A|B)= P(A∩B)/P(B)

条件概率是理解全概率公式和贝叶斯公式的基础，可以这样来考虑，如果P(A|B)大于P(A)则表示B的发生使A发生的可能性增大了。

在条件概率中，最本质的变化是**样本空间缩小了**——由原来的整个样本空间缩小到了给定条件的样本空间。

## 乘法公式

- 由条件概率公式得： $P(A \cap B)=P(B) \cdot P(A \mid B)=P(A) \cdot P(B \mid A)$
- 对于任何正整数 n≥2 ，当 P(A1 ∩ A2 ... An-1) > 0 时，有：
  $P\left(A_{1} A_{2} \ldots A_{n-1} A_{n}\right)=P\left(A_{1}\right) P\left(A_{2} \mid A_{1}\right) P\left(A_{3} \mid A_{1} A_{2}\right) \ldots P\left(A_{n} \mid A_{1} A_{2} \ldots A_{n-1}\right)$
  - 也可以写成 $\prod_{i=1}^{n} P\left(X_{i} \mid X_{1}, X_{2}, \ldots, X_{i-1}\right)$
  

## 全概率公式

设 B1，B2，.... 为有限或无限个事件，它们两两互斥且在每次试验中至少发生一个，即：

- 不重，Bi ∩ Bj = ∅（不可能事件）i≠j ,
- 不漏，B1∪B2∪.... = Ω（必然事件）.

这时，称事件组 B1, B2,... 是样本空间S的一个划分，把具有这些性质的一组事件称为一个“完备事件组”。

<img src="https://pic.hanjiaming.com.cn/2022/07/09/3f15ceec8311c.png" alt="1657357451790.png" style="zoom:33%;" />

设 B1, B2,... 是样本空间S的一个划分，A为任一事件（图中红圈内部区域），则有：
$$
P(A)=\sum_{i=1}^{n} P\left(B_{i}\right) P\left(A \mid B_{i}\right)
$$
上式即为全概率公式（formula of total probability)，也可以写作 $P(A)=\sum_{i=1}^{n} P\left(A \cap B_{i}\right)$

::: info 全概率公式的用途

全概率公式的意义在于，当直接计算 P(A) 较为困难，而 P(Bi)，P(A|Bi)  (i=1,2,...) 的计算较为简单时，可以利用全概率公式计算 P(A) 。

思想就是，将事件A分解成若干个小事件，通过求每个小事件的概率，然后相加从而求得事件 A 的概率。

而将事件A进行分割的时候，不是直接对 A 进行分割，而是先找到样本空间S的一个划分B1,B2,...Bn, 这样事件A就被事件AB1,AB2,...ABn 分解成了 n 部分，即 A = AB1 + AB2 + ... + ABn

:::

::: tip 全概率公式的简单应用

对于逻辑事件，$P(E)=P(E \cap F)+P(E \cap \bar{F})$

:::

## 贝叶斯公式

与全概率公式解决的问题相反，贝叶斯公式是建立在条件概率的基础上寻找事件发生的原因，公式为
$$
P\left(B \mid A\right) \cdot P\left(A\right) = P\left(A \cap B\right) = P\left(A \mid B\right) \cdot P\left(B\right)
$$
结合全概率公式 $P(A)=\sum_{i=1}^{n} P\left(B_{i}\right) P\left(A \mid B_{i}\right)$ 可得
$$
P\left(B_{i} \mid A\right)=\frac{P\left(B_{i}\right) P\left(A \mid B_{i}\right)}{\sum_{j=1}^{n} P\left(B_{j}\right) P\left(A \mid B_{j}\right)}
$$
P(Bi|A) (i=1,2...) 则反映当试验产生了结果A之后，再对各种原因概率的新认识，故称后验概率。

::: tip

P(Bi|A) (i=1,2...) 则反映当试验产生了结果A之后，再对各种原因概率的新认识，故称后验概率。

贝叶斯公式最神奇之处在于将条件概率中的因和果调换了位置。

:::

::: info 贝叶斯公式变体
$$
P(X \mid Y \cap E)=\frac{P(Y \mid X \cap E) \cdot P(X \mid E)}{P(Y \mid E)}
$$
$$
P(X, Y \mid E)=P(Y \mid X, E) P(X \mid E)
$$

:::

## 其他概率公式随记

1. $P\left(E_{1} \cup E_{2}\right)=P\left(E_{1}\right)+P\left(E_{2}\right)-P\left(E_{1} \cap E_{2}\right)$
2. $P(E \cap F)=P(E) \cdot P(F)$
3. 条件独立：$P(A \cap B \mid C)=P(A \mid C) \times P(B \mid C)$
   - 这可以求得 $P(C \mid A \cap B)=P(A \cap B \mid C) \times P(C) / P(A \cap B)$
4. $1 = P(A = 0 \mid B) + P(A = 1 \mid B)$
4. 

