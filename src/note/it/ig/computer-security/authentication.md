---
article: false
date: 2023-02-22
order: 5
headerDepth: 1
---

# Authentication I

- Purpose of Authentication: Binding an identity to a subject (user)
- A user is often required to be authenticated when using computer systems

How to achieve that?

- 一个主体必须提供信息，使计算机系统能够确认其身份
- What can a subject provide?
  - What the subject knows
  - What the subject has
  - What the subject is

上述内容有时被称为认证中的因素「factors」

## Authentication Bases

![1677041811161.png](https://pic.hanjiaming.com.cn/2023/02/22/a4f8d5e39e344.png)

## Evaluation Auth System

- 一些认证系统可能没有100%的准确性
  - 我们衡量 得到错误结果的可能性
  - 不仅在认证系统中有用，而且在入侵检测系统、恶意软件检测系统、垃圾邮件等方面也有用。

False Positive & False Negative

为了衡量一个认证系统的有效性

- False Acceptance Rate (FAR)「错误接受率」
  - 接受不具备其声称身份的主体的概率
  - 错误接受的数量与识别尝试的数量之比
- False Rejection Rate (FRR)「错误拒绝率」
  - 认证尝试导致错误拒绝的比例
  - 错误拒绝的数量与识别尝试的数量之比

::: info Example: Biometric-based Authentication System

确定不同的生物识别特征和一个保存的参考特征的相似性的系统

![1677043212027.png](https://pic.hanjiaming.com.cn/2023/02/22/d90e08ace87d3.png)

生物识别特征的测量以及特征本身都会受到统计波动的影响。因此，每个生物特征识别系统都有一个内置的接受阈值。

- 给定的 FAR 和 FRR 值总是属于同一个阈值
- 随着阈值的增加（即，所需的 Levenshtein 距离变小），FAR 降低但 FRR 增加。
- 存在一个阈值，其中 FAR=FRR，在这种情况下，rate 被称为 Equal Error Rate（EER）「相等错误率」。

根据不同的应用，FAR 或 FRR 可能更重要，因此是需要优化的参数。

:::

## Password-based Auth

一种简单而常见的用户认证方法。很容易实现，但许多人把它描述为最糟糕的方法之一。

### Threats

- Password guessing: 试图猜测网上的密码是很有可能的。
- Password exposure: An “eavesdropper” may see the password when it is typed
- Trojan login program: 这些程序会生成看似真实的登录屏幕
- Poor passwords: 即使密码的长度合适，也可能是字典中的一个词。
  - Various attacks (online/offline) : Dictionary attack, Brute force attack, Hybrid attacks

#### Dictionary attack

- 常见词汇的字典可以作为成套的密码来尝试。
- 攻击者通过字典中的单词，尝试将它们作为密码。
- 这种字典攻击可能不会成功，但速度相当快。

::: tip Tailored Dictionary Attacks 「定制字典攻击」

- 有可能比完整的英语词典更具体，或从其他来源有针对性地进行说明
- 用户可能使用更多的个人信息作为密码

:::

#### Brute Force

- 所有的密码系统都很容易被别人猜中正确的密码。
- 蛮力攻击包括尝试每一个可能的密码，以及更广泛的每一个可能的解决方案
- 与字典攻击不同，暴力攻击总是有效的
  - 重要的因素是，这种猜测在密码的有效期内是不可能的。
  - Tips: Changing passwords periodically

::: tip Choosing Secure Passwords

绝对测试正确密码的时间（以秒为单位）由 N/R 定义，其中

- N = 可能的密码集的大小
- R = 一秒钟内可以测试的密码数

预期时间（或相关随机变量的预期值）= 0.5 * N/R

<img src="https://pic.hanjiaming.com.cn/2023/02/22/d5919721a7285.png" alt="1677044207872.png" style="zoom:40%;" />

:::

#### Hybrid Attacks

基本上，我们使用字典作为基础，但对每个测试的单词采取变体。

We might replace each lower case “L” with 1, or “O” with 0, and so on

混合攻击介于字典攻击和暴力攻击之间，在消耗的时间、尝试的密码数量以及因此成功的机会方面。

### Password Entropy

熵「Entropy」与信息内容、随机性和不确定性有关：The uncertainty that someone thinks about your password. 熵以 bit 为单位

For example,

- If there are two equally likely options, we have 1 bit of entropy
- If there are 4 equally options, we have 2 bits of entropy
- For N equally likely options, the entropy is log<sub>2</sub>N

所以，我们需要一个大熵的密码

<img src="https://pic.hanjiaming.com.cn/2023/02/22/4830bb92af4fa.png" alt="1677044837133.png" style="zoom:40%;" />

### Protective Mechanisms

- 追踪错误的密码尝试
  - 限制每次连接的猜测次数
  - 当超过一个阈值时，锁定账户
  - 发出警报并追踪入侵者
- Process the password slowly, say, 5 seconds: 这对合法用户来说没有什么区别，但它可以减缓任何攻击企图。

<img src="https://pic.hanjiaming.com.cn/2023/02/22/160b0be1f0c2c.png" alt="1677045288873.png" style="zoom:40%;" />

::: info Online vs. Offline

主要区别在于 "猜测 "的数量是否受到限制。

- 如果你能不受限制地猜测，可能值得一试，至少是字典攻击
- 如果你能猜到限制，另一种方法，某种形式的社会工程，可能更有用。
  - To trick someone into revealing a password for a system
  - Further Reading: Social Engineering: The Art of Human Hacking

:::

::: tip Brute Force and the GPU

图形处理单元已被用于大幅提高加密暴力攻击的速度，专为大规模并行操作而设计。

:::

- 系统中的密码列表必须得到很好的保护 -> 备份系统时要注意
- 用户密码不应以明文形式存储,
  - 例如，密码的哈希值被存储在UNIX中
  - 仍然容易受到离线密码猜测的影响，所以文件必须受到物理保护

## How should store PSW

::: tip Hash Functions Revisited

- Hash: 一个数据块的 "固定长度指纹"，其长度可以是任意的。也称为消息摘要
- Hash function: 将数据从任意长度转化为固定的短长度
- Well known hash functions: MD5 and SHA

:::

How should we store password in a system?

A better approach: 储存的是密码的哈希值

| userID| Password|
| ------ | ----------- |
| Alice  | H(pw_Alice) |
| Bob    | H(pw_Bob)   |
| Oscar  | H(pw_Oscar) |

### Password Salt

In UNIX, a salted password is used for hashing

- **“salt”是为计算用户密码的哈希值而生成的随机数**
- 盐也被储存在某个地方，**并假定它不像密码那样保密。**

| userID | Salt | Password hash      |
| ------ | ---- | ------------------- |
| Alice  | 3487 | H(3487\|\|pw_Alice) |
| Bob    | 8254 | H(8254\|\|pw_Bob)   |
| Oscar  | 1098 | H(1098\|\|pw_Oscar) |

即使盐是以明文存储的，也比直接存储密码的哈希值要好。

- 减缓攻击者的速度
- 哈希一次并检查所有用户的哈希值 vs 一次只检查一个用户的哈希值

哈希函数的单向属性：换句话说，没有办法 "解密 "并取回原始密码。

### Case Study – Unix

- 早期版本的 UNIX 将用户标识、散列密码、默认 shell 等存储在一个文件中 -> ` /etc/passwd`
-  新版本的UNIX将 `passwd` 文件分成了两个
  - `/etc/passwd`（除了密码的哈希值以外的所有内容）
  - `/etc/shadow`（用户名和密码的哈希值）
    - 这个文件是受保护的，只有root用户才能访问

不是直接存储密码

- 通过使用密码（前八个字符作为密钥），使用数据加密标准（DES）对64个零位的数据块进行加密，产生一个值。
- 然后用用户的密码对产生的64位密码块再次进行加密；该过程共重复25次。
- 最后的64位使用Base64编码解压成11个可打印字符的字符串
  - 每个可打印的字符6比特
  - 最后4位是附加的零

<img src="https://pic.hanjiaming.com.cn/2023/02/22/7652cc883fb54.png" alt="1677047250226.png" style="zoom:40%;" />

为了提高安全性，使用了一种盐

- 一个12位的数字，在0和4,095之间
- 盐被转换为两个字符的字符串，并在 "加密 "的密码中预加。

| Password | Salt | Encrypted password |
| -------- | ---- | ------------------ |
| nutmeg   | Mi   | MiqkFWCm1fNJI     |
| ellen1   | ri   | ri79KNd7V6.Sk      |
| Sharon   | ./   | ./2aN7ysff3qM      |
| norahs   | am   | amfIADT2iqjAf      |
| norahs   | 7a   | 7azfT5tIdyh0I      |

Attack approaches:

- 通过从`/etc/passwd`获取用户ID进行 "在线 "密码猜测攻击
- 获取root权限复制shadow文件发起离线字典攻击
- Rainbow Table Attack
  - 蛮力攻击的计算量很大
  - 这种方法采用预先计算的查找表来找出哈希值（密码或其等价物）的前像。
  - 内存密集型











