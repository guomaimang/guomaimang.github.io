---
article: false
date: 2023-09-10
order: 5
---

# Java 简单网络通信 IO

## TCP 文本通信

对于客户端

```java
public class Client{
  public static  void main(String[] args){
    
    Socket socket = null;
    OutputStream = null;
    
    try{
      // 写入服务器的地址，端口号
      InetAddress serverIP = InetAddress.getByName("127.0.0.1");
      int port = 8808;
      
      // 创建 socket 链接
      socket = new Socket(serverIP, port);
      
      // 发送IO 消息流
      os = socket.getOutputStream();
      os.write("hello, this is hirsun".getBytes()); 
      
    } cache (Exception e){
      e.printStackTrace();
    } finally{
      
        if (os != null){
          try{
            os.close();
          }
          catch (IOException e){
            e.printstackTrace(); 
          }
        }
      	
        if (socket != null){
          try{
            socket.close();
          }
          catch (IOException e){
            e.printstackTrace(); 
          }
        }
      
    }
  }
}
```

对于服务端

```java
public class Server{
	public static void main(){
    
    ServerSocket serverSocket = null;
    Socket socket = null;
    Inputstream is = null;
    ByteArrayOutputStream baos = null;
    
    try{
      // 设置服务器地址
      serverSocket = new ServerSocket(8808);

      // 等待客户端连接
      socket = serverSocket.accept();
      
      // 读取客户端消息
      is = socket.getInputStream();
      
      // 通过管道流接一下, 避免字节乱码
      baos = new byteArrayOutputStream();
      byte[] buffer = new byte[1024];
      int len;

      // 把 is 逐步灌到 baos
      while ( (len = is.read(buffer)) != -1 ){
       baos.write(buffer, 0, len);
      }
      
      // 一次性打印 baos
      Systen.out.println(baos.toString());
      
    } catch(IOException e){
      e.printStackTrace();
    } finally{
      // 关闭资源
      baos.close();
      
      if (baos != null){
				try{
          baos.close();
        }
        catch (IOException e){
          e.printstackTrace(); 
        }
      }
      
      if (is != null){
				try{
          is.close();
        }
        catch (IOException e){
          e.printstackTrace(); 
        }
      }
      
      if (socket != null){
				try{
          socket.close();
        }
        catch (IOException e){
          e.printstackTrace(); 
        }
      }
      
      if (serverSocket != null){
				try{
          serverSocket.close();
        }
        catch (IOException e){
          e.printstackTrace(); 
        }
      }  
      
    }
  }
}
```

::: danger Inputstream 错误的读取文本

```java
byte[] buffer = new byte[1024];

// len 是一个变量，用于存储实际读取的字节数
int len;

// read(buffer) 会试图读取 buffer.length 个字节（即 buffer 数组的大小）并将其存储到 buffer 数组中
// 这个方法返回实际读取的字节数
while ( (len = is.read(buffer)) != -1 ){
  String msg = new String(buffer, 0, len);
  Systen.out.println(msg);
}
```

错误的的原因在于，字符可能会在1023 出隔断，读取时会出现乱码。应当先拼合字节，再转换成 string, 再打印，或者使用 `ByteArrayOutputStream`.

:::

## UDP 文本通信

::: tip

TCP 和 UDP 端口可重叠，每个协议均有65535个端口。 

:::

UDP 是无连接状态的，和TCP相比，你可以直接使用 `socket` 发包，而不需要和我服务器建立连接。

- 类似于发短信 点对点
- 包没有严格的客户端与服务端限制

```java
public class Client{
  public static void main (String[]args) throws Exception{
    
    InetAddress host = InetAddress.getByName("localhost");
    int port = 9090;
    
    // 1. 建立一个 socket
    DatagramSocket socket = new DatagramSocket();
    
    // 2. 建个包
		String msg = "Hello Server!";
    DatagramPacket packet = new DatagramPacket(msg.getBytes(), 0, msg.getBytes().length, host, port);
    
    // 3. 发送包
    socket.send(packet);
    
    // 4. 关闭流
    socket.close();   
 }
}
```

即使服务端没收到也不会报错。

```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class Server {
    public static void main(String[] args) throws Exception {
        // 开放端口
        DatagramSocket socket = new DatagramSocket(9090);

        // 接收数据
        byte[] buffer = new byte[1024];
        DatagramPacket packet = new DatagramPacket(buffer, 0, buffer.length);
        socket.receive(packet);

        // 打印数据
        System.out.println(new String(packet.getData(), 0, packet.getLength()));

        // 关闭端口
        socket.close();

    }
}
```

