---
article: false
date: 2021-05-01
index: 1
---

# Computer and Cache Memory

## Computer components revisited

<img src="https://pic.hanjiaming.com.cn/2021/04/07/b306fada01c11.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/07/70b7fd8eb1e55.png" alt="image.png" title="image.png" />

## Computer Memory 

Computer memory refers to any physical device capable of storing information「计算机内存是指能够存储信息的任何物理设备」

a wide range of type, technology, performance, cost, etc. --- Characteristics of Memory「类型，技术，性能，成本等广泛的范围-内存的特征」

Memory organization: select the right memory, and put it to the right place

### Motivation

Choosing the right memory (physical device) is just like buying the right desk「选择合适的内存（物理设备）就像购买合适的办公桌」

Underlying「基本的」 learning goals:

- trade-off between performance and cost
- design philosophies「哲理」/techniques to use constrained cost to achieve better performance「设计哲学/技术以使用有限的成本来获得更好的性能」

### **Characteristics** of Memory 

Memory can be categorized「分类」 from many aspects「方面」

- the technology it uses
- the physical media
- the cost
- the access speed
- the location (where it is in the computer)

#### Location

- internal memory or external memory?
  - internal: registers in processor, main memory, cache, etc.
  - external: the peripheral storage devices, such as disk and tape -- they are accessible to the processor via I/O controllers

注意：一般在持久在主板上插着的 Memory 算 internal memory

#### Access method

##### Sequential Access

「顺序访问」

- memory is organized into units of data (records)「内存以数据（记录）为单位进行组织；」; 
- access each records in sequence: move from a current location to the desired location sequentially「依次访问每个记录：从当前位置顺序移动到所需位置」
- as a result, the time to access an arbitrary record is highly variable「非常可变的」

example: tape「磁带」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/3d59e9efb4597.png" alt="image.png" title="image.png" />

##### Direct Access/Random Access
- each location in the memory has a unique address「内存中的每个位置都有一个唯一的地址」
- direct access often refers to secondary devices such as disks (access the block of data, may plus sequential search)「直接访问通常是指诸如磁盘之类的辅助设备（访问数据块，可能还需要顺序搜索）」
- random access often refers to main memory or cache「随机访问通常是指主内存或缓存」
- the time to access a given location is typically independent of the sequence of prior accesses and is often constant「访问给定位置的时间通常与先前访问的顺序无关，并且通常是恒定的」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/a0bd5e5c66dbb.png" alt="image.png" title="image.png" />

#### Access Time (latency)

- Measures of Performance -- Access Time (latency)「性能指标-访问时间（延迟）」
- for random access, the time it takes to perform a read or write operation, i.e., from the time when an address is presented to memory to the time when data have been stored or become available「对于随机访问，执行读或写操作所花费的时间，即 **从将地址给内存的时间 到 数据已存储或可用 的时间**」
- for non-random access, from the time the instruction is issued to the time the data position is located for read/write operation「对于非随机访问，从 **发出指令的时间到为读/写操作定位数据位置** 的时间」

#### Memory Cycle Time

Measures of Performance -- Memory Cycle Time

Primarily「主要」 applied to random access memory「主要应用于随机存取存储器」：it consists of the access time plus any additional time required before a second access can be made (cycle)「它由 访问时间加上 任何额外的时间 在第二次访问可被执行前」

Example: in computer games, skills (QWER) + cool down「在电脑游戏中，技能（QWER）+冷静下来」

it is concerned with the system bus「它与系统总线有关」

**An associated concept is transfer rate = 1/memory cycle time**  
频率一般是这样计算出来的

#### Physical materials/technologies

- semiconductor: RAM, Cache「高速缓存」
- magnetic: hard-drive
- solid-state devices (a kind of semiconductor technology); replace hard-drive「固态设备（一种半导体技术）；替代硬盘」
- optical: CD「光学的：CD」

#### Volatile vs. Non-volatile

Physical features「物理特性」 -- Volatile vs. Non-volatile

- Volatile memory: need power to maintain the stored information (memory is lost when power is off), e.g.,  registers, RAM「易失性内存：需要电源来维护存储的信息（电源关闭时内存丢失），例如寄存器，RAM」
- non-volatile memory: no need to be charged all the time, e.g., hard drive「非易失性存储器：无需一直充电，例如硬盘驱动器」

