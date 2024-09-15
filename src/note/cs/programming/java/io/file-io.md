---
article: false
date: 2022-05-29
order: 3

---

# Java 文件 IO

## 二进制文件与文本文件

之前说过，一个文件不是二进制文件就是文本文件。

既然电脑上的文件都是以二进制序列存储。那么二进制文件和文本文件有什么区别呢？

- 文本文件：是基于字符编码的文件，常见的编码有ASCII编码，UNICODE]编码等等。
- 二进制文件：是基于值编码的文件，你可以根据具体应用，指定某个值是什么意思（这样一个过程，可以看作是自定义编码。

其实没有一个特定的划分定义。两者本质上无区别。

- 如果文件内都是 以比如ASCII字符编码的序列，就说是文本文件。
- 如果二进制文件内有涉及到非编码内容, 比如IEEE 机器码等，就说是二进制文件。

| 用于写入文件的类                   | 写自定义Byte(二进制) | 写 Unicode(文本) |
| ---------------------------------- | -------------------- | ---------------- |
| PrintWriter(FileOutputStream)      | write(int)           | write(String)    |
| FileOutputStream(File/String)      | 所有都是             | 无法写           |
| PrintWriter(File/String)           | 无法写               | 所有都是         |
| DataOutputStream(FileOutputStream) | 其他几乎都是         | writeChar()      |

`DataOutputStream(FileOutputStream).writeUTF()` 是 UTF-8写入。

到现在为止，我们没有讨论阻塞问题。

## 用 Java 实现 copy file

```java
import java.io.*;

public class Copy {
    /** Main Method
     @param args[0] for source file
     @param args[1] for target file
     */
    public static void main(String[] args){
        if (args.length != 2){
            System.out.println("Usage: java Copy sourceFile targetFile");
        System.exit(1);
        }

        File sourceFile = new File(args[0]);
        if (!sourceFile.exists()){
            System.out.println("Source file " + args[0] + " does not exist!");
            System.exit(2);
        }

        File targetFile = new File(args[1]);
        if (targetFile.exists()){
            System.out.println("Target file " + args[1] + " already exist!");
            System.exit(3);
        }

        try(
            BufferedInputStream input = new BufferedInputStream(new FileInputStream(sourceFile));
            BufferedOutputStream output = new BufferedOutputStream(new FileOutputStream(targetFile))) {
            int r, numberOfBytesCopied = 0;
            while ((r = input.read()) != -1){
                output.write((byte) r);
                numberOfBytesCopied++;
            }
            System.out.println(numberOfBytesCopied + " bytes copied");
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
```

## File类

包括了 **获得的文件/目录** 的属性，以及对文件目录进行改名和删除，不包含文件的创建，但可以创建目录。

<img src="https://pic.hanjiaming.com.cn/2022/06/30/50c49f010041e.png" alt="1656586961402.png" style="zoom:50%;" />

在程序中，不应直接使用绝对文件名。

- 使用Scanner类从文件中读取文本数据
- 实用Printwrite类向文件中写入文本数据
- 编码为Unicode

## 使用 Printwrite 写文件

```java
PrintWriter output = new PrintWriter(filename)
```

<img src="https://pic.hanjiaming.com.cn/2022/06/30/817a938afba1a.png" alt="1656589481187.png" style="zoom:50%;" />

- 如果文件存在，并使用 PrintWrite 创建，若文件已存在，则直接丢弃源文件
- 写完最终必须用 `.close()`关闭文件。不然可能数据无法正常写入

## 使用 Java 传输文件

```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class FileClient {
    public static void main(String[] args) throws Exception {

        // 1. 建立一个 socket
        Socket socket = new Socket("localhost", 9988);

        // 2. 建立一个输出流
        OutputStream os = socket.getOutputStream();

        // 3. 读数据
        FileInputStream fis = new FileInputStream("src/Main.java");

        // 4. 写数据
        byte[] buffer = new byte[1024];
        int len;
        while ((len = fis.read(buffer)) != -1) {
            os.write(buffer, 0, len);
        }

        // 5. 关闭资源
        fis.close();
        os.close();
        socket.close();

    }
}

```

```java
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class FileServer {
    public static void main(String[] args) throws IOException {

        // 1. create server socket
        ServerSocket serverSocket = new ServerSocket(9988);

        // 2. listen to client's connection
        Socket socket = serverSocket.accept(); // blocking

        // 3. get input stream
        InputStream is = socket.getInputStream();
        BufferedInputStream bis = new BufferedInputStream(is);

        FileOutputStream fos = new FileOutputStream("src/Main2.java");
        BufferedOutputStream bos = new BufferedOutputStream(fos);

        // 4. read data
        byte[] buffer = new byte[1024];
        int len;
        while ((len = bis.read(buffer)) != -1) {
            bos.write(buffer, 0, len);
        }

        // 5. close resource
        bos.close();
        bis.close();
        socket.close();
        serverSocket.close();

    }
}
 
```
