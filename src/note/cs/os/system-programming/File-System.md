---
article: false
date: 2022-10-26
order: 4
headerDepth: 2




---

# Unix File System

- File system provides abstractions of naming, storage, and access of files.
- A file is a container of some information: data, program.

在 Unix 中，设备（磁盘、磁带、CD ROM、屏幕、键盘、打印机、鼠标等）也被视为文件，以便为应用程序提供一个统一的、独立于设备的接口。

## How to handle devices

操作系统向程序员提供 system calls，以执行对设备的控制和I/O。这些系统调用由 device drivers 处理，它隐藏了设备操作的细节，并保护设备不被非法使用。

一些操作系统为每种类型的支持设备提供了特定的系统调用。**在Unix中，磁盘文件和其他设备的命名和访问方式与数据文件相同。**

- Unix 提供统一的设备接口（称为 file descriptors）
- Allow uniform access to most devices through file system calls: `open`, `close`,` read`, `write`, etc.

## Types of files

- Regular file：磁盘上的普通数据文件—包含组织成线性数组的数据字节
- Special file：代表一个设备的文件—位于`/dev`目录中
  - Block special file：以块或块的形式传输信息的设备，就像磁盘、CD ROM 一样
  - Character special file: 以必须顺序访问的字节流传输信息的设备，例如键盘、打印机
  - FIFO special file: 用于进程间通信 (e.g. pipe).
- Directories: provided to allow names (not physical locations) of files to be
  - 用户给出一个文件名，Unix将其转换为物理文件的位置--通过目录完成。

::: tip 普通文件和目录文件的区别

- Contents: data vs file info
-  Operations: what can be done and who can do them

:::

对于每个文件，你可以看到在用户和组主之前有十个字符。第一个字符告诉我们该文件的类型。

<img src="https://pic.hanjiaming.com.cn/2022/10/22/aa2970de59c07.png" alt="1666413290222.png" style="zoom: 33%;" />

- l 指的是软链或符号链接，硬链还是一般文件。

接下来的9个字符代表用户、组和所有的访问权分配。

<img src="https://pic.hanjiaming.com.cn/2022/10/22/53b88adf3e04d.png" alt="1666413413633.png" style="zoom:33%;" />



## Hierarchical file organization

Unix文件系统有一个分层的树状结构，内部节点是目录，叶子节点是文件。

- 绝对的或完全限定的路径名唯一地指定了一个文件，例如，/dirA/My1.dat不同于/dirA/dirB/My1.dat。
- 我们也可以使用相对路径名，它从当前目录而不是根目录开始，例如，./My2.dat（如果当前工作目录是dirB）。

<img src="https://pic.hanjiaming.com.cn/2022/10/22/3335a8d95dd2e.png" alt="1666413817343.png" style="zoom:33%;" />

## Current working directory

在任何时候，每个进程都有一个相关的目录，称为当前工作目录（cwd）。

`pwd` prints the name of the cwd.

The C library function getcwd returns the pathname of the current working directory

- `char *getcwd(char *buf, size_t size)`,
- size指定路径名的最大长度。如果超过最大长度，则返回NULL，并将errono设置为ERANGE。

```c
#include <unistd.h> 
#include <stdio.h> 
#include <errno.h> 
int main(){
	char cwd[1024];
	if (getcwd(cwd, sizeof(cwd)) != NULL)
		printf("Current working dir: %s\n", cwd); 
  else perror("getcwd() error");
	return 0;
}
```

## File Representation

有关文件系统结构的信息同时存储在 disk and main memory.

### i-node

- Unix 使用称为 i-node 的逻辑结构来存储有关磁盘上文件的信息—文件系统中的每个文件都由一个 i-node 表示
- i-nodes are stored at the front of each region of disk that contains a Unix file system.

::: info 文件存储

文件储存在硬盘上，硬盘的最小存储单位叫做"扇区"（Sector）。

操作系统读取硬盘的时候，不会一个个扇区地读取，这样效率太低，而是一次性连续读取多个扇区，即一次性读取一个"块"（block）。这种由多个扇区组成的"块"，是文件存取的最小单位。"块"的大小，最常见的是4KB，即连续八个 sector组成一个 block。

文件数据都储存在"块"中，那么很显然，我们还必须找到一个地方储存文件的元信息，比如文件的创建者、文件的创建日期、文件的大小等等。这种储存文件元信息的区域就叫做inode，中文译名为"**索引节点**"。

每一个文件都有对应的inode，里面包含了与该文件有关的一些信息。

:::

inode包含文件的元信息，具体来说有以下内容：

- 文件的字节数
- 文件拥有者的User ID
- 文件的Group ID
- 文件的读、写、执行权限
- 文件的时间戳，共有三个：
  - ctime指inode上一次变动的时间
  - mtime指文件内容上一次变动的时间
  - atime指文件上一次打开的时间。
