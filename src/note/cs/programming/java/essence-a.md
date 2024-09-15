---
article: false
date: 2022-06-29
order: 1


---

# Java 基础 A

## Java 概述

- Java 是从类中的main方法开始执行的
- 导入语句只是告诉编译器什么地方能够找到这些类，因此导入用 \* 还是指定名称没有任何性能差异
- 字面值（literal）是直接出现在程序中的常量值
- 命令行参数传参，直接就是参数数组，不含任何名称路径等信息

## 基本程序设计

### 变量默认值

- 对象：null
- 数值：0
- boolean：false
- char：`\u0000`

### 时间

- 可以通过调用`System.currentTimeMillis()` 返回当前时间戳(源自1970-1-1)，为一个long值

### Math

- Java的Math类提供了很多用于计算的数学函数
  - `pow(a, b)` 求次方
  - `sin(), cos(), tan(), toDegree()` ......
- `Math.random()` 获得 0.0 到 1.0 之间的随机 double值

## 字符串

- Java 原生 char 占2字节，使用了狭义的 16位 Unicode
- sout printf() 支持好、格式化打印
  - `%e` 表示输出科学计数法
- Java String 提供了很多方法，比如获取子串，替换字词啥的
  - strInfo.charAt(index)
  - strInfo.trim() 去除字符串两侧空白
  - 正则表达式
  - String.valueOf(int) 将数值转成字符串


### 字符值转换数值

```java
int intValue = Integer.parseInt(intString);
double doubleValue = Double.parseDouble(doubleString);
```

## 方法

- 方法传参是 pass by value

### 设计思想

- 设计思想应自顶而下
  - 前期无需过多关乎细节
  - 应当先应用方法抽象吧细节和设计分离
  - 之后实现细节
- 精益求精
  - 将一个大问题分解成较小的容易处理的小问题
  - 以方便后期编写，重用，调试，修改以及维护

## 数组

- `for (double e: myList)`
- 应当避免下标访问越界和遍历时修改数组的元素个数
- java 可将相同类型的变长参数作为数组，只能作为最后一个参数

### Arrays 静态类

- Arrays.sort(numList)
- Arrays.binarySearch(numList, 11)
- Arrays.equal(numList, newList)
- Arrays.fill(numList, 5)

