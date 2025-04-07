---
article: false
date: 2025-04-06
index: true
order: 2
headerDepth: 1

---

# Client-side Implementations

## HTTP is a 

- text-based 
- application-layer protocol 

that defines how content is requested from a client application and served by a web server.

- Work on top of IP (IPv4/IPv6) and TCP (before HTTP/3)
- **Latest standard is HTTP/3, defined in ( over UDP)**
- Specifications of HTTP Request and Response Headers

## Client-Server Model

- Popular servers: Apache, **Nginx**, Node.js, IIS, Google AppEngine
- Popular clients/agents: Chrome, Firefox, Safari

(Demo) Using telnet/netcat to make a simple (text-based) request

![1743920520192.png](https://pic.hanjiaming.com.cn/2025/04/06/fd2ce10e61289.png)

![1743920554298.png](https://pic.hanjiaming.com.cn/2025/04/06/8ee298c7c0946.png)

::: note Surfing the Web using netcat

![1743920763232.png](https://pic.hanjiaming.com.cn/2025/04/06/11db6e6390b14.png)

:::

## Typical HTTP

![1743920997110.png](https://pic.hanjiaming.com.cn/2025/04/06/8a69e7546afa0.png)

Specifications:

- Version: HTTP/1.0, HTTP/1.1, HTTP/2.0
- Method: GET, POST, PUT, HEAD, DELETE, TRACE, OPTIONS, CONNECT, etc...
- Parameters: query string vs. body
- Headers: hostname, content-length, content-type

![1743921503897.png](https://pic.hanjiaming.com.cn/2025/04/06/b2a2559a147f7.png)

## HTML Forms

The prevalent「普遍的」 approach to solicit information from users

A `<form>` tag that comprises different form controls, e.g., `<input>`,` <select>`, see a typical example below:

A typical `<form>` takes at least two attributes:

```
<form method="POST" action="process.php">
  <!-- included here are some form controls -->
</form>
```

- method="POST" or method="GET" (default: GET)
- POST is used if a request is going to incur permanent change on server data; while GET is used for retrieving data
- action="process.php" (default: the current URL)
  - the value takes a URL that will accept the form request
- onsubmit="return false" is optional
  - onsubmit is triggered when the submit button is clicked.
  - return false; -> prevents default behaviour, stop propagation (bubble-up), and callbacks
  - Often used when the form is submitted over AJAX (cancel the form submit event) (to be discussed in later slides)
- enctype="multipart/form-data" is optional
  - Default encoding is application/x-www-form-urlencodedd
  - When` <input type="file"/>` is used for file upload

### Form Controls (1/4: Most Common Controls)

<img src="https://pic.hanjiaming.com.cn/2025/04/06/7a5e6af8dd19b.png" alt="预览 2025-04-06 14.51.39.png" style="zoom: 50%;" />

### Form Controls (2/4: Offering Choices)

<img src="https://pic.hanjiaming.com.cn/2025/04/06/006f32af604dd.png" alt="1743922350022.png" style="zoom:50%;" />

### Form Controls (3/4: More Controls)

<img src="https://pic.hanjiaming.com.cn/2025/04/06/41c50f292bae2.png" alt="1743922402888.png" style="zoom:50%;" />

### Form Controls 

In a nutshell, introduced 

- Tags with more semantic information: Built-in support of client-side validations
- New CSS pseudo-class: :valid, :invalid, :required and :optional
  (keyword for a selected element dependent on its content or external factors)

<img src="https://pic.hanjiaming.com.cn/2025/04/06/3503b47ba2704.png" alt="1743923274768.png" style="zoom:50%;" />

## Regular Expressions

A language to recognize string patterns. 

Refer to a for reference What you must know:

```
^ - start of string; 
$ - end of string (IMPORTANT to validations!)

+ - one or more times; 
? - 0 or 1 times; 
* - 0 or more times;
```

Examples:

```
Float (\d includes digits only, the char inside "[]" defines a character set): ^[\d\.]+$

Alphanumeric (\w includes letters, digits, underscore): ^[\w\-, ]+$

Email (apparently '\' is the escape character here ["{}" stats the no. of pattern to match]):
^[\w\-\/][\w\'\-\/\.]*@[\w\-]+(\.[\w\-]+)*(\.[\w]{2,6})$
```

Short Regular Expression Test

```
For the regex ^[\d\.]+$:

Matching Strings:
✅ 4.3
✅ 192.168.0.1
Non-Matching Strings:
❌ 42a.4 (contains a non-digit/non-dot character 'a')
For the regex [+-]?([0-9]*[\.])?[0-9]+:

Matching Strings:
✅ 4.3 (valid decimal number)
Non-Matching Strings:
❌ 42a.4 (contains 'a')
❌ 192.168.0.1 (multiple dots, invalid for a single number)
```

```
Extra:
wildcard character (dot ".")
[^abcd]: Not character a,b,c,d; [\W] NON-alphanumeric
(123|456) match 123 or 456; bracket "creates" a matching group ("string")

Write a regex to check for a 10 digit number that start with 1 (e.g., SID): ^1\d{9}$
```

## Client-side Restrictions

- To inform the users early on for input errors
  - To create a more interactive and responsive UI experience
  - Otherwise, input errors are prompted only after form submissions (round-trip delay)
- To imply a specific pattern that a user is expected to follow
  - To help users enter/choose the valid data that we need
  - Yet, these restrictions can be bypassed by Parameter Tampering Attacks!! Don't count on them for security!!
  - Reason: A user has full control of any client-side code downloaded to his browser using Developer Tools (and other extensions: ChroPath, TamperMonkey)

Hence, you need input validations implemented on BOTH

- server-side **for security enforcement** , and
- client-side for **better user experience**.

## Form Validations with JS

Strategy: Write your code in HTML5 for new browsers; Fallback to Javascript for legacy ones

- Note: Unsupported type will fallback to an ordinary textfield
- Unsupported attributes will be ignored in legacy browsers

With an HTML5-compilant browser, JS validation is ignored: Note: POST Parameters can be accessed only by server but not JS. Hence, nothing is shown hereafter submission. Firebug can show what was already sent.

HTML5 Validation can be disabled with novalidate attribute.

**Recall the best practice: Graceful Degradation**

- if (HTML5 supported) use the native HTML5 Validation
- else if (JS supported) use the JS validation code
- else the form still works without any validations

## 3 Form Submission Approaches

1. Traditional Form Submission
   - Triggered by a submit button or the Enter key
   - Fires the submit event, where one can validate before a form submission
2.  Programmatic Form Submission
	 - Recommended to use this only when submitting a form automatically
	 - Unfortunately, programmers (incl. HSBC) who don't know `<input type="image">` like to do this for images: When an image is clicked, Form.submit() will be finally called if a form is properly validated
	 - BAD: NO submit event is fired. Without code analysis, difficult to know whether a submission has actually occurred

```javascript
<form method="POST" id="buildAutoPostReq">
<!-- Some hidden fields here --></form>
<script type="text/javascript">document.forms[0].submit();</script>
```

3.  AJAX Form Submission: AJAX: Asynchronous Javascript and XML ; It's all about the XMLHttpRequest API, study it before using it to submit form data. Advantages:
    - Modern user experience
      - Eliminate page-load effect (no blank screen);
      - Only load the changed part when it "arrives"
    - Using the well-known XMLHttpRequest API: Sends requests at background; not limited to only send form data :)
    - Cancel the default form submissions: returns false in the submit event

![1743932228206.png](https://pic.hanjiaming.com.cn/2025/04/06/696bb6ea4c2a2.png)

![1743932252499.png](https://pic.hanjiaming.com.cn/2025/04/06/0b89badadacc1.png)

::: info AJAX: Synchronous vs. Asynchronous

**Principle: Do something else while eating**

- Dispatch many requests at a time. Also do something else.
- Get notified when the server returns, then render the results.
- The responses will likely be out of order.

Typical workflow in AJAX Form submission (shown in the previous slide)

-  Listen to submit event
- Cancel the default form submission
- Craft a POST request to send over AJAX
- On feedback received, echo the feedback

Event listeners: progress, load, error, abort

- xhr.open, xhr.send, xhr.onreadystatechange (0-4; 4: completed), xhr.setRequestHeader (in some cases, you need to deal with CORS)
- Can use FormData Object (large part of the following slides can be simplified

:::











