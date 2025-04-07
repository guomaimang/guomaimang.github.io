---
article: false
date: 2025-04-07
index: true
order: 5
headerDepth: 1

---

# DB Storage Servers

## Two Paradigms of DB Storage

### Relational Databases

- Structured in tables (row and columns): Slow but powerful
- Harder to scale
- Accessible through the Structured Query Language (SQL)
- Often used as persistence storage
- Examples: MySQL (free), MSSQL, Oracle, SQLite (free), etc.

### NoSQL Databases: "non-SQL" or "non-relational"

- The name "NoSQL" was only coined「创造」 in the early 21st century
- Unstructured (document: JSON-like data; key-value store, ...) as a tradeoff for speed
- Easy to scale-out
- Accessible through API
- Optimized for speed, thus often as an in-memory cache
- For applications that mostly query (vs. update) in **async. manner**
- **Inaccuracy can be tolerated** by the application (see later slides)
- Examples: Redis (free), Memcached (free), MongoDB, etc.

## SQLite

- Lightweight in design, Best for single-user apps (MobileApps/Simple WebApps)
- Stores everything in a single file, Easy to embed, test, backup, and transfer
- Simple access-right management
  - Simple access-right management
  - Simply depending/relying on the file access rights

## MySQL

- Dual-licensing: / (if you don't need support), or proprietary
- Relational DB: Table structure
- Full-featured, accessible using SQL
  - But heavyweight, quite slow
  - Relatively powerful considering it is something for free
  - Access Control and Account Management
- Supported by multi-platforms

## Redis

(Remote Dictionary Server)

- Open-source NoSQL DB
- Cache: In-memory DB as a key-value store (hence, very fast)
- Supports a rather rich set of other data structures
  - strings, lists, sorted sets, bitmaps, geospatial indexes
- Common use cases:
  - To serve queries, i.e., GET requests
    - e.g., cache your templates to prevent re-rendering
    - When to expire? Expire on DB update?
  - To completely serve as a DB
    - Data loss when the machine is down (it's in-memory)
    - Periodically backup data to persistent storage
    - Best of both worlds of Mongo**DB** , Mem**cache**d
- Basically, no support :(
- Support some simple authentication
- Can be restricted to certain interfaces
- No data encryption (slow for a very large DB)

## NoSQL Database

Big Data --> Scalability

- Flexible schema: ideal for unstructured data
- Distributed processing (pair with Map reduce, clusters)
- Designed to handle massive storage
- Live with **the** (see the next slide)

Data Analysis vs. Data Modification

- Few/no updates on data, e.g., data stream (e.g., user browsing trace)
- Mostly query (e.g., See which product is mostly viewed)
- Need to get results quickly

## CAP Theorem

**Core Requirements of Distributed Systems**

Trilemma, you can only choose two (and relax the remaining)

- C&A: Traditional RDBMS (single-node vs master-slave vs sharding); but we focus on "network partition"
- C&P: Redis (not accepting write for minority)
- A&P: (Eventual Consistent)

What if no network partition? PACELC Theorem

<img src="https://pic.hanjiaming.com.cn/2025/04/07/3fcfb876b5b3b.png" alt="预览 2025-04-07 12.32.00.png" style="zoom:75%;" />

## SQL or NoSQL?

### ACID-compliant

Traditional databases (C&A) focus on ACID (NoSQL can also be ACID-compliant)

- Atomicity. whole transaction as a unit: success completely or fail
- Consistency. A transaction updates the DB consistently according to the "rules"
- Isolation. Adjustable interference of concurrent transaction execution, e.g., read-write
- Durability. Committed transactions remain in effect in case of system failure.

### NoSQL: BASE

- Basic Availability, Soft state, Eventual consistency
- Weak consistency ??? Stale「陈旧的」 data OK (Eventual「最终」 consistency)
- Basically Available (part of the data may be temporarily unavailable)
- Easily scale out (e.g., sharding by "key"): add/remove nodes in the cluster
- Simpler and faster

## Different Data Models for NoSQL

- Key-Value Store -> Collection of key/value pairs
- Column-family System (multidimensional sorted map)
  - a key-value store but further structures the value into families
  - Very light "schema": (rowKey, colKey, timestamp) -> value
    - e.g., url as row keys, and "component" of a web as the value
    - e.g. BigTable, Hadoop HBase
- Document-based
  - Documents with tags, metadata, or a certain structure
  - e.g., pdf, xml, etc.
- Graph-based, E.g., Neo4j

## Database Abstraction Layer

- A universal interface for accessing to different databases
- Coding Consistency「一致性」: Regardless of the DB, use the same set of code
- Single Interface: Easy to switch database without code modifications

![1744008510147.png](https://pic.hanjiaming.com.cn/2025/04/07/1b7246e45ec07.png)

## Database Integrity and Constraints















