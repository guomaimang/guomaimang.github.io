---
article: false
date: 2024-10-10
index: true
order: 5
headerDepth: 1

---

# BTC Transaction

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

- **Public key can be used as the receipt address**
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

::: details 详细过程

每次交易会消耗现有的UTXO（变为STXO），并生成新的UTXO。通过这种方式，区块链能够追踪每个交易输出的状态，确保每个UTXO只能被花费一次，从而保证交易的完整性和防止双花攻击。

1. **初始状态**：
   - 区块链包含交易#0。
   - UTXO 集合：Joe 和 Alice 各有一个UTXO。
2. **交易#1**：
   - Alice 使用 Joe 给她的UTXO（此时 Joe 的UTXO变为STXO）。
   - Alice 创建一个新的UTXO，给 Bob。
   - UTXO 集合：Alice 的UTXO被花费，Bob 新增一个UTXO。
3. **交易#2**：
   - Bob 使用 Alice 给他的UTXO（此时 Alice 的UTXO变为STXO）。
   - Bob 创建了两个新的UTXO，一个给 Gopesh，一个给自己。
   - UTXO 集合：Bob 的UTXO被花费，新增 Gopesh 和 Bob 的UTXO。

:::

## Bitcoin Transaction

Input (vin, “witness”): 输入部分（vin，见证）是指交易的输入端，包含了交易的来源信息。

- Transaction ID：交易ID是指交易的唯一标识符
- scriptSig (unlocking script)：scriptSig是解锁脚本，提供了花费比特币的证据；证明了交易的所有权，包含了签名和公钥。
- sequence：sequence是指交易的序列号，用于交易的排序。

Output (vout, “Spending condition”): 输出部分（vout，花费条件）是指交易的输出端，包含了比特币的接收信息。

- Value and scriptPubKey/pkscript (locking script) [possibly witness]
  输出部分包含了比特币的数额和锁定脚本（scriptPubKey），锁定脚本定义了花费比特币的条件。

- OP_DUP OP_HASH160 `<data>` OP_EQUALVERIFY OP_CHECKSIG

  这是一个典型的锁定脚本，包含了以下操作码：

  - OP_DUP：复制栈顶数据。
  - OP_HASH160：对数据进行哈希运算。
  - `<data>`：哈希值。
  - OP_EQUALVERIFY：比较两个值是否相等。
  - OP_CHECKSIG：验证签名。

- locking script can be unlocked with a valid input (scriptSig)

  - 支出者必须在特定 pk 下提供签名

::: details Example

Alice需要提供一个包含她未花费输出（UTXO）的输入，并创建一个输出，将1个比特币发送到Bob的地址。Alice还需要提供她的签名来证明她拥有这些比特币。

比特币交易需要使用输入和输出结构，解锁和锁定脚本，以及公钥和私钥的签名机制来验证交易的合法性。

1. Alice找到她的一个未花费输出（UTXO），例如，包含2个比特币。
2. Alice创建一个输入，引用这个UTXO，并添加解锁脚本（scriptSig），包含她的签名和公钥。
3. Alice创建一个输出，发送1个比特币到Bob的地址，并添加锁定脚本（scriptPubKey），定义Bob的公钥哈希。
4. Alice广播这个交易到比特币网络。
5. 比特币网络节点验证交易，检查Alice的签名和公钥是否匹配，并确认交易是否合法。
6. 交易被打包进一个区块，并添加到区块链上。
7. Bob收到1个比特币。

:::

锁定脚本（locking script），也叫作scriptPubKey，是附加在输出上的一段脚本，定义了花费该输出所需满足的条件。

解锁脚本（unlocking script），也叫作scriptSig，是附加在输入上的一段脚本，用于满足锁定脚本的条件。

在 P2PKH 交易中，锁定脚本通常如下：

