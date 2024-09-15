---
article: false
date: 2023-04-23
index: true
order: 3
headerDepth: 2

---

# Dimensionality Reduction

- 假设：数据位于或接近一个低d维的子空间上
- 这个子空间的红轴是数据的有效代表
- 降维的目标是发现数据的红轴

![CleanShot 2023-04-21 at 13.15.00@2x](https://static-file.hirsun.tech/2023/04/23/7e80322743695.png)

- 我们不是用2个坐标来表示每个点，而是用1个坐标来表示每个点（对应于红线上的点的位置）。
- 这样做我们会产生一点误差，因为这些点并不完全位于直线上。

## Why

- 数据以前所未有的速度积累
- 数据预处理是有效的机器学习和数据挖掘的一个重要部分
  - ML 和 DM 技术可能对高维数据无效
- 降维是缩小数据规模的一种有效方法
  - 内在维度可能很小
  - 发现隐藏的相关性/主题，例如，经常一起出现的词
  - 去除冗余和嘈杂的特征，例如，并非所有单词都有用
- 解释和可视化
- 更容易存储和处理数据

## Rank of a Matrix

- Q: What is rank of a matrix A?
- A的线性独立列的数量

![CleanShot 2023-04-21 at 13.18.30@2x](https://static-file.hirsun.tech/2023/04/23/696cd266b1792.png)

## Latent Factor Models

**SVD:** A = U Σ V<sup>T</sup>

![CleanShot 2023-04-21 at 13.25.40@2x](/Users/hanjiaming/Downloads/Dimensionality Reduction.assets/CleanShot 2023-04-21 at 13.25.40@2x.png)

![CleanShot 2023-04-21 at 13.25.16@2x](https://static-file.hirsun.tech/2023/04/23/0c9afdef4ca47.png)

以因子的内积来估计未知的评级

## Singular Value Decomposition

![CleanShot 2023-04-21 at 13.26.43@2x](https://static-file.hirsun.tech/2023/04/23/1e05d01f08aa6.png)

### Properties

始终有可能将一个真实的 matrix A into A = U Σ V<sup>T</sup> ,where

- **U,** Σ**, V**: unique
- U，V：柱状正态「column orthonormal」
  - U<sup>T</sup> U=I;VU<sup>T</sup> V=I  (I: identity matrix)
  - 列是正交的单位向量
- Σ: diagonal
  - 条目（奇异值）为正数，并按递减顺序排序  (σ1 >= σ2 >= σ3 ... >= 0)

### Definition

$$
A_{[m \times n]}=U_{[m \times r]} \Sigma_{[r \times r]}\left(V_{[n \times r]}\right)^{T}
$$

- A: Input data matrix
  - m x n矩阵（例如，m个文件，n个术语）。
- U: Left singular vectors
  - m x r矩阵（m文件，r概念）。
- Σ: Singular values
  - r x r对角线矩阵（每个 "概念 "的强度）。
  - (r : 矩阵A的 rank)
- V: Right singular vectors
- n x r matrix (n terms, r concepts)

![CleanShot 2023-04-21 at 13.37.37@2x](/Users/hanjiaming/Downloads/Dimensionality Reduction.assets/CleanShot 2023-04-21 at 13.37.37@2x.png)

## DR with SVD

- 与其使用两个坐标（𝒙，𝒚）来描述点的位置，不如只使用一个坐标𝒛
- 点的位置是它沿着矢量𝒗𝟏的位置
- 如何选择𝒗𝟏？
  - 最大限度地减少重建误差

目标：使重建误差之和最小化
$$
\sum_{i=1}^{N} \sum_{j=1}^{D}\left\|x_{i j}-z_{i j}\right\|^{2}
$$
where 𝒙𝒊𝒋 are the “old” and 𝒛𝒊𝒋 are the “new” coordinates

SVD给出了投射的 "最佳 "轴：'最佳'=最大限度地减少重建误差

换言之，最小重建误差



