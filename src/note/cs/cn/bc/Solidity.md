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

数据位置是指在智能合约中数据的存储位置，主要包括 storage、memory和calldata 三种。了解区别有助于优化智能合约的性能和成本。

- 存储（storage）是默认的数据位置，用于存储状态变量，这些变量在合约的整个生命周期内存在，并且数据存储在链上。
- 内存（memory）是临时的数据存储位置，其生命周期仅限于外部函数调用期间，数据不会存储在链上。
- 调用数据（calldata）与内存相似，但不可修改，存储在“特殊位置”，主要用于存储函数参数（例如，外部调用时），数据不会存储在链上。

Assignment behavior

赋值行为是指在不同数据位置之间进行数据赋值时的具体操作方式。

**Storage <> memory (or calldata -> memory): 会创建数据的副本，而不是引用**

```solidity
pragma solidity ^0.8.0;

contract Example {
    uint[] public storageArray;

    function storageToMemory() public view returns (uint[] memory) {
        // 从存储到内存，创建副本
        uint[] memory memoryArray = storageArray; 
        return memoryArray;
    }

    function calldataToMemory(uint[] calldata inputArray) public pure returns (uint[] memory) {
        // 从调用数据到内存，创建副本
        uint[] memory memoryArray = inputArray; 
        return memoryArray;
    }
}
```

**memory -> memory : 赋值的是引用，而不是创建副本**

```solidity
pragma solidity ^0.8.0;

contract Example {
    function memoryToMemory() public pure returns (uint[] memory) {
        uint[] memory array1 = new uint[](3);
        array1[0] = 1;
        array1[1] = 2;
        array1[2] = 3;

				// 内存到内存，赋值的是引用
        uint[] memory array2 = array1; 

        array2[0] = 10;

        return array1; // 返回 [10, 2, 3]
    }
}
```

**storage -> local storage (in a function)** 赋值的是引用

```solidity
pragma solidity ^0.8.0;

contract Example {
    uint[] public storageArray;

    function storageToLocalStorage() public {
    		// 存储到局部存储，赋值的是引用
        uint[] storage localStorageArray = storageArray; 

        localStorageArray.push(1);
        localStorageArray.push(2);
        localStorageArray.push(3);
    }

    function getStorageArray() public view returns (uint[] memory) {
        return storageArray; // 返回 [1, 2, 3]
    }
}
```

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

## Types

在编译时需要指定变量的类型（状态变量和局部变量）。

几种基本类型可以组合形成复杂类型。

Value Types

- 布尔型（boolean {true, false}）；操作符：!（非），&&（与），||（或），==（等于），!=（不等于）。
- 整数（例如，int/uint：有符号和无符号整数）
- 地址（20字节值，以太坊地址的大小），可支付
- balance; transfer(); send(); call(), ~~callcode()~~, delegatecall();
- Enum
- user-defined value types (type myType is uint256)
- function, ...

### Fixed-size (byte) arrays

- 固定大小数组的长度在编译时确定，不能在运行时改变。
- **声明方式**：固定大小数组在声明时需要指定长度。例如：
  ```
  uint[10] public fixedArray;
  ```
  

Bytes数组

在 Solidity 中，`bytes` 类型是一种特殊的动态大小数组，用于存储任意长度的字节序列。`bytes` 类型实际上是 `byte[]` 的别名，但它的实现更高效。相对的，`bytes1` 到 `bytes32` 是固定大小的字节数组。

- bytes1, bytes2, ..., bytes32 (x in {1..32}, read-only field: .length = x)
- length, push(); pop() (since 0.5.4)
- 可以通过索引访问数组元素，但不能获取数组的长度，因为长度是已知的固定值

### Dynamically-sized array

- **大小可变**：动态大小数组的长度可以在运行时改变。你可以添加或删除元素。
- **声明方式**：动态大小数组在声明时不需要指定长度。例如：
  ```
  uint[] public dynamicArray;
  ```
