---
article: false
date: 2022-11-09
order: 1
headerDepth: 1

---

# Compiler Design

## Overview

我们期望学习什么？帮助理解、开发和修改编程语言的编译器的概念。

- 编程语言的语法「Syntax」和语义「semantics」
- 语言翻译「translation」方法
- 编译器的任务
- 编译过程

![1667887187766.png](https://pic.hanjiaming.com.cn/2022/11/08/f9bff78c03d4d.png)

### Lexical Analysis

- 词汇分析「lexical analysis」的任务；
- 通过正则语法「regular grammars 」和正则表达式「regular expressions」指定「specifying」标记「tokens」；
- 通过有限自动机「Finite Automata」（FA）识别标记「recognizing tokens」
- 从正则表达式构建「construction」FA
- 将 NFA 转换为 DFA
- 模拟 DFA

### Syntax Analysis

- 语法分析「syntax analysis」任务
- 通过上下文无关语法「context-free grammars」指定「specifying」语言结构「language constructs」；
- BNF「Backus Naur Form notation」
- 推导「derivation」
- 解析「parse」和语法树「syntax trees」；
- 通过*下推自动机「Pushdown Automata」*识别语言结构；
- 自顶向下「top-down」和自底向上「bottom-up」的解析方法「parsing methods」。

### Code Generation

- 中间「Intermediate」编译阶段「phases」
- 符号表「symbol table」
- 中间「intermediate」代码生成
- 代码优化「optimisation」
- 代码生成「generation」

## Programming Language

![CleanShot 2022-11-08 at 14.02.55@2x.png](https://pic.hanjiaming.com.cn/2022/11/08/74609abb0b5c2.png)

## Compiler or Interpreter

<img src="https://pic.hanjiaming.com.cn/2022/11/08/7cac19f4f3a5a.png" alt="1667892745808.png" style="zoom: 50%;" />

::: tip Finite Automata

In lexical analysis, finite automata「有限自动机」 is used to produce tokens in the form of identifiers, keywords and constants from the input program. In the process of pattern recognition, it used to search keywords by using string-matching algorithms.

The lexical analysis for a modern computer language such as Java needs the power of Finite state automata in a necessary and sufficient sense「必要和充分的意义上」.

:::

## Compiler

### What is a compiler

编译器是一种软件，它采用一种语言（称为源语言）编写的程序并将其翻译成另一种语言（称为目标语言）的另一个（通常等效）程序。

它还报告源程序中的错误（bug）。

<img src="https://pic.hanjiaming.com.cn/2022/11/08/c61c8c4d07b28.png" alt="1667893121753.png" style="zoom: 33%;" />

### Phases of a Compilation

::: tip

- Lexical「词法」
- Syntax「句法」
- Semantic「语义」
- Peephole Optimization「窥孔优化」

:::

<img src="https://pic.hanjiaming.com.cn/2022/11/08/7618876b9de67.png" alt="1667893803291.png" style="zoom: 50%;" />

### Phases and Passes

- Passes：the times going through a program representation.
  - 1-pass, 2-pass, multiple-pass compilation
  - Language become more complex – more passes
- Phases：概念阶段，或编译器的模块
  - Not completely separate
  - 不完全分开：**Semantic phase may do things that syntax should do**

### Symbol Table Management

收集和维护有关 identify「标识符」 的信息。

```
Attributes:

Storage: where to store (data, heap, stack, ...) •Type: char, int, pointer, ...
Scope: effective range
Number: value
```

- Information is added and used by all phases.
- Debuggers use symbol table too.

### Compiler Tools

#### Phases

- Lexical Analysis 
- Syntax Analysis 
- Semantic Analysis 
- Intermediate Code 
- Code Optimization 
- Code Generation

#### Tools

lex, flex yacc, bison

## Lexical Analysis

![1667897612427.png](https://pic.hanjiaming.com.cn/2022/11/08/fc4e45873335e.png)

## Syntax Analysis

一旦标记被识别，语法分析就会将标记的序列归入语言结构。

- 例如，标识符、数字和运算符可以被分组为表达式。
- 例如，关键词、标识符、表达式和运算符可以组合成语句。

**编译器中进行语法分析「syntax analysis」的子模块被称为 解析器「parser」/语法分析器「syntax analyzer」。**

句法分析的结果被记录在称为句法树「syntax tree」的层次结构中。每个节点代表一个操作，其子节点代表该操作的参数。Evaluation begins from bottom and moves up.

```
E.g., parse tree for 
position := initial + rate * 60
```



<img src="https://pic.hanjiaming.com.cn/2022/11/08/d166ca662bc52.png" alt="1667898001464.png" style="zoom:50%;" />

## Semantic Analysis

将语义意义放入语法树：

- 句法分析「syntax analysis」可识别语法事件。
- 语义分析「Semantic Analysis」处理这类事件，例如，类型检查，或触发相应的中间代码生成。

## Intermediate Code Generation

- 生成IR（Intermediate Representation）代码
- 更容易从IR代码生成机器代码。

<img src="https://pic.hanjiaming.com.cn/2022/11/08/5fa9f13c73752.png" alt="1667898202170.png" style="zoom:33%;" />

## Code Optimization

修改程序的表现形式，使程序可以运行得更快，使用更少的内存和功率等。

<img src="https://pic.hanjiaming.com.cn/2022/11/08/c65aa7eca01cb.png" alt="1667898307576.png" style="zoom:33%;" />

## Code Generation

Generate the target program.

<img src="https://pic.hanjiaming.com.cn/2022/11/08/87ab77f587d66.png" alt="1667898338616.png" style="zoom:33%;" />