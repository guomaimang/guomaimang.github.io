---
article: false
date: 2024-10-08
index: true
order: 3
headerDepth: 2
---

# Kotlin

Kotlin是Jetpack Compose的主要编程语言。

它是一种现代的、功能强大的编程语言，具有简洁的语法和强大的功能特性，如扩展函数、协程和DSL（领域特定语言）。

在一个 Android 项目中同时使用 Kotlin 和 Java 是完全可行的。

Android Studio 和 Gradle 都支持在同一个项目中混合使用这两种语言。以下是如何在同一个项目中使用 Kotlin 和 Java 的步骤：

## 配置 Gradle 脚本

确保你的项目已经配置好 Kotlin 插件。在 `build.gradle` 文件中（通常是项目的根目录下和 `app` 模块下的两个 `build.gradle` 文件），你需要确保有以下配置：

**项目的根目录下的 `build.gradle` 文件：**

```json
buildscript {
    ext.kotlin_version = '1.8.0' // 确保使用最新的 Kotlin 版本
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath "com.android.tools.build:gradle:8.0.0"
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}
```

**`app` 模块下的 `build.gradle` 文件：**

```json
plugins {
    id 'com.android.application'
    id 'org.jetbrains.kotlin.android'
}

android {
    compileSdk 34

    defaultConfig {
        applicationId "com.example.myapp"
        minSdk 21
        targetSdk 34
        versionCode 1
        versionName "1.0"

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    implementation 'androidx.core:core-ktx:1.10.1'
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.android.material:material:1.10.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
    testImplementation 'junit:junit:4.13.2'
    androidTestImplementation 'androidx.test.ext:junit:1.1.5'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.5.1'
}

```

## 添加文件

- 你可以在项目的 `src/main/java` 目录下添加 Kotlin 文件。例如，右键点击 `src/main/java` 目录，选择 `New > Kotlin File/Class`，然后创建一个新的 Kotlin 类或文件。
- 同样，你可以在项目的 `src/main/java` 目录下添加 Java 文件。例如，右键点击 `src/main/java` 目录，选择 `New > Java Class`，然后创建一个新的 Java 类。

## 混合使用 Kotlin 和 Java 代码

你可以在 Kotlin 文件中调用 Java 代码，反之亦然。Kotlin 和 Java 之间的互操作性非常强。

### 在 Java 中调用 Kotlin 代码

```kotlin
// Kotlin 文件（MyKotlinClass.kt）
package com.example.myapp

class MyKotlinClass {
    fun greet(): String {
        return "Hello from Kotlin"
    }
}
```

```java
// Java 文件（MainActivity.java）
package com.example.myapp;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        MyKotlinClass myKotlinClass = new MyKotlinClass();
        String greeting = myKotlinClass.greet();
        System.out.println(greeting); // 输出：Hello from Kotlin
    }
}
```

### 在 Kotlin 中调用 Java 代码

```java
// Java 文件（MyJavaClass.java）
package com.example.myapp;

public class MyJavaClass {
    public String greet() {
        return "Hello from Java";
    }
}

```

```Kotlin
// Kotlin 文件（MainActivity.kt）
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
```











