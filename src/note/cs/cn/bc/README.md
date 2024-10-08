---
article: true
date: 2024-10-05
index: true
order: 0
headerDepth: 1
category:
  - tech

---

# Blockchain

1. introduces the basic underlying cryptographic concepts of blockchain 
   as a powerful tool 
   to support distributed ledgers in all digital transactions 「在所有数字交易中支持分布式分类账。」.
2. The significances of trust, anonymity 「匿名」, and consensus mechanisms 「共识机制」 are discussed.
3. further explores the applications of blockchain and smart contracts in various practical applications, including
   - 金融服务、分布式系统和特定领域
   - 如智慧城市、医疗保健、物流和供应链等。

## Outcomes

- 基本的智能合约编程和一些安全编码问题。
- 区块链加密工具套件及其工作原理的详细信息。
- 了解区块链的一些最新进展。
- 判断应用程序是否适合区块链（并实施它）。
- 可以检查 ICO/DApp 白皮书是否有意义。

## What is Blockchain

-  **A chain of block?** actually, a good answer, from a data-structure point of view. 
- Distributed ledger technology (DLT) 「分布式账本技术」
  - but you heard of smart contract, Dapps? They aren’t “book”
-  or, abstractly, something providing **coordination** between many parties, when there is no single trusted party

**区块链是一种去中心化的数字账本技术，通过将数据分成块（block）并以链（chain）的形式连接起来。**

- **每个块包含了一些交易数据和一个时间戳，以及前一个块的加密哈希值**
- **区块链的去中心化特性使得它在金融、供应链等多个领域具有广泛的应用。**

## Trust

- 如果存在可信方「trusted party」 ⇒ 无需区块链
- Tribal trust「部落信仰」: from people who are related to each other, speak the same language, sharing custom, religion, etc.
- 机构信任：美国联邦储备局、香港金融管理局
  - 以及许多其他例子，其中一些（可以说）具有全球影响力
- Platform: where 2 or more entities interact

How to form decentralized/distributed trust？

Decentralization: No agreed-upon definition (varies across fields)

::: info Distributing Trust & Enforcing Neutrality

