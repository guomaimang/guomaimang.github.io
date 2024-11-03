---
article: false
date: 2024-10-10
index: true
order: 6
headerDepth: 1


---

# Smart Contracts

## Definition

A smart contract is a **computer program** executed in a **secure environment** that **directly controls** on **digital assets**.

这句话强调了智能合约的三个核心要素：计算机程序、安全环境和 数字资产。

### Computer Program

Example: bet on an event. 这段代码展示了一个简单的智能合约逻辑：

```
// 如果事件X发生了（条件为真）
if HAS_EVENT_X_HAPPENED() is true:
		// 则向A方发送1000单位的数字资产，
		send(party_A, 1000)
else:
		// 向B方发送1000单位的数字资产。
		send(party_B, 1000)
```

### Secure Environment

Properties of Secure Environments

- Correctness of execution: The execution is done correctly, is not tampered
-  Integrity of code and data
- Optional properties
  - Confidentiality of code and data: 确保代码和数据在执行过程中不被未授权的第三方访问
  - Verifiability of execution「执行的可验证性」: 能够验证程序是否按照预期正确执行。
  - Availability for the programs running inside： 确保程序在需要时可以正常运行，不会因为外部因素而中断。

::: tip Examples of Secure Environments

- Servers run by trusted parties
- Decentralized computer network
  - 去中心化网络通过分散控制来提高系统的安全性和容错性。
  - *e.g.*, blockchains
- Quasi-decentralized computer network「准去中心化计算机网络」
  - 这种网络结构介于完全去中心化和完全中心化之间，通常由多个实体共同管理和维护。
  - 这样的网络在提高安全性的同时，仍保持一定程度的集中控制。
  - *e.g.*, consortium blockchains「联盟链」
- Servers secured by trusted hardware
  - *e.g.*, Intel SGX

:::

### Directly Controls

<img src="https://pic.hanjiaming.com.cn/2024/10/10/852561a3b6ca9.png" alt="1728571136318.png" style="zoom: 33%;" />

### Digital Assets

Example of Digital Assets

- Domain name
- Website
- Money
- Anything tokenizable (*e.g.*, gold, silver, stock share, *etc*.)
- Game items
- Network bandwidth
- Computation cycles
- A broad category

## How “smart” is it?

- Automated processing

  - facilitate「促进」, verify, or enforce the execution of a contract
  - 在智能合约中，自动化处理用于执行、验证或强制执行合约条款。

- Trust reduction (Enforceable)

  - 信任减少（可执行性）是指智能合约不依赖于大量的合约执行机制

  - not depending on a very large number of contract enforcement mechanisms, but the secure environments:

    「智能合约不依赖于大量的合约执行机制，而是依赖于安全的环境（如区块链）来确保合约的执行。」

- Trackable and irreversible「可追踪且不可逆转」

- Unambiguous, terms clearly expressed in code「明确无误，用代码清楚表述」：无歧义

  - Deterministic

::: info Smart contracts vs. Legal contracts

智能合约更像是一台自动售货机「vending machine」。这意味着智能合约在预设的条件得到满足时，会自动执行，无需人为干预。

就像在自动售货机中投币后，机器自动分发商品一样，智能合约在条件满足时会自动执行条款。

智能合约遵循预先设定的规则「predetermined rules」。这些规则在合约创建时就已经定义，并通过代码固化在合约中。一旦合约部署在区块链上，这些规则就无法更改，确保了合约的执行是自动且透明的。

| Legal contracts                                             | Smart contracts                                           |
| ----------------------------------------------------------- | --------------------------------------------------------- |
| Good at subjective claims (i.e., requiring human judgement) | Good at objective claims (i.e., mathematically evaluable) |
| High cost                                                   | Low cost                                                  |
| May require long legal process                              | Fast and automated                                        |
| Relies on penalties                                         | Relies on collateral/security deposits                    |
| Jurisdiction-bound ("by law")                               | Potentially international                                 |

智能合约依赖于抵押品/保证金来确保履行。这意味着在合约执行前，双方需要提供一定的抵押品，以确保合约的执行。

