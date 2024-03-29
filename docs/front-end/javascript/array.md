# 常用数组操作总结

## 1.数组的遍历

---

### 1.1 `for..of` 循环

`for(const item of items)`循环遍历数组项，如下所示遍历`colors`列表：

```javascript
const colors = ["blue", "green", "white"];

for (const color of colors) {
  console.log(color);
}
// 'blue'
// 'green'
// 'white'
```

**提示：**

咱们可以随时使用`break`语句停止遍历。

### 1.2 `for` 循环

`for(let i; i < array.length; i++)`循环使用递增的索引变量遍历数组项。

`for`通常需要在每个循环中递增`index` 变量

```javascript
const colors = ["blue", "green", "white"];

for (let index = 0; index < colors.length; index++) {
  const color = colors[index];
  console.log(color);
}
// 'blue'
// 'green'
// 'white'
```

`index`变量从`0`递增到`colors.length-1`。此变量用于按以下索引访问项：`colors [index]`。

**提示:**

咱们可以随时使用`break`语句停止遍历。

### 1.3 `array.forEach()` 方法

`array.forEach(callback)`方法通过在每个数组项上调用`callback`函数来遍历数组项。

在每次遍历中，都使用以下参数调用`callback(item [, index [, array]])`：当前遍历项，当前遍历索引和数组本身。

```javascript
const colors = ["blue", "green", "white"];

colors.forEach(function callback(value, index) {
  console.log(value, index);
});
// 'blue', 0
// 'green', 1
// 'white', 2
```

**提示：**

咱们不能中断`array.forEach()`迭代。

## 2. 数组的映射

---

### 2.1 `Array.map()`方法

`array.map(callback)` 方法通过在每个数组项上使用`callback`调用结果来创建一个新数组。

在每个遍历中的`callback(item[, index[, array]])`使用参数调用:当前项、索引和数组本身，并应该返回新项。

如下所示咱们对每个数组元素都递增 `1`：

```javascript
const numbers = [0, 2, 4];

const newNumbers = numbers.map(function increment(number) {
  return number + 1;
});

newNumbers; // => [1, 3, 5]
```

**提示：**

`array.map()`创建一个新的映射数组，而不改变原始数组。

### 2.2 `Array.from()`方法

`Array.from(arrayLike[, callback])`方法通过在每个数组项上使用`callback` 调用结果来创建一个新数组。

在每个遍历中`callback(item[, index[, array]])`使用参数调用:当前项、索引和数组本身并且应该返回新项。

如下所示咱们对每个数组元素都递增 `1`：

```javascript
const numbers = [0, 2, 4];

const newNumbers = Array.from(numbers, function increment(number) {
  return number + 1;
});

newNumbers; // => [1, 3, 5]
```

**提示：** _`Array.from()`创建一个新的映射数组，而不改变原始数组。_ `Array.from()`更适合从类似数组的对象进行映射。

## 3. 数据的简化

---

### 3.1 `Array.reduce()` 方法

`array.reduce(callback[, initialValue])`通过调用`callback` 函数来将数组简化为一个值。

在每次遍历中的`callback(accumulator, item[, index[, array]])`使用用参数调用的:累加器，当前项，索引和数组本身且应该返回累加器。

经典示例是对数字数组求和：

```javascript
const numbers = [2, 0, 4];

function summarize(accumulator, number) {
  return accumulator + number;
}

const sum = numbers.reduce(summarize, 0);

sum; // => 6
```

第一步，将`accumulator` 初始化为`0`。然后，对每个累加数字和的数组项调用`summary`函数。

**提示：**

如果没有使用 initialValue 来设置初始值，则默认使用数组的第一个元素作为初始值。

## 4. 数据的连接

---

### 4.1 `array.concat()` 方法

`array.concat(array1[, array2, ...])`将一个或多个数组连接到原始数组。如下所示，连接两个数组：

```javascript
const heroes = ["小智", "前端小智"];
const villains = ["老王", "小三"];

const everyone = heroes.concat(villains);

everyone; // ["小智", "前端小智", "老王", "小三"]
```

**提示：**

- `concat()`创建一个新的数组，而不改变原来的数组
- `array.concat(array1 [，array2，...])` 接受多个要连接的数组。

