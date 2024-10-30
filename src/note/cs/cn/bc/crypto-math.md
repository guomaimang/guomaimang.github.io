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

离散对数问题（DLP）：已知  p、 g  和 g^x mod q ，计算  x 是困难的。这里的破是一个大素数， g 是生成元， g^x mod q 是已知结果， x 是我们需要计算的未知数。由于计算离散对数的复杂性，求解 x 是困难的。

具体来说，如果我们有一个素数 p，和一个生成元  g，以及一个数 y，使得 y=g^x mod  p，那么 x 就是 y 以 g 为底的离散对数。计算离散对数 x  是一个复杂的问题。

DL 假设（假设离散对数问题是困难的）是安全性的必要条件。也就是说，我们假设计算离散对数是非常困难的，这个假设是许多加密算法安全性的基础。

什么是“困难的”？在加密学中，“困难的”通常意味着计算量非常大，以至于在合理的时间内无法计算出结果。

暴力破解（brute-force attack）是一种尝试所有可能的密钥组合以找到正确密钥的方法。在离散对数问题中，暴力破解是不可行的，因为可能的组合数量非常大。

::: details Example

假设我们有一个大素数 p=23，生成元 g=5，和 g^x mod  p= 4。我们需要计算 x。

<img src="https://pic.hanjiaming.com.cn/2024/10/30/57c6b5909b0ea.png" alt="1730281455861.png" style="zoom: 33%;" />

:::

## Definition Notation

对于一个正整数 n 和任意整数 a 和 b。

- a | b 表示 a 能整除 b，即存在一个整数 t，使得 b = ta。
- gcd(a, b) 表示 a 和 b 的最大公约数。例如，gcd(8, 12) = 4。
- 如果 gcd(a, b) = 1，则 a 和 b 互为质数，即 a 和 b 没有其他公约数，除了 1。注意，a 或 b 本身不一定是质数。
- Zₙ 表示模 n 的整数集合，即 {0, 1, 2, ..., n - 1}。这是一个环结构。
- 模运算表示 a 除以 n 的余数。a % n 和 a mod n 都表示这个余数，结果 r 属于 Zₙ。即 n 能整除 (a - r)。
- a ≡ₙ b 表示整数 a 和 b 在模 n 下同余。
- a 和 b 在模 n 下同余的两个等价条件：a % n = b % n；或 n 能整除 (a - b)。
- n 被称为模数。
- 如果模数在上下文中是明确的，可以省略 mod n 或 ≡ₙ 中的 n。

::: info 求最大公约数

给定两个整数 56 和 98，求它们的最大公约数，

1. 分解因数：56 = 2^3 × 7，98 = 2 × 7^2。
2. 找出共同的因数：2 和 7。
3. 取最小次幂：2^1 × 7^1 = 14。

因此，gcd(56, 98) = 14。

:::





