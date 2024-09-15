---
article: false
date: 2021-05-01
index: 2
---

# Internal Memory

## Recap 

### Internal memory: Cache

- why? -- locality of references: CPU tends to access clusters of data at certain time「为什么？ -引用的位置：CPU倾向于在特定时间访问数据集群」
- the introduction of fast but small memory (Cache) between CPU and main memory「在CPU和主内存之间引入快速但较小的内存（Cache）」
- mechanism: dynamically copy clusters into Cache -- virtually, we are using fast and large memory「机制：将集群动态复制到Cache中-实际上，我们正在使用快速且大容量的内存」

### Design elements of Cache

- mapping function: how to map blocks to cache lines
  - direct mapping vs. associative mapping

other issues: replacement algorithms, writing policy, etc.

## Internal Memory

"Internal": the CPU can have direct access

- main memory, registers, cache
- ROM (read only memory)

There are different types of internal memory, but they share some common features「内部存储器的类型不同，但是它们具有一些共同的特征」

- implemented using semiconductor technology「使用半导体技术实现」
- random access method 「随机访问方法」
- cope with the speed of CPU「应付CPU的速度」

### Type

<img src="https://pic.hanjiaming.com.cn/2021/04/14/eb2dbb3e5c0e6.png" alt="image.png" title="image.png" />

**Random access memory (RAM): it is a mis-use of term. All the above memory use random aceess method; however, we usually use RAM to refer to main memory「随机存取存储器（RAM）：这是术语的错误使用。以上所有记忆均采用随机aceess方法；但是，我们通常使用RAM来引用主内存」**

## Memory Cell

Memory Cell -- the Basic Element of Memory「记忆单元-记忆的基本要素」

Despite of the memory types, all semiconductor memory cells share common properties

- two stable states, used to represent 0 and 1「两个稳定状态，分别代表0和1」
- can be written into (set the state)「可以写入（设置状态）」
- can be read to sense the state「可以读取以感测状态」

### Abstract Model

Three "terminals" for one cell:「一个单元的三个“终端”：」

- Select: select the cell for read or write operations
- Control: to write or to read
- Data: the bit

<img src="https://pic.hanjiaming.com.cn/2021/04/14/7d36987c08ce8.png" alt="image.png" title="image.png" />

### Implementation Technologies

<img src="https://pic.hanjiaming.com.cn/2021/04/14/b5d9b3851a851.png" alt="image.png" title="image.png" />

Capacitors「电容器」 and Transistors「晶体管」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/30768ee0530c6.png" alt="image.png" title="image.png" />

### Dynamic RAM Cells

Data is stored as the charge of capacitors「数据存储为电容器的电荷」

- high level of charge -- 1
- low level of charge -- 0
- dynamic: DRAM requires periodic charge refreshing to maintain data storage (capacitors have the tendency to leak charge)「动态：DRAM需要定期刷新电荷以维持数据存储（电容器有泄漏电荷的趋势）」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/7932f84c0ff55.png" alt="image.png" title="image.png" />

- Write: hight (low) voltage is applied to Bit line to charge the capacitor for 1 (0)「写：向位线施加高（低）电压以对电容器充电1（0）」
- Read: charge stored in the capacitor is fed out onto the Bit line, a sense amplifier can compare the capacitor voltage to a reference value 「读取：电容器中存储的电荷被馈送到位线上，读出放大器可以将电容器电压与参考值进行比较」

### Static RAM Cells

Static RAM Cells「静态RAM单元」

- binary bit is stored using flip-flop logic gates configurations -- essentially, transistors (as switches) and voltage「使用触发器逻辑门配置存储二进制位-本质上是晶体管（作为开关）和电压」
- static: the cell will hold the data as long as power is supplied to it (no need to refresh)「静态：只要供电，单元将保存数据（无需刷新）」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/4bce0d9a1021b.png" alt="image.png" title="image.png" />

- Four transistors (T1, T2, T3, T4) are cross connected in an arrangement that produces stable states -- represent 1/0「四个晶体管（T1，T2，T3，T4）交叉连接，产生稳定状态-表示1/0」
- Address line uses T5 and T6 to select this cell「地址行使用T5和T6选择该单元格」

