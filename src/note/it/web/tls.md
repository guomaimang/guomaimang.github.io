---
article: false
date: 2025-04-06
index: true
order: 10
headerDepth: 1

---

# TLS & Browser Security

## Why do we need TLS?

Web applications include three components:

-  Server
- Browser
- and communication network (the Internet)

TLS are designed to solve following security problems

- How to verify the server’s identity
  - to ensure that we are not talking to fake and malicious server
-  How to achieve a secure communication over (public) Internet
  -  Internet is public and shared, thus could be attacked easily
  -  packet sniffing, traffic replaying, message modification, …
- How to ensure the integrity of client (i.e. the browser)?
  - E.g., online application for renewal of vehicle license
  - There is a place to let user upload their personal certificate
- Another Example: EC-Ship Online Portal -> Digital certificate needs to be installed/imported in browsers

## Revision on Public Key Cryptography

TLS is based on public key encryptions



















