const e=JSON.parse('{"key":"v-9c50a34e","path":"/note/it/arch/ali-ban-foreign-key.html","title":"阿里规范中禁用外键的原因","lang":"zh-CN","frontmatter":{"article":false,"date":"2024-12-23T00:00:00.000Z","index":true,"order":9,"headerDepth":1,"category":["tech"],"description":"阿里规范中禁用外键的原因 在阿里开发规范中，为什么要禁用外键约束。为什么有的公司大力推广外键约束，而有的公司对外键约束嗤之以鼻？ 阿里数据库开发规范 阿里巴巴定期更新内部的Java开发规范，其中在数据库篇中明确规定： 不得使用外键与级联，一切外键概念必须在应用层来解决。 这份文档虽然对外键的解释不太全面，但明确指出了在实际项目开发中不推荐使用外键。 为什么不喜欢使用外键 数据完整性带来的不便 测试和开发不便：增加、删除或更新外键约束时，必须保证数据的完整性。这会给测试和开发带来极大的不便。 测试环境复杂：为了保证数据完整性，测试时需要在额外的十几张乃至几十张的主表中添加基础数据，增加了复杂性和工作量。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/it/arch/ali-ban-foreign-key.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"阿里规范中禁用外键的原因"}],["meta",{"property":"og:description","content":"阿里规范中禁用外键的原因 在阿里开发规范中，为什么要禁用外键约束。为什么有的公司大力推广外键约束，而有的公司对外键约束嗤之以鼻？ 阿里数据库开发规范 阿里巴巴定期更新内部的Java开发规范，其中在数据库篇中明确规定： 不得使用外键与级联，一切外键概念必须在应用层来解决。 这份文档虽然对外键的解释不太全面，但明确指出了在实际项目开发中不推荐使用外键。 为什么不喜欢使用外键 数据完整性带来的不便 测试和开发不便：增加、删除或更新外键约束时，必须保证数据的完整性。这会给测试和开发带来极大的不便。 测试环境复杂：为了保证数据完整性，测试时需要在额外的十几张乃至几十张的主表中添加基础数据，增加了复杂性和工作量。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-23T17:20:01.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2024-12-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-23T17:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"阿里规范中禁用外键的原因\\",\\"description\\":\\"阿里规范中禁用外键的原因 在阿里开发规范中，为什么要禁用外键约束。为什么有的公司大力推广外键约束，而有的公司对外键约束嗤之以鼻？ 阿里数据库开发规范 阿里巴巴定期更新内部的Java开发规范，其中在数据库篇中明确规定： 不得使用外键与级联，一切外键概念必须在应用层来解决。 这份文档虽然对外键的解释不太全面，但明确指出了在实际项目开发中不推荐使用外键。 为什么不喜欢使用外键 数据完整性带来的不便 测试和开发不便：增加、删除或更新外键约束时，必须保证数据的完整性。这会给测试和开发带来极大的不便。 测试环境复杂：为了保证数据完整性，测试时需要在额外的十几张乃至几十张的主表中添加基础数据，增加了复杂性和工作量。\\"}"]]},"headers":[{"level":2,"title":"阿里数据库开发规范","slug":"阿里数据库开发规范","link":"#阿里数据库开发规范","children":[]},{"level":2,"title":"为什么不喜欢使用外键","slug":"为什么不喜欢使用外键","link":"#为什么不喜欢使用外键","children":[{"level":3,"title":"数据完整性带来的不便","slug":"数据完整性带来的不便","link":"#数据完整性带来的不便","children":[]},{"level":3,"title":"性能问题","slug":"性能问题","link":"#性能问题","children":[]},{"level":3,"title":"并发性问题","slug":"并发性问题","link":"#并发性问题","children":[]},{"level":3,"title":"级联删除的问题","slug":"级联删除的问题","link":"#级联删除的问题","children":[]},{"level":3,"title":"数据库层面的耦合","slug":"数据库层面的耦合","link":"#数据库层面的耦合","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1734974401000,"updatedTime":1734974401000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.89,"words":789},"filePathRelative":"note/it/arch/ali-ban-foreign-key.md","localizedDate":"2024年12月23日","excerpt":"<h1> 阿里规范中禁用外键的原因</h1>\\n<p>在阿里开发规范中，为什么要禁用外键约束。为什么有的公司大力推广外键约束，而有的公司对外键约束嗤之以鼻？</p>\\n<h2> 阿里数据库开发规范</h2>\\n<p>阿里巴巴定期更新内部的Java开发规范，其中在数据库篇中明确规定：</p>\\n<p><strong>不得使用外键与级联，一切外键概念必须在应用层来解决</strong>。</p>\\n<p>这份文档虽然对外键的解释不太全面，但明确指出了在实际项目开发中不推荐使用外键。</p>\\n<h2> 为什么不喜欢使用外键</h2>\\n<h3> 数据完整性带来的不便</h3>\\n<ul>\\n<li><strong>测试和开发不便</strong>：增加、删除或更新外键约束时，必须保证数据的完整性。这会给测试和开发带来极大的不便。</li>\\n<li><strong>测试环境复杂</strong>：为了保证数据完整性，测试时需要在额外的十几张乃至几十张的主表中添加基础数据，增加了复杂性和工作量。</li>\\n</ul>","autoDesc":true}');export{e as data};