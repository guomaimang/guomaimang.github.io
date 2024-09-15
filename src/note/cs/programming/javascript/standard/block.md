---
article: false
date: 2022-04-29
index: 7
author: javascriptInfo, Hirsun




---

# 语句块

## 通用语句块

以下语句是通用的，可参考c++。

- if
- if-else if
- 条件运算符？
- switch
- while
- for
- break-continue
- do while

## `?`补充

```javascript
// 多个？
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
```

## break-continue补充

1. **禁止** `break/continue` **在 ‘?’ 的右边**

   ```javascript
   (i > 5) ? alert(i) : continue; // continue 不允许在这个位置
   ```

2. 有时候我们需要一次从多层嵌套的循环中跳出来。标签可以实现这一功能！

   **标签** 是在循环之前带有冒号的标识符：

   `break <labelName>` 语句跳出循环至标签处：

   ```javascript
   outer: for (let i = 0; i < 3; i++) {
     
     for (let j = 0; j < 3; j++) {
       let input = prompt(`Value at coords (${i},${j})`, '');
       // 如果是空字符串或被取消，则中断并跳出这两个循环。
       if (!input) break outer; // (*)
       // do something
     }
     
   }
   alert('Done!');
   ```

   上述代码中，`break outer` 向上寻找名为 `outer` 的标签并跳出当前循环。

   `continue` 指令也可以与标签一起使用。在这种情况下，执行跳转到标记循环的下一次迭代。

   因此，控制权直接从 `(*)` 转至 `alert('Done!')`。

   我们还可以将标签移至单独一行：

   ```javascript
   outer:
   for (let i = 0; i < 3; i++) { ... }
   ```

   `break` 指令必须在代码块内。从技术上讲，任何被标记的代码块都可以被跳出。

## switch

强调一下，这里的相等是严格相等。被比较的值必须是相同的类型才能进行匹配。
