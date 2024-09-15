---
article: false
date: 2023-04-23
index: true
order: 1
headerDepth: 2
---

# Recommendation System

## Content Based (CB)

![1681874206388.png](https://pic.hanjiaming.com.cn/2023/04/19/cbfbeefb1b020.png)

### Objective

![1681874303831.png](https://pic.hanjiaming.com.cn/2023/04/19/4c18f6dba776d.png)

### Objective in general

![1681874375379.png](https://pic.hanjiaming.com.cn/2023/04/19/f38627aad51f4.png)

### Pros

- 不需要其他用户的数据
- 能够向具有独特品味的用户推荐
- 能够推荐新的和不受欢迎的项目：没有冷启动项目问题
- 能够提供解释：可以通过列出导致项目被推荐的内容特征来提供对推荐项目的解释。

### Cons

- 很难找到合适的特征：E.g., images, movies, music
- 给新用户的建议：如何建立一个用户档案？
- 过度专门化
  - 从不推荐用户内容资料之外的项目
  - 人们可能有多种兴趣
  - 无法利用其他用户的质量判断

## Collaborative Filtering (CF)

如果C和D都喜欢《功夫熊猫》，不喜欢《情书》，那么当C把新电影《搏击》评为好的时候，它就会向D推荐这部电影。

It learns feature itself - “Feature Learning”

![1681875024713.png](https://pic.hanjiaming.com.cn/2023/04/19/1c3e3e1e075f0.png)

![1681875042385.png](https://pic.hanjiaming.com.cn/2023/04/19/8636b427d0bc2.png)

### Process

- Initialize: $\theta^{(1)}, \theta^{(2)}, \cdots, \theta^{\left(n_{u}\right)} \text { and } x^{(1)}, x^{(2)}, \cdots, x^{\left(n_{m}\right)}$ to small random values

- Minimize $J\left(x^{(1)}, x^{(2)}, \cdots, x^{\left(n_{m}\right)}, \theta^{(1)}, \theta^{(2)}, \cdots, \theta^{\left(n_{u}\right)}\right)$ using gradient decent

- For a user with parameters 𝜃 and a movie with learned

  features 𝑥, predict a rating of 𝜃<sup>T</sup>𝑥

### Gradient Descent Update

![CleanShot 2023-04-19 at 11.34.30@2x.png](https://pic.hanjiaming.com.cn/2023/04/19/483484250ae1a.png)

![1681875311249.png](https://pic.hanjiaming.com.cn/2023/04/19/16847b52362d4.png)

## CF: Find “Similar” Users

- `rx =[*,_,_,*,***]`
- `ry =[*,_,**,**,_]`

Let rx be the vector of user x's ratings

::: info

在下面的脚注中，x 与 y 分别表示不同用户，而 i 表示 第 i 个 item。

:::

### Jaccard similarity measure

- Problem: Ignores the value of the rating
- Jaccard(A, B) = (A ∩ B) / (A ∪ B)

### Cosine similarity measure

Problem: Treats missing ratings as “negative”
$$
\operatorname{Cosine_sim}(x, y)=\frac{\sum_{i} r_{x i} \cdot r_{y i}}{\sqrt{\sum_{i} r_{x i}^{2}} \cdot \sqrt{\sum_{i} r_{y i}^{2}}}
$$

### Pearson correlation coefficient

- S<sub>xy</sub> = items rated by both users x and y
- $\overline{\mathbf{r}_{x}}, \overline{\mathbf{r}_{y}}$  -> avg. rating of x, y

$$
\operatorname{sim}(x, y)=\frac{\sum_{s \in S_{x y}}\left(r_{x s}-\overline{r_{x}}\right)\left(r_{y s}-\overline{r_{y}}\right)}{\sqrt{\sum_{s \in S_{x y}}\left(r_{x s}-\overline{r_{x}}\right)^{2}} \sqrt{\sum_{s \in S_{x y}}\left(r_{y s}-\overline{r_{y}}\right)^{2}}}
$$

![1681876377612.png](https://pic.hanjiaming.com.cn/2023/04/19/5f8de7764881d.png)

::: tip

- 当皮尔逊相关系数为1时，表示两个变量之间存在完全正相关的线性关系；
- 当皮尔逊相关系数为-1时，表示两个变量之间存在完全负相关的线性关系；
- 当皮尔逊相关系数接近0时，表示两个变量之间没有或者只有很弱的线性关系。

一个正的皮尔逊相关系数表示两个用户在评分方面的趋势相似，而负值表示他们的评分趋势相反。

:::

### Rating Predictions

- 令 rx 为用户 x 评分的向量
- 设 N 为与 x 最相似的 k 个用户的集合，他们对项目 i 进行了评分

对用户x的项目i的预测：

选项1：
$$
r_{x i} =\frac{1}{k} \sum_{y \in N} r_{y i}
$$
选项2：
$$
r_{x i}  =\frac{\sum_{y \in N} s_{x y} \cdot r_{y i}}{\sum_{y \in N} s_{x y}}
$$
Shorthand: S𝒙𝒚 = 𝒔𝒊𝒎 (𝒙, 𝒚)

## CF: Item-Item

另一种观点：Item - item

- 对于项目i，找到其他类似的项目
- 根据相似项目的评分估计项目 i 的评分
- 可以使用与用户-用户模型中相同的相似度量和预测功能

$$
r_{x i}  =\frac{\sum_{y \in N} s_{x y} \cdot r_{y i}}{\sum_{y \in N} s_{x y}}
$$

- sij... 项目i和j的相似性
- rxj...用户u对项目j的评价
- N(i;x)... set of items rated by x similar to i

For example,

![1681877505003.png](https://pic.hanjiaming.com.cn/2023/04/19/5680ac1469c99.png)

![1681877533802.png](https://pic.hanjiaming.com.cn/2023/04/19/97cf50ca868be.png)

## Common Practice in CF

- Define **similarity** S<sub>ij</sub> of items **i** and **j**
- Select **k** nearest neighbors **N(i; x)**
  - tems most similar to **i**, that were rated by **x**
- 将评分 r<sub>xi</sub> 估计为加权平均值

![1681878026821.png](https://pic.hanjiaming.com.cn/2023/04/19/bf1cd9f3d5914.png)

- μ = 总的平均电影评分
- **b**<sub>x</sub>= 用户 x 的评级偏差 =  (*avg. rating of user* **x**) **– μ**
- b<sub>i</sub>= 电影 i 的评分偏差 =  (*avg. rating of movie* **i**) **– μ**

In practice, it has been observed that item-item often works better than user-user, since Items are simpler, users have multiple tastes

Pros/Cons:

- 适用于任何类型的物品: No feature selection needed
- Cold Start: 需要系统中有足够的用户才能找到匹配项
- Sparsity「稀缺性」
  - 用户/评分矩阵是稀疏的
  - 很难找到给相同项目评分的用户
- 第一评分人
  - 不能推荐以前没有被评级的项目
  - 新项目，神秘「Esoteric」的项目
- Popularity bias
  - 不能向有独特品味的人推荐物品
  - 倾向于推荐受欢迎的项目

