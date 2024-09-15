---
article: false
date: 2022-03-23
order: 6


---

# Cleaning Data in Python

## PD dateframe 类型转换

Why do data types matter?

- Affects which operations you can perform
- Avoid storing data as strings (when possible)
  - int , float : enables mathematical operations
  - datetime : enables date-based a ributes and methods
  - category : uses less memory and runs faster
  - bool : enables logical and mathematical operations

### Series 查看类型

```python
In [7]:
ride_sharing["station_A_id"].dtype
Out[7]:
dtype('int64')
```

- object : Python strings (or other Python objects)
- bool : True and False values
- Other types: int , float , datetime , category

### dataFrame 查看类型

```python
print(ri.dtypes)
```

```
<script.py> output:
    stop_date                     object
    stop_time                     object
    driver_gender                 object
    driver_race                   object
    violation_raw                 object
    violation                     object
    search_conducted                bool
    search_type                   object
    stop_outcome                  object
    is_arrested                     bool
    stop_duration                 object
    drugs_related_stop              bool
    district                      object
    stop_datetime         datetime64[ns]
    dtype: object
```

### to object

```python
new_column = ride_sharing["station_A_id"].astype("object")
airlines['dest_region'].str // check string
```

### to int

```python
new_column = ride_sharing["station_A_id"].astype("int")
```

### to dt.datatime

```python
new_column = pd.to_datetime(ride_sharing['ride_date'])
```

### to category

```python
new_column = ride_sharing["type"].astype("category")
```

::: tip category 元数据

dataframe 由 series 组成。因此，每一列series有独自的元数据。就category而言，

```python
attrition_filtered['JobRole'].value_counts()
```

```
Research_Scientist           292
Manager                      102
......
Sales_Executive                0
Sales_Representative           0
Name: JobRole, dtype: int64
```

```python
# Remove categories with no rows
attrition_filtered['JobRole'] = attrition_filtered['JobRole'].cat.remove_unused_categories()
```

```
Research_Scientist    292
Manager               102
Research_Director      80
Human_Resources        52
Name: JobRole, dtype: int64
```

:::

## Assert

断言，断言错误则直接报错

```python
assert ride_sharing['user_type_cat'].dtype == 'category'
```

## treat duplicate

### .duplicated() method

