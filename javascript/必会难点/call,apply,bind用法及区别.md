> 我们都知道 call apply bind 都可以改变函数调用的 this 指向。那么它们三者有什么区别，什么时候该用哪个呢？我们先直接通过代码实例来了解，后面再借助专业文档来解释。

我们都知道`call` `apply` `bind`都可以改变函数调用的`this`指向。那么它们三者有什么区别，什么时候该用哪个呢？  
我们先直接通过代码实例来了解，后面再借助专业文档来解释。

## 举个?

```js
const cat = {
  name: "小黑",
  eatFish(...args) {
    console.log("this指向=>", this);
    console.log("...args", args);
    console.log(this.name + "吃鱼");
  },
};

const dog = {
  name: "大毛",
  eatBone(...args) {
    console.log("this指向=>", this);
    console.log("...args", args);
    console.log(this.name + "吃骨头");
  },
};

console.log("=================== call =========================");

cat.eatFish.call(dog, "汪汪汪", "call");

dog.eatBone.call(cat, "喵喵喵", "call");

console.log("=================== apply =========================");
cat.eatFish.apply(dog, ["汪汪汪", "apply"]);
dog.eatBone.apply(cat, ["喵喵喵", "apply"]);

console.log("=================== bind =========================");

const test1 = cat.eatFish.bind(dog, "汪汪汪", "bind");
const test2 = dog.eatBone.bind(cat, "喵喵喵", "bind");
test1();
test2();
```

![](https://segmentfault.com/img/bV1KCu?w=478&h=462)

#### 好了例子很简单但是基本的使用方法跟场景都涉及到了

`call`跟`apply`的用法几乎一样，唯一的不同就是传递的参数不同，`call`只能一个参数一个参数的传入。  
`apply`则只支持传入一个数组，哪怕是一个参数也要是数组形式。最终调用函数时候这个数组会拆成一个个参数分别传入。  
至于`bind`方法，他是直接改变这个函数的`this`指向并且返回一个新的函数，之后再次调用这个函数的时候`this`都是指向`bind`绑定的第一个参数。`bind`传餐方式跟`call`方法一致。

#### 由于`apply`函数传参的特殊性，我们又衍生出了一个黑魔法

```js
const arr = [1, 2, 3, 4, 5, 6];
const max = Math.max.apply(null, arr);
console.log(max);
```

#### 这里`bind`函数也有一个小技巧

```js
const obj = {};
function test(...args) {
  console.log(args);
}
const newFn = test.bind(obj, "静态参数1", "静态参数2");
newFn("动态参数3", "动态参数4");
```

![](https://segmentfault.com/img/bV1KJ3?w=451&h=88)

## 接着来看看 MDN 文档

### `call`语法

- `fun.call(thisArg, arg1, arg2, ...)`
- `thisArg`: 在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 和 undefined 的 this 值会自动指向全局对象 (浏览器中就是 window 对象)，同时值为原始值(数字，字符串，布尔值) 的 this 会指向该原始值的自动包装对象。
- `arg1, arg2, ...` 指定的参数列表

### `apply`语法

- `fun.apply(thisArg, [argsArray])`
- `thisArg` 在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是 window 对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。
- `argsArray` 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为 null 或 undefined，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。

### `bind`语法

- `fun.bind(thisArg[, arg1[, arg2[, ...]]])`
- `thisArg` 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用 new 操作符调用绑定函数时，该参数无效。
- `arg1, arg2, ...` 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。

## 总结

1. 当我们使用一个函数需要改变`this`指向的时候才会用到` call``apply``  `bind``
2. 如果你要传递的参数不多，则可以使用`fn.call(thisObj, arg1, arg2 ...)`
3. 如果你要传递的参数很多，则可以用数组将参数整理好调用`fn.apply(thisObj, [arg1, arg2 ...])`
4. 如果你想生成一个新的函数长期绑定某个函数给某个对象使用，则可以使用`const newFn = fn.bind(thisObj); newFn(arg1, arg2...)`
