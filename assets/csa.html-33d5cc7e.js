import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as o,a as i,b as l,d as s,e}from"./app-11c8cf78.js";const c={},h=e(`<h1 id="client-server-architecture" tabindex="-1"><a class="header-anchor" href="#client-server-architecture" aria-hidden="true">#</a> Client-Server Architecture</h1><h2 id="data-communication" tabindex="-1"><a class="header-anchor" href="#data-communication" aria-hidden="true">#</a> Data Communication</h2><p>使用某种形式的传输介质在两个设备之间交换数据</p><p>简化沟通模型：</p><figure><img src="https://pic.hanjiaming.com.cn/2024/12/08/7437afb7f0f8a.png" alt="Typora 2024-12-08 19.35.02.png" tabindex="0" loading="lazy"><figcaption>Typora 2024-12-08 19.35.02.png</figcaption></figure><p>Protocols: rules that govern how data is transmitted in this system</p><h2 id="method-of-communication" tabindex="-1"><a class="header-anchor" href="#method-of-communication" aria-hidden="true">#</a> Method of Communication</h2><h3 id="switching" tabindex="-1"><a class="header-anchor" href="#switching" aria-hidden="true">#</a> Switching</h3><p>当两台计算机需要通过网络进行通信时，我们需要知道如何将它们连接起来</p><img src="https://pic.hanjiaming.com.cn/2024/12/08/c9c4f2bef39e4.png" alt="预览 2024-12-08 21.31.15.png" style="zoom:33%;"><h3 id="circuit-switching" tabindex="-1"><a class="header-anchor" href="#circuit-switching" aria-hidden="true">#</a> Circuit Switching</h3><ul><li>当两台计算机需要相互通信时，在两台计算机之间建立专用通信链路（电路）</li><li>在通信之前，会建立一条专用电路，所有数据都必须通过这条路径传输</li></ul><h3 id="packet-switching" tabindex="-1"><a class="header-anchor" href="#packet-switching" aria-hidden="true">#</a> Packet Switching</h3><ul><li>数据被分解成小块（数据包），并通过所有可能的路径通过网络发送到目的地</li><li>数据包在从源到目的地的传输过程中可以通过不同的路径，不建立专用电路</li></ul><p>Advantages of Packet Switching</p><ul><li>可以更有效地利用网络: 同一个链接可以被许多不同的连接共享</li><li>More fault tolerant: 考虑交换机在通信过程中损坏的情况</li></ul><h2 id="what-are-protocols" tabindex="-1"><a class="header-anchor" href="#what-are-protocols" aria-hidden="true">#</a> What are Protocols?</h2><ul><li>控制通信双方如何交互的一组规则</li><li>通信实体之间的协议</li><li>两个设备在通信时需要就共同协议达成一致。</li></ul><p>一些协议应涵盖的问题</p><ul><li>寻址方案的格式</li><li>我们如何指定数据流的开始和结束？</li><li>我们如何处理错误或数据丢失？</li><li>如何处理数据传输中的问题？</li></ul><h2 id="layered-architecture" tabindex="-1"><a class="header-anchor" href="#layered-architecture" aria-hidden="true">#</a> Layered Architecture</h2><p>The ISO OSI (Open System Interconnection) 7-Layer Model</p><ul><li>计算机网络如何工作的理论模型</li><li>它将网络的不同功能组织成 7 个不同的层</li><li>它指定了不同层级和不同端点之间通信的接口。</li></ul><img src="https://pic.hanjiaming.com.cn/2024/12/08/8604944efed2a.png" alt="1733667119910.png" style="zoom:55%;"><img src="https://pic.hanjiaming.com.cn/2024/12/08/e5d94dcb936c6.png" alt="1733667188933.png" style="zoom:50%;"><h2 id="client-server-paradigm" tabindex="-1"><a class="header-anchor" href="#client-server-paradigm" aria-hidden="true">#</a> Client/Server Paradigm</h2><h3 id="tcp-ip" tabindex="-1"><a class="header-anchor" href="#tcp-ip" aria-hidden="true">#</a> TCP/IP</h3><p>TCP/IP协议族中定义了三种传输层协议</p><ul><li>User Datagram Protocol (UDP)</li><li>Transmission Control Protocol (TCP)</li><li>Stream Control Transmission Protocol (SCTP) <ul><li>新的可靠且面向消息的协议结合了UDP和TCP的最佳特性</li><li>For streaming applications (e.g. video streaming)</li></ul></li></ul><p>一个称为客户端的过程从另一个主机上的一个称为服务器的过程中请求服务。以下必须定义：</p><ul><li>本地主机（源IP地址）</li><li>本地进程（源端口号）</li><li>远程主机（目的IP地址）</li><li>远程进程（目的端口号）</li></ul><p>在客户端-服务器模型中，如果我们把客户端视为本地主机，那么服务器就是远程主机，反之亦然。</p><h3 id="connectionless-vs-connection-oriented-protocol" tabindex="-1"><a class="header-anchor" href="#connectionless-vs-connection-oriented-protocol" aria-hidden="true">#</a> Connectionless vs. Connection-oriented Protocol</h3><p>Connectionless</p><ul><li>发送方和接收方之间没有预先建立的连接</li><li>数据包未编号，可能顺序错乱</li><li>未确认已收到数据包</li><li>不可靠</li><li>Uses UDP</li></ul><p>Connection Oriented</p><ul><li>发送者和接收者之间首先建立连接</li><li>具有传输层级的流量控制和错误控制</li><li>Reliable</li><li>Uses TCP or SCTP</li></ul><h3 id="characteristics-of-user-datagram-protocol-udp" tabindex="-1"><a class="header-anchor" href="#characteristics-of-user-datagram-protocol-udp" aria-hidden="true">#</a> Characteristics of User Datagram Protocol (UDP)</h3><ul><li>UDP是无连接和不可靠的</li><li>非常简单，使用最少的开销</li><li>更快、更高效，适用于许多轻量级或时间敏感的目的</li><li>适用于发送短消息的过程，不太关心可靠性</li><li>用于组播和广播</li><li>Common network applications that use UDP: <ul><li>Domain Name System (DNS)</li><li>Trivial File Transfer Protocol (TFTP)</li></ul></li></ul><p>UDP 数据包称为用户数据报，具有固定大小的 8 字节标头，包含 4 个字段：</p><ul><li>源端口号：源主机上运行的进程使用的端口号（16位）</li><li>目的端口号：目标主机上运行的进程使用的端口号（16位）</li><li>Length：16位字段，定义用户数据报、报头加数据的总长度（实际上与IP中的长度字段重复）<br> UDP 长度 = IP 长度 − IP 标头长度</li><li>Checksum: A checksum for the user datagram</li></ul><h3 id="transmission-control-protocol-tcp" tabindex="-1"><a class="header-anchor" href="#transmission-control-protocol-tcp" aria-hidden="true">#</a> Transmission Control Protocol (TCP)</h3><p>TCP: a stream-oriented protocol</p><ul><li>TCP 以字节流的形式传送数据，而不是独立的数据报</li><li>一大块数据被分成多个段，这些段彼此相关</li><li>TCP 创建了一个环境，其中两个进程似乎通过一条假想的隧道连接起来</li></ul><p>发送和接收过程可能不会以相同的速度写入或读取数据</p><ul><li>TCP 需要缓冲区来存储、流量控制和错误控制</li><li>实现缓冲区的一种方法是使用 1 字节位置的循环数组</li><li>TCP 缓冲区大小是可配置的<br> （例如，缓冲区大小 = 2 * 带宽 * 延迟）<br> （最大可达兆字节）</li><li>UDP没有缓冲区，队列长度相对较小</li></ul><p>TCP delivers data as <strong>segments</strong></p><ul><li>TCP为每个报文段添加一个报头（用于控制目的），并将该报文段传递给底层IP层进行传输</li><li>这些报文段被封装在IP数据报中并进行传输（整个操作对进程来说是透明的）</li></ul><img src="https://pic.hanjiaming.com.cn/2024/12/09/f4d12d44c81b6.png" alt="1733678312442.png" style="zoom:50%;"><h2 id="socket-programming" tabindex="-1"><a class="header-anchor" href="#socket-programming" aria-hidden="true">#</a> Socket Programming</h2><img src="https://pic.hanjiaming.com.cn/2024/12/09/fac76786b1a7f.png" alt="1733678536265.png" style="zoom:50%;"><h3 id="ports" tabindex="-1"><a class="header-anchor" href="#ports" aria-hidden="true">#</a> Ports</h3><ul><li>端口号是一个16位无符号整数（即0到65535）</li><li>端口号受到监管并分为 3 个不同的范围（由互联网号码分配机构 (IANA) 监管）</li><li>知名端口（0 - 1023）：已注册知名应用程序，例如： <ul><li>21: FTP</li><li>80: HTTP</li><li>443: HTTPS</li><li>465: SMTPS</li></ul></li><li>注册端口 (1024–49151)：为其他应用程序注册</li><li>已注册端口（1024-49151）：为其他应用程序注册</li><li>动态/私有端口 (49151–65535)：可供私有应用程序使用</li></ul><h3 id="the-client-server-model" tabindex="-1"><a class="header-anchor" href="#the-client-server-model" aria-hidden="true">#</a> The Client-Server Model</h3><ul><li>许多网络应用程序遵循客户端-服务器模型</li><li>在这样的模型中，服务器持续运行以等待来自客户端的请求。</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/12/09/e1eb1028f0cc5.png" alt="1733678866511.png" tabindex="0" loading="lazy"><figcaption>1733678866511.png</figcaption></figure><h3 id="我们如何编写服务器程序" tabindex="-1"><a class="header-anchor" href="#我们如何编写服务器程序" aria-hidden="true">#</a> 我们如何编写服务器程序？</h3><ul><li>创建一个套接字</li><li>将套接字绑定到地址和端口</li><li>聆听客户的要求</li><li>处理客户请求</li><li>将响应发送给客户端</li></ul><h3 id="network-programming" tabindex="-1"><a class="header-anchor" href="#network-programming" aria-hidden="true">#</a> Network Programming</h3><p>You can choose from TCP or UDP when developing your networking application</p><ul><li>服务器和客户端必须使用相同的协议才能相互通信</li><li>网络编程中重要的类 <ul><li><strong>TCP</strong>: ServerSocket, Socket</li><li>UDP: DatagramSocket, DatagramPacket</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">Some notes about this simple server program</p><ul><li>它使用SocketServer类，这是一个用于创建使用TCP的服务器的类</li><li>Socket.accept() is a “blocking” function</li><li>数据通过数据流（而不是数据包）接收和发送</li><li>客户端和服务器地址可以通过使用提取。</li><li>Client and server address can be extracted by using<br><code>getRemoteSocketAddress</code> and <code>getLocalSocketAddress</code></li><li>It can only serve one client, (once the request is processed, the server is closed)</li></ul></div><h3 id="我们如何编写客户端程序呢" tabindex="-1"><a class="header-anchor" href="#我们如何编写客户端程序呢" aria-hidden="true">#</a> 我们如何编写客户端程序呢？</h3><img src="https://pic.hanjiaming.com.cn/2024/12/09/1a92ac00e4a35.png" alt="1733679223871.png" style="zoom:45%;"><p>使用UDP</p><ul><li>在UDP中，数据以数据包的形式发送</li><li>在将数据发送到服务器之前，您必须将数据打包在数据报包中</li><li>有可能在传输过程中数据包被“丢弃”，客户端收不到任何响应</li><li>Packet size should not be too large (up to 65508 bytes)</li><li>如果您发送多个数据包，它们可能会乱序到达</li><li>关于客户端大小，您可能需要处理以下错误： <ul><li>超时（服务器一段时间没有响应）</li><li>从另一台服务器收到数据包</li><li>数据包顺序到达异常</li></ul></li></ul><h2 id="multi-threading" tabindex="-1"><a class="header-anchor" href="#multi-threading" aria-hidden="true">#</a> Multi-threading</h2><ul><li>程序中的命令和操作是按顺序执行的</li><li>您在程序中编写的大多数命令和操作都是“阻塞”或“同步”的</li><li>这意味着必须先完成一个命令，然后才能执行另一个命令。</li></ul><p>如果为客户端提供服务的操作非常耗时，则会出现问题，例如：</p><ul><li>从数据库中检索大量数据</li><li>读取和写入文件（I/O操作）</li><li>大量计算（例如对数据进行排名和排序）</li></ul><p>Thread: Multi-threading and Concurrent Programming</p><ul><li>一个程序或应用可以被称为一个进程</li><li>线程是“轻量级进程”，它们在“同一”时间（并行运行）在进程内执行不同的操作</li><li>CPU将处理时间分配给不同的进程以及进程内的不同线程。</li><li>每个进程至少有一个线程（主线程）</li></ul><p>使用多线程的原因</p><ul><li>提高了吞吐量：单个进程中包含许多并发计算操作和I/O请求。</li><li>轻量级：与单独进程之间的切换相比，多线程最大限度地减少了上下文切换所需的时间。</li><li>改进的服务器响应速度：大或复杂的请求或慢速客户端不会阻塞其他服务请求。服务器的整体吞吐量大大提高。</li><li>程序结构简化：可以使用线程简化复杂应用程序的结构，例如服务器级和多媒体应用程序。可以为每个活动编写简单的例程，使复杂程序的设计和编码更加容易，并能更好地适应用户需求的广泛变化。</li></ul><h2 id="coroutines" tabindex="-1"><a class="header-anchor" href="#coroutines" aria-hidden="true">#</a> Coroutines</h2><h3 id="kotlin-coroutines" tabindex="-1"><a class="header-anchor" href="#kotlin-coroutines" aria-hidden="true">#</a> Kotlin Coroutines</h3><ul><li>Kotlin 引入了一种编写异步、非阻塞代码的新方法；协程。</li><li>与线程类似，协程可以并发运行、等待并相互通信，不同之处在于创建它们的成本远低于线程。</li><li>与线程不同，协程不直接映射到本机线程。相反，它们由 Kotlin 运行时管理，可以挂起和恢复，而不会阻塞底层线程。</li></ul><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// only delay the current coroutine</span>
Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// delay the current thread</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>协程相对于线程的优点</p><ul><li>结构化并发：协程提供了一种管理并发的结构化方法，使得处理复杂的异步操作更加容易。简而言之，协程不需要回调结构。</li><li>轻量级：与线程相比，协程是轻量级的，因为它们不需要创建和管理额外的系统资源。这使得协程在内存使用方面更加高效。</li><li>挂起和恢复：协程允许在特定点挂起和恢复执行，使得在不阻塞主线程的情况下处理长时间运行的任务变得更容易。这有助于保持UI的响应性，并提升整体用户体验。</li><li>Jetpack 集成：协程提供内置的异常处理机制，使得在协程上下文中处理和传播异常变得更加容易。</li><li>与 threads for coroutines 不同，应用程序默认情况下不会等待其完成执行</li></ul><p>Before</p><img src="https://pic.hanjiaming.com.cn/2024/12/09/cd8f73ea74976.png" alt="1733680728992.png" style="zoom:50%;"><h3 id="basics-of-coroutine" tabindex="-1"><a class="header-anchor" href="#basics-of-coroutine" aria-hidden="true">#</a> Basics of Coroutine</h3><ul><li>作用域生成器：协程作用域用于声明您自己的作用域。与挂起和释放底层线程不同。</li><li>显式作业：启动协程构建器返回作业对象，其任务是显式等待子协程完成。 Job 充当队列中协程的句柄。 <ul><li><strong>Job</strong> – 对具有多个状态和最终完成的生命周期的可取消工作流程进行建模</li></ul></li><li>挂起功能：挂起功能是指可以暂停然后稍后继续执行的功能，它们可以在协程内部使用，也可以使用其他挂起功能。</li></ul><h3 id="coroutines-dispatcher" tabindex="-1"><a class="header-anchor" href="#coroutines-dispatcher" aria-hidden="true">#</a> Coroutines Dispatcher</h3><p>Dispatcher – 确定相应的协程使用哪些线程进行执行。使用调度器，我们可以将协程执行限制在特定线程，将其调度到线程池，或者让它无限制地运行</p>`,86),d=i("li",null,[i("strong",null,"Default Dispatcher"),l(": (Dispatchers.Default): CPU-intensive work "),i("ul",null,[i("li",null,"它由一个线程池支持，线程的数量通常等于CPU核心的数量。")])],-1),u=i("li",null,[i("strong",null,"Main Dispatcher"),l("（Dispatchers.Main）：UI相关任务 "),i("ul",null,[i("li",null,"它确保协程在主/UI 线程上运行，从而可以安全地更新用户界面。")])],-1),p=i("strong",null,"IO Dispatcher",-1),m={href:"http://Dispatchers.IO",target:"_blank",rel:"noopener noreferrer"},g=i("ul",null,[i("li",null,"它使用更大的线程池来处理可能更高数量的并发 I/O 操作。")],-1),f=i("li",null,[i("strong",null,"Dispatcher"),l(" – 确定相应协程使用哪个或哪些线程来执行。使用调度程序，我们可以将协程执行限制到特定线程，将其调度到线程池，或者让它不受限制地运行")],-1),P=i("li",null,[i("strong",null,"Unconfined Dispatcher"),l(" (Dispatchers.Unconfined): execution on multiple threads "),i("ul",null,[i("li",null,"此调度器在调用线程中运行协程，直到第一个挂起点。挂起后，它在适当的线程中继续执行，这可能与原始调用线程不同。")])],-1),b=e('<h2 id="processes-and-threads-in-android" tabindex="-1"><a class="header-anchor" href="#processes-and-threads-in-android" aria-hidden="true">#</a> Processes and Threads in Android</h2><p>在Android中，一个应用程序的所有组件都在同一个进程和线程（主线程）中运行。</p><ul><li>应用程序的执行线程负责绘制布局，处理用户输入，因此也被称为UI线程。</li><li>不应在UI线程上执行长时间操作</li><li>如果UI线程被阻塞几秒钟，将出现“应用程序无响应”（ANR）对话框</li><li>此外，其他线程不应操作UI</li></ul><p>为Kotlin引入的协程可以在Android中使用，然而，必须遵循两条规则：</p><ul><li>任何时候不要阻塞UI线程（主线程）</li><li>不要从主线程以外的线程访问UI组件</li></ul><p>为了使其“线程安全”，在协程内部，始终请求主线程更新UI。</p><p>Example: GET and POST Requests with Coroutines</p>',7);function k(C,T){const a=t("ExternalLinkIcon");return r(),o("div",null,[h,i("ul",null,[d,u,i("li",null,[p,l(" ("),i("a",m,[l("Dispatchers.IO"),s(a)]),l(")：I/O 绑定任务，例如网络或数据库操作。 "),g]),f,P]),b])}const D=n(c,[["render",k],["__file","csa.html.vue"]]);export{D as default};