#### Erasable vs. Non-erasable

Physical features -- Erasable vs. Non-erasable

- erasable: can be deleted or rewritten with new data, e.g., registers, hard drive
- non-earsable: cannot be delelted/rewritten, e.g., ROM (Read Only Memory), CD

<img src="https://pic.hanjiaming.com.cn/2021/04/07/e2098839ffa27.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/07/04b38cc8be69f.png" alt="image.png" title="image.png" />

## Memory Hierarchy

Memory Hierarchy「内存层次结构」

In the hierarchy

- closer to the processor: we have faster but lower-capacity, more expensive memory「距离处理器更近：我们拥有更快但容量更低，内存更昂贵的内存」
- further to the processor: we have slower but higher-capacity, less expensive memory「距离处理器更远：我们的内存速度较慢但容量较高，内存价格较便宜」
- the essential design question: can we "alloate" the information such that frequently accessed information is stored in faster memory「设计的基本问题：我们能否“分配”信息，以便将经常访问的信息存储在更快的内存中」

example: Program Counter register

### Access latency

Access latency「存取延迟」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/4b4054871af47.png" alt="image.png" title="image.png" />

- Time used by CPU to execute one instruction
  - 1 cycle for most instructions (1GHz CPU, 1 cycle = 10-9s)
- Time used to fetch a word from main memory
  - 10 ~ 100 cycles
- Time used to fetch a block of data from disks
  - 10,000 ~ 1,000,000 cycles

The gap「间隙」 between CPU, main memory and disks

<img src="https://pic.hanjiaming.com.cn/2021/04/07/68881ede4ffdd.png" alt="image.png" title="image.png" />

Solve the problem: a fast CPU is wasted by waiting for slow memory?

The processor has access to two levels of memory

- Level-1: capacity C1 = 100 words, access time T1 = 0.1s
- Level-2: capacity C2 = 1000 words, access time T2 = 1s

access mechanism: if some data is in Level-1, directly access the data; 「访问机制：如果某些数据处于级别1，则直接访问数据；」otherwise, move the data from Level-2 to Level-1 first, and then access the data from Level-1「否则，首先将数据从Level-2移到Level-1，然后从Level-1访问数据」

T1 vs. (T1 + T2)

### Locality

#### Clustering effect

在内存中，bit组成byte，多行byte组成word，多个word组成block。

Basic idea: during program execution, memory accesses (for instructions and data) by processor tend to cluster「基本思想：在程序执行过程中，处理器对内存的访问（用于指令和数据）倾向于聚集」

Reasons: programs typically contain loops/subroutines -- repeatedly access a small set of instructions; also, for data, operations on tables and arrays involve access to a clustered set of data「原因：程序通常包含循环/子例程-重复访问一小组指令;同样，对于数据，对表和数组的操作涉及对集群数据集的访问」

During some specific time period, processor wants to access a portion of main memory (one cluster)「在某个特定时间段内，处理器希望访问主内存的一部分（一个集群）」

Over time, processor accesses different clusters「随着时间的流逝，处理器访问不同的集群」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/1ad834c46e638.png" alt="image.png" title="image.png" />

#### Concept

- Principle of locality: Programs tend to use data and instructions with addresses near or equal to those they have used recently「本地性原则：程序倾向于使用地址或地址与它们最近使用的地址接近或相等的数据和指令。」
- Temporal「时间」 locality: recently referenced items (data, instructions) are likely to be referenced again in the near future「时间位置：近期引用的项目（数据，说明）可能会在不久的将来再次引用」
- Spatial「空间」 locality: items (data, instructions) with nearby addresses tend to be referenced close together in time「空间位置：具有附近地址的项目（数据，指令）往往在时间上靠近在一起引用」

THINK: WHY LOCALITY EXISTS?

#### Example: Two-Level Memory

Hit Ratio: the fraction of accesses involving only Level-1

<img src="https://pic.hanjiaming.com.cn/2021/04/07/7c3301409c48a.png" alt="image.png" title="image.png" />

Conclusion-- increase the hit ratio

<img src="https://pic.hanjiaming.com.cn/2021/04/07/3044bb32a2838.png" alt="image.png" title="image.png" />

#### Examples of locality

To compute the sum of all elements in an 2-D array

