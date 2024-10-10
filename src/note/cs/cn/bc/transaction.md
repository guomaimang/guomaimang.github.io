---
article: false
date: 2024-10-05
index: true
order: 3
headerDepth: 1


---

# Transaction

## App Example

假设我们有一个去中心化的电子商务平台，用户可以在平台上进行商品交易。为了确保交易的安全性和透明性，**我们决定使用区块链技术来记录所有的交易**。

在这种情况下，我们需要一个分布式账本来记录所有的交易数据。

- 每个用户都可以查看账本中的交易记录，但只有经过验证的交易才能被添加到账本中。
- 我们需要确保账本的安全性和一致性，防止双重支付和恶意篡改。

为了实现上述目标，我们可以使用比特币的工作量证明（PoW）共识机制。通过PoW，矿工可以验证交易并将其添加到区块链中，确保账本的安全性和一致性。

1. 用户A发起一笔交易，购买用户B的商品。
2. 交易信息被广播到整个区块链网络。
3. 矿工节点收到交易信息，并开始验证交易的有效性。
4. 矿工通过解决PoW难题来竞争添加新的区块。
5. **第一个成功解决难题的矿工将交易打包到新的区块中，并将区块添加到区块链中。**
6. 其他节点验证新的区块，并更新自己的账本副本。
7. 用户A和用户B的交易记录被永久记录在区块链中，无法篡改。

假设矿工成功解决了PoW难题，并将包含用户A和用户B交易的区块添加到区块链中。新的区块包含以下信息：

- 区块哈希值：0000000000000000000a16d8b8c4d0e9d8b8c4d0e9d8b8c4d0e9d8b8c4d0e9d
- 前一个区块的哈希值：0000000000000000000b16d8b8c4d0e9d8b8c4d0e9d8b8c4d0e9d8b8c4d0e9d
- 交易数据：用户A -> 用户B，金额：1 BTC
- 时间戳：2023-10-01 12:00:00

这笔交易被永久记录在区块链中，所有节点都可以验证这一交易的合法性。

## Transaction Example

当 A 把 2 BTC 转移给 B 时，区块链网络会经历以下几个步骤：

### 交易创建

A 创建一笔交易，该交易包含以下信息：
- 输入 (Input)：A 的比特币地址和之前的一笔或多笔交易的输出（即 A 拥有的比特币）。
- 输出 (Output)：B 的比特币地址和转移的金额（2 BTC），以及找零地址和找零金额（如果有找零）。

### 交易签名
- A 使用其私钥对交易进行数字签名。
- 这个签名可以证明交易是由 A 发起的，并且防止交易在传输过程中被篡改。

### 广播交易
- A 将签名后的交易广播到比特币网络。
- 比特币网络是一个由节点（计算机）组成的去中心化网络，这些节点共同维护和验证区块链。

### 交易验证
网络中的节点接收到交易后，会进行以下验证：
- 验证签名：确保交易确实是由 A 发起的。
- 确认输入：检查 A 的地址是否有足够的余额来完成这笔交易。
- 双重花费检查：确保 A 没有试图将同一笔比特币花费两次。

### 交易打包
- 一旦交易被验证，矿工节点会将其打包到一个待挖掘的区块中。
- 矿工会优先选择包含较高交易费用的交易，因为他们会从中获得奖励。

### 挖矿和区块确认
- 矿工通过解决复杂的数学问题（即工作量证明）来挖掘新的区块。
- 解决问题后，矿工将新挖掘的区块添加到区块链中。
- 这个区块包含了 A 和 B 之间的交易。

### 网络共识
- 其他节点验证新挖掘的区块和其中的交易，并达成共识。
- 如果大多数节点同意这个区块是有效的，它就会被永久添加到区块链中。

### 确认数
- 交易一旦被包含在区块中，就会得到第一次确认。
- 随着更多区块的添加，交易的确认数会增加。
- 通常，6 个确认被认为是安全的，意味着交易被广泛接受并且几乎不可能被逆转。

### 交易完成
- 经过足够的确认后，B 可以确认他已经收到 2 BTC。
- 这时，交易在区块链上是不可逆的，B 可以自由使用这 2 BTC。

### 总结
整个过程确保了交易的安全性、可靠性和不可篡改性。比特币区块链通过去中心化和密码学技术，实现了点对点的价值转移，而无需第三方机构的介入。

## 矿工的经济动机

- 在比特币网络中，矿工通过解决复杂的数学问题（即工作量证明）来挖掘新的区块。
- 每个区块中可以包含一定数量的交易，矿工在选择哪些交易打包进区块时，会优先选择那些支付较高交易费用的交易。

