---
article: false
date: 2022-06-29
order: 2



---

# Java 基础 A

### 多维数组

下标顺序应为 x y z ......

## 对象和类

如果一个对象不再需要，可以显式的给该对象的引用赋值为null。尽管会自动回收。

### UML

- `+` 表示public 修饰符

### 构造方法

- 一个类可以没有定义构造方法，但是类会隐式定义一个空方法体，即默认构造方法
- 构造方法链

### 修饰符

class 只能无修饰符 或者 private

- private 私有
- 无修饰符 包内可访问
- protected 同类+包内可访问
- public 方法 全局可访问

### 类的抽象

类的抽象是将类的实现和使用分离，实现的细节被封装并且对用户隐藏，这被称为类的封装

### 继承

- private 数据域虽然被继承，但无法被子类访问。但可以通过setter 或者 getter 使用
- 使用 super 关键词可访问父类数据或方法
- 构造方法链
  - super() 或 super(args) 必定是子类构造方法的第一句
  - 若无，则隐式super()
- 使用 final 防止类被继承 或 防止方法被重写

### 多态

- 多态意味着父类型的**变量** 可以 引用子类型的对象。
- 面向对象的三大支柱是 封装，继承和多态

## 其他

### 大数处理

- class: BigInteger(String)
- class: BigDecimal(String or double)
- add subtract multiply divide remainder

```java
BigInteger a = new BigInteger("372899234784237435643543685438562348562345");
BigInteger b = new BigInteger("2");
BigInteger c = a.multiply(b);
```

