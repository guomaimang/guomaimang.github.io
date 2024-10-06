---
article: true
date: 2022-12-03
index: true
order: 0
headerDepth: 2
category:
  - tech
---

# Android

Android 是一个基于Linux内核的操作系统。Android 是在 *Android* *Open Source* *Project*（AOSP）中开发的。这个项目是由谷歌领导的。

Android 操作系统可分为四个区域，如下图所示。 Android 应用程序开发人员通常使用上面的两个层来创建新的 Android 应用程序。

级别可以描述为：

- 应用程序: 包含应用程序，如浏览器、相机、图库、音乐和电话
- 应用程序框架: 允许与 Android 系统进行高级交互的 API
- Libraries and runtime: 多常见框架功能的库，如图形渲染、数据存储、网络浏览。还包含Android runtime，以及运行Android应用程序的核心Java库。
- Linux kernel - 底层硬件的通信层

## System Structure

Android操作系统的架构分为五层：

- 应用层
- 应用框架层
- 库层
- Android运行时层
- Linux内核层

每一层都有特定的功能和作用。例如，应用层包含了用户直接使用的应用程序，而应用框架层提供了开发这些应用程序所需的API。

<img src="https://pic.hanjiaming.com.cn/2022/10/21/abc5f24e86043.png" alt="1666285552943.png" style="zoom:50%;" />

## Application Components

App components 是 Android 应用程序的基本构件。每个组件都是一个入口点，系统或用户可以通过它进入你的应用程序。一些组件依赖于其他组件。

- Activities: 一个 activity 与用户互动的入口。它代表一个具有用户界面的单一屏幕。
- Services: 它是一个在后台「background」运行的组件，执行长期运行的操作或为远程进程执行工作。一个服务不提供一个用户界面。
- Broadcast receivers: broadcast receiver 是一个组件，它使系统能够在常规用户流之外向应用程序提供事件，使应用程序能够响应全系统的广播公告。
- Content providers: A content provider 管理一组共享的应用程序数据，你可以将这些数据存储在文件系统、SQLite数据库、网络上，或任何其他你的应用程序可以访问的持久性存储位置。

## The manifest file

在Android系统启动一个app组件之前，系统必须通过读取 app 的 manifest 文件Android Manifest.xml 来知道该组件存在。您的应用程序必须在此文件中声明其所有组件，该文件必须位于应用程序项目目录的根目录中。

The manifest 除了声明应用程序的组件外，还做了一些事情，比如说以下

- 识别应用程序需要的任何用户权限，如互联网访问或对用户联系人的读取访问。
- 根据应用程序使用的API，声明应用程序所需的最小API级别。
- 声明应用程序使用或需要的硬件和软件功能，如摄像头、蓝牙服务或多点触控屏幕。
- 声明应用程序需要链接的API库（除Android框架API外），如Google Maps库。
- 强烈建议您通过网站组件查看Android Manifest.xml中关于如何声明组件、声明组件功能和声明应用需求的解释和示例

## Development Environment

- 你需要一套工具来开发Android手机应用程序
- 注意到谷歌拥有所有需要集成到 Android Studio 中的工具，只需通过 https://developer.android.com/studio/index.html 下载即可
- 关于如何安装AS，你可以参考链接https://developer.android.com/studio/install.html 提供的视频教程（Win/Mac/Linux的说明）。
- 如果你的应用程序需要满足一些特殊的要求，你需要下载适当版本的JAVA（配置环境变量）或自己下载SDK。
- Android Studio official user guide for your reference: https://developer.android.com/studio/intro/index.html

## File description

The most frequently used are res, java, AndroidManifaest.xml and the build.gradle files(Moudule).

**res**：此文件夹将包含您的应用程序可能需要的所有资源（也称为外部数据文件）。它包含所有非代码资源，如 XML 布局、UI 字符串和位图图像，分为相应的子目录。有关所有可能的资源类型的更多信息，请参阅提供资源。

- res/drawable。这个文件夹将存放你可以在你的应用程序中使用的图像和动画文件。
- res/mipmap：用于不同启动器图标密度的可绘制文件。
  - 它已经包含了一个 "png "文件，该文件代表了一旦你的应用程序被安装，Android将使用的图标。
- res/layout: 这个文件夹将存放XML布局文件，应用程序可以用它来构建用户界面。
  - 它已经包含了一个叫做 "main.xml "的文件，它为你的 "HelloAndroid "活动类定义了用户界面。双击这个文件将打开Android UI编辑器，你可以用它来帮助生成XML布局文件。
