---
article: false
order: 14
date: 2023-12-15
headerdepth: 2


---

# OLAP

## Typical OLAP Operations

- Roll up (drill-up): summarize data: by climbing up hierarchy or by dimension reduction
  这是一个汇总数据的操作。例如，我们有一个销售数据表，其中包含每个城市的每日销售额。如果我们想知道每个州的总销售额，我们可以通过“卷积”操作将数据按州进行汇总。这就像我们从城市级别“爬升”到州级别。
- Drill down (roll down):reverse of roll-up
  从较高层次的汇总数据到较低层次的汇总数据或详细数据，或引入新的维度：这是卷积操作的反向操作。继续上面的例子，如果我们有每个州的销售额，但现在我们想知道每个城市的销售额，我们可以执行钻取操作。这就像我们从州级别“下钻”到城市级别。
- Slice and dice: project and select
  这是选择和投影数据的操作。例如，我们可以选择只查看某个特定时间段（切片）的销售数据，或者我们可以从多个维度（例如地点、时间、产品类型等）对数据进行切块操作。
- Pivot(rotate): 调整立方体、可视化、三维到二维平面系列的方向
  这是调整数据视图的操作。例如，我们可能有一个显示每个州每月销售额的表格，其中州是行，月份是列。我们可以通过旋转操作将其转换为一个新的表格，其中月份是行，州是列。
- Other operations
  - drill across: involving (across)more than one fact table
    这是涉及多个事实表的操作。例如，我们可能有一个销售额事实表和一个预算事实表，我们可以执行钻跨操作来比较实际销售额与预算。
  - drill through: through the bottom level of the cube to its back-end relational tables (using SQL)
    这是通过立方体的底层到其后端关系表的操作。例如，我们可能在OLAP立方体中查看汇总数据，但我们想查看某个特定汇总数字背后的详细事务数据，我们可以执行钻穿操作，这通常涉及到使用SQL查询后端的关系数据库。

![1702582600080.png](https://pic.hanjiaming.com.cn/2023/12/15/c4dfdcd18da7d.png)

## Roll-up Operation

- Roll-up operation 相当于将事实值的当前聚合级别在一个（或多个）维度上进行进一步聚合
- 这相当于使用属性层次结构对该维度进行 GROUP BY 处理
- Roll-up operation 可以理解为降低尺寸数量
- 在这种情况下，测量值的计算不考虑要省略的尺寸。

## Drill Down Operation

- 更细致地分析一组数据
  - 例如，某品牌纸巾三种包装规格的总销售额汇总报告
  - 每种包装规格中按颜色进一步细分的销售额
- 钻取演示相当于在原始报告中添加另一列（颜色列）。
- 执行向下钻取可能需要 OLAP 工具“返回”数据仓库以获得向下钻取所需的详细数据
- 有些工具甚至允许 OLAP 工具在必要时为特定查询返回操作数据

## Slicing and Dicing a Cube

- 切割数据立方体，生成简单的二维表格或视图
  - 例如：A 片用于名为 "鞋 "的产品
  - 通过简单 "拖放 "开发的其他视图
  - 这种操作通常被称为 "切方块"。
- 切分操作通过对事实在维度子集上的投影，以及对被放弃的维度的某些选定值进行投影，来减少维度的数量。
- 与切片和切割密切相关的是数据透视
  - 该术语指旋转特定数据点的视图，以获得另一个视角
  - 分析员可以通过这一视角，获得当月各商店的鞋类销售情况

<img src="https://pic.hanjiaming.com.cn/2023/12/15/f57171f3f8a9a.png" alt="1702584185152.png" style="zoom:33%;" />

::: tip Summary

- Data warehouse can be considered as a central store"of all of our entities,concepts,metadata,and historical information
  - For doing data validation, complex mining, analysis, prediction, etc.
- Multi-dimensional modellinh of a data warehouse
  - A data cube consists of dimensions & measures
  - Star schema, snowflake schema, fact constellations
  - OLAP operations:drilling,rolling,slicing,dicing and pivoting
  - Basically,a kind of navigation through the data

:::