- Read
  - stable state 1: C1 is high, C2 is low -> T1 and T4 are OFF, T2 and T3 are ON -> read high voltage from Bit line B「稳定状态1：C1为高，C2为低-> T1和T4截止，T2和T3导通->从位线B读取高电压」
  - stable state 0: C1 is low, C2 is high -> T1 and T4 are ON, T2 and T3 are OFF -> read low voltage from Bit line B
- Write
  - Apply high voltage (1) or low voltage (0) to Bit line B --> force the transistors into the proper states --> corresponding stable states「稳定状态0：C1为低电平，C2为高-> T1和T4导通，T2和T3截止->从位线B读取低电压」

### DRAM vs. SRAM

- Common
  - volatile -- need continuous power「常见：易挥发-需要持续供电」
- Difference
  - DRAM cell is simpler and smaller, thus denser (more cells per unit area) and less expensive「DRAM单元更简单，更小，因此密度更高（每单位面积更多的单元）且价格更低」
  - however, DRAM requires the supporting refresh circuitry「但是，DRAM需要支持的刷新电路」
  - DRAM tends to be favored for large memory requirement「DRAM倾向于满足大内存需求」
  - DRAM for main memory, SRAM for cache

## Read-Only Memory (ROM)

ROM characteristics「ROM特性」

- contains permanent data that cannot be changed (cannot write) -- not exactly, depending on the types of ROM「包含无法更改（无法写入）的永久数据-不完全取决于ROM的类型」

- data are burned into the chip during fabrication process -- relatively large fixed cost, and there is no room for error「数据在制造过程中被烧入芯片-固定成本相对较高，并且没有错误余地」
- nonvolatile, no need for continous power「非易失性，无需持续供电」

## Special Types of ROM

###  Programmable ROM (PROM)

Programmable ROM (PROM)「可编程ROM（PROM）」

- like ROM, it can be written into only once (after fabrication process)
- customers can use special equipment to electrically write once
- idea: each bit is locked by a fuse; initially all 1's in the chip, if burn the fuse, change 1 to 0 (write once)

<img src="https://pic.hanjiaming.com.cn/2021/04/14/5c19bc3e8eeaf.png" alt="image.png" title="image.png" />

### Read-Mostly Memory

Read-Mostly Memory (a variation of ROM「ROM的变体」)

- we can re-write the memory, but at a higher cost「我们可以重新写入内存，但是成本更高」
- useful for applications in which read operations are far more frequent then write operations, but for which nonvolatile storage is required「对于读操作比写操作更频繁但需要非易失性存储的应用程序很有用」
- three common types: EPROM, EEPROM, flash memory「三种常见类型：EPROM，EEPROM，闪存」

### Erasable Programmable ROM (EPROM)

Erasable Programmable ROM (EPROM)「可擦可编程ROM（EPROM）」

- before a write operation, all the storage cells must be erased to the same initial state by exposure to ultraviolet radiation「在写操作之前，必须通过暴露在紫外线下将所有存储单元擦除到相同的初始状态」
- then write electronically「然后用电子方式写」
- read -- exposure – write「阅读-曝光-写」
  erasable: through exposure (could take 20 mins)「可擦：通过曝光（可能需要20分钟）」
  more flexible than PROM「比PROM更灵活」

### Electronically Erasable Programmable ROM (EEPROM)

电子可擦可编程ROM（EEPROM）

- - updates (write operations) happen at byte level (not entire chip)「更新（写操作）发生在字节级别（不是整个芯片）」
  - however, write operation takes considerably longer than read (several hundred microseconds per byte)「但是，写操作要比读操作花费更长的时间（每字节几百微秒）」
  - more expensive and less dence (fewer bits per chip) than EPROM「比EPROM更昂贵，更省钱（每个芯片上的位数更少）」

### Flash Memory

- intermediate between EPROM and EEPROM「EPROM和EEPROM之间的中间层」
- erasure at block level (compred to byte-level and chip level)「块级别的擦除（与字节级别和芯片级别相比）」

### Summary of ROM

<img src="https://pic.hanjiaming.com.cn/2021/04/14/622e2c21f6c0e.png" alt="image.png" title="image.png" />

## Chip Logic

Semiconductor memory comes in package chips「半导体存储器包含在封装芯片中」

- each chip contains an array of memory cells「每个芯片包含一个存储单元阵列」
- essential「基本」 task: provide address to chip, and access bits「基本任务：提供芯片地址和访问位」

**how to organize and wire the cells in chips to satisfy the needs for addressing「如何组织和连接芯片中的单元以满足寻址需求」**

