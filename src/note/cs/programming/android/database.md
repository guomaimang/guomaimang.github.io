---
article: false
date: 2024-12-10
index: true
order: 8
headerDepth: 1
---

# Database

Three-Tier Architecture

<img src="https://pic.hanjiaming.com.cn/2024/12/10/f61c69903bac4.png" alt="1733775819120.png" style="zoom:40%;" />

## DBMS

Database Management System (DBMS)

- 一个存储和管理（可能大量）数据集合的系统
- 它允许用户执行操作并管理数据收集（例如创建新记录、查询现有记录）

Data Model

- 数据模型描述了数据应该如何组织
- 它描述了数据元素如何相互关联
- 在大多数情况下，数据模型反映了现实世界中事物之间的关系
- 广泛使用的数据模型是数据的关系模型
- 表描述了不同对象之间的关系

## Relational Databases

A database is a collection of relations (**tables**)
- Each relation has a list of attributes (**columns**)
  - Each **attribute** has a domain (**data type**)
- Each **relation** contains a set of tuples (**rows**)
  - Each tuple has a value for each attribute of the relation (or **NULL** if no value is  given)



::: info ACID Properties of Relational Database

关系型数据库侧重于拥有可靠的交易，通常具有ACID属性

- **Atomicity**「原子性」 – 每次交易要么是“全部完成”，要么是“失败”。
- **Consistency**「一致性」 - 数据只能根据预定义的规则进行更改
- **Isolation**「隔离」 - 并发查询不会相互干扰
- **Durability**「耐用性」- 结果在数据库中是持久的

:::

## NoSQL Databases

数据的关系模型和关系数据库是管理数据的强大工具，但它们不能解决所有问题。

- Data Model – data may be better modelled as **objects in a hierarchy** or a **graph**
- Scheme – in many applications, it can be too restrictive to have **fixed schema**
- Scalability – it takes a lot of effort to **horizontally scale relational databases**

因此，需要替代解决方案来解决新问题

NoSQL（非SQL、非关系型、不仅限于SQL）系统是提供用户以关系表以外的数据建模方式的存储系统。

1. It is not a single technology
2. No SQL 数据库没有单一定义
3. 许多不同的系统或解决方案可用于解决不同的问题

### Why do we need NoSQL Databases?

1. 网络应用程序和服务的普及
   1. 由于用户参与（用户内容），存在大量读写操作
   2. 复杂函数需要数据模型具有灵活性（例如，在社交网络中找到朋友的朋友，找到与同年龄段用户购买的相关商品等）。
   3. Horizontal scaling is desirable
2. Flexibility in data schema is required
   1. 关系型数据库需要数据模式被良好定义
   2. 然而，在许多应用中可能会有很多属性，并且这些属性可能会随时间变化
3. 处理不同类型的数据需要不同的解决方案
   1. 结构化数据与半结构化/非结构化数据
   2. 需要实时服务的数据与日志数据

NoSQL数据库系统的常见特性

- 不需要定义固定的模式
- 水平扩展（分布式操作、复制和分区）跨越多台服务器
- 简单或无查询语言，提供数据操作API
- 一个较弱的并发模型（非ACID）
- Distributed storage

### Types of NoSQL Databases

- Document oriented (general purposes): e.g. MongoDB
- Key-value pair (pub-sub system) e.g. Redis
- Graph oriented (social network) e.g. Neo4j
- Column based (for blogging) e.g. Apache HBase
- Object based (for versioning) e.g. Gemstone

#### Document Stores

- 示例包括 CouchDB 和 MongoDB
- 类似于键值存储，但值是一个文档
- 文档采用半结构化格式（例如JSON或XML）
- 允许通过搜索内容检索文档

#### Key-value Stores

- 示例包括 Redis、Riak、Oracle NoSQL 数据库
- 实现字典或哈希表
- 数据检索非常快
- 为了快速检索已知键的值，但不适合搜索

<img src="https://pic.hanjiaming.com.cn/2024/12/10/44ffa8b1fe705.png" alt="1733833744489.png" style="zoom:33%;" />

#### Graph Databases

示例包括 Neo4j、Data Stax 和 Orient DB

Store data in the form of

- Nodes (entities)
- Edges (relations between entities)
- Properties (attributes of nodes or edges)

对图执行查询，无需执行昂贵的 JOIN 操作

### Collections and Documents

Hierarchical storage structure

- Database
- Collections
- Documents

<img src="https://pic.hanjiaming.com.cn/2024/12/10/73143b0468d3b.png" alt="1733834485657.png" style="zoom: 40%;" />

### Features of NoSQL

- There are no relations among the collections.
- There are duplicated data across different collections.
- When you update some items, you need to update all relevant entries.

NoSQL为了高效的查询和处理，牺牲了内存和磁盘空间。

### More about NoSQL

- Unrelated data is stored in **JSON** like documents.
- Unlike SQL, NoSQL does **not require** any prior **schema**.
- NoSQL支持JSON查询语言来处理数据。
- NoSQL不支持外键的使用。
- 为备份或重新加载数据备份副本，NoSQL支持分片和复制。
- NoSQL数据库可以垂直和水平扩展。
- NoSQL optimized for **read and write** performance.
- 一些GitHub支持包括mongodb/mongo和doctrine/mongodb。
- NoSQL适用于实时分析、内容管理、物联网等... 等等


## CRUD Operations

数据项的常见操作

- **C**reate
- **R**ead / **R**etrieve
- **U**pdate
- **D**elete

您在网页数据库中经常会遇到这些操作

CRUD操作由PyMongo查询函数支持, 查询是异步执行的

## Caching

- 缓存是一种临时数据存储，用于存储数据以便将来快速检索
- 主要实现为键值存储，其中唯一的键可以用于在O(1)时间内检索值
- 缓存通常很小（RAM很贵！）
- 击中（找到） vs. 未击中（未找到）
- 缓存可以是持久的，如果它也将当前状态存储到某些持久存储（例如硬盘）中

### Memcached

通用分布式内存缓存系统

- 通用型 - 可用于Web服务器、应用服务器或数据库服务器之前
- 分布式 - 可在多个服务器上运行以实现可扩展性
- 内存 - 在RAM中存储值，如果RAM不足，则丢弃旧值

Memcached + Nginx

键值对应由应用程序（Nginx外部）插入到Memcached中

```
inserted into Memcached by the application (external to Nginx)
server {
     location / {
         set $memcached_key "$uri?$args";
         memcached_pass host:11211;
         error_page 404 502 504 = @fallback;
}
     location @fallback {
         proxy_pass http://backend;
} }
```

## Using Database in Android

- 在开发您的Android应用时，您希望在设备上本地存储结构化数据并不罕见。
- 在Android中，有一个关系型数据库库（SQLite）
- 在SQLite之上有一个名为Room的抽象层可用

































