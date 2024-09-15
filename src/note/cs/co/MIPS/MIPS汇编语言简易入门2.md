---
article: false
date: 2021-05-01
---

# MIPS汇编语言简易入门2

## Review

### The role of assembly language

- a symbolic human-understandable language（一种象征性的人类易懂的语言）
- the symbolic representation of machine language（机器语言的符号表示）
- assembly language —> assembler —> machine language
- two specific roles: 
  1. high-level language — complier — assembly language
  2. use assembly language for programming directly

### Brief introduction to MIPS

- register-based architecture

- Reduced Instruction Set Computer (RISC)

- three key points: (1) registers (2) memory (3) instructions

  - 10 temporary registers t0-t9
  - $0  : constant 0

- 32 general-purpose registers, each having 32 bits

- - naming: numbers or specific names
  - some are reserved, some are used by user programmers
  - other registers: Hi and Lo, etc.

### Memory and Address in MIPS Situation

- byte, half-word, word, double-word
- each byte has a 32-bit long address
  - contiguous bytes and the address
  - the address of an instruction is always the multiply of 4

## Hello, Assembly World

Note that the overflow mentioned in this article is **Arithmetic Overflow**

### Example of Add

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/d9fadb0fc666e.png" alt="CleanShot 2021-02-17 at 14.03.34@2x.png" title="CleanShot 2021-02-17 at 14.03.34@2x.png" />

- .text：以下几行是程序的源代码
- .globl main，标识符“ main”将在此源文件之外（即全局使用）用作主内存中特定位置的标签；它定义了一个符号地址，它是源代码中的一个名称，指代内存中的位置。在此示例中，“ main”代表第一条机器指令的地址（0x00400000）

### Integer Arithmetic

寄存器中使用32位表示整数; const 为 16位,补齐后为32位。

In MIPS instructions, constant use hex or signed number. But the the memoey will save it as encoding. If const is a negative number, const will automatically by two's complement represention convert  to binary encoding. **Const is Immediate,which is lenth of 16 bit (max in dec = 2^16 = 65536) **

MIPS programs itself does not record if a number is signed or un signed. This is the responsibility of programmers.

#### Arithmetic Overflow

The concept of overflow is artificially determined. It has nothing to do with the program.

**We generally think that** in Unsigned form

- overflow: the carry out bit of the highest column is 1
- e.g., 1010 + 1100 = 1 0110

**We generally think that** in 2’s complement form

- recall: there is an overflow if both operands(操作数) have the same sign but the result has the opposite sign

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/d1ca28187f0ca.png" alt="CleanShot 2021-02-17 at 17.01.00@2x.png" title="CleanShot 2021-02-17 at 17.01.00@2x.png" />

So，how can we realize it?  The right to determine if use overflow judgment is in the hands of the programmer. We can use the function of MIPS itself to check whether the first bit is 1. As for whether to use it or not, the programmer shall judge by himself.

## Add Instructions

### Instruction addu and add

addu d, s, t

- s + t -> d ( s, t, d all are registers)
- meaning of “u”: ignore the outcome's "overflow register" bit
  **Note: it does not mean “unsigned”, maybe you can undeerstand it as "unchecking".**

add d, s, t

- s + t -> d ( s, t, d all are registers)
- difference: detect outcome's"overflow register" bit and when the outcome's "overflow register" bit =1, there will cause an program interrupt

`ADD`和`ADDU`都可以适用于**有符号/无符号数**的加法，其区别只是**是否检测 "detect outcome's"overflow register" bit 并作出操作**

Most assembly language programmers deal with Arithmetic Overflow by making sure that the operands won’t cause it. Usually, they will use addu.

### Instruction addiu

- addiu: add immediate
  - immediate value: recall I-type instructions
  - addiu d, s, const
  - s + const -> d; 

Const has 16 bits. Again, we have the problem: add s (32 bits) and const (16 bits)

- recall, we have zero-extension for bit-wise OR, ori
- sign-extension: copy the 15th bit (most significant bit)
- 1111 1111 1111 1111   **1** 010 1101 1110 1101

### Subtraction Instructions

- subu/sub   in constrast to  addu/add
  - subu/sub d, s, t
  - s - t -> d
- there are no subi/subiu
  - instead addi/addiu is used
  - example: if you want to subtract 3, use addiu $8, $10, -3

If const is a negative number, const will automatically by two's complement represention convert  to binary encoding.

### Example

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/7b61d349217df.png" alt="CleanShot 2021-02-17 at 18.44.48@2x.png" title="CleanShot 2021-02-17 at 18.44.48@2x.png" />

这个program 是计算5 *x -24，我们假定x =12