<img src="https://pic.hanjiaming.com.cn/2021/04/14/36d7de8acdc3b.png" alt="image.png" title="image.png" />

**Key issue: how to group cells into a logical piece of data「关键问题：如何将单元格分组为逻辑数据」**

- how many bits to read/write at a time
- one extreme: 1 bit a time「一个极端：一次1比特」
- the other extreme: one word a time (word: the unit for data processing in CPU)「另一个极端：一次一个字（字：CPU中用于数据处理的单位）」
- in between: k bits for one chip, combine multiple chips to get a word (example later)「介于两者之间：一个芯片的k位，合并多个芯片得到一个字（后面的示例）」

### Simple Example of 64 Cells

**Read/Write 1 bit a time (logical data unit = 1 bit)「一次读/写1位（逻辑数据单元= 1位）」** 

- each cell needs to have an address「每个单元都需要有一个地址」
- 64 = 2^{6}, we need 6 address lines「64 = 2 ^ {6}，我们需要6条地址线」
- remember decoder? we can use a 6-to-64 decoder「还记得解码器吗？我们可以使用6到64的解码器」
- 6 input address lines, 64 output select lines -- each is connected to the select terminal of the cell「6条输入地址线，64条输出选择线-每条连接到单元的选择端子」
- in the chip package, 6 address pins, 1 data pins「在芯片封装中，有6个地址引脚，1个数据引脚」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/72e7437a17b73.png" alt="image.png" title="image.png" width ="400px"/>

- we also need to consider the memory access cyles「我们还需要考虑内存访问周期」
- in each cycle, we provide an address to access 1 bit「在每个周期中，我们提供一个地址来访问1位」
- 64 cycles to access 64 bits --  too slow「64个周期访问64位-太慢」

**Read/Write 8 bits a time (logical data unit = 8 bits)「一次读/写8位（逻辑数据单元= 8位）」**

- cells are organized into 8 groups, each group containing 8 cells「单元格分为8组，每组包含8个单元格」
- one group share the same address「一组共享相同的地址」
- 3 address pins, 8 data pins「3个地址引脚，8个数据引脚」
  - 64/8 = 8
- less memory access cycles「更少的内存访问周期」

**Read/Write 4 bits a time (logical data unit = 4 bits)「一次读/写4位（逻辑数据单元= 4位）」**

- we can use two chips A and B「我们可以使用两个芯片A和B」
- access 4 bits from A, and 4 bits from B using the same address「使用相同的地址访问A的4位和B的4位」
- together, it is like accessing 8 bits one time「在一起，就像一次访问8位」
- more flexible for different processors「对于不同的处理器更加灵活」
- the size of the logical data unit is a key design parameter「逻辑数据单元的大小是关键设计参数」

### Example of 16-Mbit DRAM

It is implemented using four 4Mbit memory components

Each 4 Mbit component is a 2048 x 2048 square of cells (2^22 bits)「每个4 Mbit分量是一个2048 x 2048平方的单元格（2 ^ 22位）」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/ad8d12c9dd1b5.png" alt="image.png" title="image.png" />

**Use address to locate (select) the cell「使用地址查找（选择）单元格」**

- 2048 x 2048 square of cells = 2^{22} cells, intuitively「凭直觉」, we need 22 address lines
- however, there are only 11 address pins (A0 – A10) 
- solution: use an external select logic (a multiplexer), where input is the 22 address lines and output is the 11 address pins「解决方案：使用外部选择逻辑（多路复用器），其中输入是22条地址线，输出是11条地址引脚」
- effect: divided the 22 address lines into 2 groups, which are fed into the chip through 11 address pins separately「效果：将22条地址线分为2组，分别通过11个地址引脚馈入芯片」

**Use address to locate (select) the cell「使用地址查找（选择）单元格」**

- 11 row address lines/11 column address lines「11行地址线/ 11列地址线」
- use another two pins to indicate: RAS (row address select) and CAS (column address select)「使用另外两个引脚指示：RAS（行地址选择）和CAS（列地址选择）」
- then, use can use a 11-to-2048 decoder to select the corrsponding row and column --> locate a cell in one square「然后，可以使用11到2048解码器选择相应的行和列->在一个正方形中定位一个单元」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/b44508f7dab50.png" alt="image.png" title="image.png" />

### Read/Write operation

