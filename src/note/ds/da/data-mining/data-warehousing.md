---
article: false
order: 12
date: 2023-12-13
headerdepth: 2
---

# Data WareHousing

数据，数据无处不在，但是......

- 我找不到我需要的数据
  - data is scattered「分散」 over the network
  -  many versions, subtle「微妙的」 differences
- 我无法获取我需要的数据：需要专家来获取数据
- 我无法理解我找到的数据：可用数据记录不完整
- I can’t use the data I found
  - results are unexpected
  - 数据需要从一种形式转换为另一种形式

## Why Data Warehousing

- 哪些是我们利润率最低/最高的客户？
- 谁是我的客户以及什么产品，他们在买吗？
- 哪些客户最有可能转向竞争对手？
- ...

**Why Do We Need Data Warehouses?**

- Consolidation「合并」 of information resources
- Improved query performance
- 将搜索和决策支持功能从操作系统中分离出来
- Foundation for
  - data mining,
  - data visualization,
  - advanced reporting and
  - OLAP (On-Line Analytical Processing) tools

### Root of the Problem

Heterogeneous「异构信息源」 Information Sources

*“Heterogeneities are everywhere”*

- Different interfaces
- Different data representations
- Duplicate and inconsistent information

### Additional Problem

大型企业的数据管理

- Vertical fragmentation of informational systems「信息系统的纵向分割」
- 应用程序（用户）驱动的操作系统开发的结果

![1702415288877.png](https://pic.hanjiaming.com.cn/2023/12/13/a4eb8a768d954.png)

## What is Data Warehouse

Defined in many different ways,but not rigorously.

- 与组织业务数据库分开维护的决策支持数据库
- 通过提供用于分析的综合历史数据的坚实平台，支持信息处理

数据仓库是一种面向主题的、综合的、随时间变化的和非易失性的数据收集，用于支持管理层的决策过程。

Data warehousing: The process of constructing and using data warehouses

## Used for

- In many organizations,we want a central "store"of all of our entities, concepts, metadata ,and historical information
  - For doing data validation, complex mining, analysis, prediction, etc.
- 数据仓库的 "现代 "用途之一不仅是支持分析，还可作为组织内所有实体的参考资料
  - 我们所知道的经过清理、验证的存储库
    - 可与数据源链接
    - ......有助于数据清理
    - ......并可作为数据管理（以系统方式创建和修改数据的流程，如遵守政府法规）的基础
- Knowledge discovery
  - Making consolidated「综合」 reports
  - Finding relationships and correlations
  - Data mining
  - Examples
    - Banks identifying credit risks
    - Insurance companies searching for fraud
- OLAP (Online Analytical Processing)
  - 它与用于处理企业某一方面日常运行的 OLTP（联机事务处理）不同。
  - OLTP系统通常是相互独立设计的，很难共享信息。

## Characteristics

### Subject-Oriented

- 围绕客户、产品、销售等主要主题进行组织
- 侧重于为决策者提供数据建模和分析，而不是日常操作或事务处理
- 通过排除对决策支持流程无用的数据，围绕特定主题问题提供简明扼要的视图

### Integrated

- Constructed by integrating multiple, heterogeneous data sources
  - relational databases, flat files, on-line transaction records
- Data cleaning and data integration techniques are applied.
  - 确保不同数据源在命名规则、编码结构、属性度量等方面的一致性
  - 例如，酒店价格：货币、税、含早餐等。
- 当数据被转移到仓库时，会对其进行转换。

![1702416250307.png](https://pic.hanjiaming.com.cn/2023/12/13/815c6941efc17.png)

### Time Variant

数据仓库的时间跨度远远长于业务系统的时间跨度

- 运行数据库：当前值数据
- 数据仓库数据：从历史角度（如过去 5-10 年）提供信息

数据仓库中的每个关键结构

- 明确或隐含地包含时间元素
- 但运营数据的key可能包含也可能不包含“时间元素”

### Nonvolatile

- 从运行环境中转换而来的物理上独立的数据存储库
- 数据仓库环境中不会发生数据的操作更新
  - 不需要事务处理、恢复和并发控制机制
  - 数据访问只需两个操作: 数据的初始加载 或 数据访问

## OLTP vs. OLAP

- OLTP (on-line transaction processing)
  - 传统关系型DBMS的主要任务
  - 日常运营：采购、库存、银行、制造、工资、登记、会计等。
- OLAP (on-line analytical processing)
  - 数据仓库系统的主要任务
  - <u>Data analysis and decision making</u>

<img src="https://pic.hanjiaming.com.cn/2023/12/14/c0dcbb81dafe9.png" alt="1702493815694.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/14/7b31894b049b5.png" alt="1702493894778.png" style="zoom:50%;" />

::: info 为什么需要单独的数据仓库？

- High performance for both systems
  - DBMS - 针对 OLTP 进行调整：访问方法、索引、并发控制、恢复
  - 仓库 — 针对 OLAP 进行调整：复杂的 OLAP 查询、多维视图、整合
- 不同的功能和不同的数据
  - 数据缺失：决策支持需要历史数据，而业务数据库 「operational DBs」 通常不会维护这些数据
  - 数据整合「data consolidation」：决策支持需要整合（聚合、汇总）来自异构源的数据
  - data quality：不同来源通常使用不一致的数据表示、代码和格式，必须加以协调

注意：有越来越多的系统直接对关系数据库执行 OLAP 分析

:::

<img src="https://pic.hanjiaming.com.cn/2023/12/14/1d3a8bb0590c1.png" alt="1702494129170.png" style="zoom:33%;" />

