### 4.2 展开操作符号

咱们将展开操作符与数组字面量一起使用来连接数组:`[...array1, ...array2]`。

```javascript
const heroes = ["小智", "前端小智"];
const villains = ["老王", "小三"];

const names = [...heroes, ...villains];

names; // ["小智", "前端小智", "老王", "小三"]
```

**提示：**

`[...arr1, ...arr2, ...arrN]`：咱们可以使用展开运算符连接所需数量的数组。

## 5. 获取数组的片段

### 5.1 `array.slice()` 方法

`array.slice([fromIndex [，toIndex]])`返回数组的一个片段，该片段从`fromIndex`开始，以`toIndex`结尾（不包括`toIndex`本身）。`fromIndex`可选参数默认为`0`，`toIndex`可选参数默认为`array.length`。

```javascript
const names = ["小智", "前端小智", "老王", "小三"];

const heroes = names.slice(0, 2);
const villains = names.splice(2);

heroes; // ["小智", "前端小智"]
villains; // ["老王", "小三"]
```

**提示：**

`array.slice()` 创建一个新数组，而不改变原始数组。

## 6. 数组的拷贝

---

### 6.1 展开操作符

拷贝数组的一种简单方法是使用展开运算符：`const clone = [... array]`，如下所示，拷贝 `colors` 数组：

```javascript
const colors = ["white", "black", "gray"];

const clone = [...colors];

clone; // => ['white', 'black', 'gray']
colors === clone; // => false
```

提示：

`[...array]` 创建一个浅拷贝。

### 6.2 `array.concat()`方法

`[].concat(array)`是另一种拷贝数组的方法。

```javascript
const colors = ["white", "black", "gray"];

const clone = [].concat(colors);

clone; // => ['white', 'black', 'gray']
colors === clone; // => false
```

提示：

`[].concat(array)` 创建一个浅拷贝。

### 6.3 `array.slice()` 方法

`array.slice())`是另一种拷贝数组的方法。

```javascript
const colors = ["white", "black", "gray"];

const clone = colors.slice();

clone; // => ['white', 'black', 'gray']
colors === clone; // => false
```

提示：

`colors.slice()` 创建一个浅拷贝。

## 7. 查找数组

---

### 7.1 `array.includes()` 方法

`array.includes(itemToSearch [，fromIndex])`返回一个布尔值，`array` 是否包含`itemToSearch`。 可选参数`fromIndex`，默认为`0`，表示开始搜索的索引。如下所示：判断`2`和`99`是否存在于一组数字中：

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.includes(2); // => true
numbers.includes(99); // => false
```

### 7.2 `array.find()` 方法

`array.find(predicate)` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

如下所示，找到数组中的第一个偶数：

```javascript
const numbers = [1, 2, 3, 4, 5];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumber = numbers.find(isEven);

evenNumber; // => 2
```

### 7.3 `array.indexOf()` 方法

`array.indexOf(itemToSearch[, fromIndex])` 返回`array`中第一个出现的`itemToSearch`的索引。默认为`0的`可选参数`fromIndex`表示开始搜索的索引。

如下所示，找到`前端小智`的索引：

```javascript
const names = ["小智", "前端小智", "老王", "小三"];

const index = names.indexOf("前端小智");

index; // 1
```

**提示：**

- 如果找不到该项，则`array.indexOf(itemToSearch)`返回`-1`
- `array.findIndex(predicate)`是使用`predicate`函数查找索引的替代方法。

## 8. 查询数组

---

### 8.1 `array.every()` 方法

如果每个项都通过`predicate` 检查，则`array.every(predicate)`返回`true`。

在每个遍历`predicate(item[, index[, array]])`上，用参数调用`predicate` 函数:当前遍历项、索引和数组本身。

如下所示，确定数组是否只包含偶数：

```javascript
const evens = [0, 2, 4, 6];
const numbers = [0, 1, 4, 6];

function isEven(number) {
  return number % 2 === 0;
}

evens.every(isEven); // => true
numbers.every(isEven); // => false
```

### 8.2 `array.some()` 方法

如果每个项只要一下通过`predicate` 检查，则`array.every(predicate)`返回`true`。

在每个遍历`predicate(item[, index[, array]])`上，用参数调用`predicate` 函数:当前遍历项、索引和数组本身。

如下所示：确定数组是否至少包含一个偶数：

```javascript
const numbers = [1, 5, 7, 10];
const odds = [1, 3, 3, 3];