<img src="https://pic.hanjiaming.com.cn/2021/04/07/be300de3c3488.png" alt="image.png" title="image.png" />

同时我们发现数组是按x-y-z的维度存储的。所以，当我们使用下面的算法时

<img src="https://pic.hanjiaming.com.cn/2021/04/07/cb956aaadce82.png" alt="image.png" title="image.png" width = "240px"/>

就是 BAD LOCALITY

#### Examples of temporal locality

- Data references

- - The access to “sum” in the inner loop
  - Once accesses, will be accessed again in the near future「一旦执行，将在不久的将来再次执行」

- Instruction references

- - The instructions to do “sum += a[][]”
  - Once executed, will be executed again in the near future

To understand locality for “data” and “instructions”:  
They are essentially the same, as instructions are special data stored in memory

#### To measure locality

如何评价一个locality的好坏呢？

- Stride: The distance of two adjacent data accesses in memory location, in the unit of 1 data element「步幅：内存位置中两个相邻数据访问的距离，以1个数据元素的长度为相同单位」
  - Stride-1 reference pattern: access the data one by one according to their memory addresses, such as the good locality example「根据数据的存储地址一一访问数据，例如良好的locality示例」
  - Stride-k reference pattern: for example, the bad locality example generally has a stride-4 reference pattern「例如，不良locality示例通常具有 a stride-4 reference pattern」
- The smaller the stride, the better the locality「步幅越小，locality 越好」

### Cache Memory

<img src="https://pic.hanjiaming.com.cn/2021/04/07/5cecb7a84188e.png" alt="image.png" title="image.png" />

这里冰箱就相当于 Cache Memory

Caching idea：Adding a small but fast memory inside the CPU

<img src="https://pic.hanjiaming.com.cn/2021/04/07/0f77d2ce106a8.png" alt="image.png" title="image.png" />

cache是一行一行的。我们认为 cache 每行长度 = 内存每个block大小。

#### Concept

<img src="https://pic.hanjiaming.com.cn/2021/04/07/e9c84f5447c5a.png" alt="image.png" title="image.png" />

Cache is fast but has relatively small capacity.「缓存速度快，但容量相对较小。」

Basic mechanism: cache contains the copy of portions of main memory (blocks). 「基本机制：高速缓存包含主内存部分（块）的副本。」

- when CPU wants to read a word:
  - if the word is in cache, access the word
  -  else a block of main memory (containing that word) is read into cache
- thenthe word is delivered to CPU「否则将一块主存储器（包含该单词）读入缓存，然后这个词被交付给CPU」

Due to locality of reference, the hit ratio is high (words can be found in cache with high chance)「Due to locality of reference 命中率很高（可以在高速缓存中找到单词）」

As a result, as if there is memory with large capacity and fast access speed「结果，好像有大容量且访问速度快的内存」

#### Example

Assume When a program executes, it generates 20 memory accesses  
ABCDCCCDDDEGHGHGHGHB

The unit of data loading is “one block”：One block contains two data variables

- Cache size = 2 blocks
- Data access time
  - Cache hit: 1 cycle「缓存命中：1个周期」
  - 「缓存未命中：200个周期」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/a3d302d2fa796.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/07/3292afeed1f5b.png" alt="image.png" title="image.png" />

Performance with cache：Access time = 1 * 15 + 5 * 200 = 1015 cycles
Performance without cache：Access time = 200 * 20 = 4000 cycles

注：假设判断不需要时间。从内存提取数据的间隙是 200c ，从 cash 提取数据间隙是 15c

Multiple-Level Cache Organization 图示

<img src="https://pic.hanjiaming.com.cn/2021/04/07/7f000345e3c0a.png" alt="image.png" title="image.png" />

#### Application

<img src="https://pic.hanjiaming.com.cn/2021/04/27/c5fa8774ea8cc.png" alt="CleanShot 2021-04-27 at 12.31.42@2x.png" title="CleanShot 2021-04-27 at 12.31.42@2x.png" width="300px"/>

### Structure of a Cache/Main-Memory System

<img src="https://pic.hanjiaming.com.cn/2021/04/07/305fa65e5042d.png" alt="image.png" title="image.png" />

The Cache consists of m **lines,** where each line has a length of K words (the size of one block in memory)「cache 由m行组成，其中每行的长度为K个字（内存中一个块的大小）」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/7ff4348d3fede.png" alt="image.png" title="image.png" width = "350px" />

