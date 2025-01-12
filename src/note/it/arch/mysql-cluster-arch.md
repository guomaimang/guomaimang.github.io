---
article: false
date: 2024-12-23
index: true
order: 1
headerDepth: 1
category:
  - tech


---

# MySQL 集群架构与应用场景

## 单库模式

**特点**:

- **简单易用**: 适合初期项目和小型应用，成本低。
- **适用场景**: 企业门户网站、中小型项目、项目原型。

**缺点**:

- **不可用性**: 如果数据库挂掉，系统会瘫痪。
- **并发瓶颈**: 高并发下性能差。

## 读写分离模式

<img src="https://pic.hanjiaming.com.cn/2024/12/18/dace8ca4f9124.png" alt="1734517169939.png" style="zoom:40%;" />

**架构**:

- **主库**: 负责写入操作。
- **从库**: 负责读取操作，通过主从同步机制保持数据一致。
- **中间件**: 如 MyCat、ShardingSphere，负责请求路由。

**优点**:

- **性能提升**: 适合读多写少的场景，有效分摊读取压力。
- **高可用性**: 可通过 MHA 等方案实现故障转移。

**缺点**:

- **架构复杂**: 部署和维护成本增加。
- **数据一致性**: 网络问题可能导致数据不一致。

## 分库分表模式 (Sharding)

 <img src="https://pic.hanjiaming.com.cn/2024/12/18/d528985e8616c.png" alt="1734517260389.png" style="zoom:33%;" />

**架构**:

- **分片**: 将大数据集合打散存储在多个子数据库的子表中。
- **中间件**: 如 MyCat、ShardingSphere，负责 SQL 路由。

**优点**:

- **适用大数据**: 适合十亿级别的数据量。
- **数据分散**: 每个节点的数据是所有数据的子集。

**缺点**:

- **架构复杂**: 部署和维护成本高。
- **高可用性差**: 每个节点数据不同，单点故障影响大。

### 分片算法

**范围法**: 按数据范围划分，适合范围检索，但可能导致数据不均匀。

<img src="https://pic.hanjiaming.com.cn/2024/12/18/efc94489552d2.png" alt="1734517421813.png" style="zoom:33%;" />

**哈希法**: 数据均匀分布，适合大型互联网应用，但扩展困难。

<img src="https://pic.hanjiaming.com.cn/2024/12/18/194ca738efc78.png" alt="1734517405448.png" style="zoom:33%;" />

## 综合应用  -> 组合方案:

- **读写分离 + 分片**: 结合两者优点，适用于大规模互联网应用。
- **高可用性**: 配合 MHA、MDR 等方案，确保系统稳定可靠。

![Typora 2024-12-18 18.22.41.png](https://pic.hanjiaming.com.cn/2024/12/18/13a8879647b78.png)

## 总结

- **单库模式**: 简单易用，适合小型项目。
- **读写分离模式**: 提升性能，适合读多写少的应用。
- **分库分表模式**: 适用于大数据量，架构复杂，需结合读写分离实现高可用性。

 