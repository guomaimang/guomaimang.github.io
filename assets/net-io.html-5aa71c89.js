import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-45633549.js";const p={},e=t(`<h1 id="java-简单网络通信-io" tabindex="-1"><a class="header-anchor" href="#java-简单网络通信-io" aria-hidden="true">#</a> Java 简单网络通信 IO</h1><h2 id="tcp-文本通信" tabindex="-1"><a class="header-anchor" href="#tcp-文本通信" aria-hidden="true">#</a> TCP 文本通信</h2><p>对于客户端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">OutputStream</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    
    <span class="token keyword">try</span><span class="token punctuation">{</span>
      <span class="token comment">// 写入服务器的地址，端口号</span>
      <span class="token class-name">InetAddress</span> serverIP <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">8808</span><span class="token punctuation">;</span>
      
      <span class="token comment">// 创建 socket 链接</span>
      socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span>serverIP<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">// 发送IO 消息流</span>
      os <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;hello, this is hirsun&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
      
    <span class="token punctuation">}</span> cache <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span><span class="token punctuation">{</span>
      
        <span class="token keyword">if</span> <span class="token punctuation">(</span>os <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">try</span><span class="token punctuation">{</span>
            os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printstackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      	
        <span class="token keyword">if</span> <span class="token punctuation">(</span>socket <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">try</span><span class="token punctuation">{</span>
            socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printstackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于服务端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">Inputstream</span> is <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ByteArrayOutputStream</span> baos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    
    <span class="token keyword">try</span><span class="token punctuation">{</span>
      <span class="token comment">// 设置服务器地址</span>
      serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8808</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 等待客户端连接</span>
      socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">// 读取客户端消息</span>
      is <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">// 通过管道流接一下, 避免字节乱码</span>
      baos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">byteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> len<span class="token punctuation">;</span>

      <span class="token comment">// 把 is 逐步灌到 baos</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>len <span class="token operator">=</span> is<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
       baos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token comment">// 一次性打印 baos</span>
      <span class="token class-name">Systen</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>baos<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span><span class="token punctuation">{</span>
      <span class="token comment">// 关闭资源</span>
      baos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span>baos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">try</span><span class="token punctuation">{</span>
          baos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printstackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span>is <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">try</span><span class="token punctuation">{</span>
          is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printstackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span>socket <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">try</span><span class="token punctuation">{</span>
          socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printstackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">if</span> <span class="token punctuation">(</span>serverSocket <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">try</span><span class="token punctuation">{</span>
          serverSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printstackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>  
      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">Inputstream 错误的读取文本</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// len 是一个变量，用于存储实际读取的字节数</span>
<span class="token keyword">int</span> len<span class="token punctuation">;</span>

<span class="token comment">// read(buffer) 会试图读取 buffer.length 个字节（即 buffer 数组的大小）并将其存储到 buffer 数组中</span>
<span class="token comment">// 这个方法返回实际读取的字节数</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>len <span class="token operator">=</span> is<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Systen</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误的的原因在于，字符可能会在1023 出隔断，读取时会出现乱码。应当先拼合字节，再转换成 string, 再打印，或者使用 <code>ByteArrayOutputStream</code>.</p></div><h2 id="udp-文本通信" tabindex="-1"><a class="header-anchor" href="#udp-文本通信" aria-hidden="true">#</a> UDP 文本通信</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>TCP 和 UDP 端口可重叠，每个协议均有65535个端口。</p></div><p>UDP 是无连接状态的，和TCP相比，你可以直接使用 <code>socket</code> 发包，而不需要和我服务器建立连接。</p><ul><li>类似于发短信 点对点</li><li>包没有严格的客户端与服务端限制</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span><span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> main <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span>args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
    
    <span class="token class-name">InetAddress</span> host <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">9090</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 1. 建立一个 socket</span>
    <span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 2. 建个包</span>
		<span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;Hello Server!&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span> host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 3. 发送包</span>
    socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 4. 关闭流</span>
    socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即使服务端没收到也不会报错。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 开放端口</span>
        <span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">9090</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 接收数据</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> buffer<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        socket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 打印数据</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭端口</span>
        socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","net-io.html.vue"]]);export{r as default};