```
OP_DUP OP_HASH160 <PubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

- `OP_DUP`：复制栈顶的元素（即公钥）。
- `OP_HASH160`：对栈顶的元素进行Hash160运算（SHA-256后再进行RIPEMD-160）。
- `<PubKeyHash>`：接收者的公钥哈希值。
- `OP_EQUALVERIFY`：验证两个栈顶的元素是否相等。
- `OP_CHECKSIG`：验证签名是否有效。

解锁脚本通常如下：

```
<Signature> <PublicKey>
```

::: details Example

假设我们有一个P2PKH交易输出，锁定脚本为：

```
OP_DUP OP_HASH160 e00fd363fcc573d2b6d35155b9b9f4784d2119e4 OP_EQUALVERIFY OP_CHECKSIG
```

我们需要提供一个包含有效签名和公钥的解锁脚本，以满足锁定脚本的条件。

这个签名是对交易哈希（transaction hash）进行签名的。交易哈希是通过对交易数据（包括输入、输出、金额等信息）进行哈希运算得到的。

假设签名为`3045022100dff...`（71字节），公钥为`02b463...`（33字节），解锁脚本为：

```
3045022100dff... 02b463...
```

如果解锁脚本中的签名和公钥有效，脚本将成功执行，输出将被解锁。

:::

![1728569602312.png](https://pic.hanjiaming.com.cn/2024/10/10/222e88ff31210.png)

## Bitcoin Script

比特币脚本是一种基于栈的语言，操作码（Opcodes）和数据通过栈进行操作和传递。`Opcodes以[OP_]`开头，数据则用`< data >`表示。比特币脚本不是图灵完备的（Non-Turing Complete），这意味着它的计算能力有限，但这也增加了其安全性。

为了“花费”一个未花费的交易，需要提供解锁条件（ScriptSig）。

- 解锁条件通常包括签名（sig）和公钥（pubkey）。锁定/花费条件在前一个交易中指定（ScriptPubKey），即锁定脚本。
- 栈在执行完脚本后应留下一个“true”值，表示交易验证成功。

输出交易指定了下一个花费条件，即下一个交易的锁定脚本（ScriptPubKey）。

- Pay-to-Public-Key (Hash)：sig是对整个交易哈希的签名。交易签名是由交易的发送方使用其私钥生成的，用于证明交易的真实性和发送方的身份。
- Pay-to-Script-Hash：是一种比特币交易类型，允许用户通过一个哈希值来引用一个复杂的脚本。

## *M*-out-of-*N* Multi-Sig

M-out-of-N多重签名是一种要求M个签名中的任意N个来批准某个操作的机制。例如，如果M=2且N=3，那么需要3个签名中的任意2个来批准操作。

多重签名技术在现实世界中有广泛的应用。例如，企业账户管理、智能合约和多方交易等场景中都可以使用多重签名来提高安全性和透明度。

联合账户是多重签名的一个常见应用。例如，2-out-of-2的模式要求两个持有者都必须签名才能完成交易。这种机制确保了所有相关方的同意。

| 签名类型 | 是否要求固定签名人数                                         | 能否匿名签名者 | 主要用途                 | 备注                                         |
| -------- | ------------------------------------------------------------ | -------------- | ------------------------ | -------------------------------------------- |
| 多重签名 | 否（可以通过一个临时的任意数量的签署者集合来生成多重签名。） | 否             | 增强安全性，防止单点故障 | 通常用于比特币等加密货币交易                 |
| 环签名   | 否（可以动态选择签名人数）                                   | 是             | 隐私保护，匿名交易       | 常见于Monero等隐私币                         |
| 阈值签名 | 否（达到预定阈值即可）                                       | 视具体实现而定 | 分布式系统，去中心化管理 | 常用于分布式密钥管理和加密货币钱包           |
| 群签名   | 否（群成员可变）                                             | 是             | 隐私保护，群体认证       | 适用于需要匿名认证的场景，如电子投票         |
| 盲签名   | 否                                                           | 是             | 隐私保护，电子现金       | 适用于需要隐私保护的数字签名，如电子现金系统 |
