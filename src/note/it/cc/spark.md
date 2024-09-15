---
article: false
date: 2024-05-07
index: true
order: 14
headerDepth: 1


---

# Apache Spark

- Offers over 80 operators.
- Languages binding Scala,Java,SQL, Python(PySpark),R(SparkR).
- RDD:in-memory cache > "Up to 100x faster than MapReduce"
- Deployment standalone,**YARN,** Mesos, Kubernetes(containers)
- External storage systems:HDFS, HBase,Amazon S3,Azure Storage,Azure Datalake,Google Cloud Storage,Cassandra, Alluxio,.…

## Build-in Libraries

- Spark SQL: processing structured data with relational queries(newer API than RDDs->DataFrame API)
- Spark Structured Streaming: processing structured data streams with relation queries
- MLlib: Spark's machine learning (ML)library
  - (new) DataFrame - based API in the spark.ml package
- GraphX: distributed graph-processing
  - Page Ranking,Recommendation Systems, financial Fraud Detection, Geographic Information Systems,...

## Architecture

- One **Master node** + multiple **Worker nodes**
- Equivalent to **Hadoop's Master** and **Slave nodes**.

<img src="https://pic.hanjiaming.com.cn/2024/05/07/a457797633715.png" alt="CleanShot 2024-05-07 at 23.28.23@2x.png" style="zoom:33%;" />

Key Elements of a Spark Cluster

- Spark Driver: your Spark application that launches the main method
- Cluster Manager: manages the resources of a cluster
  - Support YARN,Kubernetes(K8S),Mesos,or Spark Standalone
- Workers：集群中任何可以运行应用程序代码的节点。
- Executors: Executors are worker nodes' **JVM processes** in charge of running individual tasks in a given Spark job.

## Runs on Kubernetes

Each Spark app is **fully isolated from the others** and **packages its own version of Spark and dependencies** within a Docker image.

![1715096544157.png](https://pic.hanjiaming.com.cn/2024/05/07/6b61af814d4e4.png)

## Runs on Yarn

![1715096652353.png](https://pic.hanjiaming.com.cn/2024/05/07/471d128823455.png)

Spark Executors Runs on Yarn

![1715097532139.png](https://pic.hanjiaming.com.cn/2024/05/07/b90b2a21ef50f.png)

## Run Schedule Tasks

Schedule Tasks to run on Executors

- 执行器启动一次，可被多个任务和所有后续任务使用
- 任务总数取决于 RDD 分区的数量

![1715101694531.png](https://pic.hanjiaming.com.cn/2024/05/08/b111f17e2b52b.png)

## Spark Driver

任何 Spark 驱动程序应用程序中最重要的步骤是生成 SparkContext。

- Spark Driver 程序使用 SparkContext 通过资源管理器（例如 Yarn）连接到集群。
- SparkContext 存储配置参数：
  - 例如，应用程序名称、集群的主 URL、资源请求（执行器数量、执行器内存/核心数）、...

![1715101780851.png](https://pic.hanjiaming.com.cn/2024/05/08/170bcf623d9aa.png)

::: note SparkContext: PySpark Example

![1715101875252.png](https://pic.hanjiaming.com.cn/2024/05/08/8b346b7a744a9.png)

:::

## Cluster Managers

Spark Supported Cluster Managers

- Spark Standalone Mode
  - 使用 Spark 自带的集群管理器。
- YARN - the resource manager since Hadoop 2.X.
  - 更丰富的调度能力：FIFO、Capacity、Fair调度器。
- Kubernetes (> Spark 2.3)
  - K8S 创建执行器 pod 来运行 Spark 应用程序，每个执行器一个 pod！
- Mesos - Deprecated as of Apache Spark 3.2.0

## How to run

![1715102039480.png](https://pic.hanjiaming.com.cn/2024/05/08/e4056633c7130.png)

![1715102086137.png](https://pic.hanjiaming.com.cn/2024/05/08/7b3f124e9841d.png)

### Method 1: Spark-Submit

![1715143599474.png](https://pic.hanjiaming.com.cn/2024/05/08/aa59038405012.png)

![1715143627926.png](https://pic.hanjiaming.com.cn/2024/05/08/64926e5dd7d22.png)

Use spark-submit to run PySpark Application

![1715143707486.png](https://pic.hanjiaming.com.cn/2024/05/08/5be84756da855.png)

![1715144729961.png](https://pic.hanjiaming.com.cn/2024/05/08/3f71e7ba37688.png)

![1715144790262.png](https://pic.hanjiaming.com.cn/2024/05/08/07b88dcf5071b.png)

### Method 2: spark-shell

![1715144935943.png](https://pic.hanjiaming.com.cn/2024/05/08/12e03386b5ba5.png)

Use PySpark as a Python shell

![1715144958293.png](https://pic.hanjiaming.com.cn/2024/05/08/bcfba23ebbc27.png)

## Deploy Modes

### Spark Execution with Yarn: Cluster Mode

![1715145158487.png](https://pic.hanjiaming.com.cn/2024/05/08/d9cfeeac7bf03.png)

### Client Mode

Spark 驱动程序在提交作业的主机上运行

![1715145210037.png](https://pic.hanjiaming.com.cn/2024/05/08/f9639b9f5d9e6.png)

ApplicationMaster 只负责向 YARN 请求执行容器。容器启动后，客户端与容器通信，直接安排工作。

![1715145317387.png](https://pic.hanjiaming.com.cn/2024/05/08/363dcf6dc80b1.png)

::: tip Cluster Mode vs. Client Mode

Client mode: (Interactive)

- 用于调试或希望以交互方式快速查看输出。
- 如果客户端不在群集中，则会遭受更高的延迟。
- **仍需要 ApplicationMaster（占用 1 个 Yarn 容器，但驱动程序代码不在其中运行）**

Cluster mode: (Non-interactive)

- Used for applications in production.
- Spark Driver 和 Spark Executor 受到 YARN 自动故障恢复的监督。
- Not supported for spark-shell 和 PySpark.

::: note View ApplicationMaster & Executor Processes at a Worker Node

ApplicationMaster 在 Spark 中的进程名称是 ExecutorLauncher。

![1715145527742.png](https://pic.hanjiaming.com.cn/2024/05/08/b79c9fa9a9b67.png)

:::

