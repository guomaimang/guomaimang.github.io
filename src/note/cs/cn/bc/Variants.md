---
article: false
date: 2024-10-10
index: true
order: 4
headerDepth: 1
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

## Alternative Coins

自比特币取得初步成功以来，许多替代货币项目相继推出。比特币的成功证明了区块链技术和去中心化数字货币的可行性，激发了众多开发者和企业家尝试创建新的数字货币。

比特币于2009年发布，第一个替代币项目（名为Namecoin）于2011年推出。Namecoin旨在通过去中心化的方式管理域名系统（DNS），这是比特币之外首个基于区块链技术的项目。

A few were pump「抽水」 and dump 「倾倒」scams, that surfaced for some time but soon disappeared. 「其中一些是拉高抛售骗局，出现了一段时间但很快就消失了。」

### Pump and Dump

“拉高出货”是一种市场操纵手段，操纵者通过虚假和误导性声明人为抬高价格，然后在高价时抛售手中的资产，导致价格暴跌，投资者蒙受损失。

- Pump: artificially 「人为」inflating the price through false and misleading positive statements.
  「“拉高”：通过虚假和误导性的积极声明人为抬高价格。」
  操纵者散布虚假信息，使投资者误以为该资产有很高的价值，从而推高价格。
- to sell the cheaply purchased stock at a higher price「以更高的价格出售低价购买的股票」
  操纵者在价格低时大量买入，然后通过“拉高”手段推高价格，最后在高价时抛售获利。
- dump: the operators of the scheme sell their overvalued shares
  「“出货”：骗局的操纵者出售其高估值的股份。」.
- the price then falls and investors lose their money.
  「价格随即下跌，投资者蒙受损失。」
  操纵者抛售后，市场价格迅速回落，导致那些在高价买入的投资者损失惨重。

::: details Example

假设有一个新的加密货币项目“XYZ币”在市场上推出，声称其技术将会彻底改变金融行业。该项目在短时间内通过ICO募集了大量资金。

XYZ币的开发团队通过社交媒体和新闻发布会散布了许多积极的消息，声称他们已经与多家大型金融机构达成了合作，并且即将发布一款革命性的金融应用。

这些消息导致XYZ币的价格迅速上涨，吸引了大量投资者的关注。这种情况符合“拉高出货”骗局的特征：通过虚假和误导性声明人为抬高价格。

1. XYZ币的价格在短时间内大幅上涨。
2. 开发团队和早期投资者在高价时大量抛售手中的XYZ币。
3. 随着抛售行为的进行，市场上XYZ币的供应量增加，价格开始下跌。
4. 新进入的投资者在高价买入后，发现价格迅速下跌，难以卖出，最终蒙受损失。

假设XYZ币在ICO阶段的价格为1美元，市场价格在消息发布后上涨到10美元。开发团队和早期投资者在10美元时抛售，获利10倍。而在价格下跌到2美元时，新进入的投资者每购买一枚XYZ币将损失8美元。

:::

::: info ICO（Initial Coin Offering）

ICO是指一种通过发行新加密货币进行融资的方式，类似于股票市场中的IPO（首次公开募股）。投资者购买新发行的代币，以期望其未来增值。

ICO的热潮促进了大量替代币的产生。

:::

### Why and How

- Many of these alternative projects are direct (software) "forks" of Bitcoin source code. 
  - 这意味着这些项目使用了比特币的源代码作为基础，进行了修改和扩展。
  - Using the same source code does not mean the software running the code will be based on the same blockchain ledger.
    「使用相同的源代码并不意味着运行该代码的软件将基于相同的区块链账本。」
    不同的分叉项目可能会创建自己的独立区块链。
- Some of those have been written from scratch, 没有使用比特币的源代码
- Some altcoins set out to address Bitcoin limitations (privacy).
- Some others offer different types of mining, e.g., 
  - changes in block size「更改区块大小」
  - uses more ASIC-resistant puzzles「使用更抗ASIC的谜题」
  - uses alternative proof-of-X「采用替代的证明机制（如权益证明PoS）」

