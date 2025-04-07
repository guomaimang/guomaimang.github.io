---
article: false
date: 2025-04-06
index: true
order: 3
headerDepth: 1
---

# WebApp using Node.js

Fast and Scalable

Event-driven architecture and non-blocking I/O API from ground-up

- Model best for slow/blocking (network) I/Os, **now asynchronously handled**
- Resource efficient. Can easily scale up with Cloud Services
- Support asynchronous programming (but Node operates on single-thread event loop)

Code reuse due to single language across both client and server side -> (Non-)Developer-friendly

- JIT Compilation (ref in L3): Compiled to binary, and runs like executable ("binds" to libraries in C++)
- Thread pool to handle parallel (non-blocking) I/O tasks ( , )

![预览 2025-04-06 21.59.03.png](https://pic.hanjiaming.com.cn/2025/04/06/d1d607f42917f.png)

HTTP is a first class citizen in node () : Built-in HTTP library, doing away with Apache/IIS/Nginx

Event-driven paradigm: 

- Create a HTTP server binded to port 3000 of localhost
- Execute the callback per request

## NPM

Package Manager: Simplify deployment by auto-resolving dependencies

- A specification standard of (dev)dependencies
- devDependencies 指的是仅在开发期间需要，但不是运行时需要的那些依赖项
- NPM: package.json specifies the required packages
- A repository to host packages published by developers

A CLI toolset to recursively install/manage required dependencies and versions

- `npm install looks for ./package.json`, and recursively installs all dependency packages
- `npm install <packageName> --save` downloads packageName and marks it dependent in your package.json
- `npm install <packageName> --save-dev` downloads packageName and marks it devDependent in your package.json

npx vs npm exec; run an arbitrary command from an npm package npm exec eslint src/

Packages you will use: express, helmet, cors, csrf, express-session/cookie-session, mysql

## Output - HTML vs. JSON

Node/Web Server can simply serve static HTML/CSS/Javascript

- For dynamic content, HTML output is returned after processing

- After users submit the forms via an HTML page, a browser has to re-download the "same" HTML

  page even with a single tiny difference (if you have a large HTML).

Alternative: JavaScript Object Notation (JSON) format

- Compact in response size. Fast JSON parser.
- Facilitate shifting data binding & user-interface (UI) work to client-side

Advantages of using JSON when compared to HTML

- Minimize bandwidth needed (since no redundant download)
- JSON parsing is stunning fast as the format itself is JS (native)!
- Loose coupling: data-intensive processing (Server) and UI handling (Client)



















