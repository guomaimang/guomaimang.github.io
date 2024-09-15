---
article: false
date: 2021-05-01
---

# 数位系统以及其算法3

## Fractional binary numbers

Fractional binary numbers 分数二进制数

- Fractional decimal numbers
  - 11.62510 = 1 * 101 + 1 * 100 + 6 * 10-1 + 2*10-2 + 5*10-3
  - Precision: 10-3

- Fractional binary numbers
  - 1011.1012 = 1 * 23 + 0 * 22 + 1 * 21 + 1 * 20 + 1 * 2-1 + 0 * 2-2 + 1 * 2-3
  - 11.625 = 8 + 2 + 1 + 1/2 + 1/8
  - Precision: 2-3

**对于二进制浮点数，有**

![img](https://pic.hanjiaming.com.cn/2021/02/20210205044012378.png)

### 转换公式

十进制数 =

<img src= "https://pic.hanjiaming.com.cn/2021/02/20210205044036196.png" width="100px">

### 举例

- 53/4   =   101.112
- 27/8   =   10.1112
- 17/16  =   1.01112

**观察结果**

- 右移除以2（无符号）
- 左移乘以2
- 格式为0.1111111…2的数字小于1.0

### 局限性

#### Limitation #1

- Can only exactly represent numbers of the form x*(2^k)

  - Values that cannot be exactly represented:
  - 1/3   0.0101010101[01]…2
    - 1/5   0.001100110011[0011]…2
    - 1/10  0.0001100110011[0011]…2

#### Limitation #2

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/db914692d2e3a.png" alt="CleanShot 2021-02-26 at 12.28.40@2x.png" title="CleanShot 2021-02-26 at 12.28.40@2x.png" />

## IEEE Floating Point

- IEEE Standard 754

- - Many machines were having different floating point representations, then in 1985, IEEE established a uniform standard for floating point arithmetic
  - Nowadays, supported by all major CPUs

- Driven by numerical concerns

- - Nice standards for rounding, overflow, underflow

  - Hard to make fast in hardware

  - - Numerical analysts predominated over hardware designers in defining standard

## Floating Point Representation

上一节我们已经说过，小数由二进制转换成10进制可以这样

![img](https://pic.hanjiaming.com.cn/2021/01/20210125170026209.png)

那么，现在我们遇到了问题，在计算机里，这个小数点放到哪里？

如果小数点位于固定位置，则数据范围非常有限（不灵活）

那么，类比十进制的科学计数法

976,000,000,000,000 → 9.76 x 10^{14}
0.0000000000000976 → 9.76 x 10^{-14}

我们所做的：动态地将小数点滑动到一个方便的位置，并使用10的指数来跟踪该位置，使用这种相似的想法来表示计算机中的二进制小数。

是的，计算机中存储小数是以 科学计数法的二进制数值 转换成二进制码 存储。

### 浮点（FT）表示

代表相同数字的方式有多种，如下图

<img src="https://pic.hanjiaming.com.cn/2021/01/20210125170700316.png" width = "150px" />

但是，对于浮点表示，有 两个惯例：
（1）小数点位于左侧的最右边-大多数位（小数点的左侧只有一位）
（2）左边-有效位数的最高位数不为零（对于基数2，始终为1）-归一化
结果，标准化的非零数始终具有以下形式：

<img src="https://pic.hanjiaming.com.cn/2021/01/20210125170842540.png" width = "150px" />

结果，我们不需要将“ 1”存储在有效位中，只需存储bbbbbbbbbb，毕竟只要是一个这样小数通过这样的方法表示，首位都是1.

### 偏指数E（以单精度举例）

单精度浮点数可以这样存储

- 第1位：Sign of significand，长度为1，记录正负
- 第2-9：Biased exponent （偏指数），长度为8，记录偏指数
- 第10-32位：Significand，（长度为23），记录bbbbbbbbbb…

![img](https://pic.hanjiaming.com.cn/2021/01/20210125171141987.png)

- Biased exponent 中存的是 偏差指数。
- 偏差指数(exp) = E的实际值 + 固定偏差(2^(k-1)-1)
- 固定偏差：2 ^ {k-1}-1
  - k是“ Biased exponent”字段的位数，这个案例中，k = 8
  - 例如：k = 8，偏差= 2 ^ 7-1 = 127；
  - 如果E = 10100 = 20，则 偏差指数 = E + 偏差= 147 = 1001 0011(通过二进制无符号规则转化）
- 因为有偏指数是从0到255，所以E在-127到128的范围内

举例：

![img](https://pic.hanjiaming.com.cn/2021/01/20210125171844903.png)

举例：

二进制：-0.001010

- 步骤1：规范化：-1.01 x 2 ^ {-3}
- 步骤2：取得有偏指数：
  - E =-3
  - 有偏指数=-3 + 127 = 124
  - 124 转 二进制 0111 1100
- 第3步获得有效位数（23位）：01 0 0000 0000 0000 0000 0000
- 结果：1 0111 1100 010 0000 0000 0000 0000 0000 0000



<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/8665b61a03d28.png" alt="CleanShot 2021-02-26 at 12.34.02@2x.png" title="CleanShot 2021-02-26 at 12.34.02@2x.png" />

### 单精度变量和双精度变量的区别

- 单精度长32位
- 双精度长64位

![img](https://pic.hanjiaming.com.cn/2021/01/20210129043408464.png)

### 内存查看

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/f958f97657f52.png" alt="CleanShot 2021-02-26 at 15.11.45@2x.png" title="CleanShot 2021-02-26 at 15.11.45@2x.png" />

我们发现，每8个bit =  1个byte,所以我们看到的hex为465DB400

```c++
#include <stdio.h>

typedef unsigned char *pointer;

void show_bytes(pointer start, size_t len){
  size_t i;
  for (i = 0; i < len; i++)
    printf("%p\t0x%.2x\n",start+i, start[i]);
  printf("\n");
}

int main() {
    float a=15213;
    show_bytes((pointer)&a,sizeof(float));
    return 0;
}

```

使用以上代码可以查看相应的地址中存储的数据。我们可以发现 float长32bits。

### Denormalized values

when exp = 00000..000

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/ee975dbad8932.png" alt="image.png" title="image.png" />

- exp = 000…0, frac = 000..0  --> zero value
  - Note that s = 0/1, possitive/negative zero
- exp = 000…0, frac ≠ 000…0 --> numbers closest to 0.0

When: exp = 111…1

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/5ac8f7349b5bf.png" alt="image.png" title="image.png" />

- Case: exp = 111…1, frac = 000…0
  - Represents value --> (infinity)
  - Operation that overflows: e.g., the result of 1.0/0.0
- Case: exp = 111…1, frac ≠ 000…0
	- Not-a-Number (NaN)
	- Represents case when no numeric value can be determined : E.g., the result of sqrt(-1)

### Example

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/6b8007cb12ff5.png" alt="image.png" title="image.png" />

我们发现当s = 0的时候，以字符串拼合 "exp" + "frac" 的值看做unsigned的话总是在随着value的增加而增加。这就表明，这可以用于快速比较两个float的大小（特殊的编码除外）。

如果位数过长会发生截断，这个时候会使用IEEE标准来截断，使用round even。

### 二进制浮点数的范围

对于

<img src="https://pic.hanjiaming.com.cn/2021/01/20210125172622678.png" width = "150px" />



![img](https://pic.hanjiaming.com.cn/2021/01/20210125172647281.png)

由上图可知

32 bit 系统中，能精确表示的正小数为 2^（-127） 到 {2^-[2^(-23)]} * 128，负小数为- {2^-[2^(-23)]} * 128 到2^（-127）。

其实，你可以这样理解，计算机的小数存储就像一把特殊的有精度的刻度尺。

![img](https://pic.hanjiaming.com.cn/2021/01/20210125173129946.png)它们是直线上的离散点

- 它们不是均匀分布的：接近0时是密集的

### 总结

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/8665b61a03d28.png" alt="CleanShot 2021-02-26 at 12.34.02@2x.png" title="CleanShot 2021-02-26 at 12.34.02@2x.png" />

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/de228d29e4cb1.png" alt="CleanShot 2021-02-26 at 15.09.46@2x.png" title="CleanShot 2021-02-26 at 15.09.46@2x.png" />

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/bae694700bd84.png" alt="CleanShot 2021-02-26 at 15.26.10@2x.png" title="CleanShot 2021-02-26 at 15.26.10@2x.png" />

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/26/ade368a91ac2b.png" alt="CleanShot 2021-02-26 at 15.54.45@2x.png" title="CleanShot 2021-02-26 at 15.54.45@2x.png" />

