---
article: false
date: 2024-10-10
index: true
order: 4
headerDepth: 2
---

# Variants

## Types of Blockchain

### Public Blockchains

- Public Blockchains 是向公众开放的，任何人都可以访问和参与。
- 这种区块链不属于任何一个单独的实体，而是由所有参与者共同维护。
- Anyone can participate as a mining node
  - Users may or may not be rewarded for their participation.
- All users of these permissionless or unpermissioned ledgers maintain a copy of the ledger on their local nodes
- Require sybil-resilient admission control like proof of work: 种机制通过消耗计算资源来防止恶意节点的加入。
- Slow to use and expensive to maintain: 因为需要大量计算资源来验证交易和维护网络安全。
- Transparent: everything is publicly verifiable
  - 公有区块链具有透明性，所有交易和数据都是公开可验证的。这种透明性增强了系统的信任度。
- No privacy “by default”
  - 这意味着所有交易和数据都是公开的，任何人都可以查看。
- E.g., Bitcoin, Ethereum

### Private Blockchain

- A group of individuals or organizations decided to run one
  「一个由个人或组织组成的群体决定运行一个区块链网络。」

- They form a consortium「联盟」 to maintain and “share” the ledger

- Permissioned, fast to form consensus, higher tx rate 

  - 这是一个有权限的区块链，只有被授权的节点才能参与。
  - 共识形成速度快，交易速率高。

- Data can be kept private to them, and users enjoy “privacy”

  - still no privacy against the consortium since they know everything
     「但是对联盟内部而言，没有隐私可言，因为所有成员都可以访问全部数据。」

- Went back to centralization

- Organizations: Enterprise Ethereum Alliance, Hyperledger providing the technology
  「一些组织如企业以太坊联盟和超级账本联盟正在推动这项技术的发展。」

- Protocol/Infrastructure: HydraChain, Kaleido, Tendermint, ConsenSys Quorum

  「一些协议和基础设施如HydraChain、Kaleido、Tendermint和ConsenSys Quorum在支持私有区块链的运行。」

### More Variants

**Permissioned Blockchain** is not necessarily private

- 许可链是一种区块链网络，只有经过授权的参与者才能加入。
- 然而，这并不意味着所有数据都是私有的，某些数据仍然可以是公开的。

**Semiprivate Blockchain** (vs. consortium blockchain?)「半私有区块链（与联盟链相比？）」

- 半私有区块链结合了私有链和公有链的特点
- a hybrid version: part of it is private and another is public
  「部分数据和交易是私有的，部分是公开的。」
- hardly any real-world deployment
  「几乎没有任何实际部署」
  尽管半私有区块链有其理论上的优势，但在实际应用中很少见。
- 半私有区块链可能结合了私有链和公有链的优点，但也可能面临两者的缺点。

**Tokenless Blockchain** (Corda, permissioned): 无代币区块链（Corda，许可链）。

- Corda是一种无代币的许可链，主要用于安全地存储数据。
- Corda的设计目标是提供一个安全的分布式账本「serves as a shared distributed ledger for storing data "securely"」，允许多个参与者共享数据。
- 没有用于价值转移的基本单位「no basic unit for the transfer of value」。Corda不使用代币作为价值转移的基本单位，而是专注于数据的安全存储和共享。















