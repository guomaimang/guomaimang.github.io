---
article: true
date: 2025-04-06
index: true
order: 0
headerDepth: 1
category:
  - tech
---

# Web Programming

Web Programming

- 客户端和服务器侧的编程语言
- 应用工具。开发，例如版本管理等。
- 优化和性能问题

## Background

![1743663022024.png](https://pic.hanjiaming.com.cn/2025/04/03/aad4a137b81ef.png)

## The Best Practices

**Separation of Content, Presentation, and Behavior Code**

- Accessibility
  - 干净的语义HTML对非视觉浏览器和爬虫（搜索引擎优化或SEO）有益。
  - don't overuse `<div>`, `<span>` (block vs inline "tag") with id, class
  - Parsers/crawlers look for semantic elements「语义元素」
- Portability
  - A new CSS stylesheet presents the same content in a new way, e.g., changing the font. (e.g., on Desktop PC vs. Smartphone vs. Tablet)
- Maintainability: CSS by designers (e.g., bootstrap, ), HTML and JavaScript by programmers
- Reduced Latency: Separated files of CSS and JS can be cached in browsers and reused across pages

**Graceful Degradation / Progressive Enhancement**

- Legacy Browsers may not support new features like HTML5 or CSS3
- Users may disable CSS and JavaScript ( )
  - i.e., make your webpages functional to them, whenever possible

**Don't Ignore Errors**

- 404 = BAD! 500, 502 BAD! (Server side error)
  - Redirect legacy hyperlinks to new pages
  - (Demo: loading error of this page vs. some other professional website)
- JS errors can prohibit page load

**Naming Convention for URLs (SEO technique)**

- Keep it Short
- Using Keywords in Foldernames and Filenames
- Simple, Descriptive Words, e.g., https://en.wikipedia.org/wiki/Aviation
- Using Hypenated Filename to embed semantic information (Underscores not recommended)
  - e.g., User-Interface-Design.html, SizeTapTargetsAppropriately.html
- Meaningful Querystrings (e.g., ?page=11 is BAD)： Basically, make it readable for both Humans and Bots

## HTML Basics

![Typora 2025-04-03 17.00.18.png](https://pic.hanjiaming.com.cn/2025/04/03/af666431515da.png)

- HTML means HyperText Markup Language→through tags
- Two types of tags: with content or without content
  - With content: put content between start tag and end tag
  - Without content (a void element): need a slash / to terminate current tag
  - In HTML5, this / can be omitted (ref: )
- Tags itself may carry one or more attributes

```
What if you want to show >.<?
&gt; and &lt; (& is also a special character)

What if i want more ? 
non-breaking space &nbsp;

Avoid styling in HTML
Best practice: modular design, keep loosely coupled
```

**Best practice: modular design, keep loosely coupled**









































