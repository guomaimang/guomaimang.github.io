---
article: false
date: 2024-11-21
index: true
order: 13
headerDepth: 0

---

# Oracle and Tokenization

## Challenges/Issues of Blockchain

**Speed vs. Security:** 

-  Fundamental trade-off: 区块链技术本质上存在速度和安全性的权衡。
- Solutions: alternative/better consensus mechanisms, layer-2 scaling

**Privacy Concerns:**

- Law/regulation, *e.g.*, GDPR and HIPAA
- Solutions: ZK-SNARKs

**Regulatory Compliance:**

- 区块链的不可篡改性使得犯罪相关或不适当的内容无法被删除，这在法律合规性上带来了挑战。
- Solutions: Permissioned/Private blockchain?
- plus cryptographic techniques (*e.g.*, “chameleon hash”)

More Challenges

- User Experience Complexity
  - 从概念上讲，需要一个抽象
  - 具体来说，需要一个接口
- **External Data Reliance**
  - **由于区块链的去中心化特性，它无法直接访问或验证外部数据源的真实性和准确性。**
  - 限制了他们与现实世界信息交互的能力

::: info Layer-2 Scaling

区块链的Layer-2扩展（Layer-2 Scaling）是指在主链（Layer-1）之上构建的协议或技术，以提高区块链网络的交易处理能力和效率。

Layer-2扩展通过将大量交易移出主链处理，从而减轻主链的负担，降低交易费用，并提高交易速度。

侧链是与主链并行运行的独立区块链，能够与主链进行资产和数据的互操作。侧链可以有自己的共识机制和规则，从而实现更高效的交易处理。一个例子是以太坊的Plasma。

:::

## Supply Chain

Systematic end-to-end traceability/transparency of products「系统化的端到端产品可追溯性/透明度」

- 这意味着在整个供应链的每个环节中，都可以追踪和记录产品的状态和流动情况，从而确保产品的真实性和可靠性。
- 现实世界中商品/食品等的真实性：通过可追溯性系统，可以验证产品在每个环节中的真实性，防止假冒伪劣产品流入市场。

Management of traceability/transparency data「可追溯性/透明度数据的管理」

- 例如，食品安全监管和合规性

Culprit identification (e.g., “bad” node uploading stale data)「罪魁祸首识别（例如，“坏”节点上传过时数据）」

- 在供应链中，如果某个节点上传了错误或过时的数据，可以通过可追溯性系统快速识别并定位问题节点。
- 每个节点或检查点都会更新状态 → 智能合约

Challenge: privacy vs. traceability

## Electronic Health Records (EHR)

- 电子健康记录（EHR）分散在各个诊所和医院中。
- 不同的医疗服务提供者将电子健康记录（EHR）本地存储。
  - 没有未经授权的记录查看。
- 区块链作为一种“集中化”的来源？
  - 在区块链上存储指针、哈希值和访问策略，而不是数据本身。
  - 指针用于访问节点的数据库。
- **信任与隐私之间的平衡（无法否认）。**
- **隐私与可访问性之间的平衡（无法进行大数据分析）。**

## Decentralized Exchanges (DEXs)

### 去中心化交易所

去中心化交易所（DEX）允许用户直接相互交易加密货币和代币。

- 这里的“直接”意味着没有中介或中央权威参与，交易双方可以直接在平台上进行交易。
- 在DEX上进行交易时，不需要像银行或传统交易所这样的中介机构来验证和处理交易，减少了交易成本和时间。
- 通常使用智能合约来自动化这些过程。

这是去中心化金融（DeFi）的一个具体实例

- DeFi是指利用区块链技术和智能合约来提供传统金融服务，而不依赖于传统金融机构。
- 例如，合成资产、衍生品和保险合同。
  - 合成资产「synthetic assets」是指通过智能合约创建的模拟真实资产的代币
  - 衍生品「derivatives」是基于其他资产价值的金融工具
  - 保险合同则是通过智能合约执行的保险协议。

**准确和及时提供外部数据至关重要: 在DEX和DeFi系统中，外部数据（如价格信息）对于智能合约的正确执行非常重要**

### Benefits of DeFi

- DeFi允许用户直接控制他们的资金，并进行点对点交易，而无需依赖中心化的交易所。
  - 这意味着用户的资金不需要存放在交易所账户中，从而减少了资金被盗的风险。
  - 与中心化交易所不同，在DeFi系统中，用户的资金始终由用户自己控制，而不是由交易所控制。这减少了资金被黑客攻击或管理不当的风险。
- DeFi系统中的交易和操作通过智能合约自动执行，确保交易按预定规则进行，无需人工干预。
  - 智能合约预先编程了交易和结算规则，确保所有交易都符合规定，减少了人为错误和欺诈的风险。
  - DeFi系统中没有中介机构，所有交易都是直接在用户之间进行的，这不仅提高了交易效率，还减少了交易成本。
- 所有DeFi交易都记录在区块链上
  - 任何人都可以查看和验证交易记录，从而增加了系统的透明度和可信度。
- Accessibility and Anonymity「可访问性和匿名性」
  - DeFi系统通常不需要用户进行KYC验证，这使得用户可以匿名参与交易，同时也增加了系统的可访问性。
  - 由于没有中心化交易所的参与，DeFi系统通常不要求用户提供个人信息进行KYC验证，从而保护了用户的隐私。

::: tip KYC

KYC流程是金融机构用于验证客户身份的标准程序，通常涉及收集客户的个人信息。

DeFi系统通过去中心化的方式，避免了这一过程。

:::

## Decentralized Oracle Network (DONs)