矿工通过两种方式获得奖励：

1. **区块奖励（Block Reward）**：每成功挖掘一个新区块，矿工会获得一笔固定的比特币奖励（这个奖励每四年减半，目前是 6.25 BTC）。
2. **交易费用（Transaction Fees）**：区块中包含的所有交易的费用总和。

::: tip Bitcoin difficulty adjustment algorithm

210000 (50 + 25 + 12.5 + ...) -> 21,000,000

- 难度会根据硬件性能调整，以确保区块生成时间大约为10分钟。
- 通过不断减半的奖励机制，最终比特币的总供应量会接近2100万个。
- The Bitcoin difficulty adjustment algorithm is programmed and automatically executed based on this predefined schedule.

:::

Advantages:

- It provides **incentives** to be a miner.
- It makes the miners interested in **broadcasting new block** asap.
- When all coins had been mined -> only transaction fee.

### 交易费用

每笔比特币交易除了转账金额外，还可以包含一个**交易费用（Transaction Fee）**。这个费用是用户支付给矿工的报酬，作为矿工将该交易打包进区块的激励。

由于区块奖励会逐渐减半，交易费用在矿工收入中的比例会越来越重要。因此，矿工有动机选择那些支付较高交易费用的交易，以最大化自己的收益。

### 矿工选择交易的过程

1. **接收交易**：矿工节点会从网络中接收到大量的待处理交易。
2. **排序交易**：矿工会根据交易费用的高低对这些交易进行排序。通常，矿工会优先选择那些费用较高的交易，因为这些交易能为他们带来更多的收入。
3. **打包交易**：矿工将选定的交易打包到一个待挖掘的区块中。由于每个区块的大小是有限的（目前比特币区块大小限制为 1 MB），矿工只能选择一定数量的交易进行打包。

### 交易费用的竞争

由于矿工优先选择高费用的交易，用户在发起交易时，如果希望交易尽快被确认，通常会支付较高的交易费用。

这就形成了一种竞争机制，用户通过支付更高的费用来吸引矿工优先处理他们的交易。

### 实际操作

假设 A 想将 2 BTC 转给 B，A 可以选择支付一定的交易费用（例如 0.0001 BTC）。

如果当前网络繁忙，A 可能需要支付更高的费用（例如 0.001 BTC）来确保交易尽快被矿工打包进区块并确认。

### 总结

矿工优先选择高交易费用的交易进行打包，是因为这些交易能为他们带来更多的收入。交易费用的竞争机制确保了矿工有足够的激励来维护网络的安全性和可靠性，同时也使得用户可以通过支付合理的费用来加快交易的确认速度。

## 交易发布和广播

1. **交易创建**：用户 A 创建一笔交易，将 2 BTC 转移给用户 B，并附带适当的交易费用。
2. **交易广播**：A 将这笔交易广播到比特币网络。这个网络由大量的节点组成，**每个节点都会接收到这笔交易。**
3. **交易传播**：节点接收到交易后，会将其传播给其他节点。这样，交易在整个网络中迅速传播开来。
4. **交易验证**：每个接收到交易的节点都会对交易进行验证，确保交易有效（签名正确、A 有足够的余额、没有双重花费等）。
5. **交易池**：**验证通过的交易会被放入一个称为“内存池”（mempool）的地方。这个内存池可以看作是一个等待区，里面包含了所有待处理的交易。**
6. **矿工选择交易**：矿工节点会从内存池中选择交易进行打包。由于每个区块的大小有限（目前是 1 MB），矿工无法将所有交易都打包进去，因此他们会优先选择那些支付较高交易费用的交易。
7. **挖矿竞争**：矿工通过计算哈希值来尝试解决一个复杂的数学问题。这个过程称为工作量证明（Proof of Work）。第一个成功解决问题的矿工将赢得竞争。
8. **区块生成**：**成功解决问题的矿工将生成一个新区块，包含他选择的交易（包括 A 转给 B 的那笔交易）以及一个区块头。**区块头包含前一个区块的哈希值、新区块的哈希值和其他相关信息。
9. **区块广播**：矿工将新生成的区块广播到网络中，其他节点接收到新区块后，会进行验证。
10. **区块确认**：如果新区块通过验证，节点会将其添加到本地的区块链中。此时，区块中的交易（包括 A 转给 B 的交易）得到了一次确认。
11. **后续区块**：随着更多区块的添加，A 和 B 之间的交易会得到更多的确认。通常，六次确认被认为是安全的，意味着交易几乎不可能被逆转。

