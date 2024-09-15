---
article: false
date: 2022-07-22
order: 1

---

# Supervised Learning sk-learn

## Before doing

- Requirements
  - 无缺失值
  - 数据为数字格式
  - 数据存储在 pandas DataFrame 或 NumPy 数组中
- **Perform Exploratory Data Analysis (EDA)  first**
- Classication: Target variable **consists of categories**
- Regression: Target variable is **continuous**

## scikit-learn syntax

```python
from sklearn.module import Model

# 创建模型
model = Model()

# 训练/拟合 模型
# X 与 y 接受 numpy.ndarray
# X 可以为二维数组
model.fit(X, y)

# 预测模型
predictions = model.predict(X_new)

print(predictions)
```

```
array([0, 0, 0, 0, 1, 0])
```
