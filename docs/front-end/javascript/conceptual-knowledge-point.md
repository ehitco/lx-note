# 概念知识点

## 高阶函数

满足下列条件之一的函数可以称为高阶函数：

- 函数可以作为参数传递
- 函数可以作为返回值输出

### 函数作为参数传递

#### 情况一：回调函数

应用于异步请求中或者需要委托另一个函数执行。

```
//给100个div节点添加display:none
//我们可以将display:none这个具体的需求抽离出来
let appendDiv = function (callback) {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement('div');
    div.innerHTML = i;
    document.body.appendChild(div);
    if (typeof callback === 'function') {
      callback(div);
    }
  }
};

appendDiv(function (node) {
  node.style.display = 'none';
});

```

#### 情况二：Array.property.sort

接收一个函数作为参数，规定数组元素的排序顺序。

```
//从大到小排列
[1, 2, 3, 4].sort(function (a, b) {
  return b - a;
})
```

## 函数作为返回值输出

#### 情况一：判断数据的类型

```
let isType = (type) => {
  return (data) => {
    return Object.prototype.toString.call(data) === '[object ' + type + ']';
  }
}

let isString = isType('String')
let isArray = isType('Array')
let isNumber = isType('Number');

console.log(isArray([1, 2, 3]))
console.log(isNumber(2))
console.log(isString('2'));
```

#### 情况二：单例模式

```
//接收一个函数，包含一个内部变量
//当变量存在时，直接返回；不存在时, 调用函数并将传进来的函数作为函数的参
let getSingle = (fn) => {
  let instance;
  return function () {
    return instance || (instance = fn.apply(this.arguments));
  };
};

let getObject = getSingle(function () {
  return {
    count: 1,
  };
});

let obj1 = getObject();
let obj2 = getObject();
console.log(obj1 === obj2);
```

#### 情况三：实现AOP

AOP：面向切面编程，将跟核心业务逻辑模块无关的功能抽离出来，包括日志统计、安全机制、异常处理等。

可以保持业务逻辑模块的纯净和高内聚性，可以方便地复用日志统计等功能模块。

```

```
