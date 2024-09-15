---
article: false
date: 2022-06-02
order: 1
author: 裴帅帅
---

# Python 基础

本文适用于快速入门Python。

## 基础知识大纲

1. 为什么要学习Python？
2. Python的简介、版本选择、安装、开发环境 
   - Python的简介和版本选择
   - Python的安装
   - Python的开发环境
3. Python基础知识
   - 打印、缩进、注释
   - 基本数据类型和变量
   - 运算符
   - 条件语句if
   - 循环语句for和while
   - 循环跳转break和continue
4. Python的数据结构
   - 字符串 str
   - 列表 list
   - 元组 tuple
   - 字典 dict
   - 集合 set
5. Python的函数、类、模块
   - 函数定义和调用
   - 类的定义和使用
   - 自定义模块和引入模块
   - Python常用开源库介绍
6. Python读写文件的方法

## Why Python

- IEEE Spectrum年度编程语言排行榜：Python在总排行、发展趋势、就业市场需求、开源领域经常年度排名第一
- •Python已经成为各个大学的首选语言，它的卖点是容易学习、容易安装、容易部署

<img src="https://pic.hanjiaming.com.cn/2022/06/03/9ba0838e891f2.png" alt="1654196421836.png" style="zoom: 33%;" />

Python为什么这么火？

- 受到大数据、人工智能领域的猛烈兴起，Python在这两个领域是最常用的语言
- Python自己简单易学、使用方便，能够快速的解决问题

因此

- 不论你是想要新进入IT领域
- 或是想寻求新的职场突破点
- 或者想要追求当前最热的AI趋势

Python都是你应该学习的第一编程语言！

## Python 介绍

### 简介

Python是一门解释型的、面向对象的程序设计语言

特点：易学习、易阅读、易维护、跨平台、开源库极其丰富

Python库列表：https://pypi.org/simple/

### 版本选择

版本选择：

Python2和Python3差异非常大

Python3是趋势和未来，Python2官方将在2020年停止升级维护

Python官方：https://wiki.python.org/moin/Python2orPython3

### Python 的安装

请阅读 Anaconda + Pycharm 配置指南

### 开发环境

可以使用三种环境开发Python代码：

1. 命令行
   - 适用于快速语法学习和测试
   - 使用pip安装ipython插件可以极大提升使用体验（代码提示）
2. 文本编辑器(vim、atom、sublime)编写和运行
   - 适用于小型需求代码编写
3. 集成开发环境PyCharm
   - 大型项目代码编写、调试

### 风格

Python的设计目的：一种优美而强大，提供给非专业程序设计师使用的语言

在命令行输入import this即可查看（前几条）：

- 优美胜于丑陋（Python以编写优美的代码为目标）
- 明了胜于晦涩（优美的代码应当是明了的，命名规范，风格相似）
- 简洁胜于复杂（优美的代码应当是简洁的，不要有复杂的内部实现）
- 复杂胜于凌乱（如果复杂不可避免，要保持接口简洁）
- 扁平胜于嵌套（优美的代码应当是扁平的，不能有太多的嵌套）
- 间隔胜于紧凑（优美的代码有适当的间隔，不要奢望一行代码解决问题）
- 可读性很重要（优美的代码是可读的）

### 缩进

Python的代码缩进：下一层级的代码，使用TAB来缩进（不建议使用空格）

### 注释

Python注释的方法：

- 使用#号进行行注释
- 使用三个双引号或者三个单引号，在文件开头、类/函数开头注释

## 基本数据类型和变量

基本数据类型（相对于String/List/Dict/Tuple等高级数据结构）

- 整数：
  - 举例：1、2、234、-123、0
  - 类型：int
- 浮点型（小数）：
  - 举例：1.3、2.14、-2.34
  - 类型：float
- 布尔值：
  - 举例：真True、假False
  - 类型：bool
  - 空值：None

变量：

- 存储信息、信息可变的一个名字
- 变量名必须是大小写英文、数字和_的组合，且不能用数字开头

## 运算符