- res/values: 这个文件夹将存放包含价值类型资源的文件，如字符串和整数常量。
  - 它已经包含了一个名为 "strings.xml "的文件。双击这个文件将打开Android资源编辑器。注意，那里已经有一个名为 "app_name "的字符串。如果你选择这个值，在编辑器的右侧你应该看到你在项目创建向导中输入的应用程序名称。你可以使用这个编辑器来为你的应用程序添加新的资源。

**AndroidManifest.xml**: 在安卓系统启动一个应用组件之前，系统必须通过读取应用的清单文件知道该组件的存在。你的应用必须在这个文件中声明它的所有组件，这个文件必须在应用项目目录的根部。更多信息请参考AndroidManifest.xml。

![1666330294841.png](https://pic.hanjiaming.com.cn/2022/10/21/f33364177a1a0.png)

- 这里的`<application>`...`<application>`标签包含了与应用程序相关的组件。属性`android:icon`将指向`res/drawable-hdpi`下可用的应用程序图标。该应用程序使用位于drawable文件夹中的名为`ic_launcher.png`的图片。
- `<activity>`标签用于指定一个活动，`android:name`属性指定活动子类的完全合格的类名，`android:label`属性指定一个字符串，作为活动的标签。你可以使用`<activity>`标签指定多个活动。
- `<intent-filter>`的`<action>`被命名为`android.intent.action.MAIN`，表示该活动是应用程序的入口。`<intent-filter>`的类别被命名为`android.intent.category.LAUNCHER`，表示该应用程序可以从设备的启动器图标中启动。
- `@string`指的是`strings.xml`文件中的字符串。因此，`@string/app_name`指的是`strings.xml`文件中定义的`app_name`字符串，也就是 "HelloAndroid"。类似的方式，其他字符串也会被填充到应用程序中。请注意，上面两个图有不同的标签分配。`@string/...`，它是一个引用变量，用来引用包含我们想要显示的文本的资源。在这种情况下，我们通过使用`@`符号，然后是资源的可变体类型（这是一个 "String"），然后是可变体的名称（这是 "app_name"）。
- 以下是您将在 `manifest` 中使用的标签列表，以指定不同的Android应用程序组件
  - `<activity>`elements for activities
  -  ` <service>` elements for services
  -  `<receiver>` elements for broadcast receivers
  -  `<provider>` elements for content providers

**Java**：这包含您项目的 .java 源文件。默认情况下，它包含一个 Main Activity.java(Hello Android) 源文件，该源文件具有一个在使用应用程序图标启动应用程序时运行的 activity 类。

- 这里，R.layout.activity_main指的是位于res/layout文件夹中的main.xml文件。onCreate()方法是activity被加载时的许多方法中的一个。

Build.gradle。这是一个自动生成的文件，其中包含编译SdkV版本、buildTools版本、applicationId、minSdkV版本、targetSdkV版本、versionCode和versionName。

UI 的 **XML** 布局已经被添加到 "res\layout\main.xml "中。虽然你可以使用Android布局编辑器来创建你的XML布局，但你也可以自己手动编码。让我们来看看这个文件。

- 双击文件 "main.xml" 。如果你的编辑器显示 "设计 "窗口，点击窗口底部的 "文本 "标签。

- 顶层标签，ConstraintLayout，它定义了这个文件将使用的布局风格。这个 "ConstraintLayout "是一个新功能，它非常适用于用视觉方式准备界面，但不适合用XML类型来写。因为ConstraintLayout的许多用法都是拖放小部件，仅用文字或一些静态图片来表达清楚太难。因此，有兴趣的同学可以自己去学习。在后面的实验中，我们仍然会使用传统的Layout来实现界面准备。

- 第二层标签，TextView，它定义了一个用于显示文本的UI元素。它有三个属性，"layout_width"、"layout_height "和 "text "来显示。

  WRAP_CONTENT意味着该视图要刚好大到足以包围其内容（加上填充）。而MATCH_PARENT意味着视图要和它的父节点一样大（减去padding）。

  注意到文本属性被设置为 "Hello World！"。注意到，如果它被设置为"@string/hello_world"，它是一个引用变量，用来引用包含我们想要显示的文本的资源。因此，@string/hello_world指的是strings.xml文件中定义的hello字符串，它可以是 "Hello World！"。

![1666331484856.png](https://pic.hanjiaming.com.cn/2022/10/21/a98b8b64a1a09.png)