---
article: false
date: 2025-04-06
index: true
order: 1
headerDepth: 1
---

# JavaScript

Client-side Languages for User Interface (UI) Design

- Client-side Languages for User Interface (UI) Design
  - Structure and Content - Hypertext Markup Language (HTML)
  - Presentation - Cascading Style Sheet (CSS)
  - Behavior - Javascript (JS) (alternatives? TypeScript? technically JS)
- Javascript: ECMAScript (standardized by ECMA TC39) + APIs + + ...
  - "to help nonprogrammers create dynamic, interactive Web sites"
  - Works also in non-browser environment, e.g., Node.js

Recent advances in Javascript shifts the paradigm of web programming.

## Javascript Basics

管理页面行为，使其具有交互性

```
<script> 标签阻止/延迟后续内容的渲染（async 或 defer 属性？）
外部脚本需要在执行它们之前获取（）
将它们放在 <body> 结束前或 <head> 中（如果不引用 DOM）

（与 CSS 相反）
```

## Detour (to Security)

External JS file, Embedded JS code, Inline JS, which one is preferred?

在选择外部JavaScript文件、内嵌JavaScript代码和行内JavaScript之间时，需要考虑几个因素：性能、调试的便捷性和安全性。让我们逐一分析每个方面：

### Performance

**External JavaScript File**

Pros:

- **Caching:** Browsers can cache external JS files, which reduces load times on subsequent page visits.
- **Parallel Downloads:** Modern browsers can download multiple resources in parallel, improving load times.

Cons

- **Initial Request:** The first time the file is requested, it may add an extra HTTP request, slightly increasing the initial load time.

**Embedded JavaScript Code (within HTML):**

- Pros: **Immediate Execution:** The code is available immediately as the HTML is parsed.
- Cons: **No Caching:** The code cannot be cached separately from the HTML, leading to larger HTML files and potentially slower load times for subsequent visits.

**Inline JavaScript (within HTML elements)**

- Pros:
  - **Immediate Execution:** The code is executed immediately at the point where it appears.
- Cons:
  - **No Caching:** Similar to embedded JS, it cannot be cached separately.
  - **Performance Overhead:** Mixing HTML and JavaScript can lead to larger HTML files and slower parsing.

### Ease of Debugging

**External JavaScript File:**

- Pros:
  - **Separation of Concerns:** Keeps HTML and JavaScript separate, making both easier to read, maintain, and debug.
  - **Source Maps:** Tools like source maps can help in debugging minified or transpiled code.
- Cons:
  - **Context Switching:** May require switching between files during debugging.

**Embedded JavaScript Code:**

- Pros:
  - **Inline Context:** Code is within the HTML file, making it easier to see the relationship between HTML and JavaScript.
- Cons:
  - **Complexity:** Can make the HTML file harder to read and maintain, especially for large scripts.

**Inline JavaScript:**

- Pros:
  - **Immediate Context:** Code is directly associated with the HTML element, making it clear what the code is affecting.
- Cons:
  - **Scalability Issues:** Can become unmanageable and hard to debug in larger applications.

### Security

**External JavaScript File:**

- Pros:
  - **Content Security Policy (CSP):** Easier to enforce CSP rules to mitigate XSS attacks.
  - **Code Review:** Easier to review and audit code in separate files.
- Cons:
  - **External Dependencies:** If hosted externally, could be a security risk if the external source is compromised.

**Embedded JavaScript Code:**

- Pros:
  - **Same-Origin Policy:** Code is served from the same origin, reducing certain risks.
- Cons:
  - **XSS Vulnerability:** More vulnerable to XSS attacks if not properly sanitized.

**Inline JavaScript:**

- Pros: **Immediate Context:** Code is directly tied to specific elements, making it clear what it affects.
- Cons: **High XSS Risk:** Inline scripts are highly vulnerable to XSS attacks, making it harder to enforce CSP.

### Recommendations

- **Performance:** Prefer external JavaScript files for better caching and parallel loading.
- **Ease of Debugging:** External JavaScript files are generally easier to debug due to separation of concerns and better tool support.
- **Security:** External JavaScript files are preferred for better CSP enforcement and reduced XSS risk.

## Content Security Policy (CSP)

- 仅执行这些允许列表 -  ED域中的脚本
- 忽略所有其他脚本: (including inline scripts and event-handling HTML attributes)
- 增加一层安全层（浏览器强制执行）以
  - 有助于检测和减轻某些类型的攻击
  - 特别是，跨站脚本（XSS）和数据注入
- You can configure your web server to turn it on.
- You can also configure it within the <meta> element.

## Variables

- Dynamic Typing - The type changes with its assigned value
- Declaration is optional but highly recommended
  - const: cannot reassign & need initializer; (object assigned to it can )
  - The visible scope depends on how it is declared