function isEven(number) {
  return number % 2 === 0;
}

numbers.some(isEven); // => true
odds.some(isEven); // => false
```

## 9. 数组的过滤

---

### 9.1 `array.filter()` 方法

`array.filter(predicate)`方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

在每个遍历`predicate(item[, index[, array]])`上，用参数调用`predicate` 函数:当前遍历项、索引和数组本身。

如下所示：将一个数组过滤为仅包含偶数：

```javascript
const numbers = [1, 5, 7, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evens = numbers.filter(isEven);

evens; // => [10]
```

**提示：**

`array.filter()` 创建一个新数组，而不改变原始数组。

## 10. 数组的插入

---

### 10.1 `array.push()` 方法

`array.push(item1 [...，itemN])` 方法将一个或多个项追加到数组的末尾，并返回新的长度。

如下所示，在`names` 数组的末尾添加 `'小智'`

```javascript
const names = ["小智"];

names.push("前端小智");

names; // ["小智", "前端小智"]
```

**提示：**

- `array.push()` 会改变原数组
- `array.push(item1, item2, ..., itemN)` 可以添加多个元素。

### 10.2 `array.unshift()` 方法

`array.unshift(item1[..., itemN])`方法将一个或多个项追加到数组的开头，返回数组的新长度

```javascript
const names = ["小智"];

names.unshift("前端小智");

names; // ["前端小智", "小智"]
```

**提示：**

- `array.unshift()` 会改变原数组
- `array.unshift(item1, item2, ..., itemN)` 可以添加多个元素。

### 10.3 展开操作符

可以通过组合展开操作符和数组字面量以不可变的方式在数组中插入项。

在数组末尾追加一个项:

```javascript
const names = ["小智", "大治"];

const names2 = [...names, "王大冶"];

names2; // ["小智", "大治", "王大冶"]
```

在数组的开头追加一个项:

```javascript
const names = ["小智", "大治"];

const names2 = ["王大冶", ...names];

names2; // ["王大冶", "小智", "大治"]
```

在任何索引处插入元素：

```javascript
const names = ["小智", "大治"];
const indexToInsert = 1;

const names2 = [
  ...names.slice(0, indexToInsert),
  "前端小智",
  ...names.slice(indexToInsert),
];

names2; // ["小智", "前端小智", "大治"]
```

## 11. 删除数组元素

---

### 11.1 `array.pop()` 方法

`array.pop()`方法从数组中删除最后一个元素，然后返回该元素。如下所示，删除`colors`数组的最后一个元素：

```javascript
const colors = ["blue", "green", "black"];

const lastColor = colors.pop();

lastColor; // => 'black'
colors; // => ['blue', 'green']
```

提示：

`array.pop()` 会改变原数组。

### 11.2 `array.shift()` 方法

`array.shift()`方法从数组中删除第一个元素，然后返回该元素。

```javascript
const colors = ["blue", "green", "black"];

const firstColor = colors.shift();

firstColor; // => 'blue'
colors; // => ['green', 'black']
```

提示：

- `array.shift()` 会改变原数组。

- `array.shift()` 具`有O(n)`复杂度。

### 11.3 `array.splice()` 方法

`array.splice(fromIndex[, removeCount[, item1[, item2[, ...]]]])`从数组中删除元素，并插入新的元素。

例如，咱们从索引`1`处删除`2`个元素：

```javascript
const names = ["张三", "李四", "王五", "赵六"];

names.splice(1, 2);

names; // => ["张三", "赵六"]
```

`names.splice(1，2)`删除元素`'张三'`和`'赵六'`。

`names.splice()` 可以插入新元素，而不是插入已删除的元素。 咱们可以替换索引`1`处开始的的`2`个元素，然后插入一个新的元素 `'小智'`：

```javascript
const names = ["张三", "李四", "王五", "赵六"];

names.splice(1, 2, "小智");

names; //  ["张三", "小智", "赵六"]
```

提示：

- `array.splice()` 会改变原数组。

### 11.4 展开操作符号

可以通过组合展开操作符和数据字面量以不可变的方式从数组中删除项。

```javascript
const names = ["张三", "李四", "王五", "赵六"];
const fromIndex = 1;
const removeCount = 2;

const newNames = [
  ...names.slice(0, fromIndex),
  ...names.slice(fromIndex + removeCount),
];

newNames; // ["张三", "赵六"]
```

## 12. 清空数组

---

### 12.1 `array.length`属性

`array.length`是保存数组长度的属性。 除此之外，`array.length`是可写的。

如果咱们写一个小于当前长度的`array.length = newLength`，多余的元素从数组中移除。

如下所示：使用`array.length = 0`删除数组中的所有项目：

```javascript
const colors = ["blue", "green", "black"];

colors.length = 0;

colors; // []
```

### 12.2 `array.splice()` 方法

`array.splice(fromIndex[, removeCount[, item1[, item2[, ...]]]])`从数组中删除元素，并插入新的元素。

如果`removeCount`参数被省略，那么`array.splice()`将删除从`fromIndex`开始的数组的所有元素。咱们使用它来删除数组中的所有元素：

```javascript
const colors = ["blue", "green", "black"];

colors.splice(0);

colors; // []
```

## 13. 填充数组

---

### 13.1 `array.fill()` 方法

`array.fill(value[, fromIndex[, toIndex]])`用从`fromIndex` 到`toIndex`的值填充数组(不包括`toIndex`本身)。`fromIndex`可选参数默认为`0`,`toIndex`可选参数默认为`array.length`。

例如，使用用零值填充数组：

```javascript
const numbers = [1, 2, 3, 4];

numbers.fill(0);

numbers; // => [0, 0, 0, 0]
```

不仅如此，还可以使用`Array(length).fill(initial)`来初始化特定长度和初始值的数组。

```javascript
const length = 3;
const zeros = Array(length).fill(0);

zeros; // [0, 0, 0]
```

提示：

- `array.splice()` 会改变原数组。

### 13.2 `Array.from()` 函数

`Array.from()` 有助于初始化带有对象的特定长度的数组：

```javascript
const length = 4;
const emptyObjects = Array.from(Array(length), function () {
  return {};
});

emptyObjects; // [{}, {}, {}, {}]
```

## 14. 数组的扁平化

---

### 14.1 `array.flat()`方法

`array.flat([depth])`方法通过递归扁平属于数组的项直到一定深度来创建新数组。 `depth`可选参数默认为`1`：

```javascript
const arrays = [0, [1, 3, 5], [2, 4, 6]];

const flatArray = arrays.flat();

flatArray; // [0, 1, 3, 5, 2, 4, 6]
```

`arrays` 包含数字和数字数组的混合。 `arrays.flat()`对数组进行扁平，使其仅包含数字。

**提示：**

`array.flat()` 创建一个新数组，而不会改变原始数组。

## 15. 数组的排序

---

### 15.1 `array.sort()` 方法

`array.sort([compare])`方法对数组的元素进行排序。

可选参数`compare(a, b)`是一个自定义排序顺的回调函数。如果比较`compare(a, b)`返回的结果：

- 如果 `a`小于`b`，在排序后的数组中`a`应该出现在`b`之前，就返回一个小于`0`的值。
- 如果`a`等于`b`，就返回`0`。
- 如果`a`大于`b`，就返回一个大于`0`的值。

如下所示，对数组 `numbers` 时行排序

```javascript
const numbers = [4, 3, 1, 2];

numbers.sort();

numbers; // => [1, 2, 3, 4]
```

`numbers.sort()` 以升序对数字进行排序。

使用比较函数，让偶数排在奇数前面：

```javascript
const numbers = [4, 3, 1, 2];

function compare(n1, n2) {
  if (n1 % 2 === 0 && n2 % 2 !== 0) {
    return -1;
  }
  if (n1 % 2 !== 0 && n2 % 2 === 0) {
    return 1;
  }
  return 0;
}

numbers.sort(compare);

numbers; // => [4, 2, 3, 1]
```

**提示：**

- `array.sort()` 会改变原数组。

---

# 高阶函数

满足下列条件之一的函数可以称为高阶函数：

- 函数可以作为参数传递
- 函数可以作为返回值输出

## 函数作为参数传递

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