Smart contracts are not very effective for loans

- 如果借款人有足够的资本「capital」提供流动性抵押品「liquid collatera」，那么他们一开始就不需要贷款。
- 流动性抵押品是指那些可以快速变现的资产，如现金或股票。
- 智能合约可以使用非流动性抵押品「illiquid collateral 」（如域名）。
- 非流动性抵押品是那些不能迅速变现的资产，需要更多时间和努力才能转换为现金。

Legal contracts are not very effective when stake「利益」 is small

例如，在反垃圾邮件方面，垃圾邮件发送者「spammers」可以将自己定位在有利的司法管辖区，从而逃避检测。这意味着他们可以选择那些法律执行较为宽松的地区，从而避免法律合约的约束。

:::

## Smart Contract based Apps

- Escrow Service「托管服务」
  - 托管服务是一种第三方服务，帮助买卖双方在交易过程中确保所有条件都得到满足。
  - 第三方（托管代理）在交易完成之前保管交易物品或资金，确保双方都履行了各自的义务。
- Dispute「争议」
  - 争议是指在交易过程中，一方或双方对交易的某些方面存在不同意见或不满意。
  - 争议可能导致交易失败或需要第三方介入解决。
- Trust Mechanism「信任机制」
  - 在没有信任基础的交易中，信任机制（如托管服务）是确保交易顺利进行的重要手段。
  - 信任机制通过引入第三方来降低交易风险，确保双方遵守约定。

两个人，A和B，正在交换各自的对象X和Y。在正常情况下，A和B通过托管服务顺利交换对象。在争议情况下，B不愿意交出对象Y。

情况一：

- A将对象X交给E：解释：A将对象X交给托管代理E。
- E将对象Y交给A：解释：托管代理E确认收到对象X后，将对象Y交给A。
- E将对象X交给B：解释：托管代理E确认A收到对象Y后，将对象X交给B。

情况二：

- A将对象X交给E：解释：A将对象X交给托管代理E。
- B拒绝交出对象Y：解释：B在争议情况下不愿意交出对象Y，导致交易失败。

## Multisignature

要求 N 个“所有者”中的 M 个同意转让特定数字资产

多重签名（Multisignature）要求N个所有者中的M个同意才能转移特定的数字资产。

这意味着只有在满足一定数量的签名者同意的情况下，交易才能进行。这种机制提高了交易的安全性和信任度。

- Intra-organizational use cases
- Buyer-seller with mediator (2-out-of-3), brief overview
  「买卖双方与中介（2-out-of-3）的多重签名方案概述。」
  - 在这种方案中，买家、卖家和中介各持有一个密钥，任何两方的同意都可以完成交易。
  - 买家将资金发送到一个包含2-out-of-3多重签名脚本的“脚本”地址。
  - 这意味着只有在三方中的任意两方同意的情况下，资金才能被转移。
  - 如果交易过程中没有问题，买家和卖家将签名同意将资金转移给卖家。
  - 如果交易过程中出现争议，买家或卖家可以将资金退还给买家。这种机制提供了额外的安全保障。
  - 在争议无法解决的情况下，中介可以介入并签名，将资金转移给应得的一方。中介的存在确保了交易的公平性和公正性。

公司A希望确保只有在三个高管中的至少两人同意的情况下才能转移公司的资金，以防止单人操作造成的风险。

如果只有一个高管可以单独操作公司的资金，存在高风险的可能性，例如高管个人失误或欺诈行为。因此，需要一种机制来确保资金转移需要多个高管的同意。

多重签名可以实现这一目标。通过设置一个 2-out-of-3 的多重签名方案，只有在三个高管中的至少两人同意的情况下，资金才能被转移。

A lot of interesting applications

- Complex policies depending on amount, withdrawal limit, etc.
- “Dead man’s switch” or “Digital will”
  - 这是一种自动触发的机制，通常用于在某人去世后执行特定操作。
  - 例如，“数字遗嘱”可以在所有者去世后自动将资产转移给指定的人。
  - but how to make it interact with the real-world? oracles!
  - 预言机「oracles」可以提供外部数据，如死亡证明，以触发智能合约。