## Fork

分叉是指区块链分裂成两个独立的链。每个链都有自己的交易历史和规则。

分叉可以是有意的，也可以是无意的。

- 有意的分叉通常是为了升级协议或引入新特性，
- 而无意的分叉可能是由于软件错误或网络问题引起的。

一次重大的协议升级可能会导致硬分叉。硬分叉是指新旧版本的软件不兼容，导致区块链分裂成两个不兼容的链。

但现实情况是，并不是所有的软件都会同时升级。不同的节点可能会在不同的时间进行升级，导致网络中的版本不一致。

硬分叉：变更不向后兼容。即旧版本的软件无法识别和处理新版本的区块。

- 例如，旧版本的软件客户端会由于新特性而拒绝新客户端生成的区块。
- 新版本的软件也可能会拒绝旧客户端的操作。

软分叉：**新特性使规则更加严格。**软分叉是指新旧版本的软件仍然兼容，但新版本引入了更严格的规则。

- 旧客户端由于检查较宽松，不会拒绝新客户端的提议。
- 但新客户端会拒绝旧客户端的提议，从而迫使旧客户端升级。

::: details Example

假设一个区块链网络正在进行一次协议升级，目的是引入新的安全特性。

此时，网络中的一部分节点升级了新版本的软件，而另一部分节点仍然运行旧版本的软件。

由于新旧版本的软件不兼容，网络中的节点可能会产生不同的区块链。这会导致网络分裂成两条链，即发生硬分叉。

1. **检测分叉**：通过监控网络中的区块链状态，检测是否有节点生成了不同的链。
2. **分析分叉原因**：检查节点的软件版本，确认是否由于协议升级导致的分叉。
3. **协调升级**：联系运行旧版本软件的节点，通知他们进行升级。
4. **合并链**：在所有节点升级到新版本后，选择最长的链作为主链，丢弃其他链。

假设网络中有100个节点，其中60个节点已经升级到新版本，40个节点仍然运行旧版本。在协调升级后，所有100个节点都升级到新版本，网络中的分叉问题得到解决，区块链重新合并为一条主链。

:::

### Hard vs Soft Fork

1. 软分叉是对区块链规则的收紧。例如，将比特币区块大小从1MB减少到0.5MB。
   - 这意味着新规则对数据的要求更严格。
   - 旧节点可以接受新规则下的区块。这是因为新规则是旧规则的子集，旧节点仍然可以验证新规则下的区块。
   - 软分叉是向后兼容的。这意味着即使不更新软件，旧版本的软件仍然可以正常运行和参与网络。
2. Hard Fork
   - 硬分叉是对区块链规则的扩展。例如，将比特币区块大小从1MB增加到2MB。
   - 这意味着新规则对数据的要求更宽松。
   - 旧节点不能接受新规则下的区块。这是因为新规则超出了旧规则的范围，旧节点无法验证新规则下的区块。
   - 硬分叉是不向后兼容的。这意味着如果不更新软件，旧版本的软件将无法正常运行和参与网络。

