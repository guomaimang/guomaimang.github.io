const e=JSON.parse('{"key":"v-2716567b","path":"/note/cs/cn/bc/channel.html","title":"Payment Channel","lang":"zh-CN","frontmatter":{"article":false,"date":"2024-11-21T00:00:00.000Z","index":true,"order":14,"headerDepth":0,"description":"Payment Channel A Division of Blockchain Layers Hardware Layer: (Trusted) Hardware：最底层的硬件层，包括计算机、服务器等物理设备。 Layer 0：Networks (Public/Private)：这一层包括公共和私有网络，负责将不同设备连接起来，形成区块链网络的基础通信层。 Layer 1： Blockchains, side-chains：这一层是区块链的主链和侧链，负责处理和记录交易。它们通过共识机制（Consensus Mechanism）来确保网络的安全和一致性。 Consensus Mechanism(s) Layer 2： Channels：状态通道，允许用户在链下进行多次交易，仅在通道打开和关闭时将交易结果提交到区块链上。 Commit-Chains：依赖一个中央中介，在可用性方面是受信任的，但在资金方面是不受信任的。 Refereed-delegation：仲裁委托机制，通过第三方仲裁来确保交易的正确性和公平性。 Payment, State, Network：Layer 2技术可以应用于支付、状态管理和网络层面，以提升区块链的扩展性和效率。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/cn/bc/channel.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Payment Channel"}],["meta",{"property":"og:description","content":"Payment Channel A Division of Blockchain Layers Hardware Layer: (Trusted) Hardware：最底层的硬件层，包括计算机、服务器等物理设备。 Layer 0：Networks (Public/Private)：这一层包括公共和私有网络，负责将不同设备连接起来，形成区块链网络的基础通信层。 Layer 1： Blockchains, side-chains：这一层是区块链的主链和侧链，负责处理和记录交易。它们通过共识机制（Consensus Mechanism）来确保网络的安全和一致性。 Consensus Mechanism(s) Layer 2： Channels：状态通道，允许用户在链下进行多次交易，仅在通道打开和关闭时将交易结果提交到区块链上。 Commit-Chains：依赖一个中央中介，在可用性方面是受信任的，但在资金方面是不受信任的。 Refereed-delegation：仲裁委托机制，通过第三方仲裁来确保交易的正确性和公平性。 Payment, State, Network：Layer 2技术可以应用于支付、状态管理和网络层面，以提升区块链的扩展性和效率。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T15:35:04.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2024-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-24T15:35:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Payment Channel\\",\\"description\\":\\"Payment Channel A Division of Blockchain Layers Hardware Layer: (Trusted) Hardware：最底层的硬件层，包括计算机、服务器等物理设备。 Layer 0：Networks (Public/Private)：这一层包括公共和私有网络，负责将不同设备连接起来，形成区块链网络的基础通信层。 Layer 1： Blockchains, side-chains：这一层是区块链的主链和侧链，负责处理和记录交易。它们通过共识机制（Consensus Mechanism）来确保网络的安全和一致性。 Consensus Mechanism(s) Layer 2： Channels：状态通道，允许用户在链下进行多次交易，仅在通道打开和关闭时将交易结果提交到区块链上。 Commit-Chains：依赖一个中央中介，在可用性方面是受信任的，但在资金方面是不受信任的。 Refereed-delegation：仲裁委托机制，通过第三方仲裁来确保交易的正确性和公平性。 Payment, State, Network：Layer 2技术可以应用于支付、状态管理和网络层面，以提升区块链的扩展性和效率。\\"}"]]},"headers":[{"level":2,"title":"A Division of Blockchain Layers","slug":"a-division-of-blockchain-layers","link":"#a-division-of-blockchain-layers","children":[]},{"level":2,"title":"Off-chain tx and On-chain deposit","slug":"off-chain-tx-and-on-chain-deposit","link":"#off-chain-tx-and-on-chain-deposit","children":[]},{"level":2,"title":"Using a Payment Channel","slug":"using-a-payment-channel","link":"#using-a-payment-channel","children":[]},{"level":2,"title":"Payment Channel Network (Bitcoin)","slug":"payment-channel-network-bitcoin","link":"#payment-channel-network-bitcoin","children":[]},{"level":2,"title":"(Major) Payment Channel Networks","slug":"major-payment-channel-networks","link":"#major-payment-channel-networks","children":[{"level":3,"title":"What happened off-chain?","slug":"what-happened-off-chain","link":"#what-happened-off-chain","children":[]},{"level":3,"title":"What happened on-chain?","slug":"what-happened-on-chain","link":"#what-happened-on-chain","children":[]},{"level":3,"title":"The 3 Phases of A Channel’s Lifetime","slug":"the-3-phases-of-a-channel-s-lifetime","link":"#the-3-phases-of-a-channel-s-lifetime","children":[]},{"level":3,"title":"False/Allayed Concerns","slug":"false-allayed-concerns","link":"#false-allayed-concerns","children":[]},{"level":3,"title":"Payment Channel Network (PCN)","slug":"payment-channel-network-pcn","link":"#payment-channel-network-pcn","children":[]}]},{"level":2,"title":"Multi-hop Payment Atomicity and HTLC","slug":"multi-hop-payment-atomicity-and-htlc","link":"#multi-hop-payment-atomicity-and-htlc","children":[]},{"level":2,"title":"Cryptocurrency Exchange","slug":"cryptocurrency-exchange","link":"#cryptocurrency-exchange","children":[{"level":3,"title":"Centralized Solution","slug":"centralized-solution","link":"#centralized-solution","children":[]},{"level":3,"title":"Decentralized Solution using HTLC","slug":"decentralized-solution-using-htlc","link":"#decentralized-solution-using-htlc","children":[]}]},{"level":2,"title":"Wormhole Attack","slug":"wormhole-attack","link":"#wormhole-attack","children":[]}],"git":{"createdTime":1732143868000,"updatedTime":1732462504000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":49.84,"words":4984},"filePathRelative":"note/cs/cn/bc/channel.md","localizedDate":"2024年11月21日","excerpt":"<h1> Payment Channel</h1>\\n<h2> A Division of Blockchain Layers</h2>\\n<img src=\\"https://pic.hanjiaming.com.cn/2024/11/21/18e4354ff779b.png\\" alt=\\"1732141984019.png\\" style=\\"zoom: 50%;\\">\\n<ul>\\n<li>Hardware Layer: <strong>(Trusted) Hardware</strong>：最底层的硬件层，包括计算机、服务器等物理设备。</li>\\n<li><strong>Layer 0</strong>：<strong>Networks (Public/Private)</strong>：这一层包括公共和私有网络，负责将不同设备连接起来，形成区块链网络的基础通信层。</li>\\n<li><strong>Layer 1</strong>：\\n<ul>\\n<li><strong>Blockchains, side-chains</strong>：这一层是区块链的主链和侧链，负责处理和记录交易。它们通过共识机制（Consensus Mechanism）来确保网络的安全和一致性。</li>\\n<li>Consensus Mechanism(s)</li>\\n</ul>\\n</li>\\n<li><strong>Layer 2</strong>：\\n<ul>\\n<li><strong>Channels</strong>：状态通道，允许用户在链下进行多次交易，仅在通道打开和关闭时将交易结果提交到区块链上。</li>\\n<li><strong>Commit-Chains</strong>：依赖一个中央中介，在可用性方面是受信任的，但在资金方面是不受信任的。</li>\\n<li><strong>Refereed-delegation</strong>：仲裁委托机制，通过第三方仲裁来确保交易的正确性和公平性。</li>\\n<li><strong>Payment, State, Network</strong>：Layer 2技术可以应用于支付、状态管理和网络层面，以提升区块链的扩展性和效率。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};