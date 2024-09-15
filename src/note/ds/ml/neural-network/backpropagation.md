---
article: false
date: 2023-03-06
index: true
order: 2
headerDepth: 2
---

# BackPropagation

「逆向参数调整法」

## Task Setting

- $a_i^{(j)}$ : output of unit 𝑖 at layer 𝑗 「j 层 i 项」
  - $a_i^{(1)}$ = $x_i$  「1 层 i 项」-> 第 i 个输入特征
- $\theta_{ki}^{(j)}$ :  weight on link from $a_i^{(j)}$ 「j 层 k 项」to $a_k^{(j+1)}$ 「j +1 层 i 项」

考虑该神经网络 *N*，假设激活函数为 g

<img src="https://pic.hanjiaming.com.cn/2023/03/07/1cb7744f7e770.png" style="zoom: 50%;" />

则有

- $a_{1}^{(2)}=g\left(\Theta_{10}^{(1)} x_{0}+\Theta_{11}^{(1)} x_{1}+\Theta_{12}^{(1)} x_{2}+\Theta_{13}^{(1)} x_{3}\right)$
- $a_{2}^{(2)}=g\left(\Theta_{20}^{(1)} x_{0}+\Theta_{21}^{(1)} x_{1}+\Theta_{22}^{(1)} x_{2}+\Theta_{23}^{(1)} x_{3}\right)$
- $a_{3}^{(2)}=g\left(\Theta_{30}^{(1)} x_{0}+\Theta_{31}^{(1)} x_{1}+\Theta_{32}^{(1)} x_{2}+\Theta_{33}^{(1)} x_{3}\right)$

## Cost Function

**神经网络的训练目标是最小化 总误差函数**「代价函数」 $E(\boldsymbol{w})$，其中 $\boldsymbol{w}$ 表示神经网络的**所有**权重和偏置。

总误差函数可以根据具体的问题而不同，常见的包括均方误差、交叉熵等。

为了简化任务，假设 神经网络 *N* 以使用 **均方误差+线性神经元**，且

- 有 K 个神经元输出，一个样本向量输入
- 输出层中，第 k 个神经元的预期结果为 $y_{k}$
- 输出层中，第 k 个神经元的实际输出结果为 $h_{\Theta}(x)_{k}$

$$
J(\theta)=\frac{1}{2} \sum_{k=1}^{K}\left(h_{\Theta}(x)_{k}-y_{k}\right)^{2}
$$

其中

- $J(\theta)$ 是 关于 $h_{\Theta}(x)_{k}$  的函数
- 在 x<sub>k</sub> 和 y<sub>k</sub> 已知的情况下，$h_{\Theta}(x)_{k}$ 是关于 $\theta_i$  的函数

因此 $J(\theta)$ 是关于  $\theta_i$  的函数，应当不断调整每个  $\theta_i$  的值，使用梯度下降找到 $J(\theta)$ 的最小值。这需要对每个 $\theta_i$ 求偏导数。

::: tip

对于 m 个样本，L = l + 1 层的神经网络， $J(\theta)$ 应该是
$$
J(\Theta)=\frac{1}{2 m} \sum_{i=1}^{m} \sum_{k=1}^{S_{L}}\left(h_{\Theta}\left(x^{(i)}\right)_{k}-y_{i}\right)^{2}+\frac{\lambda}{2 m} \sum_{l=1}^{L-1} \sum_{j=1}^{S_{l}} \sum_{i=1}^{S_{l+1}}\left(\Theta_{i j}^{(l)}\right)^{2}
$$
此外，交叉熵误差函数在分类问题中应用广泛

<img src="https://pic.hanjiaming.com.cn/2023/03/07/8654e221b5f84.png" alt="e97b9f8cb7cfa.png" style="zoom:33%;" />

:::

## Find Gradient

继续研究神经网络 *N* 。由于  神经网络 *N*  中输出结果不只有一个，因此应当对代价求和，即
$$
J(\Theta)=\frac{1}{2}\left(\left(h_{\Theta}(x)\right)_{1}-y_{1}\right)^{2}+\frac{1}{2}\left(\left(h_{\Theta}(x)\right)_{2}-y_{2}\right)^{2}
$$
反向传播算法的核心是计算误差项 $\delta_i^{(l)}$，它代表着第 $l$ 层第 $i$ 个神经元对损失函数的贡献。**然后根据误差项来更新权重和偏置。**以下是从输出层开始逐层计算误差项的过程。因此我们设定

- $y_{p}$ 表示输出层第 p 个神经元的输出值
- $\delta_{p}^{(j)}$ 记作 第 j 层 p 个 神经元的输出结果 对 最后一层的输出神经元的差值的贡献值
  - 如果 j = L -1 是最后一层，则 $\delta_{i}^{(L-1)}=a_{i}^{(L-1)}-y_{i}$ 
  - 否则为权重加和，需要通过递归计算，即 $\delta_{j}^{(l)}=\sum_{i=1}^{S_{l+1}}\left(\delta_{i}^{(l+1)} \Theta_{i j}^{(l)}\right)$