![1651931370308.png](https://pic.hanjiaming.com.cn/2022/05/07/67cbdc8c783e9.png)

```python
# Get duplicates across all columns
duplicates = height_weight.duplicated()
print(duplicates)

>>>
"""
1 	False
... ....
22 	True
23 	False
......
"""
```

- subset : List of column names to check for duplication.
- keep : Whether to keep first ( 'first' ), last ( 'last' ) or all ( False ) duplicate values

```python
# Column names to check for duplication
column_names = ['first_name','last_name','address']
duplicates = height_weight.duplicated(subset = column_names, keep = False)
```

subset 用于圈定范围

### Output duplicate values

```python
duplicates = height_weight.duplicated(subset = column_names, keep = False)
height_weight[duplicates]
```

![CleanShot 2022-03-07 at 17.45.41@2x.png](https://pic.hanjiaming.com.cn/2022/03/07/26e915bc40641.png)

注意 duplicates 没有引号，因为 duplicates 被手动定义为 height_weight 的一部分。

### Drop duplicates

![1651931255232.png](https://pic.hanjiaming.com.cn/2022/05/07/ea53f7ee84fc6.png)

#### with .drop_duplicates()

```python
height_weight.drop_duplicates(inplace = True)
```

#### with groupby

```python
# Group by column names and produce statistical summaries
column_names = ['first_name','last_name','address']
summaries = {'height': 'max', 'weight': 'mean'}

height_weight = height_weight.groupby(by = column_names).agg(summaries).reset_index()

# Make sure aggregation is done
duplicates = height_weight.duplicated(subset = column_names, keep = False)
height_weight[duplicates].sort_values(by = 'first_name')
```

## Unique

### Print unique values

```python
# Print unique values of survey columns in airlines
print('Cleanliness: ', airlines['cleanliness'].unique(), "\n")
print('Safety: ', airlines['safety'].unique(), "\n")
print('Satisfaction: ', airlines['satisfaction'].unique(), "\n")
```

### difference

![1651942670505.png](https://pic.hanjiaming.com.cn/2022/05/08/0d571317cce3a.png)

```python
# Find the cleanliness category in airlines not in categories
cat_clean = set(airlines["cleanliness"]).difference(categories["cleanliness"])

# Find rows with that category
cat_clean_rows = airlines['cleanliness'].isin(cat_clean)

# Print rows with inconsistent category
print(airlines[cat_clean_rows])

# Print rows with consistent categories only
print(airlines[~cat_clean_rows])
```

## Categorical variables

### Value consistency

What type of errors could we have?

![1652017854942.png](https://pic.hanjiaming.com.cn/2022/05/08/e78f95efea9fa.png)

### value_counts()

```
marriage_status.value_counts()

>>>
unmarried 352
married 268
MARRIED 204
UNMARRIED 176
dtype: int64
```

### Strip all spaces

```python
demographics = demographics['marriage_status'].str.strip()
```

### Collapsing data into categories

将数据分为类别

#### pd.qcut()

Create categories out of data: `income_group` column from income `column`.

```python
# Using qcut()
import pandas as pd
group_names = ['0-200K', '200K-500K', '500K+']
demographics['income_group'] = pd.qcut(demographics['household_income'], q = 3,  labels = group_names)

# Print income_group column
demographics[['income_group', 'household_income']]
```

```
	income_group 		household_income
0 200K-500K 			189243
1 500K+ 					778533
```

#### pd.cut()

```python
# Using cut() - create category ranges and names
ranges = [0,200000,500000,np.inf]
group_names = ['0-200K', '200K-500K', '500K+']

# Create income group column
demographics['income_group'] = pd.cut(demographics['household_income'], bins=ranges,
labels=group_names)
demographics[['income_group', 'household_income']]
```

![CleanShot 2022-05-08 at 22.07.23@2x.png](https://pic.hanjiaming.com.cn/2022/05/08/db4ec677baa57.png)

```
  income_group    Income
0 0-200K 					189243
1 500K+ 					778533
```

## Replace

### Create mappings and replace

```python
# Create mappings and replace
mappings = {'Monday':'weekday', 'Tuesday':'weekday', 'Wednesday': 'weekday', 
            'Thursday': 'weekday', 'Friday': 'weekday', 
            'Saturday': 'weekend', 'Sunday': 'weekend'}

airlines['day_week'] = airlines['day'].replace(mappings)
```

### Replace str

```python
phones["Phone number"] = phones["Phone number"].str.replace("-","")
```

### Replace with Regular expressions

Replace 支持使用正则表达式，正则表达式语法请参考 https://www.runoob.com/regexp/regexp-tutorial.html

```python
phones['Phone number'] = phones['Phone number'].str.replace(r'\D+', '')
```

## .any()

存在性

```python
# Assert that full_name has no honorifics
assert airlines['full_name'].str.contains('Ms.|Mr.|Miss|Dr.').any() == False
```

## assert 关键字

断言，后面跟一个布尔判断，如果后面返回 False 则会导致 Exception

**Remember, assert returns nothing if the condition passes**

## dt.date

```python
user_signups[user_signups['subscription_date'] > dt.date.today()]
```

### Datetime formatting

<img src="https://pic.hanjiaming.com.cn/2022/05/08/460e94c5759f7.png" alt="1652022834526.png" style="zoom:33%;" />

`pandas.to_datetime()`

- 可以自动识别大多数格式 
- 有时会出错或无法识别的格式

```python
# Will work!
birthdays['Birthday'] = pd.to_datetime(birthdays['Birthday'],
                        # Attempt to infer format of each date
                        infer_datetime_format=True,
                        # Return NA for rows where conversion failed
                        errors = 'coerce')
```

### 格式转换

```python
// eg1
birthdays['Birthday'] = birthdays['Birthday'].dt.strftime("%d-%m-%Y")
// eg2
ages_manual = today.year - banking["birth_date"].dt.year
```

## Cross field validation

The use of multiple fields in a dataset to sanity check data integrity

即交叉数据验证

### .sum()

![1652106049679.png](https://pic.hanjiaming.com.cn/2022/05/09/61b0fa295fc51.png)

```python
sum_classes = flights[['economy_class', 'business_class', 'first_class']].sum(axis = 1)
// axis = 1 表示横向求和，axis = 0 表示纵向求和
passenger_equ = sum_classes == flights['total_passengers']
# Find and filter out rows with inconsistent passenger totals
inconsistent_pass = flights[~passenger_equ]
```

## Completeness

数据完整性

![1652106959574.png](https://pic.hanjiaming.com.cn/2022/05/09/13ff6944b6a53.png)

确实的数据会以`NaN`显示。

![1652108977086.png](https://pic.hanjiaming.com.cn/2022/05/09/22319a9ef2a9e.png)

### .isna()

<img src="https://pic.hanjiaming.com.cn/2022/05/09/35646100144b3.png" alt="1652107112307.png" style="zoom:50%;" />

### .isna().sum()

统计`NaN`的个数。

<img src="https://pic.hanjiaming.com.cn/2022/05/09/00a0a5de5f035.png" alt="1652107166764.png" style="zoom: 50%;" />

### 缺失可视化

```python
msno.matrix(sorted_airquality)
plt.show()
```

<img src="https://pic.hanjiaming.com.cn/2022/05/09/d4ce3501e8f2f.png" alt="1652108906307.png" style="zoom:50%;" />

### Dropping missing values

```python
# Drop missing values
airquality_dropped = airquality.dropna(subset = ['CO2'])
```

### Treat Nan

#### fillna()

```python
co2_mean = airquality['CO2'].mean()
airquality_imputed = airquality.fillna({'CO2': co2_mean})
```

#### 使用平均值

```python
np.mean()
```

## Simple string comparison

### Minimum edit distance

从一个字符串过渡到另一个字符串所需的最少步骤

<img src="https://pic.hanjiaming.com.cn/2022/06/01/bbc39d12182c0.png" alt="1654061206503.png" style="zoom: 25%;" />

<img src="https://pic.hanjiaming.com.cn/2022/06/01/171d2aaffb167.png" alt="1654061231341.png" style="zoom: 20%;" />

<img src="https://pic.hanjiaming.com.cn/2022/06/01/9c39e502961d3.png" alt="1654061324780.png" style="zoom:50%;" />

Possible packages: nltk , fuzzywuzzy , textdistance ..

### 相似性

```python
# Lets us compare between two strings
from fuzzywuzzy import fuzz
# Compare reeding vs reading
fuzz.WRatio('Reeding', 'Reading')

# Partial string comparison
fuzz.WRatio('Houston Rockets', 'Rockets')

# Partial string comparison with different order
fuzz.WRatio('Houston Rockets vs Los Angeles Lakers', 'Lakers vs Rockets')
```

```
86
90
86
```

### 列表

```python
# Import process
from fuzzywuzzy import process

# Define string and array of possible matches
string = "Houston Rockets vs Los Angeles Lakers"

choices = pd.Series(['Rockets vs Lakers', 'Lakers vs Rockets',
'Houson vs Los Angeles', 'Heat vs Bulls'])

# limit 按排名截取前几个
process.extract(string, choices, limit = 2)
```

```
[('Rockets vs Lakers', 86, 0), ('Lakers vs Rockets', 86, 1)]
```

与字符串匹配的折叠类别

![1654062168479.png](https://pic.hanjiaming.com.cn/2022/06/01/d47043e78ff20.png)

```python
# For each correct category
for state in categories['state']:
  
  # Find potential matches in states with typoes
  # 第一个参数是标准 值 ，第二个参数是需要校准的 序列
  # matches 是待校准值的unique 以及对应分数
  matches = process.extract(state, survey['state'], limit = survey.shape[0])
  
  # For each potential match match
  for potential_match in matches:
   
  	# If high similarity score
    # 如果待校准的值的分数大于80分，则替换为 state
    if potential_match[1] >= 80:
      
      # Replace typo with correct category
      survey.loc[survey['state'] == potential_match[0], 'state'] = state
```

该操作是整列操作，`survey['state']` 是一整列。

## Append 相似追加

之前的append追加数据时，无法处理相似数据的重复问题。

<img src="https://pic.hanjiaming.com.cn/2022/06/02/1d501eb5acb4d.png" alt="1654099850745.png" style="zoom: 25%;" />

如何防止相似的数据被追加？可以按照这样一个流程

<img src="https://pic.hanjiaming.com.cn/2022/06/02/8b7ec66cd93b3.png" alt="1654099905428.png" style="zoom: 67%;" />

The recordlinkage package

![1654099946342.png](https://pic.hanjiaming.com.cn/2022/06/02/06398a9737902.png)

```python
# Import recordlinkage
import recordlinkage

# Create indexing object
indexer = recordlinkage.Index()

# Generate pairs blocked on state
indexer.block('state')
pairs = indexer.index(census_A, census_B)

print(pairs)
# 这一步产生了 Index对
```

```
MultiIndex(levels=[['rec-1007-org', 'rec-1016-org', 'rec-1054-org', 'rec-1066-org',
'rec-1070-org', 'rec-1075-org', 'rec-1080-org', 'rec-110-org', 'rec-1146-org',
'rec-1157-org', 'rec-1165-org', 'rec-1185-org', 'rec-1234-org', 'rec-1271-org',
'rec-1280-org',...........
66, 14, 13, 18, 34, 39, 0, 16, 80, 50, 20, 69, 28, 25, 49, 77, 51, 85, 52, 63, 74, 61,
83, 91, 22, 26, 55, 84, 11, 81, 97, 56, 27, 48, 2, 64, 5, 17, 29, 60, 72, 47, 92, 12,
95, 15, 19, 57, 37, 70, 94]], names=['rec_id_1', 'rec_id_2'])
```

```python
# Create a Compare object
compare_cl = recordlinkage.Compare()

# Find exact matches for pairs of date_of_birth and state
compare_cl.exact('date_of_birth', 'date_of_birth', label='date_of_birth')
compare_cl.exact('state', 'state', label='state')
# Find similar matches for pairs of surname and address_1 using string similarity
compare_cl.string('surname', 'surname', threshold=0.85, label='surname')
compare_cl.string('address_1', 'address_1', threshold=0.85, label='address_1')

# Find matches
potential_matches = compare_cl.compute(pairs, census_A, census_B)

# print
print(potential_matches)
```

下面结果中，1表示符合，0表示不符合

<img src="https://pic.hanjiaming.com.cn/2022/06/02/65e2e49b350e0.png" alt="1654100364764.png" style="zoom:50%;" />

下一步 筛选出来我认为是相似的数据条目

```python
# 我们设定 当某一行的值的和 >= 3时，认为是相似的
potential_matches[potential_matches.sum(axis = 1) => 3]
print(matches)
```

![1654100570259.png](https://pic.hanjiaming.com.cn/2022/06/02/04062ba687964.png)

```
>>> matches.index

MultiIndex(levels=[['rec-1007-org', 'rec-1016-org', 'rec-1054-org', 'rec-1066-org',
'rec-1070-org', 'rec-1075-org', 'rec-1080-org', 'rec-110-org', ...
```

接下来只需要

```python
# Get indices from census_B only
duplicate_rows = matches.index.get_level_values(1)
print(census_B_index)

# drop duplicates
census_B_new = census_B[~census_B.index.isin(duplicate_rows)]

# Link the DataFrames!
full_census = census_A.append(census_B_new)
```

## np.non

可以使用NaN值替代异常值。NaN元素位于 Numpy, 应当先导入 Numpy as np

```python
# 用NaN代替 98, 99
pounds = pounds.replace([98, 99], np.nan)
```

## str操作

### series.str.cat()

```python
# Concatenate 'stop_date' and 'stop_time' (separated by a space)
combined = ri.stop_date.str.cat(ri.stop_time, sep = " ")
```

将 `date` 列 和 `time` 列的字符串拼接。

::: info 区分 .cat

- series.str.cat() 是 处理 str 元素的，用于拼接的方法
- series.cat 表示看做 category处理，类似于 series.str

:::

### Strip

去除指定字符后的字符，适用于对DataFrame 整列进行操作

## 总结

![1654100907302.png](https://pic.hanjiaming.com.cn/2022/06/02/f4d38165d6a3e.png)

![1654100920430.png](https://pic.hanjiaming.com.cn/2022/06/02/89e0e02c8c6e3.png)

![1654100932168.png](https://pic.hanjiaming.com.cn/2022/06/02/ebfc4a380172d.png)

![1654100945474.png](https://pic.hanjiaming.com.cn/2022/06/02/07c69bee8b096.png)
