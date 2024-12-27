---
article: false
date: 2024-12-23
index: true
order: 17
headerDepth: 1
category:
  - tech

---

# 数据库并发冲突及解决方案

在高并发场景下，多个线程对同一个账户进行并发更新时，可能会产生数据不一致的问题。具体场景如下：

<img src="https://pic.hanjiaming.com.cn/2024/12/27/2a9b51802941c.png" alt="1735287906978.png" style="zoom:25%;" />

1. 两个线程获取同一个账户的余额。
2. 线程一和线程二分别在账户上增加金额。
3. 线程一和线程二分别将增加后的金额更新回数据库。

如果两个线程并发执行上述操作，会导致数据不一致。例如：

- 线程一获取账户余额为400。
- 线程二在线程一更新前，获取账户余额并增加金额至500。
- 线程一更新账户余额为900（错误结果），而预期结果应为1000。

## 传统解决方案：悲观锁

### 悲观锁的实现

在原有的 `SELECT` 语句上增加 `FOR UPDATE` 子句，以锁定查询到的数据行。例如：

```sql
SELECT * FROM ACC WHERE id = 1001 FOR UPDATE;
```

### 悲观锁的执行流程

1. 线程一执行 `SELECT ... FOR UPDATE`，获取并锁定账户数据。
2. 线程二尝试获取同一账户数据，但因被锁定处于阻塞等待状态。
3. 线程一更新账户数据并提交事务，释放锁。
4. 线程二获取账户数据并进行更新。

### 悲观锁的缺点

- **并发性差**：高并发场景下，任何对同一账户的操作都会阻塞等待，降低系统并发性能。
- **用户体验差**：用户操作时可能长时间等待，影响用户体验。
- **线程阻塞问题**：大量线程阻塞可能导致系统线程池爆满，轻则系统失去响应，重则系统崩溃。

## 现代解决方案：乐观锁

### 乐观锁的实现

通过在数据表中增加版本号字段（如 `version`），并在更新时进行版本号检查，以控制并发。例如：

```sql
ALTER TABLE ACC ADD COLUMN version INT DEFAULT 1;
```

<img src="https://pic.hanjiaming.com.cn/2024/12/27/13648f234137d.png" alt="1735288334036.png" style="zoom: 25%;" />

### 乐观锁的执行流程

1. 获取账户数据及版本号：

    ```sql
    SELECT * FROM ACC WHERE id = 1001;
    ```

2. 增加账户余额，并在更新时检查版本号：

    ```sql
    UPDATE ACC SET balance = new_balance, version = version + 1
    WHERE id = 1001 AND version = old_version;
    ```

    <img src="https://pic.hanjiaming.com.cn/2024/12/27/9ab36cfd9d2f3.png" alt="1735288599228.png" style="zoom:30%;" />

3. <u>如果 `UPDATE` 语句影响的行数为0，说明版本号不匹配，更新失败。</u> 这个时候可以可以由系统或者用户发起重试。

### 乐观锁的优点

- **提高并发性**：避免线程阻塞，提高系统并发性能。
- **数据一致性**：通过版本号检查，确保数据更新的正确性。

### 乐观锁的缺点

- **用户体验问题**：如果并发冲突频繁，<u>用户可能需要多次重试操作</u>。

## 具体实现

### 数据表结构

```sql
CREATE TABLE ACC (
    id INT PRIMARY KEY,
    balance DECIMAL(10, 2),
    version INT DEFAULT 1
);
```

### 伪代码示例

```java
// 获取账户数据及版本号
Account acc = select * from ACC where id = 1001;
int oldVersion = acc.getVersion();
acc.setBalance(acc.getBalance() + 100);

// 更新账户数据及版本号
int count = update ACC set balance = newBalance, version = version + 1
            where id = 1001 and version = oldVersion;

if (count == 0) {
    throw new VersionException("并发冲突，更新失败");
}
```

### 处理并发冲突

1. **前端提示用户重试**：当发生并发冲突时，提示用户重新提交请求。
2. **后端自动重试**：使用 `Spring Retry` 组件在后台自动重试操作。

### Spring Retry 组件使用

#### Maven依赖

```xml
<dependency>
    <groupId>org.springframework.retry</groupId>
    <artifactId>spring-retry</artifactId>
    <version>x.x.x</version>
</dependency>
```

#### 方法重试示例

<img src="https://pic.hanjiaming.com.cn/2024/12/27/33d568b3c06dd.png" alt="1735289022397.png" style="zoom:33%;" />

## 总结

在高并发场景下，使用乐观锁可以有效避免数据不一致问题，同时提高系统并发性能和用户体验。

通过版本号控制并发更新，并结合前端提示或后端自动重试机制，可以确保数据的正确性和系统的健壮性。