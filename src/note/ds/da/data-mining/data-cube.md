---
article: false
order: 13
date: 2023-12-14
headerdepth: 2

---

# Data Cube

From Tables and Spreadsheets to Data Cubes

- A data warehouse is based on a <u>multidimensional data model「多维数据模型」</u> which views data in the form of a data cube
- 通过数据立方体（如销售），可以对数据进行多维度建模和查看
  - **Dimension tables**, such as item (item_name, brand, type), or time(day, week, month, quarter, year)
  - **Fact table** contains **measures** (such as dollars_sold) and keys to each of the related dimension tables

在认知文献中，数据库立方体被称为数据库立方体。最顶端的 0-D 立方体拥有最高级别的摘要，被称为顶点立方体。立方体的晶格构成了数据立方体。

<img src="https://pic.hanjiaming.com.cn/2023/12/14/e2d8da66bc8b1.png" alt="1702494543149.png" style="zoom:40%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/14/ca8c3433cfb88.png" alt="1702546705181.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/14/9fd52fce34fe6.png" alt="1702546808611.png" style="zoom:33%;" />

- Modeling data warehouses: **dimensions** & measures
- DW Schema
  - 星形模式「Star schema」：中间的事实表连接一组维度表
  - 雪花模式「Snowflake schema」: 星形模式的细化，将一些维度层次归一化为一组较小的维度表，形成类似雪花的形状
  - 事实星座「Fact constellations」：多个事实表共享维度表，被视为恒星的集合，因此称为星系模式或事实星座

<img src="https://pic.hanjiaming.com.cn/2023/12/14/6020d659639cd.png" alt="1702547184641.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/14/fb9c98c31fdad.png" alt="1702547998355.png" style="zoom: 33%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/14/2cd867b9ce71e.png" alt="1702547218053.png" style="zoom:33%;" />

<img src="https://pic.hanjiaming.com.cn/2023/12/14/a091555f855c6.png" alt="1702547429660.png" style="zoom:33%;" />

Multiple Fact Tables -》 **Galaxy Schema**

- 出于性能或其他原因，我们可以在给定的星形模式中定义多个事实表
  - 例如不同的用户需要不同级别的聚合
- 可以通过为每个聚合级别定义不同的事实表来提高性能
- DW 的设计者需要决定增加的存储需求是否适合预期的性能改进

<img src="https://pic.hanjiaming.com.cn/2023/12/14/aff52aeb4695b.png" alt="1702549568889.png" style="zoom: 33%;" />

Snowflake Schema

- Sometimes a dimension in a star schema forms a natural hierarchy
- 例如名为 Market 的维度具有地理层次结构：
  - several markets within a state
  - several markets within a region
  - several markets within a country

当维度参与层次结构时，设计者有两个基本选择。

- 将层次结构的所有信息包含在单个表中
  -  i.e., a big flat table
- normalize the tables
  - resulting in an expanded schema→雪花模式！
- 雪花模式是星型模式的扩展版本，其中所有表都完全规范化。