**m lines** in Cache vs. **M blocks** in Memory **(m <<M)**

access mechanism: when we want to access a word in the memory, the whole block containing that word is copied into one line of cache「访问机制：当我们要访问内存中的一个word时，包含该word的整个块被复制到缓存的一行中

One cache line cannot be permanently allocated to one memory block -- use the tag to indicate which block is stored in cache (more on this later)「一条高速缓存行不能永久分配给一个内存块-使用标签指示哪个块存储在高速缓存中（稍后会详细介绍）」

Illustration of Cache Read Operation 如下

<img src="https://pic.hanjiaming.com.cn/2021/04/07/b886280cea662.png" alt="image.png" title="image.png" />

Typical Cache Organization 如下图

<img src="https://pic.hanjiaming.com.cn/2021/04/07/fbde1110fca38.png" alt="image.png" title="image.png" />

Mapping Function——Basic Elements of Cache Design

#### Mapping Function

The essential problem we want to address: map M memory blocks to m cache lines (m << M)——mapping function「我们要解决的基本问题：将M个内存块映射到m个缓存行（m << M）-映射功能」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/5836c70fcf801.png" alt="image.png" title="image.png" />

A mapping function defines where the needed blocks in memory are loaded to Cache (M blocks, m positions)「映射功能定义将内存中所需的块加载到高速缓存的位置（M个块，m个位置）」

- direct mapping: a kind of fixed mapping, i.e., blocks in memory are allocated to fixed cache lines
  - Q = M/m, Q blocks are mapped to one single cache line; Q to 1 mapping「Q = M / m，Q个块被 映射 到一条 cache line； Q对1映射」
- associative mapping: any block can go to any cache line「关联映射：任何块 都可以到 任何 cache line」

##### Direct mapping

###### Direct mapping Example

Map all students to 10 seats using direct mapping

- suppose SID has 8 digits, split SID into 2 parts: first 7 digits and the last digit「假设SID有8位数字，则将SID分为2部分：前7位和后1位」
- use your last digit as your seat number -- all students are divided into 10 groups, it is a fixed mapping「用您的最后一位数字作为座位号-所有学生分为10组，这是一个固定的映射」

How can we know who is currently sitting in seat i (i 0 to 9)?「我们如何知道谁现在坐在座位i（i 0到9）中？」

a student can use the first 7 digits as a tag -- the tag is unique for that particular student「一个学生可以使用前7位数字作为标签-该标签对于该特定学生是唯一的」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/7d57e6b79307c.png" alt="image.png" title="image.png" />

SID = memory address (tag in cache is a portion of memory address)「SID =内存地址（缓存中的标签是内存地址的一部分）」

###### Implementation

- Use main memory address to implement direct mapping「使用 main memory address 实现直接映射」
- bear in mind that Cache line = Memory Block (they contain the same number of words)「请记住，缓存行=内存块（它们包含相同数量的字）」

<img src="https://pic.hanjiaming.com.cn/2021/04/08/e95e52739c8a3.png" alt="image.png" title="image.png" />

注意：这并不违背地址编号的相关知识。原因是s+w并不会占满所有的比特位。

###### Cache interpret

How would the cache interpret「解释」 main memory address?

<img src="https://pic.hanjiaming.com.cn/2021/04/08/a3495e9188da5.png" alt="image.png" title="image.png" />

Example：s = 4 bits, r = 2 bits

- 01 11 — 11 determines which line you should go to
- 00 11, 01 11, 10 11, 11 11: the four blocks ending with 11 will go to the same line; they are differentiated by the tag (first two bits)

- 01 11 mod 4 = 3 — the line with line number 3

###### Summary

Summary of Mapping Function:

- given a memory address ( s + w) bits，we know which block it is through the s bits「我们通过s位知道它是哪个块」
  - among the s bits, there are r bits, which tell us the line number in Cache that stores this block「在s位中，有r位，它们告诉我们存储此块的Cache中的行号」
  - As there are more blocks than lines (s > r), the remaining (s - r) bits serve as a tag for the Cache line, telling us which block this line is currently storing

Multiple Blocks to One Line：address s + w bits