- 4 data lines (pins, D1 - D4), each connecting to one square「4条数据线（引脚D1-D4），每条连接到一个正方形」
- write: apply high/low voltage to the data lines to charge the capacitors「写：向数据线施加高/低电压以对电容器充电」
- read: use a sense amplifier to sense the voltage「阅读：使用感应放大器感应电压」
- two pins to control write/read: WE (write enable) and OE (output enable)「两个引脚控制写/读：WE（写使能）和OE（输出使能）」
- we can use multiple Chips to read/write a word at a time depending on the processor「我们可以使用多个芯片一次读取/写入一个word，具体取决于处理器」

### Summary of Chip Logic

Current technology:

- we can make very large capacity in a very small area「我们可以在很小的区域内制造很大的容量」
- however, the limit is bounded by the physical space needed for pins -- careful design to save number of pins is important「但是，该限制受引脚所需的物理空间限制-谨慎设计以节省引脚数很重要」

Chip Logic considerations「芯片逻辑注意事项：」:

- determine the number of data pins (how many bits to read/write at a time)「确定数据引脚的数量（一次读取/写入多少位）」
- determine the number of address pins (need consideration of address multiplexing)「确定地址引脚的数量（需要考虑地址多路复用）」
- need for additional buffers and controls「需要额外的缓冲区和控件」
- layout and wiring need to consider heat distribution (data pins are distributed on the two sides of the chip)「布局和布线需要考虑热量分布（数据引脚分布在芯片的两侧）」

## Memory Errors

- Hard Failure
  - permanent physical defect to cells「永久的硬件损坏」
  - replacement「替代以修复」
- Soft Error
  - content of the cell is modified, due to random, nondestructive event「由于随机，非破坏性事件，修改了单元格的内容」
  - the function of cell is still OK「单元格的功能还是好的」
  - example: the charging to the capacitor is not sufficient: 1 -> 0「比如电容器充电不足导致1->0
- Error Detection
  - knowing that there are errors in a block of data
- Error Correction
  - detect, and recover the correct contents「检测并恢复正确的内容」
  - correction is harder than detection「校正比检测难」
    - example: we know there are an even numuber of 1's in the data (detection is easy); detection is hard: there could be multiple combinations of errors「例如：我们知道数据中的偶数为1（检测很容易）；检测很难：可能有多种错误组合」

### Coding Theory

Coding theory itself is a fruitful field of study「编码理论本身是一个富有成果的研究领域」

general idea: use redundancy to encode the conditions for which correct data should satisfy -- redundancy is a function of original data: K = f(M)「总体思路：使用冗余编码正确数据应满足的条件-冗余是原始数据的函数：K = f（M）」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/4b16ed0e4944b.png" alt="image.png" title="image.png" />

### Framework of Error Correction

Framework of Error Correction「纠错框架」

<img src="https://pic.hanjiaming.com.cn/2021/04/14/db242feee716a.png" alt="image.png" title="image.png" />

Example: Hash Functions for Error Detection

<img src="https://pic.hanjiaming.com.cn/2021/04/14/68194656bae86.png" alt="image.png" title="image.png" />

### Encode for check

#### Warm-up: single parity code

- original data block M has 7 bits (abuse of term, M = 7)「原始数据块M具有7位（滥用项，M = 7）」
- attach a single bit K to the end of block (K=1)「将单个K附加到块的末尾（K = 1）」
- the code thus has 8 bits, M|| K --- this is a simple encoding process
  given M, we need to decide K「该代码因此具有8位，M || K-这是一个简单的编码过程」

#### Enconding rule

- function W(D) = number of 1's in data block D
- Rule: add K such that W(M||K) is even (even parity)「规则：加K使得W（M || K）为偶数（偶数）」
- example
  - M = 000 0011, W(M) = 2 -> set K = 0
  - M = 110 0111, W(M) = 5 -> set K = 1
- we also could have odd parity「我们也可能有奇偶校验」

#### One Error Detection

The single parity code is able to detect one error「单一奇偶校验码能够检测到一个错误」

- suppose the stored data is D, we can compute W(D)「假设存储的数据为D，我们可以计算W（D）」
- if W(D) is even --> no error; else one error「如果W（D）是偶数->没有错误；否则一个错误」
- note that the above detection algorithm relies on one essential assumption: there is at most one error 「请注意，上述检测算法基于一个基本假设：最多存在一个错误」
- also note that, we can only detect error, we do not know the position of the error (cannot correct the error)「还要注意，我们只能检测错误，我们不知道错误的位置（无法纠正错误）」

