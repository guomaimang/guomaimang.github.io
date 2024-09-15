---
article: true
date: 2023-09-10
index: true
order: 1
headerDepth: 1
category:
  - tech
---

# Business Intelligence

## The concept

Business intelligence (Bl): generally refers to the **process** of <u>transforming the **raw data** companies collect from their various operations into **usable information**.</u>「商业智能（BI）通常是指将公司从各种运营中收集的原始数据转换为可用信息的过程。」

BI software comprises specialized computer programs that allow an enterprise to easily aggregate,manipulate,and display data as information that can be acted upon in the decision making process.「BI 软件由专门的计算机程序组成，使企业能够轻松聚合、操作数据并将其显示为可以在决策过程中采取行动的信息。」

::: info 附加信息

商业智能是<u>一套</u>**方法流程**、**架构** 「architecture」、**应用程序和技术**，用于收集原始数据「row data」并将其转化为有意义和有用的信息 「useful information」，以实现更有效的战略「strategic」、战术  「actical」 和运营洞察和决策（推动业务绩效 「performance」）。

BI 是一组方法、流程、应用程序和技术的总称，用于

- 收集、提供访问、分析和报告数据和信息，支持理解和决策
- 支持理解和决策

从广义上讲，智能或知识来自于人类的经验和隐性知识，其形式多种多样，如文本、图像、视频等。-> 从这个意义上说，BI 也与知识管理 (knowledge management) 有关（反之亦然）。

狭义地说，智能来自数据（事实）。-> 传统的商业智能通常不会直接涉及其他内容类型和格式（通常属于人工智能范畴）。

:::

### 区分BI

什么不是 BI？

- Application
- Tool
- Department
- **Project**
- Report Base
- **Archive**
- **IT Service**

什么是 BI？

- Solution
- Suite
- Interdepartmental Team
- Continuous process
- Knowledge Base
- Actionable Information
- Business Asset

:::  note 2 Key Issues on BI

Data and Decision Making「数据和决策 」 => Driving Force (驱动力) for BI 「BI 的驱动力」

<img src="https://pic.hanjiaming.com.cn/2023/09/10/b434713cb322d.png" alt="1694338698155.png" style="zoom: 33%;" />

:::

### BI 决策生命周期

<img src="https://pic.hanjiaming.com.cn/2023/09/10/39d7992efb885.png" alt="1694339691302.png" style="zoom:50%;" />

Data Collection -> Data Warehousing -> Data Analysis Q.A. -> Reporting,Dahsboards, KPI, Trends, -> Business Decisions

### 对 BI 的需要

- 商业智能不再是一个仅与大型组织相关的术语。
- 随着硬件和存储设备价格的下降，商业智能技术也在不断进步，其灵活的部署和许可选项非常容易获得 —— 这使得几乎每个组织都可以使用商业智能。

## Current Situation

- 公司的交易「transactional」信息系统中存储着大量原始数据，**但缺乏将其转化为信息和知识的工具**
- 大约「Roughly」 **80% 的业务分析时间**用于收集、整合「consolidating」和呈现「presenting」信息，20% 的时间用于实际分析和决策。
- 不同公司部门和单位的语义「Semantics」、术语「Terminology」和指标「Metrics」是**不同的且不明确的**「ambiguous」。

### 关键挑战

许多组织都在努力获取可靠、准确和及时的信息，以便做出有效的业务决策。

- 大量「Abundant」数据未有效组织或整合「integrated」
- 指标、KPI 和报告模板不一致
- 数据整合、分析和报告流程效率低「Inefficient」下且不一致「Inconsistent」
- 有限的数据管理规则、准则和角色

导致

- 不知情「Uninformed」的业务决策
- Too Many Conflicting Reports
- 流程效率低下「Inefficient」
- High Operating Costs
- 数据和报告质量问题

### 数据种类挑战

- 数字与文本
- 结构化与非结构化「unstructured」
- 标准格式与专有格式「proprietary format」
- 内部数据与外部数据，系统存储数据与基于文件的数据
- 原始事实数据与模拟「simulation」/预测/估计「estimated」数据
- 简单事实数据与计算指标数据「calculated metrics data」

常见的数据问题

- Don't have that data
  - 数据根本不可用。
  - 数据收集可能需要额外的过程并且成本高昂。
- 信息超载「overloading」
  - 太多的数据和信息
  - 难以组织数据以便有效访问和检索
  - 很难从他们那里找到有用的信息（知识）
- Data everywhere：不同系统和不同来源的数据
- Difficulty of access：我们可能拥有这些数据，但由于技术问题或行政问题，我们无法获取这些数据（或难以获取这些数据）。

## Decision Making

决策可以基于

- Facts, or data
- Simulation (models)
- Intuition「直觉」,perception「知觉」,sense「感觉」
- Group negotiation「团体洽谈」

传统上，Bl 也被理解为决策支持系统 (Decision Support System， DSS )-- 即数据驱动的 DSS（数据直接有助于决策，无需密集的高级分析技术）。

### Problems

- A **gap** between **data** and **knowledge** (useful information leading to a decision).
- Management/operation by **intuition**「凭直觉管理/操作」
- **Lack** of effective **feedback** and **alignment**「协调」 systems**,no improvement cycles**
- Need good **analytical**「分析性的」 processing and **models**

### Example

