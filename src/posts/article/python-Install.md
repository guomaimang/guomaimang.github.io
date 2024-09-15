---
article: true
date: 2021-04-10
comment: true
author: 

category:
  - tech
tag:
star:
---

# Python3 IDE环境安装指南

据2020年发布的IEEE Spectrum年度编程语言排行榜：Python在2019年总排行、发展趋势、就业市场需求、开源领域均年度排名第一

<img src="https://img-blog.csdnimg.cn/img_convert/3917a49ead660eca56af6a6b4184d752.png" alt="img" style="zoom:33%;" />![点击并拖拽以移动]
<!-- more -->

据Tiobe编程语言月度热门排行榜：2020年02月，Python继续拉开和C++的差距成为第三大编程语言

Python已经成为各个大学的首选语言，它的卖点是容易学习、容易安装、容易部署

![img](https://img-blog.csdnimg.cn/img_convert/d1d510bcd02bddccff176db659d9ac52.png)![点击并拖拽以移动]

Python为什么这么火？
 受到大数据、人工智能领域的猛烈兴起，Python在这两个领域是最常用的语言
 Python自己简单易学、使用方便，能够快速的解决问题

> 个人使用Python七年，利用Python解决了无数的问题！
>  相比于Java、PHP等语言，在很多领域Python开发简单快速，让你犹如一名极客：
>  *传统领域：文件处理、数据统计、爬虫、在线WEB服务、访问数据库、Excel读取/生成/下载等等
>  *大数据领域：Hadoop/Hive/Spark大数据处理
>  *人工智能领域
>  **数据计算：numpy、pandas
>  **机器学习：Spark MlLIB包、scikit-learn机器学习、surprise推荐算法包
>  **深度学习：tensorflow框架、paddlepaddle框架
>
> 裴帅帅

版本选择：Python2和Python3差异非常大
Python3是趋势和未来，Python2官方将在2020年停止升级维护

## 安装路线选择及原因

### 目标和原因

- 稳定、现代化
- 可用于生产环境
- 简单快速（奶奶看了直呼内行）
- 符合教育通用场景

### 系统要求

- Macos 10.15+ 或 Windows 10 或 Windows Server 2016 +
- 系统必须为64位的、干净的正版的操作系统
- 要求系统没有人为安装过Python（Macos 自带的Python2可忽略），如果有过安装请尝试删的干干净净「手动狗头」

### 过程

1. Python3的下载和安装
2. Anaconda的下载和安装
3. Pycharm的下载和安装
4. 环境的配置
5. 尝试第一个项目

### Python3的下载和安装

- Windows版Python3 唯一下载地址：https://www.python.org/downloads/windows/
- Mac 版 Python3 唯一下载地址：
   https://www.python.org/downloads/macos

为什么不要去其他平台下载

- 你怎么知道其他平台有没有投毒
- 你怎么知道其他平台的版本安不安全

![img](https://img-blog.csdnimg.cn/img_convert/fc3bbfced425af561528d29b2b399d71.png)![点击并拖拽以移动]

下载最新的就对了，截至编辑文章，最新版本为3.9.1

不要Python2 ，不要Python2！

点击上面页面的按钮之后，进入到下面这个网页，向下滑动到最底端。

![img](https://img-blog.csdnimg.cn/img_convert/5001030bb9ba49c07554337186d9a4cf.png)![点击并拖拽以移动]

对于Windows ，选择 Windows installer 64bit
 对于Macos,根据处理器选择相应版本

下载速度肯定是很慢的，理由我就不说了。等待10min下载完成后，打开安装

**在Windows上**



![img](https://img-blog.csdnimg.cn/img_convert/a066d95bff33f86df2e3c5ee1e841eeb.png)![点击并拖拽以移动]



下面的必须全部打钩



![img](https://img-blog.csdnimg.cn/20200528230037390.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hnX3FyeQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动]

安装完成后

![img](https://img-blog.csdnimg.cn/img_convert/6b78e52594b8692fc275ac71e04e005b.png)![点击并拖拽以移动]

之后重启电脑

**在Macos上，如过有以上选项，则打钩**

## 安装Anaconda

> Python的强大之处在于它的应用领域范围之广，遍及人工智能、科学计算、Web开发、系统运维、大数据及云计算、金融、游戏开发等。实现其强大功能的前提，就是Python具有数量庞大且功能相对完善的标准库和第三方库。通过对库的引用，能够实现对不同领域业务的开发。然而，正是由于库的数量庞大，对于管理这些库以及对库作及时的维护成为既重要但复杂度又高的事情。
>
> Anaconda 就是可以便捷获取包且对包能够进行管理，同时对环境可以统一管理的发行版本。Anaconda包含了conda、Python在内的超过180个科学包及其依赖项。
>
> Raxxie

###   步骤

前往[官方下载页面](https://www.anaconda.com/products/individual)下载。有两个版本可供选择：Python 3.6 和 Python 2.7，我下载的是前者。选择版之后点击“64-Bit Graphical Installer”进行下载。

![img](https://img-blog.csdnimg.cn/img_convert/1a234489f424847d8482e49c0c9ad99f.png)![点击并拖拽以移动]
在Macos上，要注意

![img](https://img-blog.csdnimg.cn/img_convert/dfac63ffff019d1885dcd673ad8306be.png)![点击并拖拽以移动]

在Windows中，要注意

![img](https://img-blog.csdnimg.cn/img_convert/4314b1a81afe901c9e88567741f8058f.png)![点击并拖拽以移动]

安装完成后，你可以看到这个图标

![img](https://img-blog.csdnimg.cn/img_convert/54a98656160b184fa06be2e1666035aa.png)![点击并拖拽以移动]

### 验证conda已被安装

Windows

![windows10在哪里打开命令提示符窗口？](https://img-blog.csdnimg.cn/img_convert/e43881190a58de6a04594056092a1dc2.png)![点击并拖拽以移动]

选择带有管理员的Powershell

Macos中打开

![img](https://img-blog.csdnimg.cn/img_convert/9cd4e6875035f1834cc1e30689f14b22.png)![点击并拖拽以移动]



接下来均是以命令行模式进行介绍，Windows用户请打开使用Command命令行；macOS在终端进行操作。

```
conda --version
```

安装成功后，终端上将会以`conda 版本号`的形式显示当前安装conda的版本号。如：`conda 3.11.0`

## 安装 Pycharm

PyCharm 是一款功能强大的 Python 编辑器，具有跨平台性，是Python开发者使用最多的IDE工具。

需要注意的是，Pycharm是一个付费软件，从小学一年级到大学的学生凭借相应证明可以免费使用。或者使用PJ版，或者淘宝有10块1年的正版账户。

下载地址：https://www.jetbrains.com

![img](https://img-blog.csdnimg.cn/img_convert/44f00a31614f04b56692339dd7eec2ac.png)![点击并拖拽以移动]

![img](https://img-blog.csdnimg.cn/img_convert/1589f395e1780d51806c516e571b3ed6.png)![点击并拖拽以移动]

![img](https://img-blog.csdnimg.cn/img_convert/94ac6974f68130fcdb0575910acccdd6.png)![点击并拖拽以移动]

在Windows系统中

![img](https://img-blog.csdnimg.cn/img_convert/f999479388833738496c6bdfa439b187.png)![点击并拖拽以移动]

![img](https://img-blog.csdnimg.cn/img_convert/a2491bd488506f51bfd99b4afabcb4f7.png)![点击并拖拽以移动]

这个地方建议黑色，以后你会知道为什么选择黑色。

之后我们关闭Pycharm，请不要动其他的配置，因为我们还没有配置好环境。

## 环境的配置

我们都知道Python有很多版本。但是，在未来你可能使用不同版本的python库，这会让你的管理非常复杂。所以，我们采用虚拟环境。
 我们可以为自己的不同的工程配置不同的虚拟环境。当然推荐设置一个常用的虚拟环境，便于自己学习和练习使用。

打开Anaconda,点击environment

![img](https://img-blog.csdnimg.cn/img_convert/a7957c6f962c57f827e07cebc87da81e.png)![点击并拖拽以移动]

这里显示了你的base环境下已经安装的python库。

![img](https://img-blog.csdnimg.cn/img_convert/02ca41bf7570c5ab729f8f4304991aa7.png)![点击并拖拽以移动]

我们尝试新建一个虚拟环境。

![img](https://img-blog.csdnimg.cn/img_convert/357735d105875267587ced0a8435a4c6.png)![点击并拖拽以移动]
好的，这样你的第一个虚拟环境就创建成功了。你的所有练习项目都可以选择这个虚拟环境。

比如我们需使用安装拓展库，我们只需要在anaconda为相应的虚拟环境安装即可。

![img](https://img-blog.csdnimg.cn/img_convert/32025c4a49dc468e12c6ed26fb9069fd.png)![点击并拖拽以移动]

根据提示点击apply即可。安装可能会比较慢。

## 尝试第一个项目

打开Pycharm，如果你需要汉语插件，你可以在插件市场安装汉语插件

![img](https://img-blog.csdnimg.cn/img_convert/91bd2623b0c8a90dc5197949f2096605.png)![点击并拖拽以移动]
Pycharm的文件，是以Project为单位的，而不是单一的py文件。一个Project是一个文件夹，里面会有许多文件。

新建第一个Project文件

![img](https://img-blog.csdnimg.cn/img_convert/40d1cf37cb529b8199b8ba9d5e6d1de4.png)![点击并拖拽以移动]

![img](https://img-blog.csdnimg.cn/img_convert/9dddd12916276e8a5cab80bf2dcdbe06.png)![点击并拖拽以移动]
里面会有一个写好的案例程序，点击运行，下面正常显示即表示你的安装成功！

![img](https://img-blog.csdnimg.cn/img_convert/8bcb5f355c0c009ad658d625faecff75.png)![点击并拖拽以移动]
参考

- https://edu.csdn.net/lecturer/4832，@裴帅帅
- 2020年IEEE Spectrum年度编程语言排行榜
- https://blog.csdn.net/hg_qry/article/details/106415252，@Girl
- https://www.jianshu.com/p/62f155eb6ac5
- https://jingyan.baidu.com/article/36d6ed1fa9a4751bce488362.html
- https://www.cnblogs.com/du-hong/p/10244304.html