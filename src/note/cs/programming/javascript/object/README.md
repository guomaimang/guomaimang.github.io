---
article: false
date: 2022-04-29
index: 0
author: javascriptInfo, Hirsun
---

# Object

我们可以通过使用带有可选 **属性列表** 的花括号 `{…}` 来创建对象。

一个属性就是一个键值对`（“key: value”）`，

- 其中键（`key`）是一个字符串（也叫做属性名）
- 值（`value`）可以是任何值。

在js中，对象中没有变量一说，只有像字典一样的key-value。

## 创建

我们可以用下面两种语法中的任一种来创建一个空的对象。通常，我们用花括号。这种方式我们叫做**字面量**。

```javascript
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
```

## 属性

我们可以在创建对象的时候，立即将一些属性以键值对的形式放到 `{...}` 中。

```javascript
let user = {     // 一个对象
  name: "John",  // 键 "name"，值 "John"
  age: 30        // 键 "age"，值 30
};

// 读取文件的属性：
alert( user.name ); // John
alert( user.age ); // 30
```

属性名可以是任何**字符串**或者 **symbol**（一种特殊的标志符类型，将在后面介绍）。**其他类型会被自动地转换为字符串。**这是我们需要注意的地方，属性不是变量，我们不妨把它当做字典的key和value。即使key我们有时候省略了引号。

在 `user` 对象中，有两个属性：

1. 第一个的键是 `"name"`，值是 `"John"`。
2. 第二个的键是 `"age"`，值是 `30`。

属性的值可以是任意类型，让我们加个布尔类型：

```javascript
user.isAdmin = true;
```

我们可以用 `delete` 操作符移除属性：

```javascript
delete user.age;
```

我们也可以用多字词语来作为属性名，但必须给它们加上引号：

```javascript
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // 多词属性名必须加引号
};
```

列表中的最后一个属性应以逗号结尾：

```javascript
let user = {
  name: "John",
  age: 30,
}
```

这叫做尾随（trailing）或悬挂（hanging）逗号。这样便于我们添加、删除和移动属性，因为所有的行都是相似的。

### 使用方括号

对于多词属性，点操作就不能用了：

```javascript
// 这将提示有语法错误
user.likes birds = true
```

点符号要求 `key` 是有效的变量标识符。这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 `$` 和 `_`）。

有另一种方法，就是使用方括号，可用于任何字符串：

```javascript
let user = {};

// 设置
user["likes birds"] = true;

// 读取
alert(user["likes birds"]); // true

// 删除
delete user["likes birds"];
```

请注意方括号中的字符串要放在引号中，单引号或双引号都可以。

```javascript
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// 访问变量
// 支持自动创建
alert( user[key] ); // John（如果输入 "name"）
```

点符号不能以类似的方式使用：

```javascript
let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
```

当创建一个对象时，我们可以在对象字面量中使用方括号。这叫做 **计算属性**。

例如：

```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert( bag.apple ); // 5 如果 fruit="apple"
```

计算属性的含义很简单：`[fruit]` 含义是属性名应该从 `fruit` 变量中获取。

所以，如果一个用户输入 `"apple"`，`bag` 将变为 `{apple: 5}`。

我们可以在方括号中使用更复杂的表达式：

```javascript
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

### 属性值简写

在实际开发中，我们通常用已存在的变量当做属性名。

例如：

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ……其他的属性
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

在上面的例子中，属性名跟变量名一样。这种通过变量生成属性的应用场景很常见，在这有一种特殊的 **属性值缩写** 方法，使属性名变得更短。

可以用 `name` 来代替 `name:name` 像下面那样：

```javascript
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,  // 与 age: age 相同
    // ...
  };
}
```

我们可以把属性名简写方式和正常方式混用：

```javascript
let user = {
  name,  // 与 name:name 相同
  age: 30
};
```

### 属性名称限制

我们已经知道，变量名不能是编程语言的某个保留字，如 “for”、“let”、“return” 等……

但对象的属性名并不受此限制：

```javascript
// 这些属性都没问题
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
```

简而言之，属性命名没有限制。属性名可以是任何**字符串**或者 **symbol**（一种特殊的标志符类型，将在后面介绍）。**其他类型会被自动地转换为字符串。**

例如，当数字 `0` 被用作对象的属性的键时，会被转换为字符串 `"0"`：

```javascript
let obj = {
  0: "test" // 等同于 "0": "test"
};

// 都会输出相同的属性（数字 0 被转为字符串 "0"）
alert( obj["0"] ); // test
alert( obj[0] ); // test (相同的属性)
```

这里有个小陷阱：一个名为 `__proto__` 的属性。我们不能将它设置为一个非对象的值：

```javascript
let obj = {};
obj.__proto__ = 5; // 分配一个数字
alert(obj.__proto__); // [object Object] — 值为对象，与预期结果不同
```

我们从代码中可以看出来，把它赋值为 `5` 的操作被忽略了。

### 属性存在性测试

JavaScript 的对象有一个需要注意的特性：能够被访问任何属性。即使属性不存在也不会报错！

读取不存在的属性只会得到 `undefined`。所以我们可以很容易地判断一个属性是否存在：

```javascript
let user = {};
alert( user.noSuchProperty === undefined ); // true 意思是没有这个属性
```

### for...in 循环语句

语法：

```javascript
let key;
for (key in object) {
  // 对此对象属性中的每个键执行的代码
}
```

例如，让我们列出 `user` 所有的属性：

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
```

注意，所有的 “for” 结构体都允许我们在循环中定义变量，像这里的 `let key`。

同样，我们可以用其他属性名来替代 `key`。例如 `"for(let prop in obj)"` 也很常用。

#### 遍历循序

如果我们遍历一个对象，我们获取属性的顺序是和属性添加时的顺序相同吗？简短的回答是：“有特别的顺序”：整数属性会被进行排序，其他属性则按照创建的顺序显示。详情如下：

例如，

```javascript
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

如果属性名不是整数，那它们就按照创建时的顺序来排序，例如：

```javascript
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // 增加一个

// 非整数属性是按照创建的顺序来排列的
for (let prop in user) {
  alert( prop ); // name, surname, age
}
```

所以，为了解决电话号码的问题，我们可以使用非整数属性名来 **欺骗** 程序。只需要给每个键名加一个加号 `"+"` 前缀就行了。

像这样：

```javascript
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```

现在跟预想的一样了。

## 总结

对象是具有一些特殊特性的关联数组。

它们存储属性（键值对），其中：

- 属性的键必须是字符串或者 symbol（通常是字符串）。
- 值可以是任何类型。

我们可以用下面的方法访问属性：

- 点符号: `obj.property`。
- 方括号 `obj["property"]`，方括号允许从变量中获取键，例如 `obj[varWithKey]`。

其他操作：

- 删除属性：`delete obj.prop`。
- 检查是否存在给定键的属性：`"key" in obj`。
- 遍历对象：`for(let key in obj)` 循环。

我们在这一章学习的叫做“普通对象（plain object）”，或者就叫对象。

JavaScript 中还有很多其他类型的对象：

- `Array` 用于存储有序数据集合，
- `Date` 用于存储时间日期，
- `Error` 用于存储错误信息。
- ……等等。

它们有着各自特别的特性，我们将在后面学习到。有时候大家会说“Array 类型”或“Date 类型”，但其实它们并不是自身所属的类型，而是属于一个对象类型即 “object”。它们以不同的方式对 “object” 做了一些扩展。

JavaScript 中的对象非常强大。这里我们只接触了其冰山一角。在后面的章节中，我们将频繁使用对象进行编程，并学习更多关于对象的知识。
