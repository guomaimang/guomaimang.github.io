const t=JSON.parse('{"key":"v-7e4d7c94","path":"/note/it/cc/rdd.html","title":"Spark RDD","lang":"zh-CN","frontmatter":{"article":false,"date":"2024-05-08T00:00:00.000Z","index":true,"order":15,"headerDepth":2,"description":"Spark RDD Resilient Distributed Datasets (RDD) Spark RDD 在逻辑上被划分为多个节点，以便在集群的不同节点上并行计算。 1715145643268.png RDD: a distributed data structure !","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/it/cc/rdd.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Spark RDD"}],["meta",{"property":"og:description","content":"Spark RDD Resilient Distributed Datasets (RDD) Spark RDD 在逻辑上被划分为多个节点，以便在集群的不同节点上并行计算。 1715145643268.png RDD: a distributed data structure !"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2024-05-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Spark RDD\\",\\"description\\":\\"Spark RDD Resilient Distributed Datasets (RDD) Spark RDD 在逻辑上被划分为多个节点，以便在集群的不同节点上并行计算。 1715145643268.png RDD: a distributed data structure !\\"}"]]},"headers":[{"level":2,"title":"RDD Internal","slug":"rdd-internal","link":"#rdd-internal","children":[]},{"level":2,"title":"Transformations and Actions","slug":"transformations-and-actions","link":"#transformations-and-actions","children":[{"level":3,"title":"RDD Creation","slug":"rdd-creation","link":"#rdd-creation","children":[]},{"level":3,"title":"map(func)","slug":"map-func","link":"#map-func","children":[]},{"level":3,"title":"flatMap(func)","slug":"flatmap-func","link":"#flatmap-func","children":[]},{"level":3,"title":"reduce(func)","slug":"reduce-func","link":"#reduce-func","children":[]}]},{"level":2,"title":"Examples of Actions","slug":"examples-of-actions","link":"#examples-of-actions","children":[{"level":3,"title":"collect()","slug":"collect","link":"#collect","children":[]},{"level":3,"title":"Others","slug":"others","link":"#others","children":[]}]},{"level":2,"title":"Transformations","slug":"transformations","link":"#transformations","children":[{"level":3,"title":"Narrow Transformation","slug":"narrow-transformation","link":"#narrow-transformation","children":[]},{"level":3,"title":"Wide Transformation","slug":"wide-transformation","link":"#wide-transformation","children":[]},{"level":3,"title":"Shuffle","slug":"shuffle","link":"#shuffle","children":[]}]},{"level":2,"title":"RDD Partitions","slug":"rdd-partitions","link":"#rdd-partitions","children":[]},{"level":2,"title":"Spark Execution Flow","slug":"spark-execution-flow","link":"#spark-execution-flow","children":[]},{"level":2,"title":"RDD Cache","slug":"rdd-cache","link":"#rdd-cache","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":17.14,"words":1714},"filePathRelative":"note/it/cc/rdd.md","localizedDate":"2024年5月8日","excerpt":"<h1> Spark RDD</h1>\\n<p>Resilient Distributed Datasets (RDD)</p>\\n<p>Spark RDD 在逻辑上被划分为多个节点，以便在集群的不同节点上并行计算。</p>\\n<figure><img src=\\"https://pic.hanjiaming.com.cn/2024/05/08/d4fc3a18a53d0.png\\" alt=\\"1715145643268.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>1715145643268.png</figcaption></figure>\\n<p>RDD: a <strong>distributed</strong> data structure !</p>","autoDesc":true}');export{t as data};