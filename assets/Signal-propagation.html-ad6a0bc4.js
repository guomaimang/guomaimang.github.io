import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e}from"./app-3b7bc918.js";const t={},l=e('<h1 id="signal-propagation" tabindex="-1"><a class="header-anchor" href="#signal-propagation" aria-hidden="true">#</a> Signal Propagation</h1><h2 id="antennas" tabindex="-1"><a class="header-anchor" href="#antennas" aria-hidden="true">#</a> Antennas</h2><p>电磁信号是通过天线产生、传输和接收的。</p><ul><li>发射天线--发射器使用发射天线，以<strong>无线电或微波信号</strong>的形式向周围环境输送辐射。</li><li>接收天线--将来自环境的信号转换为交流电，并将其传递给接收器</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/10/18/a40876f6d7f85.png" alt="1666082707500.png" tabindex="0" loading="lazy"><figcaption>1666082707500.png</figcaption></figure><h3 id="isotropic-radiator" tabindex="-1"><a class="header-anchor" href="#isotropic-radiator" aria-hidden="true">#</a> Isotropic radiator</h3><ul><li>在所有方向的辐射相等（三维）。</li><li>只是一个理论上的参考天线。</li></ul><h3 id="real-antennas" tabindex="-1"><a class="header-anchor" href="#real-antennas" aria-hidden="true">#</a> Real antennas</h3><ul><li>不是各向同性的辐射器</li><li>一些简单的天线：天线的尺寸与波长成正比，以获得更好的发射/接收性能</li></ul><h2 id="signal-propagation-1" tabindex="-1"><a class="header-anchor" href="#signal-propagation-1" aria-hidden="true">#</a> Signal Propagation</h2><p>信号在自由空间的传播是一条直光（line of sight，LOS）。</p><p>自由空间传播模型：在真空中，接收器的接收功率与1/d<sup>2</sup>成正比（d=发送者和接收器之间的距离）。</p><figure><img src="https://pic.hanjiaming.com.cn/2022/10/18/73034cff40d9c.png" alt="1666083284909.png" tabindex="0" loading="lazy"><figcaption>1666083284909.png</figcaption></figure><h2 id="signal-propagation-ranges" tabindex="-1"><a class="header-anchor" href="#signal-propagation-ranges" aria-hidden="true">#</a> Signal Propagation Ranges</h2><p>Transmission range</p><ul><li>交流是可能的</li><li>低错误率</li></ul><p>Interference range</p><ul><li>沟通是不可能的</li><li>信号干扰了其他的传输</li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/ab9d929a875f1.png" alt="1666083368887.png" style="zoom:33%;"><h2 id="信号传播-复杂性" tabindex="-1"><a class="header-anchor" href="#信号传播-复杂性" aria-hidden="true">#</a> 信号传播：复杂性</h2><p>信号的传播还受到以下因素的影响：</p><ul><li>穿过障碍物后的阴影</li><li>在大型障碍物上的反射</li><li>在小障碍物上的散射</li><li>障碍物边缘的衍射</li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/e8d36794f9b0c.png" alt="1666084219333.png" style="zoom:33%;"><h2 id="multipath-propagation" tabindex="-1"><a class="header-anchor" href="#multipath-propagation" aria-hidden="true">#</a> Multipath Propagation</h2><p>由于反射、散射、衍射等原因，信号从发送方到接收方可以采取许多不同的路径。</p><ul><li>不同路径上的信号在不同时间到达：一个符号可能会干扰“相邻”符号：符号间干扰 (ISI)。</li><li>到达接收器的信号可能有不同的相位，也可能完全不相位而相互抵消。 <ul><li>信号的失真取决于不同部分的相位</li></ul></li></ul><h2 id="fading-effects" tabindex="-1"><a class="header-anchor" href="#fading-effects" aria-hidden="true">#</a> Fading Effects</h2><p>由于以下原因，渠道特征随时间和地点而变化</p><ul><li>change of signal paths</li><li>different delay variations of different signal paths</li><li>different phases of different signal paths</li></ul><p>接收功率的快速波动（fast fading / short term fading）</p><img src="https://pic.hanjiaming.com.cn/2022/10/18/c7a28cd5ff8b3.png" alt="1666084768568.png" style="zoom:33%;"><p>周围的障碍物：平均接收功率的缓慢变化 (slow fading / long term fading)</p><img src="https://pic.hanjiaming.com.cn/2022/10/18/28d2f4ada0f10.png" alt="1666084915287.png" style="zoom:33%;">',33),r=[l];function o(p,s){return i(),n("div",null,r)}const d=a(t,[["render",o],["__file","Signal-propagation.html.vue"]]);export{d as default};