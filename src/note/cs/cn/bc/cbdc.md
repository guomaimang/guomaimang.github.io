---
article: false
date: 2024-11-20
index: true
order: 11
headerDepth: 0

---

# Central Bank Digital Currency

## “Impossible Triangle” of Blockchain

- 三难困境（Trilemma）是指在三个目标中，通常只能同时实现其中的两个，而很难同时实现全部三个。
- 在区块链中，这三个目标是去中心化「Decentralization」、安全性「Security」和效率「Efficiency」。
- 或许有可能找到一种方法来平衡这三个目标

## Balancing for a Good Trade-off

去中心化提供了前所未有的优势「unprecedented advantages」。

- 去中心化意味着没有单一的中央控制点，系统的控制权和决策权分散在多个节点之间。
-  **independence from national political control**
- 这种结构可以提高系统的安全性和可靠性

权限区块链「Permissioned blockchain」或私有区块链「private blockchain」由一个联盟运行，比单一方稍微分散。

- 权限区块链通常由多个组织共同管理，这些组织共同决定谁可以参与区块链网络，并控制网络的操作和维护。
- 这种结构比完全去中心化的公有区块链更集中，但仍然比单一组织控制的系统更分散。

让我们探索在半去中心化环境中透明性和可审计性的潜力。

- 透明性指的是系统中的所有交易和操作都是公开的
- 可审计性指的是系统中的所有操作都可以被追踪和验证，以确保其合规性和正确性。

## Monetary Authorities

### 金融结算系统

中央银行使用的金融结算系统也是如此。

- 金融结算系统用于在金融机构之间进行资金转移和清算
- 这些系统通常由中央银行或其他权威机构管理
  - 例如，CHAPS、TARGET2和Fedwire。这些都是由中央银行或金融机构管理的金融结算系统，用于在不同银行之间进行大额资金转移和清算
  - 这些系统依然相对昂贵——至少在幕后是这样——具有高延迟，并且在创新方面停滞不前。金融结算系统的维护和运营成本高昂，处理速度相对较慢，并且由于其复杂性和监管要求，难以快速引入新的技术和创新。

### 货币「**monetary**」供应的解耦

比特币是一种去中心化的数字货币，由匿名人士或团体在2009年创建。

- 在比特币系统中，货币的生成是通过解决复杂的数学问题（即“挖矿”）来实现的。
- 矿工使用计算能力来解决这些问题，成功解决后会获得新生成的比特币作为奖励。**The process also maintains the ledger**
- 它基于区块链技术，允许点对点交易而无需中介。
- 比特币的供应是有限的，总量为2100万个，这使得其具有类似于稀缺资源的特性。

如果让中央银行来生成这种货币会怎样？

- 这是一个探讨的提议，考虑将货币生成的权力集中在中央银行手中，而不是分布在矿工网络中。
- 货币生成是集中化的，由中央银行控制；
- Enjoy globally visible transparency. monetary supply, monetary policy, etc.

::: info Summary of Issues with Bitcoin

- 没有对货币政策的控制: 这种固定的货币政策虽然可以防止通货膨胀，但也意味着在经济危机时缺乏灵活性。
- hashing rates are out of control
- incentive structure is messed up: 随着比特币数量接近上限，矿工的主要收入来源将转向交易费用。如果交易费用不足以激励矿工，可能会导致矿工数量减少，网络安全性降低。
- attacks on mining: 比特币网络面临多种攻击风险，其中最著名的是51%攻击。如果某个实体控制了超过一半的哈希率，他们可以篡改交易记录，进行双重支付，甚至阻止新的交易确认。这对网络的去中心化和安全性构成了威胁。
- not suitable for many applications: 例如，比特币的交易速度较慢，每秒只能处理少量交易，不适合大规模的支付系统。此外，比特币的价格波动较大，导致其作为稳定货币的应用受限。

:::

## Distributed Consensus Spectrum

已知的权威机构/矿工设置：

- 由中央银行信任/维护的一组权威机构
- 所有权威机构彼此了解
- 不需要广播或点对点通信渠道

