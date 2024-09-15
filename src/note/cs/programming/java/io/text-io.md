---
article: false
date: 2022-06-30
order: 4
---

# Java 文本 IO 和 流

## 从控制台读取输入

```java
import java.util.Scanner; // Scanner is in the java.util package

// Create a Scanner object
Scanner input = new Scanner(System.in);

// Prompt the user to enter a radius
System.out.print("Enter a number for radius: ");
double radius = input.nextDouble();
```

- `input.next()` 返回String，以任意空白字符为结束符 `'', '\t', '\n', '\f' ` 等
- `input.nextLine() `返回一整行String，以回车为结束符
- 还有`nextByte()`，`nextInt()`等

::: tip Java 命令行传参

Java 中，命令行参数传参，直接就是参数数组，不含任何名称路径等信息。

:::

## Java 流总结

Java I/O库中有许多不同的流类，它们都有各自的用途。以下是一些常见的流类及其用途：

| 类名                                   | 用途                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| `InputStream`                          | 这是所有字节输入流类的**超类**，它定义了读取字节的基本接口。 |
| `OutputStream`                         | 这是所有字节输出流类的**超类**，它定义了写入字节的基本接口。 |
| `ByteArrayInputStream`                 | **这个流类将字节数组作为源，用于从字节数组读取数据。**       |
| `ByteArrayOutputStream`                | 这个流类将内存作为目标，用于将数据写入字节数组。             |
| `FileInputStream`                      | 这个流类将文件作为源，用于从文件读取数据。                   |
| `FileOutputStream`                     | 这个流类将文件作为目标，用于将数据写入文件。                 |
| `BufferedInputStream`                  | **这个流类为另一个输入流添加了缓冲功能，使得读取操作更高效。** |
| `BufferedOutputStream`                 | **这个流类为另一个输出流添加了缓冲功能，使得写入操作更高效。** |
| `DataInputStream`                      | 这个流类允许你以平台无关的方式从输入流中读取基本数据类型。   |
| `DataOutputStream`                     | 这个流类允许你以平台无关的方式将基本数据类型写入输出流。     |
| `ObjectInputStream`                    | 这个流类允许你从输入流中读取对象。                           |
| `ObjectOutputStream`                   | 这个流类允许你将对象写入输出流。                             |
| `PrintStream`                          | 这个流类包含了 `print()` 和 `println()` 方法，可以很方便地写入字符串表示的各种数据值。 |
| `PipedInputStream`/`PipedOutputStream` | 这些流类允许在不同的线程之间进行管道通信。                   |
| `SequenceInputStream`                  | 这个流类可以将多个输入流合并为一个，按顺序读取它们。         |

Java I/O库的一个强大之处在于它的流类可以组合起来使用，以提供更复杂的功能。这是通过使用装饰器模式实现的，这意味着你可以用一个流（例如，`BufferedOutputStream`）来"装饰"另一个流（例如，`FileOutputStream`），从而在基础流上添加更多的功能（在这个例子中，是缓冲功能）。

以下是一些常见的流组合及其用途：以上只是一些例子，实际上你可以按照需要将各种流组合在一起。例如，你可以将 `BufferedOutputStream` 和 `DataOutputStream` 组合在一起，以高效地将基本数据类型写入文件。你只需要确保每个流都正确地使用了装饰器模式，即每个流都被封装在另一个流中，以添加更多的功能。

| 组合                                     | 用途                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| `BufferedInputStream(FileInputStream)`   | 从文件中高效地读取数据。`BufferedInputStream` 为文件输入流添加了缓冲功能，这意味着它可以一次从文件中读取多个字节，而不是一个接一个地读取，从而提高了读取效率。 |
| `BufferedOutputStream(FileOutputStream)` | 高效地将数据写入文件。`BufferedOutputStream` 为文件输出流添加了缓冲功能，这意味着它可以一次将多个字节写入文件，而不是一个接一个地写入，从而提高了写入效率。 |
| `DataOutputStream(FileOutputStream)`     | 将基本数据类型以平台无关的方式写入文件。`DataOutputStream` 为文件输出流添加了写入基本数据类型的功能，这意味着你可以将整数、浮点数等以特定的格式写入文件，而不只是原始的字节数据。 |
| `DataInputStream(FileInputStream)`       | 以平台无关的方式从文件中读取基本数据类型。`DataInputStream` 为文件输入流添加了读取基本数据类型的功能，这意味着你可以从文件中读取整数、浮点数等，而不只是原始的字节数据。 |
| `PrintStream(FileOutputStream)`          | 将格式化的数据写入文件。`PrintStream` 为文件输出流添加了写入格式化数据的功能，这意味着你可以使用 `print()` 和 `println()` 方法将数据写入文件，这些数据可以是字符串、数字或其他对象的字符串表示形式。 |
| `ObjectOutputStream(FileOutputStream)`   | 将对象序列化并写入文件。`ObjectOutputStream` 为文件输出流添加了写入对象的功能，这意味着你可以将任何实现了 `Serializable` 接口的对象写入文件。 |
| `ObjectInputStream(FileInputStream)`     | 从文件中反序列化并读取对象。`ObjectInputStream` 为文件输入流添加了读取对象的功能，这意味着你可以从文件中读取任何实现了 `Serializable` 接口的对象。 |

::: info `BufferedOutputStream(FileOutputStream)` 的实现

缓存的实现，类似于是个接水滴的水桶，水满了再到倒到蓄水池中，而不是接一滴倒一次接一滴倒一次。这就是说，每次读取一整块文件到内存中，每次从内存中访问，避免了频繁访问硬盘IO。

`BufferedInputStream(FileInputStream)` 亦如此。

:::