- 链接数，即有多少文件名指向这个inode
- 文件数据block的位置

![1666426736828.png](https://pic.hanjiaming.com.cn/2022/10/22/c5ad5888df03e.png)

- 12 direct pointer can point to 12 x 8KB = 96KB of file content.
- 单间接指针指向一个直接指针块。一个块可以包含8KB/4bytes = 2K指针 = 2048个指针。2048个直接指针可以指向2048 x 8KB = 16MB的文件内容。
- 双间接指针指向 2048 个单间接指针，即 2048 x 16 MB = 32 GB 的文件内容。
- 同样，三重间接指针指向 64 TB 的文件内容。
- 所以一个 i-node 最多可以指向64TB+32GB+16MB+96KB的文件内容。

可以用stat命令，查看某个文件的inode信息：`stat example.txt`

![1666415253328.png](https://pic.hanjiaming.com.cn/2022/10/22/4d29030027f53.png)

总之，除了文件名以外的所有文件信息，都存在inode之中。

### i-node size

inode也会消耗硬盘空间，所以硬盘格式化的时候，操作系统自动将硬盘分成两个区域。一个是数据区，存放文件数据；另一个是inode区（inode table），存放inode所包含的信息。

每个inode节点的大小，一般是128字节或256字节。inode节点的总数，在格式化时就给定，一般是每1KB或每2KB就设置一个inode。假定在一块1GB的硬盘中，每个inode节点的大小为128字节，每1KB就设置一个inode，那么inode table的大小就会达到128MB，占整块硬盘的12.8%。

查看每个硬盘分区的inode总数和已经使用的数量，可以使用df命令: `df -i`

![1666418369201.png](https://pic.hanjiaming.com.cn/2022/10/22/3d755bfc1047e.png)

- 目录文件的读权限（r）和写权限（w），都是针对目录文件本身
- 由于目录文件内只有文件名和inode号码，所以如果只有读权限，只能获取文件名，无法获取其他信息
- 其他信息都储存在inode节点中，而读取inode节点内的信息需要目录文件的执行权限（x）

### inode 号码

每个inode都有一个号码，操作系统用inode号码来识别不同的文件。Unix/Linux系统内部不使用文件名，而使用inode号码来识别文件。对于系统来说，文件名只是inode号码便于识别的别称或者绰号。

表面上，用户通过文件名，打开文件。实际上，系统内部这个过程分成三步：

- 首先，系统找到这个文件名对应的inode号码；
- 其次，通过inode号码，获取inode信息；
- 最后，根据inode信息，找到文件数据所在的block，读出数据。

使用ls -i命令，可以看到文件名对应的inode号码：`ls -i example.txt`

![1666419041956.png](https://pic.hanjiaming.com.cn/2022/10/22/ec27d651cd7ae.png)

### 目录文件

目录（directory）也是一种文件.

目录文件的结构非常简单，就是一系列目录项（dirent）的列表。每个目录项，由两部分组成：

- 所包含文件的文件名
- 以及该文件名对应的inode号码。

ls -i 命令列出整个目录文件，即文件名和inode号码：`ls -i /etc`

![1666419329366.png](https://pic.hanjiaming.com.cn/2022/10/22/ff48f54ad8f5c.png)

### 硬链接

Unix/Linux系统允许，多个文件名指向同一个inode号码。

这意味着

- 可以用不同的文件名访问同样的内容；
- 删除一个文件名，不影响另一个文件名的访问。

这种情况就被称为"硬链接"（hard link）：`ln 源文件 目标文件`

![1666419982918.png](https://pic.hanjiaming.com.cn/2022/10/22/b54fcb9d49a87.png)

运行上面这条命令以后，源文件与目标文件的inode号码相同，都指向同一个inode。inode信息中有一项叫做"链接数"，记录指向该inode的文件名总数，这时就会增加1。

反过来，删除一个文件名，就会使得inode节点中的"链接数"减1。当这个值减到0，表明没有文件名指向这个inode，系统就会回收这个inode号码，以及其所对应block区域。

这里顺便说一下目录文件的"链接数"。创建目录时，默认会生成两个目录项："."和".."。前者的inode号码就是当前目录的inode号码，等同于当前目录的"硬链接"；后者的inode号码就是当前目录的父目录的inode号码，等同于父目录的"硬链接"。所以，任何一个目录的"硬链接"总数，总是等于2加上它的子目录总数（含隐藏目录）。

### 软链接

文件A和文件B的inode号码虽然不一样，但是文件A的内容是文件B的路径。因此，无论打开哪一个文件，最终读取的都是文件B。这时，文件A就称为文件B的"软链接"（soft link）或者"**符号链接（symbolic link）**"。

`ln -s`命令可以创建软链接: `ln -s 源文文件或目录 目标文件或目录`

![1666426525215.png](https://pic.hanjiaming.com.cn/2022/10/22/2f629ecf2843d.png)

### inode的特殊作用

由于inode号码与文件名分离，这种机制导致了一些Unix/Linux系统特有的现象。

- 有时，文件名包含特殊字符，无法正常删除。这时，直接删除inode节点，就能起到删除文件的作用。
  - 用INODE直接删除文件: `find . -inum INODE_NUM -delete` 
- 移动文件或重命名文件，只是改变文件名，不影响inode号码。
- 打开一个文件以后，系统就以inode号码来识别这个文件，不再考虑文件名。因此，通常来说，系统无法从inode号码得知文件名。

第3点使得软件更新变得简单，可以在不关闭软件的情况下进行更新，不需要重启。因为系统通过inode号码，识别运行中的文件，不通过文件名。更新的时候，新版文件以同样的文件名，生成一个新的inode，不会影响到运行中的文件。等到下一次运行这个软件的时候，文件名就自动指向新版文件，旧版文件的inode则被回收。

## Access File in C

在C语言程序中，文件可以通过 file descriptors 或 file pointers 访问，which provide logical names (handles) for performing device-independent I/O.

- The Unix file system calls use file descriptors (via open, read, write, close, and ioctl).
- The ANSI C I/O library uses file pointers (via fopen, fscanf, fprintf, fread, fwrite, fclose, etc.).

File descriptors (*in unistd.h*) for standard input, standard output, and standard error *files* are STDIN_FILENO, STDOUT_FILENO, and STDERR_FILENO; While file pointers (*in stdio.h*) are stdin, stdout, and stderr;

### File descriptor

#### System File Table

SFT条目包含关于一个文件是否被打开读/写、权限、锁、读/写偏移等信息。SFT 中的多个条目可能指向同一个物理文件。

<img src="https://pic.hanjiaming.com.cn/2022/10/22/75e471699f8d5.png" alt="1666427298266.png" style="zoom:33%;" />

三个文件自动打开：

- STDIN_FILENO: standard input 
- STDOUT_FILENO: standard output 
- STDERR_FILENO: standard error 

Corresponding to constants 0, 1, 2 in unistd.h

当新文件被打开时，它被分配到最低的可用FD。

访问文件进行I/O是一个三步骤的过程，无论是普通文件还是设备。

1. Open the file for I/O
2. Read and write to the file
3. Close the file when finished with I/O

#### File descriptor: Read

```c
// Open a file
int open(const char* pathname, int flags)
int open(const char* pathname, int flags, mode_t mode)
```

- pathname : 文件的绝对或相对路径
- flags : 必须包括以下访问模式之一 O_RDONLY, O_WRONLY, O_RDWR, 或更多，使用`|` 表示
  - O_CREAT: 如果路径名不存在，则作为一个普通文件创建；必须添加访问权限模式参数（例如0644）。
  - O_APPEND：文件以追加模式打开。
- mode_t mode: 访问权限模式参数

```c
// Returns the opened file's file descriptor or –1 if an error occurred (the errno is set accordingly)

// fd : file descriptor to read from
int fd = open("someFile", O_RDONLY);
// buffer : pointer to an array
char buffer[4];
// count  = 4*sizeof(char) : number of bytes to read
// Returns number of bytes read or –1 if an error occurred
int bytes = read(fd, buffer, 4*sizeof(char));
```

#### File descriptor: Write

```c
bytes = write(fd, buffer, count);
int fd = open("someFile", O_WRONLY|O_CREAT, 0644);
// Returns number of bytes written or –1 if an error occurred
char buffer[4];
int bytes = write(fd, buffer, 4*sizeof(char));
```

#### File descriptor: Close

```c
return_val = close(fd);
```

- Closes an open file descriptor 
- Returns 0 on success, -1 on error

### File pointers

- 一个文件指针指向一个数据结构FILE，在进程的用户区称为文件结构。
- A file structure contains a buffer and a file descriptor (so a file pointer is a handle to a handle)

下面的代码段打开文件/home/ann/my.dat进行输出，然后写一个字符串到文件。

```c
#include <stdio.h>
FILE *myfp;
if ((myfp = fopen("/home/ann/my.dat", "w")) == NULL)
	fprintf(stderr, "Could not fopen file\n"); 
else
	fprintf(myfp, "This is a test");
```

文件指针（通过FILE数据类型）被用于C库中的以下高级I/O函数中。

```c
fopen()
printf()
scanf()
fclose()
```

#### fopen() and fclose()

```c
// Path: char*, absolute or relative path
FILE *file_stream = fopen(path, mode)
```

```
r: open file for reading
r+ : open file for reading and writing
w: overwrite file or create file for writing
w+ :open for reading and writing; overwrites file 
a: open file for appending (writing at end of file) 
a+ : open file for appending and reading
```

`fclose(file_stream)`: Closes the opened file represented `by file_stream`

#### printf()

<img src="https://pic.hanjiaming.com.cn/2022/10/22/a19d8d9c8e8ed.png" alt="1666430299417.png" style="zoom:33%;" />

```
%d,%i – decimal integer
%u – unsigned decimal integer
%o – unsigned octal integer
%x,%X – unsigned hexadecimal integer 
%c – character
%s – string or character array
%f – float
%e,%E – double (scientific notation) 
%g,%G – double or float
%% – outputs a % character
```

#### scanf()

`scanf(formatted_string, ...)` : 与 printf 类似的语法，只有格式化的字符串代表您正在读取的数据。

```c
// 前导空格是要求 scanf 忽略任何空格（包括换行符）字符。
scanf( "%d %c %s", &int_var, &char_var, string_var);
```

::: tip 

刷新输入缓冲区中的 '\n' 的其他方法包括

- 在调用 scanf() 后使用 getchar()
- 使用 `%*c`
- 但最好是使用 fgets() 来获取一行，而不是使用 scanf

:::

#### printf() 和 scanf() 系列

- Prints to a file stream instead of `stdout`: `fprintf(file_stream, formatted_string, ...)`
- Reads from a file stream instead of `stdin`: `fscanf(file_stream, formatted_string, ...)`
- Prints to a character array instead of `stdout` : `sprintf(char_array, formatted_string, ...)`
- Reads from a string instead of `stdin`: `sscanf(char_array, formatted_string, ...)`

## I/O redirection

<img src="https://pic.hanjiaming.com.cn/2022/10/22/d430bdaa45517.png" alt="1666433014689.png" style="zoom: 67%;" />

回顾一下：为了访问一个文件，一个进程使用一个 file descriptor，它是 process file descriptor table 中的一个索引，而这个索引又指向系统文件表中的一个条目。

<img src="https://pic.hanjiaming.com.cn/2022/10/22/8fd3e30e0ec5f.png" alt="1666431775699.png" style="zoom: 33%;" />

重定向是指进程修改其文件描述符表项，使其指向系统文件表中的一个不同的条目。考虑一下cat命令，它从一个文件中读取数据并输出到stdout。下面的命令将stdout重定向到my.file : `cat test > my.file`

<img src="https://pic.hanjiaming.com.cn/2022/10/22/8f1a47c9feb05.png" alt="1666431832344.png" style="zoom:33%;" />

### Realization using dup()

## pipe

系统调用pipe()返回两个文件描述符，我们可以通过它们访问管道的输入/输出（一种I/O机制）。

```c
int fd[2];
int pipe(int fd[2]); 
// Return: 0 success; -1 error
```

<img src="https://pic.hanjiaming.com.cn/2022/10/22/fc94934ba9cda.png" alt="1666432477819.png" style="zoom:33%;" />

### dup()

`int dup(int oldfd)`将给定的文件描述符复制到文件描述符表中最低编号的未使用的文件描述符。

```c
#include<stdio.h>
#include<fcntl.h>
#include<unistd.h>
char* cmd[] = {"/bin/ls", "-l", 0};
int main(int argc, char* argv[]){
	int fd = open(argv[1], O_WRONLY | O_CREAT, 0600);
	//fd will be 3; a file will be opened in write mode
	int fd2 = dup(fd); //duplicate the fd-th pointer to entry 4, the lowest available entry
	close(STDOUT_FILENO);
	dup(fd); //duplicate the fd-th pointer into entry 1
	execvp(cmd[0], cmd); //the old process image is replaced by the new process image for ls
	close(fd); //close file descriptor 3 in the parent process.
	return;
}
```

<img src="https://pic.hanjiaming.com.cn/2022/10/23/4db55bb062cd4.png" alt="1666498785493.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/10/23/b9dde1caea8d6.png" alt="1666498808600.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/10/23/9ed8528c0daad.png" alt="1666498860013.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/10/23/3112715309d11.png" alt="1666498884479.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2022/10/23/24442f95f7d1b.png" alt="1666498915860.png" style="zoom: 33%;" />

::: note exec 是否保留文件描述符？

是的，许多程序（包括你的 shell）都依赖于这个特性。如果不是这样，您的程序将在没有打开标准输入/输出/错误文件描述符的情况下启动！当shell运行一个程序时，它`fork`是`dup2`打开的tty文件描述符为0、1、2，然后`execve`是你的新程序。

:::

## Ref.

- https://www.ruanyifeng.com/blog/2011/12/inode.html
- 03-COMP3438-2022fall@HKPU
- https://stackoverflow.com/questions/22241000/does-exec-preserve-file-descriptors
