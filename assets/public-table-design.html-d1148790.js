const e=JSON.parse('{"key":"v-df3b2e5e","path":"/note/it/arch/public-table-design.html","title":"公共表设计与分布式数据库管理","lang":"zh-CN","frontmatter":{"article":false,"date":"2025-01-09T00:00:00.000Z","index":true,"order":22,"headerDepth":1,"category":["tech"],"description":"公共表设计与分布式数据库管理 在复杂的系统中，公共表是指被其他业务模块共享的基础数据表。这些表在系统中起到底层支撑的作用，常见的公共表包括用户表、行政区划、数据字典、组织结构和系统配置等。 尽管这些表不直接承担具体的业务职责，但它们对上层应用至关重要。然而，在分布式环境下，设计和管理这些公共表会遇到新的挑战。 早期设计与管理方式 单一大库管理","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/it/arch/public-table-design.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"公共表设计与分布式数据库管理"}],["meta",{"property":"og:description","content":"公共表设计与分布式数据库管理 在复杂的系统中，公共表是指被其他业务模块共享的基础数据表。这些表在系统中起到底层支撑的作用，常见的公共表包括用户表、行政区划、数据字典、组织结构和系统配置等。 尽管这些表不直接承担具体的业务职责，但它们对上层应用至关重要。然而，在分布式环境下，设计和管理这些公共表会遇到新的挑战。 早期设计与管理方式 单一大库管理"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-09T16:07:41.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2025-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T16:07:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"公共表设计与分布式数据库管理\\",\\"description\\":\\"公共表设计与分布式数据库管理 在复杂的系统中，公共表是指被其他业务模块共享的基础数据表。这些表在系统中起到底层支撑的作用，常见的公共表包括用户表、行政区划、数据字典、组织结构和系统配置等。 尽管这些表不直接承担具体的业务职责，但它们对上层应用至关重要。然而，在分布式环境下，设计和管理这些公共表会遇到新的挑战。 早期设计与管理方式 单一大库管理\\"}"]]},"headers":[{"level":2,"title":"早期设计与管理方式","slug":"早期设计与管理方式","link":"#早期设计与管理方式","children":[{"level":3,"title":"单一大库管理","slug":"单一大库管理","link":"#单一大库管理","children":[]},{"level":3,"title":"业务发展带来的挑战","slug":"业务发展带来的挑战","link":"#业务发展带来的挑战","children":[]}]},{"level":2,"title":"分布式数据库的设计思路","slug":"分布式数据库的设计思路","link":"#分布式数据库的设计思路","children":[{"level":3,"title":"数据库切分","slug":"数据库切分","link":"#数据库切分","children":[]},{"level":3,"title":"设计实现","slug":"设计实现","link":"#设计实现","children":[]},{"level":3,"title":"用户服务的引入","slug":"用户服务的引入","link":"#用户服务的引入","children":[]}]},{"level":2,"title":"优化与解耦","slug":"优化与解耦","link":"#优化与解耦","children":[{"level":3,"title":"数据层面解耦","slug":"数据层面解耦","link":"#数据层面解耦","children":[]},{"level":3,"title":"团队之间解耦","slug":"团队之间解耦","link":"#团队之间解耦","children":[]}]},{"level":2,"title":"架构设计的复杂性","slug":"架构设计的复杂性","link":"#架构设计的复杂性","children":[{"level":3,"title":"开发的繁琐性","slug":"开发的繁琐性","link":"#开发的繁琐性","children":[]},{"level":3,"title":"架构设计的解决方案","slug":"架构设计的解决方案","link":"#架构设计的解决方案","children":[]}]},{"level":2,"title":"实例与实现","slug":"实例与实现","link":"#实例与实现","children":[{"level":3,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1736438861000,"updatedTime":1736438861000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":15.17,"words":1517},"filePathRelative":"note/it/arch/public-table-design.md","localizedDate":"2025年1月9日","excerpt":"<h1> 公共表设计与分布式数据库管理</h1>\\n<p>在复杂的系统中，公共表是指被其他业务模块共享的基础数据表。这些表在系统中起到底层支撑的作用，常见的公共表包括用户表、行政区划、数据字典、组织结构和系统配置等。</p>\\n<p>尽管这些表不直接承担具体的业务职责，但它们对上层应用至关重要。然而，在分布式环境下，设计和管理这些公共表会遇到新的挑战。</p>\\n<h2> 早期设计与管理方式</h2>\\n<h3> 单一大库管理</h3>\\n<img src=\\"https://pic.hanjiaming.com.cn/2025/01/09/15bed7da8bd9c.png\\" alt=\\"Google Chrome 2025-01-09 23.51.08.png\\" style=\\"zoom:50%;\\">","autoDesc":true}');export{e as data};