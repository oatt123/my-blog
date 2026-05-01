---
title: 学习 JavaScript 的十个技巧
date: 2026-04-25
category: 技术
tags: [JavaScript, 教程, 前端]
excerpt: 分享十个实用的 JavaScript 编程技巧，帮助你写出更简洁优雅的代码。
---

## 前言

JavaScript 是最流行的编程语言之一。以下是十个实用技巧。

### 1. 解构赋值

```javascript
const user = { name: '张三', age: 25 };
const { name, age } = user;
console.log(name); // 张三
```

### 2. 模板字符串

```javascript
const name = '世界';
console.log(`你好，${name}！`);
```

### 3. 箭头函数

```javascript
const add = (a, b) => a + b;
```

### 4. 展开运算符

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
```

### 5. 可选链

```javascript
const city = user?.address?.city;
```

### 6. Promise 与 async/await

```javascript
async function fetchData() {
  const res = await fetch('/api/data');
  return res.json();
}
```

### 7. 数组方法

- `map()` - 转换每个元素
- `filter()` - 过滤元素
- `reduce()` - 累加计算

### 8. 对象简写

```javascript
const name = '李四';
const user = { name }; // 等同于 { name: name }
```

### 9. 默认参数

```javascript
function greet(name = '访客') {
  return `你好，${name}`;
}
```

### 10. 空值合并

```javascript
const value = input ?? '默认值';

```

---
