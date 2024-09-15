---
article: false
date: 2021-05-01

---

# char、数组和指针的关系构想


## 证明：数组和指针的相似性

数组的名称 就是指针，他们在内存结构上十分相似。

```c++
#include <iostream>
using namespace std;

int main() {
   int arr[10];
   arr [0] = 610;
   arr [1] = 612;
   arr [2] = 616;
   arr [5] = 671;

   int* ptr = arr;

   cout << arr[0] << endl;  //610
   cout << arr << endl;  // 0x7ffeee2b2960
   cout << &arr[0] << endl;  // 0x7ffeee2b2960
   cout << ptr << endl;  // 0x7ffeee2b2960
   cout << *arr << endl; // 610
   cout << *ptr << endl; // 610
  
   cout << arr[1] << endl;  // 612
   cout << ptr[1] << endl;
   cout << *(arr+1) << endl; // 612
	 cout << *(ptr+1) << endl; // 612

    return 0;
}
```

- `cout << arr << endl;` 
  - arr 是数组的名称；但是，根据我们的构想，数组就是指针；
    - 所以这里会输出数组地址；
    - 根据我们所学的知识，数组的地址就是数组的首个元素的地址，即 arr[0] 的地址。
    - 这里体现了 arr[0] 的本质 是 元素；arr的本质是内存地址/指针，存储着arr [0] 的 内存地址。
  - **探究结果**
    - arr 的实质是 指针
    - &arr[0] 和 arr 和 ptr 返回的结果一样，都是  arr[0] 的地址

- `out << *(ptr+1) << endl;`

  - 根据我们的构想，数组就是指针。这样看来，两者在内存的存储有相似之处。
    - arr[0] 的内存地址+4  = arr[1] 的地址
    - ptr 指向 arr的第一个元素; ptr +1 指向 arr的第二个元素；
    - 这里体现了指针变量类型定义的必要性
      - 不同类型的数据长度不同，比如int占32bits，double占64bits
      - 指针类型实现了 指针+n = 地址 + n*数据长度
  - **探究结果**
    - 可以使用指针访问 数组的元素。
    - 指针+1 实现 访问数组的下一个元素。
    - arr 和 ptr 名称等价，可替换

注：使用ptr[0]的索引元素，ptr必须指向数组！未指向数组则不可使用[n]索引元素！

尽管如此，也只能说 数组的名称 就是指针，但是不能说数组就是指针。此外，定义一个数组，我们是已经知道数组的大小。

## 证明：char array转换机制

```c++
#include <iostream>
using namespace std;

int main() {
    char arr[11] = "Hanjiaming";
    cout << arr[0] << endl; // H
    cout << *arr << endl; // H
    cout << arr << endl; // Hanjiaming
    cout << &arr[0] << endl; // Hanjiaming
  
    cout << arr[1] << endl; // a
    cout << &arr[1] << endl; // anjiaming
  
    char* ptr = arr;
    cout << ptr << endl; // Hanjiaming
    cout << *ptr << endl; // H
  
  	void* ptr2 = arr;
    cout << ptr2 << endl; // 0x7ffeef13997d	
  	
    return 0;
}
```

- `cout << *arr << endl; `
  - 根据数组和指针的关系构思，可知此时会输出H
- `cout << arr << endl;`
  - 此处输出 Hanjiaming，而不是 一个地址；原因是发生了char 转换机制
- `cout << *ptr2 << endl `的语句不合法
  - void类型的指针不可以使用 * 运算符。

### 转换机制/C++的重载特性

cout 识别 输出：如果"<<"后面是一个char 类型的指针 或 地址对应内存 存储 char 类型的数据，那么就从该地址对应内存按字节读取并输出，直到碰到\0为止，这是C++的重载特性

重载特性在编译器层面，是c++编译器决定的。

注意：变量和指针的值实质上没有发生任何改变，只不过编译器以神奇的方式让输出显示的不一样。

但是，如果我们想知道一个char array的某个元素的值，我们可以让新建一个 void 指针指向 该 char array；

### char 的 转换机制

```c++
int main() {
    char arr = 'H';
    cout << arr << endl; // H
    cout << &arr << endl; // H
  
  	void* ptr = arr;
  	cout << ptr << endl; // 0x7ffeef13997d
    cout << &arr+1 << endl; // 空，猜测为 \0
  
    return 0;
}
```

## 引用材料

- COMP1011