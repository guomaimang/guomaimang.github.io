---
article: false
date: 2022-06-04
order: 7



---

# Dates and times

## Create date

```python
# Import date from datetime
from datetime import date

# Create a date object
hurricane_andrew = date(1992, 8, 24)

# Which day of the week is the date?
print(hurricane_andrew.weekday())
```

Remember that Python counts days of the week starting from **Monday as 0, Tuesday as 1, and so on**.

## day, month & day

```python
# Create dates
two_hurricanes_dates = [date(2016, 10, 7), date(2017, 6, 21)]
print(two_hurricanes_dates[0].year)
print(two_hurricanes_dates[0].month)
print(two_hurricanes_dates[0].day)
```

## min()

```python
# Example numbers
a = 11
b = 14
l = [a, b]
# Find the least least in the list
print(min(l))

<<< 11
```

## ISO8601 format date

```python
from datetime import date
# Example date
d = date(2017, 11, 5)
# ISO format: YYYY-MM-DD
print(d)
```

```
2017-11-05
```

```python
print( [d.isoformat()] )
```

```
['2017-11-05']
```

## sorted()

```python
# A few dates that computers once had trouble with
some_dates = ['2000-01-01', '1999-12-31']
# Print them in order
print(sorted(some_dates))
```

```python
['1999-12-31', '2000-01-01']
```

## other format: strftime

```python
# Example date
d = date(2017, 1, 5)
print(d.strftime("%Y"))

# Format string with more text in it
print(d.strftime("Year is %Y"))

# Format: YYYY/MM/DD
print(d.strftime("%Y/%m/%d"))
```

```
2017
Year is 2017
2017/01/05
```

```python
# Print andrew in the format 'MONTH (YYYY)', using %B for the month's full name, which in this case will be August.
# Import date
from datetime import date
# Create a date object
andrew = date(1992, 8, 26)
# Print the date in the format 'MONTH (YYYY)'
print(andrew.strftime('%B (%Y)'))
```

```
August (1992)
```

```python
# Print andrew in the format 'YYYY-DDD' (where DDD is the day of the year) using %j.
# Import date
from datetime import date
# Create a date object
andrew = date(1992, 8, 26)
# Print the date in the format 'YYYY-DDD'
print(andrew.strftime("%Y-%j"))
```

```
1992-239
```

## Create datetime

<img src="https://pic.hanjiaming.com.cn/2022/06/04/854fc5bcee447.png" alt="1654357522817.png" style="zoom: 25%;" />

```python
# Import datetime
from datetime import datetime
dt = datetime(2017, 10, 1, 15, 23, 25)
```

```python
dt = datetime(year=2017, month=10, day=1, hour=15, minute=23, second=25, microsecond=500000)
print(dt)
```

```
2017-10-01 15:23:25.500000
```

## .replace()

用于修改datetime对象的内容

```python
dt_hr = dt.replace(minute=0, second=0, microsecond=0)
print(dt_hr)
```

```
2017-10-01 15:00:00
```

## ISO8601 Format time

```
# ISO 8601 format
print(dt.isoformat())

<<< 2017-12-30T15:19:13
```

## datetime.strptime()

该方法用于将str解析成 datetime 对象

```python
# Import datetime
from datetime import datetime
dt = datetime.strptime("12/30/2017 15:19:13","%m/%d/%Y %H:%M:%S")
```

## timestamp

时间戳，下面展示了将时间戳转换为 datetime 对象

```python
# A timestamp
ts = 1514665153.0
# Convert to datetime and print
print(datetime.fromtimestamp(ts))
```

```python
print(dt.timestamp())
```

## timedelta

```python
# Subtract two dates
# 结果是 timedelta
delta = d2 - d1
print(delta.days)
29
```

- 两个 date 相减得到 timedate
- 一个 date 和 一个 timedelta 操作得到 一个date

<img src="https://pic.hanjiaming.com.cn/2022/06/05/a5cb8d8345c9c.png" alt="1654358719261.png" style="zoom: 50%;" />

