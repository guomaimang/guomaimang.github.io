---
article: false
date: 2022-04-29
index: 3
author: javascriptInfo, Hirsun
---

# Method

## 创建

```javascript
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
```

### 简写

在对象字面量中，有一种更短的（声明）方法的语法：

```javascript
// 这些对象作用一样
user = {
  sayHi: function() { // 这里的sayHi 不再是string
    alert("Hello");
  }
};

// 方法简写看起来更好，对吧？
let user = {
  sayHi() { // 与 "sayHi: function(){...}" 一样
    alert("Hello");
  }
};
```

如上所示，我们可以省略 `"function"`，只写 `sayHi()`。

说实话，这种表示法还是有些不同。在对象继承方面有一些细微的差别（稍后将会介绍），但目前它们并不重要。在几乎所有的情况下，较短的语法是首选的。

## this

通常，对象方法需要访问对象中存储的信息才能完成其工作。

举个例子：

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" 指的是“当前的对象”
    alert(this.name);
  }

};

user.sayHi(); // John
```

技术上讲，也可以在不使用 `this` 的情况下，通过外部变量名来引用它，但这样的代码是不可靠的。如果我们决定将 `user` 复制给另一个变量，例如 `admin = user`，并赋另外的值给 `user`，那么它将访问到错误的对象。

### this 无限制的使用

JavaScript 中的 `this` 可以用于任何函数，即使它不是对象的方法。

```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// 在两个对象中使用相同的函数
user.f = sayHi;
admin.f = sayHi;
```

`this` 的值是在代码运行时计算出来的，它取决于代码上下文。**在没有对象的情况下调用：**`this == undefined`

> 如果你经常使用其他的编程语言，那么你可能已经习惯了“绑定 `this`”的概念，即在对象中定义的方法总是有指向该对象的 `this`。
>
> 在 JavaScript 中，`this` 是“自由”的，它的值是在调用时计算出来的，它的值并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象。
>
> 在运行时对 `this` 求值的这个概念既有优点也有缺点。一方面，函数可以被重用于不同的对象。另一方面，更大的灵活性造成了更大的出错的可能。
>
> 这里我们的立场并不是要评判编程语言的这个设计是好是坏。而是要了解怎样使用它，如何趋利避害。

### 箭头函数无 this

箭头函数有些特别：它们没有自己的 `this`。如果我们在这样的函数中引用 `this`，`this` 值取决于外部函数。

举个例子，这里的 `arrow()` 使用的 `this` 来自于外部的 `user.sayHi()` 方法：

```javascript
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

这是箭头函数的一个特性，当我们并不想要一个独立的 `this`，反而想从外部上下文中获取时，它很有用。在后面的深入理解箭头函数一章中，我们将深入介绍箭头函数。

## 总结

- 存储在对象属性中的函数被称为“方法”。
- 方法允许对象进行像 `object.doSomething()` 这样的“操作”。
- 方法可以将对象引用为 `this`。

`this` 的值是在程序运行时得到的。

- 一个函数在声明时，可能就使用了 `this`，但是这个 `this` 只有在函数被调用时才会有值。
- 可以在对象之间复制函数。
- 以“方法”的语法调用函数时：`object.method()`，调用过程中的 `this` 值是 `object`。

请注意箭头函数有些特别：它们没有 `this`。在箭头函数内部访问到的 `this` 都是从外部获取的。
