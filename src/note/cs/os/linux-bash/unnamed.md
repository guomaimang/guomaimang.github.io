---
article: false
date: 2022-05-01
index: 5
author: Hirsun

---

# 连载中

## 常用命令

```bash
ls -al #查看目录 
pwd #返回当前目录
cal #查看日历
ps -elf #查看进程
more #查看更多 可以组合 ps -elf|more

bash # start a subshell
exit # exit the subshell
```

### 组合命令

```bash
(ls; cal 2022) | wc
```

## echo

作用: 打印

```bash
echo -n "You must be "
# -n keeps output on the same line
```

## Variable

### 注意事项

- 等号两边不能有空格
- local variables 小写
- global variables / environment variables 通常大写

### 保留符

```bash
$$ # evaluates to the PID of current shell (not the current command/process)
```

### Usage

```bash
hello=world # 不建议，应当加上引号
name="Mickey Mouse"

echo $name # >>> name

PERSON=Mary # you may also use export again
export $PERSON
echo $PERSON

name1=John name2=”Mary Anne” 
$ a=1 b=3 c=5 d=10
# var1=str1 var2=str2 ... varN=strN
echo $name1 and $name2 # >>> John and Mary Anne
```

### Common Built-In Variables

- HOME: Store the full pathname of the home directory: where you will go to (home) when you just type cd. 
- PATH: Store a list of directories to be searched when running programs or shell scripts, separated by “:”. 
- PS1: Store primary prompt string, with a default value of '`\s-\v\$` ', meaning system-version then `$`. 
- PS2: Store secondary prompt string, with a default value of '> '. It is used for continuation of input lines. 
- PWD: Store current working directory set by cd command. 
- HOSTNAME
- UID
- PPID: Store process id of parent. 
- HISTSIZE

### Special Option Variables 

- history: Setting it will enable command history to be stored, useful for future, default to on. 

- noclobber: Setting it will prevent overwriting of files when using I/O redirection, default to off. 

- ignoreeof: Setting it will prevent accidental logging out with **`<Ctrl-D>`** (end of input), often used when entering data from keyboard, default to off. 

- allexport: Setting it will automatically export all modified variables, default to off. 

To turn on/off, use **set** **–o**/+o variable 

- **set –o noclobber** # turn on noclobber feature 
- **set +o history** # turn off history storage

### `$(str)`

将返回bash 执行 str 的结果

```bash
$ p2=”($PWD) $(whoami)- ”
$ echo $p2
# >>> (/home/12345678d) 12345678d-
```

## Array

### declare

```bash
var=(val1 val2 ... valN) # initialize an array of size N
var[i]=val # assign val to element i in array var
```

### access

```bash
${var[i]} # access element i in array var
${#var[i]} # return length of element i in array var
${#var[*]} # return number of non-null elements in array var
```

## Quotation

### Single quote (’str’) 

- The strong quote. 
- Enclosed string looks like literal. 
- No substitution and no execution is done. 

相当于忽略所有转义

### Double quote (”str”) 

- The weak quote. 
- Enclosed string is almost like literal. 
- Substitution is done for variable contents (prefixed with "`$`").
- Execution is done for back-quoted commands. 
- Watch out for "!!", which is trying to match a past command. 
- This is a bug in showing the current command. 

### Backquote

```bash
(`str`)
```

A special backquote enables a command to be executed 

In bash, it is more common to put it as **`$(str)`** instead. 

## Shell Scripts

- We use bash, so the first line is "`#!/bin/bash`". 
- Warning: never create a shell script called **test**. 
- **chmod 700 file** or **chmod u+x file** 

### Guidelines

- A shell script does not do unnecessary work. 
- A shell script should perform the task for which it is intended. 
- A shell script should run without errors. 
- Shell script program logic is clearly defined and apparent. 
- Shell scripts should be reusable. 

## Read input

```bash
echo –n ’Please enter your name: ’
read name

read –p ’Please enter your name: ’ name
echo name is $name
```

## Command Line Argument

- The script name is assigned to `$0` (inclusive of the `./ `part of the path). 
- All words following the script name are assigned to` $1, $2, $3 … ${10}, ${11},` and so on.

