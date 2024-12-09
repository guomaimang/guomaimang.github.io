---
article: false
date: 2024-10-08
index: true
order: 2
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
4. **App process killed**：如果系统需要回收内存，可能会杀掉Activity所在的进程。
5. **onDestroy()**：当Activity被销毁前，系统会调用此方法。这个方法可能由于用户主动销毁Activity或系统为了节省内存而销毁Activity。

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

通常，**一个 Intent 包含四个主要的信息部分**。这四个部分共同决定了Intent 的行为和目标组件:

- Component name
- Action
- Data
- Extras

### Component

#### Component Name

- 组件名称是指要启动的组件。例如，`hk.edu.cuhk.ie.iems3321.w4.MainActivity` 表示具体的Activity。
- 组件名称是可选的，但如果你想创建一个显式的Intent，那么它是必须的。显式Intent明确指定了目标组件。
- When this is omitted「省略的」, the Android system will determine which app and component it should invoke, based on the action parameter you provided「如果省略了组件名称，Android系统将根据你提供的动作参数来确定应该调用哪个应用和组件。这样就变成了隐式Intent。」

#### Action

Action is **A string that specifies the action to perform**

动作是一个字符串，用于指定要执行的操作

- 你可以在Intent中指定自己的动作。这允许你定义自定义的行为。
- Intent类提供了一组标准的动作，例如：
  - ACTION_VIEW: For displaying some information to the user
  - ACTION_SEND: For sending or sharing the data or information through another app
- If it is an explicit intent, the action is optional

#### Data

- The data component contains the Uniform Resource Identifier (URI) 「统一资源标识符（URI）」referring to the data and/or the MIME type 「MIME类型」 of that data
- The content is usually dependent on the action of the intent 「内容通常取决于Intent的动作」
  - eg. `ACTION_EDIT`应该伴随一个指向要编辑文件的URI。
- 要设置URI，调用`Intent.setData()`。
- 要设置MIME类型，调用`Intent.setType()`。
- 要同时设置URI和MIME类型，调用`Intent.setDataAndType()`。

#### Extras

Extras是键值对，用于将参数传递给要启动的Activity或服务。

- 使用`Intent.putExtra(key, value)`来设置要传递的参数
- Intent类定义了一些用于传递参数的标准键，例如：
  - EXTRA_SUBJECT
  - EXTRA_EMAIL
  - EXTRA_TITLE

::: details Example

假设你正在开发一个电子邮件应用，你需要使用Intent来启动一个新的Activity以显示电子邮件内容。

你需要传递电子邮件的主题、发件人和内容给新的Activity。

```java
// 创建Intent对象：
Intent emailIntent = new Intent(this, DisplayEmailActivity.class);

// 设置组件名称（显式Intent）
emailIntent.setComponent(new ComponentName("com.example.emailapp", "com.example.emailapp.DisplayEmailActivity"));

// 设置动作（可选）
emailIntent.setAction(Intent.ACTION_VIEW);

// 设置数据（URI和MIME类型）
emailIntent.setDataAndType(Uri.parse("content://com.example.emailprovider/emails/1"), "message/rfc822");

// 添加额外信息（键值对）
emailIntent.putExtra(Intent.EXTRA_SUBJECT, "Meeting Reminder");
emailIntent.putExtra(Intent.EXTRA_EMAIL, "john.doe@example.com");
emailIntent.putExtra(Intent.EXTRA_TEXT, "Don't forget our meeting at 10 AM tomorrow.");

// 启动Activity
startActivity(emailIntent);
```

:::

::: info URI和MIME类型

- URI（Uniform Resource Identifier）是一种通用的资源标识符，用于标识数据资源。
- MIME（Multipurpose Internet Mail Extensions）类型用于表示数据的类型，例如“text/plain”表示纯文本。理解URI和MIME类型有助于理解Intent中的数据传递。

:::

::: tip PendingIntent

PendingIntent是一种特殊的Intent，允许其他应用在未来某个时间点代表你的应用执行某个操作。

::: 

### The App Chooser

当你使用隐式Intent时，系统会根据Intent的描述来决定应该启动哪个应用程序。隐式Intent不指定目标组件，而是描述了要执行的操作。

如果只有一个应用程序能够处理该Intent，系统会立即启动该应用程序。例如，如果你发送一个打开网页的Intent，并且设备上只有一个浏览器应用程序，那么这个浏览器会被直接启动。

<img src="https://pic.hanjiaming.com.cn/2024/10/07/ee1cb9fcfb43f.png" alt="1_9GlRjKrab2n-B5tI0H0iQA.png" style="zoom:33%;" />

如果有多个应用程序能够处理该Intent，系统会显示一个“App Chooser”对话框，让用户选择使用哪个应用程序来完成操作。例如，如果你发送一个分享文本的Intent，设备上有多个应用程序（如邮件、消息、社交媒体应用）能够处理这个Intent，系统会显示一个选择对话框。

