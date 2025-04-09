---
article: false
date: 2025-04-07
index: true
order: 8
headerDepth: 1


---

#  Cross-Origin & Security

## Ethical Hacking

Definition of Ethical Hacker (a.k.a. penetration testing)

- Attack a security system for the owners
- Report vulnerabilities instead of taking advantage of them
- Sometimes known as white-hat (good guy), while malicious hacker is referred as black-hat (bad guy)
- “Security Audit”



## Short Quiz

**Can regenerating a session token upon a successful login defend against Login CSRF?**

Yes, regenerating a session token upon a successful login can help defend against Login CSRF (Cross-Site Request Forgery). This is because CSRF attacks rely on the attacker being able to predict or manipulate the session token. By regenerating the session token after a successful login, you ensure that any session token the attacker might have obtained or predicted is invalidated, thus mitigating the risk of CSRF attacks.

**Can a web server at a.com set a cookie for b.com via subdomain cookie?**

No, a web server at a.com cannot set a cookie for b.com. Cookies are domain-specific, and a server can only set cookies for its own domain or its subdomains. For example, a server at a.com can set cookies for subdomain.a.com, but not for an entirely different domain like b.com. This restriction is in place to enforce the same-origin policy and prevent security issues like session hijacking.

**Can a web server receive cookies with the same name but different values?**

No, a web server cannot receive cookies with the same name but different values for the same path and domain. If multiple cookies with the same name are set for the same path and domain, the browser will typically send only one cookie, and which one gets sent can be unpredictable. This can lead to inconsistencies and potential security issues. However, cookies with the same name can exist if they are set for different paths or subdomains.

**Whitelist validation is better than blacklist validation on user input.**

Yes, whitelist validation (also known as allowlist validation) is generally considered better than blacklist validation (blocklist validation) when it comes to user input. Whitelist validation involves defining a strict set of acceptable inputs and rejecting everything else, which is more secure because it minimizes the risk of unexpected or malicious input slipping through. Blacklist validation, on the other hand, involves defining a set of known bad inputs to reject, which can be incomplete and susceptible to new, unknown attack vectors.

**Give two benefits of using cloud services over on-premise servers.**

1. **Scalability**: Cloud services offer dynamic scalability, allowing organizations to quickly and easily scale their resources up or down based on demand without having to invest in physical hardware.
2. **Cost Efficiency**: Cloud services often operate on a pay-as-you-go model, which can reduce the costs associated with maintaining and upgrading on-premise infrastructure. Organizations can avoid the capital expenses of purchasing and maintaining hardware and instead pay for what they use.

**List three practices when deploying a password-based authentication system.**

1. **Use Strong Password Policies**: Enforce strong password policies that require users to create passwords with a mix of uppercase and lowercase letters, numbers, and special characters. Additionally, enforce a minimum password length.
2. **Implement Multi-Factor Authentication (MFA)**: Enhance security by requiring users to provide additional verification methods beyond just a password, such as a code sent to their mobile device or a biometric factor like a fingerprint.
3. **Secure Password Storage**: Store passwords securely using strong, one-way hashing algorithms like bcrypt, scrypt, or Argon2. Never store passwords in plain text, and use a unique salt for each password to protect against rainbow table attacks.