Non-fixed a priori / ad hoc setting「非固定的先验/临时设置」:

- 需要广播渠道和持续的在线通信
- 例如，Ripple和Stellar

![1732092732619.png](https://pic.hanjiaming.com.cn/2024/11/20/51a32110cdd6a.png)

::: details 如何理解？

假设我们有一个分布式系统，需要在多个节点之间达成共识，以决定某笔交易是否有效。

系统中有两种设置：

- 一种是由中央银行信任和维护的一组权威机构
- 另一种是去中心化的节点网络。

在第一种设置中，所有权威机构彼此了解，不需要广播或点对点通信渠道即可达成共识。而在第二种设置中，节点网络是非固定的，需要广播渠道和持续的在线通信来达成共识。

- 在已知权威机构设置中，中央银行选择和信任一组权威机构，这些机构彼此了解，可以通过简单的投票机制达成共识。
- 在非固定节点网络设置中，节点网络是动态变化的，需要通过广播渠道和持续的在线通信来共享信息，并通过共识机制（如PoW或PoS）达成一致。

:::

Technical Highlight of RSCoin

- “两阶段提交”共识机制由权威机构维护账本的完整性。
- 两阶段提交是一种分布式计算协议，通常用于确保分布式系统中的所有节点在提交事务时达成一致。
- 在RS币中，权威机构负责执行这一共识机制，以确保账本数据的准确性和完整性。
- 激励机制用于促进权威机构的诚实行为。

<img src="https://pic.hanjiaming.com.cn/2024/11/20/bb0a4ae04d281.png" alt="1732093052948.png" style="zoom:50%;" />

## Central Bank Digital Currency

中央银行数字货币（CBDC）是一种由中央银行发行的数字形式的法定货币。

- CBDC是中央银行货币的数字形式，并且具有法定货币地位，意味着它可以用于支付所有债务。
- CBDC在数字形式上模仿了实物现金的特性，例如便于携带和交易。
- CBDC具备法律认可的货币价值，可以在经济活动中充当交换媒介。
- CBDC通过中央银行的担保，确保了信任和稳定，同时促进了高效和安全的交易。

CBDC的好处包括：

- CBDC可以现代化金融系统，提供创新机会。
- CBDC可以直接实施货币政策，例如调整利率和设定利率走廊。
- CBDC可以通过提高支付效率，增强金融包容性。

CBDC的常见类型包括：

- 批发CBDC是为金融机构设计的，用于银行间交易和结算。
- 零售CBDC是为公众和企业设计的，用于日常支付和交易。

::: warning 数字支付（包括CBDC和加密货币）的普及带来了以下问题

- 货币系统的碎片化，导致不同支付系统之间缺乏统一性。
- 私人货币发行者可能会利用市场力量，影响货币流通。
- 由于变化迅速，难以及时和充分地实施监管。

:::

随着技术的发展和数字支付的普及，越来越多的国家开始探索和研究CBDC，以提高支付系统的效率和安全性。

::: details 分布式账本技术（DLT）和 电子支付系统

分布式账本技术（DLT）

- 分布式账本技术是一种通过网络节点共同维护和更新账本的技术。
- DLT是区块链技术的核心，可以提高数据的透明度和安全性，应用于CBDC的实现。

电子支付系统

- 电子支付系统是指通过电子手段进行资金转移的系统，如移动支付、网上银行等。
- 电子支付系统的发展为CBDC的推广和应用提供了基础和支持。

:::

<div style="overflow-x: auto;">         <table style="border-collapse: collapse; width: 100%;">             <thead>                 <tr>                     <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left; min-width: 150px;">类型</th>                     <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left; min-width: 300px;">价值与支持风险</th>                     <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left; min-width: 300px;">储户保护风险</th>                     <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left; min-width: 300px;">支付风险</th>                     <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left; min-width: 300px;">隐私风险</th>                     <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left; min-width: 300px;">安全与技术风险</th>                     <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left; min-width: 300px;">责任风险</th>                 </tr>             </thead>             <tbody>                 <tr>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 150px;">现金</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">现金由中央银行支持，其价值由国家信用保证。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">N/A</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">欺诈和盗窃风险。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">具有较高的隐私性，除了直接接受者外，其他各方无法获取支付信息。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">存在被伪造的风险。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">责任取决于具体问题，接受者有责任确认现金的合法性。</td>                 </tr>                 <tr>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 150px;">电子货币</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">电子货币的价值依赖于储户保护措施。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">存在两层风险：钱包提供者和存款机构。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">通常受到用户错误保护和借记担保。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">基于账户的隐私风险取决于所在国家的隐私法律。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">相对安全且经过测试。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">银行和钱包提供者负有责任。</td>                 </tr>                 <tr>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 150px;">商业银行货币</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">与电子货币相同。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">具有高度标准化的保护和监管。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">与电子货币相同。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">与电子货币相同。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">与电子货币相同。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">银行负有责任。</td>                 </tr>                 <tr>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 150px;">稳定币</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">支持机制多样，带来不同的风险。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">各不相同；通常没有或有限的储户保护。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">与银行货币或电子货币相当的保护措施有限。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">各不相同；治理系统在隐私方面存在差异，许多机构将隐私义务推给虚拟资产服务提供商（VASPs）。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">各不相同；存在双重支付形式的伪造风险。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">不明确 - 见图5。</td>                 </tr>                 <tr>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 150px;">中央银行数字货币</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">与现金相同。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">N/A</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">风险取决于架构（例如，“推”与“拉”交易）。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">取决于设计和架构（见隐私白皮书）。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">取决于设计和架构。早期试点揭示了对安全标准和防止黑客攻击或漏洞的关注。各不相同；存在双重支付或非法复制CBDC的伪造风险。</td>                     <td style="border: 1px solid #ddd; padding: 8px; min-width: 300px;">中央银行负有责任。</td>                 </tr>             </tbody>         </table>     </div>

### 零售 CBDC 的显着特征

针对零售支付优化的日常交易设计

- 可访问性：旨在广泛公众使用，包括没有银行账户的个人，确保金融包容性
- 可编程性：允许嵌入智能合约
- 隐私和安全：平衡交易透明度与个人数据保护（使用密码学）

 提供支付/金融服务创新的机会

### Basic Design Goals

- 设计一个系统时，需要确保它能够灵活适应这些变化，以保持其有效性和合规性。
  （金融科技领域的发展非常迅速，新技术和新法规不断出现。）
- 金融科技领域的发展非常迅速，新技术和新法规不断出现。
  （与现有金融生态系统的无缝集成。金融系统通常由多个相互连接的部分组成，如银行、支付处理器和交易所。）
- 用户友好的界面。
- 安全且高效的交易处理。

Balancing different aspects, e.g.:

- 经济目标（例如，金融包容性，效率）。
- 技术选择（例如，区块链，数字身份）。

### Architecture Overview

- 为发行、分发和交易中央银行数字货币所需的技术、操作和监管框架。
- 不同利益相关者之间的接口。
- 用于保护CBDC系统安全的协议和基础设施。
- 一些高级技术，用于增强CBDC系统的功能和安全性。
- 在安全性、效率、可扩展性、互操作性和可访问性等方面的要求。

Flexibility Needed by Distribution Models

- 适应性「Adaptability」：适应不断变化的经济条件和科技进步的能力
- 可扩展性「Scalability」：高效处理不同交易量的能力
- 互操作性「Interoperability」：与现有金融基础设施和其他数字货币系统兼容

## CBDC Distribution Models

- Direct Model
- Two-tier (Intermediated) Model 「双层（中介）模型」
- Hybrid Model
- CBDC-Backed E-Money

![1732095917796.png](https://pic.hanjiaming.com.cn/2024/11/20/44b6d80ff9839.png)

### Direct Model

![1732096530500.png](https://pic.hanjiaming.com.cn/2024/11/20/04ceae0aa31df.png)

- 在直接模式下，中央银行是唯一的CBDC账户的发行者和管理者。
- 直接与消费者和企业互动
- 承担传统上由商业银行承担的角色
- 简化货币政策实施

::: info Two-Layer Approach

将央行发行层与由支付服务提供商管理的分发和交易层分离

- 中央银行负责货币的发行，
- 而支付服务提供商负责处理交易和分发货币。

增强系统安全性和弹性：

- 将中央银行的操作与消费者交易隔离开来，可以减少对中央银行操作的直接影响。
- 这种隔离可以防止对基础设施的直接网络威胁。基础设施的安全性是金融系统正常运作的关键。

种结构可以使中央银行更专注于货币政策，而不需要分心处理交易和分发货币的事务。

- Robust infrastructure
- Clear regulatory frameworks
- Effective synchronization mechanisms

:::

### Two-Tier (Intermediated) Model

中央银行将中央银行数字货币（CBDC）发行给商业银行和其他金融机构。

- 中央银行是唯一有权发行CBDC的机构
- 而商业银行和金融机构则负责将这些数字货币分配给最终用户

商业银行和其他金融机构在中央银行的授权下发行CBDC，并负责管理与客户的互动。

这种双层模式在中央银行和私营部门之间平衡了操作负担，利用现有的金融基础设施和客户关系。通过这种方式，

- 中央银行可以专注于货币政策和金融稳定
- 而商业银行和金融机构则负责日常的客户服务和交易处理。

### Hybrid

- 混合CBDC模式在中央银行的监管和私营部门的客户服务和创新能力之间取得平衡。
- 混合CBDC模式结合了直接模式和中介模式的元素。
- 在混合CBDC模式中，中央银行和商业银行共同承担管理CBDC的角色。

### CBDC-Backed E-Money

- 私人实体发行数字货币。
  - 这里的私人实体可以是银行、金融科技公司或其他金融机构。
- 完全由中央银行储备支持。这意味着这些私人实体发行的数字货币有中央银行的储备资产作为担保，确保其价值的稳定性和可信度。
- 功能类似于“稳定币”。这些由私人实体发行的数字货币在功能上与稳定币类似，其价值与某种稳定资产挂钩，以减少价格波动。
- 在设计和操作上提供灵活性。
- 通过创新和灵活性，可能增强隐私和可扩展性。
- 需要严格的监管合规性以确保稳定性和信任。

### Implications

#### Operational Implications

- 直接模型为中央银行提供了直接控制权。然而，直接模型也带来了运营负担。
- 直接模型增加了中央银行的运营复杂性。
- 这种模型需要广泛的客户支持和合规系统。
- 直接模型可能对商业银行产生影响。
  - 直接模型可能增加商业银行被去中介化的风险。

#### Privacy Implications

选择中央化与去中心化技术会影响控制、安全性和弹性。

- 直接模式由于数据的中央化会引起隐私问题。中央银行对个人和企业的交易数据有直接访问权，这可能导致数据泄露风险增加。
- 双层模式可以提供更好的隐私保护，因为数据由多个实体管理，减少了单一的可见性和控制点。
- 隐私保护技术考量与合规监管及反洗钱（AML）需求之间的权衡

#### Macroscopic & Innovation Implications

直接模式可能会影响：

- monetary policy
- financial stability
- banking sector operations「银行业运营」

非直接模式可以促进商业实体之间更多的竞争和创新

## Interoperability w/ Existing Payment Systems

数字货币系统需要在不同的平台、金融机构和国家边界之间无缝工作

1. Adoption of Common Standards
2. Use of Interoperable Blockchain Protocols
   1. Cross-Chain Technologies
   2. DLT-Agnostic Platforms
3. API-Driven Integration
4. Regulatory and Legal Framework Alignment
5. Collaborative Development and Testing Environments
6. Multi-CBDC Arrangements
7. User-Centric Design and Accessibility

## Impact of CBDC on Monetary Policy

CBDC为中央银行提供了新的货币政策工具。

- 包括定向利率「targeted interest rates 」和直接刺激转移「direct stimulus transfers」。
- 通过数字经济增强货币政策传导的潜力。
- 需要仔细考虑和规划。

在不损害金融稳定的情况下评估CBDC的宏观经济影响的挑战。

直接控制的有效性取决于许多因素。

- CBDC在金融系统中的普及和整合程度。
- 许多外部经济和社会因素。
- 超越中央银行控制的理论增强。

::: details Example

假设一个国家的中央银行决定引入零售型CBDC，以提高货币政策的传导效率，并增强对经济的直接控制。

中央银行希望通过CBDC实现更精准的利率调控和直接的经济刺激措施，同时需要考虑其对金融稳定和银行体系的影响。

引入CBDC可以为中央银行提供新的货币政策工具，如定向利率和直接刺激转移，从而更有效地实现经济目标。

1. **设计CBDC**：中央银行首先需要设计一个安全、可靠且易于使用的CBDC系统。需要考虑技术基础设施、网络安全和隐私保护等问题。
2. **试点测试**：在全国范围内推广之前，中央银行可以选择在某些地区进行试点测试，以评估CBDC的实际效果和潜在问题。
3. **公众教育和推广**：通过宣传和教育，提高公众对CBDC的认识和接受度，确保其广泛使用。
4. **政策调整**：根据试点测试和实际使用中的反馈，中央银行可以调整相关政策和技术方案，以优化CBDC的实施效果。
5. **全面推广**：在确保技术和政策准备充分的情况下，中央银行可以在全国范围内全面推广CBDC，并监测其对货币政策和金融稳定的影响。

通过CBDC的引入，中央银行可以更精准地调控利率和实施经济刺激措施。例如，在经济衰退期间，中央银行可以通过CBDC向特定人群发放数字货币，从而迅速刺激消费和经济增长。同时，CBDC的高效传导机制可以提高货币政策的有效性，减少政策滞后效应。

:::

### Basics of Monetary Policy

货币政策是指中央银行通过管理货币供应量和利率来影响经济活动的政策。

中央银行可以通过增加或减少货币供应量以及调整利率来调节经济。

货币政策的目标是控制通货膨胀和确保经济稳定。通过调节货币供应量和利率，中央银行可以影响物价水平和经济增长，防止经济过热或衰退。

货币政策的两个主要传统工具是

- 公开市场操作「Open Market Operations」是指中央银行通过买卖政府证券来扩展或收缩银行系统中的货币量。
  - 当中央银行购买政府证券时，银行系统中的货币量增加；当中央银行出售政府证券时，银行系统中的货币量减少。
- 利率政策「Interest Rate Policy」：利率政策是指中央银行设定基准借贷利率，以影响整个经济的利率水平，从而影响消费者支出和投资。
  - 当中央银行提高基准利率时，借贷成本增加，消费者和企业的支出和投资可能减少；反之亦然。

这两个工具是中央银行调节经济的主要手段。

### CBDCs’ Transmission of Monetary Policy

- 直接影响货币供应量和流通速度：调整流通货币的数量，绕过传统中介机构。
- 可编程货币特性：智能合约可以对持有或交易的货币实施条件，从而实现有针对性的货币政策措施，
  - 例如，有条件的刺激支付/对CBDC持有的负利率，以鼓励经济低迷时期的消费。
  - 如在经济低迷时期，只有在特定条件下才能发放刺激支付，或者对持有的CBDC实施负利率，以鼓励消费者和企业增加支出。
- 改进决策数据：从CBDC交易中获取的实时经济活动“独特”洞察，使政策决策更加响应和明智。

### CBDCs’ Macroeconomic Impacts

宏观经济「Macroeconomic」

- 例如，CBDCs可能会吸引存款从商业银行流出，从而减少商业银行的贷款能力。
- 这可能会破坏传统的货币政策传导机制，因为中央银行通常通过商业银行的贷款活动来影响经济。

通货膨胀控制「Inflation Control:」：

- CBDCs可以使中央银行更有效地实现通胀目标，因为它们可以直接影响货币供应量。
- 但如果管理不当，也可能带来意想不到的后果。
- 因为CBDCs对经济的影响更直接和迅速。

Impact on Financial Stability:

- 银行挤兑发生在大量客户因担心银行会资金枯竭和破产而提取存款时，传统存款向CBDC的轻松转换可能会导致更快的银行挤兑，这对中央银行作为最后贷款人的角色提出了挑战。

Interest Rate Policy Complexity:

- 平衡CBDC利率与传统政策利率可能会非常具有挑战性。
- 如果CBDC利率过高，可能会导致资金从银行流出；如果过低，则缺乏吸引力。
- 可以考虑对CBDC持有的利率设定为负值。这样可以惩罚银行持有过多储备，并激励其进行贷款。

 Cross-Border Flow Concerns:

- CBDC可以促进更便捷的跨境金融流动。这可能会以尚未完全理解的方式影响汇率和货币政策。
- 管理这些流动带来了新的挑战。同时需要维持金融稳定和对国内货币政策的控制。

Technological and Operational Readiness:

- 需要强大的技术基础设施和运营能力。
- 这引发了对网络安全和系统弹性的担忧。也引发了对这些平台有效中央管理的担忧。

### Over-Issuance Prevention

维护货币稳定性和对CBDC系统的信任至关重要

- 过度发行的原因
  - 货币政策决策中的错误
  - 账本同步错误、系统缺陷或恶意活动。

贬值货币，侵蚀对货币系统的信任。

预防措施

- 精心策划、严格监管
- 强大的（跨层）验证机制
- 安全的加密安全措施

## Cross-Border Payments

### Traditional Cross-Border Payments

- 高成本：多个中介和操作效率低下
- 处理时间慢：复杂的验证和对账可能会延迟交易
- 透明度有限：难以追踪支付和获取实时状态
- 法规合规性：遵守不同国际法规使流程复杂化

### Challenges in e-Cross-Border Payments

- 集成问题：不同的标准和技术阻碍了无缝操作。
- 安全风险：增加了遭受网络攻击和欺诈的风险。
- 数字身份验证：确保真实性和合规性在数字化过程中增加了复杂性。

### Regulatory and Legal Considerations

- Consumer protection laws
- Anti-Money Laundering (AML)
- Combating the Financing of Terrorism (CFT) 「打击资助恐怖主义 」
- Legal considerations: 于CBDC发行、使用和跨境交易
- Challenge: 协调「harmonizing」跨司法管辖区的 CBDC 法规

## Cross-Ledger Synchronization

确保不同账本之间的一致性和完整性。

Challenges: 

- 维护交易的完整性。
- 确保一致性：在不同账本中准确表示资产。
- 防止双重支付。
- 保持实时准确性。
- 确保 CBDC 系统与传统金融基础设施之间的无缝互操作性「seamless interoperability」。

## Legal Considerations for CBDC

- 法定货币地位：确保所有债务、费用、税收等的接受。
- 消费者保护法律：保护免受欺诈、盗窃和失败。
- 跨境法律框架：解决CBDC跨境交易中的法律问题，包括司法管辖区和外汇管理。
- 跨司法管辖区协调：简化国际交易的监管。
- 修改现有法律：更新金融法律和法规以整合CBDC，解决银行业务、电子支付和数字身份问题。
- 数据保护和隐私法律：遵守数据保护和隐私标准，专注于个人数据管理。

## Implementing AML/CFT

Identity Verification (Know Your Customer - KYC):

- 确保只有在验证用户身份后才发行CBDC钱包
- 符合由机构（例如金融行动特别工作组）制定的国际标准

可疑活动的交易监控: 为需要额外审查和报告的交易设定阈值

记录保存: 确保数据在法律规定的时间内可供调查使用

报告可疑活动: 建立一个及时向国家和国际机构报告的协议

合规计划: 员工培训、内部控制和审计功能以确保遵守规定

