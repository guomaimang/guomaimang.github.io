import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as s,a as i,b as e,d as t,e as o}from"./app-248d1dbd.js";const c={},h=o('<h1 id="communication" tabindex="-1"><a class="header-anchor" href="#communication" aria-hidden="true">#</a> Communication</h1><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2><p>到目前为止，我们在网络编程中遇到的全部示例都可以被视为使用“拉取”方法。</p><ul><li>通信始终由客户端发起</li><li>客户端在需要时从服务器“拉取”数据或服务（例如，当用户启动应用程序或按下按钮时）</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/11/30/e8441296b4064.png" alt="1732953843243.png" tabindex="0" loading="lazy"><figcaption>1732953843243.png</figcaption></figure><h3 id="limitations-of-http" tabindex="-1"><a class="header-anchor" href="#limitations-of-http" aria-hidden="true">#</a> Limitations of HTTP</h3><ul><li><strong>HTTP</strong> is a <strong>pull-based</strong> protocol</li><li>用户浏览网络并积极决定浏览哪个网站，跟随哪个链接等。</li><li>一种有效且经济的方式（每个用户选择他们需要的）</li><li>但是，如果定期请求某些资源，拉取模型可能会给服务器带来沉重的负载</li></ul><h3 id="characteristic" tabindex="-1"><a class="header-anchor" href="#characteristic" aria-hidden="true">#</a> Characteristic</h3><ul><li>HTTP是半双工的：一次只能有一方发送数据，就像使用对讲机一样</li><li>WebSocket 是一种协议，它通过 TCP 连接在两台计算机之间提供全双工通信通道。</li><li>设计用于在 Web 浏览器和 Web 服务器中实现</li><li>Supported since IE 10, Firefox 11, Chrome 16, Safari 6, Opera 12.10, Android Browser 4.4.</li></ul><p>浏览器（或移动应用）与服务器之间持久的连接，双方可以随时向对方发送数据</p><ul><li>更低的延迟（避免 TCP 握手）</li><li>开销较小（每条消息仅 2 个字节）</li><li>减少不必要的通信（仅在需要时发送数据）</li></ul><p>WebSocket是HTML5标准的一部分</p><ul><li>主要 Web 浏览器的最新版本支持</li><li>JavaScript 中的简单 API</li><li>iOS 和 Android 上也提供了库</li></ul><p>当您想要开发以下应用程序时特别有用：</p><ul><li>实时多人游戏</li><li>Chatrooms</li><li>Real-time news feed</li><li>Collaborative apps (e.g. consider something like Google Documents)</li><li>Live commenting</li></ul><p>Once the handshake is completed:</p><ul><li>初始 HTTP 连接将被 Web Socket 连接替换（使用相同的底层 TCP/IP 连接）</li><li>客户端和服务器现在都可以开始向对方发送数据</li><li>数据以帧的形式传输 <ul><li>一旦收到所有帧，消息（有效负载）将被重建</li><li>由于建立了 Web Socket 连接，因此传输消息时产生的开销会少得多</li></ul></li></ul><h3 id="design-principles" tabindex="-1"><a class="header-anchor" href="#design-principles" aria-hidden="true">#</a> Design Principles</h3><ul><li>TCP 之上的附加层</li><li>启用客户端和服务器之间的双向通信</li><li>支持低延迟应用程序，无需 HTTP 开销</li><li>基于Web起源的浏览器安全模型</li><li>支持多个服务器端端点</li></ul>',19),d={id:"socket-io",tabindex:"-1"},u=i("a",{class:"header-anchor",href:"#socket-io","aria-hidden":"true"},"#",-1),p={href:"http://socket.io",target:"_blank",rel:"noopener noreferrer"},_=i("p",null,"一个基于 Node.js 的库，用于服务器和一个或多个客户端之间的实时双向通信",-1),m=i("ul",null,[i("li",null,"使用WebSocket进行数据通信（当WebSocket不受支持时，回退到较旧解决方案）"),i("li",null,"最初是为服务器端的 Node.js 和客户端的 Java 脚本编写的，现在有适用于 Python、Android 和 iOS 的库")],-1),g={href:"http://socket.io",target:"_blank",rel:"noopener noreferrer"},f=i("strong",null,"Server",-1),b=i("strong",null,"Client",-1),k=i("ul",null,[i("li",null,"客户端库可在JavaScript（Web）、Android和iOS中使用。"),i("li",null,"允许您跨多个平台构建实时应用程序")],-1),S={href:"http://Socket.io",target:"_blank",rel:"noopener noreferrer"},v=i("ul",null,[i("li",null,"连接后，服务器和客户端可以通过触发或“发出”事件来相互通信"),i("li",null,"创建回调函数以在发生某些事件时执行不同的操作")],-1),T={href:"http://Socket.io",target:"_blank",rel:"noopener noreferrer"},x=o('<img src="https://pic.hanjiaming.com.cn/2024/11/30/2b4a0c3fea9a5.png" alt="1732956723721.png" style="zoom:33%;"><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><ul><li>服务器和客户端都可以生成事件，如果对方有该事件的处理程序，则将调用该处理程序来执行一些操作</li><li>在FastAPI-SocketIO中，有几种不同类型的事件 <ul><li><strong>Special events</strong> (‘connect’, ‘disconnect’, ‘join’, ‘leave’)</li><li><strong>Unnamed events</strong> (‘message’ or ‘json’)</li><li><strong>Custom events</strong> (a name of your choice, e.g. ‘my event’)</li></ul></li></ul><h2 id="authentication-authorization" tabindex="-1"><a class="header-anchor" href="#authentication-authorization" aria-hidden="true">#</a> Authentication &amp; Authorization</h2><p>您很可能希望您的用户在您的应用程序中创建一个帐户，并登录以使用其服务</p><p>理由：</p><ol><li>有必要；您的应用程序可能需要唯一地标识每个用户</li><li>跟踪用户对应用程序的使用情况</li><li>允许用户在不同设备上检索数据</li><li>呈现更加个性化的信息和服务</li></ol><p>User Authentication: 隐私和安全问题的最佳实践</p><ul><li>不要将密码明文存储在数据库中，在从应用程序发送之前用盐对其进行哈希处理（例如使用 MD5 或 SHA1 或更安全的密码）</li><li><strong>Do not store</strong> user password in the device</li><li>Use <strong>HTTPS</strong> whenever possible</li><li>在将用户的输入发送到服务器之前验证用户的输入（例如电子邮件和密码）</li></ul>',9);function P(C,W){const l=a("ExternalLinkIcon");return r(),s("div",null,[h,i("h2",d,[u,e(),i("a",p,[e("socket.io"),t(l)])]),_,m,i("p",null,[i("a",g,[e("socket.io"),t(l)]),e(" has two parts: 1) "),f,e(" and 2) "),b]),k,i("p",null,[i("a",S,[e("Socket.io"),t(l)]),e(" 是事件驱动的")]),v,i("p",null,[i("a",T,[e("Socket.io"),t(l)]),e("：服务器端程序流程图")]),x])}const w=n(c,[["render",P],["__file","communication.html.vue"]]);export{w as default};