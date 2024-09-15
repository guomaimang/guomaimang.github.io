---
article: false
date: 2022-06-14
order: 1

---

# What is regression

- 探讨响应变量和一些解释变量关系的统计模型。
- 鉴于解释变量的数值，你可以预测响应变量的数值。

::: tip 术语

- Response variable (a.k.a. dependent variable)
  - The variable that you want to predict.
- Explanatory variables (a.k.a. independent variables)
  - The variables that explain how the response variable will change.

**Linear regression and logistic regression**

- Linear regression: The response variable is numeric.
- Logistic regression: The response variable is logical.
- Simple linear/logistic regression: There is only one explanatory variable.

:::

Python packages for regression:

- **statsmodels** & **scipy**: Optimized for insight (focus in this article)
- scikit-learn: Optimized for prediction (focus in other article)

**响应 (Response) = 确定性 (Deterministic) + 随机性 (Stochastic)**

**Response =（Constant + Predictors）+ Error**