---
article: false
date: 2024-10-10
index: true
order: 5
headerDepth: 1

---

# BTC Smart Contract

## How Bitcoin works

Digital Signature

- Public key pk, and Private Key sk (need to kept secret)
- Signing a transaction with sk, **verify with pk** 
  - 私钥签名，公钥验证
  - 这意味着只有拥有私钥的人才能发送有效的交易。这确保了交易的真实性和发送方的身份。
- Transactions and UTXO
- Consensus: Proof of work

## Wallet

### Wallet for Managing Keys

- Public key can be used as the receipt address
- Private key is needed to spend (send) a coin to an address
  「私钥是花费（发送）加密货币到一个地址所需的。」
  私钥是一串字符，必须保密，用于签署交易并发送加密货币。
- ownership of a coin
  - 拥有私钥意味着拥有该加密货币的所有权
  - 只有持有私钥的人才能使用该加密货币。

Private key should be random, long, and kept secret -> difficulty for brute-force/dictionary attack

用户可能需要维护许多地址/密钥。如何安全地存储所有这些？打印/写入并保护它？

 Wallet application: acts like a vault storing private keys

### Wallet Types

- 非确定性「Non - deterministic」：密钥是随机生成的
- Deterministic: A single master key (or called seed) is used to generate new keys
  - 确定性钱包使用一个主密钥或种子来生成一系列相关联的密钥
  - 这样，可以通过一个种子恢复所有相关的密钥。
  - Seeded wallet & Hierarchical Deterministic (HD) 「层次确定性」wallets (BIP-32/44)
    - 种子钱包使用一个种子来生成一系列密钥
    - 而层次确定性钱包则在此基础上增加了层次结构
    - 使得可以生成子密钥和孙密钥。
  - In some client, require to input Mnemonic code「助记词」 (BIP-39)
    - 助记词是一组单词，用于生成种子，从而生成一系列密钥。这些助记词基于BIP-39标准。

假设你有一个HD钱包，并且你想生成多个地址来接收比特币付款，同时确保只需要备份一个种子。

使用HD钱包，你可以从一个种子生成多个地址。这样，即使你生成了成千上万个地址，你也只需要备份一个种子。HD钱包通过一个种子生成多个密钥，简化了备份和恢复过程，确保了安全性和便捷性。

1. **生成种子**：使用HD钱包软件生成一个种子（例如24个助记词）。
2. **生成主密钥**：将种子通过BIP-39算法转换为主密钥。
3. **生成密钥树**：使用BIP-32标准，从主密钥生成一棵密钥树。
4. **生成地址**：从密钥树的不同节点生成多个比特币地址。
5. **备份种子**：将生成的24个助记词妥善保管。

![1728549593237.png](https://pic.hanjiaming.com.cn/2024/10/10/fa6df23c5c15c.png)

## Bitcoin Block

![1728549975724.png](https://pic.hanjiaming.com.cn/2024/10/10/c1015a53cf521.png)

上面展示了比特币区块链中每个区块的结构。每个区块包括两个主要部分：

1. **Block Header（区块头）**：
   - **Hash (Previous Block Header)**：前一个区块头的哈希值，用于链式连接区块。
   - **Timestamp**：区块创建的时间戳。
   - **Nonce**：用于工作量证明（PoW）的随机数，矿工通过调整它来找到满足条件的哈希值。
   - **Hash of Block Data**：区块数据的哈希值，通常是默克尔树的根哈希。
2. **Block Data（区块数据）**：
   - 包含所有交易的列表。

矿工通过调整Nonce、区块数据的哈希值（默克尔树根）和时间戳来找到一个满足PoW条件的哈希值。

![1728550145193.png](https://pic.hanjiaming.com.cn/2024/10/10/0eb72ec7043a4.png)

![1728550183075.png](https://pic.hanjiaming.com.cn/2024/10/10/ca0db05919b92.png)

## Transactions in a Block

Transactions need to be included in a Block

<img src="https://pic.hanjiaming.com.cn/2024/10/10/1e2f252d84b1c.png" alt="1728552404947.png" style="zoom: 67%;" />

这张图展示了区块链中未花费交易输出（UTXO）和已花费交易输出（STXO）的概念，以及它们在不同交易过程中的变化。

图中每个区块链部分代表一个区块，底部的UTXO集合展示了每个区块状态下的UTXO情况。

1. **图例**：
   - 绿色方块：未花费交易输出（UTXO）
   - 红色方块：已花费交易输出（STXO）
2. **区块链部分**：
   - 每个区块链部分表示一个区块，区块内包含一系列交易。
3. **交易过程**：
   - 交易#0：Joe 进行的交易，产生了一个UTXO，属于 Alice。
   - 交易#1：Alice 使用了 Joe 给她的UTXO，产生了一个新的UTXO，属于 Bob。
   - 交易#2：Bob 使用了 Alice 给他的UTXO，产生了两个新的UTXO，一个属于 Gopesh，一个属于 Bob。







