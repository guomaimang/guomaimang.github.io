---
article: false
date: 2021-05-01
---

# LLVM编译器系列简介

## LLVM

LLVM项目是模块化和可重用的编译器及工具链技术的集合。尽管名称如此，LLVM与传统虚拟机关系不大。名称“ LLVM”本身不是缩写。它是项目的全名。

LLVM Core库提供了现代的，独立于源和目标的优化器，并为许多流行的CP Us（以及一些不常见的CP Us）提供了代码生成支持。这些库是围绕一种称为LLVM中间件的明确指定的代码表示构建的表示形式（“ LLVM IR”）。 LLVM核心库有充分的文档记录，特别容易发明自己的语言（或移植现有的编译器）以将LLVM用作优化器和代码生成器。

Clang是“ LLVM本机” C / C ++ / Objective-C编译器，旨在提供惊人的快速编译，极其有用的错误和警告消息，并为构建出色的源代码级工具提供平台。 Clang静态分析器 和 clang -tidy是可自动在代码中查找错误的工具，并且是可以使用Clang前端作为库来解析C / C ++代码的工具的很好的示例。

## Clang

clang 是 LLVM的C语言家族前端

Clang项目为[LLVM](https://www.llvm.org/) 项目的C语言家族（C，C ++，Objective C / C ++，OpenCL，CUDA和RenderScript）中的语言提供了语言前端和工具基础结构。提供了与GCC兼容的编译器驱动程序（`clang`）和与MSVC兼容的编译器驱动程序（`clang-cl.exe`）。您可以立即[获取并构建](https://clang.llvm.org/get_started.html)源。

### 特点和目标

该项目的一些目标包括：

**[最终用户功能](https://clang.llvm.org/features.html#enduser)**：

- 快速编译和低内存使用
- 富有表现力的诊断（[示例](https://clang.llvm.org/diagnostics.html)）
- GCC兼容性

**[实用程序和应用程序](https://clang.llvm.org/features.html#applications)**：

- 基于模块化库的架构
- 支持各种客户端（重构，静态分析，代码生成等）
- 允许与IDE紧密集成
- 使用LLVM'Apache 2'许可证

**[内部设计与实现](https://clang.llvm.org/features.html#design)**：

- 真实的，生产质量的编译器
- 一个简单易学的代码库
- 适用于C，Objective C，C ++和Objective C ++的单个统一解析器
- 符合C / C ++ / ObjC及其变体

### 为什么选Clang

新前端的开发是从对编译器的需求开始的，该编译器需要更好的诊断，与IDE的更好集成，与商业产品兼容的许可证以及易于开发和维护的灵活编译器。所有这些都是在可以满足这些需求的新前端上开展工作的动机。

## LLDB

LLDB是下一代高性能调试器。它是作为一组可重用的组件构建的，这些组件高度利用了较大的LLVM Project中的现有库，例如Clang表达式解析器和LLVM反汇编程序。

LLDB是macOS上Xcode中的默认调试器，并支持在台式机，iOS设备和模拟器上调试C，Objective-C和C ++。

## 引用

- https://clang.llvm.org/
- https://llvm.org/