```python
# Subtract datetimes to create a timedelta
print(duration.total_seconds())
```

```
<<< 1450.0
```

 ```python
 # Create a one day and one second timedelta
 delta2 = timedelta(days=1, seconds=1)
 
 # Create a negative timedelta of one week
 delta3 = timedelta(weeks=-1)
 ```

- 获取天数 td.days
- 获取秒数 td.total_seconds()

## UTC offsets

**目标是，数据时间点应当是统计地区的本地时间点。**

<img src="https://pic.hanjiaming.com.cn/2022/06/05/34aa161df9bcd.png" alt="1654410668877.png" style="zoom: 33%;" />

### 在创建datetime时指定 timezone

如果不指定 tzinfo， 则默认参数为 `tzinfo=timezone.utc`

```python
# Import relevant classes
from datetime import datetime, timedelta, timezone
# US Eastern Standard time zone
ET = timezone(timedelta(hours=-5))
# Timezone-aware datetime
dt = datetime(2017, 12, 30, 15, 9, 3, tzinfo = ET)
print(dt)
```

```
2017-12-30 15:09:03-05:00
```

```python
# India Standard time zone
IST = timezone(timedelta(hours=5, minutes=30))
```

### Adjusting timezone

切换地区后顺带修改时间。但是不会修改表达的时间。记得要用 dt = dt.astimezone().

```python
# Change original to match UTC
print(dt.astimezone(timezone.utc))
```

```
2017-12-30 15:09:03+00:00
```

### changing tzinfo

当时区错误时，可以直接修改时区而不修改时间了。但是会修改表达的时间。记得要用 dt = dt.replace().

```python
# Change original to match UTC
print(dt.astimezone(timezone.utc))
```

```
2017-12-30 20:09:03+00:00
```

### Time zone database

实时数据库，联网更新。

Format: 'Continent/City'

Examples:

- 'America/New_York'
- 'America/Mexico_City'
- 'Europe/London'
- 'Africa/Accra'

```python
# Imports
from datetime import datetime
from dateutil import tz
# Eastern time
et = tz.gettz('America/New_York')

# Last ride
last = datetime(2017, 12, 30, 15, 9, 3, tzinfo=et)
print(last)
```

```
2017-12-30 15:09:03-05:00
```

tz将考虑地区的夏令时。