![1730531090285.png](https://pic.hanjiaming.com.cn/2024/11/02/5a0340a9ca0fa.png)

### Some Points of the Debate

比特币软件中包含了一个硬编码的限制，即每个区块的大小不能超过1MB。这意味着每个区块最多只能包含1MB的数据，包括交易记录和其他信息。

区块大小限制引发了大量争议和讨论。社区内存在不同的观点和意见。

- 一些人认为区块大小限制是必要的，以防止网络过载和确保去中心化特性。
- 而另一些人则认为限制不应存在，因为它限制了网络的交易处理能力。

即使在认为应该存在限制的人群中，也存在关于限制具体应该多大的争议。

- 一些人主张适度增加区块大小以提高交易处理能力
- ，而另一些人则担心这可能会影响去中心化特性。

比特币的创始人中本聪从未公开解释为什么设置1MB的区块大小限制。这使得人们只能猜测当初的设计意图。一种常见的猜测是，中本聪设定这一限制是为了防止垃圾交易，即防止恶意用户通过创建大量虚假交易来超载比特币网络。

### Is hard fork desirable?

在硬分叉的情况下，会生成一种新的加密货币（altcoin）。

- 硬分叉是对区块链协议的重大更改，导致新旧版本不兼容，从而形成两条平行的链。
- 旧链继续使用原有的协议，而新链则采用新的协议，生成新的加密货币。

Against the true spirit of decentralization

- 硬分叉违背了去中心化的真正精神。
- 去中心化意味着没有单一的中央权威对网络进行控制，而硬分叉通常是由一小部分人或组织决定的，这与去中心化的理念相悖。

硬分叉会分裂用户社区。

- 以太坊基金会，一个中心化的实体，决定进行硬分叉，尽管并不是所有人都同意这一提议。
- 以太坊基金会在DAO事件后决定进行硬分叉，以恢复被盗资金，这一决定引发了社区的分裂。
- 由于硬分叉会形成两条平行的链，用户需要选择支持哪一条链，从而导致社区的分裂。
- 例如，以太坊和以太坊经典的分裂。

通常情况下，硬分叉不会对加密货币的基本参数进行剧烈更改

- 硬分叉主要是为了引入新功能或修复漏洞，而不会大幅改变加密货币的基本特性，如总供应量和发行速率。
- 硬分叉只是创建一种具有新参数和新功能的新货币。
- 通过硬分叉，开发者可以引入新的特性和协议改进，但基本参数通常保持不变。

可以从头开始编写一种新货币，或者分叉现有货币的源代码。硬分叉通常是对现有区块链的分叉，而不是从头开始创建一个全新的区块链。

### Cold-Start

如何吸引足够的用户来维持社区？这是加密货币项目成功的关键，因为一个健康的用户群体可以确保网络的安全性和稳定性。

- 将新生成的加密货币分配给初始矿工。这种方法可以激励矿工参与网络的早期阶段。
- 但是这些初始矿工可能会在获得大量加密货币后迅速抛售（即“拉高出货”），导致币价大幅波动。

Proof of Burn (one-way peg or price ceiling)

- 燃烧证明（单向挂钩或价格上限）是一种机制，用户通过永久销毁一定数量的原始加密货币来获得新加密货币。
- 用户永久销毁一定数量的原始加密货币。
- 这是分配初始资金的另一种方法。
- 加密货币被发送到一个“不可花费”的地址（不可逆的过程）。
- 根据要领取的山寨币数量按比例销毁原始加密货币。
- 山寨币的价值不能超过被销毁的原始加密货币的价值。

所有权证明（与合并挖矿一起）是一种机制，通过证明用户拥有一定数量的比特币来获得山寨币。

- 证明用户拥有一定数量的比特币（而不是销毁它们）。
- 然后用户可以通过将山寨币区块与原始链的区块连接来领取山寨币。
- 挂钩侧链（双向）「Pegged Sidechains (two-way)」是一种允许资产在主链和侧链之间双向转移的机制。

## Alternatives to PoW

能量消耗是不可避免的。无论是进行计算还是处理信息，都需要消耗能量。

为了找到替代方案，我们首先需要仔细研究哈希谜题。哈希谜题是工作量证明机制中的核心部分，矿工需要解决这个谜题来验证交易

### SHA-256 and SHA3

在密码学中，哈希函数用于生成消息摘要，以确保数据在传输过程中未被篡改。

- Secure Hash Algorithm (SHA): 是一种通用的哈希函数。它被设计用于生成固定长度的哈希值，用于数据验证和密码学应用。
- SHA-2家族包括多个变种：SHA-224、SHA-256、SHA-384和SHA-512。这些变种的主要区别在于生成的哈希值的长度（分别为224位、256位、384位和512位）。
- 尽管SHA-2家族存在已知的弱点，但在密码学上仍未被攻破，仍然被认为是安全的。
- 主要使用比特运算和模加运算。这些运算在硬件和软件中都可以高效实现。
- SHA-3是最新的SHA标准，由NIST于2015年发布。它采用了不同于SHA-2的内部结构，提供了额外的安全性。

比特币使用SHA-256进行交易验证和区块链的维护，而以太坊则使用SHA-3。

### Graphical Processing Units

GPU大约在2010年10月首次用于比特币挖矿。由于其高并行计算能力，GPU比CPU更适合处理比特币挖矿中的复杂数学问题。

GPU可以通过OpenCL实现，这是一种跨平台的并行计算框架。此外，针对特定显卡的黑客技术也可以提高其挖矿效率。

高“有效吞吐量”是指吞吐量与成功率的乘积（可能会错过一个区块）。有效吞吐量是衡量 GPU 在挖矿中实际产出的一个指标。

### FPGA

Field Programmable Gate Array (FPGA)

#### Advantage

- FPGA通常在特定任务上表现出比GPU更高的性能，特别是那些需要大量并行处理和低延迟的任务。
- FPGA在执行位操作（如与、或、非等）方面表现出色，因为其架构允许高度并行的位级操作，这是许多数字信号处理任务的核心。
- FPGA通常具有更好的散热性能，因为它们的功耗和热量分布可以通过设计进行优化。
- FPGA允许用户根据特定应用需求进行广泛的定制和优化，从而实现最佳性能。

#### Disadvantages

- FPGA通常比GPU消耗更多的电力
- 由于FPGA的复杂性和定制性，它们可能更容易出现故障和错误
- FPGA在处理32位加法运算时可能不如其他专用处理器（如GPU）优化得好
- FPGA的设计和编程需要较高的专业知识，因此具备足够技能的业余爱好者较少。
- FPGA通常比GPU更昂贵，这可能会增加项目的总体成本。
- 在某些应用中，FPGA相对于GPU在性能和成本上的优势可能并不明显。

### Application-Specific Integrated Circuit

ASIC，即专用集成电路，是为特定用途或应用设计的集成电路

- 与通用处理器不同，ASIC在特定任务上具有更高的效率和性能，但也因为其专用性，开发成本高昂，且灵活性较低。
- ASIC通常用于需要高性能和低功耗的应用，如加密货币挖矿。



假设有一个加密货币网络，当前大多数矿工使用高性能的ASIC设备进行挖矿。现有的挖矿算法主要依赖于处理器的计算能力，而处理器性能的增长速度远快于内存，这使得ASIC在挖矿中具有很大的优势。

为了增加网络的去中心化程度，开发者决定引入一种记忆硬难题「memory-hard puzzle」，使得普通用户也能利用他们的个人电脑进行挖矿。

通过引入记忆硬难题，可以缩小ASIC和通用计算设备在挖矿中的性能差距，使得普通用户也能有效参与挖矿，从而增加网络的去中心化程度。

1. 开发者设计了一种新的挖矿算法，该算法需要在每次计算中使用大量内存。
2. 该算法的计算步骤如下：
   - 初始化一个大的内存数组。
   - 在数组中进行多次随机访问和复杂的计算。
   - 最终生成一个哈希值作为挖矿结果。
3. 由于内存访问速度相对稳定，且内存的成本较低，普通用户的个人电脑在执行该算法时与ASIC设备的表现相对接近。

虽然ASIC设备依然具有一定的优势，但这种优势已经大大缩小，使得普通用户也能有效参与挖矿。

### scrypt

- scrypt是一种安全哈希函数（KDF），广泛用于替代比特币的计算谜题。KDF即密钥派生函数，用于从较少的输入生成密钥。
- scrypt是一种内存硬化的哈希函数。这意味着在计算哈希值的过程中，需要大量的内存，从而增加了攻击的难度。
- scrypt在时间和内存之间存在一个固定的权衡关系。即在降低内存需求的情况下，计算时间会增加；反之，增加内存可以缩短计算时间。

### Cuckoo Hash

Cuckoo Hashing 是一种解决哈希冲突的开放地址法。它使用两个哈希函数和两个独立的哈希表来存储数据。当插入数据时，如果目标位置已被占用，则会将已有的数据“驱逐”（evict）到另一个哈希表中，重复这一过程直到找到空位。







