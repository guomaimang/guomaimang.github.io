---
article: false
date: 2022-12-03
index: true
order: 1
headerDepth: 2

---

# App Structure

## Introduction

Android应用程序由多个组件组成，包括活动（Activity）、服务（Service）、广播接收器（Broadcast Receiver）和内容提供者（Content Provider）。其中，活动是与用户交互的主要组件，而布局则定义了活动的UI。

- **Android Manifest file**: Android清单文件（AndroidManifest.xml）是项目的核心文件之一。
  - 它定义了应用的基本信息，如包名、组件（活动、服务、广播接收器等）以及权限声明。
  - 每个Android应用都必须包含一个清单文件。
- **Java source code**：Java源代码文件包含应用的业务逻辑。
  - 所有的活动、服务和其他组件都是通过Java类来实现的。
  - 源代码文件通常位于项目的`src/main/java`目录中。
- **Drawables**：
  - Drawables是指可绘制资源，如图像、矢量图、形状等。
  - 它们通常存储在`res/drawable`目录中，用于定义应用的视觉元素。
- **Layout and menu files**：
  - 布局文件（layout）和菜单文件（menu）是用XML定义的，用于描述用户界面布局和菜单结构。
  - 布局文件通常存储在`res/layout`目录中，而菜单文件存储在`res/menu`目录中。
- **Color list**：
  - 颜色列表文件（colors.xml）定义应用中使用的颜色值
  - 它们通常存储在`res/values/colors.xml`文件中，便于在应用中统一管理颜色资源。
- **String / array resources**：
  - 字符串和数组资源文件（strings.xml和arrays.xml）用于定义应用中使用的字符串和数组。
  - 它们通常存储在`res/values`目录中，有助于实现应用的本地化和资源管理。
- **Gradle configuration files**：
  - Gradle配置文件（build.gradle）定义了项目的构建配置，如依赖项、编译选项和插件。
  - 每个项目至少有一个顶级的build.gradle文件和一个模块级的build.gradle文件。

## AndroidManifest.xml

Specify the following essential information about the app:

- The **Java package name**
- The **components** of the app (e.g. Activities and services in the app)
- The **permissions** the app asks for from the user
- Other information about the **libraries** the app is using

