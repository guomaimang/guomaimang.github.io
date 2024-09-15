---
article: false
date: 2021-05-01
---

# Combinational Logic 1

## Digital Logic

### Introduction

Digital Logic 数字逻辑

计算机中的操作基于数字/二进制数据的处理。

<img src="https://pic.hanjiaming.com.cn/2021/02/23/4bf230b6788be.png" alt="CleanShot 2021-02-23 at 21.39.49@2x.png" title="CleanShot 2021-02-23 at 21.39.49@2x.png" />

数字逻辑：分析计算机系统中的离散(discrete)/二进制数据

- 将现实世界的信号(signals)表示为二进制数据
- 对二进制数据进行逻辑运算
- 数字电路(gigital circuit)的设计(implement)和实现：逻辑门(logic gates)，基本组件（加法器「adder」，解码器「decoder」等），电路（circuits）

### Example

现实问题：考虑一个0到9层的电梯，如果您按一个按钮（0-9），则要显示数字，How to implement(实现) this real-world functionality(功能)?

<img src="https://pic.hanjiaming.com.cn/2021/02/23/157ce2a2563dd.png" alt="CleanShot 2021-02-23 at 21.46.58@2x.png" title="CleanShot 2021-02-23 at 21.46.58@2x.png" />

使用组合逻辑实现

<img src="https://pic.hanjiaming.com.cn/2021/02/23/0661de87886d6.png" alt="CleanShot 2021-02-23 at 21.48.05@2x.png" title="CleanShot 2021-02-23 at 21.48.05@2x.png" />

<img src="https://pic.hanjiaming.com.cn/2021/02/23/3fd69df908fcf.png" alt="CleanShot 2021-02-23 at 21.49.09@2x.png" title="CleanShot 2021-02-23 at 21.49.09@2x.png" />

### The Overview

<img src="https://pic.hanjiaming.com.cn/2021/02/23/1979434c89151.png" alt="CleanShot 2021-02-23 at 21.53.53@2x.png" title="CleanShot 2021-02-23 at 21.53.53@2x.png" />

## Boolean Algebra

In working with logic relations in digital form, we need a set of rules for symbolic manipulation which will enable us to simplify complex expressions and solve for unknowns. Originally, Boolean algebra which was formulated by George Boole, an English mathematician (1815-1864) described propositions whose outcome would be either true or false. In computer work it is used in addition to describe circuits whose state can be either 1 (true) or 0 (false).Using the relations defined in the AND, OR and NOT operation......

Boolean Algebra is useful from both aspects(从两个方面来讲)

- implementation (design of digital circuit): given a desired boolean function, Boolean algebra can be applied to develop a simplified implementation of that function「实现（数字电路设计）：给定所需的布尔函数，布尔代数可用于开发该函数的简化实现」
- analysis: Boolean algebra provides an efficient way to describe the function of a digital circuit「分析：布尔代数提供了一种描述数字电路功能的有效方法」

- **P1 : X = 0 or X = 1**
- **P2 : 0 0 = 0**
- **P3 : 1 + 1 = 1**
- **P4 : 0 + 0 = 0**
- **P5 : 1 1 = 1**
- **P6 : 1 0 = 0 1 = 0**
- **P7 : 1 + 0 = 0 + 1 = 1**

### Variables and Logic Operations

A variable may take on the value 1 (True) or 0 (False)

#### Basic logical operations

<img src="https://pic.hanjiaming.com.cn/2021/02/24/d6bd9d1bec107.png" alt="CleanShot 2021-02-24 at 11.12.40@2x.png" title="CleanShot 2021-02-24 at 11.12.40@2x.png" />

**Hirsun的批注：乘号（and）表示且，加号（or）表示或。非且（XAND），非或（NOR）。思想上NOR表示先或再全否**

<img src="https://pic.hanjiaming.com.cn/2021/02/24/666f2bb529cd4.png" alt="CleanShot 2021-02-24 at 11.16.10@2x.png" title="CleanShot 2021-02-24 at 11.16.10@2x.png" />

### Switching Functions

We can use all the logical operations to construct a switching function Z = f (A,B, C, …)

- input takes value 0 or 1, output also takes value 0 or 1 — this is why it’s called “switch”

- switch function defines a mapping from a combination of input values to an output value

