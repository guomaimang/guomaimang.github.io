---
article: false
date: 2023-02-06
order: 2
headerDepth: 1
---

# Basic Cryptography I

The oxford dictionary defines cryptography「密码学」 as “the art of writing or solving codes”. Originally focuses on the problem of secret communication

它提供了安全机制的基础。

## Basic Concepts

- 密码学：安全通信的艺术/科学
- Cryptography「密码学」: The study of transforming a plaintext into a ciphertext「密文」 and then transforming the ciphertext「密文」 back into the plaintext
- Cryptanalysis「密码分析」: The study of transforming a ciphertext back into the original plaintext **without knowledge of the “key” (a piece of secret information)**

现代密码学是对确保数字信息、交易和分布式计算安全的技术的科学研究。

## The Basic Model

![1675653620401.png](https://pic.hanjiaming.com.cn/2023/02/06/4c6aa368f15e6.png)

## Terminologies

- Cipher: 一种用于执行加密「encryption」或解密「decryption」的算法
- Encipher/Encrypt: the process of converting plaintext to ciphertext using a cipher and a key
- Decipher/Decrypt: the process of converting ciphertext back into plaintext using a cipher and a key

## The Basic Secrecy Channel

The channel can be a communication channel or a storage channel

- 发送方（A 代表 Alice）想通过这个通道向接收方（B 代表 Bob）发送消息 X，这样对手/敌人/入侵者 O（O 代表 Oscar）就无法访问 X
- 爱丽丝对被称为 "明文 "的X应用一种被称为 "加密 "的转换，以产生被称为 "密文"（或密码图）的混乱信息Y。
- Bob 对 Y 应用另一种称为解密的变换，以再次获得 X

::: tip The Role of the Key

- The transformations are not universal, they are key dependent
- 密钥 K 控制转换，只有 Alice 和 Bob 知道。
- The key has to be secret
- 如果一个转换不依赖于一个密钥，它被称为编码「encoding」，反过来的转换被称为解码「decoding」。

:::

## Type of Encryption Schemes

- Symmetric key encryption: 加密密钥和解密密钥是相同的
- Asymmetric key encryption:
  - 加密密钥和解密密钥是不同的
  - Also known as public-key encryption
  - 应用：密钥分发和数字签名

## Classical Ciphers

![1675655746639.png](https://pic.hanjiaming.com.cn/2023/02/06/ed1769b7665cd.png)

Substitution Ciphers
- Caesar
- Monoalphabetic 
- Polyalphabetic
- Playfair
- Autokey

Transposition Ciphers 
- Rail Fence
- Row Transposition

## Substitution Ciphers

明文中的字母被其他字母或数字或符号所取代。

如果明文被看作是一个比特序列，那么替换就是用密码文的比特模式来替换明文的比特模式。

### Caesar Cipher

- 最早的已知替换密码「Substitution Ciphers」，由凯撒大帝提出。
- 首次在军事事务中得到证实
- 每一个字母都由第三个字母代替

```
Example:
 meet me after the toga party
 PHHW PH DIWHU WKH WRJD SDUW
```

<img src="https://pic.hanjiaming.com.cn/2023/02/07/b321d1766a73e.png" alt="1675752449515.png" style="zoom: 50%;" />

### Monoalphabetic Substitution Ciphers

「单字母置换密码」

- Rather than just shifting the alphabet
- 可以任意洗牌的字母
- 每个明文字母都映射到一个不同的随机密文字母

```
Hence key is 26-letter long

Plain: abcdefghijklmnopqrstuvwxyz Cipher: DKVQFIBJWPESCXHTMYAUOLRGZN Plaintext: ifwewishtoreplaceletters Ciphertext: WIRFRWAJUHYFTSDVFSFUUFYA
```

- 为了破译「decipher」，必须知道替换字母。
- 为了找到替换表，可以使用穷举式密钥搜索（蛮力）「exhaustive key search (brute force)」。

尝试每一个密钥来破译密文，并接受产生有意义的明文的密钥。

::: tip Statistical Cryptanalysis

No **classical ciphers** are secure against cryptanalysis「密码分析」.

- 明文语言的统计学特性可用于在一个步骤中取消许多密钥，并使密码分析员能够在不尝试所有密钥的情况下找到密钥
- 字符、二元组（一对连续字母）和三元组（三个连续字母）的频率是密码分析者的重要线索。

```
Frequent bigrams
th,he,in,en,nt,re,er,an,ti,es,on,at,se,nd,or,ar,al,te,co,de,to, ra, et, ed, it, sa, em, ro

Frequent trigrams
the, and, tha, ent, ing, ion, tio, for, nde, has, nce, edt, tis, oft, sth, men
```

频率计数只是实际使用的钥匙的 "线索"。它们取决于要攻击的文本。

可在 https://www.simonsingh.net/The_Black_Chamber/substitutioncrackingtool.html 尝试

这告诉我们

- 密码系统不应允许明文语言的统计特性传递给密码文本。
- 数据属性的存在揭示了数据的信息
- 一个 "好的 "密码系统所产生的密码文本**在统计学上**应该与随机文本没有区别。

:::

### Polyalphabetic Cipher

#### One-Time Pad

- 如果使用一个真正随机的密钥，只要信息被使用，密码将是安全的。
- 换句话说，每个单元的信息都是由一个随机的密钥单元进行加密的

这被称为一次性垫子「One-Time Pad」

- 无法破解，因为密码文本与明文没有统计学上的关系。
- 因为对于任何明文和任何密文来说，都存在一个将一个密文映射到另一个密文的密钥。

Disadvantage: Can only use the key once though -> Have problem of safe distribution of key.

![1675754151199.png](https://pic.hanjiaming.com.cn/2023/02/07/a45a5900ca559.png)

#### Vigenère Cipher

由于一次性垫的实现并不实际，我们寻求设计频率分布更平坦「flatter」的加密方案。

- 使用一个键（有多个字母）来选择信息的每个字母使用哪个字母。
- 依次使用每个字母
- 在达到键的终点后，从头开始重复。

![1675754729300.png](https://pic.hanjiaming.com.cn/2023/02/07/fd4a18ca34b3b.png)

### Playfair Ciphers

1854年由查尔斯-惠斯通发明，但以他的朋友普莱菲尔男爵命名

- To encrypt multiple letters for each operation
- 一个基于关键词的5*5的字母矩阵
- 填入关键词的字母（减去重复的）
- I 和 J 算作同一个字母
- 用其他字母填充矩阵的其余部分

<img src="https://static-file.hirsun.tech/2023/03/04/519c703373ce3.png" alt="1677899002556.png" style="zoom: 33%;" />

<img src="https://static-file.hirsun.tech/2023/03/04/8b8fb83e9b395.png" alt="1677899037709.png" style="zoom:33%;" />

Ref. https://blog.csdn.net/mg2flyingff/article/details/49910887

### Autokey Cipher

理想的情况是，只要有一个密钥，就能让信息

- Vigenère 提出了自动密钥密码
  - 以关键词为前缀的信息为密钥
  - 即信息是密钥的一部分
- 知道钥匙可以恢复字母，而这些字母是恢复后续字母的关键。

```
Example
plaintext: wearediscoveredsaveyourself 
key: deceptivewearediscoveredsav 
ciphertext: ZICVTWQNGKZEIIGASXSTSLVVWLA
```

## Transposition Ciphers

- 通过重新安排字母顺序来隐藏信息，不改变实际使用的字母
- 与原文的频率分布相同

### Rail Fence Ciphers

- 在若干行上斜着写出信息字母
- 然后逐行读出密码文本

<img src="https://pic.hanjiaming.com.cn/2023/02/07/429e7ef7598a7.png" alt="1675756559759.png" style="zoom:33%;" />

### Row Transposition Ciphers

- 在指定的列数上按行写出信息的字母
- 根据钥匙中的编号重新安排列的顺序
- 从上到下读出每一列的字母

<img src="https://pic.hanjiaming.com.cn/2023/02/07/9566d66ed71c8.png" alt="1675757206929.png" style="zoom:50%;" />

## Product

Ciphers using substitutions or transpositions are not secure because of language characteristics

考虑连续使用几个密码器，以增加难度，例如

- two substitutions
- two transpositions
- a substitution followed by a transposition

现代密码使用 product ciphers 的概念，使密码分析变得困难。

