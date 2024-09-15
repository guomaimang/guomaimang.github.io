---
article: false
date: 2022-05-30
order: 2
icon: fa-solid fa-code
headerDepth: 0
---

# Visualization blocks

## Histogram Plus

```python
# Explore view_count
sns.distplot(data["view_count"],bins=50)
```

![1653932541673.png](https://pic.hanjiaming.com.cn/2022/05/31/77bc7ee63a60e.png)

```python
plt.clf()
ax = sns.distplot(np.log(data["view_count"]),hist=False, kde_kws={"shade": True})
ax.set(xlabel='ln(view_count)')
plt.show()
```

![1653932569291.png](https://pic.hanjiaming.com.cn/2022/05/31/6f69b2ffd76e0.png)

## Q-Q Plot

```python
# Explore data['likes']/data["view_count"] 热度 popularity
data["rate_likes"] = data['likes'] / data["view_count"]

from scipy.stats import kstest
res=kstest(data["rate_likes"], 'norm', (data["rate_likes"].mean(), data["rate_likes"].std()))
print(res)

plt.clf()
print(scipy.stats.normaltest(data["rate_likes"]))
scipy.stats.probplot(data["rate_likes"], dist="norm", plot=plt)
plt.title("Q-Q Plot for Video Like Rate")
plt.show()
```

```
<<<
KstestResult(statistic=0.07964721538565644, pvalue=8.813513831500901e-129)
NormaltestResult(statistic=6992.485911812571, pvalue=0.0)
```

![1653932616873.png](https://pic.hanjiaming.com.cn/2022/05/31/00f6cc00ffdd7.png)

## Heat Map

```python
# Exploring correlations between data
plt.clf()
fc = data.loc[data["dislikes"] >= 0, ["rate_likes", "view_count", "likes", "dislikes", "comment_count"]].corr()
mask = np.zeros_like(fc)
mask[np.triu_indices_from(mask)] = True
sns.heatmap(fc,mask=mask,linewidths=.5,vmin=-1,vmax=1,annot=True,fmt='.2f',cmap=sns.color_palette('RdBu_r',n_colors=128))
plt.show()
```



![1653932667666.png](https://pic.hanjiaming.com.cn/2022/05/31/76f3e052137b2.png)

## Boxplot

```python
# Observation and deleting abnormal rate_likes values
sns.boxplot(data["rate_likes"])

error = data[np.abs(data["rate_likes"] - data["rate_likes"].mean()) > 3 * data["rate_likes"].std()]
data = data.drop(error.index)
```

![1653932737323.png](https://pic.hanjiaming.com.cn/2022/05/31/306a7ff6ec2e4.png)

## Pie chart

```python
from pyecharts.charts import Line,Pie,Grid,Bar,Page
import pyecharts.options as opts

play_message = data.groupby(['channelTitle'])

play_com = play_message['channelTitle'].agg(['count']).sort_values('count',ascending = False)[:15]
play_com.reset_index(inplace=True)

attr = play_com['channelTitle']
v1 = play_com['count']


pie = Pie(init_opts=opts.InitOpts(width="1100px", height="600px"))

pie.add("", [list(z) for z in zip(attr, v1)], radius=["40%", "70%"])

pie.set_global_opts(title_opts=opts.TitleOpts(title="TOP15 Video Count Channel", pos_left="center", pos_top="top"),
                        legend_opts=opts.LegendOpts(orient="vertical", pos_left="1%",pos_bottom="20%"),
                        toolbox_opts=opts.ToolboxOpts(is_show=True, feature={"saveAsImage": {}}))

pie.set_series_opts(label_opts=opts.LabelOpts(is_show=True, formatter="{b}: {d}%"))

pie.render_notebook()
```

![1653932835962.png](https://pic.hanjiaming.com.cn/2022/05/31/4e33c1aa7f680.png)

## Cumulative Plot

```python
item_cum=data['channelTitle'].value_counts().sort_values(ascending=False).cumsum()/len(data['view_count'])
x=range(len(item_cum)+1)

line7 = (
    Line()
    .add_xaxis(x)
    .add_yaxis('Percentage of Cumulative view_count', item_cum.values.tolist())
    .set_global_opts(
        title_opts=opts.TitleOpts(title='Trends in the Percentage of Cumulative view_count by Channel',pos_left="50%"),
        legend_opts=opts.LegendOpts(is_show=False),
        yaxis_opts=opts.AxisOpts(name='Percentage of Cumulative view_count'),
        xaxis_opts=opts.AxisOpts(name='Number of Channel'),
        toolbox_opts=opts.ToolboxOpts(is_show=True, feature={"saveAsImage": {}})
        
    )
    .set_series_opts (label_opts=opts.LabelOpts(is_show=False))
)
line7.render_notebook()
```

![1653932907788.png](https://pic.hanjiaming.com.cn/2022/05/31/da680a6e6511c.png)

## Pyecharts Hist 

```python
data[data["channelTitle"] == "MrBeast"]["view_count"].sum()

data2 = data.groupby('channelTitle')['view_count'].sum()
data2 = pd.DataFrame(data2.sort_values( ascending=False))


attr = data2.index[0:15]
v1 = [float('%.1f' % (float(i) / 1000000)) for i in data2['view_count'][0:15]]
 
bar = Bar(init_opts=opts.InitOpts(width="800px", height="400px"))
bar.add_xaxis(list(reversed(attr.tolist())))
bar.add_yaxis("", list(reversed(v1)),color = 'green')
bar.set_global_opts(title_opts=opts.TitleOpts(title="", pos_left="center", pos_top="18"),
                        toolbox_opts=opts.ToolboxOpts(is_show=True, feature={"saveAsImage": {}}),
                        xaxis_opts=opts.AxisOpts(splitline_opts=opts.SplitLineOpts(is_show=True)))
bar.set_series_opts(label_opts=opts.LabelOpts(is_show=True, position="right", color="black"))
bar.reversal_axis()
bar.render_notebook()
```

![1653933014606.png](https://pic.hanjiaming.com.cn/2022/05/31/0ba225d296638.png)

## Pyecharts Line

```python
from pyecharts.charts import Line,Pie,Grid,Bar,Page
import pyecharts.options as opts

line1 = (
    Line()
    .add_xaxis(date_view.index.tolist())
    .add_yaxis('视频平均播放量', date_view.values.tolist())
    .set_global_opts(
        title_opts=opts.TitleOpts(title='视频平均播放量变化趋势',pos_left="20%"),
        legend_opts=opts.LegendOpts(is_show=False),
        yaxis_opts=opts.AxisOpts(name='视频平均播放量'),
        toolbox_opts=opts.ToolboxOpts(is_show=True, feature={"saveAsImage": {}})
    )
    .set_series_opts (label_opts=opts.LabelOpts(is_show=False))
)

line2 = (
    Line()
    .add_xaxis(date_comment.index.tolist())
    .add_yaxis('视频平均评论数量', date_comment.values.tolist())
    .set_global_opts(
        title_opts=opts.TitleOpts(title='视频平均评论数量变化趋势',pos_right="20%"),
        legend_opts=opts.LegendOpts(is_show=False),
        yaxis_opts=opts.AxisOpts(name='视频平均评论数量'),
        toolbox_opts=opts.ToolboxOpts(is_show=True, feature={"saveAsImage": {}})
    )
    .set_series_opts (label_opts=opts.LabelOpts(is_show=False))
)

line3 = (
    Line()
    .add_xaxis(date_likes.index.tolist())
    .add_yaxis('视频平均点赞数', date_likes.values.tolist())
    .set_global_opts(
        title_opts=opts.TitleOpts(title='视频平均点赞数变化趋势',pos_top="50%",pos_left="20%"),
        legend_opts=opts.LegendOpts(is_show=False),
        yaxis_opts=opts.AxisOpts(name='视频平均点赞数'),
        toolbox_opts=opts.ToolboxOpts(is_show=True, feature={"saveAsImage": {}})
    )
    .set_series_opts (label_opts=opts.LabelOpts(is_show=False))
)


line4 = (
    Line()
    .add_xaxis(date_count.index.tolist())
    .add_yaxis('趋势视频数量', date_count.values.tolist())
    .set_global_opts(
        title_opts=opts.TitleOpts(title='趋势视频数量变化趋势',pos_top="50%",pos_right="20%"),
        legend_opts=opts.LegendOpts(is_show=False),
        yaxis_opts=opts.AxisOpts(name='趋势视频数量'),
        toolbox_opts=opts.ToolboxOpts(is_show=True, feature={"saveAsImage": {}})
    )
    .set_series_opts (label_opts=opts.LabelOpts(is_show=False))
)

grid1 = (
    Grid()
    .add(line1, grid_opts=opts.GridOpts(pos_bottom="60%",pos_right="55%"))
    .add(line2, grid_opts=opts.GridOpts(pos_bottom="60%",pos_left="55%"))
    .add(line3, grid_opts=opts.GridOpts(pos_top="60%",pos_right="55%"))
    .add(line4, grid_opts=opts.GridOpts(pos_top="60%",pos_left="55%"))
    
 )   
grid1.render_notebook()
```

![1653933070202.png](https://pic.hanjiaming.com.cn/2022/05/31/54d89383a7f09.png)