example Z = f (A,B); there are four different combinations of input values (0,0), (0,1), (1,0), (1,1) — different way of mapping defines different switching functions

### Truth Table

A truth table defines the mapping from the combination of input values to output

<img src="https://pic.hanjiaming.com.cn/2021/02/24/1c30f24588e96.png" alt="CleanShot 2021-02-24 at 11.40.37@2x.png" title="CleanShot 2021-02-24 at 11.40.37@2x.png" />

Consider switching functions defined over N variables, how many possible switching functions could we have?

That is, how many different truth tables can we construct?

Hint: first check how many rows in the truth table (= number of combinations of input values)

<img src="https://pic.hanjiaming.com.cn/2021/02/24/365b213c51b28.png" alt="CleanShot 2021-02-24 at 11.45.04@2x.png" title="CleanShot 2021-02-24 at 11.45.04@2x.png" />

### Properties

Properties「特性」

#### Basic Postulates — stated without proof

Basic Postulates— stated without proof「公理，无需证明」

- some other properties that could be proved from postulates
- in any case, you can check this properties by truth table

note the difference from ordinary algebra: some are very similar; others are quite different

#### Basic Postulates

The under table provides the basic postulates. Each theorem is described by two parts that are duals of each other.

<img src="https://pic.hanjiaming.com.cn/2021/02/24/a54cc685e5378.png" alt="CleanShot 2021-02-24 at 12.14.18@2x.png" title="CleanShot 2021-02-24 at 12.14.18@2x.png" />

- Commutative law（交换律） implies that the order of the input does not matter (image two wires to a gate)
- Distributive law: similar to algebra, multiplication (AND) has the distributive property over adding (OR); different to algebra, OR has the distributive property over AND — A +BC = (A+B)(A+C)

#### Duality

The **dual** of a Boolean expression is the expression one obtains by interchanging addition and multiplication and interchanging 0's and 1's.「布尔表达式的对偶是通过互换加法和乘法以及互换0和1获得的表达式。」

**If one expression is correct, its dual is also correct**

Example, in the previous table, AB = BA and A+B = B+A

**How to get the dual of an expression?**

- replace AND with OR; replace OR with AND
- replace constant 1 with 0; replace constant 0 with 1
- check duality in the previous table

#### Other Properties

Note the duality in the first and second column (for NOT, there’s no dual operation, thus no duality)

<img src="https://pic.hanjiaming.com.cn/2021/02/24/372d079aec41e.png" alt="CleanShot 2021-02-24 at 12.31.57@2x.png" title="CleanShot 2021-02-24 at 12.31.57@2x.png" />

**De Morgan's Theorem 「德摩根定理」 is important!!!**

<img src="https://pic.hanjiaming.com.cn/2021/03/21/22138a3005dc0.png" alt="image.png" title="image.png" />

- in the first equation, no AND operation (change AND to OR)
- in the second equation, no OR operation (change OR to AND)
- reduce the types of operations — important for implementation
- completeness of functionality — a set of operations (gates) that can be
- used to implement all logical expressions

<img src="https://pic.hanjiaming.com.cn/2021/02/24/e728f67b9a4de.png" alt="CleanShot 2021-02-24 at 12.54.23@2x.png" title="CleanShot 2021-02-24 at 12.54.23@2x.png" />

#### learning meaning

Transform one expression to another form with specific features「将一个表达式转换为具有特定功能的另一种形式」

- Simplification (Absorption theorem「Absorption theorem」 and Consensus Theorem「Consensus Theorem」)
- Contain only certain operations in the expression (DeMorgan’s theorem)
- Easy to implement「表达式中仅包含某些运算（德摩根定理）」

Generally, we call this process as Algebraic Simplification「代数简化」

- different people may have different results
- depending on the purpose, we may need different results

#### Absorption Theorem「吸收定理」

Eg

A (A+B) = A; A+AB = A
no B in the expression — simplified, less input

####  Consensus Theorem 「共识定理」

<img src="https://pic.hanjiaming.com.cn/2021/03/21/7c9217d1d4bd5.png" width = "240px" />

<img src="https://pic.hanjiaming.com.cn/2021/03/21/bc66bf14bfc54.png" alt="image.png" title="image.png" />

simplified, less operations「简化，减少操作」

