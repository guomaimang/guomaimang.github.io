---
article: false
date: 2024-10-10
index: true
order: 7
headerDepth: 1
---

# Solidity

## EVM

「Ethereum Virtual Machine」

### Runtime environment

以太坊智能合约的运行时环境：EVM是以太坊智能合约的运行时环境，负责执行和管理智能合约。

- Stack-based (1024 depth, 256-bit word), "gas" for operations
  - EVM使用一个深度为1024的堆栈，每个堆栈单元为256位来执行操作。
  - 操作的"燃料"：每个操作都需要消耗一定量的Gas，以防止资源滥用。
- Consistently execute「持续执行」 across the Ethereum nodes
  EVM确保智能合约在所有以太坊节点上以一致的方式执行，保持网络一致性。
- Updates old state with new transactions「用新交易更新旧状态」
  每次交易都会引起状态的更新，EVM负责执行交易并更新全网的状态。
- EVM有多种实现方式，如 geth（Go语言）、Py-EVM（Python）、evmone（C++）和 ethereumjs-vm（JavaScript）。

### Life Cycle

智能合约生命周期（与比特币中的 UTXO 相比）: 智能合约有其生命周期，包括创建、执行和完成。

- Creation: deploy the contract (e.g., coinbase -> some address) 
  「部署合约（例如，从coinbase地址到某个地址）」
- Execute: Evaluates the calls to the contract (e.g., witness to spend a UTXO)
  「评估对合约的调用（例如，见证花费一个UTXO）」
- Confirm a change has made
  「确认已进行的更改」
- A contract can "SELFDESTRUCT" if set (cannot be called, but past data remain)
  「如果设置，合约可以"自毁"（不能被调用，但过去的数据仍然保留）」

### EVM Structure

