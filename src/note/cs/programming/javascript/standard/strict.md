---
article: false
date: 2022-04-29
index: 2
author: javascriptInfo, Hirsun
---

# 现代模式 "use strict"

长久以来，JavaScript 不断向前发展且并未带来任何兼容性问题。新的特性被加入，旧的功能也没有改变。这种情况一直持续到 2009 年 ECMAScript 5 (ES5) 的出现。ES5 规范增加了新的语言特性并且修改了一些已经存在的特性。

"use strict"` 可以禁用已经废弃或者不被推荐的功能，这样更加规范和严格。这种严格模式也叫做现代模式。

## "use strict"

这个指令看上去像一个字符串 `"use strict"` 或者 `'use strict'`。当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。

`"use strict"` 可以被放在函数体的开头。这样则可以只在该函数中启用严格模式。但通常人们会在整个脚本中启用严格模式。请确保 `"use strict"` 出现在脚本的最顶部，否则严格模式可能无法启用。

没有办法取消 `use strict`" 。一旦进入了严格模式，就没有回头路了。

## 浏览器控制台

当你使用 [开发者控制台](info:devtools) 运行代码时，请注意它默认是不启动 `use strict` 的。有时，当 `use strict` 会对代码产生一些影响时，你会得到错误的结果。

那么，怎么在控制台中启用 `use strict` 呢？首先，你可以尝试搭配使用 `key:Shift+Enter` 按键去输入多行代码，然后将 `use strict` 放在代码最顶部。它在大部分浏览器中都有效，像 Firefox 和 Chrome。

## 我们应该使用 "use strict" 吗？

**因此，目前我们欢迎将 `"use strict";` 写在脚本的顶部。稍后，当你的代码全都写在了 class 和 module 中时，你则可以将 `"use strict";` 这行代码省略掉。**

本教程的所有例子都默认采用严格模式，除非特别指定（非常少）。
