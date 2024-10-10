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
- 注意，代币不一定是「 might not necessarily」“货币”「money」，而是“数字资产「digital assets」”。代币可以表示多种数字资产，而不仅仅是货币。

## Sidechain

Creation of a blockchain associated with the original one「创建一个与原始区块链相关联的区块链」：

- 这意味着侧链是独立的区块链，但它与主链有某种联系或依赖关系。
- Typical uses include the creation of new "altcoins
  「典型的用途包括创建新的“山寨币”。」" 
  -》Alternative cryptocurrencies「替代加密货币」
  - 侧链可以用来创建新的加密货币，这些加密货币与主链上的货币不同。
  - 除了比特币等主流加密货币外，还有许多其他的加密货币，这些通常被称为山寨币。
-  Coins can be moved to from the original blockchain and possibly moved back again (two-way pegged sidechain) 「币可以从原始区块链转移到侧链，并且可能再次转移回去（双向锚定侧链）」
- 可能有不同的共识算法、规则「 Consensus algorithms」等。
  侧链可以采用与主链不同的共识算法和规则，以实现特定的功能或优化。

:::tip Example -> (Bitcoin) The Liquid Network (vs. Lightning Network)

（比特币）液体网络（与闪电网络相比）。液体网络和闪电网络都是比特币的扩展方案，但它们的实现方式和目标有所不同。

:::

Swapping vs. payment channel 「交换 vs. 支付通道」：交换指的是资产在不同链之间的转移，而支付通道则是指在链外进行快速、低成本的交易。

::: details Example

假设你有10个比特币（BTC），你希望利用侧链技术将这些比特币转移到一个更快、更灵活的区块链上进行交易。比特币区块链虽然安全性高，但交易速度较慢且费用较高。通过将比特币转移到侧链上，可以利用侧链的高效性和低费用进行交易。

侧链允许资产在主链和侧链之间转移，并且侧链可以采用不同的共识算法和规则，这使得交易更快且费用更低。

1. 将10个比特币转移到侧链上。这通常通过在主链上锁定这些比特币，并在侧链上生成等值的代币来实现。
2. 在侧链上进行交易。由于侧链的共识算法和规则不同，交易速度更快且费用更低。
3. 当交易完成后，可以将代币转回主链上的比特币。这通过在侧链上销毁代币，并在主链上解锁相应数量的比特币来实现。

假设在侧链上进行交易的费用是0.001 BTC，而在主链上进行同样的交易费用是0.01 BTC，通过侧链可以节省0.009 BTC的费用。

:::





