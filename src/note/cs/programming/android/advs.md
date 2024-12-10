---
article: false
date: 2024-12-10
index: true
order: 12
headerDepth: 1

---

# Advanced Android

## Image Uploader

1. 请求互联网访问的使用权限
2. 更新 build.grade 和 libs.versions.toml 并同步
3. 设置与FastAPI连接的POST方法
4. 创建一个可序列化的数据模型：数据类 `PostModel(val data: String)`
5. 设计图片上传界面
6. 将Uri转换为位图，并将位图转换为字节数组，然后编码字节数组为字符串，并将数据模型发送到FastAPI

在FastAPI

- 创建数据模型
- 直接将byteArray保存到图像文件中

## Google Play Services

- 谷歌Play服务是一套为Android设备提供的云服务和API
- Allows you to integrate various services from Google into the mobile app
- 谷歌的一些服务包括
  - Location detection
  - Geocoding and reverse geo-coding
  - Maps API (e.g. navigation, street views)
  - Google Drive for cloud storage
  - Google Wallet for online payment

Accessing Google APIs

要访问各种Google API，您需要创建GoogleApi子类的一个实例。

- 它们自动管理连接到谷歌应用商店服务。
- 离线时排队请求。当有连接可用时按顺序执行。
- GoogleApi对象也易于创建，因此您可以根据需要实例化它们以访问Google服务。

要访问不需要 API 授权的服务，请获取该服务的客户端对象的实例，并将其传递给当前的 Context 或 Activity。

要访问需要API授权的服务，首先登录用户并请求权限。然后获取服务客户端对象的实例，将其传递给GoogleSignInAccount和当前的Context或Activity。

## Location Detection

位置检测是智能手机最常用的功能之一

- Maps, transportation and navigation
- Location-based social networking
- Tracking

手机可以利用多种数据源来检测位置

- GPS (Global Positioning System)
- Information of base stations (Cell ID) 
- Wi-Fi + IP Address

Android 提供简单的 API，通过结合来自不同来源的输入来返回用户的当前位置

- Android Framework's Location API (android.location) -> Not recommended for access location
- Google Location Services API (com.google.android.gms.location) ->  Preferred way to add location-awareness

如果您的应用需要使用位置服务，则需要请求用户的许可

<img src="https://pic.hanjiaming.com.cn/2024/12/11/5946e2a4676e7.png" alt="1733851912365.png" style="zoom:33%;" />

### Google Play Services Location APIs

<img src="https://pic.hanjiaming.com.cn/2024/12/11/53c4294096ab3.png" alt="1733851957170.png" style="zoom:33%;" />

### Set Up a Location Request

- 如果您的应用需要请求位置更新，设备需要启用相应的系统组件（例如GPS或Wi-Fi扫描）。
- 您的应用程序不是直接启用服务，而是指定要请求的参数。

<img src="https://pic.hanjiaming.com.cn/2024/12/11/306969b2ad924.png" alt="1733852016967.png" style="zoom:33%;" />

## Using Google Maps

您可以使用 Google Maps Android API 在您的应用中嵌入交互式地图

Google Maps functions include:

- 提供交互式地图，包括3D地图、卫星视图、地形视图、路线图等。
- 允许叠加不同的组件，例如标记、多边形等。
- 控制用户的视图，例如旋转、缩放、平移
- Street view

## Geocoding and Reverse Geocoding

这两个功能都可以通过使用Android中的Geocoder类来实现。

- Geocoding: Converting an address to a geographic location (latitude/longitude)
- Reverse Geocoding: Converting a geographic location (latitude/longitude) to an address

在移动应用程序中，您可能希望让用户输入地图上的位置，而不是获取当前位置。

- 考虑一个用于获取司机接送或食品配送投递的应用程序。
- 然后您需要将地点名称翻译成地理坐标（地理编码）。

在移动应用中，你可能需要将地理位置转换为街道地址（反向地理编码）。

- 例如，获取当前位置的名称，然后在网络上搜索附近的餐厅。
- 要使用反向地理编码，您需要一个精确的地理位置，因此您应该请求ACCESS_FINE_LOCATION权限。
- 您也可以使用Geocoder类来执行反向地理编码。

getFromLocation() 函数是阻塞的，可能需要几秒钟才能响应。

- 您不应该在UI线程上执行此操作。
- 相反，您应该使用其中一种异步访问方法，例如：
  - AsyncTask
  - 意图服务（IntentService）与结果接收器（ResultReceiver）或本地广播（LocalBroadcastManager）
  - Coroutine

## Gradle

Gradle 是 Android 应用程序的官方构建工具

- 它帮助您构建（编译）、测试、运行和打包您的应用程序
- 它通过Android Gradle插件集成到Android Studio中
- 也可以从命令行独立执行

Benefits of Gradle

- Configure and customize the build process
- 创建具有不同功能、设置或参数的同一项目下的不同版本的应用程序
- 轻松将第三方模块集成到您的应用程序中

## ProGuard

Pro Guard 是一个可以帮助您缩小、优化和混淆应用程序代码的工具, 它通过删除未使用的代码、使用语义上晦涩的名称重命名类、字段和方法来实现这一点.

Why?

- Creates an APK file with smaller size
- Makes the app more difficult to reverse engineer













































