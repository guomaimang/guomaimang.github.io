---
article: false
date: 2022-05-29
order: 2

---

# 逐字节分析

Java 使用 UCS2 big-endian

## 案例

运行以下Java 代码后将出现 `test1.bin`

```java
public class TestDataOutputStream1 {
  public static void main(String[] args) throws IOException {
    try (var out = new DataOutputStream(new BufferedOutputStream(
          new FileOutputStream("test1.bin")))) {
      out.writeByte((byte) 123);
      out.writeShort((short) 1_234);
      out.writeInt(1_234_567);
      out.writeLong(1_234_567_890_123_456L);
      out.writeFloat((float) Math.E);
      out.writeDouble(Math.PI);
      out.writeBoolean(true);
      out.writeChar('€');
    }
  }
}
```

:::tip

`out.writeInt(1_234_567);` 这里面包括下划线是没有问题的，只是便于分割。

Java 7的一个特性是数字文字中的下划线。可以在任何数字文字的数字之间放置下划线，如：`int`，`byte`，`short`，`float`，`long`，`double`。在数字文字中使用下划线将它们分成组以获得更好的可读性。

:::

使用 UltraEdit 打开文件，使用16进制预览

<img src="https://pic.hanjiaming.com.cn/2022/05/30/05e21212f2a2b.png" alt="1653910510812.png" style="zoom: 50%;" />

- `7b` = 123  直接进制转换就可得到，Byte 1字节
- `04 d2` = 1,234  直接进制转换就可得到，Short 2字节
- `00 12 d6 87` = 1,234,567 直接进制转换就可得到，Float 4字节
- `00 04 62 d5 3c 8a ba c0` = 1,234,567,890,123,456 Double 8字节
- `40 2d f8 54` = 2.7182817 IEEE 32位转换法，4字节
- `40 09 21 fb 54 44 2d 18` = 3.141592653589793 IEEE 64位转换法，8字节
- `01` = true，1字节
- `20 ac` = '€' ([Unicode U-20AC](https://www.compart.com/de/unicode/U+20AC)) UCS ，char 是两字节

使用下面代码阅读

```java
public class TestDataInputStream1 {
  public static void main(String[] args) throws IOException {
    try (var in = new DataInputStream(new BufferedInputStream(
          new FileInputStream("test1.bin")))) {
      System.out.println(in.readByte());
      System.out.println(in.readShort());
      System.out.println(in.readInt());
      System.out.println(in.readLong());
      System.out.println(in.readFloat());
      System.out.println(in.readDouble());
      System.out.println(in.readBoolean());
      System.out.println(in.readChar());
    }
  }
}
```

```
123
1234
1234567
1234567890123456
2.7182817
3.141592653589793
true
€
```

## 实用工具

- IEEE 小数在线转换: https://tooltt.com/floatconverter/
- 整数进制转换器：https://tool.oschina.net/hexconvert/

## Reference

https://www.happycoders.eu/java/writing-reading-structured-data-dataoutputstream-datainputstream/