![1654412627354.png](https://pic.hanjiaming.com.cn/2022/06/05/a54b0edc0e31e.png)

### timedelta

timedelta 计算不会考虑时区，直接对时间进行加减。这就是说，切换datetime的时区前后计算的结果会不同。

## Daylight Saving Time

有些地方每年更换两次时钟，以创造更长的夏日夜晚，这叫夏令时（Daylight Saving Time）。

处理夏令时可能是处理日期和时间时最棘手的挑战之一。

![1654414684122.png](https://pic.hanjiaming.com.cn/2022/06/05/96714c89870f8.png) 

tz将考虑地区的夏令时。它将自动识别时间点并设置正确的offset。

![1654414990744.png](https://pic.hanjiaming.com.cn/2022/06/05/624ac9543c343.png)

### tz.datetime_ambiguous()

`datetime_ambiguous()` in `tz` can tell us if a `datetime` is ambiguous.

```python
eastern = tz.gettz('US/Eastern')
# 2017-11-05 01:00:00
first_1am = datetime(2017, 11, 5, 1, 0, 0,tzinfo = eastern)
tz.datetime_ambiguous(first_1am)
```

```
True
```

上述datetime 使用夏令时，11-05恰好是夏令时回归正常时间的那一天，01:00会出现两次！！！

![1654417041785.png](https://pic.hanjiaming.com.cn/2022/06/05/13f06f424cef7.png)

对于出现两次 1:00 - 2:00 应该怎么区分呢？

### tz.enfold()

可以标记该时间点是时间重叠时的第二个时间段。注意也只是标记，不会影响timedelta结果，

```python
# 2017-11-05 01:00:00 again
second_1am = datetime(2017, 11, 5, 1, 0, 0,tzinfo = eastern)
second_1am = tz.enfold(second_1am)
```

如果要计算时间差，勇当

```python
first_1am = first_1am.astimezone(tz.UTC)
second_1am = second_1am.astimezone(tz.UTC)
(second_1am - first_1am).total_seconds()
```

```
3600.0
```

## Use date&time in Pandas

Pandas 包含了datetime的很多功能。只需通过 df.dt.xxx() 访问即可。

### read file

读取文件作为dateframe时，可以指定列解析为dateframe。当然也可以后期处理。

```python
# Import W20529's rides in Q4 2017
rides = pd.read_csv('capital-onebike.csv',
parse_dates = ['Start date', 'End date'])
# Or: 格式转换
rides['Start date'] = pd.to_datetime(rides['Start date'],format = "%Y-%m-%d %H:%M:%S")
```

### df.resample()

时间序列数据在数据科学项目中很常见。 通常，可能会对将时序数据重新采样到要分析数据的频率或从数据中汲取更多见解的频率感兴趣。

向下采样和执行聚合：下采样是将一个时间序列重新采样到一个更大的时间框架。例如，从几分钟到几小时，从几天到几年。**结果的行数将减少，并且可以使用mean()、min()、max()、sum()、size()、value_counts()等聚合值，和groupby相似。**

```python
# on 指定列
# D 表示精确到天, M 表示精确到月
rides.resample('D', on = 'Start date').size()
```

```
Start date
2017-10-31    108
2017-11-30    103
2017-12-31     79
Freq: M, dtype: int64
```

需要注意的是，采样后不是dataFrame, 而是 DatetimeIndexResampler，不可以打印。

```python
# Resample rides to be monthly on the basis of Start date
monthly_rides = rides.resample('M', on = 'Start date')['Member type']

# Take the ratio of the .value_counts() over the total number of rides
print(monthly_rides.value_counts() / monthly_rides.size())
```

```
Start date  Member type
2017-10-31  Member         0.769
            Casual         0.231
2017-11-30  Member         0.825
            Casual         0.175
2017-12-31  Member         0.861
            Casual         0.139
Name: Member type, dtype: float64
```

```python
# Group rides by member type, and resample to the month
grouped = rides.groupby('Member type').resample('M', on = "Start date")

# Print the median duration for each group
print(grouped["Duration"].median())
```

```
Member type  Start date
Casual       2017-10-31    1636.0
             2017-11-30    1159.5
             2017-12-31     850.0
Member       2017-10-31     671.0
             2017-11-30     655.0
             2017-12-31     387.5
Name: Duration, dtype: float64
```

采样到2天：

![1654421684726.png](https://pic.hanjiaming.com.cn/2022/06/05/7c045599fe54b.png)

### Summarizing data

```
# 离开船坞的时间百分比
rides['Duration'].sum() / timedelta(days=91)

<<< 0.04348417785917786
```

```python
# First ride per group
rides.groupby('Member type').first()
```

### Timezones in Pandas

带有timezone 和 不带有timezone 的pd.datetime元素类型是两种类型。

![1654425906458.png](https://pic.hanjiaming.com.cn/2022/06/05/b604846d2fe95.png)

有些元素无法添加带有夏令时的时区，由于时间重叠。

这种情况只能用 NaT 来表示。

![1654426111261.png](https://pic.hanjiaming.com.cn/2022/06/05/a37b8ef84cd60.png)

转换时区用

```python
# Convert the Start date column to Europe/London
rides['Start date'] = rides['Start date'].dt.tz_convert("Europe/London")
```

类似 Adjusting timezone

### dt.day_name()

<img src="https://pic.hanjiaming.com.cn/2022/06/05/9de5f837862a6.png" alt="1654426156604.png" style="zoom:33%;" />

