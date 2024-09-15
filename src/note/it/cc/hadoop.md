---
article: false
date: 2024-05-07
index: true
order: 12
headerDepth: 1

---

# Hadoop

Apache Hadoop 软件库是一个框架，允许使用简单的编程模型在计算机集群间分布式处理大型数据集！

![1715068701335.png](https://pic.hanjiaming.com.cn/2024/05/07/c5730e602292f.png)

![1715068731991.png](https://pic.hanjiaming.com.cn/2024/05/07/f03b7cb40a16e.png)

![1715068776538.png](https://pic.hanjiaming.com.cn/2024/05/07/65f41b72a1752.png)

Apache Hadoop

- Hadoop Common - contains libraries and utilities needed by other Hadoop modules.
- Hadoop Distributed File System (HDFS) - a distributed file-system that provides high-throughput access to application data.
- Hadoop YARN - a framework for job scheduling and cluster resource management -the "operating system"of Hadoop!
- Hadoop MapReduce - a YARN-based system for parallel processing of large-scale data sets

**Hadoop 2.x = HDFS + YARN**

## Roles of the cluster nodes

- Master Node(s):Typically one machine in the cluster is designated as the NameNode(NN)and another machine as the ResourceManager(RM).
  - For simplicity,we put NN and RM at the same node
- Slave Nodes: The rest of the machines in the cluster act as both DataNode(DN)and NodeManager(NM).

![1715093861166.png](https://pic.hanjiaming.com.cn/2024/05/07/286c12aa03dcc.png)

## A Typical Hadoop Cluster

![1715093904839.png](https://pic.hanjiaming.com.cn/2024/05/07/2c3465310fedb.png)

## YARN’s 3 Main Component

![1715095026070.png](https://pic.hanjiaming.com.cn/2024/05/07/c07a386226431.png)