- JavaScript中的变量作用域（C语言使用块级作用域）
- 如果习惯了块级作用域，可能会非常困惑！
  - 在函数中使用var声明 - 仅限于该函数（函数作用域）
  - 使用 let, const 在块中声明：块作用域（在花括号内）
  - 声明不使用 var（或 let, const）- 全局变量，即 在 window 下

::: info ===

=== 将检查LHS和RHS是否为相同类型和值 

:::

**functions are objects that can be called**

7 Primitive data types: 

- Boolean
- null
- undefined
- Number (NaN: number value)
- BigInt
- String,
- Symbol + Object

![预览 2025-04-06 11.17.59.png](https://pic.hanjiaming.com.cn/2025/04/06/98d6f412314e3.png)

::: tip  Variables (Coercion)

- Converted to String for "concatenation".
- If you want JavaScript to parse it as Number, use Number()
- What is the output of console. log(value2+value2+value1)? Operator Precedence.

:::

## Functions

Function Declaration Approaches:

```javascript
//Only parameter names are needed, no type info.
function add(param1, param2) { return param1 + param2; }
//Assign a function to a variable
var add = function(param1, param2) { return param1 + param2; }
//"add" a function to an object
window.add = function(param1, param2) { return param1 + param2; }
```

According to function scoping, the first two approaches can become local , while the last one is declaring a global function.

### Anonymous function 

are useful for event listeners (or when assigning a function to a variable):

```javascript
function(param1) // I have no name
{ /* do something here, to be discussed later */ }
```

### Arrow Functions

```javascript
(function (a, b) {// Traditional anonymous function
return a + b + 100;
});
(a, b) => a + b + 100;// Arrow function
const myFunc = (a, b) => {alert(a+b);};
```

### Nested functions (Ref: , )

- the inner function has full access to all variables/functions defined inside the outer function
- the outer functon does not have access to variables/functions defined inside the inne function

```javascript
function sayHiBye(firstName, lastName) { // helper nested function to use below
function getFullName() {
  return firstName + " " + lastName;
}
alert( "Hello," + getFullName() );
alert( "Bye," + getFullName() );
		sayHiBye.f = getFullName();
}
sayHiBye("IEMS", "5718");
sayHiBye.f
```

How to access the function or variable inside? "Property" or inner function.

```javascript
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…
  return function () {
     return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

## Object-Oriented Javascript

Traditionally, object-oriented programming in JS is achieved via functions and prototypes

```javascript
var Person = function(name, sex){
  this.name = name || 'Unnamed';
  this.gender = (sex && sex == 'F') ? 'F' : 'M';
};

Person.prototype.setName = function(name) {return this.name=name};
Person.prototype.getName = function() {return this.name};
Person.prototype.getGender = function() {return this.gender};
```

::: info Introduced in ECMAScript 6 (ES6 or ES2015) in 2015

- Syntax sugar to make coding more convenient, but nothing new
- Its core is still prototype

```javascript
class Person2 {

  constructor(name, sex) {
    this.name = name || 'Unnamed';
    this.gender = (sex && sex =='F') ? 'F' : 'M';
	};

  setName(name) {return this.name=name};
  getName() {return this.name};
	getGender() {return this.gender};
}

p4 = new Person2("Alice", "Female");
console.log(p4);
```

How to tell if it is a public or private property?

Private properties get created by using a hash `#` prefix and cannot be legally referenced outside of the class. 

```javascript
  #privateMethod() {
    // …
  }
```

The private identifier cannot be `#constructor`.

:::

## Questions

### Which of the following lines(s) are incorrect, and why?

```html
<!-- x href, not ref. -->
<a ref="https://www.cuhk.edu.hk/">CUHK</a>

<!-- ✔️ , / in the end is optional in H5 -->
<img src="../ierg/cuhk.png" />

<!-- ✔️ , put in head -->
<link href="styles.css" rel="stylesheet" type="text/css" /> //Place in head or body?

<!-- ✔️ , The closing tag for the <a> element is missing a slash. -->
<li><a href="#b">About Us<a></li>
```

### What will be the color for "Hello" and "World"?



### What is event bubbling and capturing?

In the DOM, events have phases. Capturing is when the event goes from the top (like the window) down to the target element. Then the target phase, and then bubbling, where it goes back up. So capturing is top to bottom, bubbling is bottom to top.

<img src="https://pic.hanjiaming.com.cn/2025/04/07/05e22c18e9749.png" alt="event-flow.png" style="zoom:20%;" />

Event bubbling propagates events from the target element up through ancestors. Capturing (trickling) does the reverse, from ancestors down to the target. Bubbling is default; use `addEventListener`'s capture option (`true`) to handle during capturing. They determine the order parent/child elements receive events.