::: warning 易错警告

- 所有的计数，都要从1开始，而不是0
- 一共有 L = $l$ + 1 层神经网络，而不是 $l$ 层
  - $l$ 个 非输出层 和 1 个 输出层
- 考虑权重 $\theta$ 时
  - 输入层的输出有权重，所以存在 $
  - 输出层没有权重，因此不存在  $\theta_{p}^{(L)}$
    - 如果非要说有，那就是1。
  - 角标 j 的层关系，指的是当前层和下一层 j + 1
- 考虑差值贡献 $\delta$ 时
  - 输入层没有差值贡献，所以不存在  $\delta_{p}^{(1)}$ 
  - 输出层有差值贡献，所以存在 $\delta_{p}^{(L)}$ 
  - 每一层的贡献值的加和都是  $J(\Theta)$
  - 角标 j 的层关系，指的是当前层和上一层 j - 1

:::

### Delta $L$

 神经网络 *N* 中， $l$ = 2

<img src="https://pic.hanjiaming.com.cn/2023/03/07/87c7992972e9b.png" alt="f1055c1ebfe26.png" style="zoom: 50%;" />

对 $\theta_{11}^{(2)}$ 求偏导数，可知
$$
\begin{array}{l}
\frac{\partial J(\Theta)}{\partial \Theta_{11}^{(2)}} \\ =\frac{\partial \frac{1}{2}\left(\left(h_{\Theta}(x)\right)_{1}-y_{1}\right)^{2}}{\partial \Theta_{11}^{(2)}}+0 \\
=\frac{\partial \frac{1}{2}\left(a_{1}^{(3)}-y_{1}\right)^{2}}{\partial a_{1}^{(3)}} \frac{\partial a_{1}^{(3)}}{\partial \Theta_{11}^{(2)}} \\ =\left(a_{1}^{(3)}-y_{1}\right) \cdot \frac{\partial a_{1}^{(3)}}{\partial \Theta_{11}^{(2)}} \\
=\left(a_{1}^{(3)}-y_{1}\right) \cdot \frac{\partial\left(\Theta_{10}^{(2)} a_{0}^{(2)}+\Theta_{11}^{(2)} a_{1}^{(2)}+\Theta_{12}^{(2)} a_{2}^{(2)}+\Theta_{13}^{(2)} a_{3}^{(2)}\right)}{\partial \Theta_{11}^{(2)}} \\
=\left(a_{1}^{(3)}-y_{1}\right) a_{1}^{(2)}\\ =\delta_{1}^{(3)} a_{1}^{(2)}
\end{array}
$$

::: info

在这里，$a_{1}^{(2)}$ 是关于 x 的函数。 

:::

### Delta $L$ - 1

<img src="https://pic.hanjiaming.com.cn/2023/03/07/c897facd7683a.png" alt="1678164307072.png" style="zoom: 40%;" />

