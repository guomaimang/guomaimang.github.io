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



