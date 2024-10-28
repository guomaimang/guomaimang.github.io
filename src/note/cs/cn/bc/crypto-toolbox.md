---
article: false
date: 2024-10-28
index: true
order: 8
headerDepth: 1

---

# Crypto Toolbox

**Blockchain = {Security, Performance, Decentralization}**

## Topics

- **哈希（Hash）**：哈希函数将输入数据转换为固定长度的哈希值，用于数据校验和加密。
- **认证数据结构/区块链（Authenticated Data Structure / Chain-of-Block）**：通过哈希链将数据块链接在一起，确保数据的完整性和不可篡改性。
- **承诺（Commitment）**：一种加密协议，允许一方在不泄露信息的情况下对某个值进行承诺，稍后再揭示该值。
- **签名（Signatures, e.g., ECDSA）**：数字签名算法如椭圆曲线数字签名算法（ECDSA），用于验证消息的真实性和完整性。
- **公钥密码学（Public-Key Crypto）**：使用公钥和私钥对进行加密和解密，确保数据安全性。
- **椭圆曲线密码学（Elliptic Curve Crypto.）**：利用椭圆曲线数学结构进行加密，提供高效和安全的加密方法。
- **盲签名（Blind Signatures）**：允许信息在未被签名者看到的情况下进行签名，确保隐私。
- **环签名（Ring Signatures）**：允许一组用户中的任意一员代表整个组进行签名，而不透露具体签名者。
- **多重签名（Multi-Sig.）**：需要多方共同签名才能完成交易，提高安全性。
- **后量子密码学（Post-Quantum Crypto., PQC）**：针对量子计算机攻击设计的密码学方法，确保在量子计算时代的信息安全。
- Cryptocurrencies「加墨货币」
  - **Cryptocurrencies: RingCT (Monero), Zerocoin**：用于Monero加密货币，确保交易金额和参与者的隐私。
  - **Zerocoin**：一种加密货币协议，提供匿名交易功能。
- **零知识证明（Zero-Knowledge Proof）**：证明者在不泄露具体信息的情况下，向验证者证明其拥有某个秘密。
- **累加器（Accumulator）**：一种加密结构，允许集合元素的有效证明和验证。
- Overview of Advances in Distributed Consensus「分布式共识」
  - **Distributed Randomness Generation**：生成分布式随机数，用于提高系统安全性和公平性。
  - **Threshold Signature, Publicly-Verifiable Secret-Sharing**：
    - **门限签名（Threshold Signature）**：需要多个签名者共同签名才能生成有效签名。
    - **公开可验证秘密共享（Publicly-Verifiable Secret-Sharing）**：允许公开验证秘密共享的正确性。
  - **Verifiable Random Function**：一种加密函数，生成可验证的随机数，用于提高系统的安全性。

## Crypto/Security Perspectives

- Mint a coin: finding (partial) collision of a hash function「铸造币：寻找（部分）哈希函数的碰撞」
  - 在加密货币中，铸造硬币的过程通常涉及解决一个复杂的计算问题，这个问题的核心是找到一个哈希函数的碰撞。
  - 哈希碰撞是指两个不同的输入产生相同的哈希值。在比特币中，这个过程被称为“挖矿”
- Transfer a coin: certifying the transaction using signature
- Store a coin: record the transaction on “chain of blocks”

### Decentralized

- from the trust perspective: not centralized -> not trusting any party
- better than Chaum’s/traditional cryptographic e-cash under a bank

### Secure

- 尽管加密货币系统提供了较高的安全性，但并不一定完全匿名。
- 交易记录在区块链上是公开的，尽管用户的身份可以通过加密技术进行隐藏，但仍有可能通过交易模式和其他信息进行追踪和识别。

## Cryptography

- From Greek: "kryptos" (secret) and "grapho" (writing)
- 最初，密码学被认为是一种“秘密书写”的艺术
  - 即未授权的人无法读取加密后的信息
  - 同样地，未授权的人也无法生成密文

