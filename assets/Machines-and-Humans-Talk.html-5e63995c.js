import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as l,e}from"./app-248d1dbd.js";const n={},t=e('<h1 id="machines-humans-talk" tabindex="-1"><a class="header-anchor" href="#machines-humans-talk" aria-hidden="true">#</a> Machines &amp; humans Talk</h1><p>为什么要用自然语言与机器交流？</p><ul><li>自然语言是人类互动的最自然和最包容的界面</li><li>可以使用代理系统等复杂设备（参见物联网）</li><li>可以用自然语言训练和教导设备</li><li>许多社会功能依赖于自然语言交流，例如商业交易。</li><li>系统可以自主操作（经过简报），并向你报告经验</li><li>语言是最有效的交流方式：抽象、简约和利用共同点</li></ul><h2 id="natural-language" tabindex="-1"><a class="header-anchor" href="#natural-language" aria-hidden="true">#</a> Natural Language</h2><ul><li>一种由人类为一般交流目的而说、写或签名的语言。</li><li>与正式语言（编程、数学语言）和构造语言相对照。</li><li>在科幻小说的人机交互界面中大量使用!</li></ul><h2 id="nlp" tabindex="-1"><a class="header-anchor" href="#nlp" aria-hidden="true">#</a> NLP</h2><h3 id="semantic-analysis" tabindex="-1"><a class="header-anchor" href="#semantic-analysis" aria-hidden="true">#</a> Semantic Analysis</h3><ul><li>用语义（意义）信息标记文本，如专有名词、性别、数字、原因、结果等。</li><li>使用启发式结合统计和概率</li></ul><img src="https://pic.hanjiaming.com.cn/2022/12/11/4658a7b1d8201.png" alt="1670689209798.png" style="zoom:33%;"><h3 id="syntactic-analysis-parsing" tabindex="-1"><a class="header-anchor" href="#syntactic-analysis-parsing" aria-hidden="true">#</a> Syntactic Analysis (Parsing)</h3><ul><li><p>分析形成更大结构（句子）的相关标记（单词）组</p></li><li><p>将线性句子转换为层次结构分析树</p></li><li><p>解析是通过语法来完成的，语法是对一个句子中允许的结构的正式说明。</p></li><li><p>解析算法是一种方法，用于确定</p></li><li><p>句子的结构的方法。</p></li><li><p>解析器是一个确定句子结构的程序。</p></li></ul><img src="https://pic.hanjiaming.com.cn/2022/12/11/4ac04be4aa10e.png" alt="1670689417027.png" style="zoom:33%;"><h3 id="part-of-speech-tagging" tabindex="-1"><a class="header-anchor" href="#part-of-speech-tagging" aria-hidden="true">#</a> Part-of-speech tagging</h3><ul><li>语篇标签「Part-of-speech tagging」是为句子中的每个词贴上适当的语篇标签的任务。</li><li>POS类 根据词的句法或语法行为将其分为不同的类别</li></ul><p>一个词可以有多个标签！通常情况下，这是用概率来完成的。</p><figure><img src="https://pic.hanjiaming.com.cn/2022/12/11/dc53d7ae745fc.png" alt="1670689634551.png" tabindex="0" loading="lazy"><figcaption>1670689634551.png</figcaption></figure><h3 id="tokenization" tabindex="-1"><a class="header-anchor" href="#tokenization" aria-hidden="true">#</a> Tokenization</h3><ul><li>将字符串转换为单词</li><li>对印欧语系的语言来说是微不足道的（几乎）。</li><li>对其他语言来说则更为复杂，例如。中文需要分词。</li></ul><h3 id="speech-recognition-two-forms" tabindex="-1"><a class="header-anchor" href="#speech-recognition-two-forms" aria-hidden="true">#</a> Speech Recognition (two forms)</h3><ul><li>将口语转换为机器可读的输入（文本）。</li><li>根据声音输入识别说话者（语音验证）。</li></ul><p>将口语转换为机器可读的输入（文本） 0 根据声音输入识别说话者（语音验证）。</p><p>语音识别方法：</p><ul><li>技术主要来自于电子工程和数学 <ul><li>Digital Signal Processing</li><li>Probabilities and Statistics, Modeling</li></ul></li><li>以字错误率衡量 (错字数/句子长度)</li><li>Problems <ul><li>Speaker dependence</li><li>Acoustic sampling「环境噪声」</li><li>Environmental noise</li></ul></li></ul><h3 id="difficulties" tabindex="-1"><a class="header-anchor" href="#difficulties" aria-hidden="true">#</a> Difficulties</h3><ul><li>Error Cascading <ul><li>Processing natural language is a multi-step process</li><li>一个阶段的错误会导致更多的错误</li></ul></li><li>Ambiguity</li></ul><h2 id="understanding-generation" tabindex="-1"><a class="header-anchor" href="#understanding-generation" aria-hidden="true">#</a> Understanding &amp; Generation</h2><h3 id="ambiguity" tabindex="-1"><a class="header-anchor" href="#ambiguity" aria-hidden="true">#</a> Ambiguity</h3><p>歧义无处不在，而我们却察觉不到！！！</p><p>如何实现计算机与人类的对话？将其分解成若干部分</p><img src="https://pic.hanjiaming.com.cn/2022/12/11/7d433f1c84ca7.png" alt="1670771635152.png" style="zoom:33%;"><h3 id="awareness-of-situated-contexts" tabindex="-1"><a class="header-anchor" href="#awareness-of-situated-contexts" aria-hidden="true">#</a> Awareness of situated contexts</h3><ul><li>图像识别只给出物体的类型，而不是实例。</li><li>识别对象实例是困难的，需要计算多个对象（椅子），跨环境识别对象，为对象的不同实例分配属性（我的椅子坏了），对象实例可能移动、消失、出现，等等。</li><li>Extreme solutions <ul><li>所有相同类型的对象（如椅子）都是同一个实例（椅子）。</li><li>对一个物体的每一次感知都会产生一个新的实例（有多少椅子就有多少感知）。</li></ul></li></ul><h3 id="match-places-and-objects-within-contexts" tabindex="-1"><a class="header-anchor" href="#match-places-and-objects-within-contexts" aria-hidden="true">#</a> Match places and objects within contexts</h3><p>位置定义了对象实例，对象定义了位置。</p><ul><li>在已知地点的物体映射到已知的物体实例上</li><li>不同位置的对象被映射到不同的实例上</li></ul><p>当物体的属性（大小、颜色、位置、所有权）不一致时，要加以区分。</p><ul><li>持久性：有多少变化仍能识别一个物体？</li><li>事物属性的可改变性：可移动、可转移、大小、颜色</li></ul><h2 id="humans-interpreting-machines" tabindex="-1"><a class="header-anchor" href="#humans-interpreting-machines" aria-hidden="true">#</a> Humans interpreting machines</h2><ul><li>计算机需要字面指示，而人类则得到要旨。</li><li>计算机需要正确的语法（参照规定性语法） 对于人类来说，语法从属于语义（参照描述性语法）。</li><li>计算机能够进行上下文自由解释</li><li>人类进行对环境敏感的解释（社会、语义）。</li></ul><p>Conclusions</p><ul><li>交互设计中以人为本的文本并不是用某种拟人化来修饰传统工具。</li><li>它需要对对话（Scripts！）和其他语言行为的结构有深刻的理解，重点是（语境）语义和语用学。</li></ul><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2><ul><li>与普通机器不同，计算机可以通过语言来接近。然而，编码语言是面向语法的汇编指令和面向语义的人类语言之间的妥协。</li><li>为了向编码人员和用户解释系统，已经开发了许多对话符号。它们可以是图表，例如 Petri 网、流程图和状态转换网络。它们也可以是文本的，例如语法和生产规则</li><li>选择一个或另一个符号是在关注事件或状态之间的权衡，是力量与清晰度的权衡，是模型与符号的权衡，是强调顺序状态还是并发状态的权衡。</li><li>自然语言很难！完整的 NL 接口可能还需要几年时间。这是因为人类的语言较少依赖于形式（语法3），而更多地依赖于内容（语义），而内容又容易受到情景、语境、语用学的影响。</li><li>在设计语音或文本界面时，我们应该意识到，我们的语音行为（例如，命令是指令性的），会产生对话规则（例如，与用户目标相关）。</li><li>许多人与人之间的互动是正式的（例如，婚礼公式）并使用心理脚本（例如，如何开始/结束会议）。这些是 NLP 应用程序的唾手可得的成果 <ul><li>在现实世界中通过自然语言与系统进行交流是非常需要的</li><li>但这也是一个人工智能的完整问题</li><li>诸如概率推理、深度学习等通用技术需要被整合和调整以处理复杂的多模态环境</li><li>灵活性、综合学习、对错误、不确定性和噪音的稳健性、不完整的数据流</li><li>心智理论、情感关系、共同点</li><li>目标和社会角色的协商</li><li>跨学科的研发是关键</li></ul></li></ul><p>在现实世界中通过自然语言与机器人进行交流是非常必要的。但这也是一个人工智能的完整问题</p><ul><li>概率推理、深度学习等通用技术需要整合和调整，以处理复杂的多模态环境。</li><li>灵活性、综合学习、对错误、不确定因素和噪声、不完整数据流的稳健性</li><li>心智理论、情感关系、共同点</li><li>目标和社会角色的谈判</li><li>需要跨学科的研究和开发</li></ul>',45),s=[t];function r(h,c){return a(),l("div",null,s)}const o=i(n,[["render",r],["__file","Machines-and-Humans-Talk.html.vue"]]);export{o as default};