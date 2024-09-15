---
article: false
date: 2022-03-23
order: 4

---

# Joining Data with pandas

作者：韩佳明

未经许可，禁止转载，已做版权存证

------

- Tables = DataFrames
- Merging = Joining

![CleanShot 2022-05-07 at 22.58.04@2x.png](https://pic.hanjiaming.com.cn/2022/05/07/d5f7c4aa03ce9.png)

## Inner join

<img src="https://pic.hanjiaming.com.cn/2022/02/03/443f1ec136655.png" alt="1643835100715.png" style="zoom: 25%;" />

指定检查列，将数据（或pair）相同的行进行连接并保留。

![1643834981023.png](https://pic.hanjiaming.com.cn/2022/02/03/812d4308c5135.png)

```python
wards_census = wards.merge(census, on=['ward'])
print(wards_census.head(4))
```

![1643835047555.png](https://pic.hanjiaming.com.cn/2022/02/03/69b14c0e2ed60.png)

## Suffixes

![1643835285745.png](https://pic.hanjiaming.com.cn/2022/02/03/840fac9cdcc80.png)

用于给相同的列名称加上自定义后缀以区分。

![1643835216850.png](https://pic.hanjiaming.com.cn/2022/02/03/aacae5f5bb6c0.png)

## Left Join

左侧数据全部保留，将右侧数据连接到左侧。

```python
wards_census = wards.merge(census,how = "left", on=['ward'])
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/1333c517c6827.png" alt="1643836148052.png" style="zoom:50%;" />

<img src="https://pic.hanjiaming.com.cn/2022/02/03/21ad295fc8b2d.png" alt="1643836056187.png" style="zoom:50%;" />

right join 则反之

<img src="https://pic.hanjiaming.com.cn/2022/02/03/e0f3a698c0247.png" alt="CleanShot 2022-02-03 at 05.09.26@2x.png" style="zoom:50%;" />

### Merging a table to itself

Merging a table to itself with left join

![1643836656871.png](https://pic.hanjiaming.com.cn/2022/02/03/446fffe656d0c.png)

## Outer join

<img src="https://pic.hanjiaming.com.cn/2022/02/03/fdc2972e2480f.png" alt="1643836228510.png" style="zoom:50%;" />

将左右进行连接，并保留没有被连接的行。

![1643836325823.png](https://pic.hanjiaming.com.cn/2022/02/03/f1bf80262bc7a.png)

## 自定义检查列

```python
original_sequels = sequels.merge(sequels, left_on='sequel', right_on='id', suffixes=('_org','_seq'))
```

## merge_ordered()

### 对比

![1643838808744.png](https://pic.hanjiaming.com.cn/2022/02/03/5c5964f95ec59.png)

注意 默认的连接方法是outer join

```python
pd.merge_ordered(appl, mcd, on='date', suffixes=('_aapl','_mcd'), fill_method='ffill') # 指定空数据是用前一个值
```

![1643838945816.png](https://pic.hanjiaming.com.cn/2022/02/03/c0f11351a6077.png)

## merge_asof()

- Similar to a merge_ordered() **left join**
- Similar features as merge_ordered()
- 非精准匹配
- merge 的 on 的 column 必须是已经排好序的
- direction 默认是 backward

```python
pd.merge_asof(visa, ibm, on=['date_time'],suffixes=('_visa','_ibm'),direction='forward')
# 匹配右边中不大于左边且最接近左边
```

![1643839163865.png](https://pic.hanjiaming.com.cn/2022/02/03/cd870c6068163.png)

## 变体应用

### semi-join

<img src="https://pic.hanjiaming.com.cn/2022/02/03/16a6c08f7cbee.png" alt="1643837527273.png" style="zoom:50%;" />

```python
genres_tracks = genres.merge(top_tracks, on='gid')
top_genres = genres[genres['gid'].isin(genres_tracks['gid'])]
print(top_genres.head())
```

### anti-join

![1643837583407.png](https://pic.hanjiaming.com.cn/2022/02/03/3b788bbdaa1c9.png)

```python
genres_tracks = genres.merge(top_tracks, on='gid', how='left', indicator=True)
gid_list = genres_tracks.loc[genres_tracks['_merge'] == 'left_only','gid']
non_top_genres = genres[genres['gid'].isin(gid_list)]
print(non_top_genres.head())
```

## Concatenate vertically

**垂直拼接**

![1643837717984.png](https://pic.hanjiaming.com.cn/2022/02/03/3a50db8e6e9f1.png)

```python
pd.concat([inv_jan, inv_feb, inv_mar], ignore_index=True)
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/1aeace29d36cf.png" alt="1643837798141.png" style="zoom:33%;" />

```python
pd.concat([inv_jan, inv_feb, inv_mar],ignore_index=False,keys=['jan','feb','mar'])
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/d556e8076db72.png" alt="1643837892698.png" style="zoom:33%;" />

### sort

```python
pd.concat([inv_jan, inv_feb], sort=True)
```

### 拼接保留列

指定参数 join，默认 仅拼接共同名称的列，

```python
pd.concat([inv_jan, inv_feb], join='inner')
```

### 使用 append 代替concat

```python
inv_jan.append([inv_feb, inv_mar],ignore_index=True,sort=True)
```

## 有条件的连接

适用于横向 join和垂直的拼接

### 为什么要有条件

![1643838478347.png](https://pic.hanjiaming.com.cn/2022/02/03/f4aaf381ef6e3.png)

Why: 

- Real world data is often NOT clean

What to do:

- Fix incorrect data
- Drop duplicate rows

### 条件参数

Checks if merge is of specied type

- 'one_to_one'
- 'one_to_many'
- 'many_to_one'
- 'many_to_many'

```python
.merge(validate=None) 
```

即连接前先检查是否符合条件，符合条件才会连接，不符合就不连接。