Insurance

- 保险业可以利用智能合约自动处理理赔，减少人工干预，提高效率。
- 微支付可以用于支付计算服务「Micro-payments for computational services」，如文件存储、带宽和计算等。用户可以按需支付，只为实际使用的资源付费。

::: tip Lightning Network

闪电网络是一种基于区块链的二层协议，旨在提高交易速度和降低交易费用。

它通过建立支付通道来实现即时交易。多重签名在闪电网络中也有广泛应用，用于确保支付通道的安全性和有效性。

:::

## Decentralized Exchange

**Blockchain → Decentralization → Democracy?**

- Democratizing access to financial services
  - 去中心化交易所通过消除中介机构
  - 使得更多的人能够直接参与金融交易，从而实现金融服务的民主化
  - 这意味着更多的人可以平等地获取金融服务，而不受传统金融机构的限制。
- How do you buy foreign currencies「外币」 now?
  - 大多数人购买外币需要通过银行或外汇经纪商
  - 这些中介机构通常会收取一定的手续费，并且交易过程可能比较繁琐。
- How “Sharing Economy Applications” (SEA) works?
  - 共享经济应用通过互联网平台让用户共享资源。
  -  Airbnb, Uber, etc.
- Decentralized exchange is like those “SEA”
  - 去中心化交易所类似于共享经济应用，用户可以直接进行交易，而不需要通过中介机构。
  - 去中心化交易所提供一个平台，让用户可以直接交换数字货币或其他资产。
- except there is no centralized server running the service
  - 与传统的共享经济应用不同，去中心化交易所没有一个中央服务器来运行服务。
  - 相反，它使用区块链技术，通过分布式网络来管理和记录交易。
- but blockchain (or a Decentralized Autonomous Organization)
  - 去中心化交易所通常由区块链技术或去中心化自治组织（Decentralized Autonomous Organization, DAO）来运行和管理。
  - DAO是一种使用智能合约来自动执行规则和决策的组织，没有传统的管理层。

## Ethereum

Ethereum: the first blockchain-based smart contract platform

**Blockchain with an expressive programming language**

- 以太坊是一个区块链平台，它具有一种表达能力强的编程语言。
  - 以太坊是一个区块链平台，它具有一种表达能力强的编程语言。
  - 这种编程语言使得开发人员可以编写复杂的逻辑和规则，从而创建更强大和灵活的应用程序。
- a language making it ideal for smart contracts
  - 这种编程语言非常适合编写智能合约。
  - 智能合约是一种可以在区块链上自动执行的协议，它的条款和条件直接写入代码中，从而确保了合约的自动化执行和验证。
- Smart contracts enable much more applications
  - 智能合约不仅可以用于简单的交易，还可以用于更复杂的应用场景，如去中心化金融（DeFi）、供应链管理、数字身份验证等。这使得以太坊平台具有广泛的应用前景。
- Most public blockchains are cryptocurrencies
- motivation before '16
- Can only transfer coins between users

## Bitcoin

### Bitcoin Scripting Language

比特币脚本语言受到Forth编程语言的启发。

- Forth是一种堆栈式编程语言，广泛应用于嵌入式系统和实时计算中。
- 它具有简单、灵活和高效的特点，这些特性也体现在比特币脚本语言中。

#### Stack-based

- 比特币脚本语言是基于栈的。
- 这意味着所有操作都是通过栈进行的，数据被压入堆栈（push），然后通过操作符进行处理，最后结果从堆栈中弹出（pop）。

#### Simple, compact

- 比特币脚本语言设计得非常简单和紧凑。
- 它包含一组有限的操作码（opcodes），每个操作码执行一个特定的操作。
- 这种简洁性有助于提高脚本的执行效率和安全性。

#### Limits on time/memory-usage

- 比特币脚本语言对时间和内存使用有严格的限制。
- 这是为了防止脚本执行时间过长或消耗过多资源，确保整个比特币网络的稳定和安全。