![1654226979831.png](https://pic.hanjiaming.com.cn/2022/06/03/68cca9bb23cfb.png)

## if语句

```python
age = 25

# 采用if、elif、else的方式进行，可以有多个elif
if age < 10:
  print("child")
  print("hello")
elif age < 20:
  print("young")
elif age < 60: 
  print("middle")
else:
  print("old")
```

没有else if，只有elif

```python
# if的简写形式
a = 3
b = 'big' 
if a > 2 else 'small'
print(b)
```

## for遍历

for循环用于遍历python的容器，包括：

- 遍历字符串str ： for s in "abc"
- 遍历列表list ： for i in [1,2,3]
- 遍历元组tuple ： for i in (1,2,3)
- 遍历字典dict ： for i in {"name":"xiaoming", "age":20}
- 遍历集合set  ： for i in set([1,2,3])

python的for循环，不能写成 JAVA/C 的 for(int i=0; i<100; i++) 的形式

可以用f or i in range(100): print(i) 代替

range 的使用：

range是一个函数，可以挨个产出数字，可以用list(range(10))打印range的元素列表

- 用法1：range(5)，输出[0,1,2,3,4]，注意，不包括最后一个数字
- 用法2：range(2,5)，输出[2,3,4]，注意，包括第一个数字，不包括最后一个数字
- 用法3：range(3,10,2)，输出[3,5,7,9]第三个参数是步子大小

## while循环

while： 循环重复判断条件，如果为True就执行，如果为Fasle就退出循环；

```python
idx = 0
while idx < 100:
    print(idx)
    idx += 1
```

```python
for idx in range(100):
    print(idx)
```

for和while都是循环，有什么区别？取决于要遍历的数据结构

- 如果有一个现成的数据可以挨个遍历，用for+in搭配最简洁
- for e in range/string/list/tuple/dict/set/file
- 如果没有，就写成条件是否满足的形式，用while实现

## break和continue关键字

- break：跳出for/while的整体循环，继续往下执行
- continue：结束for/while的当次循环，继续下一个循环

<img src="https://pic.hanjiaming.com.cn/2022/06/03/e82d4b28e6fbb.png" alt="1654227392138.png" style="zoom:50%;" />

## 读写文件的方法

- 读取文件的对象：fin = open("data.txt")
- 写出文件的对象：fout = open("data.txt","w")

- 读取文件的全部内容：whole_data = fin.read()
- 按行读取文件的内容：for line in fin: print(line)

- 写出一行数据到文件：fout.write("xyz\n")
- 文件的关闭：fin.close()和fout.close()
- 写出大文件时刷新内存到文件：fout.flush()

## 字符串

Python本身作为一个擅长数据处理、文本处理的语言，开发中需要大量的处理字符串.
字符串可以从前端用户输入、日志文件读取、数据库查询、网络爬取，然后进行各种处理变换和利用.

<img src="https://pic.hanjiaming.com.cn/2022/06/03/a557fc6271aa1.png" alt="1654227478808.png" style="zoom:50%;" />

### 单引号、双引号、三引号

字符串可以使用单引号、双引号、三引号包括起来的内容

<img src="https://pic.hanjiaming.com.cn/2022/06/03/11ce3f0d7ce50.png" alt="1654227550511.png" style="zoom:50%;" />

### 获取子串

- 使用数字下标，可以直接访问某个字符，"abc"[0] == "a"
- 数字下标可以从-1开始，代表从字符串最后开始数，"abc"[-1] == "c"
- 可以使用切片，获取子字符串
  - str[2:4]，获取2~4的子字符串，包括第2个元素，不包括第4个元素
  - str[:4]，获取从开头0到第4个元素(不包括)的子串，"2018-09-24"[:4]
  - str[4:]，获取从第4个元素(包括)开始，到最后的子字符串

### 格式化

当将数据返回给客户端、写出到文件、存入到数据库的时候.

经常需要对外输出一个字符串，这个字符串是很多个变量和字符串的拼接格式化.

- 方法1：用加号拼接字符串和字符串，"hello" + s
- 方法2：使用百分号格式化符号，"buy %s, count %d, price %f."%("apple", 10, 99.9)
- 方法3：使用format函数，"{vara} and {varb}".format(vara="liming", varb="xiaomei")
- 方法4：使用py3.6新的format方法，f"buy {name}, count is {count}"
- 方法5：使用join函数，"\t".join(['a','b','c'])

### 字符串的常用方法

字符串支持的常用方法列表

- len("abc") 字符串的长度
- str(12), str(1.2), str([1,2,3]把对象变成字符串
- str.endswith(".txt")，判断是否已某个字符串结尾
- str.startswith("test_")，判断是否以某个字符串开头
- str.replace(old, new)，将旧字符串替换为新字符串
- str.split(",")，使用字符串分割字符串得到一个list
- str.strip()，去除字符串两边的空格
- str.isnumeric()，判断字符串是不是数字

## 列表list

Python的列表list是一种保存有序项集合、可变的数据结构（可以增加和删除项）

- 创建一个空列表：data = []
- 创建一个有值列表：data = [1,2,3,4]

<img src="https://pic.hanjiaming.com.cn/2022/06/03/6f6c4582d54e7.png" alt="1654235949566.png" style="zoom:50%;" />

### 索引和切片

- 索引：list[idx]，访问某个元素，idx>=0 and idx <= len(list)-1
- 索引： idx可以是负数，从-1往前数
- 切片：list[begin:end]，获取切片List，从begin开始，到end结束(不包括end)
- 索引和切片对应的值都是可以修改的（字符串不可以）

### 常用方法

- list.append(item)，在列表末尾新增一个元素
- list.extend(list)，在列表末尾新增一个列表
- list + list，返回一个新的List合并的list
- list.clear()，清空列表中的所有元素
- len(list)，返回列表的元素个数

- for i in list: print(i)，按顺序遍历列表
- for idx,value in enumerate(list): print(idx, value)，用下标和数值遍历列表
- for idx in range(len(list)): print(idx, list[idx]) ，用下标和数值遍历列表

- list.sort(key=None, reverse=False)，对list进行排序
- list.reverse()，翻转list自身

### 列表推导式

列表推导式（又称列表解析式）提供了一种简明扼要的方法来创建列表。

![1654236102042.png](https://pic.hanjiaming.com.cn/2022/06/03/f7d30b1511ce8.png)

### 元组tuple

![1654236188378.png](https://pic.hanjiaming.com.cn/2022/06/03/8706a18a6c54d.png)

**问题：既然元组和列表这么像，为什么要有这个数据结构，需要元组的地方都用列表不就行了吗？**

| 区别项       | 元组tuple      | 列表list       | 说明                                                         |
| ------------ | -------------- | -------------- | ------------------------------------------------------------ |
| **内容区别** | 异质、不同类型 | 同质，相同类型 | 用一个元组表示一个人的信息people(id、name、age)    <br />用一个列表表示很多人的信息列表[p1,p2,p3] |
| **使用区别** | pack和unpack   | 循环遍历       | 元组pack和unpack：  <br />编写函数pack：get_info():  return  id,name,age  <br />调用函数unpack：id,name,age  =  get_info()  <br />列表循环遍历：  for  s  in  students:  print(s) |
| **是否可变** | 不可变         | 可变           | 元组的不可变性质：<br />代码更安全，如果是一个元组就放心的使用，不怕被更改  •有些场景需要不可变的列表，比如字典的KEY要求不可变对象 |

## 字典dict

### 基础语法

- 字典dict是一种KEY：VALUE的数据结构，可以根据KEY设置和获取对应的VALUE
- 语法： dict = {key1:value1, key2:value2}
- 举例： d = {"id":123, "name":"liming"}

### 字典dict和列表list的对比

- 列表用顺序数字做索引，字典用Key做索引，相当于给每个元素进行了命名（"3号学生"和"xm同学"的区别）
- 如果有一个数据列表：[(11, A), (12, B), (13, C)]，要在其中查找B这个条目，需要遍历列表查找；
- 如果使用字典{A:11, B:12, C:13}，直接使用get(B)取出，字典具有超级快的按KEY查找速度；

<img src="https://pic.hanjiaming.com.cn/2022/06/03/f4114984bc3d1.png" alt="1654236478229.png" style="zoom:50%;" />

### 常用方法

- len(dict) 字典的key/value对个数，也等于key的个数
- str(dict) 字典的字符串形式
- type(dict) 字典的类型，输出dict
- dict.clear() 清空字典的所有内容
- dict.get(key, default) 获取key的内容，如果key不存在，返回默认值default
- key in dict 判断key是否在dict的键中
- dict1.update(dict2) 将dict2的所有键值对，更新到dict1
- {x:x*x for x in range(10)} 字典推导式

### 实例 – 按课程统计数据

![1654246211383.png](https://pic.hanjiaming.com.cn/2022/06/03/0a66a592b6d2a.png)

## 集合set

![1654246255114.png](https://pic.hanjiaming.com.cn/2022/06/03/cbd4a853e0cb8.png)

### 实例 – 获取去重的人名

![1654246275594.png](https://pic.hanjiaming.com.cn/2022/06/03/6c48e0748cbe3.png)

## 高级数据结构的对比

![1654246300237.png](https://pic.hanjiaming.com.cn/2022/06/03/9fbef5f91111d.png)

## 实战

![1654246345837.png](https://pic.hanjiaming.com.cn/2022/06/03/cf6ff38ebd5d6.png)

![1654246365165.png](https://pic.hanjiaming.com.cn/2022/06/03/f2279ca5e3625.png)

## 代码的组织结构

- 如果是小型需求，只写代码即可，实现功能是第一要诀，不用管结构
- 如果是复杂代码或者团队合作，需要进行按不同的层次封装代码，方便重用和协作

<img src="https://pic.hanjiaming.com.cn/2022/06/03/51bbc7f84c290.png" alt="1654246422806.png" style="zoom:50%;" />

- 接下来会依次介绍函数、类、模块的知识和使用

## 函数

![1654246453170.png](https://pic.hanjiaming.com.cn/2022/06/03/7a3dd7c5a6583.png)

## lambda函数

### 基础知识

不妨把函数当做变量来看。

<img src="https://pic.hanjiaming.com.cn/2022/06/03/e646147e60d8d.png" alt="1654246494368.png" style="zoom: 50%;" />

### 列表中排序体现 lambda

<img src="https://pic.hanjiaming.com.cn/2022/06/03/acd5db5d3ae74.png" alt="1654250954068.png" style="zoom: 50%;" />

## class类

### 基础知识

什么是类和实例(对象)：

- 类一般是名词，代表一类事物，比如学生、汽车、电脑；
- 类定义了一个模板，一个类可以有多个实例对象，每个实例对象有自己的具体的属性取值；
- 类是包含数据和方法的一个打包，其中的方法可以对数据进行更新；

实际例子：

- list是一个类，[1,2,3]是一个实例
- tuple是一个类，(1,2,3)是一个实例
- dict是一个类，{"name":123}是一个实例
- set是一个类，{1,2,3}是一个实例
- string 是一个类

<img src="https://pic.hanjiaming.com.cn/2022/06/03/133fda18b77bf.png" alt="1654251116775.png" style="zoom:50%;" />

### 语法知识

![CleanShot 2022-06-03 at 18.21.50@2x.png](https://pic.hanjiaming.com.cn/2022/06/03/daf52f6d2d508.png)

### 实例演示

![1654251881441.png](https://pic.hanjiaming.com.cn/2022/06/03/22244482222c2.png)

## 异常Exception

![1654252074523.png](https://pic.hanjiaming.com.cn/2022/06/03/31b7881945978.png)

## 包package和模块module

![1654252214368.png](https://pic.hanjiaming.com.cn/2022/06/03/a0d1925ce70c7.png)

## 常见模块

![1654252603451.png](https://pic.hanjiaming.com.cn/2022/06/03/7f7601a670e33.png)

### sys模块

负责程序与python解释器的交互，提供函数和变量用于操控python的运行时环境

- sys.argv 类型为list，命令行参数列表，**第一个元素是脚本名称或路径**
- sys.path 类型为list，模块的搜索路径
  - 它使用PYTHONPATH环境变量初始化
  - 第一个元素是当前目录，意思是每次会首先搜索当前目录下的模块
  - 用户在程序中可以自己修改sys.path，设置自己的模块搜索路径
- sys.exit(n) 退出程序，n等于0代表正常退出，不等于0代表异常退出，在shell可以用$?获得退出值

### os模块

负责程序与操作系统交互，提供访问操作系统底层的接口

- os.environ 字典类型，读取系统环境变量
- os.remove(path) 删除文件
- os.rename(src,dst) 重命名文件或目录，可实现文件移动
- os.mkdir(dir) 创建目录
- os.rmdir(dir) 删除目录，目录必须为空
- os.listdir(path) 返回列表，列出目录下的文件和目录
- os.path.basename(path) 提取路径参数中的文件名
- os.path.dirname(path) 提取路径参数中的目录名
- os.path.split(path) 拆分path为(目录名, 文件名)
- os.path.splitext(path) 拆分path(文件名, 后缀名)
- os.path.exists(path) 判断指定的文件或目录是否存在
- os.path.isdir(path) 判断path参数是否是目录
- os.path.isfile(path) 判断path参数是否是普通文件

### 模块json

![1654252824431.png](https://pic.hanjiaming.com.cn/2022/06/03/361904bf02787.png)

### web开发微框架flask

![1654252883754.png](https://pic.hanjiaming.com.cn/2022/06/03/83819449bfb7e.png)

<img src="https://pic.hanjiaming.com.cn/2022/06/03/cda746ebb29ca.png" alt="1654252908200.png" style="zoom:50%;" />

### http爬虫库requests

![CleanShot 2022-06-03 at 18.42.12@2x.png](https://pic.hanjiaming.com.cn/2022/06/03/092dcdebcefe2.png)

### 访问MySQL模块PyMySQL

![1654253241339.png](https://pic.hanjiaming.com.cn/2022/06/03/767943042219a.png)

### 使用xlwt模块生成excel

![CleanShot 2022-06-03 at 18.42.34@2x.png](https://pic.hanjiaming.com.cn/2022/06/03/f2dd97525754a.png)

## 回顾

![1654253241339.png](https://pic.hanjiaming.com.cn/2022/06/03/767943042219a.png)