### Completeness of Functionality

Functionally Complete Sets of Gates

- AND, OR, NOT: self evident
- AND, NOT: question, can OR be expressed by AND and NOT? Yes
- OR, NOT: same as above
- NAND
- NOR

<img src="https://pic.hanjiaming.com.cn/2021/03/21/84da7c228f98c.png" alt="image.png" title="image.png" />

#### Prove (AND, NOT) is a Complete Set of Gates

<img src="https://pic.hanjiaming.com.cn/2021/03/21/e6a62f8438aad.png" alt="image.png" title="image.png" />

#### Prove (NAND) is a Complete Set of Gates

<img src="https://pic.hanjiaming.com.cn/2021/03/21/249c5630ab857.png" alt="image.png" title="image.png" />

#### Use NAND to express A OR B

待补充

#### Show NOR is a complete set of gates

待补充

#### Two Rules of Thumbs

We can write the same logical expression in different forms (algebraic simplification)

There are two general rules

- less operations (gates)

- less types of operations (gates)

There is a trade-off between these two rules「在这两个规则之间需要权衡取舍」

## 附件

### Laws and Theorems of Boolean Algebra

|      |                                                     |      |                             |                     |
| :--: | :-------------------------------------------------: | :--: | :-------------------------: | :-----------------: |
| 1a.  |                      X • 0 = 0                      | 1b.  |          X + 1 = 1          |    Annulment Law    |
| 2a.  |                      X • 1 = X                      | 2b.  |          X + 0 = X          |    Identity Law     |
| 3a.  |                      X • X = X                      | 3b.  |          X + X = X          |   Idempotent Law    |
| 4a.  |                      X • X = 0                      | 4b.  |          X + X = 1          |   Complement Law    |
|  5.  |                        X = X                        |      |                             | Double Negation Law |
| 6a.  |                    X • Y = Y • X                    | 6b.  |        X + Y = Y + X        |   Commutative Law   |
| 7a.  |         X (Y Z) = (X Y) Z = (X Z) Y = X Y Z         |      |                             |   Associative Law   |
| 7b.  | X + (Y + Z) = (X + Y) + Z = (X + Z) + Y = X + Y + Z |      |                             |   Associative Law   |
| 8a.  |               X • (Y + Z) = X Y + X Z               | 8b.  | X + Y Z = (X + Y) • (X + Z) |  Distributive Law   |
| 9a.  |                    X • Y = X + Y                    | 9b.  |        X + Y = X • Y        | de Morgan's Theorem |
| 10a. |                   X • (X + Y) = X                   | 10b. |         X + X Y = X         |   Absorption Law    |
| 11a. |                (X + Y) • (X + Y) = X                | 11b. |        X Y + X Y = X        |   Redundancy Law    |
| 12a. |                  (X + Y) • Y = XY                   | 12b. |       X Y + Y = X + Y       |   Redundancy Law    |
| 13a. |   (X + Y) • (X + Z) • (Y + Z) = (X + Y) • (X + Z)   |      |                             |    Consensus Law    |
| 13b. |             X Y + X Z + Y Z = X Y + X Z             |      |                             |    Consensus Law    |
| 14a. |              X ⊕ Y = (X + Y) • (X + Y)              | 14b. |      X ⊕ Y = X Y + X Y      |      XOR Gate       |
| 15a. |              X ⊙ Y = (X + Y) • (X • Y)              | 15b. |      X ⊙ Y = X Y + X Y      |      XNOR Gate      |
| 15c. |              X ⊙ Y = (X + Y) • (X + Y)              |      |                             |      XNOR Gate      |

## 推荐网站

- https://www.eduhk.hk/has/phys/de/
- https://www.eduhk.hk/has/phys/de/de-ba.htm#introduction
- https://www.cs.fsu.edu/~lacher/courses/MAD3105/lectures/s4_1boolfn.pdf
- https://www.mi.mun.ca/users/cchaulk/misc/boolean.htm


## 引用

- https://www.eduhk.hk/has/phys/de/
- https://www.eduhk.hk/has/phys/de/de-ba.htm#introduction
- https://www.cs.fsu.edu/~lacher/courses/MAD3105/lectures/s4_1boolfn.pdf
- https://www.mi.mun.ca/users/cchaulk/misc/boolean.htm