#### No looping (not a "Turing-complete" language)

- 比特币脚本语言不支持循环，因此它不是图灵完备的。
- 图灵完备的语言可以执行任何计算，但也可能陷入无限循环。
- 为了避免这种风险，比特币脚本语言限制了其计算能力，但仍然足够处理大多数交易验证任务。

::: details Example

假设Alice想要发送比特币给Bob，并希望确保只有Bob可以使用这些比特币。

Alice可以使用比特币脚本语言来创建一个支付条件，即只有Bob能够满足的条件。这个条件可以是Bob提供一个特定的公钥和签名。

比特币脚本语言允许用户定义复杂的支付条件，确保只有满足特定条件的人才能花费这些比特币。

1. Alice创建一个交易输出，包含一个锁定脚本（scriptPubKey），要求提供Bob的公钥和签名。
2. Bob生成一个交易输入，包含一个解锁脚本（scriptSig），提供他的公钥和签名。
3. 比特币网络验证解锁脚本和锁定脚本是否匹配，并确认交易。

假设Alice的锁定脚本是`OP_DUP OP_HASH160 <Bob的公钥哈希> OP_EQUALVERIFY OP_CHECKSIG`，Bob的解锁脚本是`<Bob的签名> <Bob的公钥>`。比特币网络将执行以下步骤：

1. 将`<Bob的签名>`和`<Bob的公钥>`压入栈。
2. 执行`OP_DUP`，复制公钥。
3. 执行`OP_HASH160`，计算公钥的哈希值。
4. 将计算结果与锁定脚本中的公钥哈希值比较（`OP_EQUALVERIFY`）。
5. 验证签名（`OP_CHECKSIG`）。

:::

### Bitcoin Script Instructions

比特币脚本语言总共有256个操作码，其中15个被禁用，75个被保留。

这些操作码用于执行各种操作，如数据处理、逻辑判断和加密验证。

- Arithmetic: 比特币脚本支持基本的算术操作，如加法、减法和乘法。这些操作可以用于处理交易中的数值计算。
- If/then: 比特币脚本支持条件判断语句（If/Then），允许根据特定条件执行不同的操作。这在实现复杂的交易条件时非常有用。
- Logic/data handling: 比特币脚本支持逻辑操作和数据处理，包括与、或、非等逻辑运算，以及数据的推入和弹出操作。这些功能用于控制脚本的执行流程和处理交易数据。
- Support cryptography: 比特币脚本支持多种加密操作，包括哈希计算和数字签名验证。这些操作确保交易的安全性和完整性。
- Hashes: 比特币脚本中常用的哈希函数包括SHA-256和RIPEMD-160，用于生成比特币地址和验证数据完整性。
- (ECDSA) Signature verification: 比特币使用椭圆曲线数字签名算法（ECDSA）来生成和验证交易签名，确保交易只能由合法的私钥持有者发起。
- Multi-signature verification: 比特币脚本支持多重签名验证，允许一个交易需要多个签名才能被执行。这种机制用于提高交易的安全性和灵活性。

::: details Example

假设我们有一个多重签名交易，要求三个参与者中的两个签名才能执行交易。我们需要编写一个比特币脚本来实现这一功能。

多重签名交易需要验证多个签名，这可以通过比特币脚本中的多重签名操作码来实现。我们需要将参与者的公钥和签名推入堆栈，然后使用操作码验证签名。

1. 将三个参与者的公钥推入堆栈。
2. 指定需要的签名数量（2个）。
3. 将签名推入堆栈。
4. 使用OP_CHECKMULTISIG操作码验证签名。

假设参与者的公钥为A、B、C，签名为S1、S2，脚本如下：

```
2 <A> <B> <C> 3 OP_CHECKMULTISIG
```

这个脚本将验证S1和S2是否对应A、B或C中的任意两个公钥。

:::

## Account-based Model

