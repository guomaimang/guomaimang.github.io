---
article: false
date: 2022-11-09
order: 4
headerDepth: 1


---

# Finite Automata

![1667964609923.png](https://pic.hanjiaming.com.cn/2022/11/09/43541d03d3dac.png)

通过放入有限自动机模型来实施正则表达式识别算法。

<img src="https://pic.hanjiaming.com.cn/2022/11/09/3384a5d47d374.png" alt="1667964754178.png" style="zoom:33%;" />

## 非确定性有限自动机(NFA)

### Nondeterministic Finite Automata

非确定性有限自动机 (NFA) 由 5 个组件组成: (Σ, 𝑆, 𝑆<sub>0</sub>, 𝐹, move).

- Σ is the input alphabet
- 𝑆 is the **set of states**
- 𝑆<sub>0</sub> is the start state
- 𝐹 ⊆ 𝑆 is the set of accepting states「接受状态的集合」
- Move 是将 *状态-符号对* 映射到 *状态集* 的 **转换函数**。

<img src="https://pic.hanjiaming.com.cn/2022/11/09/3b19e7fcc60f1.png" alt="1667966458326.png" style="zoom: 33%;" /><img src="https://pic.hanjiaming.com.cn/2022/11/09/91d0050e0fa27.png" alt="1667966494550.png" style="zoom: 40%;" />

<img src="https://pic.hanjiaming.com.cn/2022/11/09/8b5df04a0d5ad.png" alt="1667966648091.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/11/09/59aad3621d09a.png" alt="1667966677835.png" style="zoom:33%;" />

基于 NFA 的识别（决策）难以实施

- 在一个给定的状态下，可以从一个输入有多个转换
- Can have 𝜀-transitions
- 易于从正则表达式中形成
- 难以实现识别（决策）算法

另一种有限自动机：Deterministic Finite Automata (DFA)「确定性有限自动机 (DFA)」

### Regular Expression to NFA

每个正则表达式都可以转换为 NFA，遵循以下基本规则：

![1667970474594.png](https://pic.hanjiaming.com.cn/2022/11/09/23aea445d2cf6.png)

Example: regular expression to NFA

::: tip

1. 拆开连接
2. 逐步拆开外层表示
3. 最后表示内层

:::

![1667970719358.png](https://pic.hanjiaming.com.cn/2022/11/09/f781bc4485835.png)

## 确定性有限自动机(DFA)

### Deterministic Finite Automata

每个状态下每个输入有一个过渡。

DFA 是 NFA 的一个特例：

- One transition per input per state
- No 𝜀-transitions

<img src="https://pic.hanjiaming.com.cn/2022/11/09/860cbb5e7a92a.png" alt="1667966795659.png" style="zoom: 33%;" />

- NFA: 容易生成字符串。
- **DFA: 易于生成和识别字符串。**
- NFA：给定一个输入符号，可以进入几个状态中的任何一个。
- **DFA：给定一个输入符号，只能进入一个确定性的状态。**
- NFA：由于 𝜀 - 转换，当没有输入时可能会进入另一个状态。
- **DFA：没有输入时哪里都不去；没有任何𝜀 - 过渡。**

<img src="https://pic.hanjiaming.com.cn/2022/11/09/3148b86ca60c6.png" alt="1667969094735.png" style="zoom:50%;" />

### Table Implementation

![1667969268659.png](https://pic.hanjiaming.com.cn/2022/11/09/7d5ebf647443f.png)

### Algorithm: Simulating a DFA

- 输入：输入字符串𝑥，以文件末尾的字符eof为终点。
  - DFA 𝐷，开始状态为𝑠<sub>0</sub>，接受**状态集为𝐹**。
- The answer “yes” if 𝐷 accepts 𝑥, “no” otherwise.
- Method：将以下算法应用于输入字符串𝑥。
  - move(𝑠, 𝑐) 给出了从状态𝑠过渡到输入𝑐的状态。
  - nextchar 返回输入字符串𝑥的下一个字符。

<img src="https://pic.hanjiaming.com.cn/2022/11/09/137cde0b120f5.png" alt="1667970005187.png" style="zoom: 50%;" />

### Every NFA can be converted to a DFA



