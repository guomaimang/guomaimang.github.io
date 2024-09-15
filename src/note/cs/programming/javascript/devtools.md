---
article: false
date: 2022-04-29
index: 3
author: javascriptInfo, Hirsun
---

# 开发者控制台

代码是很容易出现错误的。但在浏览器中，默认情况下用户是看不到错误的。所以，如果脚本中有错误，我们看不到是什么错误，更不能够修复它。

为了发现错误并获得一些与脚本相关且有用的信息，浏览器内置了“开发者工具”。通常，开发者倾向于使用 Chrome 或 Firefox 进行开发，因为它们有最好的开发者工具。

开发者工具很强大，功能丰富。首先，我们将学习如何**打开它们**，**查找错误**和**运行 JavaScript 命令**。

## Chrome

- 打开网页 [bug.html](https://zh.javascript.info/article/devtools/bug.html)。
- 在这个页面的 JavaScript 代码中有一个错误。一般的访问者看不到这个错误，所以让我们打开开发者工具看看吧。
- 按下` F12` 键，如果你使用 Mac，试试 `Cmd+Opt+J`。

默认情况下，开发者工具会被在 Console 标签页中打开。

就像这样：

![1651231455118.png](https://pic.hanjiaming.com.cn/2022/04/29/cf93f3f5b37ff.png)

具体什么样，要看你的 Chrome 版本。它随着时间一直在变，但是都很类似。

- 在这我们能看到红色的错误提示信息。这个场景中，脚本里有一个未知的 “lalala” 命令。
- 在右边，有个可点击的链接 `bug.html:12`。这个链接会链接到错误发生的行号。

在错误信息的下方，有个 `>` 标志。它代表“命令行”，在“命令行”中，我们可以输入 JavaScript 命令，按下 Enter 来执行。

现在，我们能看到错误就够了。稍后，在 [在浏览器中调试](https://zh.javascript.info/debugging-chrome) 一节中，我们会重新更加深入地学习开发者工具。

> 多行输入
>
> 通常，当我们向控制台输入一行代码后，按 Enter，这行代码就会立即执行。
> 如果想要插入多行代码，请按 Shift+Enter 来进行换行。这样就可以输入长片段的 JavaScript 代码了。

在一开始的练习中，我们可以尝试使用 Chrome 的控制台作为练习语法的地方。就像在使用 ipython 或 Jupiter 练习 python语法一样。

![1651249248792.png](https://pic.hanjiaming.com.cn/2022/04/30/f439e41cc13cd.png)

## Safari

![1651231671476.png](https://pic.hanjiaming.com.cn/2022/04/29/8a064adb9b10e.png)

现在，我们通过 Cmd+Opt+C 就能打开或关闭控制台了。另外注意，有一个名字为“开发”的顶部菜单出现了。它有很多命令和选项.