![1728876836366.png](https://pic.hanjiaming.com.cn/2024/10/14/5e419a84c68e9.png)

## Two Types of “Accounts”

### Normal Account

- Normal account (like in Bitcoin) has balance and address
  「普通账户（类似于比特币）具有余额和地址」
  - 与私钥相关联；外部拥有账户（EOA）。
  - EOA由用户的私钥控制，私钥用于签名交易和访问账户。

### Smart Contract

- creatable by anyone/other account: 智能合约账户的创建不受限制，任何人都可以部署智能合约。
- 智能合约账户不仅包含执行逻辑的代码，还包含用于存储数据的键值对,包含
  - 代码
  - 用于合约的键值存储

The code can:

- send ETH to other accounts
- read/write storage
- call (i.e., start execution in) other contracts: 智能合约可以调用其他合约，实现模块化和可重用的代码。

::: details Example

假设我们要创建一个智能合约来管理一个简单的投票系统。用户可以通过发送以太币来投票，投票结果将存储在智能合约中。

我们需要一个智能合约账户来管理投票系统，存储投票结果，并能够接收和发送以太币。

1. 创建智能合约代码，定义投票逻辑和存储。
2. 部署智能合约到以太坊区块链，生成智能合约账户。
3. 用户通过发送以太币投票，智能合约接收以太币并记录投票结果。
4. 智能合约可以读取和写入投票结果，确保数据的准确性和透明性。

假设有三个候选人，用户通过发送1 ETH投票。投票结束后，智能合约读取存储的数据，显示每个候选人的得票数。

:::

::: note The “Hello World” of Ethereum -> DNS

在这个代码片段中，`domains`是一个存储结构，它存储了域名的所有者（`owner`）和IP地址（`ip`）。这个结构被智能合约管理，所有数据都存储在区块链上。

![1728887154206.png](https://pic.hanjiaming.com.cn/2024/10/14/eaae919bc4c12.png)

:::

## Ethereum Languages

![1728887367525.png](https://pic.hanjiaming.com.cn/2024/10/14/1b1457e0cee66.png)

![1728887529028.png](https://pic.hanjiaming.com.cn/2024/10/14/b94bea3f7c6b7.png)

## Transactions in ETH

- Transactions sending tokens between accounts like bitcoin
- “Transactions” to contracts
  - like function calls to objects
  - specify which object you are talking to, which function, and what data (if possible)
- “Transactions” to create contracts
  - 这类交易用于在以太坊网络上创建新的智能合约。
  - 创建合约的交易会部署合约代码，并在区块链上生成一个新的合约地址。

some keyword

- nonce（number used once, anti-replay-attack）
  「nonce是一个只使用一次的数字，用于防止重放攻击」
  - 每个交易都有一个唯一的nonce值，确保同一个交易不会被重复提交。
- to（destination address）：即接收以太币或执行智能合约的地址。
- value（amount of ETH to send）：这个值以Wei为单位，Wei是以太币的最小单位（1 ETH = 10^18 Wei）。
- gasprice（amount of ETH per unit gas）
  - gasprice 字段表示每单位 Gas 的以太币价格。
  - 用户可以设置较高的 gasprice 以激励矿工优先处理其交易。
- startgas（maximum gas consumable）：
  - startgas 字段表示交易或智能合约执行过程中可消耗的最大 Gas量。
  - 这个值用于限制交易的计算资源消耗。
- v, r, s（ECDSA signature values）
  - v, r, s字段是使用ECDSA算法生成的签名值，用于验证交易的真实性和完整性。

::: details example

Alice 想要向 Bob 发送 1 ETH，并且需要确保交易安全且不会被重放。

Alice 需要创建一个包含 nonce、to、value、data、gasprice、startgas 和签名（v, r, s）的交易。

通过设置nonce和签名，可以确保交易唯一性和安全性。

1. **设置 nonce**：假设Alice之前已经发送了2笔交易，那么她的下一笔交易的nonce将是2。
2. **设置 to**：将Bob的以太坊地址填入to字段。
3. **设置 value**：将1 ETH转换为 Wei（1 ETH = 10^18 Wei），并填入value字段。
4. **设置 data**：如果只是发送 ETH 而不是调用智能合约，data字段可以为空。
5. **设置 gasprice**：假设当前网络平均gasprice为50 Gwei（1 Gwei = 10^9 Wei），Alice可以设置gasprice为50 Gwei。
6. **设置 startgas**：假设交易需要21000 Gas，Alice可以设置startgas为21000。
7. **生成签名**：使用Alice的私钥对交易进行签名，生成v, r, s值。

:::

## How to Create

How to Create a Contract?

Submit a transaction to the blockchain: 在区块链上提交一笔交易。这是创建智能合约的第一步，需要将交易发送到区块链网络。

- nonce 是一个唯一的数字，每笔交易都有一个不同的 nonce 值。它用于防止重放攻击。在创建新交易时，nonce 值是前一次交易的 nonce 值加 1。
- to: empty (the null address) 
  在创建智能合约的交易中，接收地址（to）是空的，表示这笔交易的目的是创建一个新合约，而不是转账给某个现有地址。
- value 是发送到新合约的以太币数量。这笔资金将存储在新创建的智能合约中。
- data 字段包含了智能合约的代码。这是合约的逻辑部分，定义了合约的行为和规则。
- gasprice 是每单位 gas 的以太币价格。它决定了矿工处理这笔交易的优先级，gasprice 越高，交易被处理的速度越快。
- startgas 是交易可以消耗的最大 gas 量。它限制了交易执行过程中可以使用的计算资源，防止交易消耗过多资源。
- v, r, s 是椭圆曲线数字签名算法（ECDSA）的签名值。它们用于验证交易的真实性和完整性。
- 如果交易成功，将返回以下信息：新合约的地址。这个地址是根据创建者的地址和 nonce 计算得出的。

::: details Example

假设你想在以太坊上创建一个简单的智能合约，这个合约将存储和返回一个数字。

你需要提交一笔交易来创建这个智能合约。交易需要包含合约代码、nonce、gas 相关信息等。

1. 编写智能合约代码，例如：
   ```solidity
   pragma solidity ^0.8.0;
   
   contract SimpleStorage {
       uint256 storedData;
   
       function set(uint256 x) public {
           storedData = x;
       }
   
       function get() public view returns (uint256) {
           return storedData;
       }
   }
   ```
2. 编译合约代码，获取字节码和 ABI。
3. 构建交易：
   - nonce: 前一次交易的 nonce + 1
   - to: 空地址
   - value: 0（不发送以太币）
   - data: 合约代码的字节码
   - gasprice: 设定的每单位 gas 的价格
   - startgas: 估算的最大 gas 消耗
   - v, r, s: 使用私钥对交易进行签名，生成签名值
4. 提交交易到以太坊网络。
5. 如果交易成功，获取新合约的地址。


假设交易成功，返回新合约的地址：`0x1234567890abcdef1234567890abcdef12345678`。

:::

## How to Interact

How to Interact a Contract?

- Submit a transaction to the blockchain
  - nonce: previous nonce + 1
  - to 字段指定了交易的接收地址。在智能合约的交易中，这个地址是智能合约的地址。
  - value 字段表示发送到新的合约的以太币数量。
  - data 字段包含了智能合约需要读取和执行的数据。
  - gasprice 字段表示每单位 gas 的价格，以以太币（ETH）为单位。gas 是执行交易所需的计算资源。
  - startgas 字段表示交易能消耗的最大 gas 数量。
  - v, r, s 是由 ECDSA 签名算法生成的签名值，用于验证交易的有效性和发送者的身份。
  - 如果交易成功，将返回合约的输出（如果适用）。

## Blockchain State

比特币的状态：键值对将地址映射到账户余额：

- 在比特币区块链中，每个地址都有一个对应的账户余额，这就是比特币的状态。
- 地址作为键，余额作为值。

以太坊的状态：键值对将地址映射到账户对象。

- 在以太坊区块链中，地址不仅可以映射到余额
- 还可以映射到更复杂的对象，如智能合约
- 地址作为键，对象作为值。

![1728975895748.png](https://pic.hanjiaming.com.cn/2024/10/15/4dec023b44590.png)

## Account Object

每个账户对象包含四个数据字段，这些字段用于存储账户的状态信息。这四个数据字段分别是 Nonce、Balance、Code Hash和Storage Trie Root。

- nonce是一个用于防止重放攻击的计数器。
  - 对于外部拥有账户（EOA），Nonce 表示账户发起的交易数目，每次发起交易时Nonce都会增加。
  - 对于合约账户，Nonce 表示该合约账户创建的合约数量。每当合约账户通过 `CREATE` 或 `CREATE2` 操作码创建新的合约时，Nonce 会增加。
- Balance表示账户的余额，即账户中持有的以太币（Ether）的数量。
  - 余额以最小单位Wei表示，1 Ether等于10^18 Wei。
- Code Hash是智能合约代码的哈希值。
  - 对于外部拥有账户（EOA），Code Hash为空字符串，因为EOA不包含智能合约代码。
  - 对于合约账户，Code Hash用于存储和验证智能合约代码。
- Storage Trie Root是存储 Trie的根哈希值。
  - 存储 Trie 用于存储智能合约的持久化数据。
  - 对于外部拥有账户（EOA），Storage Trie Root为空，因为EOA没有持久化存储。

## Block Mining

区块挖矿是区块链网络中验证交易并将其添加到区块链的过程。

![nrwMZX4bLWJbxzxrnGrSN.png](https://pic.hanjiaming.com.cn/2024/10/15/3db4981067498.png)

通过这张图，我们可以理解区块链中的区块挖矿过程，包括交易的收集、验证、状态更新、工作量证明以及区块的广播。

- 左侧显示了多个交易（Tx-1, Tx-2, ..., Tx-n），这些交易被收集并打包到一个区块中。
- 矿工负责收集这些交易并将它们打包成一个区块。矿工会验证交易的合法性并执行相关代码以更新状态。

### 区块结构（Block）

区块包含以下几个部分：

- **Previous block（前一个区块）**：指向前一个区块的哈希值，用于维护区块链的连续性。
- **A set of TXs（交易集合）**：当前区块中包含的所有交易。
- **New State Root（新状态根）**：交易执行后，整个系统的新状态的根哈希值。
- **Receipt Root（收据根）**：所有交易收据的根哈希值。每个收据代表一个交易执行后的中间状态根。
- **Nonce（随机数）**：用于工作量证明（PoW）的随机数。

### 验证过程

- 矿工会验证交易并执行所有代码以更新状态，这将生成新的状态根（New State Root）。
- 计算区块的哈希值（SHA3(Block)），并与目标值（D）进行比较。
- 如果哈希值满足条件（SHA3(Block) < D），则认为挖矿成功。

Broadcast Block: 挖矿成功后，矿工会将区块广播到网络中，其他节点会验证区块的合法性并将其添加到区块链中。

Receipt Root: 收据根是所有“收据”的树的根。每个收据代表一个交易执行后的中间状态根。

## Code Execution

在区块链网络中，每个全节点都会处理每一笔交易，并存储整个区块链的状态。

这意味着全节点不仅要验证和记录所有的交易，还要维护整个区块链的完整数据。

![1729009921852.png](https://pic.hanjiaming.com.cn/2024/10/16/c680fafa14a5a.png)

- 图中显示了多个节点（P1, P2, P3, P4, P5, P6），每个节点都有一个绿色的区块图标，表示它们正在处理新的区块。
- 图中箭头表示节点之间的通信和数据传递。
- 每个节点都在广播“这是一个新区块！”的信息，表明它们正在处理和验证新的区块。

## DoS Attack Vector

Denial-of-Service (DoS) Attack Vector

Halting problem (a general "theoretical-CS" problem)

- 停机问题是计算机科学中的一个理论问题。
- 它询问是否存在一个算法能够判断任意程序是否会在有限时间内停止运行。图灵证明了这是不可能的。

Cannot tell whether or not a program will run infinitely, for programs written in a "Turing-complete" language 「对于用图灵完备语言编写的程序，我们无法判断它们是否会无限期运行。」

- 这是因为停机问题无解，无法创建一个通用算法来解决所有程序的停机问题。
- 图灵完备语言是指那些能够模拟图灵机的编程语言。

A malicious miner can DoS attack full nodes by including lots of computation in their txs「一个恶意矿工可以通过在其交易中包含大量计算来对全节点发起DoS攻击」

- 这些复杂交易会耗尽节点的计算资源，使其无法正常工作。
- 全节点在验证区块时会受到攻击。恶意交易会增加验证的计算负担，导致节点资源耗尽。

比如

```solidity
uint i = 1;
while (i++ > 0) {
    doNothing();
}
```

这个代码片段展示了一个无限循环。变量`i`从1开始，每次循环增加1，条件`i++ > 0`始终为真，因此循环永不结束。这种无限循环会耗尽计算资源。

Solution: “Gas”

- Charge fee per computational step 「按计算步骤收取费用」
- 占用存储空间的操作的特殊费用

<img src="https://pic.hanjiaming.com.cn/2024/10/16/028ee98985c32.png" alt="CleanShot 2024-10-16 at 00.55.05@2x.png" style="zoom:33%;" />

Sender has to pay for the gas

- Gasprice: amount of ETH per unit gas
- Startgas: maximum gas consumable
  - If startgas is less than needed,
    - 交易将会失败，并抛出"Gas不足"异常。
    - Revert the state as if the TX has never happened
    - 发送者仍需支付所有Gas费用，，这是为了补偿矿工的计算资源消耗。
- TX fee = gasprice × consumed_gas
- Gas limit: similar to block size limit in Bitcoin
  - 区块中所有交易消耗的总Gas量 < Gas限制

## Problems

### Privacy

以太坊区块链保证了智能合约的正确性和可用性，但不保证隐私性。智能合约的所有数据和操作都是公开的，任何人都可以查看。

### Scalability

- 区块链上的资源是昂贵的。
  - 全节点执行相同的链上计算。
  - 每个全节点都需要处理和验证所有的交易和智能合约，这导致了计算资源的重复使用和浪费。
- 全节点存储相同的数据。
  - 每个全节点都需要存储整个区块链的数据
  - 这会占用大量的存储空间，特别是随着区块链数据量的增长。

由于Gas限制，区块链无法处理复杂的操作系统级别的任务，只能执行简单的计算和存储操作。

增加Gas限制会使区块链更容易受到DoS攻击，因为攻击者可以通过大量复杂交易来消耗网络资源。

#### Scalability Solution 1: Sharding

假设有一个区块链网络，它需要处理大量的交易数据，但由于网络规模的增加，单个节点无法高效地处理所有数据，导致网络性能下降。

分片技术可以将区块链网络划分为多个子网络，每个子网络只处理一部分数据，从而减轻单个节点的负担，提高整体网络的性能和可扩展性。

#### Scalability Solution 2: State Channel

状态通道是一种用于链下交易的通道。它允许参与者在不影响区块链主链的情况下进行多次交易。

闪电网络是支付通道的一种实现，而状态通道则是用于状态更新的通道。

只有结算交易会记录在区块链上。也就是说，通道开启和关闭时的交易会在主链上进行记录，而通道内的所有其他交易都在链下进行。

Alice和Bob想要进行多次小额交易，但不希望每次交易都记录在区块链上，以节省交易费用和提高交易速度。状态通道是一种理想的解决方案。通过状态通道，Alice和Bob可以在链下进行多次交易，只需在通道开启和关闭时在链上进行记录。

1. Alice和Bob在区块链上创建一个智能合约，开启状态通道（TX1）。
2. 在状态通道内，Alice和Bob进行多次交易，更新状态（S1, S2, ...）。
3. 当所有交易完成后，Alice和Bob关闭状态通道，将最终状态记录在区块链上（TX4）。
