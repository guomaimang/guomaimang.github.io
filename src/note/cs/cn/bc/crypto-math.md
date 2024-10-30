---
article: false
date: 2024-10-30
index: true
order: 9
headerDepth: 1


---

# Crypto Math

## Diffie-Hellman Protocol



<img src="https://pic.hanjiaming.com.cn/2024/10/30/0d754202c1fa8.png" alt="Diffie-Hellman_Key_Exchange.svg.png" style="zoom:33%;" />

::: tip

离散对数问题是指在给定一个大质数p和一个基数g的情况下，找到一个整数x，使得g^x ≡ y (mod p)。这个问题被认为在计算上是困难的，Diffie-Hellman协议的安全性正是基于离散对数问题的难度。

:::

Diffie-Hellman协议是公钥加密的“种子”，另一个重要的分支是RSA加密算法。

Example:

Alice和Bob希望在公开的互联网信道上安全地交换一个共享的秘密密钥，以便后续使用对称加密进行安全通信。

在公开信道上交换密钥时，存在被攻击者监听的风险。Diffie-Hellman协议通过数学方法确保即使通信被监听，攻击者也无法得知密钥的具体内容。

1. Alice和Bob选择一个大质数p和基数g，并公开这些值。
2. Alice生成一个随机数a，并计算A = g^a mod p，然后将A发送给Bob。
3. Bob生成一个随机数b，并计算B = g^b mod p，然后将B发送给Alice。
4. Alice计算共享密钥S = B^a mod p。
5. Bob计算共享密钥S = A^b mod p。
6. 因为S = g^(ab) mod p，Alice和Bob得到了相同的共享密钥。

假设p = 23, g = 5。

- Alice选择a = 6，计算A = 5^6 mod 23 = 8。
- Bob选择b = 15，计算B = 5^15 mod 23 = 19。
- Alice计算共享密钥S = 19^6 mod 23 = 2。
- Bob计算共享密钥S = 8^15 mod 23 = 2。
  最终，Alice和Bob得到了相同的共享密钥2。

## Discrete Logarithm Problem

















