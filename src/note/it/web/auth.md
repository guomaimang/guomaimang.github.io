---
article: false
date: 2025-04-06
index: true
order: 7
headerDepth: 1


---

# Authentication & Authorization

## Session Management

- Each request is independent of each other
- Sufficient for「足够的」 serving static content (.html, .css, .jpg, etc.)
- But the server cannot tell which requests come from the same user
- Why does state useful? 
  - for personalized services and user conveniences
  - e.g., any signed-in user experience
  - consider you need to enter your password again after each click

Solution: associate requests originated from the same user, i.e., maintaining a user session

or, tracking your cyber-whereabouts and breaking your privacy?

- i.e., a double-edged sword
- Third Party cookies

Note the privacy law, e.g., GDPR, EU Cookie Law (always ask for permission)

P.S. We are not talking about website fingerprinting here (fyi: amiunique.org).

## Cookies Communications

Making HTTP “Stateful” Using (HTTP/Web/Browser) Cookies

Cookies := a small ( ) client-side storage with its data replayed to where they were onfigured (cookie origin )

![1744013520557.png](https://pic.hanjiaming.com.cn/2025/04/07/f1cc55a2756be.png)

### Session Creation and Resumption using Cookies

- In the 1st visit, the browser makes a request to example.com w/ no **cookies**
- The server gives a Cookie value (w/ Set-Cookie **response** header)
- i.e., the web server told the browser to create a cookie for that "**origin**"
  (A cookie can also be created at the client-side)

### Session Maintenance using Cookies

- Cookie Values can store user preferences (e.g., theme=yellow)
- Setting a unique, random, and unpredictable "token" (a.k.a. session ID)
- The server can then isolate a user-specific session from other sessions
- Usage: Personalization, Authentication, and Session Storage (express-session)

## Cookie Parameters

![1744016410810.png](https://pic.hanjiaming.com.cn/2025/04/07/08e9efaa1fcb4.png)

Expires: specify the time when a cookie will be deleted automatically

- Seconds since the epoch time (00:00:00 UTC 1970-01-01)
- (Default) Setting it to 0 (zero) creates a session cookie， Browser will automatically clear a session cookie when shutdown
- Setting it to a past time tells the browser to remove the cookie ("immediately")
- or use res.clearCookie (name, [ options ]) with matching option

::: note Cookie SOP Examples

![Google Chrome 2025-04-07 17.36.50.png](https://pic.hanjiaming.com.cn/2025/04/07/64422c7508481.png)

1. **http://example.com or http://www.example.com**
   - **Cookie:** `user=niki`
   - Explanation: The domain `.example.com` matches `example.com` and `www.example.com`, and the path `/` matches any path, so `user=niki` is sent.

2. **http://secure.example.com or https://secure.example.com**
   - **Cookie:** `user=niki`
   - Explanation: The domain `.example.com` matches `secure.example.com`, and the path `/` matches any path, so `user=niki` is sent. The `user=ling` cookie is not sent because it is secure and the connection is not HTTPS.

3. **https://secure.example.com/accounts/index.html**
   - **Cookies:** `user=ling; user=niki`
   - Explanation: Both cookies match. The domain `secure.example.com` matches both cookies, the path `/accounts` matches the path of `user=ling`, and `/` matches the path of `user=niki`. Both cookies are sent, but the order is non-deterministic.

4. **https://secure.example.com/accounts/new/index.html**
   - **Cookies:** `user=ling; user=niki`
   - Explanation: Same reasoning as the previous URL. Both cookies match and are sent, but the order is non-deterministic.

According to RFC 6265, when multiple cookies with the same name are present, the order in which they are sent is not guaranteed. This can lead to non-deterministic behavior.

:::

## Problems of Using Cookies

### Privacy from a user perspective

- We know how a site can uniquely identify a user
- What are the resulted threats (and opportunities)?
- Should user be tracked across apps/webs? (how? by )

Integrity「正直」 and Authenticity「真实性」

- Cookies values reside on client-side
- That said, malicious users can tamper with the values
- Signed Cookies: HMAC for authenticity and integrity ("secret" in express/cookie-session)

Storage Size

- A cookie has at most 4KB per domain
- Recall the best practice: We want to keep the name/value size minimal to reduce bandwidth overhead

### Cookie Privacy

- 当访问C.com时，页面内嵌入的广告（来自ad.com）会向ad.com发送请求。
- 请求头中的`Referer`字段会携带当前页面URL（C.com），告知广告商用户正在访问的网站。
- ad.com通过响应头设置Cookie到用户浏览器，标记用户身份。
- 当用户访问另一个网站D.com（同样嵌入ad.com广告）时，浏览器会自动携带之前设置的Cookie，广告商即可关联两个网站的访问行为。

广告商通过不同网站（C.com、D.com）的Cookie和`Referer`信息，分析用户的浏览习惯、兴趣，最终实现精准广告投放。

Solution:

- 浏览器默认禁止跨域（第三方）网站在未经用户同意的情况下写入Cookie。例如，C.com页面中的ad.com iframe无法直接设置Cookie。
- 广告商的绕过方法
  - 使用重定向：诱导用户点击广告跳转到ad.com，使其成为“第一方”从而设置Cookie。
  - 利用浏览器漏洞或指纹识别技术（如设备指纹）替代Cookie跟踪。
- **启用反追踪策略**：
  - 完全屏蔽第三方Cookie（如Safari的智能防跟踪ITP）。
  - 发送`Do Not Track`请求头（需网站配合）。
  - 阻止已知跟踪域名的请求（如Firefox的增强型跟踪保护）。

But there are problems other than cookies...(Referer Header, link decorating)

### Cookie Integrity and Authenticity

Cookie values can be tampered

- Cookie is just another kind of "user" (e.g., attacker) inputs
- Apply server-side validations for cookies, e.g., use signedCookies
- For confidential values, (authenticated) is needed
- There are special middleware/APIs to do them
- Or you can implement by yourself (if you understand crypto)

Parameter Tampering Attack: Many old/naive shopping carts store "totalAmount" in cookies

## Other Client-side Session Storage

- HTML5 LocalStorage (5MB /origin)
- Unlike Cookies, does not replay in requests but accessible via JS API
- Useful to store specific service's offline content offline, e.g., Gmail
- Security: Follows the HTML5 SOP 
- Security: Client-side storage is still subject to tampering attacks
- There is also . (lives like session cookie; origin: domain+protocol)

## Why not both?

How about storing something both on the server and the client sides?

Worst of both worlds?

- Client storage could be adversarially manipulated
- Server still needs to maintain resource for each client

We need a cleverer way enjoy the best of both worlds

- Authenticated encryption of client-side storage!
- Server holds a short secret key for ALL clients, e.g., 256-bit for AES
- Without the key, client cannot produce meaningful ciphertexts produced by authenticated encryption
- Trades off computation against storage i/o overhead
- JSON Web Token (JWT): data with optional signature + encryption on JSON

::: info Cookies vs. localStorage vs. Session Mgt.

- **Cookies**: Client/server-readable, auto-sent with requests (4KB max). Used for auth (e.g., session IDs), support expiration. Secure with `HttpOnly`.
- **localStorage**: Client-only, persistent (5-10MB), no auto-transfer. Ideal for client-side data (e.g., preferences).
- **Session Management**: Typically server-side (session IDs in cookies) for user state. Alternatively, `sessionStorage` (client, tab-scoped, cleared on close).
  *Key differences*: Scope, persistence, size, and server interaction. Cookies handle auth; localStorage stores local data; sessions manage state securely.

:::

## Authentication vs. Authorization

Authentication: Is a user really whom he claims himself to be?

- something you know: password, private key
- something you have: CULink, one-time hardware token
- who you are: biometric features like fingerprints
- what you do: the way you shake/tap smartphone
- where you are: FB checks if country changed, IP, GPS
- or a combination of n of them (the so-called n-factor authentication or nFA) 

Authorization: Is an authenticated user allowed to do a task?

- Most common: Role-based access control
- e.g., is user A allowed to do task T1

## Credentials Database

Hash based Message Authentication Code (HMAC)

- HMAC is a keyed function to calculate a MAC (Prevent length-extension attack on MD hashes). [H(key || H(key || msg))]
- (don't use SHA1); pick memory-hard hash functions: Argon2, scrypt, bcrypt
- Use prepared statement. NEVER try to concatentate a SQL statement by yourself!
- Implement hmacPassword () function.

## Authentication Token & Authorization

- Authenticate the token before admin operations
- 