<img src="https://pic.hanjiaming.com.cn/2023/10/01/37ff7513536a8.png" alt="CleanShot 2023-10-01 at 18.10.02@2x.png" style="zoom:33%;" />

### Solution Overview

<img src="https://pic.hanjiaming.com.cn/2023/10/01/b365b14af7037.png" alt="1696155614043.png" style="zoom: 33%;" />

### A General Process

1. Data Preparation
   1. Data Gathering: 通过不同方式、以不同格式从不同来源收集原始数据。
   2. Data Cleanse: 将数据组织并转换为干净且通用的模型和格式
   3. Data Storage: 提炼后的数据将被建模并存储在特定的数据管理系统中，以进行质量管理、轻松快速的访问以及数据分析。
2. Data Analysis: 这一过程涉及分析部分，如维度分析、统计分析、业务分析和数据挖掘，以提取信息和知识。
   - 查询还可以直接将结果呈现给用户，无需进行深入分析。这通常用于数据探索和描述性报告。
3. Data Presentation: 结果以不同的人类可理解的格式呈现和交付，以支持决策。它还包括数据探索和报告。

### Bl in the Decision Process

商业决策视角的另一种观点

<img src="https://pic.hanjiaming.com.cn/2023/10/13/980bbd6684035.png" alt="1697180039048.png" style="zoom:55%;" />

## Challenges

### Typical BI Challenges

- **Processes** are **not well defined**,efficient,flexible, scalable or measurable
- **Process business rules are inconsistent** between stakeholder groups
- Manual data processing causes **regular data cleaning**
- Lack of **continuous enhancement**
- Lack of **QCs**「质量管理」at critical touch points
- Lack of **management best-practices**
- Lack of **thresholds** based on history and business rules
  - eg: **库存管理**：例如，一家零售公司需要保持适当的库存水平以满足客户需求。如果没有基于历史销售数据和业务规则的阈值，公司可能无法准确预测未来的需求，导致库存过多或不足。
  - eg. **信用风险评估**：例如，一家银行在发放贷款时需要评估借款人的信用风险。如果没有基于历史违约数据和业务规则的阈值，银行可能无法准确评估风险，导致贷款损失的增加。如果设定了阈值，例如信用评分低于某个分数的借款人不予发放贷款，可以帮助银行降低风险。

### To-do items

BI 管理人员应采取的关键步骤，以避免 Bl 系统出现问题和故障

1. Find a balance between analytics agility and **governance** of BI applications
2. Focus on **data management** as a whole and **good data quality** in particular「尤其」
3. Break down data silos「数据孤岛」,and make sure data is **consistent** 「一致的」across systems
4. Work with business executives「业务主管」 to **instill a data-driven culture** among users
5. Track user activity and requests to **spot problems with adoption of BI tools** 
6. Educate users on good data visualization and dashboard **design practices**

## BI Tools

- Processes
- Human Resources
- ROl「投资回报率」,EVA「经济增加值」, expectations, Value add「增值」
- Decision Supporting Systems
- Information System
- Organization, Culture

::: tip Who Uses BI Tools

- 20% Information Producers (Self-Service)
  - IT Report Developer
  - 业务分析师
  - 超级用户
- 80% 信息消费者（定制交付）
  - 高管/经理
  - 行政人员 经理
  - 休闲用户
  - 客户/供应商

:::

## BI Applications Areas

- 商业智能可应用于所有 "业务"（行业、功能领域或领域），以推动 "私营和公共部门的业务绩效"。
- Bi 可以应用于不同层面
  - 战略：专注于高层组织战略和方向
  - 策略：专注于组织单位的目标
  - 运营：专注于简化日常运营。

## Benefits

- 提高信息的速度、准确性和质量。
- 消除数据收集任务，集中精力进行分析和决策。
- 培养好奇心和主动提问的文化。
- 统一演示和计算程序。

## Comparison

### Business Analytics vs. Business Intelligence

![1696668325414.png](https://pic.hanjiaming.com.cn/2023/10/07/e6ef314c72fdf.png)

1. **商业分析 (Business Analytics)**:
   - 重点在于预测未来，解答“会发生什么？”和“为什么会这样？”的问题。
   - 使用预测模型、模拟/优化、高级统计模型等工具。
   - 数据挖掘技术包括文本和多媒体分析。
   - 与数据科学领域有紧密的联系。
2. **商业智能 (Business Intelligence, BI)**:
   - 重点在于描述过去，解答“谁做了这个任务？”和“发生了什么？”的问题。
   - 使用看板、警报、评分卡监控、数据切片和切块等工具进行报告。

### Differences Between Traditional and Modern Bl Platforms

| Analytic Workflow  Component   | Traditional Bl Platform               | Modern Bl Platform                     |
| ------------------------------ | ------------------------------------- | -------------------------------------- |
| Data source                    | 需要前期维度建模（IT 构建的星形模式） | 无需预先建模（平面文件/平面表格）      |
| Data ingestion and preparation | IT 生产                               | 支持 IT                                |
| Content authoring              | 主要是 IT 人员，也有一些高级用户      | 商业用户                               |
| Analysis                       | 基于预定义模型的预定义临时报告        | 自由探索                               |
| Insight delivery               | 通过计划报告或门户网站发布和通知      | 共享与协作、讲故事、开放式应用程序接口 |





