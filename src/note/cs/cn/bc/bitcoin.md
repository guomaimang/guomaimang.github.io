---
article: false
date: 2024-10-06
index: true
order: 3
headerDepth: 1

---

# Bitcoin

Permissionless「无需许可」: Everyone can join

- 只需生成一个密钥对
- how much bitcoin each pk/address “has” is from the blockchain state
  - 每个公钥（pk）或地址拥有多少比特币是通过区块链状态来确定的。
  - 区块链状态记录了所有交易及其结果，从而计算出每个地址的余额。
- “**U**nspent **t**ransaction **o**utput” (UTXO)
  - “未花费交易输出”（UTXO）是指尚未被使用的交易输出。
  - 在比特币的UTXO模型中，每笔交易的输出可以作为未来交易的输入，未被花费的部分即为UTXO。

**输入（Inputs）和输出（Outputs）**：

- 每笔比特币交易都有输入和输出。
- 输入是指从之前的交易中获取的比特币。
- 输出是指这笔交易将比特币发送到哪些地址。

::: info Why not just call it money?

- It’s created by a transaction.
- It’s not your “account.”
- It’s only spent once (need to spend it all).

当我们讨论以太坊的账户模型时，差异会更加明显。

:::

## UTXO

UTXO是比特币交易模型的核心概念之一，它代表了用户在区块链上可用的数字货币余额。

- 在比特币网络中，每一笔交易的输出（即交易的结果）都可以成为后续交易的输入。
- 未被使用的交易输出（即UTXO）代表了用户可以花费的比特币余额。
- 每个UTXO都由一个特定的交易ID和输出索引来唯一标识。

## Transactions

比特币交易的具体规则:

**多方发送（Multiple Recipients）**：

- 一笔比特币交易可以有多个输出，这意味着你可以在一笔交易中将比特币发送给多个接收方。
- 例如，你可以在一笔交易中将比特币发送给Alice、Bob和Charlie。

**全部花费（All or Nothing）**：

- 每次交易必须花费一个或多个UTXO的全部金额。
- 如果你想发送的金额小于某个UTXO的金额，你需要创建一个找零输出（Change Output），将多余的比特币返回给自己。

Transactions use digital signatures (in turns use hash function)

