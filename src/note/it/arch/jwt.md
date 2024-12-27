---
article: false
date: 2024-12-23
index: true
order: 20
headerDepth: 1
category:
  - tech

---

# JWT 与分布式

## 前后端分离简介

前后端分离是指按照应用的职责将应用分成前台应用和后端应用：

- **前端应用**：主要负责页面的渲染以及数据的返回。
- **后端应用**：主要负责业务逻辑的处理。

在这种架构下，后端应用对外暴露的接口并非所有人都能访问，很多接口需要经过授权或拥有相应角色才能访问。

## JWT 简介

JWT（JSON Web Token）是一个经过加密且包含用户信息并具有时效性的固定格式字符串。它的主要特点包括：

- **加密**：JWT 是经过加密的。
- **包含用户信息**：在加密前，JWT 包含一些用户的信息。
- **格式稳定且具有时效性**：JWT 的格式是稳定的，并且具有时效性。

### 组成部分

一个 JWT 由三部分组成：

1. **标头（Header）**：描述了使用的加密算法。
2. **载荷（Payload）**：包含用户的自定义信息，如用户编号、昵称等非敏感数据。采用 MD5.
3. **签名（Signature）**：结合标头和载荷，再结合服务器持有的私钥进行加密，生成签名用于数据校验。

### 示例 JWT

```plaintext
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

- **标头（Header）**：`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
- **载荷（Payload）**：`eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ`
- **签名（Signature）**：`SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

## JWT 在分布式架构中的应用

### 方案一：网关统一校验

![1735293283992.png](https://pic.hanjiaming.com.cn/2024/12/27/16fd03676ff1e.png)

1. **客户端**（浏览器或 APP）向认证中心提交用户名和密码进行登录。
2. **认证中心**校验用户名和密码，生成 JWT 字符串并返回给客户端。
3. **客户端**保存 JWT 字符串（如存储在 Cookie 或 Local Storage）。
4. **客户端**在后续请求中附带 JWT 字符串，发送给应用网关。
5. **应用网关**向认证中心发起验签请求。
6. **认证中心**校验 JWT 的有效性并返回用户信息和权限数据。
7. **应用网关**将用户信息和权限数据转发给具体业务模块。
8. **业务模块**根据权限数据判断接口是否允许被访问。

### 方案二：应用认证

![1735293283992.png](https://pic.hanjiaming.com.cn/2024/12/27/16fd03676ff1e.png)

1. **客户端**在请求中附带 JWT 字符串，发送给应用网关。
2. **应用网关**将 JWT 字符串原封不动转发给业务模块。
3. **业务模块**对 JWT 进行验签和校验。
4. **认证中心**校验 JWT 的有效性并返回用户信息和权限数据。
5. **业务模块**根据权限数据判断接口是否允许被访问。

可以通过注解

<img src="https://pic.hanjiaming.com.cn/2024/12/27/0871389c8461f.png" alt="1735304398245.png" style="zoom:33%;" />

### 两种方案对比

- 方案一：JWT校验无感知，验签过程无侵入，执行效率低，适用于低并发企业级应用
- 方案二：控制更加灵活，有一定代码侵入，代码可以灵活控制，适用于追求性能互联网应













