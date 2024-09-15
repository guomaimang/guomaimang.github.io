---
article: false
date: 2022-04-29
index: 4
author: javascriptInfo, Hirsun
---

# 数据类型

在 javascript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）。

**变量是动态类型的，它们可以存储任何类型的数据**。例如，一个变量可以在前一刻是个字符串，下一刻就存储一个数字：

```javascript
// 没有错误
let message = "hello";
message = 123456;
```

允许这种操作的编程语言，例如 javascript，被称为“动态类型”（dynamically typed）的编程语言。

- 原始类型
  - number
  - bigint
  - string
  - boolean
  - null
  - undefined
  - symbol
- 引用类型
  - object
    - function 调用器（方便理解，之后说明）

## Number 类型

*number* 类型代表**整数**和**浮点数**。数字可以有很多操作，比如，乘法 `*`、除法 `/`、加法 `+`、减法 `-` 等等。

除了常规的数字，还包括所谓的“特殊数值（"special numeric values"）”也属于这种类型：`Infinity`、`-Infinity` 和 `NaN`。

- `Infinity` 代表数学概念中的 [无穷大](https://en.wikipedia.org/wiki/Infinity) ∞。是一个比任何数字都大的特殊值。

  我们可以通过除以 0 来得到它：

  ```javascript
  alert( 1 / 0 ); // Infinity
  ```

  或者在代码中直接使用它：

  ```javascript
  alert( Infinity ); // Infinity
  ```

- `NaN` 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：

  ```javascript
  alert( "not a number" / 2 ); // NaN，这样的除法是错误的
  ```

  `NaN` 是粘性的。任何对 `NaN` 的进一步数学运算都会返回 `NaN`：

  ```javascript
  alert( NaN + 1 ); // NaN
  alert( 3 * NaN ); // NaN
  alert( "not a number" / 2 - 1 ); // NaN
  ```

  所以，如果在数学表达式中有一个 `NaN`，会被传播到最终结果（只有一个例外：`NaN ** 0` 结果为 `1`）。

在 javascript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。
脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 `NaN` 的结果。

## BigInt 类型 

在 javascript 中，"number" 类型无法表示大于 `(253-1)`（即 `9007199254740991`），或小于 `-(253-1)` 的整数。

`BigInt` 类型是最近被添加到 javascript 语言中的，用于表示任意长度的整数。

可以通过将 `n` 附加到整数字段的末尾来创建 `BigInt` 值。

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

目前 Firefox/Chrome/Edge/Safari 已经支持 `BigInt` 了，但 IE 还没有。

## String 类型

javascript 中的字符串必须被括在引号里。在 javascript 中，有三种包含字符串的方式。

1. 双引号：`"Hello"`.
2. 单引号：`'Hello'`.
3. 反引号：``Hello``.

反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中，来将它们嵌入到字符串中。例如：

```javascript
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}*` ); // Hello, John!
// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

js 只有一种 `string` 类型，一个字符串可以包含零个（为空）、一个或多个字符。没有`char`

## Boolean 类型

boolean 类型仅包含两个值：`true` 和 `false`。

布尔值也可作为比较的结果：

```javascript
let isGreater = 4 > 1;
```

## "null" 值

特殊的 `null` 值不属于上述任何一种类型。它构成了一个独立的类型，只包含 `null` 值：

```javascript
let age = null;
```

javascript 中的 `null` 不代表引用空引用或者空指针，仅仅是一个代表“无”、“空”或“值未知”的特殊值。

## "undefined" 值

特殊值 `undefined` 和 `null` 一样自成类型。`undefined` 的含义是 `未被赋值`。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`：

```javascript
let age;
alert(age); // 弹出 "undefined"
```

从技术上讲，可以显式地将 `undefined` 赋值给变量：

```javascript
let age = 100;

// 将值修改为 undefined
age = undefined;

alert(age); // "undefined"
```

但是不建议这样做。通常，使用 `null` 将一个“空”或者“未知”的值写入变量中，而 `undefined` 则保留作为未进行初始化的事物的默认初始值。

## object 类型

`object` 类型是一个特殊的类型，也是唯一的一种引用类型。

其他所有的数据类型都被称为“原始类型”。

## symbol 类型

`symbol` 类型用于创建对象的唯一标识符。

## typeof 运算符

`typeof` 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

对 `typeof x` 的调用会以字符串的形式返回数据类型：

```javascript
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
```

最后三行可能需要额外的说明：

1. `Math` 是一个提供数学运算的内建 `object`。我们会在 info:number 一节中学习它。此处仅作为一个 `object` 的示例。
2. `typeof null` 的结果为 `"object"`。这是官方承认的 `typeof` 的错误，这个问题来自于 javascript 语言的早期阶段，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。`null` 有自己的类型，它是一个特殊值。`typeof` 的行为在这里是错误的。
3. `typeof alert` 的结果是 `"function"`，因为 `alert` 在 javascript 语言中是一个函数。我们会在下一章学习函数，那时我们会了解到，在 javascript 语言中没有一个特别的 "function" 类型。函数隶属于 `object` 类型。但是 `typeof` 会对函数区分对待，并返回 `"function"`。这也是来自于 javascript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。

`typeof(x)` 语法" 你可能还会遇到另一种语法：`typeof(x)`。它与 `typeof x` 相同。

简单点说：`typeof` 是一个操作符，不是一个函数。这里的括号不是 `typeof` 的一部分。它是数学运算分组的括号。

有些人更喜欢用 `typeof(x)`，尽管 `typeof x` 语法更为常见。

## 总结

javascript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 `object` 为复杂数据类型）。

- `number` 用于任何类型的数字：整数或浮点数，在 <code>±(2<sup>53</sup>-1)</code> 范围内的整数。
- `bigint` 用于任意长度的整数。
- `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
- `boolean` 用于 `true` 和 `false`。
- `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
- `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
- `symbol` 用于唯一的标识符。
- `object` 用于更复杂的数据结构。

我们可以通过 `typeof` 运算符查看存储在变量中的数据类型。

- 通常用作 `typeof x`，但 `typeof(x)` 也可行。
- 以字符串的形式返回类型名称，例如 `"string"`。
- `typeof null` 会返回 `"object"` —— 这是 javascript 编程语言的一个错误，实际上它并不是一个 `object`。

在接下来的章节中，我们将重点介绍原始类型值，当你掌握了原始数据类型后，我们将继续学习 `object`。