![1728107271865.png](https://pic.hanjiaming.com.cn/2024/10/05/263a7f93329cd.png)

Centralized Bank/Operator

- Single point of Failure
- Mutability / Forgery of Records 「记录的可变性/伪造」(当中央银行怀有恶意时）

De-Centralized Operators

- Resilience
- Access controlled
- Immutability「不可变性」
- Verifiability

:::

## Bitcoin

Innovation of OG (Original) App: Bitcoin

- enabled by a practical public append-only data structure (blockchain/DLT), 「由实用的公共附加数据结构（区块链/DLT）启用」
- secured by “replication” and “incentives” 「以“复制”和“激励”为保障」
  - 迄今未发现利用任何设计缺陷「design flaw」进行的攻击
- 加密货币作为 "交换媒介"，又称 "电子现金"
- store of value -> a fixed supply asset (BTC)

::: note An Ideal Electronic-Cash System

<img src="https://pic.hanjiaming.com.cn/2024/10/05/04a4bccfcb158.png" alt="1728106183938.png" style="zoom:33%;" />

:::

## Byzantine Generals Problem

### 分布式系统

**分布式系统**：分布式系统是由多个独立计算机组成的系统，这些计算机通过网络进行通信和协作，以完成共同的任务。

在分布式系统中，节点是指参与系统的独立计算机或设备。节点可以是诚实的、故障的或恶意的。

- **Function = a “centralized” system**
  - 在分布式系统中，节点可以是诚实的（按预期行为）、故障的（无法正常工作）或恶意的（故意破坏系统）。
  - 然而，在分布式系统中，没有这样的中央节点，所有节点需要通过某种机制来达成一致。
- But nodes can be honest/faulty「有缺陷的」/malicious「恶意的」
  - crash / drop messages / act arbitrarily「任意行为」
    - 节点可能会崩溃、丢弃消息或以任意方式行为。
    - 这些不确定性增加了达成共识的难度。
- Might not be pairwise-connected「可能不是成对连接的」这意味着某些节点之间可能无法直接通信。

::: tip

PKI是一种基于公钥和私钥的加密技术，用于确保通信的安全性和真实性。了解PKI的作用可以帮助我们理解为什么在没有PKI的情况下，某些问题变得“不可解决”。

:::

### 如何达成共识

拜占庭将军问题：如何达成共识「consensus」？这是一个经典的分布式计算问题，描述了在存在恶意节点的情况下，如何达成一致决策。

- 一名 "首领 "向所有其他将军/节点发出命令
- 目标是找到一种策略，确保所有诚实节点采取相同的行动。
- 在没有公钥基础设施（PKI）的情况下，如果恶意节点超过三分之一，达成共识是“不可能”的。
- 如果领导者节点是恶意「**malicious**」的，它可能向不同的节点发送不同的命令（例如，向节点A发送0，向节点B发送1），从而破坏共识。

Dolev-Strong Protocol solves “Broadcast” in f+1 round (f := #malicious) + PKI

- Dolev-Strong协议通过在f+1轮广播中解决了信息传递问题，其中f是恶意节点的数量。
- 这个协议依赖于PKI来确保消息的真实性。
- 然而，这个协议在大规模分布式网络中效率较低，因为需要进行多轮的消息传递。

可以把这个过程想象成一个班级里有一个同学（A）要传递一个重要信息给全班同学（B、C、D、E）。这个班级里有一个捣蛋鬼（恶意节点），他可能会试图传递错误的信息。但是，A 会先把信息传递给所有人，然后每个人再把他们收到的信息传递给其他人。由于大多数同学都是诚实的，他们会通过多数投票来决定最终的信息是什么。即使有一个捣蛋鬼，最终大家还是会收到正确的信息。

::: details Example

好的，我来用一个形象的例子解释 Dolev-Strong 协议是如何在 \( f+1 \) 轮内解决广播问题的。

假设我们有一个网络，其中有5个节点：A、B、C、D 和 E。其中，A 是发送者，B、C、D 和 E 是接收者。在这5个节点中，有最多 \( f \) 个节点是恶意的。为了简单起见，我们假设 \( f = 1 \)，即最多有一个恶意节点。

目标

广播问题的目标是：发送者 A 发送一个消息 \( m \) 给所有接收者，并且所有诚实的接收者最终都能一致地接收到相同的消息 \( m \)，即使存在恶意节点试图干扰。

协议流程

Dolev-Strong 协议通过 \( f+1 \) 轮（在这个例子中是 2 轮）来达成一致。每一轮中，节点会将自己接收到的消息广播给其他所有节点。具体流程如下：

初始状态

- A 想要广播消息 \( m \)。
- B、C、D 和 E 都初始化为不知道消息 \( m \)。

第 0 轮（发送者广播）

1. **A 发送消息 \( m \) 给 B、C、D 和 E**：
   - B 收到消息 \( m \)。
   - C 收到消息 \( m \)。
   - D 收到消息 \( m \)。
   - E 收到消息 \( m \)。

第 1 轮（接收者广播）

2. **B、C、D 和 E 将他们收到的消息广播给其他所有节点**：
   - B 将消息 \( m \) 发送给 A、C、D 和 E。
   - C 将消息 \( m \) 发送给 A、B、D 和 E。
   - D 将消息 \( m \) 发送给 A、B、C 和 E。
   - E 将消息 \( m \) 发送给 A、B、C 和 D。

节点状态变化

- **A**：已经知道消息 \( m \)，不变。
- **B**：如果 B 是诚实的，它会广播它收到的消息 \( m \)。如果 B 是恶意的，它可能广播一个假消息，但因为只有一个恶意节点，其他节点可以通过多数投票来检测。
- **C**：同样地，如果 C 是诚实的，它会广播它收到的消息 \( m \)。
- **D**：同样地，如果 D 是诚实的，它会广播它收到的消息 \( m \)。
- **E**：同样地，如果 E 是诚实的，它会广播它收到的消息 \( m \)。

最终状态

在第 2 轮结束后，每个诚实节点都会有一个消息集合。由于最多只有一个恶意节点，诚实节点会通过多数投票机制来决定最终的消息 \( m \)。

具体来说：
- 每个节点会统计它收到的消息。
- 如果某个消息 \( m \) 出现的次数超过 \( n-f \)（在这个例子中是 4 次），则该消息被认为是正确的消息。

由于恶意节点最多只有一个，诚实节点会收到足够多的正确消息 \( m \)，从而达成一致。

:::

通过这种方式，Dolev-Strong 协议在 \( f+1 \) 轮内解决了广播问题。

::: warning 我认为有 PKI 就可以保证消息的准确和不可篡改了，为什么还需要广播？

虽然公钥基础设施（PKI）可以保证消息的真实性和不可篡改性，但在分布式系统中，特别是在存在恶意节点的情况下，单靠 PKI 并不足以解决所有问题。

**消息的可达性和一致性**

PKI 可以确保消息的真实性和不可篡改性，但它不能保证消息能够被所有节点接收到。在分布式系统中，网络可能是不可靠的，消息可能会丢失或延迟。

因此，需要一个广播协议来确保所有诚实节点最终都能接收到相同的消息。

**防止恶意节点的干扰**

- **拒绝转发消息**：恶意节点可能会故意不转发消息，导致一些节点无法接收到消息。
- **发送伪造消息**：恶意节点可能会发送伪造的消息，试图混淆其他节点。
- **发送旧消息**：恶意节点可能会发送过期的消息，试图扰乱系统。

广播协议通过多轮消息交换和验证，确保即使有恶意节点存在，所有诚实节点最终都能达成一致。

**确保最终一致性**

- 在分布式系统中，最终一致性是一个重要的目标。
- 广播协议通过多轮通信，确保所有诚实节点在一定轮次后都能接收到相同的消息，并达成一致。
- 这对于系统的稳定性和可靠性至关重要。

![1728111454901.png](https://pic.hanjiaming.com.cn/2024/10/05/da7c0b6f667ec.png)

:::

## Data Structure/Ledger

Blockchain as Data Structure/Ledger 「分类帐」

区块链（Blockchain）是一种特殊的数据结构和分布式账本技术，它以一种链式结构将数据块（blocks）按照时间顺序连接起来。

- 每个区块包含多个交易（transactions），**这些交易记录了资产从一个发送者到一个接收者的转移。**
- 资产可以是任何东西，例如货币、合同、访问密钥等。

区块链的核心思想是通过去中心化和分布式的方式来确保数据的安全性和可信度

- 即使在点对点（P2P）网络中也能保持可信。
- 每个区块通过密码学技术（如哈希函数和数字签名）与前一个区块相连，形成一个不可篡改的链条。
- 这种结构使得区块链具有高度的安全性和透明性。

区块链不仅仅是一种数据结构，它也是一种分布式数据库。

- 传统数据库通常由一个中心化的实体管理，
- 而区块链通过分布式网络中的多个节点共同维护账本，从而避免了单点故障和中心化控制。

## Maintain a ledger distributively

::: info 相关概念

**共识协议（Consensus Protocol）**

- 共识协议是一种在分布式系统中实现一致性的机制。
- 它确保所有参与者（节点）对某个状态或交易达成一致。
- 在区块链中，常见的共识协议包括工作量证明（Proof of Work, PoW）、权益证明（Proof of Stake, PoS）等。

**工作量证明（Proof of Work, PoW）**

- 工作量证明是一种共识机制，通过要求节点解决复杂的计算难题来验证交易。
- 解决难题的过程称为“挖矿”，成功解决问题的节点可以将新的区块添加到区块链中，并获得奖励。
- 比特币采用的就是PoW机制。

**Sybil 攻击**

- Sybil攻击是一种在分布式系统中通过创建多个虚假身份来破坏系统的攻击方式。
- 在区块链网络中，攻击者通过控制大量虚假节点来影响共识过程，从而可能导致双重支付等问题。

:::

- via Consensus Protocol (enabled by “proof of work” in bitcoin)
  - Operators (miners in bitcoin) “agree” on the blockchain state.
    - 操作员（在比特币中称为矿工）“同意”区块链的状态。
    - 矿工是运行区块链网络节点并参与交易验证和区块生成的个体或实体。
    - 他们通过解决计算难题来验证交易，并在达成共识后更新区块链。
  - Periodically select valid transactions to append to ledger
    - 定期选择有效的交易添加到账本中。
    - 矿工会在一定时间间隔内（例如比特币的10分钟）收集网络中的交易，验证其有效性，并将其打包成一个新的区块添加到区块链中。
  - Admission control: Who can join as operators?
    - 在区块链网络中，准入控制决定了哪些节点可以参与到交易验证和区块生成中。
    - 在比特币网络中，任何人都可以成为矿工，只要他们具备足够的计算能力和资源。
  - Access control: Who can write?
    - 访问控制决定了哪些节点有权将新的交易或区块写入区块链。
    - 在比特币中，只有成功解决PoW难题的矿工才能将新的区块添加到区块链中。
  - How they agree upon who can append to the ledger?
    - 矿工通过解决PoW难题来竞争添加新的区块。
    - 第一个成功解决问题的矿工将区块添加到区块链中，并获得奖励。
    - 这一过程确保了区块链的安全性和一致性。
- Complexity of this problem in the bitcoin context:
  - Peer-to-peer (P2P) setting: nodes can go offline anytime
  - Sybil (“fake” identities) exist, and they are malicious
  - In the Internet scale (many one can help, many bad guys too)

## CAP and PACELC Theorem

CAP 定理是由计算机科学家 Eric Brewer 提出的，指出

>  在一个分布式系统中，不可能同时满足**一致性（Consistency）、可用性（Availability）和分区**容忍性（Partition Tolerance）这三个特性。**只能选择其中的两个。**
>
> 在网络分区（Partition Tolerance）发生时，一个分布式系统无法同时保证一致性和可用性。

例如，**在网络分区的情况下，系统必须在一致性和可用性之间做出权衡。**

<img src="https://pic.hanjiaming.com.cn/2024/10/05/6eb4b8cadc15b.png" alt="1728117452677.png" style="zoom:50%;" />

- 一致性（Consistency）：所有节点在同一时间看到相同的数据。
  - 一致性指的是在分布式系统中的所有节点在同一时间看到的数据是相同的。
  - 即，当一个节点更新数据后，所有其他节点立即看到这个更新
  - 这是一个强一致性的概念。
- 可用性（Availability）：每个请求都能收到一个（成功或失败的）响应。
  - 可用性指的是系统在任何时候都能够响应用户的请求，即使部分节点出现故障。
  - 系统必须确保即使在某些节点不可用的情况下，仍能提供服务。
- 分区容忍性（Partition Tolerance）：系统能够在任意网络分区的情况下继续运行。
  - **网络分区指的是由于网络故障，分布式系统的节点被分成了多个互相无法通信的部分。**
  - 分区容忍性要求系统能够在网络分区的情况下继续运行，**即使这意味着可能需要在一致性和可用性之间做出选择。**

::: tip 区别: 可用性 和 分区容忍性

1. **关注点不同**：
   - **可用性**：关注系统在任何情况下都能响应请求的能力。
   - **分区容忍性**：关注系统在网络分区（通信中断或延迟）的情况下仍能继续运行。
2. **实现方式不同**：
   - **可用性**：通过冗余、故障转移、负载均衡等手段来实现。
   - **分区容忍性**：通过设计系统在网络分区情况下仍能继续运行（可能会影响一致性或可用性）。
3. **CAP 定理中的角色**：
   - **可用性**：在 CAP 定理中，可用性是指系统能够在任意时间点响应请求。
   - **分区容忍性**：在 CAP 定理中，分区容忍性是指系统能够在网络分区的情况下继续运行。
4. 关键词
   - **可用性**：负载均衡，本地冗余
   - **分区容忍性**：区块链，分布式系统

:::

## Why Blockchains solution

为什么选择区块链解决方案？

- 区块链是一种分布式账本技术，它通过去中心化和加密技术来确保数据的安全性和透明性。
- 区块链特别适用于需要高可靠性和防篡改的数据存储和传输场景。

For distributed systems, in case of partition:

- 当网络分区发生时，系统的节点被分割成无法互相通信的部分，
- 这时系统需要在一致性和可用性之间做出选择：我们可以选择一致性或可用性。
- 要么等待其他分区更新，要么提供本地副本。
  - 选择一致性的话，系统需要等待所有分区的数据更新完成；
  - 选择可用性的话，系统可以立即提供本地副本的数据。

::: info 案例分析

假设一个分布式银行账户系统，用户可以在多个分支机构进行存取款操作。**当网络分区发生时，不同分支机构之间无法通信。**

- <u>**选择一致性**：系统会等待所有分支机构的数据同步完成后再处理请求。</u>
  - 例如，如果用户在A分行存款，系统会等待该操作在B分行也被确认后才更新用户的账户余额。
  - 这可能导致用户在网络分区期间无法进行存取款操作，但可以确保所有分支机构的账户余额是一致的。
- **选择可用性**：系统会立即在本地分支机构处理用户的存取款请求。
  - 例如，如果用户在A分行存款，A分行会立即更新用户的账户余额，而不等待B分行的确认。
  - 这可以确保用户在网络分区期间仍然能够进行存取款操作，但可能导致A分行和B分行的账户余额不一致。

假设一个分布式社交媒体平台，用户可以在不同服务器上发布和查看帖子。当网络分区发生时，不同服务器之间无法通信。

- **选择一致性**：系统会等待所有服务器的数据同步完成后再显示帖子。
  - 例如，如果用户在服务器A上发布帖子，系统会等待该帖子在服务器B上也被确认后才显示给其他用户。
  - 这可能导致用户在网络分区期间无法看到最新的帖子，但可以确保所有用户看到的帖子是一致的。
- <u>**选择可用性**：系统会立即在本地服务器上显示用户发布的帖子，而不等待其他服务器的确认。</u>
  - 这可以确保用户在网络分区期间仍然能够看到和发布帖子，但可能导致不同服务器上的用户看到的帖子不一致。

:::

## Blockchain Features

### Probabilistic Consensus

概率共识是一种共识机制，它通过概率方式达成节点之间的一致意见。

- 不同于绝对共识，概率共识允许在某些情况下节点之间存在短暂的不一致
- 但随着时间的推移，这种不一致的概率会逐渐降低，最终趋近于零。

在某些时刻，一些节点可能会对账本中存储的信息有“不同步”的视图。

- 由于网络延迟或节点故障，分布式系统中的各个节点可能不会立即对某些交易达成一致，这种情况在概率共识机制中尤为常见。

### with fully-replicated state

完全复制状态意味着系统中的每个节点都保存着整个账本的完整副本。这确保了即使某些节点失效，系统仍然能够通过其他节点恢复数据。

- provides “resilience”
  - 指的是系统具有很强的抗攻击性和容错性
  - 即使部分节点失效或受到攻击，系统仍然能够继续运行并保持数据的一致性和完整性。

::: tip

一位分布式计算研究人员可能会告诉你，区块链并不是“分布式”的，因为完全复制所有数据在某种程度上是低效、stupid 的。

在传统的分布式系统中，数据通常是分片存储的，而不是每个节点都保存全部数据。

:::

### via cryptographic techniques

unforgeable signature certifying “immutable” payments

- 不可伪造的签名认证“不可变”的支付。
- 区块链使用数字签名来验证交易的合法性，一旦交易被记录在区块链上，就无法被篡改。

### and economics incentive

need to “pay” to join, defend against sybil (“admission control”)

- 需要“支付”才能加入，防御女巫攻击（“准入控制”）。
- 为了防止恶意节点的加入，**区块链系统通常要求新节点支付一定的费用（如矿工费）**
- 这有助于防御女巫攻击（即通过大量创建虚假身份来攻击网络）。

“reward” those who helps maintaining/verifying the ledger

- “奖励”那些帮助维护/验证账本的人。
- 区块链系统通过提供经济奖励（如比特币）来鼓励矿工和节点参与账本的维护和验证。

::: info An interdisciplinary subject

- How to reach consensus among the operators「如何在运营商之间达成共识？」?
- Distributed computing
- (that can be considered as what bitcoin avoided)
- turns out「事实证明」 we still need it for a “faster” blockchain「事实证明我们仍然需要它来实现“更快”的区块链」
- How to enforce “admission control” (not to admit sybils)?
- How to ensure verifiability「可验证性」 (while ensuring privacy)
- Cryptography
- How to incentivize「激励」 the operators and demotivate「抑制」 attacks?
- Economy

:::

## FAQ

- 问：如何确保不变性和“适当”的访问控制？
- A：通过验证（问：由谁验证？A：每个人）
- 问：当每个人都可以验证一切时，这有什么不好？
  - A：隐私丧失（问：有什么解决方案吗？A：隐私 - 增强技术。）
  - 但是，隐私权是基本人权，维护着我们的尊严。
  - 这不是黑白分明的——“负责任的隐私”的概念是存在的。
  - Regulation technology “RegTech” *e.g.*, Anti money laundering (AML)
- 问：如果记录不可变，如何删除它？
- A:  （孩子！）色情、私人（被盗）信息
- 问：“可编辑”区块链
- A:（问：谁可以编辑？答：“许可”环境中的“受托人”）

## Application

### Digital currency

数字货币作为第一个应用

- Current largest: Bitcoin (2009), Ethereum (2015)
- 全球：任何有互联网连接的人都可以访问

### Smart-Contract

- If we can ask an “operator” to help in verifying others’ transactions, can we ask for more, *e.g.*, executing some code?
- 这就引出了智能合约的概念（但它有多 "智能 "呢？）
- 区块链计算机：完全可编程的环境 ⟹ 管理数字资产和金融资产的公共程序
- 可组合性「Composability」：在链上运行的应用程序可相互调用

### Decentralized Applications (DApps)

- DeFi: financial instruments managed by public programs
  - stablecoins「稳定币」, lending「贷款」, exchanges , etc.
- Asset management or non-fungible tokens (NFTs)
  - 如艺术品、游戏资产、域名等。
- ▪ 去中心化组织 (DA Os) 或去中心化治理
  - e.g., investment, for donations, for collecting art, etc.

### Further Applications

- 最有名的去中心化应用程序可能还是 Cryptokitties？
- ▪ If those operators are “random” peers over the whole Internet, can we enable new collaborative / decentralized apps?
  - Crowdsourcing (众包) / Sharing economy app (*e.g.*, Uber)
- If we can securely transfer even money in such a P2P setting, can we enable new “secure” decentralized application?
  - Gambling / Voting / “Secure multi-party computation”「安全多方计算」
  - Cryptographic tech. needed to ensure the security of the app.
- Secure coding needed to ensure the implementation is secure

![1728124433771.png](https://pic.hanjiaming.com.cn/2024/10/05/20bcd61a5a65b.png)

![1728124456862.png](https://pic.hanjiaming.com.cn/2024/10/05/968eba7e42daf.png)