## Basic Principles/Premises 

- A goal of "modern cryptography" is to reduce trust
  - 传统的安全措施往往依赖于对特定实体或系统的信任
  - 而加密技术通过数学和计算理论提供安全保障，无需过多依赖外部信任。
- ensuring security despite threats
- There're scenarios which you can't ensure security without cryptography.
- **Cryptography ensures security by assuming "some secret knowledge".**
- **The secret is usually a random key, and must not be the algorithm itself.**
- **Compiled code can be reverse-engineered, tamper with, etc.**

## Hash Functions

Functionalities

- take any string as input
- produce fixed-size output (we will use 256 bits)
- efficiently computable (but how? or what is inefficient?)

Security properties

- collision-free
- hiding (or one-way)
- puzzle-friendly

### Collision Resistance

攻击者无法找到两个不同的输入 x和 y 使得它们的哈希值相同 H(x)=H(y) ，因为计算资源是有限的（计算能力受限）。这意味着找到这样的碰撞需要极高的计算资源，实际操作中是不可行的。

- But collisions must exist by definition.
- The real question: how much effort is needed to find them?

### Birthday Paradox

How possible is it to find a collision

1. 计算所有学生生日都不相同的概率。
2. 第一个学生的生日可以是任意一天，所以概率是365/365。
3. 第二个学生的生日必须与第一个学生不同，所以概率是364/365。
4. 第三个学生的生日必须与前两个学生不同，所以概率是363/365。
5. 依此类推，第23个学生的生日必须与前22个学生不同，所以概率是343/365。
6. 所有学生生日都不相同的总概率是： $( \frac{365}{365} \times \frac{364}{365} \times \frac{363}{365} \times \ldots \times \frac{343}{365} )$
7. 计算结果大约为0.4927。
8. 至少有两个人生日相同的概率是：
   \( 1 - 0.4927 = 0.5073 \)

所以在23个学生中，至少有两个人生日相同的概率大约为50.73%。

对于 SHA256 有一种找到碰撞的方法！

- 假设我们有一个哈希函数，其输出空间有 \(N\) 种可能的哈希值（对于256位哈希函数， $(N = 2^{256})$​。我们想要计算在选择 \(k\) 个随机输入后，至少有两个输入产生相同哈希值的概率。

- 有k个输入都不发生碰撞的概率为：$P(\text{无碰撞}) = \frac{N}{N} \times \frac{N-1}{N} \times \frac{N-2}{N} \times \cdots \times \frac{N-(k-1)}{N}$​

- 发生碰撞的概率就是1减去不发生碰撞的概率： 1 - P(无碰撞)

- 对于 \(k = 2^130\) 和 \(N = 2^256\) 的情况，可以用近似公式进行计算：$ P(\text{无碰撞}) \approx e^{-\frac{k^2}{2N}}$​​

- 当 \(k = 2^130\) 和 \(N = 2^256\) 时：

  $[ \frac{k^2}{2N} = \frac{(2^{130})^2}{2 \times 2^{256}} = \frac{2^{260}}{2 \times 2^{256}} = \frac{2^{260}}{2^{257}} = 2^{3} = 8 ]$

- $P(\text{发生碰撞}) \approx 1 - e^{-8} \approx 1 - \frac{1}{e^8} \approx 1 - \frac{1}{2980} \approx 0.9997$

所以 尝试2^130个随机选择的输入，有99.8%的概率，其中两个输入会产生相同的哈希值（即发生碰撞）。

但是，找到碰撞所需的时间太长，以至于在实际应用中并不具有现实意义。

- 对于某些哈希函数H，如果其设计或实现较弱，是有可能找到更快的方法来找到碰撞的。这意味着哈希函数的安全性可能因其具体实现而异。
- 彩虹表和字典攻击是常见的攻击方法，它们通过预计算和查找来尝试找到哈希值对应的原始输入。

