---
article: false
date: 2021-05-01
---

# 数位系统以及其算法2

## 算术与逻辑单元（ALU）

对数据执行算术和逻辑运算的计算机的实际部分
所有其他部分共同协作，将数据发送到ALU进行处理，并取出结果

### ALU的输入和输出示意

![img](https://pic.hanjiaming.com.cn/2021/01/20210125065301738.png)

- 控制单元（Control Unit）：给出操作说明
- 左侧的寄存器（Registers）：用于保存输入数据的缓冲区
- 标志(Flags)：指示指令结果的状态
- 右边的寄存器(Registers)：缓冲区，用于保存输出数据

### 简单的加法器示意

![img](https://pic.hanjiaming.com.cn/2021/01/20210125065504883.png)

OF表示溢出，这里需要强调，这里的溢出不是错误，不会进入到中断周期。

## 计算机中的数字表示

### 有符号数和无符号数

在计算机系统中，可以区分正负类型的数，成为“有符号数”（signed）；无正负类型的数(只有整数类型)，成为“无符号数”（unsigned）。

计算机内存中以二进制编码存储数字，但是，这些二进制编码怎样转换成我们可以理解的十进制数字呢？并不直接把二进制编码当成数字转换成十进制数字，这之间有转换规则。常见的转换规则有

- 有符号数字规则（signed）
  - 有符号整数规则
  - 有符号小数规则
- 无符号数字规则（unsigned）

这个转换过程是：二进制编码 》》 转换规则 》》十进制数字
反过来，10进制转2进制也是如此。

转换发生在计算机系统层面，CPU处理 和 内存存储 只存储二进制编码。

下图以4bits为例

<img src="https://pic.hanjiaming.com.cn/2021/01/20210129075454275.png" width = "400px">



### 特点

- 等价
  - 非负值有相同编码
- 独特性
  - 每一 *位模式*(bit pattern) 代表唯一的整数值
  - 每个可表示的整数都有唯一的 *位编码* (bit encoding)
- 可以反转映射

![img](https://pic.hanjiaming.com.cn/2021/02/20210204153152698.png)

### 计算机软件使用二进制编码表示数字

计算机软件使用二进制编码表示数字。这里的编码表示 转换规则或者表示法，这并不是 通过数学计算方式 直接由 二进制数字 转换为 十进制数字，而是有一些转换规则。当然，CPU 和 Main Memory 并不知道我们在使用什么哪一种转换方式，但是，无论是哪一种转换方式，它们在CPU运算的方式是相同的。

## 2’s Complement Representation

2’s Complement Representation（二进制补码表示法）

**以下规则以有符号数为例**

- 对于正数有2 ^ (n-1）-1 个表示形式，表示2 ^ (n-1）-1 个不同的正数。
- 对于负数有2 ^ (n-1）个表示形式，表示2 ^ (n-1）个不同的负数。
- 对于值0，有1种表示形式。
- 一共有 2 ^n个表示形式,一共可以表示2^n个数字。

比如，对于8位编码

- 可以表示-128（1111 1111） 到 127（0111 1111）

在C++的编译器中，可以使用 有符号数字规则(eg.int,double) 和 无符号数字规则 (unsigned) 把 我们输入的十进制数字 转换成 计算机识别的二进制数字。

### 二进制的原码、补码和反码

**比如如果是8位二进制:**

**原码**就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值.
有符号数转换规则实质 采用二进制补码的方式 识别转换，但是无符号转换规则不是这样的。我们最常用数值类型的是有符号数。

[+1]二进制原码 = 0000 0001
[-1]二进制原码 = 1000 0001

**反码**

- 正数的反码是其本身
- 负数的反码是在其原码的基础上, 符号位不变，其余各个位取反.

[+1] = [00000001]原 = [00000001]反
[-1] = [10000001]原 = [11111110]反

**补码**

- 正数的补码就是其本身
- 负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1. (即在反码的基础上+1)
- B是A的补码：A + B = 2 ^ n（10000000）

[+1] = [00000001]原 = [00000001]反 = [00000001]补
[-1] = [10000001]原 = [11111110]反 = [11111111]补

### 表示法则

对于n位系统

- 从000 … 000到0111 … 111（值从 0 到 2 ^ {n-1}-1 ）
- 从1000 … 000到 1111 … 111（值从 -2 ^ {n-1} 到 -1 ）
- 0 是 0000 … 0000
- 一共有 2^n个 不同编码，可以表示 2^n个值

负数表示为相应正数的补码

例如：+1 = 001→-1 =111。
为什么？ 001 + 111 = 1000 = 2 ^ 8

**给定二进制数n位，如何获得其二进制补码？**

**方法一：根据2进制补码的定义**

M与N都是10进制数，如果A + B = 2 ^ n，则 B的二进制编码 是 A的二进制编码 的补码。
256 (1 0000 0000) = 203(1100 1011) + 53(0011 0101）

如果A + B = 2 ^ n，则B是A的二进制的补码。
例如：1 0000 0000 = 1100 1011(A) + 0011 0101(B)

**方法二：翻转位然后加1**

给定A = 0011 0101
翻转A的位：1100 1010
加1：1100 1010 +1 = 1100 1011 = B
验证：A + B = 0011 0101 + 1100 1011 = 1 0000 0000

### 二进制补码加法

**A+B中，加数中包含包含两种种符号的数值**

在二进制补码系统中添加两个数字不需要任何符号检测
范例：（4位数）：A = 1101（-3），B = 0010（2）
A + B = 1101 + 0010 = 1111 = -1（10）

**A+B中，加数中包含包含一种种符号的数值**

-1 +（-2）怎么样？有什么问题？
-1 = 1111，-2 = 1110
-1 +（-2）= 1111 + 1110 = 1 1101 =-3
1 是结转位–忽略它

-5 +（-4）怎么样？有什么问题？
-5 = 1011，-4 = 1100
-5 +（-4）= 1011 + 1100 = 1 0111 = 7
将两个负数相加以获得一个正数，溢出了

所以，如果将两个数字相加，并且两个数字均为正或均为负，则仅当结果具有相反的符号时才会发生溢出。

运算A – B可以由A +（-B）计算，其中（-B）是B的2的补码
0011 1100 – 0010 1101 = 0011 1100 +（-0010 1101）
= 0011 1100 + 1101 0011

![img](https://pic.hanjiaming.com.cn/2021/02/20210204154106327.png)

![img](https://pic.hanjiaming.com.cn/2021/02/20210204154204311.png)

无论是加法还是乘法，无论有无符号，如果需要保持精准的结果，可以通过使用“任意精度”算法包。

### Representation of Different Number of Bits

对于十进制数字18，
8位表示：0001 0010
16位表示形式：0000 0000 0001 0010
你会发现我们使用0来补齐

对于十进制数字-18
8位表示：1110 1110
16位表示：1111 1111 1110 1110
你会发现我们使用1来补齐

### 带有补码的二进制转十进制

设二进制数字为 x1x2x3x4......xw

则转换为十进制的数字计算公式为（其中w为位数，B2T(X) 为十进制计算结果）

![img](https://pic.hanjiaming.com.cn/2021/02/20210204150630324.png)

### 二进制乘法

#### 使用纸和笔计算无符号二进制数乘法

![img](https://pic.hanjiaming.com.cn/2021/02/20210204154835687.png)

![img](https://pic.hanjiaming.com.cn/2021/01/20210125091119761.png)

被乘数：1011
乘数：1101
我们乘数的每一位得到一个积
然后，我们将所有部分结果加在一起

#### 计算机如何自动执行？

**方法一**

- 对部分产品执行运行添加
  - 对部分执行运行添加
  - 不需要等待所有的部分
  - 将累计结果与当前部分乘积相加
- 使用 add 和 shift 两个操作来实现加法
  - 如果乘数中的位为0：只需 shift
  - 如果乘法器中的位为1：add 后 shift

**方法二**

![img](https://pic.hanjiaming.com.cn/2021/02/20210204155820470.png)

**我们只讨论方法一**

寄存器定义

- M：存储被乘数
- Q：存储乘数
- A：存储累计结果（最初设置为0）
- C：可存一位，另外存储溢出位

![img](https://pic.hanjiaming.com.cn/2021/01/20210125091743730.png)

![img](https://pic.hanjiaming.com.cn/2021/01/20210125091828251.png)

我们假设 1011 *1101 在 8位 举例中，则则会有以下过程。

![img](https://pic.hanjiaming.com.cn/2021/01/20210125091911181.png)

注：右面的操作后得到左面的结果

- M：存储被乘数
- Q：存储乘数
- A：存储累计结果（最初设置为0）
- C：可存一位，另外存储溢出位，溢出后将变成1

1. 首先Q中最后一位是1，故使用Add，A由 0000 转变为 1011.
2. 之后使用shift（移位），对于C A Q 原为 0 - 1011 - 1101 的最后一位1抛弃，整个向后推送一个数位，此时C 变为 0，C A Q变为 0 - 0101 - 1110。第一个周期完成
3. 之后，因为C A Q中 Q的最后一位为0，故 直接shift。第二个周期完成。
4. 下一步，Q的最后一位又变成了1，此时，令 A = M + A，成为1101
5. .......
6. 当shift8次后，将自动停止，输出结果

这个过程发生了溢出，毕竟 11 * 13 > (2^8)/2-1。再次强调，溢出不会导致CPU进入 interrupt cycle。CPU不会判断是否为算数溢出，CPU只计算出二进制编码，至于算数溢出的判断和是否中断程序的执行要看计算机系统和程序（program）

有关溢出的区别，请见其他资料。

#### 负数乘法

在不同计算机系统中，大多使用一下两种解决方案

**方案一**

以前的无符号二进制数字算法不能直接用于二进制的表示形式。所以，我们可以忽略符号，计算乘法，然后取结果的2进制补码。这是很常用的。

举例：(-5) * 11

1. In the first step, we have to use 2's complement for the inputs.	

   - 5 -> 1111 1011
   - 11 -> 0000 1011

2. We follow the simple pencil-and-paper method to coculate

   | 1    | 1    | 1    | 1    | 1    | 0    | 1    | 1    |
   | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
   | 0    | 0    | 0    | 0    | 1    | 0    | 1    | 1    |
   |      |      |      |      |      |      |      |      |
   | 1    | 1    | 1    | 1    | 1    | 0    | 1    | 1    |
   | 1    | 1    | 1    | 1    | 0    | 1    | 1    |      |
   | 0    | 0    | 0    | 0    | 0    | 0    |      |      |
   | 1    | 1    | 0    | 1    | 1    |      |      |      |
   |      |      |      |      |      |      |      |      |
   | 1    | 1    | 0    | 0    | 1    | 0    | 0    | 1    |

3. summing the columns show that 1100 1001

4. accroding to 2'complement, 1100 1001 -> -55

**方案二**

另一种选择：在2的补码表示形式上快速相乘-布斯算法

## 其他资料（多以C语言为例）

### 数值存储范围

**32位编译器中**

![img](https://pic.hanjiaming.com.cn/2021/01/20210129074107710.png)

**64位**编译器中

unsigned int：0～4294967295（0~2^32-1）
int：-2147483648～2147483647(-2^31~2^31-1)
unsigned long：0～4294967295(0~2^32-1)
long：-2147483648～2147483647(-2^31~2^31-1)
long long:-9223372036854775808~9223372036854775807(-2^63~2^63-1)
unsigned long long：0~18446744073709551615(0~2^64-1)

### 数值在内存中的大小

![img](https://pic.hanjiaming.com.cn/2021/01/20210129082910576.png)

**32位**编译器中

- char ：1个字节
- char*（即指针变量）: 4个字节（32位的寻址空间是2^32, 即32个bit，也就是4个字节。同理64位编译器）
- short int : 2个字节
- int： 4个字节
- unsigned int : 4个字节
- float: 4个字节
- double: 8个字节
- long: 4个字节
- long long: 8个字节
- unsigned long: 4个字节

**64位**编译器中

- char ：1个字节
- char*(即指针变量): 8个字节
- short int : 2个字节
- int： 4个字节
- unsigned int : 4个字节
- float: 4个字节
- double: 8个字节
- long: 8个字节
- long long: 8个字节
- unsigned long: 8个字节

总结：常用数据结构中，32位编译器中和64位编译器中所占字节数不同的是：指针变量、long

### 数值类型转换和运算

**有符号数的转换**

| 原类型 | 目标类型       | 转换方法                                         |
| ------ | -------------- | ------------------------------------------------ |
| char   | short          | 符号位扩展                                       |
| char   | long           | 符号位扩展                                       |
| char   | unsigned char  | 最高符号位失去位意义，变为数据位                 |
| char   | unsigned short | 符号位扩展到short；然后从short转到unsigned short |
| char   | unsigned long  | 符号位扩展到long；然后从long转换到unsigned long  |
| char   | float          | 符号位扩展到long；然后从long转到float            |
| char   | double         | 符号位扩展到long；然后从long转换到double         |
| char   | long double    | 符号位扩展到long；然后从long转换到long double    |
| short  | char           | 保留低位字节                                     |
| short  | long           | 符号位扩展                                       |
| short  | unsigned char  | 保留低位字节                                     |
| short  | unsigned short | 最高为失去意义，变为数据位                       |
| short  | unsigned long  | 符号位扩展到long；然后从long转到unsigned long    |
| short  | float          | 符号位扩展到long；然后从long转到float            |
| short  | double         | 符号位扩展到long；然后从long转到double           |
| short  | long double    | 符号位扩展到long；然后从long转换到long double    |
| long   | char           | 保留低位字节                                     |
| long   | short          | 保留低位字节                                     |
| long   | unsigned char  | 保留低位字节                                     |
| long   | unsigned short | 保留低位字节                                     |
| long   | unsigned long  | 最高为失去意义，变为数据位                       |
| long   | float          | 使用单精度浮点数表示，可能失去精度               |
| long   | double         | 使用单精度浮点数表示，可能失去精度               |
| long   | long double    | 使用单精度浮点数表示，可能失去精度               |

**无符号数转换**

| 原类型         | 目标类型       | 转换方法                                |
| -------------- | -------------- | --------------------------------------- |
| unsigned char  | char           | 最高为作符号位                          |
| unsigned char  | short          | 0扩展                                   |
| unsigned char  | long           | 0扩展                                   |
| unsigned char  | unsigned short | 0扩展                                   |
| unsigned char  | unsigned long  | 0扩展                                   |
| unsigned char  | float          | 转换到long；然后从long转换到float       |
| unsigned char  | double         | 转换到long；然后从long转换到double      |
| unsigned char  | long double    | 转换到long；然后从long转换到long double |
| unsigned short | char           | 保留低位字节                            |
| unsigned short | short          | 最高为作符号位                          |
| unsigned short | long           | 0扩展                                   |
| unsigned short | unsigned char  | 保留低位字节                            |
| unsigned short | unsigned long  | 0扩展                                   |
| unsigned short | float          | 转换到long；然后从long转换到float       |
| unsigned short | double         | 转换到long；然后从long转换到double      |
| unsigned long  | long double    | 转换到long；然后从long转换到long double |
| unsigned long  | char           | 保留低位字节                            |
| unsigned long  | short          | 保留低位字节                            |
| unsigned long  | long           | 最高位作符号位                          |
| unsigned long  | unsigned char  | 保留低位字节                            |
| unsigned long  | unsigned short | 保留低位字节                            |
| unsigned long  | float          | 转换到long；然后从long转换到float       |
| unsigned long  | double         | 直接转换到double                        |
| unsigned long  | long double    | 转换到long；然后从long转换到long double |

在C语言中，有符号数和无符号数进行运算（包括比较）时，编译器都会把有符号数转换成无符号数。

### 有无符号数的转换

**无符号数 》》无符号数转换规则 》》 二进制编码 》》 有符号数转换规则 》》十进制数字**

转换的处理由编译器完成

以下图4bit为例

![img](https://pic.hanjiaming.com.cn/2021/01/20210129080800266.png)

**图示说明**

![img](https://pic.hanjiaming.com.cn/2021/01/20210129081928955.png)

### 无符号数的特点

- 对于正数有(2 ^ n)-1 个表示形式，表示(2 ^ n)-1个不同的正数。
- 对于值0，有1种表示形式。
- 一共有 2 ^n个表示形式,一共可以表示2^n个数字。

![img](https://pic.hanjiaming.com.cn/2021/02/20210204153725750.png)

![img](https://pic.hanjiaming.com.cn/2021/02/20210204153709364.png)

![img](https://pic.hanjiaming.com.cn/2021/02/20210204154623719.png)

![img](https://pic.hanjiaming.com.cn/2021/02/20210204161954532.png)

B2T是智能的：允许计算机对B2U和B2T使用相同的操作，B2T域中的值仍然正确（如果没有溢出）

提示：有符号数和无符号数进行运算，计算机首先会把有符号数对应到无符号数进行运算。

### Overflow

Overflow（溢出）是什么？表面上看，溢出是某个东西超过容器的大小。

在CS中，主要讨论 buffer overflow （缓冲区溢出）、data overflow（数据溢出） 和 arithmetic overflow（算数溢出）

在数位系统和算法中，我们主要关注 data overflow（数据溢出） 和 arithmetic overflow（算数溢出）

#### arithmetic overflow

arithmetic overflow（算数溢出），一般的说 overflow（溢出）就是指这个。

An arithmetic overflow is the result of a calculation that exceeds the memory space designated to hold it.（算术溢出是计算结果超出了为其指定的存储空间。）

 For example, a divide-by-zero yields a much larger result. 

If 2 Two's Complement numbers are added, and they both have the same sign (both positive or both negative), then overflow occurs if and only if the result has the opposite sign. Overflow never occurs when adding operands （操作数）with different signs.

CPU只计算出二进制编码，算数溢出的判断和是否中断程序的执行由计算机系统和程序（program）决定。

在C++语言中，如果忽略溢出，二进制转换成十进制后有以下情况

<img src="https://pic.hanjiaming.com.cn/2021/01/20210129082723785.png " width="500px">

**避免C++语言中二进制补码算数溢出是程序员的责任（在C++中不认为无符号数字会发生溢出，这是人为规定的。）**

有关更多的 arithmetic overflow 知识请见：https://www.sciencedirect.com/topics/computer-science/arithmetic-overflow

#### data overflow

In general, a data type overflow error is when the data type used to store data was not large enough to hold the data. Furthermore, some data types can only store numbers up to a certain size. An overflow error will be produced, for example, if a data type is a single byte and the data to be stored is greater than 256

------

## 引用材料

- William Stallings, “Computer organization and architecture: Designing for Performance”, 8th Edition, 2010
- Dr. Kai Zhou's PowerPoint
- LYU, Mingsong 's PowerPoint
- https://www.zhihu.com/question/46432979
- https://www.cnblogs.com/l199616j/p/10401094.html
- https://blog.csdn.net/abc_xian/article/details/100131083
- https://www.cnblogs.com/haotianmichael/p/8024777.html
- https://blog.csdn.net/CYJ2014go/article/details/78080279
- https://www.pcmag.com/encyclopedia/term/arithmetic-overflow
- https://www.doc.ic.ac.uk/~eedwards/compsys/arithmetic/index.html
- https://math.stackexchange.com/questions/1463651/binary-multiplication-for-negative-numbers
- https://stackoverflow.com/questions/1976793/why-do-mips-operations-on-unsigned-numbers-give-signed-results