- **存储方式**：动态大小数组可以存储在合约的存储（storage）中，也可以存储在内存（memory）中。
-  **访问**：可以通过索引访问数组元素，并且可以获取数组的长度

### Reference Type

Data Location is needed except declared directly under Contract
「除非直接在合约下声明，否则需要数据位置。」

### Mappings

`mapping (KeyType KeyName? => ValueType ValueName?) `  [in Storage only]

- 类似于存储键值对的哈希表（数据位置：存储）。
- key 类型：不允许用户定义或复杂类型，如映射、结构体或数组。
- value 类型可以是任何类型，包括映射。
- 不可迭代，不同于Python/JavaScript/...；但可以实现它。

### Structs

C-like syntax

## Special about Type

在以太坊中，数据类型的选择会影响智能合约之间的交互和Gas的消耗。

- 特别是需要注意内存（memory）和调用数据（calldata）之间的区别。
  - 内存是临时的存储空间，费用较低
  - 而调用数据是只读的，用于函数参数传递，费用也较低。
- 直接将其他编程语言中的算法翻译成Solidity代码可能会遇到问题
  - 因为Solidity有其特定的限制和特性。
  - 例如，Solidity中的运算可能会导致意外的成本增加和错误（如无符号整型的溢出问题）。
- 其他合约也可以预先确定数组的大小。这意味着在设计合约时，可以通过定义固定大小的数组来优化数据存储和传输。
- 与字符串相比，字节（bytes）消耗更少的Gas。因此，在将数据传递给另一个合约时，可以考虑将字符串转换为字节以节省Gas。
- 还有一些类型（如固定点数和无符号固定点数）尚未完全支持。这些类型用于表示具有不同大小的有符号或无符号固定点数。

::: details Example

定义一个函数，将字符串转换为字节：

```solidity
function stringToBytes(string memory str) public pure returns (bytes memory) {
    return bytes(str);
}
```

在合约之间传递字节数据：

```solidity
function sendDataToOtherContract(address contractAddress, string memory name) public {
    bytes memory nameBytes = stringToBytes(name);
    OtherContract(contractAddress).receiveData(nameBytes);
}
```

接收合约中的函数：

```solidity
contract OtherContract {
    function receiveData(bytes memory name) public {
        // 处理接收到的数据
    }
}
```

:::

::: warning Integer Overflow/Underflow

Solidity 可以处理最大256位的数字（最大值为 2^256 -1），因此，如果再增加1，数值将回绕到0。这指的是 Solidity 中的整数类型可以表示的最大值是 2^256 -1，如果超过这个值，数值会回绕到0。

:::

## Functions

Functions are the executable units of code within a contract. 「函数是合约中可执行的代码单元。」

函数调用可以在内部或外部发生，并且对其他合约具有不同的可见性级别。

- 内部调用是指合约内部的函数相互调用，
- 外部调用是指其他合约或外部账户调用合约的函数。

Function modifiers amend the semantics of functions in a declarative way.「函数修饰符以声明方式修改函数的语义。」

- 通过使用修饰符，可以在函数执行前后添加额外的逻辑，例如权限检查。
- say 「例如」, only owner can call, no reentrancy 「例如，只有合约的所有者可以调用该函数，防止重入攻击。」
  - 重入攻击是指攻击者在函数执行过程中反复调用同一函数，导致意外的结果。
- e.g., `onlySeller` in the sample, 在示例中使用了onlySeller修饰符，确保只有卖家可以调用某些函数。

<img src="https://pic.hanjiaming.com.cn/2024/10/11/ff883bd103e77.png" alt="1728638183460.png" style="zoom: 50%;" />

### Function types

`function (<parameter types>) {internal|external} [pure|view|payable] [returns (<return types>)]`

- function types are by default internal:
  - 在Solidity中，如果不指定函数的可见性修饰符，函数默认是internal类型
  - 即只能在当前合约和继承的合约中访问。