![1728612780496.png](https://pic.hanjiaming.com.cn/2024/10/11/a5227d9a9f815.png)

#### 世界状态（World State）

- **World state σt 和 σt+1**: 这是以太坊区块链在不同时间点的状态。每个状态包含多个账户，每个账户有自己的状态信息。
- **Address N**: 这是账户的地址。
- **Account state N**: 这是账户的状态，包括账户的代码和存储。
- **Code**: 账户的代码，通常是智能合约代码。
- **Storage**: 账户的存储，是一个持久化的键值存储。

#### 交易和消息调用

- Input data: 这是交易或消息调用的输入数据，它会影响到EVM的执行。
- **从 σt  到 σt+1 **: 交易或消息调用会导致世界状态从 σt 变化到 σt+1。

#### 以太坊虚拟机

- **EVM**: 以太坊虚拟机负责执行智能合约代码。EVM接收输入数据和当前的世界状态，并执行代码，最终更新世界状态。
- **Virtual ROM**: 虚拟只读存储器，包含不可变的EVM代码。
- **Program counter (PC)**: 程序计数器，指示当前执行到哪一行代码。
- **Gas available (Gas)**: 执行代码时消耗的Gas，用于防止无限循环和滥用资源。
- **Stack**: 堆栈内存，用于临时存储数据。每个堆栈元素是256位，堆栈深度为1024。
- **Memory**: 易失性内存，按字节寻址的线性内存。
- **(Account) storage**: 持久化存储，是256位到256位的键值存储。

#### 状态和存储

- **Machine state μ**: 机器状态，包括程序计数器、Gas、堆栈和内存，这些都是易失性的。
- **World state σ**: 世界状态，是持久化的，包括账户的存储。

#### 数据流和状态更新

- **红色箭头**: 表示数据和状态从世界状态流向EVM，然后EVM执行并更新世界状态。
- **蓝色箭头**: 表示输入数据流向EVM，并参与执行过程。



















## Solidity Language

Solidity是一种面向合约的高级编程语言「A contract-oriented, high-level language」。

- 面向合约意味着它专门用于编写和部署智能合约。
- 高级编程语言意味着它提供了抽象和高级功能，使得编程更加简洁和易于理解。

Solidity代码被编译成以太坊虚拟机（EVM）可以理解的字节码，然后在EVM上运行。EVM是一个图灵完备的虚拟机，负责执行以太坊网络上的智能合约。

- Solidity是一种静态类型语言，这意味着在编译时就需要确定所有变量的类型。
- Yul: language that can be compiled to bytecode for different backends ("Assembly") 
  「Yul：可编译成字节码用于不同后端（"汇编"）的语言」 
  Yul是一种中间语言，可以编译成不同后端的字节码，包括EVM的汇编代码。它为优化和跨平台兼容提供了灵活性。
- Solidity的语法和特性受到了C++、Python和JavaScript的影响。例如，它借鉴了C++的静态类型系统、Python的简洁语法和JavaScript的控制结构。
- Solidity专门设计用于以太坊虚拟机（EVM），确保编写的智能合约能够在EVM上高效运行。
- Solidity是一种面向对象的编程语言，支持类和对象的概念。它支持多重继承、库和复杂的用户定义类型等特性
- Solidity支持多重继承和多态性，允许一个合约继承多个其他合约的特性。它还支持库和复杂的用户定义类型，使得代码复用和模块化更加方便。
- Solidity的控制结构与JavaScript非常相似，包括if、else、while、do、for、break、continue、return、三元运算符（? :）等，但不支持switch和goto语句。

```solidity
pragma solidity ^0.8.26;

contract HelloWorld {
		string public greet = "Hello World!";
}
```

::: details Example

Example 1

我们需要创建一个智能合约，允许用户投票给多个候选人，并且在投票结束后能够统计每个候选人的票数。

- 我们需要一个数据结构来存储候选人和他们的票数。
- 需要一个函数来投票，并确保每个用户只能投票一次。
- 需要一个函数来统计每个候选人的票数。

Solidity作为一种面向合约的语言，非常适合编写这种需要自动执行和不可篡改的投票系统。

```solidity
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }

    mapping(address => bool) public hasVoted;
    Candidate[] public candidates;

    constructor(string[] memory candidateNames) {
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate({
                name: candidateNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(candidateIndex < candidates.length, "Invalid candidate index.");

        hasVoted[msg.sender] = true;
        candidates[candidateIndex].voteCount += 1;
    }

    function getCandidate(uint index) public view returns (string memory name, uint voteCount) {
        require(index < candidates.length, "Invalid candidate index.");
        Candidate storage candidate = candidates[index];
        return (candidate.name, candidate.voteCount);
    }
}
```

Example 2

假设我们要创建一个简单的智能合约，用于记录和修改一个人的姓名和年龄。

- 我们需要一个合约来存储姓名和年龄，这些信息将作为状态变量。
- 我们还需要两个函数：一个用于设置姓名和年龄，另一个用于获取这些信息。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Person {
    // 状态变量
    // private 关键字表示这些变量只能在合约的内部访问，外部无法直接访问这些变量。
    string private name;
    uint private age;

    // 事件
    // 事件是 Solidity 中的一种机制，用于记录日志信息，外部应用程序可以监听这些事件。
    event NameChanged(string newName);
    event AgeChanged(uint newAge);

    // 设置姓名和年龄的函数
    // public 关键字表示这个函数可以被外部调用。
    // 在 Solidity 中，memory 关键字用于指定变量的存储位置。
    // string memory _name 表示该函数接受一个字符串类型的参数 _name，并且该字符串被存储在内存（memory）中。
    // 这是与 storage 相对的，storage 变量是永久存储在区块链上的状态变量。
    function setPerson(string memory _name, uint _age) public {
        name = _name;
        age = _age;
        // 使用 emit 关键字触发 NameChanged 和 AgeChanged 事件，记录姓名和年龄的变化。
        emit NameChanged(_name);
        emit AgeChanged(_age);
    }

    // 获取姓名和年龄的函数
    // view 关键字表示这个函数不会修改合约的状态，只是读取状态变量。
    function getPerson() public view returns (string memory, uint) {
        return (name, age);
    }
}

```

这个合约可以用来存储和更新一个人的姓名和年龄，并在每次更新时记录相应的日志信息。

:::

## Structure

Solidity中的合约类似于面向对象编程（OOP）中的类。

- 类是OOP中的一个核心概念，它是对象的蓝图或模板，定义了对象的属性和行为
- 同样，Solidity中的合约定义了合约的状态变量、函数和其他组件。

每个Solidity合约可以包含以下声明：

- **State Variables（状态变量）**：存储在区块链上的数据。
  - 在 Solidity 中，全局变量也称为状态变量（state variables），它们存储在区块链的状态中。
  - 状态变量在合约的所有函数中都是可见的，并且它们的值会永久存储在区块链上，直到被显式修改。
  - 合约之间的交易导致状态改变
  - 区块链存储每个合约的最新状态
- **Functions（函数）**：执行特定任务的代码块。
- **Function Modifiers（函数修饰符）**：用于修改函数的行为。
- **Events（事件）**：用于在区块链上记录活动。
- **Struct Types（结构体类型）**：自定义数据类型，可以包含多个不同类型的变量。
- **Enum Types（枚举类型）**：定义一组命名常量。

Solidity支持继承，这意味着一个合约可以从另一个合约继承属性和行为。通过继承，可以重用代码并创建更复杂的合约结构。

## Basics

### Constructor and State Variable

构造函数是在合约创建时执行的函数，您可以在其中运行合约的初始化代码。Solidity支持多重继承，因此一个合约可以从多个父合约继承。

```solidity
// 这个合约定义了一个简单的存储结构，使用枚举类型 State 来表示状态，并在合约部署时将状态初始化为 On。
contract SimpleStorage {

    // 这行定义了一个枚举 State，它有两个可能的值：On 和 Off。
    // 枚举是一种数据类型，允许变量有一组预定义的常量值。
		enum State {On, Off}
		
		State public storedData;
		
constructor() {
    storedData = State.On; // default
}

```

### Data Location

数据位置是指在智能合约中数据的存储位置，主要包括 storage、memory和calldata 三种。

- 存储（storage）是默认的数据位置，用于存储状态变量，这些变量在合约的整个生命周期内存在，并且数据存储在链上。
- 内存（memory）是临时的数据存储位置，其生命周期仅限于外部函数调用期间，数据不会存储在链上。
- 调用数据（calldata）与内存相似，但不可修改，存储在“特殊位置”，主要用于存储函数参数（例如，外部调用时），数据不会存储在链上。

Assignment behavior

赋值行为是指在不同数据位置之间进行数据赋值时的具体操作方式。

- Storage <> memory (or <- calldata): 会创建数据的副本，而不是引用
- memory -> memory : 赋值的是引用，而不是创建副本
- storage -> local storage (in a function) 

在其他情况下，赋值到存储位置时会创建数据的副本。

#### 状态变量

- **默认存储位置是 `storage`**
- 合约中的 `name` 和 `age` 状态变量默认存储在 `storage` 中，因为它们是合约的一部分

#### 函数参数

对于引用类型（如 `string`、`bytes`、`struct`、`array`），必须明确指定 `memory` 或 `calldata`，否则编译器会报错。

在函数参数中，如果没有指定存储位置，编译器会报错。例如，如果你省略 `memory`，如下代码将无法编译。

```
function setPerson(string _name, uint _age) public {
    // 编译器会报错，因为 _name 的存储位置未指定
}
```

#### 局部变量

对于引用类型的局部变量，默认存储位置是 `storage`，但这通常不是你想要的。你通常会希望它们存储在 `memory` 中。

```
function example() public {
    string memory localString = "Hello";
    // localString 被存储在内存中
}
```



















