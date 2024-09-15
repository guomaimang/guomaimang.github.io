---
article: false
date: 2021-05-01
---

# 数位系统以及其算法1

写过计算机代码的同学大都知道，计算机中的小数无法进行精确计算，这是为什么呢？这是因为不同进制的小数不能精确的转换。我们这篇文章将探究这个问题。

阅读这篇文章前，你可能需要阅读  计算机组织简介

## Number Systems 的 概述

### 整数的表示

人计数以10为进制

![img](https://pic.hanjiaming.com.cn/2021/01/20210129043516586.png)

610，一个简单的十进制的数字。

观察我们可以发现，一个数字有这样的特点

- 基数/进制/base 为B，例如 B = 10
- B个不同的符号，其中每个符号都是一个数字（例如10进制中，0、1、2、3、4、5、6、7、8、9）
- 将特定数字表示为抽象对象的书写约定（例如610）

在十进制系统中，对于数字 103

![img](https://pic.hanjiaming.com.cn/2021/01/20210125060639856.png)

在二进制系统中，B = 2，所以我们有2个符号：0、1，我们和十进制进行对比，寻找其共同特征，103用二进制表示为1011

![img](https://pic.hanjiaming.com.cn/2021/01/20210125060912480.png)

十六进制中，B = 16，16个符号：0，…，9，A，B，C，D，E，F

![img](https://pic.hanjiaming.com.cn/2021/01/20210125060959240.png)

那么，根据我们到目前为止所学到的知识，103的含义是什么？还不清楚！我们需要一个下标来表示我们正在使用的数字系统！这只是应用在我们书写的过程中。

### 探索规律

数字表示：对于具有n位数字的整数X，我们将其写为

![img](https://pic.hanjiaming.com.cn/2021/01/20210125061218318.png)

其十进制值表示为：

![img](https://pic.hanjiaming.com.cn/2021/01/20210125061244940.png)

### 小数的表示

给定带小数的实数，n：整数个数，m：分数个数， . 作为分数分隔符 ：

![img](https://pic.hanjiaming.com.cn/2021/01/20210125061423942.png)

其十进制值表示为：

![img](https://pic.hanjiaming.com.cn/2021/01/20210125061500428.png)

## 转换法

### 其他进制整数转换成10进制

比如： 1101101.101（2） 转化为十进制

1101101.101（2） = 1*2^6 + 1 * 2^5 + 1* 2^3 +1*2^2 +1x 2^0 +1*2^(-1) +1*10^(-3) = 109.625

### 10进制整数转换成其他进制

比如：将十进制整数12转换为其二进制表示形式 1100（2）

对一个二进制的数字N，可以写成

![img](https://pic.hanjiaming.com.cn/2021/01/20210125062208468.png)

它的实际含义是

![img](https://pic.hanjiaming.com.cn/2021/01/20210125062710292.png)

如果我们提出一个2

![img](https://pic.hanjiaming.com.cn/2021/01/20210125062701831.png)

a0小于2，故我们成功把a0分离开

继续提出一个2，得到

![img](https://pic.hanjiaming.com.cn/2021/01/20210125063005706.png)

a1小于2，故我们成功把a1分离开

算法：反复取商并将其除以2，然后将余数作为输出数字
何时停止：直到商为0

这个方法我们在高中学过，就不再详细解释，只是举个例子：对于29十进制转换成2进制，我们要对29不停地除以二，直到商为零。

![img](https://pic.hanjiaming.com.cn/2021/01/20210125063138883.png)

然后我们倒序收集，如图所示，故29（10）为11101（2）

### 将二进制小数转换为十进制

我们假定一个二进制小数为F

![img](https://pic.hanjiaming.com.cn/2021/01/20210125063435151.png)

则按照上面的规则，可以这样把它转换成10进制

![img](https://pic.hanjiaming.com.cn/2021/01/20210125063444881.png)

### 将十进制小数转换为二进制

举个例子，对于0.45(10),转换成2进制

根据这个公式

![img](https://pic.hanjiaming.com.cn/2021/01/20210125064221102.png)

我们可以这样

![img](https://pic.hanjiaming.com.cn/2021/01/20210125064233639.png)

我们将不停地重复这个过程。请看上图

最后这样表示

![img](https://pic.hanjiaming.com.cn/2021/01/20210125064117128.png)

注意：在某些情况下，没有确切的表示，我们只能将小数点后的分数转换为二进制数，可以设置精度最高为k

所以

### 将二进制转换为十六进制

想法很简单：将每4个二进制数字转换为一个十六进制数字

![img](https://pic.hanjiaming.com.cn/2021/01/20210125064638624.png)

十六进制表示法通常用于代替二进制表示法，以提高人们的可读性。，所以易于在二进制和十六进制之间转换。

![img](https://pic.hanjiaming.com.cn/2021/01/20210125064716738.png)

## 附注

在数学中，对于以B为进制的数字系统中具有n位数字的数字，n位数字可以表示的不同值的总数是 B^n

体验使用计算器进行进制转换：https://tool.oschina.net/hexconvert

## 引用材料

- William Stallings, “Computer organization and architecture: Designing for Performance”, 8th Edition, 2010
- Dr. Kai Zhou's PowerPoint
- LYU, Mingsong 's PowerPoint
- https://www.zhihu.com/question/46432979
- https://www.cnblogs.com/l199616j/p/10401094.html
- https://blog.csdn.net/abc_xian/article/details/100131083
- https://www.cnblogs.com/haotianmichael/p/8024777.html
- https://blog.csdn.net/CYJ2014go/article/details/78080279