- 合约函数默认是 public
  - 在Solidity中，如果不指定函数的可见性修饰符，合约中的函数默认是public类型，
  - 即任何人都可以调用这些函数。
- 可见性总结 「Visibility summary」
  - public 修饰符表示函数可以被任何人调用，包括外部账户和其他合约。
  - external
    - 修饰符表示函数只能被外部账户或其他合约调
    - 不能在当前合约内部调用，直接调用f()是不行的，但可以通过this.f()来调用
  - internal 
    - 修饰符表示函数只能在当前合约和继承该合约的合约中调用
    - 不需要使用this关键字
  - private 修饰符表示函数只能在当前合约中调用，不能在继承的合约中调用。

### Modifiers

函数可以有多种修饰符，主要包括 `pure`、`view`、`payable` 以及没有任何修饰符的普通函数。

#### 没有任何修饰符

如果一个函数既没有被标记为 `pure` 也没有被标记为 `view`，那么它就是一个普通的函数。

- 普通函数既可以读取状态变量，也可以修改状态变量。
- 它们没有任何限制，可以执行任何操作

#### 纯函数 和 视图函数

纯函数（pure）和视图函数（view）是Solidity中的特殊函数类型。

- 纯函数不修改状态变量，也不读取状态变量。
- 视图函数可以读取状态变量，但不能修改它们。

![1728653182481.png](https://pic.hanjiaming.com.cn/2024/10/11/59183e171461f.png)

#### payable

- 可支付函数，可以接收以太币。
- 调用该函数时可以附带以太币。

除了上述修饰符，Solidity 还支持自定义修饰符（modifiers），用于控制函数的访问权限和行为。例如：

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not the contract owner");
    _;
}

