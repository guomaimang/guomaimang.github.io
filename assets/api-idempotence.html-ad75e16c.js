const e=JSON.parse('{"key":"v-47a12d68","path":"/note/it/arch/api-idempotence.html","title":"分布式设计中的幂等性处理","lang":"zh-CN","frontmatter":{"article":false,"date":"2024-12-23T00:00:00.000Z","index":true,"order":16,"headerDepth":1,"category":["tech"],"description":"分布式设计中的幂等性处理 在分布式系统设计中，接口幂等性的处理是必须要考虑的重要问题。 很多开发人员对幂等性了解不多，在实际代码开发中也很少关注。 其实幂等性的概念非常简单，它的含义是：一次接口调用与多次相同的接口调用，能够得到与预期相符的结果。 基本架构设计案例 以京东金融为例，京东金融有大量的应用系统，比如审计系统和前端应用。它们需要与后台的数据仓库进行交互，通常选择 RESTful 或 RPC 的方式进行调用。这里以 RESTful 为例进行讲解。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/it/arch/api-idempotence.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"分布式设计中的幂等性处理"}],["meta",{"property":"og:description","content":"分布式设计中的幂等性处理 在分布式系统设计中，接口幂等性的处理是必须要考虑的重要问题。 很多开发人员对幂等性了解不多，在实际代码开发中也很少关注。 其实幂等性的概念非常简单，它的含义是：一次接口调用与多次相同的接口调用，能够得到与预期相符的结果。 基本架构设计案例 以京东金融为例，京东金融有大量的应用系统，比如审计系统和前端应用。它们需要与后台的数据仓库进行交互，通常选择 RESTful 或 RPC 的方式进行调用。这里以 RESTful 为例进行讲解。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-27T18:33:55.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2024-12-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-27T18:33:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"分布式设计中的幂等性处理\\",\\"description\\":\\"分布式设计中的幂等性处理 在分布式系统设计中，接口幂等性的处理是必须要考虑的重要问题。 很多开发人员对幂等性了解不多，在实际代码开发中也很少关注。 其实幂等性的概念非常简单，它的含义是：一次接口调用与多次相同的接口调用，能够得到与预期相符的结果。 基本架构设计案例 以京东金融为例，京东金融有大量的应用系统，比如审计系统和前端应用。它们需要与后台的数据仓库进行交互，通常选择 RESTful 或 RPC 的方式进行调用。这里以 RESTful 为例进行讲解。\\"}"]]},"headers":[{"level":2,"title":"基本架构设计案例","slug":"基本架构设计案例","link":"#基本架构设计案例","children":[]},{"level":2,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[{"level":3,"title":"传统解决方案","slug":"传统解决方案","link":"#传统解决方案","children":[]},{"level":3,"title":"无侵入的幂等解决方案","slug":"无侵入的幂等解决方案","link":"#无侵入的幂等解决方案","children":[]},{"level":3,"title":"处理过程","slug":"处理过程","link":"#处理过程","children":[]},{"level":3,"title":"存活时间的设置","slug":"存活时间的设置","link":"#存活时间的设置","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]}]},{"level":2,"title":"优缺点分析","slug":"优缺点分析","link":"#优缺点分析","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1735324435000,"updatedTime":1735324435000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.74,"words":1374},"filePathRelative":"note/it/arch/api-idempotence.md","localizedDate":"2024年12月23日","excerpt":"<h1> 分布式设计中的幂等性处理</h1>\\n<p>在<strong>分布式系统</strong>设计中，接口幂等性的处理是必须要考虑的重要问题。</p>\\n<p>很多开发人员对幂等性了解不多，在实际代码开发中也很少关注。</p>\\n<p><strong>其实幂等性的概念非常简单，它的含义是：一次接口调用与多次相同的接口调用，能够得到与预期相符的结果。</strong></p>\\n<h2> 基本架构设计案例</h2>\\n<p>以京东金融为例，京东金融有大量的应用系统，比如审计系统和前端应用。它们需要与后台的数据仓库进行交互，通常选择 RESTful 或 RPC 的方式进行调用。这里以 RESTful 为例进行讲解。</p>","autoDesc":true}');export{e as data};