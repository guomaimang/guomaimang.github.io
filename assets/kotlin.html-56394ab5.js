import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-f3c95e06.js";const i={},t=e(`<h1 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin</h1><p>Kotlin是Jetpack Compose的主要编程语言。</p><p>它是一种现代的、功能强大的编程语言，具有简洁的语法和强大的功能特性，如扩展函数、协程和DSL（领域特定语言）。</p><p>在一个 Android 项目中同时使用 Kotlin 和 Java 是完全可行的。</p><p>Android Studio 和 Gradle 都支持在同一个项目中混合使用这两种语言。以下是如何在同一个项目中使用 Kotlin 和 Java 的步骤：</p><h2 id="配置-gradle-脚本" tabindex="-1"><a class="header-anchor" href="#配置-gradle-脚本" aria-hidden="true">#</a> 配置 Gradle 脚本</h2><p>确保你的项目已经配置好 Kotlin 插件。在 <code>build.gradle</code> 文件中（通常是项目的根目录下和 <code>app</code> 模块下的两个 <code>build.gradle</code> 文件），你需要确保有以下配置：</p><p><strong>项目的根目录下的 <code>build.gradle</code> 文件：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>buildscript <span class="token punctuation">{</span>
    ext.kotlin_version = &#39;<span class="token number">1.8</span>.<span class="token number">0</span>&#39; <span class="token comment">// 确保使用最新的 Kotlin 版本</span>
    repositories <span class="token punctuation">{</span>
        google()
        mavenCentral()
    <span class="token punctuation">}</span>
    dependencies <span class="token punctuation">{</span>
        classpath <span class="token string">&quot;com.android.tools.build:gradle:8.0.0&quot;</span>
        classpath <span class="token string">&quot;org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>app</code> 模块下的 <code>build.gradle</code> 文件：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>plugins <span class="token punctuation">{</span>
    id &#39;com.android.application&#39;
    id &#39;org.jetbrains.kotlin.android&#39;
<span class="token punctuation">}</span>

android <span class="token punctuation">{</span>
    compileSdk <span class="token number">34</span>

    defaultConfig <span class="token punctuation">{</span>
        applicationId <span class="token string">&quot;com.example.myapp&quot;</span>
        minSdk <span class="token number">21</span>
        targetSdk <span class="token number">34</span>
        versionCode <span class="token number">1</span>
        versionName <span class="token string">&quot;1.0&quot;</span>

        testInstrumentationRunner <span class="token string">&quot;androidx.test.runner.AndroidJUnitRunner&quot;</span>
    <span class="token punctuation">}</span>

    buildTypes <span class="token punctuation">{</span>
        release <span class="token punctuation">{</span>
            minifyEnabled <span class="token boolean">false</span>
            proguardFiles getDefaultProguardFile(&#39;proguard-android-optimize.txt&#39;)<span class="token punctuation">,</span> &#39;proguard-rules.pro&#39;
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    implementation <span class="token string">&quot;org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version&quot;</span>
    implementation &#39;androidx.core<span class="token operator">:</span>core-ktx<span class="token operator">:</span><span class="token number">1.10</span>.<span class="token number">1</span>&#39;
    implementation &#39;androidx.appcompat<span class="token operator">:</span>appcompat<span class="token operator">:</span><span class="token number">1.6</span>.<span class="token number">1</span>&#39;
    implementation &#39;com.google.android.material<span class="token operator">:</span>material<span class="token operator">:</span><span class="token number">1.10</span>.<span class="token number">0</span>&#39;
    implementation &#39;androidx.constraintlayout<span class="token operator">:</span>constraintlayout<span class="token operator">:</span><span class="token number">2.1</span>.<span class="token number">4</span>&#39;
    testImplementation &#39;junit<span class="token operator">:</span>junit<span class="token operator">:</span><span class="token number">4.13</span>.<span class="token number">2</span>&#39;
    androidTestImplementation &#39;androidx.test.ext<span class="token operator">:</span>junit<span class="token operator">:</span><span class="token number">1.1</span>.<span class="token number">5</span>&#39;
    androidTestImplementation &#39;androidx.test.espresso<span class="token operator">:</span>espresso-core<span class="token operator">:</span><span class="token number">3.5</span>.<span class="token number">1</span>&#39;
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加文件" tabindex="-1"><a class="header-anchor" href="#添加文件" aria-hidden="true">#</a> 添加文件</h2><ul><li>你可以在项目的 <code>src/main/java</code> 目录下添加 Kotlin 文件。例如，右键点击 <code>src/main/java</code> 目录，选择 <code>New &gt; Kotlin File/Class</code>，然后创建一个新的 Kotlin 类或文件。</li><li>同样，你可以在项目的 <code>src/main/java</code> 目录下添加 Java 文件。例如，右键点击 <code>src/main/java</code> 目录，选择 <code>New &gt; Java Class</code>，然后创建一个新的 Java 类。</li></ul><h2 id="混合使用-kotlin-和-java-代码" tabindex="-1"><a class="header-anchor" href="#混合使用-kotlin-和-java-代码" aria-hidden="true">#</a> 混合使用 Kotlin 和 Java 代码</h2><p>你可以在 Kotlin 文件中调用 Java 代码，反之亦然。Kotlin 和 Java 之间的互操作性非常强。</p><h3 id="在-java-中调用-kotlin-代码" tabindex="-1"><a class="header-anchor" href="#在-java-中调用-kotlin-代码" aria-hidden="true">#</a> 在 Java 中调用 Kotlin 代码</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// Kotlin 文件（MyKotlinClass.kt）</span>
<span class="token keyword">package</span> com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>myapp

<span class="token keyword">class</span> MyKotlinClass <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> String <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string-literal singleline"><span class="token string">&quot;Hello from Kotlin&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Java 文件（MainActivity.java）</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>myapp</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>os<span class="token punctuation">.</span></span><span class="token class-name">Bundle</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">androidx<span class="token punctuation">.</span>appcompat<span class="token punctuation">.</span>app<span class="token punctuation">.</span></span><span class="token class-name">AppCompatActivity</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainActivity</span> <span class="token keyword">extends</span> <span class="token class-name">AppCompatActivity</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_main<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MyKotlinClass</span> myKotlinClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyKotlinClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> greeting <span class="token operator">=</span> myKotlinClass<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello from Kotlin</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-kotlin-中调用-java-代码" tabindex="-1"><a class="header-anchor" href="#在-kotlin-中调用-java-代码" aria-hidden="true">#</a> 在 Kotlin 中调用 Java 代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Java 文件（MyJavaClass.java）</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>myapp</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyJavaClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello from Java&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Kotlin line-numbers-mode" data-ext="Kotlin"><pre class="language-Kotlin"><code>// Kotlin 文件（MainActivity.kt）
package com.example.myapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val myJavaClass = MyJavaClass()
        val greeting = myJavaClass.greet()
        println(greeting) // 输出：Hello from Java
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[t];function o(p,c){return s(),a("div",null,l)}const u=n(i,[["render",o],["__file","kotlin.html.vue"]]);export{u as default};