function restrictedFunction() public onlyOwner {
    // 只有合约所有者可以调用此函数
}
```

此外，还可以组合 `payable` 与其他修饰符

::: warning 非法组合

`payable view` 和 `payable pure` 是非法的组合，因为 `payable` 函数需要能够修改状态（接受以太币），而 `view` 和 `pure` 函数不能修改状态。

:::

### Function return

可以命名返回变量，例如：`returns(uint256 _n, bool _b, uint256[4] memory _a)`。

其中，

- `_n`是一个无符号256位整数
- `_b`是一个布尔值
- `_a`是一个存储在内存中的包含4个无符号256位整数的数组

自动返回命名的变量。当函数执行完毕时，这些命名的变量会自动作为返回值返回。

return: inside function body to return values

例如，`return(1, false, [uint256(1), 2, 3]);`

## Events

Interfaces with the EVM logging facilities.

- EVM提供了日志记录的功能，允许智能合约在执行过程中生成日志。
- 事件是Solidity中用于触发这些日志的工具。

当事件被调用时，它们会将参数存储在交易的日志中。

- 这个日志是一种特殊的数据结构，存储在区块链上。
- 通过这种方式，事件可以记录智能合约的执行情况，并且这些记录可以被外部应用程序读取和分析。

emit [evt]

- 在Solidity中，`emit`关键字用于触发事件。
- `[evt]`是事件的名称。当事件被触发时，相关的数据会被记录到区块链的日志中。

Notify others

- 事件的主要功能之一是通知其他外部系统或应用程序。
- 通过监听事件，外部应用程序可以实时获取智能合约的状态变化。
- 事件的通知是异步的「asynchronous」。
  - 这意味着事件的触发和处理不会阻塞智能合约的执行。
  - 外部应用程序可以在事件触发后独立地处理事件数据。
- cheap vs. storage：与存储数据相比，使用事件记录日志更加经济。存储数据需要消耗更多的Gas，而记录日志则相对便宜。
- app (with web3.js/ether.js) can listen to the events
  - 部应用程序可以使用Web3.js或Ether.js库来监听事件。
  - 这些库提供了API，允许开发者编写代码来监听和处理智能合约触发的事件。

## Interface

与其他合约进行交互。接口允许一个合约与另一个合约进行通信和交互。

当你**使用**接口调用另一个合约时，括号内通常填入的是目标合约的地址

1. 接口中不包含任何函数的实现。接口只是定义了函数的签名，而不包含具体的实现逻辑。
2. 接口可以继承其他接口。通过继承，接口可以扩展其他接口的功能，形成更复杂的接口结构。
3. 所有声明的函数 in Interface 必须是外部函数。接口中的函数只能从合约外部调用，不能在合约内部调用。
4. 接口不能声明构造函数。构造函数用于初始化合约状态，而接口不包含实现，因此不能有构造函数。
5. 接口不能声明状态变量。状态变量用于存储合约的持久数据，而接口不包含实现，因此不能有状态变量。
6. 接口基本上仅限于合约ABI可以表示的内容。接口定义了合约的外部调用方式，与ABI紧密相关。

::: details Example

假设我们有一个计数器合约（Counter），它包含一个计数函数（count）和一个递增函数（increment）。我们希望通过另一个合约（MyContract）来调用这个计数器合约中的函数。

我们需要定义一个接口（ICounter）来描述计数器合约的函数签名，并在MyContract中使用这个接口来调用计数器合约的函数。

接口允许我们定义合约之间的标准化交互方式，使得 MyContract 可以调用Counter 合约的函数，而不需要知道具体的实现细节。

**定义计数器合约（Counter）**

```solidity
contract Counter {
    uint public count;
    function increment() external {
        count += 1;
    }
}
```

在 Solidity 中，公共状态变量会自动生成一个同名的 getter 函数。因此，`Counter` 合约实际上已经实现了 `count()` 函数，这个函数会返回 `count` 变量的值。

**定义接口（ICounter）**

```solidity
interface ICounter {
    function count() external view returns (uint);
    function increment() external;
}
```

在你的例子中，`ICounter` 接口定义了 `count()` 和 `increment()` 函数的签名，而 `Counter` 合约实现了这些函数：

1. `Counter` 合约实现了 `count` 变量和 `increment` 函数。
2. `ICounter` 接口定义了 `count` 和 `increment` 函数的签名。

**定义 MyContract 并使用接口调用 Counter 合约的函数**

```solidity
contract MyContract {
    function incCounter(address _counter) external {
        ICounter(_counter).increment();
    }

    function getCount(address _counter) external view returns (uint) {
        return ICounter(_counter).count();
    }
}
```

:::

## Inheritance

```solidity
// 合约X包含一个公共字符串变量name，并通过构造函数初始化name。
contract X {
    string public name;
    constructor(string memory _name) {
        name = _name;
    }
}

// 合约Y包含一个公共字符串变量text，并通过构造函数初始化text。
contract Y {
    string public text;
    constructor(string memory _text) {
        text = _text;
    }
}

