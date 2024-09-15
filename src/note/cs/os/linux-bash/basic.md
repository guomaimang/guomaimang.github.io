---
article: false
date: 2022-04-30
index: 1
author: RUNOOB, Hirsun
---

# Basic Unix/Linux

## 命令还是程序

UNIX 和 Linux 中使用的大多数命令实际上是存储在某个地方的系统程序（通常存储在 /bin或 /usr /bin中）。

您通常会看到一个`$`标志或一个`％`标志，或者可能更多。 这称为提示，计算机期望接收您的命令。typically `%` (for C shell) or `$` (for bash). 

UNIX和Linux中的约定：在提示下执行 指定名称的文件。

- **a.out** and **hello**  are names of your file and you can directly execute them by typing their names. 
- **ls**, **cp**, **pico**, **nano** and **(g)cc** are all commands that you can find their executable files. 

可以用分号将几个命令分开，一次性给出  ` ls; pwd; cal`将创建三个进程，依次执行三个命令（`ls`、`pwd`和`cal`）。

## bash 内置的命令

这些不是program，而是bash内建的命令。

- cd：改变目录
- alias：给命令定义一个含义
- source：执行一个脚本或批处理文件

## 目录操作

### Linux 目录

我们知道Linux的目录结构为树状结构，最顶级的目录为根目录 `/`

其他目录通过挂载可以将它们添加到树中，通过解除挂载可以移除它们。

- **绝对路径：**路径的写法，由根目录 **/** 写起，例如： /usr/share/doc 这个目录。
- **相对路径：**路径的写法，不是由 **/** 写起，例如由 /usr/share/doc 要到 /usr/share/man 底下时，可以写成： **cd ../man** 这就是相对路径的写法。

### 处理目录的常用命令

- ls（英文全拼：list files）: 列出目录及文件名
  - -a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)
  - -d ：仅列出目录本身，而不是列出目录内的文件数据(常用)
  - -l ：长数据串列出，包含文件的属性与权限等等数据；(常用)

- cd（英文全拼：change directory）：切换目录
- pwd（英文全拼：print work directory）：显示目前的目录
  - **-P** ：显示出确实的路径，而非使用连结 (link) 路径。就是软连接指向的绝对目录

- mkdir（英文全拼：make directory）：创建一个新的目录
  - -m ：配置文件的权限
  - -p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！
    `mkdir -p test1/test2/test3/test4`

- rmdir（英文全拼：remove directory）：删除一个空的目录
  - **-p ：**从该目录起，一次删除多级空目录

- cp（英文全拼：copy file）: 复制文件或目录
  - **-a：相当於 -pdr 的意思，至于 pdr 请参考下列说明；(常用)**
  - **-d：**若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身；
  - **-f：**为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；
  - **-i：**若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)
  - **-l：**进行硬式连结(hard link)的连结档创建，而非复制文件本身；
  - **-p：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；**
  - **-r：递归持续复制，用于目录的复制行为；(常用)**
  - **-s：**复制成为符号连结档 (symbolic link)，亦即『捷径』文件；
  - **-u：**若 destination 比 source 旧才升级 destination ！

- rm（英文全拼：remove）: 删除文件或目录
  - **-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；**
  - -i ：互动模式，在删除前会询问使用者是否动作
  - **-r ：递归删除啊！最常用在目录的删除了！**

- mv（英文全拼：move file）: 移动文件与目录，或修改文件与目录的名称
  - **-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；**
  - -i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
  - -u ：若目标文件已经存在，且 source 比较新，才会升级 (update)


## 常用操作

- To tell who you are, type **whoami**
- Type **history** to see a list of recent commands 
- 如果你想重新执行在历史记录中发现的前一条命令，请输入 !n，其中n是该命令的编号（n可能是一个大数字）。
- 要执行以ca开头的最新命令（如cat），请输入！ca。输入 !c 将执行以c开头的最新命令（也许是cc，也许是cd，也许是chmod，也许是cat或其他）。
- To execute the last command, just type **!!** 
- To avoid typing **./hello** to execute hello, 你可以在执行路径中包括当前目录。输入`PATH="$PATH:."`，将当前目录`". "`追加到路径变量（PATH）中。
- 你可以使用` man [命令]` 来查看各个命令的使用文档，如 ：`man cp`。

## 通配符

你可以使用通配符来匹配文件名 `* 和 ？`。

- 例如，`ls lab*`会给你所有名字以`lab`开头的文件。
- 例如，`ls lab?` 会给你所有名字为`labx`的文件（`x`是一个字符）。

你可以使用范围规范（[]和{}）。

例如

- `ls lab[1-5].c` 将返回所有文件`labx.c`，其中 `x` 是1、2、3、4或5
- `ls lab[24].c` 将只返回`lab2.c`和`lab4.c`。
  - 这里`[ ]`表示集合中的任何字符
  - 如果你想获得文件`lab4.c、lab8.c和lab12.c`，你不能使用`[]`，因为它表示**一个数字**。
    - 你必须使用`ls lab{4,8,12}.c`来代替，其中`{}`表示任何**一个模式**。

在使用`ls`命令时，你可以使用通配符来匹配当前或选定目录中的文件。

<img src="https://pic.hanjiaming.com.cn/2022/05/01/e39b72f2917bc.png" alt="1651335455307.png" style="zoom:50%;" />

## Connecting commands

UNIX和Linux的一个非常强大和独特的功能是链接命令的能力。

一条链包含一连串的命令甚至是用户程序。

`prog1 | prog2 | prog3 | … | progn`

程序1的输出是程序2的输入，以此类推。符号 "|" 在Unix/Linux中称为pipe。即使用pipe进行通信。

比如说

- `ls | wc`将计算一个包含`ls`所有输出的文件的行数、字数和字符数。
- `ls | wc | lpr`将把上述输出发送到打印机（`lpr`是用打印机打印的命令）。

## 其他操作

### file

特殊命令 `file`将让你知道一个文件（或一连串文件）的类型和其他信息。

<img src="https://pic.hanjiaming.com.cn/2022/05/01/6ccfda824e353.png" alt="1651335610918.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/05/01/c5371e1585645.png" alt="1651335654492.png" style="zoom:50%;" />

### grep

如果你想在**一个文件集合**中寻找一个特定的字符串，你需要使用`grep`命令。这在Unix/Linux系统中是一个非常有用的命令。可以根据模式进行匹配。模式是正则表达式，由一些基元构建。

- `^` means beginning of line; 
- `$` means end of line; 
- `.` means any character;
- `[abc]` means any one of a, b, c
- `[^abc]` means anything except a, b, c
- use `\` for escape 「换行」.

比如

- `grep malloc *.c` : Find C programs containing malloc and its usage
  <img src="https://pic.hanjiaming.com.cn/2022/05/01/89593012c8f92.png" alt="1651336775562.png" style="zoom: 50%;" />

- `grep -i polyu *.txt` : Find text files and lines containing PolyU **(ignore upper/lower case)**. 

- `grep -l -i ’^polyu’ *.txt` : Print only the names of files with lines beginning with “polyu”. 

- `grep –h ’poly[^u]’ *.txt`: Look for `poly”` except for “polyu” without filename

  <img src="https://pic.hanjiaming.com.cn/2022/05/01/0b41b60a775cb.png" alt="1651337086308.png" style="zoom:50%;" />
