---
article: false
date: 2022-04-29
index: 3
author: javascriptInfo, Hirsun

---

# 变量

现在，我们需要知道变量的基础操作有声明，定义和赋值。

js也是分局部不良和全局变量。局部变量无法访问代码块之外的变量。

## 变量

[变量](https://en.wikipedia.org/wiki/Variable_(computer_science)) 是数据的“命名存储”。我们可以使用变量来保存商品、访客和其他信息。

在js中，变量的声明和定义是在一起的，只能进行一次。赋值可以进行多次。声明和赋值可以分开，也可以在一起。我们不妨不变量当做记录**类型**和**值**的一个东西

在 javascript 中创建一个变量，我们需要用到 `let` 或者 `var`(旧式) 关键字。

下面的语句创建（也可以称为 **声明** 或者 **定义**）了一个名称为 “message” 的变量：

```javascript
let message;
```

现在，我们可以通过赋值运算符 `=` 为变量添加一些数据：

```javascript
message = 'Hello'; // 将字符串 'Hello' 保存在名为 message 的变量中
```

现在这个字符串已经保存到与该变量相关联的内存区域了，我们可以通过使用该变量名称访问它：

```javascript
let message = 'Hello!'; // 定义变量，并且赋值
alert(message); // Hello!
```

也可以在一行中声明多个变量：

```javascript
let user = 'John', age = 25, message = 'Hello';
```

看上去代码长度更短，但并不推荐这样。为了更好的可读性，请一行只声明一个变量。

一些程序员采用下面的形式书写多个变量：

```javascript
let user = 'John',
  age = 25,
  message = 'Hello';
```

你也可能发现另一个关键字 `var`，而不是 `let`：

```javascript
var message = 'Hello';
```

`var` 关键字与 `let` **大体** 相同，也用来声明变量，但稍微有些不同，也有点“老派”。

`let` 和 `var` 之间有些微妙的差别，但目前对于我们来说并不重要。我们将会在 info:var 章节中介绍它们。

## 变量命名

javascript 的变量命名有两个限制：

1. 变量名称必须仅包含字母、数字、符号 `$` 和 `_`。
2. 首字符必须非数字。

如果命名包括多个单词，通常采用驼峰式命名法（[camelCase](https://en.wikipedia.org/wiki/CamelCase)）。也就是，单词一个接一个，除了第一个单词，其他的每个单词都以大写字母开头：`myVeryLongName`。

有趣的是，美元符号 `'$'` 和下划线 `'_'` 也可以用于变量命名。它们是正常的符号，就跟字母一样，没有任何特殊的含义。

下面的命名是有效的：

```javascript
let $ = 1; // 使用 "$" 声明一个变量
let _ = 2; // 现在用 "_" 声明一个变量

alert($ + _); // 3
```

## 未采用 `use strict` 下的赋值

一般，我们需要在使用一个变量前定义它。但是在早期，我们可以不使用 `let` 进行变量声明，而可以简单地通过赋值来创建一个变量。现在如果我们不在脚本中使用 `use strict` 声明启用严格模式，这仍然可以正常工作，这是为了保持对旧脚本的兼容。

```javascript
// 注意：这个例子中没有 "use strict"
num = 5; // 如果变量 "num" 不存在，就会被创建
alert(num); // 5
```

上面这是个糟糕的做法，严格模式下会报错。

```javascript
"use strict";
num = 5; // 错误：num 未定义
```

## 常量

声明一个常数（不变）变量，可以使用 `const` 而非 `let`：

```js
const myBirthday = '18.04.1982';
```

使用 `const` 声明的变量称为“常量”。它们不能被修改，如果你尝试修改就会发现报错。初始赋值之后就不会改变。


### 大写形式的常数

一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。

使用大写字母和下划线来命名这些常量。

```js run
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

好处：

- `COLOR_ORANGE` 比 `"#FF7F00"` 更容易记忆。
- 比起 `COLOR_ORANGE` 而言，`"#FF7F00"` 更容易输错。
- 阅读代码时，`COLOR_ORANGE` 比 `#FF7F00` 更易懂。

## 总结

我们可以使用 `var`、`let` 或 `const` 声明变量来存储数据。

- `let` — 现代的变量声明方式。
- `var` — 老旧的变量声明方式。一般情况下，我们不会再使用它。但是，我们会在 <info:var> 章节介绍 `var` 和 `let` 的微妙差别，以防你需要它们。
- `const` — 类似于 `let`，但是变量的值无法被修改。

变量应当以一种容易理解变量内部是什么的方式进行命名。
