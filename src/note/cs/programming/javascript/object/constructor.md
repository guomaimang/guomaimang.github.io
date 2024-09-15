---
article: false
date: 2022-04-29
index: 4
author: javascriptInfo, Hirsun
---

# 构造器

现在我们讨论的不是类，而是对象。之后我们会讨论类这个东西。

我们需要一种可以创建相同或者相似类型对象的操作。

这可以通过函数来实现。

## 构造函数

构造函数在技术上是常规函数。不过有两个约定（自发形成的）：

1. 它们的命名以大写字母开头。
2. 它们只能由 `"new"` 操作符来执行。

如：

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

一个函数被使用 `new` 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 `this`。
2. 函数体执行。通常它会修改 `this`，为其添加新的属性。
3. 返回 `this` 的值。

换句话说，`new User(...)` 做的就是类似的事情：

```javascript
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

所以 `new User("Jack")` 的结果是相同的对象：

```javascript
let user = {
  name: "Jack",
  isAdmin: false
};
```

现在，如果我们想创建其他用户，我们可以调用 `new User("Ann")`，`new User("Alice")` 等。

这是构造器的主要目的 —— 实现可重用的对象创建代码。

## new function() { … }

如果我们有许多行用于创建单个复杂对象的代码，我们可以将它们封装在一个立即调用的构造函数中，像这样：

```javascript
// 创建一个函数并立即使用 new 调用它
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ……用于用户创建的其他代码
  // 也许是复杂的逻辑和语句
  // 局部变量等
};
```

这个构造函数不能被再次调用，因为它不保存在任何地方，只是被创建和调用。因此，这个技巧旨在封装构建单个对象的代码，而无需将来重用。

## 构造器的 return

- 如果 `return` 返回的是一个对象，则返回这个对象，而不是 `this`。
- 如果 `return` 返回的是一个原始类型，则返回`this`。

## 省略括号

顺便说一下，如果没有参数，我们可以省略 `new` 后的括号：

```javascript
let user = new User; // <-- 没有参数
// 等同于
let user = new User();
```

**这是非常不推荐的！！！**

## 构造器中的方法

不仅可以将属性添加到 `this` 中，还可以添加方法。

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

## 总结

- 构造函数，或简称构造器，就是常规函数，但大家对于构造器有个共同的约定，就是其命名首字母要大写。
- 构造函数只能使用 `new` 来调用。这样的调用意味着在开始时创建了空的 `this`，并在最后返回填充了值的 `this`。

我们可以使用构造函数来创建多个类似的对象。

JavaScript 为许多内建的对象提供了构造函数：比如日期 `Date`、集合 `Set` 以及其他我们计划学习的内容。
