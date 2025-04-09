---
article: false
date: 2025-04-07
index: true
order: 9
headerDepth: 1
---

#  Injection Attacks

## What is Injection Attack?

- Attackers can inject into a website some malicious contents that may be evaluated as commands
- How to achieve that?–by crafting inputs with special characters
-  **Fundamental reason: the blurred boundary between data and code**
- **General Defense: Apply Rigorous Whitelist Validations**
- Many different kinds of injection
  - SQL Injection
  - OS Command Injection
  - File-based XSS Injection
  - CSS Injection

## SQL Injection

- Database holds a lot of sensitive data
  - For example, user data, password, names, email, credit card numbers
  - Attractive target: sell for profit
- SQL Injection is a type of attack to inject SQL statements via specially crafted user inputs

### An Example Vulnerability

```sql
catID = req.body.catID; // 1; DROP TABLE products--;
query = `SELECT * FROM products WHERE catid = ${catID}`;
```

The problem is that: user inputs (i.e., req.body.catID) are put into final SQL statement directly (without validation or sanitization

Consequences: malicious user inputs could lead to unexpected SQL statements that will compromise Confidentiality「妥协机密性」 (like Information Leakage) or Integrity (like Modifying/Deleting DB Data)

### Some Sample SQL Injection Attacks

Given a vulnerability shown in previous,  attackers can:

- Get all products: by using "1 OR 1=1"
- query == "SELECT * FROM products WHERE catid=1 OR 1=1";

To steal users data (via UNION SELECT): Brute-force the number of columns in use by the original table by using:

- 0 UNION SELECT null, null (appending “,null” until no error)
- e.g.,SELECT * FROM products WHERE catid = 0 UNION SELECT null, null, null, null
- Or guess table and column names (No need to guess for open-source proj.)
- e.g., SELECT * FROM products WHERE catid = 0 UNION SELECT null, null, email, null FROM users

### Other SQL Injection Attacks

- Attackers can do a lot more than those demonstrated, include:
  -  Commenting the statement using–after the injection point
  - E.g., removing the output number limit below
  - SELECT * FROM products WHERE pid = 0 UNION SELECT 1, 1, email, 1 FROM users ;--LIMIT 
- Escaping from original quotes `\' or \"`  -》 `with magic_quotes_gpc (<PHP5.3) auto escape ” and ’ to become \” and \'`
- Not secure method to defend injection for appended query string
- Destroying tables using DROP TABLE users
- Exposing database schema -> e.g., mysql: SELECT * FROM information_schema.tables
- Dumping all data into a single file for easy download

### Defending SQL Injection

#### Use Prepared Statements properly for every SQL call

#### Defense-in-Depth Strategy

Apart from applying the specific SQL injection defense, we can also take:

-  Least-privilege approach
  - For a database that has its own access control -> No more-than-needed permissions (READ/WRITE only for specific tables)
  - Do not install unnecessary packages/extensions
- Compartmentalization / Separation of Privilege
  - For a database that has its own access control, Separate databases of different sensitivity, accessible by different DB users
  - For SQLite, Create a separate database for sensitive table like users, shopTransactions
  - Promote Privacy,  Always encrypt or apply one-way hash functions for sensitive data
- Upgrade to the latest DB version

## OS Command Injection Attack

Example Vulnerability:

If you’re to write a DNS lookup application, Intuitively, you want to use the nslookup command

```
const domain = req.query.domain;
const command = `nslookup ${domain}`;
exec(command, (error, output) => {res.send(output);}
```

Again, req.query.domain is not properly escaped or validated

Execute any commands using the privilege of the web server

## File-based XSS Injection

### Cause

An application is vulnerable if it allows file upload yet does not check the MIME-type at server, (File + file name) are the attack vectors

Browsers may disregard the Content-type header and detect the MIME-type themselves by sniffing the contents

- MIME Sniffing or Content type sniffing
- Try to determine the effective file type (it varies across browsers)

Consequence: User-uploaded file can be parsed as HTML (or JavaScript!)

Problems were fixed in the latest browser versions, but there could be new vulnerabilities of this kind found in future

::: info MIME

MIME（Multipurpose Internet Mail Extensions，多用途互联网邮件扩展）类型是一种标准，用来表示文件的类型和格式。浏览器和服务器通过MIME类型来决定如何处理和显示文件。例如，text/html表示HTML文件，image/png表示PNG图片文件。

:::

### Defending File-based XSS Injection

1. As a user, please upgrade to the latest versions of your browser for the
2. As a developer, take a Defense-in-Depth strategy
   1. Validate the MIME-type at server side -> Note that validating file.mimetype is insufficient, uploading a file that ends with .jpg will pass the validation
   2. Host user-uploaded content in a separate origin
      1. User-supplied file is executed in another origin
      2. Even for users of outdated browsers, these files cannot launch XSS
      3. Example: Google uses a separate domain for Gmail attachment
   3. Apply an extra header X-Content-Type-Options: nosniff for IE
      1. Create a file called .htaccess in the folder for file uploads
      2. Put the following apache script to insert the header for all files in the folder header set X-Content-Type-Options nosnif

## CSS Injection

**Cause: Forcing browsers to parse HTML as CSS**

### Example Vulnerability

```
 Send an email with subject {}*{font-family:’
→ Seems to be an un-terminating CSS rule
- When received, the HTML code will look like:

<html><body>
…<td>Subject: {}*{font-family:'</td>...
<form action="http://gmail.com/forwardemail" method="POST">
<input type="hidden" name="nonce" value="SD9fsjdf35HE4f">
<input type="submit" value="Forward">
...
</form>
…</body></html>
```

Victim「受害者」 visits a malicious page (e.g. by clicking a link in the email):

![1744172699831.png](https://pic.hanjiaming.com.cn/2025/04/09/ce838a2ad97ef.png)

### Defending CSS Injection

As a user

- to protect yourself, upgrade to the latest versions of your browser
- This problem had been fixed by most modern browsers

As a developer:

- **ALWAYS apply whitelist validation on users’ input whenever possible!!**
- Blacklist output sanitization is subject to future unexpected flaws

































