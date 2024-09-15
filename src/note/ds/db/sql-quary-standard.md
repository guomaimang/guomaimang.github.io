---
article: false
date: 2022-06-04
order: 1
---

# SQL Quary Standard

## SELECT

在现实世界中，你经常想要选择多个列。幸运的是，SQL使之变得非常容易。要从一个表中选择多列，只需用逗号将列名分开就可以了。

For example, this query selects two columns, `name` and `birthdate`, from the `people` table:

```sql
SELECT name, birthdate
FROM people;
```

有时，你可能想从一个表中选择所有的列。打出每一列的名字会很麻烦，所以有一个方便的快捷方式。

```sql
SELECT *
FROM people;
```

## LIMIT

如果你只想返回一定数量的结果，你可以使用 LIMIT 关键字来限制返回的行数。

```sql
SELECT *
FROM people
LIMIT 10;
```

Before getting started with the instructions below, check out the column names in the `films` table!

## DISTINCT

通常你的结果会包括许多重复的值。如果你想从一列中选择所有的唯一值，你可以使用DISTINCT关键字。

This might be useful if, for example, you're interested in knowing which languages are represented in the `films` table:

```sql
SELECT DISTINCT language
FROM films;
```

Remember, you can check out the data in the tables by clicking on the table name!

## `COUNT()` function

What if you want to count the number of employees in your employees table? The `COUNT()` function lets you do this by returning the number of rows in one or more columns.

For example, this code gives the number of rows in the `people` table:

```sql
SELECT COUNT(*)
FROM people;
```

正如你所看到的，COUNT(*)告诉你一个表中有多少行。然而，如果你想计算某一列的非缺失值的数量，你可以只对该列调用COUNT()。

For example, to count the number of birth dates present in the `people` table:

```sql
SELECT COUNT(birthdate)
FROM people;
```

It's also common to combine `COUNT()` with `DISTINCT` to count the number of *distinct* values in a column.

For example, this query counts the number of distinct birth dates contained in the `people` table:

```sql
SELECT COUNT(DISTINCT birthdate)
FROM people;
```

## WHERE

在SQL中，WHERE关键字允许你根据表中的文本和数字值进行过滤。你可以使用一些不同的比较运算符。

- `=` equal
- `<>` not equal
- `<` less than
- `>` greater than
- `<=` less than or equal to
- `>=` greater than or equal to

例如，你可以过滤title记录，如标题。下面的代码返回所有标题为 "Metropolis "的电影。

```sql
SELECT title
FROM films
WHERE title = 'Metropolis';
```

Notice that the `WHERE` clause always comes after the `FROM` statement!

如果筛查日期，请使用 ISO date format， 比如 `'1974-11-11'`

注意使用单引号引起字符串。

### AND

可以使用AND 连接条件

```sql
SELECT *
FROM films
WHERE language = 'Spanish' AND release_year < 2010 AND release_year > 2000;
```

### OR

或者 OR 连接条件

```sql
SELECT title
FROM films
WHERE (release_year = 1994 OR release_year = 1995)
AND (certification = 'PG' OR certification = 'R');
```

### BETWEEN

对于数值和时间 还可以使用 BETWEEN 关键字

```sql
SELECT title, release_year
FROM films
WHERE release_year BETWEEN 1990 AND 2000;
```

### IN

可用 IN 指定多个值

```sql
SELECT name
FROM kids
WHERE age IN (2, 4, 6, 8, 10);
```

### IS NULL

In SQL, `NULL` represents a **missing or unknown** value. You can check for `NULL` values using the expression `IS NULL`. 

```sql
SELECT name
FROM people
WHERE birthdate IS NOT NULL;
```

## LIKE and NOT LIKE

正如你已经看到的，WHERE子句可以用来过滤文本数据。然而，到目前为止，你只能通过指定你感兴趣的确切文本来进行过滤。在现实世界中，你经常想搜索一个模式而不是一个特定的文本字符串。

在SQL中，LIKE操作符可以在WHERE子句中使用，以搜索一个列中的模式。为了达到这个目的，你可以使用一个叫做通配符的东西作为一些其他值的占位符。有两种通配符可以与LIKE一起使用。

- `_通配符`将匹配单个字符。例如，下面的查询匹配 "DataCamp"、"DataComp "等公司。
- Get the names of all people whose names begin with 'B'. The pattern you need is `'B%'`.

```sql
SELECT name
FROM people
WHERE name LIKE 'B%';
```

```sql
/*
Get the names of people whose names have 'r' as the second letter. The pattern you need is '_r%'
*/

SELECT name
FROM people
WHERE name LIKE '_r%'
```

## Aggregate functions

通常，你会想对数据库中的数据进行一些计算。SQL提供了一些函数，称为聚合函数，来帮助你解决这个问题。

- COUNT()
- MAX()
- MIN()
- SUM()

```sql
SELECT SUM(duration)
FROM films;

SELECT AVG(duration)
FROM films;

SELECT MIN(duration)
FROM films;

SELECT MAX(duration)
FROM films;
```

## Note on arithmetic

除了使用聚合函数外，你还可以用`+、-、*、/`等符号进行基本算术。

```
SELECT (4.0 / 3.0) AS result;
<<< 1.333

SELECT (10 / 3);
<<< 3
```

##  AS aliasing

```sql
SELECT MAX(budget), MAX(duration)
FROM films;
```

会有两个名为max的列

为了避免这样的情况，SQL允许你做一些叫做别名的事情。别名只是意味着你给某个东西指定了一个临时的名字。对于别名，你使用AS关键字。

```sql
SELECT MAX(budget) AS max_budget,
       MAX(duration) AS max_duration
FROM films;
```



