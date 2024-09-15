---
article: false
date: 2021-05-01

---

# 初识 c++ 中的 argc与argv

## 前言

在许多C ++ IDE和编译器中，当它为您生成main函数时，它看起来像这样：

```c++
int main(int argc, char *argv[])
```

或者

```c++
int main(int argc, char **argv)
```

而不是

```c++
int main()
```

## main 函数特点

main() 函数是 C++ 程序的入口函数，C++ 标准规定 main() 函数的返回值类型为 int，返回值用于表示程序的退出状态，返回 0 表示程序正常退出，返回非 0，表示出现异常。C++ 标准规定，main() 函数原型有两种：

```c++
//第一种
int main();

//第二种
int main(int argc，char* argv[]);
int main(int argc，char** argv);
```

当 main() 函数的返回值为int，而函数内没有出现 return 语句时，同样可以通过编译并正常运行。这是因为编译器在 main() 函数的末尾自动添加了return 0;语句。所以，main() 函数是 C++ 程序经过特殊处理的函数，其他的返回值类型不是 void 的函数，如果没有使用 return 语句，编译器将报错。虽然编译器会隐式添加return 0;，但还是建议开发人员避免使用这条规则，因为显示添加可避免出错时无法返回错误码，并且不会误认为 main() 函数可以没有 return 语句。

argc 和 argv 是 特定的名称，c++ 的 main 函数只接受这两个参数。数组argv中的元素支持从外界传入。

带参的 main() 函数可以提供用户向程序输入的参数，例如`int main(int argc,char* argv[])`，其中，argc 代表参数的个数，argv 数组中每一个元素用于保存命令行参数的内容。

## Introduction

**`argv`和`argc`是在C和C ++中将命令行参数传递给`main()` 。**

- argc用来统计你运行程序时送给main函数的命令行参数的个数。
- \* argv[ ]: 字符串数组，用来存放指向你的字符串参数的指针数组，每一个元素指向一个参数.
  - argv[0] 指向程序运行的全路径名
  - argv[1] 指向在DOS命令行中执行程序名后的第一个字符串
  - argv[2] 指向执行程序名后的第二个字符串
  - ......
  - argv[argc]为NULL

argc 是 argument count的缩写，表示传入main函数的参数个数，`argc`将是`argv`指向的字符串的个数。 （实际上）这将是1加上参数的数量，因为几乎所有的实现都将程序名放在数组的前面。

按照惯例，这些变量分别命名为`argc` （ *参数计数* ）和`argv` （ *参数向量* ），但是可以给它们指定任何有效的标识符： `int main(int num_args, char** arg_strings)`同样有效。

如果您不打算处理命令行参数，则也可以完全省略它们，产生`int main()` 。

数组argv中的元素支持从外界传入。

## 案例

### 第一案例：探索argv[0]

```c++
#include <iostream>
using namespace std;

int main(int argc, char** argv) {
    std::cout << "Have " << argc << " arguments: ";
    for (int i = 0; i < argc; ++i) {
        std::cout << argv[i] << std::endl;
    }
    return 0;
}
```

运行结果

>Have 1 arguments: /Users/hanjiaming/project/cpp/untitled35/cmake-build-debug/untitled35

我们发现，argv数组的第一个元素是 运行该程序的地址。

### 第二案例：从外界传入参数

```c++
#include <iostream>

int main(int argc, char** argv) {
    std::cout << "Have " << argc << " arguments:" << std::endl;
    for (int i = 0; i < argc; ++i) {
        std::cout << argv[i] << std::endl; // // argv[i] is the argument at index i
    }
  return 0;
}
```

在命令行中使用

```shell
./main a1 b2 c3
```

会输出

```c++
Have 4 arguments:
./test
a1
b2
c3
```

## 他言

Python 也有类似的功能

<img src="https://pic.hanjiaming.com.cn/2021/04/26/180110370b64d.png" alt="CleanShot 2021-04-26 at 23.07.22@2x.png" title="CleanShot 2021-04-26 at 23.07.22@2x.png" />

引用

- https://blog.csdn.net/xyw_blog/article/details/15686961
- https://my.oschina.net/u/3797416/blog/3160121
- https://www.runoob.com/python/python-command-line-arguments.html
- https://blog.csdn.net/K346K346/article/details/49331965