用户可以选择一个应用程序作为处理特定Intent的默认应用程序。例如，如果用户多次选择同一个应用程序来处理某个Intent，系统会提示用户是否要将这个应用程序设为默认。

如果你希望每次使用该Intent时都显示“App Chooser”对话框，可以使用下面的代码来实现。这段代码创建了一个Intent并强制显示选择对话框。

```java
Intent intent = new Intent(Intent.ACTION_SEND);
intent.setType("text/plain");
intent.putExtra(Intent.EXTRA_TEXT, "这是要分享的文本内容");

Intent chooser = Intent.createChooser(intent, "选择一个应用来分享文本");

try {
    startActivity(chooser);
} catch (ActivityNotFoundException e) {
    Toast.makeText(this, "没有应用程序可以分享文本", Toast.LENGTH_SHORT).show();
}
```

### Intent Filters

可以通过在 Android Manifest.xml 文件中声明 意图过滤器「Intent Filters」 来定义您的应用程序可以接收哪些 **隐式意图**。

Each `<intent-filter>` element should contain one or more of these three sub-elements： `<action>、<data> 和 <category>`

- `<action>` 元素指定了Intent的动作，例如"android.intent.action.VIEW"表示查看操作。
- `<data>` 
  - The URI scheme or the MIME type
  - 元素指定了 Intent的数据类型或数据的位置，
  - 例如"android:mimeType='text/plain'"表示纯文本类型的数据。
- `<category>` 
  - `<category>`：元素用于指定Intent的类别
  - 你至少必须包 含CATEGORY_DEFAULT 类别，CATEGORY_DEFAULT是一个常见的类别，表示这是一个标准的隐式Intent。

::: details Example

我们希望我们的应用能够接收其他应用发送的文本数据，例如从一个文本编辑器中发送的文本。

为了实现这一点，我们需要在AndroidManifest.xml文件中定义一个 `<intent-filter>`，使我们的应用能够接收ACTION_SEND类型的Intent，并且数据类型为"text/plain"。

在AndroidManifest.xml文件中添加以下代码：

```xml
<intent-filter>
    <action android:name="android.intent.action.SEND" />
    <category android:name="android.intent.category.DEFAULT" />
    <data android:mimeType="text/plain" />
</intent-filter>
```

当其他应用发送一个 `ACTION_SEND` 类型的 Intent，并且数据类型为"text/plain"时，我们的应用将能够接收并处理该 Intent。

另一个案例是，如下所示的 `<data>` 元素告诉 Android 该组件可以从网络检索视频数据以执行操作：

```xml
<intent-filter>
  
  	 <!-- 这里的动作是 android.intent.action.VIEW，表示应用可以处理“查看”操作。这通常用于浏览网页、查看图片、播放视频等操作 -->
     <action android:name="android.intent.action.VIEW"/>
  
     <data android:scheme="http" android:host="www.example.com"/>
  	 
     <!-- 这里的类别是 android.intent.category.DEFAULT。这是一个默认类别，表示这个意图过滤器可以处理默认的意图 -->
     <category android:name="android.intent.category.DEFAULT"/>
  
     <!-- 这里的类别是 android.intent.category.BROWSABLE。这个类别允许其他应用通过浏览器的方式来启动你的应用，例如从网页链接中启动 -->
     <category android:name="android.intent.category.BROWSABLE"/>
</intent-filter>
```

:::

## Jetpack Compose

Jetpack Compose 是一个用于构建原生 Android UI 的现代工具包「 modern toolkit」。

Jetpack Compose 是 Android Jetpack的一部分

- **Jetpack组件**：如LiveData、ViewModel、Room等，简化了Android开发。
- **Jetpack的目标**：提高开发效率、代码质量和应用性能。

传统Android开发中，UI是通过View和ViewGroup来构建的。

Jetpack Compose 通过减少代码量、提供强大的工具和直观的Kotlin API，简化并加速「accelerates」了Android上的UI开发。开发者可以用更少的代码实现更加复杂和灵活的UI。**Kotlin 是 Jetpack Compose的主要编程语言。**

Jetpack Compose与其他Jetpack库（如Navigation、LiveData、ViewModel等）紧密集成。

Jetpack Compose 现在是 Android Studio 中的默认“empty activity”。这意味着在创建新项目时，默认的模板会使用 Jetpack Compose 来构建UI。

Why is Jetpack Compose getting more popular?

- Declarative UI is cleaner, readable, and performant than Imperative UI.
- Compose allows you to do more with less code compared to XML.
  - 使用Compose可以用更少的代码实现更多功能，相比于使用XML布局文件。
  - Compose通过Kotlin代码直接描述UI，减少了冗余代码和XML文件的使用。
- Compose是直观的「Intuitive」，这意味着你只需要告诉Compose你想展示给用户什么。Compose会自动处理UI的更新和状态管理，使开发过程更加简单。
- Compose is compatible「兼容」 with all your existing code: you can call Compose code from Views and Views from Compose. Also integrated with many Jetpack Libraries.
- Compose improves your build time and APK size.