整个过程可以总结为：

- 用户创建并广播交易。
- 节点验证并传播交易。
- 矿工从内存池中选择交易并竞争打包。
- 成功的矿工生成新区块并广播。
- 节点验证并添加新区块到区块链中。

通过这种机制，比特币网络确保了交易的安全性、可靠性和去中心化。矿工通过竞争高交易费用的交易来获得更多的收入，同时维持网络的运行和安全。

## 数学问题的性质

比特币挖矿中的数学问题实际上是寻找一个满足特定条件的哈希值。

- 具体来说，矿工需要找到一个区块头（包括交易数据和随机数）的哈希值，使其小于当前的目标值（target）。
- **这个目标值随着时间的推移会调整，以确保新块的生成速度保持稳定。**

### 随机数和无限可能性

- 矿工通过调整一个称为“随机数”（nonce）的值来不断尝试不同的哈希值。
- 由于哈希函数的输出是不可预测的，每次尝试都是独立的，理论上可能性是无限的。因此：
  - **数学问题的个数是无限的**：矿工可以通过不断调整随机数和其他区块头信息来生成新的哈希值，直到找到符合条件的哈希值。
  - **不会存在所有数学问题都被解决完的情况**：因为哈希函数的输出空间极其庞大，矿工总能找到新的解。

### 解决数学问题通常需要多长时间

#### 目标时间和难度调整

比特币网络设计的目标是每 10 分钟生成一个新区块。为了实现这个目标，**比特币协议会每 2016 个区块（大约每两周）调整一次挖矿难度。**难度调整的机制是根据前 2016 个区块的实际生成时间来调整的：

- **如果前 2016 个区块生成时间少于两周**，难度会增加，使得找到符合条件的哈希值变得更困难。
- **如果前 2016 个区块生成时间多于两周**，难度会降低，使得找到符合条件的哈希值变得更容易。

#### 实际时间

- **平均时间**：在当前难度下，平均每 10 分钟会有一个新区块被挖出。这意味着大多数交易在 10 分钟内会被包含在区块中并得到第一次确认。
- **波动性**：由于哈希计算的随机性，实际生成新区块的时间会有波动。有时可能几分钟就挖出一个区块，有时可能需要更长时间。

#### 挖矿难度

- 挖矿难度「Mining Difficulty」是衡量找到满足条件哈希值的难易程度。
- 难度越大，找到满足条件的哈希值需要的计算量越大。

::: info Example

假设比特币网络在过去2016个区块的挖掘时间为30240分钟（21天），而目标是每10分钟生成一个区块。如何调整新的挖矿难度？

根据当前难度D₁，过去2016个区块的挖掘时间为30240分钟。目标是将区块生成时间调整为每10分钟一个区块。

通过调整挖矿难度，可以确保区块生成时间保持在目标范围内，维持比特币网络的稳定性。

1. 计算过去2016个区块的平均挖掘时间：t₁ = 30240分钟。
2. 目标时间：k = 10分钟/区块。
3. 新的难度目标：`D₂ = D₁ * (t₁ / 2016k) = D₁ * (30240 / (2016 * 10)) = D₁ * 1.5`
4. 检查调整范围：新的难度 D₂ 必须在 `(1/4) D₁ ≤ D₂ ≤ 4D₁` 之间。
5. 如果D₂在范围内，则新的难度设置为D₂；否则，按上下限调整。
6. 显然 1.5 符合区间

:::

::: tip Hash Rate

- 哈希率是指每秒钟可以进行的哈希计算次数。
- 哈希率越高，挖矿速度越快。

:::

### 交易等待时间

#### 内存池和交易等待

当交易被广播到网络中，它会先进入内存池等待矿工打包。矿工会优先选择高交易费用的交易，因此：

- **高交易费用**：通常会更快被矿工选择并打包进区块。
- **低交易费用**：可能需要等待更长时间，尤其是在网络繁忙时。

#### 极端情况

在极端情况下（例如网络非常拥堵），交易可能会在内存池中等待较长时间。然而，随着时间的推移和区块的不断生成，绝大多数交易最终都会被打包进区块。

### 总结

1. **数学问题的个数是无限的**，因为哈希计算的可能性是无限的，不会存在所有问题被解决完的情况。
2. **解决数学问题的平均时间是 10 分钟**，通过难度调整机制确保这一点。尽管有波动，但网络设计确保大多数交易在合理时间内得到确认。

通过这些机制，比特币网络能够在去中心化的环境中保持稳定的区块生成速度和交易确认时间。