import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as o,a as t,b as e,d as i,e as a}from"./app-da918afa.js";const l={},p=t("h1",{id:"app-market-on-google-play",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#app-market-on-google-play","aria-hidden":"true"},"#"),e(" App Market on Google Play")],-1),c={href:"https://connectpolyu-my.sharepoint.com/:f:/g/personal/20075519d_connect_polyu_hk/EkScXjT6CKhOqLMR5TRwBmIBuYPXpIpmGBSP6Nmhpcts4g?e=CnuqgR",target:"_blank",rel:"noopener noreferrer"},u=t("h2",{id:"_1-google-play-store-apps-and-reviews",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-google-play-store-apps-and-reviews","aria-hidden":"true"},"#"),e(" 1. Google Play Store apps and reviews")],-1),v=t("p",null,"Mobile apps are everywhere. They are easy to create and can be lucrative. Because of these two factors, more and more apps are being developed. In this notebook, we will do a comprehensive analysis of the Android app market by comparing over ten thousand apps in Google Play across different categories. We'll look for insights in the data to devise strategies to drive growth and retention.",-1),m=t("img",{src:"https://pic.hanjiaming.com.cn/2022/05/31/a9587f10faec3.png",alt:"1653976706763.png",style:{zoom:"10%"}},null,-1),h=t("p",null,"Let's take a look at the data, which consists of two files:",-1),b=t("li",null,[t("code",null,"apps.csv"),e(": contains all the details of the applications on Google Play. There are 13 features that describe a given app.")],-1),g=t("code",null,"user_reviews.csv",-1),f={href:"https://www.androidpolice.com/2019/01/21/google-play-stores-redesigned-ratings-and-reviews-section-lets-you-easily-filter-by-star-rating/",target:"_blank",rel:"noopener noreferrer"},_=a(`<p>In [172]:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Read in dataset
import pandas as pd
apps_with_duplicates = pd.read_csv(&quot;datasets/apps.csv&quot;)

# Drop duplicates from apps_with_duplicates
apps = apps_with_duplicates.drop_duplicates()

# Print the total number of apps
print(&#39;Total number of apps in the dataset = &#39;, len(apps))

# Have a look at a random sample of 5 rows
apps.sample(5)
Total number of apps in the dataset =  9659
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Out[172]:</p><table><thead><tr><th></th><th>Unnamed: 0</th><th>App</th><th>Category</th><th>Rating</th><th>Reviews</th><th>Size</th><th>Installs</th><th>Type</th><th>Price</th><th>Content Rating</th><th>Genres</th><th>Last Updated</th><th>Current Ver</th><th>Android Ver</th></tr></thead><tbody><tr><td>3546</td><td>4450</td><td>Android P | Xperia™ Theme 4800+ icons</td><td>PERSONALIZATION</td><td>4.6</td><td>29</td><td>39.0</td><td>100+</td><td>Paid</td><td>$1.99</td><td>Everyone</td><td>Personalization</td><td>May 16, 2018</td><td>1.0.0</td><td>6.0 and up</td></tr><tr><td>5458</td><td>6469</td><td>TuenMun BM</td><td>TOOLS</td><td>NaN</td><td>6</td><td>47.0</td><td>1,000+</td><td>Free</td><td>0</td><td>Everyone</td><td>Tools</td><td>May 17, 2017</td><td>1.2</td><td>4.0.3 and up</td></tr><tr><td>7383</td><td>8477</td><td>DK Live - Sports Play by Play</td><td>SPORTS</td><td>3.9</td><td>255</td><td>19.0</td><td>100,000+</td><td>Free</td><td>0</td><td>Everyone</td><td>Sports</td><td>May 22, 2018</td><td>2.1.4</td><td>4.4 and up</td></tr><tr><td>5593</td><td>6618</td><td>bpresso PRO</td><td>MEDICAL</td><td>4.4</td><td>515</td><td>NaN</td><td>1,000+</td><td>Paid</td><td>$5.49</td><td>Everyone</td><td>Medical</td><td>April 19, 2017</td><td>Varies with device</td><td>Varies with device</td></tr><tr><td>686</td><td>850</td><td>Blinkist - Nonfiction Books</td><td>EDUCATION</td><td>4.1</td><td>16103</td><td>13.0</td><td>1,000,000+</td><td>Free</td><td>0</td><td>Everyone</td><td>Education</td><td>July 31, 2018</td><td>5.7.1</td><td>4.1 and up</td></tr></tbody></table><h2 id="_2-data-cleaning" tabindex="-1"><a class="header-anchor" href="#_2-data-cleaning" aria-hidden="true">#</a> 2. Data cleaning</h2><p>Data cleaning is one of the most essential subtask any data science project. Although it can be a very tedious process, it&#39;s worth should never be undermined.</p><p>By looking at a random sample of the dataset rows (from the above task), we observe that some entries in the columns like <code>Installs</code> and <code>Price</code> have a few special characters (<code>+</code> <code>,</code> <code>$</code>) due to the way the numbers have been represented. This prevents the columns from being purely numeric, making it difficult to use them in subsequent future mathematical calculations. Ideally, as their names suggest, we would want these columns to contain only digits from [0-9].</p><p>Hence, we now proceed to clean our data. Specifically, the special characters <code>,</code> and <code>+</code> present in <code>Installs</code> column and <code>$</code> present in <code>Price</code> column need to be removed.</p>`,8),y=t("code",null,"info()",-1),w={href:"http://this.In",target:"_blank",rel:"noopener noreferrer"},x=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># List of characters to remove
chars_to_remove = [&quot;+&quot;,&quot;,&quot;,&quot;$&quot;]
# List of column names to clean
cols_to_clean = [&quot;Installs&quot;,&quot;Price&quot;]

# Loop for each column in cols_to_clean
for col in cols_to_clean:
    for char in chars_to_remove:
        apps[col] = apps[col].apply(lambda x: x.replace(char, &quot;&quot;))
        
# Print a summary of the apps dataframe
print(apps.info())
&lt;class &#39;pandas.core.frame.DataFrame&#39;&gt;
Int64Index: 9659 entries, 0 to 9658
Data columns (total 14 columns):
Unnamed: 0        9659 non-null int64
App               9659 non-null object
Category          9659 non-null object
Rating            8196 non-null float64
Reviews           9659 non-null int64
Size              8432 non-null float64
Installs          9659 non-null object
Type              9659 non-null object
Price             9659 non-null object
Content Rating    9659 non-null object
Genres            9659 non-null object
Last Updated      9659 non-null object
Current Ver       9651 non-null object
Android Ver       9657 non-null object
dtypes: float64(2), int64(2), object(10)
memory usage: 1.1+ MB
None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-correcting-data-types" tabindex="-1"><a class="header-anchor" href="#_3-correcting-data-types" aria-hidden="true">#</a> 3. Correcting data types</h2>`,2),I=t("code",null,"Installs",-1),k=t("code",null,"Price",-1),P=t("code",null,"object",-1),S=t("code",null,"int",-1),A=t("code",null,"float",-1),T={href:"https://datacarpentry.org/python-ecology-lesson/04-data-types-and-format/",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"Installs",-1),q=t("code",null,"Size",-1),R=t("code",null,"Rating",-1),E=t("code",null,"Price",-1),L=t("code",null,"Size",-1),C=t("code",null,"Rating",-1),z=t("code",null,"float",-1),F=t("code",null,"Installs",-1),N=t("code",null,"Price",-1),M={href:"http://numeric.In",target:"_blank",rel:"noopener noreferrer"},B=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import numpy as np

# Convert Installs to float data type
apps[&#39;Installs&#39;] = apps[&#39;Installs&#39;].astype(float)

# Convert Price to float data type
apps[&quot;Price&quot;] = apps[&quot;Price&quot;].astype(float)

# Checking dtypes of the apps dataframe
print(apps.dtypes)

Unnamed: 0          int64
App                object
Category           object
Rating            float64
Reviews             int64
Size              float64
Installs          float64
Type               object
Price             float64
Content Rating     object
Genres             object
Last Updated       object
Current Ver        object
Android Ver        object
dtype: object
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-exploring-app-categories" tabindex="-1"><a class="header-anchor" href="#_4-exploring-app-categories" aria-hidden="true">#</a> 4. Exploring app categories</h2><p>With more than 1 billion active users in 190 countries around the world, Google Play continues to be an important distribution platform to build a global audience. For businesses to get their apps in front of users, it&#39;s important to make them more quickly and easily discoverable on Google Play. To improve the overall search experience, Google has introduced the concept of grouping apps into categories.</p><p>This brings us to the following questions:</p><ul><li>Which category has the highest share of (active) apps in the market?</li><li>Is any specific category dominating the market?</li><li>Which categories have the fewest number of apps?</li></ul>`,5),D=t("code",null,"33",-1),G=t("em",null,"Family",-1),O=t("em",null,"Game",-1),V=t("em",null,"Tools",-1),Y=t("em",null,"Business",-1),U=t("em",null,"Medical",-1),H={href:"http://top.In",target:"_blank",rel:"noopener noreferrer"},W=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import plotly
plotly.offline.init_notebook_mode(connected=True)
import plotly.graph_objs as go

# Print the total number of unique categories
num_categories = len(apps[&#39;Category&#39;].unique())
print(&#39;Number of categories = &#39;, num_categories)

# Count the number of apps in each &#39;Category&#39;. 
num_apps_in_category = apps[&#39;Category&#39;].value_counts()

# Sort num_apps_in_category in descending order based on the count of apps in each category
sorted_num_apps_in_category =  num_apps_in_category.sort_values(ascending = False)

data = [go.Bar(
        x = num_apps_in_category.index, # index = category name
        y = num_apps_in_category.values, # value = count
)]

plotly.offline.iplot(data)
Number of categories =  33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-distribution-of-app-ratings" tabindex="-1"><a class="header-anchor" href="#_5-distribution-of-app-ratings" aria-hidden="true">#</a> 5. Distribution of app ratings</h2><p>After having witnessed the market share for each category of apps, let&#39;s see how all these apps perform on an average. App ratings (on a scale of 1 to 5) impact the discoverability, conversion of apps as well as the company&#39;s overall brand image. Ratings are a key performance indicator of an app.</p>`,3),$=t("code",null,"4.17",-1),X={href:"http://apps.In",target:"_blank",rel:"noopener noreferrer"},J=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Average rating of apps
avg_app_rating = apps[&#39;Rating&#39;].mean()
print(&#39;Average app rating = &#39;, avg_app_rating)

# Distribution of apps according to their ratings
data = [go.Histogram(
        x = apps[&#39;Rating&#39;]
)]

# Vertical dashed line to indicate the average app rating
layout = {&#39;shapes&#39;: [{
              &#39;type&#39; :&#39;line&#39;,
              &#39;x0&#39;: avg_app_rating,
              &#39;y0&#39;: 0,
              &#39;x1&#39;: avg_app_rating,
              &#39;y1&#39;: 1000,
              &#39;line&#39;: { &#39;dash&#39;: &#39;dashdot&#39;}
          }]
          }

plotly.offline.iplot({&#39;data&#39;: data, &#39;layout&#39;: layout})
Average app rating =  4.173243045387994
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-size-and-price-of-an-app" tabindex="-1"><a class="header-anchor" href="#_6-size-and-price-of-an-app" aria-hidden="true">#</a> 6. Size and price of an app</h2><p>Let&#39;s now examine app size and app price. For size, if the mobile app is too large, it may be difficult and/or expensive for users to download. Lengthy download times could turn users off before they even experience your mobile app. Plus, each user&#39;s device has a finite amount of disk space. For price, some users expect their apps to be free or inexpensive. These problems compound if the developing world is part of your target market; especially due to internet speeds, earning power and exchange rates.</p><p>How can we effectively come up with strategies to size and price our app?</p><ul><li>Does the size of an app affect its rating?</li><li>Do users really care about system-heavy apps or do they prefer light-weighted apps?</li><li>Does the price of an app affect its rating?</li><li>Do users always prefer free apps over paid apps?</li></ul>`,5),K={href:"http://10.In",target:"_blank",rel:"noopener noreferrer"},Z=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%matplotlib inline
import seaborn as sns
sns.set_style(&quot;darkgrid&quot;)
import warnings
warnings.filterwarnings(&quot;ignore&quot;)

# Select rows where both &#39;Rating&#39; and &#39;Size&#39; values are present (ie. the two values are not null)
apps_with_size_and_rating_present = apps[(~apps[&#39;Rating&#39;].isnull()) &amp; (~apps[&#39;Size&#39;].isnull())]

# Subset for categories with at least 250 apps
large_categories = apps_with_size_and_rating_present.groupby(&#39;Category&#39;).filter(lambda x: len(x) &gt;= 250)

# Plot size vs. rating
plt1 = sns.jointplot(x = large_categories[&#39;Size&#39;], y = large_categories[&quot;Rating&quot;])

# Select apps whose &#39;Type&#39; is &#39;Paid&#39;
paid_apps = apps_with_size_and_rating_present[apps_with_size_and_rating_present[&#39;Type&#39;] == &#39;Paid&#39;]

# Plot price vs. rating
plt2 = sns.jointplot(x = paid_apps[&#39;Price&#39;], y = paid_apps[&#39;Rating&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.hanjiaming.com.cn/2022/05/31/3e0b857a360e4.png" alt="1653976520999.png" tabindex="0" loading="lazy"><figcaption>1653976520999.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2022/05/31/256c6a9e32f67.png" alt="1653976542786.png" tabindex="0" loading="lazy"><figcaption>1653976542786.png</figcaption></figure><h2 id="_7-relation-between-app-category-and-app-price" tabindex="-1"><a class="header-anchor" href="#_7-relation-between-app-category-and-app-price" aria-hidden="true">#</a> 7. Relation between app category and app price</h2><p>So now comes the hard part. How are companies and developers supposed to make ends meet? What monetization strategies can companies use to maximize profit? The costs of apps are largely based on features, complexity, and platform.</p><p>There are many factors to consider when selecting the right pricing strategy for your mobile app. It is important to consider the willingness of your customer to pay for your app. A wrong price could break the deal before the download even happens. Potential customers could be turned off by what they perceive to be a shocking cost, or they might delete an app they’ve downloaded after receiving too many ads or simply not getting their money&#39;s worth.</p>`,6),Q=t("em",null,"Medical and Family",-1),ee={href:"http://20.In",target:"_blank",rel:"noopener noreferrer"},te=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import matplotlib.pyplot as plt
fig, ax = plt.subplots()
fig.set_size_inches(15, 8)

# Select a few popular app categories
popular_app_cats = apps[apps.Category.isin([&#39;GAME&#39;, &#39;FAMILY&#39;, &#39;PHOTOGRAPHY&#39;,
                                            &#39;MEDICAL&#39;, &#39;TOOLS&#39;, &#39;FINANCE&#39;,
                                            &#39;LIFESTYLE&#39;,&#39;BUSINESS&#39;])]

# Examine the price trend by plotting Price vs Category
ax = sns.stripplot(x = popular_app_cats[&#39;Price&#39;], y = popular_app_cats[&#39;Category&#39;], jitter=True, linewidth=1)
ax.set_title(&#39;App pricing trend across categories&#39;)

# Apps whose Price is greater than 200
apps_above_200 = popular_app_cats[popular_app_cats[&#39;Price&#39;] &gt; 200]
apps_above_200[[&#39;Category&#39;, &#39;App&#39;, &#39;Price&#39;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Out[184]:</p><table><thead><tr><th></th><th>Category</th><th>App</th><th>Price</th></tr></thead><tbody><tr><td>3327</td><td>FAMILY</td><td>most expensive app (H)</td><td>399.99</td></tr><tr><td>3465</td><td>LIFESTYLE</td><td>💎 I&#39;m rich</td><td>399.99</td></tr><tr><td>3469</td><td>LIFESTYLE</td><td>I&#39;m Rich - Trump Edition</td><td>400.00</td></tr><tr><td>4396</td><td>LIFESTYLE</td><td>I am rich</td><td>399.99</td></tr><tr><td>4398</td><td>FAMILY</td><td>I am Rich Plus</td><td>399.99</td></tr><tr><td>4399</td><td>LIFESTYLE</td><td>I am rich VIP</td><td>299.99</td></tr><tr><td>4400</td><td>FINANCE</td><td>I Am Rich Premium</td><td>399.99</td></tr><tr><td>4401</td><td>LIFESTYLE</td><td>I am extremely Rich</td><td>379.99</td></tr><tr><td>4402</td><td>FINANCE</td><td>I am Rich!</td><td>399.99</td></tr><tr><td>4403</td><td>FINANCE</td><td>I am rich(premium)</td><td>399.99</td></tr><tr><td>4406</td><td>FAMILY</td><td>I Am Rich Pro</td><td>399.99</td></tr><tr><td>4408</td><td>FINANCE</td><td>I am rich (Most expensive app)</td><td>399.99</td></tr><tr><td>4410</td><td>FAMILY</td><td>I Am Rich</td><td>389.99</td></tr><tr><td>4413</td><td>FINANCE</td><td>I am Rich</td><td>399.99</td></tr><tr><td>4417</td><td>FINANCE</td><td>I AM RICH PRO PLUS</td><td>399.99</td></tr><tr><td>8763</td><td>FINANCE</td><td>Eu Sou Rico</td><td>394.99</td></tr><tr><td>8780</td><td>LIFESTYLE</td><td>I&#39;m Rich/Eu sou Rico/أنا غني/我很有錢</td><td>399.99</td></tr></tbody></table><figure><img src="https://pic.hanjiaming.com.cn/2022/05/31/d26a63e000222.png" alt="1653976565530.png" tabindex="0" loading="lazy"><figcaption>1653976565530.png</figcaption></figure><h2 id="_8-filter-out-junk-apps" tabindex="-1"><a class="header-anchor" href="#_8-filter-out-junk-apps" aria-hidden="true">#</a> 8. Filter out &quot;junk&quot; apps</h2><p>It looks like a bunch of the really expensive apps are &quot;junk&quot; apps. That is, apps that don&#39;t really have a purpose. Some app developer may create an app called <em>I Am Rich Premium</em> or <em>most expensive app (H)</em> just for a joke or to test their app development skills. Some developers even do this with malicious intent and try to make money by hoping people accidentally click purchase on their app in the store.</p>`,6),ne={href:"http://visualization.In",target:"_blank",rel:"noopener noreferrer"},ie=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Select apps priced below $100
apps_under_100 = popular_app_cats[popular_app_cats[&#39;Price&#39;] &lt; 100]

fig, ax = plt.subplots()
fig.set_size_inches(15, 8)

# Examine price vs category with the authentic apps (apps_under_100)
ax = sns.stripplot(x = &#39;Price&#39;, y = &#39;Category&#39;, data = apps_under_100, jitter = True, linewidth = 1)
ax.set_title(&#39;App pricing trend across categories after filtering for junk apps&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Out[186]:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Text(0.5, 1.0, &#39;App pricing trend across categories after filtering for junk apps&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://pic.hanjiaming.com.cn/2022/05/31/8d2fedec37aa3.png" alt="1653976586013.png" tabindex="0" loading="lazy"><figcaption>1653976586013.png</figcaption></figure><h2 id="_9-popularity-of-paid-apps-vs-free-apps" tabindex="-1"><a class="header-anchor" href="#_9-popularity-of-paid-apps-vs-free-apps" aria-hidden="true">#</a> 9. Popularity of paid apps vs free apps</h2><p>For apps in the Play Store today, there are five types of pricing strategies: free, freemium, paid, paymium, and subscription. Let&#39;s focus on free and paid apps only. Some characteristics of free apps are:</p><ul><li>Free to download.</li><li>Main source of income often comes from advertisements.</li><li>Often created by companies that have other products and the app serves as an extension of those products.</li><li>Can serve as a tool for customer retention, communication, and customer service.</li></ul><p>Some characteristics of paid apps are:</p><ul><li>Users are asked to pay once for the app to download and use it.</li><li>The user can&#39;t really get a feel for the app before buying it.</li></ul><p>Are paid apps installed as much as free apps? It turns out that paid apps have a relatively lower number of installs than free apps, though the difference is not as stark as I would have expected!In [188]:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>trace0 = go.Box(
    # Data for paid apps
    y = apps[apps[&#39;Type&#39;] == &#39;Paid&#39;][&#39;Installs&#39;],
    name = &#39;Paid&#39;
)

trace1 = go.Box(
    # Data for free apps
    y = apps[apps[&#39;Type&#39;] == &#39;Free&#39;][&#39;Installs&#39;],
    name = &#39;Free&#39;
)

layout = go.Layout(
    title = &quot;Number of downloads of paid apps vs. free apps&quot;,
    yaxis = dict(title = &quot;Log number of downloads&quot;,
                type = &#39;log&#39;,
                autorange = True)
)

# Add trace0 and trace1 to a list for plotting
data = [trace0, trace1]
plotly.offline.iplot({&#39;data&#39;: data, &#39;layout&#39;: layout})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/05/31/7e709a9c4de42.png" alt="1653976600375.png" style="zoom:33%;"><h2 id="_10-sentiment-analysis-of-user-reviews" tabindex="-1"><a class="header-anchor" href="#_10-sentiment-analysis-of-user-reviews" aria-hidden="true">#</a> 10. Sentiment analysis of user reviews</h2><p>Mining user review data to determine how people feel about your product, brand, or service can be done using a technique called sentiment analysis. User reviews for apps can be analyzed to identify if the mood is positive, negative or neutral about that app. For example, positive words in an app review might include words such as &#39;amazing&#39;, &#39;friendly&#39;, &#39;good&#39;, &#39;great&#39;, and &#39;love&#39;. Negative words might be words like &#39;malware&#39;, &#39;hate&#39;, &#39;problem&#39;, &#39;refund&#39;, and &#39;incompetent&#39;.</p><p>By plotting sentiment polarity scores of user reviews for paid and free apps, we observe that free apps receive a lot of harsh comments, as indicated by the outliers on the negative y-axis. Reviews for paid apps appear never to be extremely negative. This may indicate something about app quality, i.e., paid apps being of higher quality than free apps on average. The median polarity score for paid apps is a little higher than free apps, thereby syncing with our previous observation.</p>`,15),ae={href:"http://ourselves.In",target:"_blank",rel:"noopener noreferrer"},se=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Load user_reviews.csv
reviews_df = pd.read_csv(&#39;datasets/user_reviews.csv&#39;)

# Join the two dataframes
merged_df = pd.merge(apps, reviews_df, on = &quot;App&quot;)

# Drop NA values from Sentiment and Review columns
merged_df = merged_df.dropna(subset = [&#39;Sentiment&#39;, &#39;Review&#39;])

sns.set_style(&#39;ticks&#39;)
fig, ax = plt.subplots()
fig.set_size_inches(11, 8)

# User review sentiment polarity for paid vs. free apps
ax = sns.boxplot(x = &#39;Type&#39; y = Sentiment_Polarity, data = ...)
ax.set_title(&#39;Sentiment Polarity Distribution&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/05/31/03faadc0366db.png" alt="1653976623243.png" style="zoom:33%;"><p>Ref. The Guidance and data source are from Datacamp.</p>`,3);function de(re,oe){const n=d("ExternalLinkIcon");return r(),o("div",null,[p,t("p",null,[e("Attachment: "),t("a",c,[e("Click me"),i(n)])]),u,v,m,h,t("ul",null,[b,t("li",null,[g,e(": contains 100 reviews for each app, "),t("a",f,[e("most helpful first"),i(n)]),e(". The text in each review has been pre-processed and attributed with three new features: Sentiment (Positive, Negative or Neutral), Sentiment Polarity and Sentiment Subjectivity.")])]),_,t("p",null,[e("It is also always a good practice to print a summary of your dataframe after completing data cleaning. We will use the "),y,e(" method to acheive "),t("a",w,[e("this.In"),i(n)]),e(" [174]:")]),x,t("p",null,[e("From the previous task we noticed that "),I,e(" and "),k,e(" were categorized as "),P,e(" data type (and not "),S,e(" or "),A,e(") as we would like. This is because these two columns originally had mixed input types: digits and special characters. To know more about Pandas data types, read "),t("a",T,[e("this"),i(n)]),e(".")]),t("p",null,[e("The four features that we will be working with most frequently henceforth are "),j,e(", "),q,e(", "),R,e(" and "),E,e(". While "),L,e(" and "),C,e(" are both "),z,e(" (i.e. purely numerical data types), we still need to work on "),F,e(" and "),N,e(" to make them "),t("a",M,[e("numeric.In"),i(n)]),e(" [176]:")]),B,t("p",null,[e("We will see that there are "),D,e(" unique app categories present in our dataset. "),G,e(" and "),O,e(" apps have the highest market prevalence. Interestingly, "),V,e(", "),Y,e(" and "),U,e(" apps are also at the "),t("a",H,[e("top.In"),i(n)]),e(" [178]:")]),W,t("p",null,[e("From our research, we found that the average volume of ratings across all app categories is "),$,e(". The histogram plot is skewed to the left indicating that the majority of the apps are highly rated with only a few exceptions in the low-rated "),t("a",X,[e("apps.In"),i(n)]),e(" [180]:")]),J,t("p",null,[e("We find that the majority of top rated apps (rating over 4) range from 2 MB to 20 MB. We also find that the vast majority of apps price themselves under $"),t("a",K,[e("10.In"),i(n)]),e(" [182]:")]),Z,t("p",null,[e("Different categories demand different price ranges. Some apps that are simple and used daily, like the calculator app, should probably be kept free. However, it would make sense to charge for a highly-specialized medical app that diagnoses diabetic patients. Below, we see that "),Q,e(" apps are the most expensive. Some medical apps extend even up to $80! All game apps are reasonably priced below $"),t("a",ee,[e("20.In"),i(n)]),e(" [184]:")]),te,t("p",null,[e("Let's filter out these junk apps and re-do our "),t("a",ne,[e("visualization.In"),i(n)]),e(" [186]:")]),ie,t("p",null,[e("In this notebook, we analyzed over ten thousand apps from the Google Play Store. We can use our findings to inform our decisions should we ever wish to create an app "),t("a",ae,[e("ourselves.In"),i(n)]),e(" [190]:")]),se])}const ce=s(l,[["render",de],["__file","App-Market-on-Google-Play.html.vue"]]);export{ce as default};
