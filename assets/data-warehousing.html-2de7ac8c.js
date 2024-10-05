import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as l,e}from"./app-8cce2176.js";const n={},t=e('<h1 id="data-warehousing" tabindex="-1"><a class="header-anchor" href="#data-warehousing" aria-hidden="true">#</a> Data WareHousing</h1><p>数据，数据无处不在，但是......</p><ul><li>我找不到我需要的数据 <ul><li>data is scattered「分散」 over the network</li><li>many versions, subtle「微妙的」 differences</li></ul></li><li>我无法获取我需要的数据：需要专家来获取数据</li><li>我无法理解我找到的数据：可用数据记录不完整</li><li>I can’t use the data I found <ul><li>results are unexpected</li><li>数据需要从一种形式转换为另一种形式</li></ul></li></ul><h2 id="why-data-warehousing" tabindex="-1"><a class="header-anchor" href="#why-data-warehousing" aria-hidden="true">#</a> Why Data Warehousing</h2><ul><li>哪些是我们利润率最低/最高的客户？</li><li>谁是我的客户以及什么产品，他们在买吗？</li><li>哪些客户最有可能转向竞争对手？</li><li>...</li></ul><p><strong>Why Do We Need Data Warehouses?</strong></p><ul><li>Consolidation「合并」 of information resources</li><li>Improved query performance</li><li>将搜索和决策支持功能从操作系统中分离出来</li><li>Foundation for <ul><li>data mining,</li><li>data visualization,</li><li>advanced reporting and</li><li>OLAP (On-Line Analytical Processing) tools</li></ul></li></ul><h3 id="root-of-the-problem" tabindex="-1"><a class="header-anchor" href="#root-of-the-problem" aria-hidden="true">#</a> Root of the Problem</h3><p>Heterogeneous「异构信息源」 Information Sources</p><p><em>“Heterogeneities are everywhere”</em></p><ul><li>Different interfaces</li><li>Different data representations</li><li>Duplicate and inconsistent information</li></ul><h3 id="additional-problem" tabindex="-1"><a class="header-anchor" href="#additional-problem" aria-hidden="true">#</a> Additional Problem</h3><p>大型企业的数据管理</p><ul><li>Vertical fragmentation of informational systems「信息系统的纵向分割」</li><li>应用程序（用户）驱动的操作系统开发的结果</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2023/12/13/a4eb8a768d954.png" alt="1702415288877.png" tabindex="0" loading="lazy"><figcaption>1702415288877.png</figcaption></figure><h2 id="what-is-data-warehouse" tabindex="-1"><a class="header-anchor" href="#what-is-data-warehouse" aria-hidden="true">#</a> What is Data Warehouse</h2><p>Defined in many different ways,but not rigorously.</p><ul><li>与组织业务数据库分开维护的决策支持数据库</li><li>通过提供用于分析的综合历史数据的坚实平台，支持信息处理</li></ul><p>数据仓库是一种面向主题的、综合的、随时间变化的和非易失性的数据收集，用于支持管理层的决策过程。</p><p>Data warehousing: The process of constructing and using data warehouses</p><h2 id="used-for" tabindex="-1"><a class="header-anchor" href="#used-for" aria-hidden="true">#</a> Used for</h2><ul><li>In many organizations,we want a central &quot;store&quot;of all of our entities, concepts, metadata ,and historical information <ul><li>For doing data validation, complex mining, analysis, prediction, etc.</li></ul></li><li>数据仓库的 &quot;现代 &quot;用途之一不仅是支持分析，还可作为组织内所有实体的参考资料 <ul><li>我们所知道的经过清理、验证的存储库 <ul><li>可与数据源链接</li><li>......有助于数据清理</li><li>......并可作为数据管理（以系统方式创建和修改数据的流程，如遵守政府法规）的基础</li></ul></li></ul></li><li>Knowledge discovery <ul><li>Making consolidated「综合」 reports</li><li>Finding relationships and correlations</li><li>Data mining</li><li>Examples <ul><li>Banks identifying credit risks</li><li>Insurance companies searching for fraud</li></ul></li></ul></li><li>OLAP (Online Analytical Processing) <ul><li>它与用于处理企业某一方面日常运行的 OLTP（联机事务处理）不同。</li><li>OLTP系统通常是相互独立设计的，很难共享信息。</li></ul></li></ul><h2 id="characteristics" tabindex="-1"><a class="header-anchor" href="#characteristics" aria-hidden="true">#</a> Characteristics</h2><h3 id="subject-oriented" tabindex="-1"><a class="header-anchor" href="#subject-oriented" aria-hidden="true">#</a> Subject-Oriented</h3><ul><li>围绕客户、产品、销售等主要主题进行组织</li><li>侧重于为决策者提供数据建模和分析，而不是日常操作或事务处理</li><li>通过排除对决策支持流程无用的数据，围绕特定主题问题提供简明扼要的视图</li></ul><h3 id="integrated" tabindex="-1"><a class="header-anchor" href="#integrated" aria-hidden="true">#</a> Integrated</h3><ul><li>Constructed by integrating multiple, heterogeneous data sources <ul><li>relational databases, flat files, on-line transaction records</li></ul></li><li>Data cleaning and data integration techniques are applied. <ul><li>确保不同数据源在命名规则、编码结构、属性度量等方面的一致性</li><li>例如，酒店价格：货币、税、含早餐等。</li></ul></li><li>当数据被转移到仓库时，会对其进行转换。</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2023/12/13/815c6941efc17.png" alt="1702416250307.png" tabindex="0" loading="lazy"><figcaption>1702416250307.png</figcaption></figure><h3 id="time-variant" tabindex="-1"><a class="header-anchor" href="#time-variant" aria-hidden="true">#</a> Time Variant</h3><p>数据仓库的时间跨度远远长于业务系统的时间跨度</p><ul><li>运行数据库：当前值数据</li><li>数据仓库数据：从历史角度（如过去 5-10 年）提供信息</li></ul><p>数据仓库中的每个关键结构</p><ul><li>明确或隐含地包含时间元素</li><li>但运营数据的key可能包含也可能不包含“时间元素”</li></ul><h3 id="nonvolatile" tabindex="-1"><a class="header-anchor" href="#nonvolatile" aria-hidden="true">#</a> Nonvolatile</h3><ul><li>从运行环境中转换而来的物理上独立的数据存储库</li><li>数据仓库环境中不会发生数据的操作更新 <ul><li>不需要事务处理、恢复和并发控制机制</li><li>数据访问只需两个操作: 数据的初始加载 或 数据访问</li></ul></li></ul><h2 id="oltp-vs-olap" tabindex="-1"><a class="header-anchor" href="#oltp-vs-olap" aria-hidden="true">#</a> OLTP vs. OLAP</h2><ul><li>OLTP (on-line transaction processing) <ul><li>传统关系型DBMS的主要任务</li><li>日常运营：采购、库存、银行、制造、工资、登记、会计等。</li></ul></li><li>OLAP (on-line analytical processing) <ul><li>数据仓库系统的主要任务</li><li><u>Data analysis and decision making</u></li></ul></li></ul><img src="https://pic.hanjiaming.com.cn/2023/12/14/c0dcbb81dafe9.png" alt="1702493815694.png" style="zoom:33%;"><img src="https://pic.hanjiaming.com.cn/2023/12/14/7b31894b049b5.png" alt="1702493894778.png" style="zoom:50%;"><div class="hint-container info"><p class="hint-container-title">为什么需要单独的数据仓库？</p><ul><li>High performance for both systems <ul><li>DBMS - 针对 OLTP 进行调整：访问方法、索引、并发控制、恢复</li><li>仓库 — 针对 OLAP 进行调整：复杂的 OLAP 查询、多维视图、整合</li></ul></li><li>不同的功能和不同的数据 <ul><li>数据缺失：决策支持需要历史数据，而业务数据库 「operational DBs」 通常不会维护这些数据</li><li>数据整合「data consolidation」：决策支持需要整合（聚合、汇总）来自异构源的数据</li><li>data quality：不同来源通常使用不一致的数据表示、代码和格式，必须加以协调</li></ul></li></ul><p>注意：有越来越多的系统直接对关系数据库执行 OLAP 分析</p></div><img src="https://pic.hanjiaming.com.cn/2023/12/14/1d3a8bb0590c1.png" alt="1702494129170.png" style="zoom:33%;">',41),r=[t];function o(s,d){return a(),l("div",null,r)}const h=i(n,[["render",o],["__file","data-warehousing.html.vue"]]);export{h as default};