对 $\theta_{22}^{(1)}$ 求偏导数，可知
$$
\begin{array}{l}
\frac{\partial J(\Theta)}{\partial \Theta_{22}^{(1)}}\\=\frac{\partial \frac{1}{2}\left(a_{1}^{(3)}-y_{1}\right)^{2}}{\partial \Theta_{22}^{(1)}}+\frac{\partial \frac{1}{2}\left(a_{2}^{(3)}-y_{2}\right)^{2}}{\partial \Theta_{22}^{(1)}} \\
=\frac{\partial \frac{1}{2}\left(a_{1}^{(3)}-y_{1}\right)^{2}}{\partial a_{1}^{(3)}} \frac{\partial a_{1}^{(3)}}{\partial \Theta_{22}^{(1)}}+\frac{\partial \frac{1}{2}\left(a_{2}^{(3)}-y_{2}\right)^{2}}{\partial a_{2}^{(3)}} \frac{\partial a_{2}^{(3)}}{\partial \Theta_{22}^{(1)}} \\
=\left(a_{1}^{(3)}-y_{1}\right) \frac{\partial a_{1}^{(3)}}{\partial \Theta_{22}^{(1)}}+\left(a_{2}^{(3)}-y_{2}\right) \frac{\partial a_{2}^{(3)}}{\partial \Theta_{22}^{(1)}} \\
=\left(a_{1}^{(3)}-y_{1}\right) \frac{\partial\left(\Theta_{10}^{(2)} a_{0}^{(2)}+\Theta_{11}^{(2)} a_{1}^{(2)}+\Theta_{12}^{(2)} a_{2}^{(2)}+\Theta_{13}^{(2)} a_{3}^{(2)}\right)}{\partial \Theta_{22}^{(1)}} 
+\left(a_{2}^{(3)}-y_{2}\right) \frac{\partial\left(\Theta_{20}^{(2)} a_{0}^{(2)}+\Theta_{21}^{(2)} a_{1}^{(2)}+\Theta_{22}^{(2)} a_{2}^{(2)}+\Theta_{23}^{(2)} a_{3}^{(2)}\right)}{\partial \Theta_{22}^{(1)}} \\
=\left(a_{1}^{(3)}-y_{1}\right) \frac{\partial\left(\Theta_{10}^{(2)} a_{0}^{(2)}+\Theta_{11}^{(2)} a_{1}^{(2)}+\Theta_{12}^{(2)} a_{2}^{(2)}+\Theta_{13}^{(2)} a_{3}^{(2)}\right)}{\partial a_{2}^{(2)}} \cdot \frac{\partial a_{2}^{(2)}}{\partial \Theta_{22}^{(1)}} 
+\left(a_{2}^{(3)}-y_{2}\right) \frac{\partial\left(\Theta_{20}^{(2)} a_{0}^{(2)}+\Theta_{21}^{(2)} a_{1}^{(2)}+\Theta_{22}^{(2)} a_{2}^{(2)}+\Theta_{23}^{(2)} a_{3}^{(2)}\right)}{\partial a_{2}^{2}} \cdot \frac{\partial a_{2}^{(2)}}{\partial \Theta_{22}^{(1)}} \\
=\left(\left(a_{1}^{(3)}-y_{1}\right) \Theta_{12}^{(2)}+\left(a_{2}^{(3)}-y_{2}\right) \Theta_{22}^{(2)}\right) \cdot \frac{\partial a_{2}^{(2)}}{\partial \Theta_{22}^{(1)}} \\
=\left(\left(a_{1}^{(3)}-y_{1}\right) \Theta_{12}^{(2)}+\left(a_{2}^{(3)}-y_{2}\right) \Theta_{22}^{(2)}\right) \cdot \frac{\partial\left(\Theta_{20}^{(1)} x_{0}+\Theta_{21}^{(1)} x_{1}+\Theta_{22}^{(1)} x_{2}+\Theta_{23}^{(1)} x_{3}\right)}{\partial \Theta_{22}^{(1)}} \\
=\left(\left(a_{1}^{(3)}-y_{1}\right) \Theta_{12}^{(2)}+\left(a_{2}^{(3)}-y_{2}\right) \Theta_{22}^{(2)}\right) x_{2} \\
=\left(\delta_{1}^{(3)} \Theta_{12}^{(2)}+\delta_{2}^{(3)} \Theta_{22}^{(2)}\right) x_{2} \\
\end{array}
$$

<img src="https://pic.hanjiaming.com.cn/2023/03/07/6fc7c6d98dbed.png" alt="1678164991583.png" style="zoom:33%;" />

$\frac{\partial J(\Theta)}{\partial \Theta_{22}^{(1)}}=\left(\left(a_{1}^{(3)}-y_{1}\right) \Theta_{12}^{(2)}+\left(a_{2}^{(3)}-y_{2}\right) \Theta_{22}^{(2)}\right) x_{2} 
=\left(\delta_{1}^{(3)} \Theta_{12}^{(2)}+\delta_{2}^{(3)} \Theta_{22}^{(2)}\right) x_{2}$，该结果可记作 $\delta_{2}^{(2)} x_{2}$

### Summary

对于 L 层 和 L- 1 层

<img src="https://pic.hanjiaming.com.cn/2023/03/07/335e9f513d40c.png" alt="1678172762369.png" style="zoom: 25%;" />

::: details Delta L - n: 动态规划思想

Directly Applying Gradient Descent is Expensive!

因此，不妨先把算出来的 $\delta$ 值存起来，以便前面的神经元直接使用。

<img src="https://pic.hanjiaming.com.cn/2023/03/07/088ce413b37a2.png" alt="1678172394234.png" style="zoom: 50%;" />

:::

## Gradient Derivati

整个过程应当是，先正向传播，再反向传播。因此初始时应随机指定每个神经元权重的值。反向传播如扩散一般。

![1678180461969.png](https://pic.hanjiaming.com.cn/2023/03/07/53ec98a48a7f4.png)

## Back Propagation Algorithm

![1678180619317.png](https://pic.hanjiaming.com.cn/2023/03/07/37a1e4e532ada.png)

## Gradient Descent Algorithm

![1678180996838.png](https://pic.hanjiaming.com.cn/2023/03/07/bd1c08f08e949.png)

::: warning 再次提醒

输出层没有权重，因此不存在  $\theta_{p}^{(L)}$ 。如果非要说有，那就是 1。一般情况下，L 是不会取到 L 的。

:::

## Implementation Detail

- 对网络中的 初始权重 Θ 进行随机化 非常重要
- 不能有统一的初始权重，否则所有的更新都将是相同的，网络将不会学到任何东西。
  - 因为同一层任何神经元都可能会变成等价的

## Ref

- https://www.bilibili.com/video/BV12b4y1X7Wv/?spm_id_from=333.788&vd_source=0c500da69cdb9a3d23c34ee522fb2fab