1. 使用ori将 12 与 0 的 bitwise or 值放到 $8
2. 使用 $9 赋值为 shift left 2位 的 $8，在十进制上 $9  =  $8 * 2^2，即$9 = 4x = 4*12
3. $9 = $9 + $8，即在十进制上，$9 = 5x
4. $9 = $9 - 74

### Summary of addition instructions

| type | instruction |
| ---- | ----------- |
| load const to r | ori r, $0, const |
| load r2 to r1 | ori r1, $0, r2 |
| r2 = r1 + const | addiu r2, r1 ,const |
| r3 = r2 + r1    | addu r3, r1, r2     |
| r2 = r1 - const | addiu r2 ,r1 , -3   |
| r3 = r1 -  r2   | subu r3, r1, r2     |

## Multiplication Instructions

How many bits do we need?

- check decimal: 99 x 99 = 9801
- generally: the product of two integers expressed with N-bit binary may need 2N bits
- that is, we now need two registers to store the result

### Hi and Lo registers

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/1b898294294ab.png" width= "400px">



### Instructions mult and multu

Again, Note that MIPS programs itself does not record if a number is signed or un signed. This is the responsibility of programmers.

mult s, t / multu s, t

- automatically stores the result in hi and lo
- difference: mult for 2’s complement form; multu for unsigned
- both mult and multu would not check for overflow 
  (but overflow could happen — again, it’s the programmer’s responsibility; blame the programmers)

The reason for the distinction: the multiplication method of signed and unsigned numbers is different. But it is the same in addition.

### Access the Multiplication Result

Result (two parts) is stored in hi and lo

- two specific instructions:
  - mfhi d # move from hi to register d 
  - mflo d # move from lo to register d
  - you have to move the result from hi and lo to registers first

note: no other instructions can access hi and lo

### Example

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/ac429a480d833.png" alt="CleanShot 2021-02-18 at 09.53.08@2x.png" title="CleanShot 2021-02-18 at 09.53.08@2x.png" />

## Division Instructions

div and divu

With N-bit integer division, we have two results of N-bit each

op1 / op2: op1 = op2 x quotient + remainder

again, we need hi and lo to store the results

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/6e1c81c87f7c4.png" alt="image.png" title="image.png" />

div s, t and divu s, t : divide s by t; div for 2’s complement, divu for unsigned

#### Memory Access

Memory access: how to copy data from memory into registers, and also, from registers to memory.

All operations are conducted over registers— need to move operands in registers first

- load: memory -> register
- store: register -> memory

**Recall: Memory Address in 32-bits** 

1. Basic unit is byte — each byte has an address (32bits)
2. memory is access in contiguous bytes: e.g., word (four bytes)
   We use the address of the lowest-byte to refer to the contiguous bytes
3. alignment restriction: the address of a word is always a multiple of four
4. a instruction is one-word long — the address of an instruction is always word aligned

### Two instructions: lw and sw

- use a base register and offset to calculate address
- lw d, offset (b)
  - b is a register storing the base address; 
  - offset is a 16-bit number in 2’s complement form; 
  - address = base address + offset; load the content in address to register d

similarly, we have sw t, offset (b)

### Set the Base Address

Combination of two instructions lui and ori

- lui d, const # copy const to the upper two bytes (16 bits) of the register d **(the lower two bytes are 0)**
- ori d, s, imm # if we use $0, equivalently, **we set the lower two bytes of d as imm (why lower two bytes? — zero extension)**

As a result: d stores the desired base address

Isn’t it complex if setting the base address whenever loading or storing data?
note: address = base address + offset
once base address is set, we can vary the offset to access memory

It would be nice if we can use symbols to represent addresses in memory
much better readability — symbolic language

Fortunately, MIPS supports this feature.We can use names (symbols) to refer to memory locations. e.g., x, y, z, boy, age, …  These names are called symbolic addresses

### Symbolic Address

#### symbolic address

the symbolic address means the address where the symbol put in, not the address the symbol point to.

The data section in MIPS starts at address 0x10000000.

#### Example

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/1cb126d68318d.png" alt="CleanShot 2021-02-18 at 18.39.38@2x.png" title="CleanShot 2021-02-18 at 18.39.38@2x.png" />

As a result

- the symbolic address x = 0x10000000
- symbolic address poly = 0x10000004 
  (each byte has an address, a word = 4 bytes)

Equivalently, we have defined two values at two memory locations: value 17 at x (0x10000000), value 0 at poly (0x10000004)

## 考试笔记

1. Write the assembly instruction that fills register $10 with 0x10000000

   - A. ori $10, $0, 0x10000000
   - B. ori $10, $10, 0x1000
   - C. lui $10, 0x10000000 
   - 正确 D. lui $10, 0x1000

因为ori 拓展高位为0，lui拓展低位为0