- cache will interprete it as three fields: tag (s-r), line (r), word (w)
  - line (r) determines which line in cache the block will map to
  - tag (s-r) determines the current block that line is storing
    CPU can directly check that line, and compare the tag field「比较标签字段」 to determine whether the block is now in the cache

注：tag不是自带的，是可以被写入的。

How does CPU access a word?

1. Given an address (s+w) bits
2. Use r bits to locate the line in Cache
3. Compare the (s-r) bits with the tag: 
   - if (s-r)  match, the line stores the desired block; use w bits to identify the desired word
   - if  (s-r) no match, access the memory, copy the block to the line

<img src="https://pic.hanjiaming.com.cn/2021/04/08/3b73fd74b3948.png" alt="image.png" title="image.png" />

###### Example

Settings：

- word = one byte, block = 4 words (4 bytes)
- main memory has 16 Mbytes (note: 1 MB = 1024 KB; 1 KB = 1024B); 
  - that is, 2^{24} bytes  -> 24 bits for the address
  - we have 2^{22} blocks -> s = 22 bits, w = 2 bits
- cache has 64 KB = 2^{16} bytes

**R = 14 bits,How many lines are there in the Cache?**

The number of lines are determined by the number of address. 

2^{14} lines  -> among the 22 bits, r = 14 bits, 8 bits for the tag

###### Pros and Cons

- simple and inexpensive to implement
- main disadvantage: muliptle blocks in memory are mapped to a fixed Cache line
  - if a program happends to access words repeatedly from two different blocks that map into the same line
  - the two blocks will be continually swapped in the cache -- low hit ratio

##### Associative Mapping

Key difference from direct mapping:

- a block in memory can be mapped to any line in cache「内存中的一个块可以映射到缓存中的任何行」
- cache will interpret the address as two fields Tag and Word「缓存会将地址解释为Tag和Word两个字段」
  - address = s + w bits; 2^s blocks in memory
  - s serves as the tag, and it is stored together with the data「s作为标签，它与数据一起存储」
- note: there is no field to determine the line number「注意：没有用于确定行号的字段」

###### Associative Mapping Example

Settings:

- memory has 2^{22} blocks, each block has 4 bytes (data = 32 bits)
- address is 24 bits = 22 bits (s) + 2 bits (w)
- Tag: 22 bits

<img src="https://pic.hanjiaming.com.cn/2021/04/08/36cf701400133.png" alt="image.png" title="image.png" />

###### Implementation

<img src="https://pic.hanjiaming.com.cn/2021/04/08/33bb201d268c5.png" alt="image.png" title="image.png" />

<img src="https://pic.hanjiaming.com.cn/2021/04/08/15af32c54ea74.png" alt="image.png" title="image.png" />

A block can be mapped to any line in cache! What if the cache is full?

- For direct mapping, there is no choice.
- For associative mapping, we need to decide which block should be replaced --- replacement algorithms

The main disadvantage of associative mapping is the complex circuitry required to examine the tags of all cache lines in parallel「associative mapping 的主要缺点是需要 并行检查 所有 cache 行的标签的 复杂电路」

###### Replacement Algorithms

**Least Recently Used (LRU)——Most popular replacement algorithm**

- replace the block that has been in the cache longest with no reference to it
- there requires some extra index to record the time when a line is referenced – the price need to pay
- Simple for two-way set-associative mapping: use a single bit USE to indicate the most recently used line in the set

**Other common replacement algorithms**

First-in-first-out (FIFO): replace that block in the set that has been in the cache longest (what's the difference from LRU)

Least Frequently Used (LFU): associate a counter to each line

Random (not based on usage): randomly pick one to replace – some papers show that Random is only slightly worse than previous usage-based algorithms

##### Set-Associative Mapping

not required

### Write Policy

Why does inconsistency happen?

- multiple CPUs「比如在服务器中」: each CPU has its own cache, which may store the same block in memory
- I/O can directly access main memory

we need a policy to deal with such inconsistency「我们需要一项政策来应对这种矛盾」

#### Write Policy I - Write Through

All writes go to cache as well as main memory

- multiple CPUs need to monitor main memory traffic to keep local (with respect to CPU) cache up to date
- lots of traffic
- slows down writes

#### Write Policy II - Write Back

- Updates initially made in cache only, then memory
- use an extra bit along with each cache line to indicate whether there's update in this line (set the bit if there's update)
- when this cache line needs to be replaced, check this bit, write back to memory if the bit is set (such that updates are not lost)

