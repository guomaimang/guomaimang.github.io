---
article: false
date: 2024-10-05
index: true
order: 2
headerDepth: 1
---

# Introduction

## Types of Money

- Token money「代币资金」
  - represented by a physical article (e.g., cash)
  - can be lost
- Notational money「记名货币」
  - a kind of scriptural money「经文货币」, can be electronic
  - e.g., bank accounts, frequent flyer miles
- Hybrid money
  - *e.g.*, check, telephone card

|                       | **Token** 代币                                               | **Notational** 记名票                                        | **Hybrid**                                                   |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Fiduciary (信托货币)  | **Cash**: 现金<br />**Govt. Bearer Bond**：政府持票人债券是一种无记名债券，持有人可以随时兑现其面值。 | **Account with a Central Bank**：中央银行账户是指商业银行在中央银行开设的账户，用于存放准备金和进行清算。 | **Government Check**：政府支票是一种由政府机构签发的支票，用于支付政府开支或退税等。 |
| Scriptural (记账货币) | **Certified Check**：保付支票是一种由银行认证的支票，确保支票金额已被冻结，确保收款人能够收到款项。<br />**Traveler Check**：旅行支票是一种预付的支票，通常用于旅行时代替现金使用。 | **Bank Account**：银行账户是一种由银行为客户提供的账户，用于存储和管理资金。<br />**Frequent-Flyer Miles**：常旅客里程是一种航空公司为鼓励乘客频繁乘坐其航班而提供的奖励积分。 | **Personal Check**：个人支票是由个人签发的支票，用于支付日常开支。 <br />**Gift Certificate**：礼品券是一种预付的礼券，可以在指定商店或网站上兑换商品或服务。 |

- Money order「汇票」: only the named person can claim money
- Traveler’s check: spendable by only one spender

::: tip Desirable/Ideal Properties of Money

- Universal acceptance
- Transferability, portability
- Safety (unforgeable, unstealable)「安全性（不可伪造、不可窃取）」
- Privacy (no one except parties「当事人」 know the amount)
- Anonymity「匿名性」 (no one can identify the payor「付款人」)
- Work off-line (no need for on-line verification)「离线工作（无需在线验证）」
- Divisible into change (pay for $10 item with $100 bill)「可分割为零钱（用 100 美元的钞票购买 10 美元的商品）」
- Arbitrary denominations (consider $689.14)「任意面额（考虑 689.14 美元）」

:::

## The Bitcoin Revolution

- 去中心化 点对点支付系统
- 作为货币使用：有价值单位
- 可以兑换成 "真钱"。

## Digital Signatures

Started from a probabilistic 「概率性的」algorithm “KeyGen” that generates a key-pair:

- A pair of public key and private key
- 它们必须一起生成并且它们是“相关的”
- 要签名，请使用私有（签名）密钥 sk
- 要进行验证，请使用公共（验证）密钥 pk

<img src="https://pic.hanjiaming.com.cn/2024/10/05/7a3c61b2686ad.png" alt="1728129988494.png" style="zoom:50%;" />

## E-Cash Issuance

### Centralized Solution 

- An e-coin is a digital signature issued by a central bank. 「电子币是由中央银行发行的数字签名。」
  - 电子硬币现在由一堆字节表示。
- The merchant「商家」 verifies a coin w.r.t. the cert. of the bank
- 每个人都可以复制这些字节，并将其用于其他地方。
- Each needs a (signed) serial number # like paper money
  - This will be useful for double-spending detection.
- But the merchants are not connected to each other.
  - They need confirmation (with bank) that it hasn’t been spent
  - Connectivity issue for the merchant, privacy issue for the payer
- Privacy issue: The bank can link the coin # with the withdrawal and spending!

### E-Cash Solutions

::: tip Blind Signatures

盲签名（Blind Signatures）是一种密码学协议，允许一方在不知道消息内容的情况下对其进行签名。该技术由David Chaum在1983年提出，主要用于保护用户隐私。

:::

The notion of Blind Signatures

- Bank can sign on serial number sn without knowing it
- User pick sn, blinds it sn’ = C(sn)
  - 用户选择一个序列号（sn），然后通过某种加密函数（C）将其进行“盲化”处理，得到盲化后的序列号（sn’）。
  - 这个过程确保了银行无法知道原始的序列号。
- Bank signs on sn’, user unblind the signature to get sig(sn)
  - 银行对盲化后的序列号（sn’）进行签名
  - 用户接收到签名后，通过**反盲化过程**将其还原为对原始序列号（sn）的签名（sig(sn)）。

**How about spending?**

- 接收方需要与银行核对序列号（sn）是否已经被使用过，以防止重复使用。
- “Real system” is more complex [e.g., Compact E-Cash「紧凑型电子现金」]
- 因此，这种系统无法完全实现类似现金的隐私保护，因为每次交易都需要与银行进行核对。

**Double spending?**

- the payee「收款人」 must deposit with a bank「收款人必须将收到的电子现金存入银行。」
- the bank holds the list of spent coins (consensus needed if 2+ banks 「如果有 2 家以上银行，则需要达成共识」)
- [目标] 追踪并抓住双重花费者。
- zero-knowledge proofs to encrypt ID when spending

::: tip Zero-knowledge proof

零知识证明是一种密码学技术，

- 允许一方（证明者）向另一方（验证者）证明某个陈述为真，
- 而无需透露任何其他信息。

它确保了信息的隐私和安全。

假设你想证明你知道某个秘密密码，但不想透露密码本身。通过零知识证明，你可以向对方证明你确实知道密码，而不揭示密码的任何细节。

:::

## The Bitcoin case

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

### UTXO

UTXO是比特币交易模型的核心概念之一，它代表了用户在区块链上可用的数字货币余额。

- 在比特币网络中，每一笔交易的输出（即交易的结果）都可以成为后续交易的输入。
- 未被使用的交易输出（即UTXO）代表了用户可以花费的比特币余额。
- 每个UTXO都由一个特定的交易ID和输出索引来唯一标识。

### Transactions

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

```
Inputs:
- tx1:0 (1 BTC)
- tx2:1 (2 BTC)
- tx3:0 (0.5 BTC)

Outputs:
- 1AliceNewAddress: 3.4999 BTC
```

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



