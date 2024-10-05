import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as n,b as s,d as e,e as t}from"./app-f3bc6681.js";const l={},u=t('<h1 id="import-data" tabindex="-1"><a class="header-anchor" href="#import-data" aria-hidden="true">#</a> Import Data</h1><h2 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件" aria-hidden="true">#</a> 导入文件</h2><h3 id="flat-file" tabindex="-1"><a class="header-anchor" href="#flat-file" aria-hidden="true">#</a> Flat file</h3><p><code>battledeath.xlsx</code> is not a flat because it is a spreadsheet consisting of many sheets, not a single table.</p><p>DB is not a file</p><h3 id="pickled-file" tabindex="-1"><a class="header-anchor" href="#pickled-file" aria-hidden="true">#</a> Pickled file</h3><p>There are a number of datatypes that cannot be saved easily to flat files, such as lists and dictionaries. If you want your files to be human readable, you may want to save them as text files in a clever manner. JSONs, which you will see in a later chapter, are appropriate for Python dictionaries.</p>',7),r={href:"https://en.wikipedia.org/wiki/Serialization",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>In this exercise, you&#39;ll import the <code>pickle</code> package, open a previously pickled data structure from a file and load it.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import pickle package</span>
<span class="token keyword">import</span> pickle

<span class="token comment"># Open pickle file and load data: d</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;data.pkl&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    d <span class="token operator">=</span> pickle<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>

<span class="token comment"># Print d</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>

<span class="token comment"># Print datatype of d</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> csv</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>movies <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;tmdb_movies.csv&#39;</span><span class="token punctuation">,</span> index_col<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
medals <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;medals_by_country_2016.csv&#39;</span><span class="token punctuation">,</span> index_col<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> nrows <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> header <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment">#读前5行，原文件中没有column name</span>
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span> comment<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">,</span> na_values<span class="token operator">=</span><span class="token string">&#39;Nothing&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 设定分隔符号，注释，na时的填入值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xlsx" tabindex="-1"><a class="header-anchor" href="#xlsx" aria-hidden="true">#</a> xlsx</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import pandas</span>
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Assign spreadsheet filename: file</span>
<span class="token builtin">file</span> <span class="token operator">=</span><span class="token string">&#39;battledeath.xlsx&#39;</span>

<span class="token comment"># Load spreadsheet: xls</span>
xls <span class="token operator">=</span> pd<span class="token punctuation">.</span>ExcelFile<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>

<span class="token comment"># Print sheet names</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>xls<span class="token punctuation">.</span>sheet_names<span class="token punctuation">)</span>

<span class="token comment"># Load a sheet into a DataFrame by name: df1</span>
df1 <span class="token operator">=</span> xls<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&#39;2004&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Print the head of the DataFrame df1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df1<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Load a sheet into a DataFrame by index: df2</span>
df2 <span class="token operator">=</span> xls<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment"># Print the head of the DataFrame df2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df2<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
Parse the first sheet by index. In doing so, skip the first row of data and name the columns &#39;Country&#39; and &#39;AAM due to War (2002)&#39; using the argument names. The values passed to skiprows and names all need to be of type list.
&quot;&quot;&quot;</span>

<span class="token comment"># Parse the first sheet and rename the columns: df1</span>
df1 <span class="token operator">=</span> xls<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> skiprows<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Country&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;AAM due to War (2002)&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Print the head of the DataFrame df1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df1<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
Parse the second sheet by index. In doing so, parse only the first column with the usecols parameter, skip the first row and rename the column &#39;Country&#39;. The argument passed to usecols also needs to be of type list.
&quot;&quot;&quot;</span>

<span class="token comment"># Parse the first column of the second sheet and rename the column: df2</span>
df2 <span class="token operator">=</span> xls<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> usecols<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> skiprows<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;Country&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Print the head of the DataFrame df2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df2<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xls" tabindex="-1"><a class="header-anchor" href="#xls" aria-hidden="true">#</a> xls</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import package</span>
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Read in all sheets of Excel file: xls</span>
xls <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_excel<span class="token punctuation">(</span>url<span class="token punctuation">,</span>sheet_name <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token comment"># 如果要读取所有sheet，必须指定sheet_name = null</span>

<span class="token comment"># Print the sheetnames to the shell</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>xls<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Print the head of the first sheet (using its name, NOT its index)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>xls<span class="token punctuation">[</span><span class="token string">&quot;1700&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sas7bdat" tabindex="-1"><a class="header-anchor" href="#sas7bdat" aria-hidden="true">#</a> sas7bdat</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import sas7bdat package</span>
<span class="token keyword">from</span> sas7bdat <span class="token keyword">import</span> SAS7BDAT

<span class="token comment"># Save file to a DataFrame: df_sas</span>
<span class="token keyword">with</span> SAS7BDAT<span class="token punctuation">(</span><span class="token string">&#39;sales.sas7bdat&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    df_sas <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>to_data_frame<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Print head of DataFrame</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df_sas<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># Plot histogram of DataFrame features (pandas and pyplot already imported)</span>
pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>df_sas<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;P&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dta" tabindex="-1"><a class="header-anchor" href="#dta" aria-hidden="true">#</a> dta</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_stata<span class="token punctuation">(</span><span class="token string">&#39;disarea.dta&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="hdf5" tabindex="-1"><a class="header-anchor" href="#hdf5" aria-hidden="true">#</a> HDF5</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import packages</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> h5py

<span class="token comment"># Assign filename: file</span>
<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token string">&quot;LIGO_data.hdf5&quot;</span>

<span class="token comment"># Load file: data</span>
data <span class="token operator">=</span> h5py<span class="token punctuation">.</span>File<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Print the datatype of the loaded file</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Print the keys of the file</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> data<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

output<span class="token punctuation">:</span>
<span class="token operator">&lt;</span>script<span class="token punctuation">.</span>py<span class="token operator">&gt;</span> output<span class="token punctuation">:</span>
    <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;h5py._hl.files.File&#39;</span><span class="token operator">&gt;</span>
    meta
    quality
    strain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Get the HDF5 group: group</span>
group <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">&#39;strain&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># Check out keys of group</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> group<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

<span class="token comment"># Set variable equal to time series data: strain</span>
strain <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">&#39;strain&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;Strain&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

<span class="token comment"># Set number of time points to sample: num_samples</span>
num_samples <span class="token operator">=</span> <span class="token number">10000</span>

<span class="token comment"># Set time vector</span>
time <span class="token operator">=</span> np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">/</span>num_samples<span class="token punctuation">)</span>

<span class="token comment"># Plot data</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>time<span class="token punctuation">,</span> strain<span class="token punctuation">[</span><span class="token punctuation">:</span>num_samples<span class="token punctuation">]</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;GPS Time (s)&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;strain&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="matlab" tabindex="-1"><a class="header-anchor" href="#matlab" aria-hidden="true">#</a> matlab</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import package</span>
<span class="token keyword">import</span> scipy<span class="token punctuation">.</span>io

<span class="token comment"># Load MATLAB file: mat</span>
filename <span class="token operator">=</span> <span class="token string">&#39;albeck_gene_expression.mat&#39;</span>
mat <span class="token operator">=</span> scipy<span class="token punctuation">.</span>io<span class="token punctuation">.</span>loadmat<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>

<span class="token comment"># Print the datatype type of mat</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>mat<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Print the keys of the MATLAB dictionary</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mat<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Print the type of the value corresponding to the key &#39;CYratioCyt&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>mat<span class="token punctuation">[</span><span class="token string">&#39;CYratioCyt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Print the shape of the value corresponding to the key &#39;CYratioCyt&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>shape<span class="token punctuation">(</span>mat<span class="token punctuation">[</span><span class="token string">&#39;CYratioCyt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Subset the array and plot it</span>
data <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token string">&#39;CYratioCyt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;time (min.)&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;normalized fluorescence (measure of expression)&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="with-sql" tabindex="-1"><a class="header-anchor" href="#with-sql" aria-hidden="true">#</a> With sql</h2><h3 id="workflow-of-sql-querying" tabindex="-1"><a class="header-anchor" href="#workflow-of-sql-querying" aria-hidden="true">#</a> Workflow of SQL querying</h3><ul><li>Import packages and functions</li><li>Create the database engine</li><li>Connect to the engine</li><li>Query the database</li><li>Save query results to a DataFrame</li><li>Close the connection</li></ul><h3 id="使用-sqlalchemy" tabindex="-1"><a class="header-anchor" href="#使用-sqlalchemy" aria-hidden="true">#</a> 使用 SQLAlchemy</h3><p>以SQLAlchemy链接Sqlite为例</p><p>SQLAlchemy 支持 sqlite,mysql,PostgreSQL</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> sqlalchemy <span class="token keyword">import</span> create_engine
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

engine <span class="token operator">=</span> create_engine<span class="token punctuation">(</span><span class="token string">&#39;sqlite:///Northwind.sqlite&#39;</span><span class="token punctuation">)</span>
con <span class="token operator">=</span> engine<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span>

rs <span class="token operator">=</span> con<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM Orders&quot;</span><span class="token punctuation">)</span>

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>rs<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment"># Set the DataFrame&#39;s column names</span>
df<span class="token punctuation">.</span>columns <span class="token operator">=</span> rs<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#指定column name</span>

con<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用with实现自动关闭</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Open engine in context manager</span>
<span class="token comment"># Perform query and save results to DataFrame: df</span>
<span class="token keyword">with</span> engine<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> con<span class="token punctuation">:</span>
    rs <span class="token operator">=</span> con<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT LastName,Title FROM Employee&quot;</span><span class="token punctuation">)</span>
    df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>rs<span class="token punctuation">.</span>fetchmany<span class="token punctuation">(</span>size <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    df<span class="token punctuation">.</span>columns <span class="token operator">=</span> rs<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token comment"># Print the length of the DataFrame df</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Print the head of the DataFrame df</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询table_name</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Save the table names to a list: table_names</span>
table_name <span class="token operator">=</span> engine<span class="token punctuation">.</span>table_name<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span>script<span class="token punctuation">.</span>py<span class="token operator">&gt;</span> output<span class="token punctuation">:</span>
    <span class="token punctuation">[</span><span class="token string">&#39;Album&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Artist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Customer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Employee&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Genre&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Invoice&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;InvoiceLine&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MediaType&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Playlist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PlaylistTrack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Track&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用JOIN</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rs <span class="token operator">=</span> con<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT Title,Name FROM Album INNER JOIN Artist on Album.ArtistID == Artist.ArtistID&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用pandas-sqlalchemy" tabindex="-1"><a class="header-anchor" href="#使用pandas-sqlalchemy" aria-hidden="true">#</a> 使用Pandas + sqlalchemy</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import packages</span>
<span class="token keyword">from</span> sqlalchemy <span class="token keyword">import</span> create_engine
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Create engine: engine</span>
engine <span class="token operator">=</span> create_engine<span class="token punctuation">(</span><span class="token string">&quot;sqlite:///Chinook.sqlite&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Execute query and store records in DataFrame: df</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_sql_query<span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM Album&quot;</span><span class="token punctuation">,</span> engine<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：不需要 open connection, 自动将结果DF化，包含标题，不需要手动关闭连接。</p><h2 id="with-internet" tabindex="-1"><a class="header-anchor" href="#with-internet" aria-hidden="true">#</a> With Internet</h2><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3><h4 id="get-using-pandas" tabindex="-1"><a class="header-anchor" href="#get-using-pandas" aria-hidden="true">#</a> get using pandas</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import packages</span>
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Assign url of file: url</span>
url <span class="token operator">=</span> <span class="token string">&#39;https://s3.amazonaws.com/assets.datacamp.com/production/course_1606/datasets/winequality-red.csv&#39;</span>

<span class="token comment"># Read file into a DataFrame: df</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span>url<span class="token punctuation">,</span>sep <span class="token operator">=</span> <span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Print the head of the DataFrame</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-using-urlretrieve" tabindex="-1"><a class="header-anchor" href="#get-using-urlretrieve" aria-hidden="true">#</a> get using urlretrieve</h4><p>功能: <strong>Save file locally</strong>, 相当于下载目标URL内容</p><p>可以将get 得到的内容保存到本地</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import package</span>
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">import</span> urlretrieve

<span class="token comment"># Import pandas</span>
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Assign url of file: url</span>
url<span class="token operator">=</span> <span class="token string">&#39;https://s3.amazonaws.com/assets.datacamp.com/production/course_1606/datasets/winequality-red.csv&#39;</span>

<span class="token comment"># Save file locally </span>
urlretrieve<span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token string">&quot;winequality-red.csv&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Read file into a DataFrame and print its head</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&#39;winequality-red.csv&#39;</span><span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-using-urlopen-request" tabindex="-1"><a class="header-anchor" href="#get-using-urlopen-request" aria-hidden="true">#</a> get using urlopen,Request</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import packages</span>
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">import</span> urlopen<span class="token punctuation">,</span>Request

<span class="token comment"># Specify the url</span>
url <span class="token operator">=</span> <span class="token string">&quot;https://campus.datacamp.com/courses/1606/4135?ex=2&quot;</span>

<span class="token comment"># This packages the request: request </span>
<span class="token comment"># 打包</span>
request <span class="token operator">=</span> Request<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment"># Sends the request and catches the response: response</span>
<span class="token comment"># 发送后接收</span>
response <span class="token operator">=</span> urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span>

<span class="token comment"># Print the datatype of response</span>
<span class="token comment"># 打印对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 结果是   &lt;class &#39;http.client.HTTPResponse&#39;&gt;</span>

<span class="token comment"># Be polite and close the response!</span>
response<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印内容</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Extract the response: html</span>
html <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Print the html</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-using-requests" tabindex="-1"><a class="header-anchor" href="#get-using-requests" aria-hidden="true">#</a> get using requests</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import package</span>
<span class="token keyword">import</span> requests

<span class="token comment"># Specify the url: url</span>
url <span class="token operator">=</span> <span class="token string">&quot;http://www.datacamp.com/teach/documentation&quot;</span>

<span class="token comment"># Packages the request, send the request and catch the response: r</span>
<span class="token comment"># 特别注意这里的 requests.get 不是 get, 而是request</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment"># Extract the response: text</span>
text <span class="token operator">=</span> r<span class="token punctuation">.</span>text

<span class="token comment"># Print the html</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="beautifulsoup" tabindex="-1"><a class="header-anchor" href="#beautifulsoup" aria-hidden="true">#</a> BeautifulSoup</h3><h4 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h4><ul><li>Parse and extract structured data from HTML</li><li>Make tag soup beautiful and extract information</li></ul><h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> Html</h4><p><strong>Mix of unstructured and structured data</strong></p><ul><li>Structured data <ul><li>Has pre-dedined data model, or</li><li>Organized in a defined manner</li></ul></li><li>Unstructured data: neither of these properties</li></ul><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import packages</span>
<span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup <span class="token comment">#注意大小写</span>

<span class="token comment"># Specify url: url</span>
url <span class="token operator">=</span> <span class="token string">&quot;https://www.python.org/~guido/&quot;</span>

<span class="token comment"># Package the request, send the request and catch the response: r</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">#容易写成request</span>

<span class="token comment"># Extracts the response as html: html_doc</span>
html_doc <span class="token operator">=</span> r<span class="token punctuation">.</span>text

<span class="token comment"># Create a BeautifulSoup object from the HTML: soup</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_doc<span class="token punctuation">)</span> <span class="token comment"># 注意大小写</span>

<span class="token comment"># Get the title of Guido&#39;s webpage: guido_title</span>
guido_title <span class="token operator">=</span> soup<span class="token punctuation">.</span>title

<span class="token comment"># Get Guido&#39;s text: guido_text</span>
guido_text <span class="token operator">=</span> soup<span class="token punctuation">.</span>text

<span class="token comment"># Prettify the BeautifulSoup object: pretty_soup</span>
pretty_soup <span class="token operator">=</span> soup<span class="token punctuation">.</span>prettify<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Print the response</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pretty_soup<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="findurl" tabindex="-1"><a class="header-anchor" href="#findurl" aria-hidden="true">#</a> Findurl</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Find all &#39;a&#39; tags (which define hyperlinks): a_tags</span>
a_tags <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Print the URLs to the shell</span>
<span class="token keyword">for</span> link <span class="token keyword">in</span> a_tags<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output:

pics.html
    pics.html
    http://www.washingtonpost.com/wp-srv/business/longterm/microsoft/stories/1998/raymond120398.htm
    images/df20000406.jpg
    http://neopythonic.blogspot.com/2016/04/kings-day-speech.html
    http://www.python.org
    Resume.html
    Publications.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apis" tabindex="-1"><a class="header-anchor" href="#apis" aria-hidden="true">#</a> APIs</h2><p>API 即获取信息的通用接口。</p><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Load JSON: json_data</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;a_movie.json&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> json_file<span class="token punctuation">:</span>
    json_data <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span>json_file<span class="token punctuation">)</span>

<span class="token comment"># Print each key-value pair in json_data</span>
<span class="token keyword">for</span> k <span class="token keyword">in</span> json_data<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span><span class="token punctuation">,</span> json_data<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过url" tabindex="-1"><a class="header-anchor" href="#通过url" aria-hidden="true">#</a> 通过URL</h3>`,63),k={href:"http://www.omdbapi.com/?t=hackers",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"http - making an HTTP request",-1),v={href:"http://www.omdbapi.com",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,[s("?t=hackers "),n("ul",null,[n("li",null,"Query string"),n("li",null,"Return data for a movie with title (t) ‘Hackers’")])],-1),h=t(`<img src="https://pic.hanjiaming.com.cn/2022/02/06/791b4f6c5b913.png" alt="1644107817060.png" style="zoom:50%;"><figure><img src="https://pic.hanjiaming.com.cn/2022/02/06/9ffb0c1cb8eba.png" alt="1644107851926.png" tabindex="0" loading="lazy"><figcaption>1644107851926.png</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import requests package</span>
<span class="token keyword">import</span> requests

<span class="token comment"># Assign URL to variable: url</span>
url <span class="token operator">=</span> <span class="token string">&#39;http://www.omdbapi.com/?apikey=72bc447a&amp;t=the+social+network&#39;</span>

<span class="token comment"># Package the request, send the request and catch the response: r</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment"># Print the text of the response</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token operator">&lt;</span>script<span class="token punctuation">.</span>py<span class="token operator">&gt;</span> output<span class="token punctuation">:</span>
    <span class="token punctuation">{</span><span class="token string">&quot;Title&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;The Social Network&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Year&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2010&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Rated&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;PG-13&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Released&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;01 Oct 2010&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Runtime&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;120 min&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Genre&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Biography, Drama&quot;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用requests 以JSON格式解码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Package the request, send the request and catch the response: r</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment"># Decode the JSON data into a dictionary: json_data</span>
json_data <span class="token operator">=</span> r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Print each key-value pair in json_data</span>
<span class="token keyword">for</span> k <span class="token keyword">in</span> json_data<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span><span class="token punctuation">,</span> json_data<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-twetter-api" tabindex="-1"><a class="header-anchor" href="#example-twetter-api" aria-hidden="true">#</a> Example: Twetter API</h3><p>The package <code>tweepy</code> is great at handling all the Twitter API OAuth Authentication details for you. All you need to do is pass it your authentication credentials. In this interactive exercise, we have created some mock authentication credentials.</p><ul><li>Import the package <code>tweepy</code>.</li><li>Pass the parameters <code>consumer_key</code> and <code>consumer_secret</code> to the function <code>tweepy.OAuthHandler()</code>.</li><li>Complete the passing of OAuth credentials to the OAuth handler <code>auth</code> by applying to it the method <code>set_access_token()</code>, along with arguments <code>access_token</code> and <code>access_token_secret</code>.</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import package</span>
<span class="token keyword">import</span> tweepy

<span class="token comment"># Store OAuth authentication credentials in relevant variables</span>
access_token <span class="token operator">=</span> <span class="token string">&quot;1092294848-aHN7DcRP9B4VMTQIhwqOYiB14YkW92fFO8k8EPy&quot;</span>
access_token_secret <span class="token operator">=</span> <span class="token string">&quot;X4dHmhPfaksHcQ7SCbmZa2oYBBVSD2g8uIHXsp5CTaksx&quot;</span>
consumer_key <span class="token operator">=</span> <span class="token string">&quot;nZ6EA0FxZ293SxGNg8g8aP0HM&quot;</span>
consumer_secret <span class="token operator">=</span> <span class="token string">&quot;fJGEodwe3KiKUnsYJC3VRndj7jevVvXbK2D5EiJ2nehafRgA6i&quot;</span>

<span class="token comment"># Pass OAuth details to tweepy&#39;s OAuth handler</span>
auth <span class="token operator">=</span> tweepy<span class="token punctuation">.</span>OAuthHandler<span class="token punctuation">(</span>consumer_key<span class="token punctuation">,</span> consumer_secret<span class="token punctuation">)</span>
set_access_token <span class="token operator">=</span> auth<span class="token punctuation">.</span>set_access_token<span class="token punctuation">(</span>access_token<span class="token punctuation">,</span>access_token_secret<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),g=n("code",null,"MyStreamListener",-1),y={href:"https://gist.github.com/hugobowne/18f1c0c0709ed1a52dc5bcd462ac69f4",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>Your task is to create the <code>Stream</code>object and to filter tweets according to particular keywords.</p><ul><li>Create your <code>Stream</code> object with authentication by passing <code>tweepy.Stream()</code> the authentication handler <code>auth</code> and the Stream listener <code>l</code>;</li><li>To filter Twitter streams, pass to the <code>track</code> argument in <code>stream.filter()</code> a list containing the desired keywords <code>&#39;clinton&#39;</code>, <code>&#39;trump&#39;</code>, <code>&#39;sanders&#39;</code>, and <code>&#39;cruz&#39;</code>.</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Initialize Stream listener</span>
l <span class="token operator">=</span> MyStreamListener<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Create your Stream object with authentication</span>
stream <span class="token operator">=</span> tweepy<span class="token punctuation">.</span>Stream<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> l<span class="token punctuation">)</span>

<span class="token comment"># Filter Twitter Streams to capture data by the keywords:</span>
stream<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;clinton&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;trump&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;sanders&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;cruz&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Assign the filename <code>&#39;tweets.txt&#39;</code> to the variable <code>tweets_data_path</code>.</li><li>Initialize <code>tweets_data</code> as an empty list to store the tweets in.</li><li>Within the <code>for</code> loop initiated by <code>for line in tweets_file:</code>, load each tweet into a variable, <code>tweet</code>, using <code>json.loads()</code>, then append <code>tweet</code> to <code>tweets_data</code> using the <code>append()</code> method.</li><li>Hit submit and check out the keys of the first tweet dictionary printed to the shell.</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import package</span>
<span class="token keyword">import</span> json

<span class="token comment"># String of path to file: tweets_data_path</span>
tweets_data_path <span class="token operator">=</span> <span class="token string">&#39;tweets.txt&#39;</span>

<span class="token comment"># Initialize empty list to store tweets: tweets_data</span>
tweets_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment"># Open connection to file</span>
tweets_file <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>tweets_data_path<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Read in tweets and store in list: tweets_data</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> tweets_file<span class="token punctuation">:</span>
    tweet <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    tweets_data<span class="token punctuation">.</span>append<span class="token punctuation">(</span>tweet<span class="token punctuation">)</span>

<span class="token comment"># Close connection to file</span>
tweets_file<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Print the keys of the first tweet dict</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tweets_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Import package</span>
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token comment"># Build DataFrame of tweet texts and languages</span>
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>tweets_data<span class="token punctuation">,</span> columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;lang&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Initialize list to store tweet counts</span>
clinton<span class="token punctuation">,</span> trump<span class="token punctuation">,</span> sanders<span class="token punctuation">,</span> cruz <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment"># Iterate through df, counting the number of tweets in which</span>
<span class="token comment"># each candidate is mentioned</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> row <span class="token keyword">in</span> df<span class="token punctuation">.</span>iterrows<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    clinton <span class="token operator">+=</span> word_in_text<span class="token punctuation">(</span><span class="token string">&#39;clinton&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    trump <span class="token operator">+=</span> word_in_text<span class="token punctuation">(</span><span class="token string">&#39;trump&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    sanders <span class="token operator">+=</span> word_in_text<span class="token punctuation">(</span><span class="token string">&#39;sanders&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    cruz <span class="token operator">+=</span> word_in_text<span class="token punctuation">(</span><span class="token string">&#39;cruz&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Import packages</span>
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns

<span class="token comment"># Set seaborn style</span>
sns<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>color_codes<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># Create a list of labels:cd</span>
cd <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;clinton&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;trump&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sanders&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cruz&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># Plot the bar chart</span>
ax <span class="token operator">=</span> sns<span class="token punctuation">.</span>barplot<span class="token punctuation">(</span> y <span class="token operator">=</span> <span class="token punctuation">[</span>clinton<span class="token punctuation">,</span> trump<span class="token punctuation">,</span> sanders<span class="token punctuation">,</span> cruz<span class="token punctuation">]</span><span class="token punctuation">,</span>x <span class="token operator">=</span> cd<span class="token punctuation">)</span>
ax<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>ylabel<span class="token operator">=</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="os" tabindex="-1"><a class="header-anchor" href="#os" aria-hidden="true">#</a> OS</h2><h3 id="listdir" tabindex="-1"><a class="header-anchor" href="#listdir" aria-hidden="true">#</a> listdir</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">import</span> os
In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> wd <span class="token operator">=</span> os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>wd<span class="token punctuation">)</span>
  
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;titanic.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;battledeath.xlsx&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function w(_,x){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[s("However, if you merely want to be able to import them into Python, you can "),n("a",r,[s("serialize"),e(a)]),s(" them. All this means is converting the object into a sequence of bytes, or a bytestream.")]),d,n("p",null,[s("'"),n("a",k,[s("http://www.omdbapi.com/?t=hackers"),e(a)]),s("'")]),n("ul",null,[m,n("li",null,[n("a",v,[s("www.omdbapi.com"),e(a)]),s(" - querying the OMDB API")]),b]),h,n("p",null,[s("Now that you have set up your authentication credentials, it is time to stream some tweets! We have already defined the tweet stream listener class, "),g,s(", just as Hugo did in the introductory video. You can find the code for the tweet stream listener class "),n("a",y,[s("here"),e(a)]),s(".")]),f])}const S=p(l,[["render",w],["__file","import-data.html.vue"]]);export{S as default};