![CleanShot 2024-10-06 at 15.53.53@2x.png](https://pic.hanjiaming.com.cn/2024/10/06/1aa19a3260cc1.png)

![1728201483986.png](https://pic.hanjiaming.com.cn/2024/10/06/149814093da8c.png)

## Assets

Sometimes you might want to include some data files in your app so that you can use the data inside your app

- Create a folder called “**assets**” under app/src/main
- Examples of data files:
  - Text files
  - HTML files (e.g. for display in WebViews)
  - CSV files (e.g. for initializing a local database)

## UI Components

Android offers many pre-defined UI

components that you can use

- TextView
- EditText
- Button
- ImageView / ImageButton
- Checkbox
- Radio Button
- Toggle Button
- Spinner
- Picker

### Layouts (ViewGroups)

在Android中，**View是用户界面的基本构建块**，而ViewGroup是容纳其他View（包括ViewGroup）的容器。

布局（Layouts）就是一种特殊的ViewGroup，用于组织和排列UI组件。

- Layouts defines the **visual structure** of the app
- Layouts can be declared in two different ways:
  - Declare UI elements in an **XML file**
  - Instantiate layout elements in the **Java code** (runtime)

![CleanShot 2024-10-06 at 16.23.06@2x.png](https://pic.hanjiaming.com.cn/2024/10/06/dac5ed58cc684.png)

Android布局文件通常存储在`res/layout`目录下，以XML格式编写。这些文件定义了UI组件的层次结构和属性，便于在活动中引用和使用。

Layouts in Android:

- **Linear Layout**：线性布局，按垂直或水平方向排列子元素。
- **Relative Layout**：相对布局，子元素相对于父元素或其他子元素进行排列。
- **Constraint Layout**：约束布局，通过约束条件来定位和调整子元素的位置和大小。
  - 现代默认布局系统，旨在创建强大且平面的视图层次结构
  - 视图是根据同级视图和父布局之间的关系（或约束）来布局的。
  - 约束是指UI组件之间的位置和对齐关系。

- Frame Layout：帧布局，所有子元素都堆叠在一个单独的框架中，通常用于简单的布局。

![1728203023674.png](https://pic.hanjiaming.com.cn/2024/10/06/687966b926a5d.png)

::: tip Constraint Layout 与 性能

传统的布局系统如LinearLayout和RelativeLayout可能会导致嵌套过深，影响性能。而Constraint Layout通过使用约束来定义组件的位置和对齐关系，避免了深度嵌套，从而创建扁平的视图层次结构，提高了性能。

在Constraint Layout中，视图是根据兄弟视图和父布局之间的关系（或约束）来布局的。每个视图的位置和对齐关系是通过设置约束来确定的。约束可以是视图之间的边缘对齐、中心对齐、相对位置等。这种方式使得布局更加灵活和直观。

:::

### Dialogs

对话框是小窗口，会在活动中弹出，以向用户提供警告或提示用户进行输入。对话框通常用于紧急情况或需要用户立即注意的情况。

话框的类型有多种，常见的包括：

1. AlertDialog：警告对话框，用于向用户显示重要信息或警告，并提供确认或取消按钮。例如，删除文件前的确认对话框
2. DatePickerDialog：日期选择对话框，允许用户选择日期。通常用于需要用户输入日期的场景，例如设置生日或预定日期。
3. TimePickerDialog：时间选择对话框，允许用户选择时间。常用于需要用户输入时间的场景，例如设置闹钟或安排会议。

## Activity

在Android开发中，活动（Activity）是应用程序的一个基本组件，代表一个单独的屏幕。

- 每个 Activity 通常包含 一个或多个用户 **界面元素**。
- 对话框通常**在 Activity 中弹出**，提示用户进行某些操作或提供信息。
- Activity is a fundamental class in Android
  - Activity是Android中的一个基本类。
  - Activity类本身就是用Java编写的。
  - 它表示应用程序中的一个单独的屏幕，负责处理用户界面和用户交互。
  - 每个Activity都有自己的布局文件，定义了它的用户界面。
- Each page in Android is an Activity
  - 当用户在应用程序中导航时，他们实际上是在不同的Activity之间切换
  - 每个Activity可以独立地管理其生命周期和用户界面。

Activity的生命周期由一系列回调方法（如onCreate()、onStart()、onResume()等）管理。

- 每个Activity都有自己的“生命周期”。
- 这意味着Activity从创建到销毁的整个过程由一系列生命周期方法管理。这些方法包括 onCreate()、onStart()、onResume()、onPause()、onStop() 和 onDestroy()。

<img src="https://pic.hanjiaming.com.cn/2024/10/06/97d691996e8d9.png" alt="1728204470058.png" style="zoom: 50%;" />

**Activity launched**：当Activity被启动时，进入生命周期的第一个阶段。

1. **onCreate()**：系统调用此方法来进行Activity的初始化操作，例如设置用户界面布局、初始化数据等。这个方法在Activity的整个生命周期中只会调用一次。
2. **onStart()**：当Activity即将变得对用户可见时，系统会调用此方法。此时Activity已经进入“已启动”状态，但还未进入前台。

**Activity running**：Activity处于运行状态，用户可以与之交互。

1. **onPause()**：当系统即将启动另一个Activity时，系统会调用此方法。此时Activity仍然可见，但失去焦点，用户无法与之交互。你应该在这里保存任何需要保存的数据。
2. **onStop()**：当Activity对用户不再可见时，系统会调用此方法。此时Activity进入“已停止”状态。你可以在这里释放不再需要的资源。
3. **onRestart()**：如果用户重新导航回这个Activity，系统会调用此方法。此时Activity从“已停止”状态重新启动，然后调用`onStart()`和`onResume()`方法。

**App process killed**：如果系统需要回收内存，可能会杀掉Activity所在的进程。

1. **onDestroy()**：当Activity被销毁前，系统会调用此方法。这个方法可能由于用户主动销毁Activity或系统为了节省内存而销毁Activity。

## Intents

Intent 是 Android中的消息传递机制，用于在不同组件之间传递数据和请求操作。

- Intent可以启动 Activity、Service 和 BroadcastReceiver。
- Intent分为显式 Intent 和 隐式 Intent，
  - 「显式」Explicit Intent：明确指定要启动的组件（例如一个Activity）。
    - 这意味着开发者明确知道要启动哪个组件，**并在 Intent中直接指定该组件的类名。**
    - 例如，在Activity A中，当用户点击按钮时，启动Activity B。这是通过创建一个 Explicit Intent，并在Intent 中指定 Activity B的类名来实现的。
  - 「隐式」 Implicit Intent：你声明要执行的操作，让Android或用户决定调用哪个应用或组件。
    - **隐式Intent只指定要执行的操作**，而不指定具体的目标组件。
    - 系统或用户将决定哪个组件可以处理这个Intent。
    - 例如，发送一条共享消息时，可以使用隐式Intent，系统会列出所有可以处理该操作的应用供用户选择。
    - 例如，在Activity A中，当用户点击按钮时，打开一个URL [http://www.cuhk.edu.hk](http://www.cuhk.edu.hk) 。这是通过创建一个Implicit Intent，并在 Intent 中指定ACTION_VIEW操作和URL数据来实现的。

To request an action to be performed:

- Start an activity (Either of your app or another app in Android)
  -  通过Intent对象，可以启动一个新的Activity。
  - 例如，用户点击按钮后，应用程序可以启动一个新的界面来显示详细信息。
- Start a service (background running process)
  - 通过Intent对象，可以启动一个后台Service。
  - 例如，应用程序可以启动一个Service来在后台下载文件，而不影响用户的其他操作。
- Deliver a broadcast
  - 通过Intent对象，可以发送一个广播消息。
  - 例如，当应用程序下载完成文件后，可以发送一个广播通知其他组件。

::: details Example

假设你有一个应用程序，需要从主屏幕跳转到一个显示用户详细信息的屏幕。

- 这个问题涉及启动一个新的Activity，并且可能需要传递一些数据（例如用户ID）到新的Activity。
- 这个问题需要使用显式Intent来启动新的Activity，并传递数据。

```java
// 创建Intent对象
Intent intent = new Intent(MainActivity.this, UserDetailActivity.class);

// 传递数据
intent.putExtra("USER_ID", userId);

// 启动Activity
startActivity(intent);
```

假设 userId 为 12345，传递数据后，UserDetailActivity 可以通过以下代码接收数据：

```java
Intent intent = getIntent();
int userId = intent.getIntExtra("USER_ID", -1);
```

此时，userId 的值为12345。

:::

Intents are **messaging objects** for requesting an action. Three fundamental use cases:

- 启动一个Activity: Activity是应用中的一个屏幕，可以使用startActivity()或startActivityForResult()方法来调用。
- 启动一个Service: Service是一个用于执行后台操作的组件，没有用户界面，可以使用startService()方法来调用。
- To deliver a broadcast: 广播是一种消息，系统中的任何应用都可以接收，可以使用sendBroadcast()方法来调用。

Intent对象包含的信息用于让Android系统决定应该启动哪个应用和组件。Intent对象是Android系统中不同组件之间进行通信的桥梁。

通常，**一个Intent包含四个主要的信息部分**。这四个部分共同决定了Intent的行为和目标组件:

- Component name
- Action

### Component name

- 组件名称是指要启动的组件。例如，`hk.edu.cuhk.ie.iems3321.w4.MainActivity` 表示具体的Activity。
- 组件名称是可选的，但如果你想创建一个显式的Intent，那么它是必须的。显式Intent明确指定了目标组件。
- When this is omitted「省略的」, the Android system will determine which app and component it should invoke, based on the action parameter you provided「如果省略了组件名称，Android系统将根据你提供的动作参数来确定应该调用哪个应用和组件。这样就变成了隐式Intent。」

### Action

Action is **A string that specifies the action to perform**

动作是一个字符串，用于指定要执行的操作

- 你可以在Intent中指定自己的动作。这允许你定义自定义的行为。
- Intent类提供了一组标准的动作，例如：
  - ACTION_VIEW: For displaying some information to the user
  - ACTION_SEND: For sending or sharing the data or information through another app
- If it is an explicit intent, the action is optional













::: info URI和MIME类型

- URI（Uniform Resource Identifier）是一种通用的资源标识符，用于标识数据资源。
- MIME（Multipurpose Internet Mail Extensions）类型用于表示数据的类型，例如“text/plain”表示纯文本。理解URI和MIME类型有助于理解Intent中的数据传递。

:::
