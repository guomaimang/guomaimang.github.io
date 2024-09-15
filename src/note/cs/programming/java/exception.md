---
article: false
date: 2022-06-29
order: 3
---

# Java 异常和处理

Java 异常分为 Error 和 Exception。后者是非致命的。又可以分成必检异常和免检异常。

- 异常是一种对象。
- 异常是从方法中抛出的，方法的调用者可以捕获并处理异常。

## 抛出异常

异常由方法抛出

```java
public class QuotientWithException{
  
  public static int quotient(int number1, int number2) {
    if (number2 == 0)
      throw new ArithmeticException("Divisor cannot be zero");
    return number1 / number2;
  }
  ......
}
```

对于可能抛出必检异常的方法

- 要么方法自己 catch
- 要么在方法头声明抛出，表明交给调用者处理

::: tip 声明和抛出

- 如果方法声明异常，用throws
- 如果抛出异常，用throw

:::

## 捕获异常

```java
try {
  int result = quotient(number1, number2);
  System.out.println(number1 + " / " + number2 + " is " 
                     + result);
    }
catch (ArithmeticException ex) {
  System.out.println("Exception: an integer " + 
                     "cannot be divided by zero ");
    }
```

- catch() 中可写 Exception1|E2|E3， 表明捕捉任意之一异常。
- catch 父类异常也可捕获子类异常

### 从异常中捕获信息

在 catch 后的处理块种 使用`printStackTrace()` 可以打印跟踪信息

## 异常的类型

![1656583864594.png](https://pic.hanjiaming.com.cn/2022/06/30/7e70e41e18629.png)

异常是对象。异常的根类是 `java.lang.Throwable`。所有异常类都直接或间接的继承自Throwable

- RuntimeException 免检异常
- 对于 Error 无能为力，为免检异常
- Exception 必检异常

::: warning 父类与子类声明异常

父类的方法无声明异常时，子类重写方法不可声明异常

:::

## 常见异常类

通过继承`java.lang.Exception` 来自定义异常类

```java
public class InvalidRadiusException extends Exception {
  private double radius;

  /** Construct an exception */
  public InvalidRadiusException(double radius) {
    super("Invalid radius " + radius);
    this.radius = radius;
  }

  /** Return the radius */
  public double getRadius() {
    return radius;
  }
}
```
