const e=JSON.parse('{"key":"v-6a4472b4","path":"/note/ds/da/Numpy-Pandas/Cleaning-Data-in-Python.html","title":"Cleaning Data in Python","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-03-23T00:00:00.000Z","order":6,"description":"Cleaning Data in Python PD dateframe 类型转换 Why do data types matter? Affects which operations you can perform Avoid storing data as strings (when possible) int , float : enables mathematical operations datetime : enables date-based a ributes and methods category : uses less memory and runs faster bool : enables logical and mathematical operations","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/ds/da/Numpy-Pandas/Cleaning-Data-in-Python.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Cleaning Data in Python"}],["meta",{"property":"og:description","content":"Cleaning Data in Python PD dateframe 类型转换 Why do data types matter? Affects which operations you can perform Avoid storing data as strings (when possible) int , float : enables mathematical operations datetime : enables date-based a ributes and methods category : uses less memory and runs faster bool : enables logical and mathematical operations"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2022-03-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Cleaning Data in Python\\",\\"description\\":\\"Cleaning Data in Python PD dateframe 类型转换 Why do data types matter? Affects which operations you can perform Avoid storing data as strings (when possible) int , float : enables mathematical operations datetime : enables date-based a ributes and methods category : uses less memory and runs faster bool : enables logical and mathematical operations\\"}"]]},"headers":[{"level":2,"title":"PD dateframe 类型转换","slug":"pd-dateframe-类型转换","link":"#pd-dateframe-类型转换","children":[{"level":3,"title":"Series 查看类型","slug":"series-查看类型","link":"#series-查看类型","children":[]},{"level":3,"title":"dataFrame 查看类型","slug":"dataframe-查看类型","link":"#dataframe-查看类型","children":[]},{"level":3,"title":"to object","slug":"to-object","link":"#to-object","children":[]},{"level":3,"title":"to int","slug":"to-int","link":"#to-int","children":[]},{"level":3,"title":"to dt.datatime","slug":"to-dt-datatime","link":"#to-dt-datatime","children":[]},{"level":3,"title":"to category","slug":"to-category","link":"#to-category","children":[]}]},{"level":2,"title":"Assert","slug":"assert","link":"#assert","children":[]},{"level":2,"title":"treat duplicate","slug":"treat-duplicate","link":"#treat-duplicate","children":[{"level":3,"title":".duplicated() method","slug":"duplicated-method","link":"#duplicated-method","children":[]},{"level":3,"title":"Output duplicate values","slug":"output-duplicate-values","link":"#output-duplicate-values","children":[]},{"level":3,"title":"Drop duplicates","slug":"drop-duplicates","link":"#drop-duplicates","children":[]}]},{"level":2,"title":"Unique","slug":"unique","link":"#unique","children":[{"level":3,"title":"Print unique values","slug":"print-unique-values","link":"#print-unique-values","children":[]},{"level":3,"title":"difference","slug":"difference","link":"#difference","children":[]}]},{"level":2,"title":"Categorical variables","slug":"categorical-variables","link":"#categorical-variables","children":[{"level":3,"title":"Value consistency","slug":"value-consistency","link":"#value-consistency","children":[]},{"level":3,"title":"value_counts()","slug":"value-counts","link":"#value-counts","children":[]},{"level":3,"title":"Strip all spaces","slug":"strip-all-spaces","link":"#strip-all-spaces","children":[]},{"level":3,"title":"Collapsing data into categories","slug":"collapsing-data-into-categories","link":"#collapsing-data-into-categories","children":[]}]},{"level":2,"title":"Replace","slug":"replace","link":"#replace","children":[{"level":3,"title":"Create mappings and replace","slug":"create-mappings-and-replace","link":"#create-mappings-and-replace","children":[]},{"level":3,"title":"Replace str","slug":"replace-str","link":"#replace-str","children":[]},{"level":3,"title":"Replace with Regular expressions","slug":"replace-with-regular-expressions","link":"#replace-with-regular-expressions","children":[]}]},{"level":2,"title":".any()","slug":"any","link":"#any","children":[]},{"level":2,"title":"assert 关键字","slug":"assert-关键字","link":"#assert-关键字","children":[]},{"level":2,"title":"dt.date","slug":"dt-date","link":"#dt-date","children":[{"level":3,"title":"Datetime formatting","slug":"datetime-formatting","link":"#datetime-formatting","children":[]},{"level":3,"title":"格式转换","slug":"格式转换","link":"#格式转换","children":[]}]},{"level":2,"title":"Cross field validation","slug":"cross-field-validation","link":"#cross-field-validation","children":[{"level":3,"title":".sum()","slug":"sum","link":"#sum","children":[]}]},{"level":2,"title":"Completeness","slug":"completeness","link":"#completeness","children":[{"level":3,"title":".isna()","slug":"isna","link":"#isna","children":[]},{"level":3,"title":".isna().sum()","slug":"isna-sum","link":"#isna-sum","children":[]},{"level":3,"title":"缺失可视化","slug":"缺失可视化","link":"#缺失可视化","children":[]},{"level":3,"title":"Dropping missing values","slug":"dropping-missing-values","link":"#dropping-missing-values","children":[]},{"level":3,"title":"Treat Nan","slug":"treat-nan","link":"#treat-nan","children":[]}]},{"level":2,"title":"Simple string comparison","slug":"simple-string-comparison","link":"#simple-string-comparison","children":[{"level":3,"title":"Minimum edit distance","slug":"minimum-edit-distance","link":"#minimum-edit-distance","children":[]},{"level":3,"title":"相似性","slug":"相似性","link":"#相似性","children":[]},{"level":3,"title":"列表","slug":"列表","link":"#列表","children":[]}]},{"level":2,"title":"Append 相似追加","slug":"append-相似追加","link":"#append-相似追加","children":[]},{"level":2,"title":"np.non","slug":"np-non","link":"#np-non","children":[]},{"level":2,"title":"str操作","slug":"str操作","link":"#str操作","children":[{"level":3,"title":"series.str.cat()","slug":"series-str-cat","link":"#series-str-cat","children":[]},{"level":3,"title":"Strip","slug":"strip","link":"#strip","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":18.91,"words":1891},"filePathRelative":"note/ds/da/Numpy-Pandas/Cleaning-Data-in-Python.md","localizedDate":"2022年3月23日","excerpt":"<h1> Cleaning Data in Python</h1>\\n<h2> PD dateframe 类型转换</h2>\\n<p>Why do data types matter?</p>\\n<ul>\\n<li>Affects which operations you can perform</li>\\n<li>Avoid storing data as strings (when possible)\\n<ul>\\n<li>int , float : enables mathematical operations</li>\\n<li>datetime : enables date-based a ributes and methods</li>\\n<li>category : uses less memory and runs faster</li>\\n<li>bool : enables logical and mathematical operations</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};