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



