#### Example

- suppose M = 000 0011, W(M) = 2 --> K = 0
- store M||K = 000 0011 0 in the storage device
- some time later, we check this data block D by computing W(D)
- suppose W(D) = 3 --> error: e.g., 000 0111 0 or 000 0011 1
- suppose W(D) = 2 --> correct; but could also be 000 0101 0 (two errors, we assume that this could not happen)

#### The Essence

essence「精华」

we are using 1 redundant bit to encode two cases: 

- case 1: no error
- case 2: 1 error

question: can we extend this idea to general error-correcting code?

### Correct

#### General Case

Consider one error correcting code

- original data M bits, redundancy K bits; together N = M + K bits「原始数据M位，冗余K位; N = M + K位」
- again, we assume that there is at most one error「再一次，我们假设最多有一个错误」

Our goal is to correct one error (if happens) -- in other words, know the position of the error「我们的目标是纠正一个错误（如果发生）-换句话说，知道错误的位置」

there are a total of (N+1) cases. Why?「共有（N + 1）个案例。为什么？」

(N+1) cases:

- case 0: no error
- case 1: error at position 1
- case t: error at position t

- the essence of error correction code: use K bits to encode (N+1) cases「纠错码的本质：使用K位编码（N + 1）种情况」
- relation: 2^{K} >= M + K +1「关系：2 ^ {K}> = M + K +1」
- coding theory deals with the realization of the above encoding process using mathematical tools「编码理论使用数学工具处理上述编码过程的实现」

Overhead: K/M, which is the redundancy「冗余」 ratio「率」「开销：K / M，即冗余率」

- M = 4 -> K = 3 ( 2^3 = 8 >= 4 + 3 +1); K/M = 3/4
- M = 8 -> K = 4 ( 2^4 = 16 >= 8 + 4 +1); K/M = 4/8
- M = 16 -> K = 5 ( 2^5 = 32 >= 16 + 5 +1); K/M = 5/16

as M increases, the overhead decreases「随着M的增加，开销减少」

So, is M the larger the better?

- unfortunately, no
- remember the fundamental assumption: at most one error「记住基本假设：至多一个错误」
- as M increases, the probability of having more errors also goes up「增加」「随着M的增加，出现更多错误的可能性也会增加」

#### Case Study: (7-4) Hamming Code

Hamming Code「海明码」、parity bits「奇偶校验位」

- the classical one-error correction code, with (7-4) the most common setting「经典的-纠错码，最常见的设置是（7-4）」
- N = 7, M = 4 (original data), K = 3 (redundancy bits)
- we will not dig into「深入研究」 the mathematical「数学的」 details「我们不会深入研究数学细节」
- similar to single parity code, however, we now use three parity bits「与单个奇偶校验代码相似，但是，我们现在使用三个奇偶校验位」
- data bits: d1, d2, d3, d4「数据位：d1，d2，d3，d4」
- parity bits: p1, p2, p3, where each parity bit "cover" 3 data bits「奇偶校验位：p1，p2，p3，其中每个奇偶校验位“覆盖” 3个数据位」

<img src="https://pic.hanjiaming.com.cn/2021/04/19/942122c3d2e35.png" alt="image.png" title="image.png" />

- p1: cover d1, d2, d4, that is, number of 1's in p1||d1||d2||d4 should be even
- p2: cover d1, d3, d4
- p3: cover d2, d3, d4

##### Example

<img src="https://pic.hanjiaming.com.cn/2021/04/19/221a369946373.png" alt="image.png" title="image.png" />

##### More

Not Required

<img src="https://pic.hanjiaming.com.cn/2021/04/19/6767bc2be229d.png" alt="image.png" title="image.png" />

##### The code words

- there are a total of 16 valid code words (why? 4 "free" data bits)「共有16个有效代码字（为什么？4个“空闲”数据位）」
- the Hamming distance between every two code words is 3「每两个代码字之间的汉明距离为3」
- Hamming distance: the number of different bits「汉明距离：不同位数」
- this examples why Hamming code can correct 1 error「这个例子为什么汉明码可以纠正1个错误」

<img src="https://pic.hanjiaming.com.cn/2021/04/19/da2f8990b0a05.png" alt="image.png" title="image.png" />

批注：不明白在说什么......

## 引用

- COMP2421@PolyU PowerPoint