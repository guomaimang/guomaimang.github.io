import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,e as a}from"./app-c4852ce4.js";const n={},o=a(`<h1 id="non-fungible-tokens" tabindex="-1"><a class="header-anchor" href="#non-fungible-tokens" aria-hidden="true">#</a> Non-Fungible Tokens</h1><h2 id="nft" tabindex="-1"><a class="header-anchor" href="#nft" aria-hidden="true">#</a> NFT</h2><p>Non-Fungible Tokens (NFT)</p><p>可替代性：各个单位能够相互替代</p><div class="hint-container tip"><p class="hint-container-title">代币的概念</p><p>代币是区块链上的数字资产，可以代表各种价值，如货币、资产、权益等。</p><p>代币可以分为可替代代币（Fungible Tokens）和不可替代代币（Non-Fungible Tokens, NFTs），它们在性质和用途上有显著差异。</p></div><p>可替代代币（如ERC20代币）是指每个代币都是相同的，并且可以分割成更小的单位。这意味着一个代币可以与另一个代币互换，没有区别。</p><ul><li>默认情况下，可替代代币使用18个小数位。 <ul><li>这意味着一个完整的代币可以分割成10的18次方个更小的单位。</li><li>这种设计允许非常精细的交易。</li></ul></li><li>不可替代代币（NFT，如ERC721代币）是指每个代币都是独一无二的，并且通过一个唯一的tokenID进行标识。 <ul><li>这使得NFT能够代表独特的资产，如艺术品、收藏品等。</li></ul></li></ul><p>FT可以代表各种独特的资产，如收藏品、投票权、统一资源标识符（URIs）等。</p><ul><li>URIs可以是HTTP链接或IPFS链接，与tokenID相关联。</li><li>OpenSea是一个流行的NFT交易平台，EIP-721是定义NFT标准的提案。</li></ul><p><strong>NFT是对可替代代币的扩展，增加了唯一性和不可分割性，使其能够代表独特的资产。</strong></p><ul><li><strong>NFT是不可分割的，这意味着一个NFT不能被分割成更小的单位。</strong></li><li><strong>每个NFT都是一个完整的、独特的实体。</strong></li></ul><p><strong>Multi-tokens (ERC1155):</strong> 多代币标准（ERC1155）允许在一个智能合约中包含不同类型的代币，包括可替代代币和不可替代代币。</p><ul><li>一个ERC1155合约可以同时包含多种可替代代币和不可替代代币，使得开发者可以在一个合约中管理多种不同类型的资产。</li><li>这种设计提高了代币管理的灵活性和效率。</li></ul><div class="hint-container info"><p class="hint-container-title">ERC标准</p><p>ERC（Ethereum Request for Comments）是以太坊改进提案的缩写，定义了以太坊生态系统中的各种规范和标准。</p><p>ERC20和ERC721是两种常见的ERC标准，分别用于定义可替代代币和不可替代代币。</p></div><details class="hint-container details"><summary>将数字艺术作品转化为NFT</summary><p>假设你是一位数字艺术家，想要将你的数字艺术作品转化为NFT，并在OpenSea平台上进行销售。</p><p>你需要将你的艺术作品铸造成NFT，</p><ul><li>这意味着你需要使用ERC721标准创建一个唯一的代币，每个代币代表一件独特的艺术作品。</li><li>然后，你需要将这些NFT上传到OpenSea平台进行销售。</li></ul><p>NFT的唯一性和不可分割性使其非常适合代表独特的艺术作品。通过将你的艺术作品铸造成NFT，你可以确保每个作品都是独一无二的，并且可以在区块链上进行追踪和交易。</p><ol><li><strong>创建智能合约</strong>：编写一个符合ERC721标准的智能合约，定义你的NFT。</li><li><strong>铸造NFT</strong>：使用智能合约铸造NFT，每个NFT代表一件艺术作品。</li><li><strong>上传到OpenSea</strong>：将铸造的NFT上传到OpenSea平台，设置销售价格和其他相关信息。</li><li><strong>销售和交易</strong>：在OpenSea平台上进行销售和交易，买家可以通过区块链购买你的NFT。</li></ol></details><h2 id="erc20" tabindex="-1"><a class="header-anchor" href="#erc20" aria-hidden="true">#</a> ERC20</h2><h3 id="在以太坊上启用可互换代币" tabindex="-1"><a class="header-anchor" href="#在以太坊上启用可互换代币" aria-hidden="true">#</a> 在以太坊上启用可互换代币</h3><p>可替代代币（如ERC20代币）是指每个代币在价值和功能上都是完全相同的，可以互换。</p><p><strong>例如，一个ERC20代币和另一个ERC20代币在同一合约中具有相同的价值。</strong></p><ul><li>从一个账户向其他账户转移代币: ERC20标准定义了一种方法，使得用户可以将代币从一个账户转移到另一个账户。这是通过智能合约中的<code>transfer</code>函数实现的</li><li>获取账户代币余额: ERC20标准提供了一个<code>balanceOf</code>函数，允许用户查询特定地址的代币余额</li><li>ERC20标准中的<code>totalSupply</code>函数返回代币的总供应量。这表示了该代币在整个区块链网络中的总发行量。</li><li>ERC20标准中的<code>approve</code>函数允许代币持有者授权第三方账户在其名下花费一定数量的代币。这通常用于去中心化交易所或其他需要代币授权的应用。 <ul><li>在去中心化交易所Uniswap中，用户需要首先使用<code>approve</code>函数授权Uniswap智能合约可以代表用户转移一定数量的代币，以便进行代币交换。</li><li>在完成授权后，Uniswap会调用<code>transferFrom</code>函数，从用户账户中转移代币到目标账户。这是代币交换过程的一部分。</li></ul></li></ul><details class="hint-container details"><summary>Example</summary><p>假设Alice想要在Uniswap上将她的ERC20代币（例如DAI）交换成另一种ERC20代币（例如USDC）。</p><p>Alice需要首先批准Uniswap智能合约可以代表她转移一定数量的DAI代币，然后Uniswap智能合约会执行代币交换，将DAI转换成USDC。</p><p>这个过程涉及ERC20标准中的<code>approve</code>和<code>transferFrom</code>函数，Alice需要先使用<code>approve</code>函数授权Uniswap智能合约，然后Uniswap智能合约会调用<code>transferFrom</code>函数完成代币转移。</p><ol><li>Alice调用DAI合约的 <code>approve</code> 函数，授权Uniswap智能合约可以转移她的100 DAI代币。<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code>dai<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>uniswapContractAddress<span class="token punctuation">,</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token operator">**</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Uniswap智能合约接收到授权后，Alice可以发起代币交换请求。</li><li>Uniswap智能合约调用<code>transferFrom</code>函数，从Alice的账户中转移100 DAI到合约中，并根据当前汇率将等值的USDC转移到Alice的账户中。</li></ol></details><h3 id="create-your-erc20" tabindex="-1"><a class="header-anchor" href="#create-your-erc20" aria-hidden="true">#</a> Create Your ERC20</h3><p>利用现有的合约代码可以大大减少开发时间和出错的几率。OpenZeppelin提供了经过社区验证的安全合约实现，非常适合用来构建自己的ERC20代币。</p><p>在创建自己的ERC20代币时，你需要重写构造函数（constructor）。构造函数是在合约部署时执行的特殊函数，用于初始化合约的状态。</p><details class="hint-container details"><summary>Example</summary><p>假设你想创建一个名为“StudentToken”的ERC20代币，每个代币有18位小数，并且在合约部署时向自己铸造1000个代币。</p><p>为了实现这个目标，</p><ul><li>你需要定义一个合约，继承ERC20标准，</li><li>并在构造函数中初始化代币的名称、符号和小数位数。</li><li>同时，你需要在合约部署时铸造1000个代币给自己。</li></ul><p>ERC20标准提供了一组通用的方法和事件，使代币能够在不同的dApps之间互操作。<strong>通过继承ERC20合约并重写构造函数，你可以轻松创建符合ERC20标准的代币。</strong></p><ol><li>创建一个新的Solidity文件，命名为<code>StudentToken.sol</code>。</li><li>导入OpenZeppelin的ERC20合约。</li><li>定义一个名为<code>StudentToken</code>的合约，并继承ERC20合约。</li><li>在构造函数中初始化代币的名称、符号和小数位数。</li><li>使用<code>_mint</code>函数在合约部署时向自己铸造1000个代币。</li></ol></details><h3 id="extend-to-defi" tabindex="-1"><a class="header-anchor" href="#extend-to-defi" aria-hidden="true">#</a> Extend to DeFi</h3><p>ERC20代币可以部署在公共区块链上。</p><ul><li>Permissionless：意味着任何人都可以与合约进行交互，不需要得到任何特定实体的授权或许可。</li><li>Transparency「透明度」：例如，Tether在Etherscan上。Tether是一种ERC20代币，其智能合约的字节码和源代码可以在Etherscan上查看。</li><li>Composable「可组合的」：智能合约可以相互组合，形成更复杂的金融产品和服务。 <ul><li>例如，一个交换ERC20代币的合约。这样的合约可以自动执行代币交换操作。</li><li>Uniswap和其他复杂合约 -&gt; 去中心化交易所/去中心化金融。Uniswap是一个去中心化交易所，允许用户在没有中介的情况下进行代币交换。</li></ul></li></ul><h3 id="swap-between-2-erc20-tokens" tabindex="-1"><a class="header-anchor" href="#swap-between-2-erc20-tokens" aria-hidden="true">#</a> Swap between 2 ERC20 tokens</h3><p>在智能合约<code>TokenSwap</code>内部实现代币交换的逻辑。</p><ul><li>涉及两个代币合约，分别是<code>token1</code>和<code>token2</code>。</li><li>双方（<code>owner1</code>和<code>owner2</code>）必须相互授权，允许对方在限定额度内转移自己的代币。</li></ul><details class="hint-container details"><summary>Example</summary><p>假设Alice和Bob各自拥有不同的ERC20代币，Alice有<code>TokenA</code>，Bob有<code>TokenB</code>，他们希望交换一定数量的代币。</p><ul><li>Alice和Bob需要相互授权，并通过智能合约实现代币交换。</li><li>使用<code>approve</code>函数进行授权，使用<code>swap</code>函数进行交换。</li></ul><p>过程</p><ul><li>Alice调用<code>TokenA</code>合约的<code>approve</code>函数，授权<code>TokenSwap</code>合约一定数量的<code>TokenA</code>。</li><li>Bob调用<code>TokenB</code>合约的<code>approve</code>函数，授权<code>TokenSwap</code>合约一定数量的<code>TokenB</code>。</li><li>Alice或Bob调用<code>TokenSwap</code>合约的<code>swap</code>函数，执行代币交换。</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/11/21/ce72a0c4d48d0.png" alt="1732123308527.png" tabindex="0" loading="lazy"><figcaption>1732123308527.png</figcaption></figure></details><h3 id="exchanging-2-erc20-tokens" tabindex="-1"><a class="header-anchor" href="#exchanging-2-erc20-tokens" aria-hidden="true">#</a> Exchanging 2 ERC20 tokens</h3><p>Order book like centralized exchange</p><ul><li>它列出了所有未成交的买卖订单，按价格排序。</li><li>交易所通过匹配买卖双方的订单来完成交易。</li><li>买方下达购买订单，卖方下达出售订单，当两者的价格和数量匹配时，交易就会执行。</li><li>有时，如果订单不能完全匹配，交易所也可以部分执行订单，即部分成交。</li></ul><p>另一种替代方案是社区资助的流动性池（Liquidity Pool）。</p><p>这些池由用户提供资金，通常包含两种代币，允许用户根据一定的比例进行交换。</p><ul><li>用户可以将自己的代币存入池中，为交易提供流动性。</li><li>池中的代币数量和比例决定了交易的价格。</li><li>如何计算交换汇率？ <ol><li>预言机（Oracle）是用于从外部世界获取数据的工具。在去中心化金融中，预言机可以提供实时的市场价格和其他信息，帮助计算交换汇率。</li><li>使用包含两种资产的流动性池（AMM）计算交换汇率。AMM通过预设的公式和算法，根据池中代币的数量自动计算汇率。</li></ol></li></ul><div class="hint-container tip"><p class="hint-container-title">预言机（Oracle）</p><p>预言机是用于从外部世界获取数据的工具。</p><p>在去中心化金融中，预言机可以提供实时的市场价格、天气数据和其他信息，帮助智能合约做出决策。</p></div><h2 id="automated-market-maker" tabindex="-1"><a class="header-anchor" href="#automated-market-maker" aria-hidden="true">#</a> Automated Market Maker</h2><p>自动化做市商（AMM）是一种无需订单簿的去中心化交易机制，通过恒定乘积公式来维持市场的流动性。</p><p>每次交换都确保恒定乘积c被保持。k1和k2分别代表两种资产的数量，而c是一个恒定值。</p><p>例如，假设k1和k2分别等于100，这意味着两种资产的数量相等。</p><p>假设有100个Token A和100个Token B，你希望用10个Token A交换Token B。</p><p>根据恒定乘积公式，k1 * k2 = c，初始状态下c = 100 * 100 = 10000。你需要计算交易后的Token A和Token B的数量。</p><p>恒定乘积公式是AMM的核心原理，它确保了每次交易后的市场流动性。</p><ol><li>初始状态：k1 = 100, k2 = 100, c = 10000。</li><li>交换10个Token A后，新的k1 = 110。</li><li>根据公式，新的k2 = 10000 / 110 ≈ 90.9。</li><li>因此，10个Token A相当于90.9 - 100 = 9.1个Token B。</li></ol><p>最终，你用10个Token A交换了9.1个Token B。</p><p>但是，AMM也有一些缺点。</p><ul><li>小额订单会影响价格，因为每次交易都会改变资产的比例。</li><li>AMM容易受到三明治攻击和抢先交易（MEV）「vul. to sandwich attack/frontrun (MEV)」的影响。攻击者可以通过观察交易来操纵价格。</li><li>攻击者可以看到交易并提前下单，导致价格膨胀。</li><li>在AMM中，交易者无法控制交易的具体汇率。</li></ul><div class="hint-container info"><p class="hint-container-title">恒定乘积公式</p><p>恒定乘积公式是AMM中常用的算法之一。它通过保持池中两种代币的乘积恒定，来计算交易价格。</p><p>公式为：x * y = k，其中x和y是两种代币的数量，k是一个常数。</p><p>**它表示在一个交易对中，两种资产的乘积是一个恒定值。**这个公式确保了在每次交易后，资产的比例会自动调整以维持市场的流动性。</p></div><h2 id="erc721" tabindex="-1"><a class="header-anchor" href="#erc721" aria-hidden="true">#</a> ERC721</h2><p>ERC721是以太坊上的一种NFT标准，它定义了一组接口和规则，使得不同的NFT合约能够互操作。</p><p>ERC721标准确保每个代币都是唯一的，并且可以被追踪和转移。</p><p>Examples</p><ul><li>Art Blocks 是一个基于区块链的艺术创作平台，允许艺术家使用生成算法创建独特的艺术品</li><li>ENS（Ethereum Name Service）是一个基于区块链的域名系统，允许用户将复杂的以太坊地址映射到易记的域名。 <ul><li>ENS 域名可以以 ERC721 或 ERC20 代币的形式存在。</li></ul></li><li>ERC721代币在游戏、元宇宙和论坛中有广泛应用，如数字资产和虚拟角色的管理。 <ul><li>数字资产和虚拟角色（如头像）可以通过ERC721代币进行唯一标识和管理。</li><li>Gods Unchained 是一个基于区块链的卡牌游戏，使用 ERC721 代币来代表游戏中的独特卡牌。</li><li>ERC721代币可以帮助跟踪数字资产的所有权，确保每个资产的唯一性和不可篡改性。</li></ul></li><li>ERC721代币在票务和会员管理中的应用，如使用NFT代表活动门票或会员资格。</li></ul><div class="hint-container info"><p class="hint-container-title">Etherscan</p><p>Etherscan 是一个以太坊区块链浏览器，可以查看和验证智能合约。Art Blocks 的智能合约可以在 Etherscan 上查看。</p></div><h2 id="erc1155-multi-token-standard" tabindex="-1"><a class="header-anchor" href="#erc1155-multi-token-standard" aria-hidden="true">#</a> ERC1155 Multi Token Standard</h2><ul><li>部署一个游戏合约。 <ul><li>游戏货币使用ERC20标准，而游戏中的物品使用NFT（不可替代代币）。</li><li>需要为不同的物品创建多个合约。</li></ul></li><li>在一个合约中支持多个ERC20和ERC721代币。 <ul><li>但不能包含现有的ERC20或ERC721代币。</li></ul></li><li>需要实现ERC165标准（接口检测）。</li><li>实现方式可以使用OpenZeppelin库。</li></ul><div class="hint-container info"><p class="hint-container-title">How to separate FT/NF</p><p>如何区分可替代代币（FT）和不可替代代币（NFT）？</p><p>将ID位拆分：</p><ul><li>前128位用于代币ID。</li><li>后128位用于NFT的索引。</li></ul></div><h2 id="zk-snark" tabindex="-1"><a class="header-anchor" href="#zk-snark" aria-hidden="true">#</a> zk-SNARK</h2><p>零知识简洁非交互知识证明</p><h3 id="传统区块链系统的-issue" tabindex="-1"><a class="header-anchor" href="#传统区块链系统的-issue" aria-hidden="true">#</a> 传统区块链系统的 ISSUE</h3><ul><li>Transactions are not private <ul><li>Confidential data are not protected</li></ul></li><li>Scalability：指的是区块链系统在处理大量交易时的能力。目前大多数区块链面临扩展性问题，无法高效处理大量交易。 <ul><li>指的是区块链系统在处理大量交易时的能力。目前大多数区块链面临扩展性问题，无法高效处理大量交易。</li><li>我们能否将交易移到链下进行？ <ul><li>这指的是将部分计算和数据处理移到区块链之外，以减轻链上负担。</li><li>是的，可以使用zkSNARKs。zkSNARKs技术可以用于隐私保护和提高交易效率。</li><li>Layer 2 解决方案：zkRollup对比Optimistic Rollup。zkRollup和Optimistic Rollup是两种不同的Layer 2扩展技术，各有优缺点。</li><li>只需发布正确交易的证明和结果。这意味着只需在链上发布交易的证明，而不需要发布所有细节，从而提高效率。</li></ul></li></ul></li></ul><h3 id="intro-to-zk-snark" tabindex="-1"><a class="header-anchor" href="#intro-to-zk-snark" aria-hidden="true">#</a> Intro. to zk-SNARK</h3><p>Zero knowledge proof</p><ul><li>简洁性：证明大小是亚线性的。即，证明的大小远小于输入的大小。</li><li>高效的证明/验证：证明和验证的复杂度优于线性复杂度。</li></ul><p>例如，证明 (x, r) 的知识，使得 C = com(x; r)。这里，com 是一个承诺函数，x 和 r 是输入。</p><p>许多方法（阅读，视频）：有多种方法可以实现零知识证明。</p><ul><li>主要思想：将关系转换为“电路”（R1CS）。R1CS 是 Rank-1 Constraint System 的缩写，是一种表示计算问题的方式。</li><li>使用密码学原语「Polynomial commitment」来证明电路评估的正确性。 <ul><li>交互式开放证明（IOP）、概率检查证明（PCP）和四次齐次多项式（QAP）。</li><li>多项式承诺（例如 KZG）、基于配对的论证系统（例如 Groth16）。</li><li>Bulletproof 内积论证（对于承诺的 a 和 b，a 点乘 b = c）。</li></ul></li><li>有些依赖于可信设置。</li></ul><details class="hint-container details"><summary>Example</summary><ol><li>Alice 选择一个随机数 r，并计算承诺值 C = com(密码; r)。</li><li>Alice 将 C 发送给 Bob。</li><li>Bob 选择一个挑战值，并发送给 Alice。</li><li>Alice 计算响应值，并发送给 Bob。</li><li>Bob 使用响应值验证 Alice 是否知道密码。</li></ol></details><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><p>对于广泛使用的证明系统，我们可以使用circom和snarkjs。</p><ul><li>circom是一种用于编写电路的语言</li><li>而snarkjs是一个用于从可信设置生成和验证证明的工具。</li></ul><p>How？</p><ul><li>首先，我们需要选择一个zkSNARK证明系统，并进行可信设置以生成公共参数。</li><li>接下来，我们需要使用circom编写表示计算的电路，并将其编译为R1CS格式。</li><li>然后，我们使用见证数据生成zkSNARK证明，这通常是在链下进行的。</li><li>最后，我们使用智能合约和之前生成的参数来验证证明的有效性。</li></ul>`,76),t=[o];function s(r,c){return e(),l("div",null,t)}const u=i(n,[["render",s],["__file","nft.html.vue"]]);export{u as default};