:::  tip 声明式UI vs 命令式UI

- 声明式UI 「Declarative UI」：这种方法强调描述UI应该是什么样子，而不是如何构建它。例如，Jetpack Compose和React都使用声明式UI。
- 命令式UI「Imperative UI」：这种方法强调逐步构建UI的过程。例如，传统的Android开发使用XML布局文件和Java/Kotlin代码来逐步构建UI。

:::

In designing the UI, if you adopt the XML approach:

- 你需要学习ViewGroup（视图组）、视图组件等。这意味着你要理解如何使用各种布局容器（如LinearLayout、RelativeLayout）来组织和管理视图，以及如何使用基本的视图组件（如TextView、Button）来构建界面。
- 你需要学习RecyclerView，这是一个高级的视图组件，用于高效地显示大数据集。你需要理解如何创建适配器（Adapter）来绑定数据，如何定义视图持有者（ViewHolder）来缓存视图，以及如何管理RecyclerView的布局和动画。
- 你需要学习如何动态地创建消息对象。这意味着你需要在代码中根据需求生成视图对象，并将数据绑定到这些视图中，而不是在XML中预先定义所有视图。

However, if you adopt the compose approach:

- 你需要学习 LazyColumn 和消息UI/数据对象。LazyColumn是Compose中的一个组件，用于高效地显示列表数据。你需要理解如何使用LazyColumn来创建和管理列表项，以及如何将数据绑定到这些列表项中。
- 剩下的时间，你可以用来改进用户体验和构建额外的功能。Compose简化了UI开发流程，使得你可以将更多的精力放在优化用户体验和添加新功能上，而不是花费大量时间在学习和管理复杂的视图结构上。

`@Composable` 注解通知 Compose 编译器，带有此注解的函数旨在将数据转换为用户界面

`@Preview` 注解告诉 Android Studio 该可组合函数应显示在此文件的设计视图中。你可以在编辑时看到可组合预览的实时更新

### LazyColumn and LazyRow

在 Jetpack Compose 中，Column 和 Row 是两种基本的布局组件。

Column 垂直排列其子组件，而 Row 水平排列其子组件。虽然它们适用于少量固定数量的组件，但当需要显示大量数据时，使用这些布局可能会导致性能问题。

如果你需要显示大量项目（或长度未知的列表），使用像 Column 这样的布局会导致性能问题，因为所有项目都会被渲染和布局，不论它们是否可见。Column 会一次性渲染所有项目，这在项目数量较多时会导致内存消耗过大和界面卡顿。

Compose 提供了一组只渲染和布局视图端口内可见项目的组件，例如 LazyColumn 和 LazyRow。这意味着它们只会渲染当前屏幕上可见的项目，从而大幅提升性能。

LazyColumn 是一个垂直滚动的列表，它只会渲染和布局当前可见的项目。这与 Android 视图系统中的 RecyclerView 类似，但 LazyColumn 是 Jetpack Compose 的原生组件，使用起来更加简洁和高效。

在移动开发中，性能优化非常重要。使用 LazyColumn 和 LazyRow 可以显著减少内存使用和提高渲染速度，因为它们只会渲染当前可见的项目，而不是整个列表。

::: tip RecyclerView

RecyclerView 是 Android 视图系统中的一个组件，用于高效显示大量数据项。它通过重用视图来减少内存消耗和提高性能。LazyColumn 和 LazyRow 类似于 RecyclerView，但它们是 Jetpack Compose 的原生组件。

:::

### 记忆机制

在 Jetpack Compose 中，remember API 用于在重组期间保存状态。它确保在 UI 重新组合时，状态不会丢失。

理解 remember 的工作机制对于有效管理状态至关重要。

State in an app is any value that can change over time. For example:

- A blog post and associated comments: 博客文章的内容和评论是动态的，可能会随着用户的输入和交互而变化。
- Ripple animations on buttons that play when a user clicks them: 当用户点击按钮时播放的波纹动画。这种动画效果是动态的，取决于用户的操作。

组合函数「Composable functions」可以使用 remember API 将对象存储在内存中。remember 是 Jetpack Compose 中的一个函数，用于在重组期间保存状态。

由 remember 计算的值在初始组合期间存储在组合中，并在重新组合期间返回存储的值。这意味着在界面重新绘制时，状态不会丢失。

```
interface MutableState<T> : State<T> {
    override var value: T
}
```

这是一个接口定义，MutableState 是一个泛型接口，它继承自 State 接口，并重写了 value 属性。value 属性可以改变，是可变的状态。

There are three ways to declare a MutableState object in a composable

- `val mutableState = remember { mutableStateOf(default) }`

  使用 remember 和 mutableStateOf 函数创建一个可变状态对象。

- `var value by remember { mutableStateOf(default) }`

  使用 Kotlin 的委托属性语法和 remember 创建一个可变状态对象。

- `val (value, setValue) = remember { mutableStateOf(default) }`

  使用解构语法和 remember 创建一个可变状态对象。

