![1728137207492.png](https://pic.hanjiaming.com.cn/2024/10/05/afd059a9c04a1.png)

- 一笔交易 (tx) 可以发送给多于 1 方
- or one always needs to send all bitcoins of an address to a single recipient

### Example

**假设用户Alice有两个比特币地址（即公钥对），地址A和地址B**。她收到了以下几笔交易：

1. **交易1**：
   - 交易ID：tx1
   - 输出索引：0
   - 接收地址：A
   - 金额：2 BTC
2. **交易2**：
   - 交易ID：tx2
   - 输出索引：0
   - 接收地址：B
   - 金额：3 BTC

此时，Alice有两个UTXO：

- 一个UTXO来自交易tx1，输出索引为0，金额为2 BTC，地址为A。
- 另一个UTXO来自交易tx2，输出索引为0，金额为3 BTC，地址为B。

现在，假设 Alice 想要发送 4 BTC 给 Bob。

- 她需要使用她的UTXO来构建这笔交易。
- 由于单个UTXO的金额不足以覆盖4 BTC，她需要组合多个UTXO。

1. **选择 UTXO**：
   - Alice选择使用她的两个UTXO：2 BTC（地址A）和3 BTC（地址B）。
2. **构建交易**：
   - 输入：
     - 交易ID：tx1，输出索引：0，金额：2 BTC
     - 交易ID：tx2，输出索引：0，金额：3 BTC
   - 输出：
     - 接收地址：Bob的地址，金额：4 BTC
     - 找零地址：Alice的另一个地址（例如地址C），金额：1 BTC（找零 = 输入金额总和 - 输出金额）
3. **广播交易**：
   - Alice将构建好的交易广播到比特币网络，矿工会将其包含在下一个区块中。

交易完成后的UTXO状态：在交易完成后，原有的UTXO被标记为已花费（spent），并生成新的UTXO：

- **已花费UTXO**：
  - 交易ID：tx1，输出索引：0，金额：2 BTC（地址A）
  - 交易ID：tx2，输出索引：0，金额：3 BTC（地址B）
- **新生成的UTXO**：
  - 交易ID：tx3（新交易的ID），输出索引：0，金额：4 BTC（Bob的地址）
  - 交易ID：tx3，输出索引：1，金额：1 BTC（Alice的地址C）

通过这个例子，我们可以看到UTXO模型的工作原理：

- 每个UTXO代表了一个用户可以花费的比特币余额。
- 用户可以拥有多个UTXO，每个UTXO都是独立的。
- 在进行交易时，用户选择一个或多个UTXO作为输入，生成新的UTXO作为输出。
- 已花费的UTXO不再可用，新生成的UTXO则可以用于未来的交易。

这种模型确保了交易的透明性和可追溯性，同时也提供了较高的安全性。

### FAQ

#### 为什么要把B地址的3个BTC余额都给Bob？

- 在UTXO模型中，每个UTXO是一个不可分割的整体。
- 你不能部分使用一个UTXO，只能将其全部作为输入。
- 因此，如果你需要支付4 BTC，而你有一个2 BTC的UTXO和一个3 BTC的UTXO，你必须将这两个UTXO全部作为输入。
- 这就是为什么在例子中，Alice需要把B地址的 3个BTC余额全部作为输入之一。

#### 比特币不能拆开使用吗？

- 比特币的最小单位是“聪”（Satoshi），1 BTC = 100,000,000聪。
- 所以，比特币可以非常精细地拆分和使用，但这并不改变UTXO作为不可分割整体的事实。

#### 如何处理小数点交易？

- 处理小数点交易时，系统仍然使用UTXO模型。
- 例如，如果你有一个0.5 BTC的UTXO，你可以将其全部或部分作为输入，生成新的UTXO来表示找零。

#### 能不能把B的BTC转到A，再转给C？

是的，可以先将B地址的BTC转到A地址，然后再从A地址转给C地址。这样做的步骤如下：

假设Alice有以下UTXO：

- 地址A：2 BTC
- 地址B：3 BTC

Alice想要支付4 BTC给Bob，并且希望尽量减少找零操作。她可以先将B地址的BTC转到A地址，然后再进行支付。

第一步：将B地址的3 BTC转到A地址

- 输入：B地址的3 BTC
- 输出：A地址的3 BTC

此时，Alice的余额为：

- 地址A：5 BTC（2 BTC + 3 BTC）
- 地址B：0 BTC

第二步：将A地址的4 BTC转给Bob

- 输入：地址A的5 BTC
- 输出：
  - Bob的地址：4 BTC
  - Alice的找零地址（例如地址C）：1 BTC

最终，Alice的余额为：

- 地址A：0 BTC
- 地址C：1 BTC

通过这种方式，Alice成功地将4 BTC支付给了Bob，并且将剩余的1 BTC作为找零保留在自己的地址C上。

#### 我的一个账户可以有多个 UTXO 吗？

- 是的，一个比特币账户（即一个比特币地址）可以拥有多个UTXO。
- 每个UTXO都是一个独立的、未花费的交易输出，代表了你可以花费的比特币余额。

假设Alice的比特币地址是`1AliceAddress`，她收到了几笔不同的交易，每笔交易都有不同的输出。以下是一个示例：

1. **交易1**：
   - 交易ID：`tx1`
   - 输出索引：0
   - 接收地址：`1AliceAddress`
   - 金额：1 BTC
2. **交易2**：
   - 交易ID：`tx2`
   - 输出索引：1
   - 接收地址：`1AliceAddress`
   - 金额：2 BTC
3. **交易3**：
   - 交易ID：`tx3`
   - 输出索引：0
   - 接收地址：`1AliceAddress`
   - 金额：0.5 BTC

在这种情况下，Alice的比特币地址`1AliceAddress`有三个UTXO：

- UTXO1：来自交易`tx1`，输出索引0，金额1 BTC
- UTXO2：来自交易`tx2`，输出索引1，金额2 BTC
- UTXO3：来自交易`tx3`，输出索引0，金额0.5 BTC

#### 如何使用使用多个UTXO进行交易？

假设Alice想要支付2.5 BTC给Bob，她可以选择使用她的多个UTXO来构建这笔交易。具体步骤如下：

1. **选择UTXO**：
   - Alice选择使用她的UTXO1（1 BTC）和UTXO2（2 BTC）。
2. **构建交易**：
   - 输入：
     - 交易ID：`tx1`，输出索引：0，金额：1 BTC
     - 交易ID：`tx2`，输出索引：1，金额：2 BTC
   - 输出：
     - 接收地址：Bob的地址，金额：2.5 BTC
     - 找零地址：Alice的另一个地址（例如`1AliceChange`），金额：0.5 BTC（找零 = 输入金额总和 - 输出金额）
3. **广播交易**：
   - Alice将构建好的交易广播到比特币网络，矿工会将其包含在下一个区块中。

在交易完成后，原有的UTXO被标记为已花费（spent），并生成新的UTXO：

- **已花费UTXO**：
  - 交易ID：`tx1`，输出索引：0，金额：1 BTC
  - 交易ID：`tx2`，输出索引：1，金额：2 BTC
- **新生成的UTXO**：
  - 交易ID：`tx4`（新交易的ID），输出索引：0，金额：2.5 BTC（Bob的地址）
  - 交易ID：`tx4`，输出索引：1，金额：0.5 BTC（Alice的找零地址`1AliceChange`）

#### 找零地址可以和支付者的地址一样吗?

是的，找零地址可以和支付者的地址一样。这个地址可以是支付者的原地址，也可以是支付者控制的另一个地址。

#### 请问 Alice 可以将这个三个 UTXO 合并成一个吗？

是的。这个过程通常被称为 UTXO 合并（UTXO consolidation）。

Alice 需要创建一个新的比特币交易，该交易将这三个 UTXO 作为输入，并创建一个新的输出，**将所有金额发送到一个新的地址（可以是 Alice 自己的地址）。**

选择以下三个 UTXO 作为输入：

- UTXO1：来自交易 `tx1`，输出索引 0，金额 1 BTC
- UTXO2：来自交易 `tx2`，输出索引 1，金额 2 BTC
- UTXO3：来自交易 `tx3`，输出索引 0，金额 0.5 BTC

创建一个新的输出，将所有金额发送到 Alice 的新地址（或同一个地址）。假设 Alice 使用 `1AliceNewAddress`，则总金额为 1+2+0.5=3.51+2+0.5=3.5 BTC。

在比特币网络上进行交易时，需要支付交易费用。假设交易费用为 0.0001 BTC，那么 Alice 需要从总金额中扣除交易费用。总金额为 3.5 BTC，减去交易费用 0.0001 BTC，最终输出金额为 3.4999 BTC。

通过上述步骤，Alice 可以将三个 UTXO 合并成一个新的 UTXO。在比特币网络中，UTXO 合并有助于减少钱包中的 UTXO 数量，优化交易费用，并提高交易处理效率。

#### 支付者和接受者都填同一个地址，是可以的吗？

- 在比特币网络中，支付者和接受者可以是同一个地址。
- 这种操作在技术上是完全可行的，且在某些场景下非常有用，特别是为了合并 UTXO（Unspent Transaction Outputs）以简化钱包管理和优化交易费用。

#### 如何发给多方？

假设你的地址有一个UTXO，金额为1 BTC，你想发送0.3 BTC给Alice，0.2 BTC给Bob，其余的0.5 BTC返回给自己。你可以构建如下交易：

```
Inputs:
  - UTXO: 1 BTC

Outputs:
  - Alice: 0.3 BTC
  - Bob: 0.2 BTC
  - Change (to yourself): 0.5 BTC
```

## Double-Spending

Main Problem with Digital Money -> Double spending…

How Bitcoin Prevents Double-Spending?

<img src="https://pic.hanjiaming.com.cn/2024/10/05/6c9491d78cc79.png" alt="1728137801937.png" style="zoom: 50%;" />

用户模拟一个包含交易列表的公共只写（准确地说，只追加）公告板「bulletin-board」

一笔交易（允许 >1 个输出）的形式如下：

- User P1 transfers some coins at #16fab13fc6890 to user P2
- User P1 transfers remaining coins at #16fab13fc6890 to user P3

![1728138966457.png](https://pic.hanjiaming.com.cn/2024/10/05/26e8dd9ec4e08.png)

Transaction Table: the Bitcoin Blockchain

![1728139157456.png](https://pic.hanjiaming.com.cn/2024/10/05/4efd81489e783.png)

## Maintain Bitcoin Blockchain

Bulletin-Board “Emulation”

![1728139265308.png](https://pic.hanjiaming.com.cn/2024/10/05/8a148e2b5e14d.png)

- **Main difficulty:** Some parties can cheat.
- Classical result: emulation is possible if the “majority is honest.”
- *e.g.*, for 5 players, we can tolerate at most 2 “cheaters” at any time

::: info 权限网络与无权限网络

- 权限网络（Permissioned Network）是指只有经过授权的节点才能参与网络和共识过程。
- 而无权限网络（Permissionless Network）则允许任何人加入和参与共识，这种开放性虽然提高了网络的去中心化程度，但也增加了受到Sybil攻击的风险。

:::

::: info Sybil攻击

- Sybil攻击是一种网络攻击方式，攻击者通过创建多个虚假身份来控制网络中的大部分节点，从而影响共识过程。
- 在区块链网络中，Sybil攻击可以导致恶意节点控制账本的更新，从而篡改交易记录。

:::

**Every transaction is broadcasted to all users**: 在区块链网络中，每笔交易都会广播给所有节点。这意味着所有节点都能看到并验证交易，从而确保交易的透明性和可靠性。

![CleanShot 2024-10-05 at 22.52.03@2x.png](https://pic.hanjiaming.com.cn/2024/10/05/df589a445bf0a.png)

Works well if all users are honest but this is not the case in practice because “sybil” can appear “for free” in a permissionless network.

在每个人都可以自由参与的系统中，多数意味着什么？

<img src="https://pic.hanjiaming.com.cn/2024/10/05/6d61c93380038.png" alt="1728140188569.png" style="zoom:33%;" />

## Majority of Comp. Power

How to Check Majority of Comp. Power?

- **Majority is defined as the majority of computational power!**
  - 多数计算能力是指网络中大部分计算资源的总和。
  - 在比特币网络中，拥有多数计算能力的节点群体能够控制区块链的更新和交易验证。
- **Sybil creation doesn’t increase attackers’ computational power.**
  - 创建多个虚假身份（Sybil 攻击）不会增加攻击者的实际计算能力。
  - 即使攻击者创建了多个虚假节点，这些节点共享同一计算资源，因此整体计算能力并不会增加。
- “Measures” a user’s computational power by how much time is needed for solving a “puzzle”
- the puzzle should be difficult to solve 
  but a solution should be easily verifiable
- In Bitcoin, it is based on the cryptographic hash functions.
- **Puzzle: Given D, find x!** 即 H(x) < D
  - D here is a system-decided “difficulty” parameter.
  - 给定难度参数 D，找到满足条件的 x 值。
  - 矿工需要尝试不同的 x 值，直到找到一个使得 H(x) < D 的解答。

假设我们有一个比特币网络，其中当前难度参数 D 为 1000000。矿工需要找到一个 x，使得 SHA-256 哈希值 H(x) 小于 1000000。

- 矿工需要通过不断尝试不同的 x 值来计算其 SHA-256 哈希值，直到找到一个满足 H(x) < 1000000 的值。
- 这个过程需要大量计算资源，因为哈希函数的输出是随机分布的。
- 这个问题涉及到工作量证明（PoW）机制，矿工通过解决难题来验证交易并创建新的区块。
- 哈希函数和难度参数是 PoW 机制的核心部分，确保了网络的安全性和去中心化。

假设在尝试了 500000 次之后，矿工找到一个 x = 500000，使得 SHA-256 哈希值 H(500000) = 999999。由于 999999 小于 1000000，矿工成功找到了一个解答，并可以将其提交给网络进行验证。

## Add a Block to Blockchain

矿工是负责验证和记录交易的网络节点。他们通过解决复杂的数学问题来创建新的区块，并因此获得比特币奖励。

![1728141142011.png](https://pic.hanjiaming.com.cn/2024/10/05/dd1f0f47e21a9.png)

在比特币网络中，每10分钟会创建一个新的区块，每个区块的大小通常小于1MB。这个时间间隔是通过调整挖矿难度来保持的。

创世区块「genesis block」是比特币区块链中的第一个区块，由中本聪于2009年1月3日创建。它是整个比特币网络的起点。

![1728141394598.png](https://pic.hanjiaming.com.cn/2024/10/05/5db4628c79f69.png)

![1728141417484.png](https://pic.hanjiaming.com.cn/2024/10/05/c348932c87929.png)

The good case: copies are consistent

![1728141448321.png](https://pic.hanjiaming.com.cn/2024/10/05/d487575de0123.png)

![1728141485074.png](https://pic.hanjiaming.com.cn/2024/10/05/0468c6eee350c.png)

![1728141530048.png](https://pic.hanjiaming.com.cn/2024/10/05/9c451229db18a.png)

![1728141550551.png](https://pic.hanjiaming.com.cn/2024/10/05/8a64f449dbd5a.png)

![1728141577922.png](https://pic.hanjiaming.com.cn/2024/10/05/31dcfcc1678ad.png)

## How to Post to Blockchain

只需（通过互联网）将您的交易广播给矿工即可。希望他们能把它添加到下一个 **block**。

矿工们有动力这样做。「the miners are incentivized to do it.」

Important:

- They never add an invalid transaction (e.g., double-spending transaction)
- a chain with an invalid transaction is itself not valid, so no rational miner「理性矿工」 would do it.

![1728142324261.png](https://pic.hanjiaming.com.cn/2024/10/05/5967378a5c54b.png)

::: note Main Principles

the system incentivizes「激励」them to do it

- It is computationally hard to extend the chain.
- Once a miner finds an extension (s) he broadcasts it to everybody.
- The users will always accept "the longest chain" as the valid one.

![1728142484981.png](https://pic.hanjiaming.com.cn/2024/10/05/76565171a8d6b.png)

![1728142510639.png](https://pic.hanjiaming.com.cn/2024/10/05/1e6c5d528cd93.png)

:::

## What if there is a “Fork”

::: tip 相关定义

区块链网络由多个节点组成，每个节点都保存着完整的区块链副本。节点可以是

- 矿工（负责验证交易和生成新区块）或
- 普通用户（负责发送和接收交易）

**孤块**: 是指未被包含在最长链条中的区块。孤块通常是由于分叉或网络延迟导致的。

**区块确认（Block Confirmation）**

- 区块确认是指一个区块被添加到区块链并被网络中的节点接受的过程。
- 通常情况下，区块链网络会等待多个区块确认以确保交易的最终性。

:::

**分叉是指区块链网络中出现多个有效链条的情况。**

- 分叉可以是临时的（如链条的短暂分裂）或永久的（如硬分叉和软分叉）。
- 硬分叉会导致协议的永久性改变，而软分叉则是向后兼容的协议更新。
  - 硬分叉是指区块链协议的永久性改变，导致旧版本节点无法与新版本节点兼容。
  - 硬分叉通常用于修复重大漏洞或添加新功能。
  - 软分叉是指向后兼容的协议更新，旧版本节点仍然可以与新版本节点兼容。
  - 软分叉通常用于改进协议或增加新功能。

“Fork”: a situation where a single blockchain diverges「分裂」 into two separate branches

The “**longest**” chain counts 「有效」. How long? A few slides later…

![1728142777919.png](https://pic.hanjiaming.com.cn/2024/10/05/fca3d3afbea06.png)

在较短的链条上工作有意义吗？**No!**

- 因为其他人都在努力延长最长的链条。
- 回想一下：我们假设大多数人都遵循协议。

![1728143298193.png](https://pic.hanjiaming.com.cn/2024/10/05/e65ce75a7c0ff.png)

Consequences

- The system should quickly self-stabilize.
- **If there is a fork, then one branch will quickly die.**
  - 如果区块链系统中出现分叉，一个分支会迅速失去竞争力而被淘汰。
  - 通常，这个过程是通过矿工的选择来实现的，矿工会选择最长的链或累积工作量最大的链来继续挖矿。
- This is later known as “Nakamoto consensus.”

what if your transaction ends up in a “dead branch”? to be sure that it doesn’t happen wait 6 blocks.

- 死分支”指的是那些在分叉竞争中失败的分支，这些分支上的交易可能不会被主链承认。
- 建议：为了确保你的交易不会落在“死分支”上，建议等待6个区块的确认。
- 比特币系统中，通常需要等待6个区块（大约1小时）来确保交易的最终性，因为在这段时间内，分叉的可能性会大大降低。

::: tip 中本聪共识（Nakamoto Consensus）

这是比特币中使用的共识机制，通过工作量证明（PoW，Proof of Work）来确保区块链的安全和一致性。

中本聪共识的一个重要特性是它能够自我稳定，即使出现分叉，最终也会有一个分支占据主导地位。

:::

![1728145440365.png](https://pic.hanjiaming.com.cn/2024/10/06/2f29ee2c6d7d3.png)

To reverse transactions, an adversary has to create a “fork in the past.”

- “分叉”是指区块链从某个区块开始分成两条或多条链
- 攻击者需要重新挖掘一个新的链条来覆盖原来的链条。

如果攻击者只有少量的计算能力，这看起来非常困难（诚实的矿工将始终领先于他）。

- 因为大多数矿工都是诚实的，他们共同的计算能力远远超过攻击者，使得攻击者无法赶上主链。
- 这提供了安全性，但也是去中心化的一个“缺点”。
- 去中心化使得攻击变得困难，但也意味着需要大量的计算资源来维持网络的安全。

假设当前主链有1000个区块，攻击者选择第900个区块作为分叉点。攻击者需要重新挖掘100个区块，并且在其他矿工挖掘新块的同时，攻击者需要保持领先。这需要巨大的计算能力和时间，因此在实际中非常困难。

除了工作量证明，还有其他共识机制，如权益证明（Proof of Stake）、授权股权证明（Delegated Proof of Stake）等。这些机制在不同的区块链网络中有不同的应用。

## Problems with Bitcoin’s PoW

![1728145837886.png](https://pic.hanjiaming.com.cn/2024/10/06/a9ff727ad7084.png)

Drawbacks of Hardware Mining

- Makes the whole process “non-democratic.”
- Easier to attack by very powerful adversary?
- Excludes some applications (mining as “micropayment’’).
- Is it the price we must pay for security against sybils/botnets?

假设Alice和Bob都参与了一个基于PoS的区块链网络。Alice持有100个单位的加密货币，而Bob持有50个单位。现在需要验证一笔交易并生成一个新块。

在PoS机制下，Alice和Bob的挖矿权利与他们持有的加密货币数量成正比。Alice持有更多的货币，因此她有更高的概率获得验证交易的权利。

1. 计算Alice和Bob的总持币量：100 + 50 = 150。
2. 计算Alice和Bob的挖矿概率：
   - Alice的概率 = 100 / 150 = 2/3。
   - Bob的概率 = 50 / 150 = 1/3。
3. 系统随机选择一个矿工进行验证，Alice有2/3的概率被选择，Bob有1/3的概率被选择。
4. 选择的矿工验证交易并生成新块，获得相应的奖励。

假设系统选择了Alice进行验证，Alice成功验证交易并生成新块，获得奖励。Alice的持币量增加，下一次她的挖矿概率也会增加。

## Alternatives to PoW

Virtual Mining idea

- stop investing in new equipment for mining
- allocate power according the BTC$ miner holds
- now votes to agree on a new block ∝ BTC holds

::: info 虚拟挖矿

- 虚拟挖矿是一种替代传统挖矿的新概念，旨在减少对物理设备和电力的依赖。通过分配虚拟资源来进行挖矿。
- **虚拟挖矿的核心思想是分配计算能力或投票权，**而不是依赖于物理挖矿设备。

权益证明（PoS）：

- PoS是一种替代PoW的共识机制，矿工的挖矿权利与其持有的加密货币数量成正比。持币越多，获得验证交易和添加新块的机会越大。
- PoS的优势在于减少了能源消耗，因为它不需要大量的计算资源。

其他替代共识机制：

- 除了PoS，还有其他替代共识机制，如空间证明（PoSpace）和知识证明（PoK）。这些机制都有各自的特点和应用场景。

:::



![1728146015581.png](https://pic.hanjiaming.com.cn/2024/10/06/d3b8f99f4eaf1.png)

![1728146066560.png](https://pic.hanjiaming.com.cn/2024/10/06/6d4e46901b3a4.png)

:::  details 共识机制 Proof of X

"Proof of X" 是一种术语，用于描述区块链和加密货币领域中的各种共识机制。不同的共识机制通过不同的方法来验证和确认交易，从而确保区块链的安全性和完整性。常见的“Proof of X”包括：

- **Proof of Work (PoW)**：工作量证明。通过解决复杂的数学问题来验证交易，典型代表是比特币。
- **Proof of Stake (PoS)**：权益证明。通过持有和锁定一定数量的加密货币来获得验证交易的权利，典型代表是以太坊2.0。
- **Proof of Authority (PoA)**：权威证明。通过一组预先批准的验证者来验证交易，通常用于私有或联盟区块链。**这种机制适用于私有区块链。**
- **Delegated Proof of Stake (DPoS)**：DPoS是PoS的一种变种，持币者可以投票选出代表进行区块验证。这种机制提高了区块链网络的效率和去中心化程度。
- **Proof of Burn (PoB)**：PoB是一种通过“烧毁”加密货币来获得挖矿权利的机制。矿工将一部分加密货币发送到一个不可访问的地址，以此证明其诚意。
- **Proof of Space (PoSpace) / Proof of Capacity (PoC)**：空间证明/容量证明。通过硬盘存储空间来验证交易，典型代表是Chia。
- **Proof of Elapsed Time (PoET)**：PoET是一种基于时间的共识机制，矿工需要等待随机分配的时间后才能生成新块。**这种机制主要用于英特尔的区块链平台。**
- **Proof of Importance (PoI)**：PoI是一种基于网络活动和持币量的共识机制，矿工的权利与其在网络中的活跃程度和持币量相关。NEM是使用PoI的代表性加密货币。

:::

::: info Impact of Bitcoin/Blockchain on Society

- Permissionless, everyone can access
  - Pseudonymity
- **Decentralization**, and no central authority for regulation
  - Fault Tolerance as multiple copies are stored and verified by parties
- Append-only/Immutable database
- Encouraging Illegal activities?
  - Hard requirement 「硬性要求」for financial transactions
  - ▪ Know-Your-Customer (KYC) and Anti-Money Laundering (AML)
- Bitcoin mining: environmental impact: Increased demand for GPUs for mining, is the (eco)system sustainable?

:::

## 其他定义

**侧链**：侧链是一种与主链并行运行的区块链，它们允许资产在主链和侧链之间转移，提供了更高的可扩展性和灵活性。

**分片技术**：分片技术是一种提高区块链网络可扩展性的方法。通过将数据分割成更小的部分（分片），并将这些分片分配给不同的节点进行处理，从而提高了网络的处理能力和效率。
