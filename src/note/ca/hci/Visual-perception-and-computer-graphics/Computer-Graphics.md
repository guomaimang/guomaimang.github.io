---
article: false
date: 2022-12-10
order: 5
headerDepth: 1

---

# Computer Graphics

## Rendering Pipeline

「渲染管道」

- General (rasterization) Rendering Pipeline (RP)「一般（光栅化）的渲染管道（RP）」
- Ray Tracing (RT) 「光线追踪（RT）」
- Rasterization「光栅化」 vs. Ray Tracing (RT)

## General (rasterization) RP

![1670667554282.png](https://pic.hanjiaming.com.cn/2022/12/10/40b1357bf25cb.png)

## Ray Tracing

![1670667593056.png](https://pic.hanjiaming.com.cn/2022/12/10/032fdf7817266.png)

## Rasterization vs. RT

- Rasterization RP is well optimized (i.e., it is very FAST)
  - Model rasterization RP supports more realistic lighting
    - 光照贴图
    - 光探头「Light Probes」
    - Real-time global illumination「照明」
- RT simulates real physics of light (i.e., it is very costly)「RT模拟了真实的光的物理特性（也就是说，它的成本很高）。」
  - NVIDIA 深度学习超级采样 (DLSS)
  - RT denoising「去噪」 is again very costly

![1670667934489.gif](https://pic.hanjiaming.com.cn/2022/12/10/7c24f5182d8d5.gif)

