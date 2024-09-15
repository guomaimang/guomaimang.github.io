---
article: true
date: 2023-02-02
order: 1
headerDepth: 1
category:
  - tech
---

# Computer Security

## C.I.A. Triangle

THREE main security goals

- Confidentiality「保密性」
- Integrity「完整性」
- Availability「可用性」

<img src="https://pic.hanjiaming.com.cn/2023/02/02/4383fee8a8262.png" alt="1675319874957.png" style="zoom:33%;" />

### Confidentiality

- Confidentiality is the concealment「掩饰」 of information or resources
- 对信息保密的需求来自于计算机在政府和工业等秘密领域的使用。
- **Access control mechanisms** 支持保密性
  - 例如，密码学「cryptography」 -> 加密技术「encryption techniques」
- Confidentiality 也适用于数据的存在，它有时比数据本身更有启示性
- **Resource hiding** is another important aspect
- Sites wish to conceal「掩饰」 their configuration as well as what systems they are using
- Organisations may not wish unauthorized personnel, both insiders or outsiders, to know about specific equipment they are using
- <u>Assumptions「假设」 and trust「信任」</u> underlie「基础」 confidentiality mechanisms

### Integrity

Integrity refers to the **trustworthiness**「可信程度」 of data or resources, and it is usually phrased in terms of preventing「被表述为」 improper or un-authorized change.

Integrity includes

- 来源的完整性「origin integrity」（数据的来源，通常称为认证「authentication」）
- 数据完整性「data integrity」（信息的内容）

**Integrity mechanisms** fall into two classes:

- Prevention mechanisms: 通过阻止任何未经授权的改变数据的企图或任何以未经授权的方式改变数据的企图，力求保持数据的完整性
- Detection mechanisms: Do not try to prevent violations of integrity; they simply **report** that the data’s integrity is **no longer trustworthy**

Integrity includes both the **correctness** and the **trustworthiness** of the data

- 谁发送/创建的数据？(源头)
- 数据在到达目的地之前被保护得如何？
- 数据在电脑上的保护程度如何？

### Availability

Availability refers to the **ability** to use the information or resource desired.

- 可用性与系统设计的可靠性也有很大关系，因为一个不可用的系统与没有系统一样糟糕。
- 某些人可能故意通过使其不可用来拒绝对数据或资源的访问

试图阻止可用性的做法被称为拒绝服务（DoS）攻击「 denial of service (DoS) attacks」

- DoS攻击难以检测，因为它要求分析人员确定异常的访问模式是否归因于对资源或环境的故意操纵
- 有时，DoS攻击似乎只是一个异常「atypical」事件，或者在某些情况下，它们甚至不是异常的。

## Threat

A threat is a potential violation of security「威胁是对安全的潜在侵犯」

- The violation「侵犯」 need not occur for there to be a threat
- The fact that the violation **MIGHT** occur is a threat

If the actions occur, it is an **attack**

The one who causes the attack to happen is an **attacker/adversary**

::: info Who are Adversaries?

- Career criminals
- Hackers
- Malicious users「恶意用户」
- Careless users

:::

## Terminologies

- Disclosure「泄露」:Unauthorized access to information
- Deception「欺骗」:Acceptance of false data「接受虚假数据」
- Disruption「中断」:Interruption or prevention of correct operatio
- Usurpation「篡夺」:Unauthorized control of some part of a system「未经授权控制一个系统的某些部分」
- Snooping「窥探」:Unauthorized interception of data「未经授权的数据拦截」
- Modification or Alteration「修改或变更」:Unauthorized change of data「未经授权更改数据」
- Masquerading or Spoofing「伪装或欺骗」: Impersonation of「冒名顶替」 one entity by another
- Repudiation of origin「否认原籍」:A false denial that an entity sent or created something「虚假地否认一个实体发送或创造了某种东西」
- Denial of receipt「拒绝收据」:A false denial that an entity received some information or message「虚假地否认一个实体收到某些信息或消息」
- Delay: Temporary inhibition of a service「暂时禁止服务」
- Denial of Service: A long-term inhibition of a service

## Security Service

复制「replicate」与真实世界应用程序相关的安全要求

- 有签名「signatures」和日期
- 需要防止披露「disclosure」、篡改「tampering」或破坏「destruction」 
- 要经过公证「notarized」或见证「witnessed」
- 要有许可证「licensed」

## Security Policy

安全政策「security policy」是关于什么是允许的，什么是不允许的声明。

- Usually described in English as what users are allowed to do. 
  - E.g., All remote access tools or systems that allow communication to ABC Bank resources from the Internet or external partner systems must require multi-factor authentication. Examples include authentication tokens and smart cards that require an additional PIN or password
- Can be highly mathematical
  - E.g., A subject s is allowed read access to an object o if and only if C(s) dominates C(o)

## Security Mechanism

A **security mechanism** is a method, tool, or procedure for enforcing a security policy.「安全机制」是一种执行安全策略的方法、工具或程序。

Can be non-technical. E.g., how can your save your passwords?

Goal of Security Mechanisms: 

- **Prevent** an attack (before it happens)
  - Ideal solution
  - This is where technology should be helping most!
- **Detect** the attack (when it happens)
  - Know what is going on, who is causing it
  - This is really where technology is helping most!
- **Recover** from an attack (as soon as possible)
  - Stop the attack
  - Assess and repair the damage caused

## Assumptions and Trust

Security rests on assumptions

For example, Opening a door lock requires a key -> The assumption: the lock is secure against lock picking

在设计安全机制时，我们倾向于使用 "较弱 "的假设，而不是 "较强 "的假设。例如，我们有两种加密方案

Specification, Design and Implementation「规范、设计和实施」

- 类似于软件（系统）开发
  - 规范「specification」是对（安全）系统所需功能的陈述
  - 设计将规范转化为能够实现它们的组件
  - 实施创造了一个满足设计的系统。
- 如果一个程序的执行情况符合要求，那么它就是正确的

## Security Principles

- 安全机制的构建是基于一些安全原则的
  - 最容易渗透的原则「easiest penetration」
  - 充分保护的原则「Principle of adequate protection」
  - 有效性原则「Principle of effectiveness」
- 这些原则的目的是促进
  - security analysis
    - assessment of effectiveness and efficiency「效果和效率的评估」

### Principle of easiest penetration

- 入侵者「Intruders」会使用任何可用的渗透「penetration」手段
- 这使得对安全的评估变得困难，因为必须对所有可能破坏安全的方式进行审查「examined」
- Security is only as strong as the weakest link in the system「安全性取决于系统中最薄弱的环节」

### Principle of adequate protection

物品只应在其有价值时受到保护，而且保护的程度应与它们的价值相符。->设置保护措施总是有成本的

这是一个非常实用「practical」的原则，是很大一部分现代计算机安全的基础。

### Principle of effectiveness

- Controls must be used properly to be effective
- Controls should be efficient, easy to use and appropriate
- Dilemma「困境」? Cost vs Security?

Case study: 以前，要登录汇丰银行的电子银行服务，除了原始密码外，用户还必须输入一个由物理安全令牌生成的一次性密码。汇丰银行通过使用用户的移动电话和另一个密码/指纹的组合来取代这一信物。

用户可以使用他们的手机和密码/指纹来生成一次性密码。
