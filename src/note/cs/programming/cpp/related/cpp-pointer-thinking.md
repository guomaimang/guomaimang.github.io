---
article: false
date: 2021-05-01

---

# 对c++指针的额外思考


### 指针的两个作用

**指针的实质：变量**

故我们可将指针称为指针变量

- 指向作用：用于指向一个变量，指针存储着变量的地址。**多称作指针**
- 存储作用：存储着一个**内存地址**，以备用。**多称作指针变量**

**\* 这个符号是连接这两个作用的桥梁，因为 \* 能查看 一个指针变量中存的地址 对应的内存中的值**

### 函数形参中的指针变量

我们应该把函数形参中的指针看做指针变量。

```c++
int func(int* ptr,int x){
  // 传入的第一个参数应该是一个地址；
}

func(address,number)
```

注：使用` func(address,number)` 不是 call by pointer，是call by value；

因为我们将address传给函数的时候，address被函数复制传递给了ptr;

所以我们对 ptr 的任何更改都不会影响到原来的address。

call by pointer 是指使用 指针指向的方式 进行修改值。

如果我们想在此处使用 call by reference, 要使用`&`「和号」。

& 返回存储这个 变量的 内存地址。

目的：让 对 ptr 的任何更改都会 同步到原来的address

```c++
int func(int** ptr,int x){
  // 传入的第一个参数应该是一个地址；
  // 此时 我们需要传入一个 地址的地址，即指针的指针
  
  // 使用 *ptr 获取到 传入的address
  // 使用 **ptr 获取到 传入的address指向的值
}

func(&address,number)
```

 