requirement: I/O has to access cache, not main memory directly

### Exploiting locality

#### Hints to software developers

- Caching leverages locality, good locality make good use of cache「缓存利用了局部性，良好的局部性充分利用了高速缓存」
- General principles to write programs with good locality「编写具有良好本地性的程序的一般原则」
  - Focus your attention on inner loops, where the CPU spends most of the time「将注意力集中在CPU大部分时间都在其中的内循环上」
  - Try to maximize the spatial locality by reading data objects sequentially, with stride 1, in the order they are stored in memory「尝试通过跨步读取数据对象（步长为1），以将它们存储在内存中的顺序来最大化空间局部性
  - Try to maximize the temporal locality by using a data object as often as possible once it has been read from memory「从内存中读取数据对象后，应尽可能频繁地使用它来尝试最大化时间局部性」

### Managing caches

Design considerations of caches

- Block size
  - Bigger block size exploits spatial locality「更大的块大小利用空间局部性」
  - Too big, bringing in many data that will not be used, waste of space and time「太大了，带来了很多无法使用的数据，浪费了空间和时间」
- Who is in, who is out?
  - Replacement policy: if cache is full, new data going in, evict which data?「替换策略：如果缓存已满，则有新数据进入，逐出哪些数据？」
    - Intuition「直觉」: keep the data being used in the near future in cache「直觉：将数据在不久的将来保存在缓存中」But, how do we know which data will be used in the near future?「但是，我们如何知道不久的将来将使用哪些数据？」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/64de54be53967.png" alt="image.png" title="image.png" width ="240px" />

- To efficiently find a data item in the cache
  - Find 1 data in 1000 candidates? Takes too long!
  - Partition the cache into groups, map different data into different groups
  - To find a data item in a smaller group can be efficient, but space may not be fully utilized

#### Impacts to HW design

对硬件设计的影响–存储层次结构

<img src="https://pic.hanjiaming.com.cn/2021/04/07/28b3ee018d930.png" alt="image.png" title="image.png" />

- Conceptually「从概念上讲」, level K can be viewed as a cache of level K+1, storing a subset of K'data in level K+1
- If caching policies are smartly designed, most of the time, cache accesses will be hit
- Pretty much like we have a memory system that works at a speed of the highest level, but have the storage space of the lowest level, with reasonably low price「从概念上讲，可以将级别K视为级别K + 1的缓存，将数据的子集存储在级别K + 1中
  如果对缓存策略进行了精心设计，那么在大多数情况下，缓存访问将受到影响
  就像我们有一个内存系统可以以最高级别的速度工作，但拥有最低级别的存储空间并且价格却相当低」

<img src="https://pic.hanjiaming.com.cn/2021/04/07/00e40e65b1134.png" alt="image.png" title="image.png" />

## Replacement Policy

### LRU Replacement

最近最少使用

In the Least Recently Used (LRU) page replacement policy, the page that is used least recently will be replaced. Implementation: Add a register to every page frame - contain the last time that the page in that frame was accessed. Use a "logical clock" that advance by 1 tick each time a memory reference is made.「在最近最少使用（LRU）页面替换策略中，最近最少使用的页面将被替换。实现：在每个页面框架中添加一个寄存器-包含最后一次访问该框架中的页面的时间。每次使用内存引用时，请使用提前1滴答的“逻辑时钟”。」

### FIFO Replacement

先进先出（FIFO）

The cache is managed with the FIFO replacement policy: when all the 3 cache blocks are used up and a new data block will be loaded into cache, one data block out of the 3 blocks will be replaced out of the cache. The data block that was earliest loaded into the cache will be replaced. We assume that at the very beginning, the cache is empty.「高速缓存通过FIFO替换策略进行管理：当3个高速缓存块全部用完并且新数据块将被加载到高速缓存中时，这3个块中的一个数据块将从高速缓存中替换。最早加载到缓存中的数据块将被替换。我们假设一开始缓存就为空。」

使用此算法，高速缓存按添加块的顺序逐出该块，而无需考虑它们之前被访问过的频率或次数。

### LIFO Replacement

后进先出（LIFO）

使用此算法，与FIFO队列的行为恰好相反。高速缓存逐出最先添加的块，而与之前访问它的频率或次数无关。