// 合约A同时继承了合约X和合约Y，并在其构造函数中调用了X和Y的构造函数。
contract A is X, Y {
    constructor() X("X was called") Y("Y was called") {}

```

构造函数的调用顺序是按照声明顺序，从X到Y再到A。

这意味着在合约A的构造函数中，首先调用X的构造函数，然后调用Y的构造函数，最后执行A的构造函数主体。

::: tip  子类重写父类的虚函数

「Child override parents' virtual function」

当一个函数在不同的合约中多次定义时，

- 父合约的搜索顺序是从右到左，
- 并且是深度优先搜索。

:::

## receive()

- `receive()` 函数不能接受任何参数，也不能返回任何值。
- 这是 Solidity 对 `receive()` 函数的严格要求，确保其专用于接收 Ether。
- 在一个智能合约中，最多只能定义一个 `receive()` 函数。这是为了避免混淆和冲突，确保合约能够明确处理接收到的 Ether。
- `receive()` 函数必须具有 `external` 可见性，并且必须标记为 `payable`。这意味着该函数只能从合约外部调用，并且在调用时可以接收 Ether。
  ```
  // 这里不需要使用 function 关键字来定义 receive() 函数
  receive() external payable { ... }
  ```
- 当通过 .send() 或 .transfer() 方法进行简单的 Ether 转账时，receive() 函数会被执行。
  这些方法用于将 Ether 从一个地址转移到另一个地址。
- 如果合约中没有定义 `receive()` 函数，但存在一个 `payable` 的 `fallback` 函数，那么在进行简单的 Ether 转账时，会调用 `fallback` 函数。
  `fallback` 函数是一种默认函数，当调用的函数不存在时会被执行。
- 任何标记为 `payable` 的函数都可以接收 Ether。
  这意味着不仅仅是 `receive()` 函数，其他带有 `payable` 修饰符的函数也可以在调用时接收 Ether。

在下面例子中，`receive()` 函数每次接收到 Ether 时都会更新 `totalReceived` 变量。`msg.value` 是接收到的 Ether 数量。

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleWallet {
    uint public totalReceived;

    // receive() 函数来处理传入的以太
    receive() external payable {
        totalReceived += msg.value;
    }

    // Function to withdraw Ether
    function withdraw() public {
   		payable(msg.sender).transfer(address(this).balance);
    }
}
```

::: warning Some Special Notes of Receiving Ether

- 没有以太币接收功能的合约可以接收以太币
  - 一个没有接收以太币函数的合约仍然可以接收以太币。
  - 作为一个coinbase交易（也称为矿工区块奖励）的接收者。
    - coinbase交易是矿工在挖到区块时获得的奖励
    - 在调用selfdestruct函数时，会将剩余的资金转移到指定的地址。
- 一个合约不能对这些转账作出反应，因此也不能拒绝这些转账。
  - 这是EVM的设计选择。Solidity无法绕过这一点。
- selfdestruct()创建了一个发送以太币的“侧通道”。
  - 使得address(this).balance（合约地址的余额）高于手动记账的余额。
  - 即将被弃用。
- 想象一个基于总资金做出关键决策的合约。

:::

## Special Variables: block, msg & tx

- `gasleft()` 函数返回当前剩余的 Gas 量，以单位`uint256`表示。Gas用于支付执行合约代码的费用。
- `block.blockhash(uint blockNumber)` 函数返回指定区块的哈希值，哈希值以`bytes32`表示。
  - 该函数只能获取最近256个区块的哈希值，不包括当前区块。
- `block.coinbase` 返回当前区块矿工的地址，以 `address` 表示。
- `block.difficulty` 返回当前区块的难度，以`uint`表示。
  - 难度值用于调整生成新区块的难度。
- `block.gaslimit` 返回当前区块的Gas限制，以`uint`表示。
  - Gas限制是单个区块中允许的最大Gas量。
- `block.timestamp` 返回当前区块的时间戳，以`uint`表示。
  - 时间戳是区块生成的时间。
- `msg.data` 包含调用合约时传递的完整数据，以`bytes`表示。
- `msg.sender` 返回发送消息（当前调用）的地址，以`address`表示。
  - 可以是发起交易的用户地址或调用合约的合约地址。
- `msg.sig` 返回调用数据的前四个字节，即函数标识符，以`bytes4`表示。
- `msg.value` 返回消息中发送的以太币数量，以`uint`表示。单位是`wei`，以太坊中最小的货币单位。
- `tx.gasprice` 返回交易的Gas价格，以`uint`表示。Gas价格是每单位Gas的成本。
- `tx.origin` 返回交易的发起者地址，以`address`表示。它是整个调用链的起始地址。

## Fallback Function

一个智能合约可以有且只有一个没有名字的函数，这个函数没有参数也不返回任何值。这个函数通常被称为回退函数（Fallback Function）。

























