---
article: false
date: 2022-04-29
index: 8
author: javascriptInfo, Hirsun
---

# 函数

我们已经看到了内建函数的示例，如 `alert(message)`、`prompt(message, default)` 和 `confirm(question)`。但我们也可以创建自己的函数。

## 函数的声明

我们已经看到了内建函数的示例，如 `alert(message)`、`prompt(message, default)` 和 `confirm(question)`。但我们也可以创建自己的函数。

```javascript
function name(parameter1, parameter2, ... parameterN) {
  ...body...;
  return xxx;
}
```

## 函数的调用

```javascript
function showMessage(from, text) { // 参数：from 和 text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

> **不要在 `return` 与返回值之间添加新行**
>
> 对于 `return` 的长表达式，可能你会很想将其放在单独一行，如下所示：
>
> ```javascript
> return
>  (some + long + expression + or + whatever * f(a) + f(b))
> ```
>
> 但这不行，因为 JavaScript 默认会在 `return` 之后加上分号。上面这段代码和下面这段代码运行流程相同：
>
> ```javascript
> return;
>  (some + long + expression + or + whatever * f(a) + f(b))
> ```
>
> 因此，实际上它的返回值变成了空值。
>
> 如果我们想要将返回的表达式写成跨多行的形式，那么应该在 `return` 的同一行开始写此表达式。或者至少按照如下的方式放上左括号：
>
> ```javascript
> return (
>   some + long + expression
>   + or +
>   whatever * f(a) + f(b)
>   )
> ```
>
> 然后它就能像我们预想的那样正常运行了。

## 参数默认值

```javascript
// 设置了默认值，如果既没有默认值也没有传递参数则为undefined
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

## 函数表达式

函数实质上是一个object，可以当做一个变量来处理。重申一次：无论函数是如何创建的，函数都是一个值。我们需要注意的是，什么时候是调用函数，什么时候是传递函数的引用。

### 声明

下面的示例在 `sayHi` 变量中存储了一个函数。这里有声明/定义和传递函数的引用。但是没有调用这个函数。

`````javascript
let sayHi = function() {
  alert( "Hello" );
};
// 请注意，function 关键字后面没有函数名。函数表达式允许省略函数名。
`````

```javascript
alert( sayHi ); // 显示函数代码,并不会运行函数，因为 sayHi 后没有括号。
```

> 函数表达式结尾有一个分号 `;`，而函数声明没有：
>
> ```javascript
> function sayHi() {
>   // ...
> }
> 
> let sayHi = function() {
>   // ...
> };
> ```

### 调用

```javascript
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行（为什么不行呢）
```

解释一下上段代码发生的细节：

1. `(1)` 行声明创建了函数，并把它放入到变量 `sayHi`。
2. `(2)` 行将 `sayHi` 复制到了变量 `func`。请注意：`sayHi` 后面没有括号。如果有括号，`func = sayHi()` 会把 `sayHi()` 的调用结果写进`func`，而不是 `sayHi` **函数** 本身。
3. 现在函数可以通过 `sayHi()` 和 `func()` 两种方式进行调用。

所以没有括号的函数引用返回函数本身，有括号的返回函数值。

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
```

`ask` 的两个参数值 `showOk` 和 `showCancel` 可以被称为 **回调函数** 或简称 **回调**。

### 作用域

**严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。**

## 函数的创建时间

JavaScript 引擎会在 **什么时候** 创建函数。

**函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。**

一旦代码执行到赋值表达式 `let sum = function…` 的右侧，此时就会开始创建该函数，并且可以从现在开始使用（分配，调用等）。

函数声明则不同。

**在函数声明被定义之前，它就可以被调用。**

例如，一个全局函数声明对整个脚本来说都是可见的，无论它被写在这个脚本的哪个位置。

这是内部算法的原故。当 JavaScript **准备** 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数。我们可以将其视为“初始化阶段”。

在处理完所有函数声明后，代码才被执行。所以运行时能够使用这些函数。

例如下面的代码会正常工作：

```javascript
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

函数声明 `sayHi` 是在 JavaScript 准备运行脚本时被创建的，在这个脚本的任何位置都可见。

……如果它是一个函数表达式，它就不会工作：

```javascript
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```

函数表达式在代码执行到它时才会被创建。只会发生在 `(*)` 行。为时已晚。

函数声明的另外一个特殊的功能是它们的块级作用域。

## 一句话函数/箭头函数

```javascript
let func = (arg1, arg2, ..., argN) => expression;

let sum = (a, b) => {  
  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; 
  // 如果我们使用了花括号，那么我们必须需要一个显式的 “return”
};
```

这里创建了一个函数 `func`，它接受参数 `arg1..argN`，然后使用参数对右侧的 `expression` 求值并返回其结果。

```javascript
let sum = (a, b) => a + b;
alert( sum(1, 2) ); // 3
```

箭头函数可以像函数表达式一样使用。

例如，动态创建一个函数：

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello'!) :
  () => alert("Greetings!");

welcome();
```

## 总结

函数声明方式如下所示：

```javascript
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- 作为参数传递给函数的值，会被复制到函数的局部变量。
- 函数可以访问外部变量。但它只能从内到外起作用。函数外部的代码看不到函数内的局部变量。
- 函数可以返回值。如果没有返回值，则其返回的结果是 `undefined`。

为了使代码简洁易懂，建议在函数中主要使用局部变量和参数，而不是外部变量。

与不获取参数但将修改外部变量作为副作用的函数相比，获取参数、使用参数并返回结果的函数更容易理解。

函数命名：

- 函数名应该清楚地描述函数的功能。当我们在代码中看到一个函数调用时，一个好的函数名能够让我们马上知道这个函数的功能是什么，会返回什么。
- 一个函数是一个行为，所以函数名通常是动词。
- 目前有许多优秀的函数名前缀，如 `create…`、`show…`、`get…`、`check…` 等等。使用它们来提示函数的作用吧。

- 函数是值。它们可以在代码的任何地方被分配，复制或声明。
- 如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
- 如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
- 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
- 函数表达式在执行流程到达时创建。

在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。

所以，仅当函数声明不适合对应的任务时，才应使用函数表达式。在本章中，我们已经看到了几个例子，以后还会看到更多的例子。

不带花括号：`(...args) => expression` — 右侧是一个表达式：函数计算表达式并返回其结果。如果只有一个参数，则可以省略括号，例如 `n => n*2`。

带花括号：`(...args) => { body }` — 花括号允许我们在函数中编写多个语句，但是我们需要显式地 `return` 来返回一些内容。
