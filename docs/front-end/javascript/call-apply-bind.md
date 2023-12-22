# call,apply,bind 的区别

## 目录

1. call,apply,bind的基本介绍
2. call/apply/bind的核心理念：借用方法
3. call和apply的应用场景
4. bind的应用场景
5. 中高级面试题：手写call/apply、bind

* * *

### call,apply,bind的基本介绍

#### 语法

```js
fun.call(thisArg, param1, param2, ...)
fun.apply(thisArg, [param1,param2,...])
fun.bind(thisArg, param1, param2, ...)
复制代码
```

#### 返回值

call/apply：`fun`执行的结果 bind：返回`fun`的拷贝，并拥有指定的`this`值和初始参数

#### 参数

`thisArg`(可选):

1. **`fun`的`this`指向`thisArg`对象**
2. 非严格模式下：thisArg指定为null，undefined，fun中的this指向window对象.
3. 严格模式下：`fun`的`this`为`undefined`
4. 值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象，如 String、Number、Boolean

`param1,param2`(可选): 传给`fun`的参数。

1. 如果param不传或为 null/undefined，则表示不需要传入任何参数.
2. apply第二个参数为数组，数组内的值为传给`fun`的参数。

### 调用`call`/`apply`/`bind`的必须是个函数

call、apply和bind是挂在Function对象上的三个方法,只有函数才有这些方法。

只要是函数就可以，比如: `Object.prototype.toString`就是个函数，我们经常看到这样的用法：`Object.prototype.toString.call(data)`

### 作用

改变函数执行时的this指向，目前所有关于它们的运用，都是基于这一点来进行的。

### 如何不弄混call和apply

> 弄混这两个API的不在少数，不要小看这个问题，记住下面的这个方法就好了。

`apply`是以`a`开头，它传给`fun`的参数是`Array`，也是以`a`开头的。

### 区别

#### call与apply的唯一区别

传给`fun`的参数写法不同：

* `apply`是第2个参数，这个参数是一个数组：传给`fun`参数都写在数组中。
* `call`从第2~n的参数都是传给`fun`的。

#### call/apply与bind的区别

**执行**：

* call/apply改变了函数的this上下文后马上**执行该函数**
* bind则是返回改变了上下文后的函数,**不执行该函数**

**返回值**:

* call/apply 返回`fun`的执行结果
* bind返回fun的拷贝，并指定了fun的this指向，保存了fun的参数。

返回值这段在下方bind应用中有详细的示例解析。

call/apply/bind的核心理念：借用方法
-------------------------

看到一个非常棒的[例子](https://juejin.cn/post/6844903768132157447 "https://juejin.cn/post/6844903768132157447")：

生活中：

平时没时间做饭的我，周末想给孩子炖个腌笃鲜尝尝。但是没有适合的锅，而我又不想出去买。所以就问邻居借了一个锅来用，这样既达到了目的，又节省了开支，一举两得。

程序中：

A对象有个方法，B对象因为某种原因也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，还是借用一下 A 对象的方法呢？

当然是借用 A 对象的方法啦，既达到了目的，又节省了内存。

**这就是call/apply/bind的核心理念：借用方法**。

**借助已实现的方法，改变方法中数据的this指向，减少重复代码，节省内存。**

call和apply的应用场景
----------------

> 这些应用场景，多加体会就可以发现它们的理念都是：借用方法

1. 判断数据类型：

`Object.prototype.toString`用来判断类型再合适不过，借用它我们几乎可以判断所有类型的数据：

```js
function isType(data, type) {
    const typeObj = {
        '[object String]': 'string',
        '[object Number]': 'number',
        '[object Boolean]': 'boolean',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined',
        '[object Object]': 'object',
        '[object Array]': 'array',
        '[object Function]': 'function',
        '[object Date]': 'date', // Object.prototype.toString.call(new Date())
        '[object RegExp]': 'regExp',
        '[object Map]': 'map',
        '[object Set]': 'set',
        '[object HTMLDivElement]': 'dom', // document.querySelector('#app')
        '[object WeakMap]': 'weakMap',
        '[object Window]': 'window',  // Object.prototype.toString.call(window)
        '[object Error]': 'error', // new Error('1')
        '[object Arguments]': 'arguments',
    }
    let name = Object.prototype.toString.call(data) // 借用Object.prototype.toString()获取数据类型
    let typeName = typeObj[name] || '未知类型' // 匹配数据类型
    return typeName === type // 判断该数据类型是否为传入的类型
}
console.log(
    isType({}, 'object'), // true
    isType([], 'array'), // true
    isType(new Date(), 'object'), // false
    isType(new Date(), 'date'), // true
)
复制代码
```

2. 类数组借用数组的方法：

类数组因为不是真正的数组所有没有数组类型上自带的种种方法，所以我们需要去借用数组的方法。

比如借用数组的push方法：

```js
var arrayLike = {
  0: 'OB',
  1: 'Koro1',
  length: 2
}
Array.prototype.push.call(arrayLike, '添加元素1', '添加元素2');
console.log(arrayLike) // {"0":"OB","1":"Koro1","2":"添加元素1","3":"添加元素2","length":4}
复制代码
```

3. apply获取数组最大值最小值：

apply直接传递数组做要调用方法的参数，也省一步展开数组，比如使用`Math.max`、`Math.min`来获取数组的最大值/最小值:

```js
const arr = [15, 6, 12, 13, 16];
const max = Math.max.apply(Math, arr); // 16
const min = Math.min.apply(Math, arr); // 6
复制代码
```

4. 继承

ES5的继承也都是通过借用父类的构造方法来实现父类方法/属性的继承：

```js
// 父类
function supFather(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green']; // 复杂类型
}
supFather.prototype.sayName = function (age) {
    console.log(this.name, 'age');
};
// 子类
function sub(name, age) {
    // 借用父类的方法：修改它的this指向,赋值父类的构造函数里面方法、属性到子类上
    supFather.call(this, name);
    this.age = age;
}
// 重写子类的prototype，修正constructor指向
function inheritPrototype(sonFn, fatherFn) {
    sonFn.prototype = Object.create(fatherFn.prototype); // 继承父类的属性以及方法
    sonFn.prototype.constructor = sonFn; // 修正constructor指向到继承的那个函数上
}
inheritPrototype(sub, supFather);
sub.prototype.sayAge = function () {
    console.log(this.age, 'foo');
};
// 实例化子类，可以在实例上找到属性、方法
const instance1 = new sub("OBKoro1", 24);
const instance2 = new sub("小明", 18);
instance1.colors.push('black')
console.log(instance1) // {"name":"OBKoro1","colors":["red","blue","green","black"],"age":24}
console.log(instance2) // {"name":"小明","colors":["red","blue","green"],"age":18} 
复制代码
```

类似的应用场景还有很多，就不赘述了，关键在于它们借用方法的理念，不理解的话多看几遍。

call、apply，该用哪个？、
-----------------

call,apply的效果完全一样，它们的区别也在于

* **参数数量/顺序确定就用call，参数数量/顺序不确定的话就用apply**。
* 考虑可读性：参数数量不多就用call，参数数量比较多的话，把参数整合成数组，使用apply。
* 参数集合已经是一个数组的情况，用apply，比如上文的获取数组最大值/最小值。

参数数量/顺序不确定的话就用apply，比如以下示例：

```js
const obj = {
    age: 24,
    name: 'OBKoro1',
}
const obj2 = {
    age: 777
}
callObj(obj, handle)
callObj(obj2, handle)
// 根据某些条件来决定要传递参数的数量、以及顺序
function callObj(thisAge, fn) {
    let params = []
    if (thisAge.name) {
        params.push(thisAge.name)
    }
    if (thisAge.age) {
        params.push(thisAge.age)
    }
    fn.apply(thisAge, params) // 数量和顺序不确定 不能使用call
}
function handle(...params) {
    console.log('params', params) // do some thing
}
复制代码
```

bind的应用场景
----------

#### 1. 保存函数参数

首先来看下一道经典的面试题：

```js
for (var i = 1; i <= 5; i++) {
   setTimeout(function test() {
        console.log(i) // 依次输出：6 6 6 6 6
    }, i * 1000);
}
复制代码
```

造成这个现象的原因是等到`setTimeout`异步执行时,`i`已经变成6了。

关于js事件循环机制不理解的同学，可以看我这篇博客：[Js 的事件循环(Event Loop)机制以及实例讲解](https://juejin.cn/post/6844903621872582669 "https://juejin.cn/post/6844903621872582669")

那么如何使他输出: 1,2,3,4,5呢？

方法有很多：

* 闭包, 保存变量

```js
for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log('闭包:', i); // 依次输出：1 2 3 4 5
        }, i * 1000);
    }(i));
}
复制代码
```

在这里创建了一个闭包，每次循环都会把`i`的最新值传进去，然后被闭包保存起来。

* **bind**

```js
for (var i = 1; i <= 5; i++) {
    // 缓存参数
    setTimeout(function (i) {
        console.log('bind', i) // 依次输出：1 2 3 4 5
    }.bind(null, i), i * 1000);
}
复制代码
```

**实际上这里也用了闭包，我们知道bind会返回一个函数，这个函数也是闭包**。

它保存了函数的this指向、初始参数，每次`i`的变更都会被bind的闭包存起来，所以输出1-5。

具体细节，下面有个手写bind方法，研究一下，就能搞懂了。

* `let`

用`let`声明`i`也可以输出1-5: 因为`let`是块级作用域,所以每次都会创建一个新的变量,所以`setTimeout`每次读的值都是不同的,[详解](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fq%2F1010000007541743 "https://segmentfault.com/q/1010000007541743")。

#### 2. 回调函数this丢失问题

这是一个常见的问题，下面是我在开发VSCode插件处理`webview`通信时，遇到的真实问题，一开始以为VSCode的API哪里出问题，调试了一番才发现是`this`指向丢失的问题。

```js
class Page {
    constructor(callBack) {
        this.className = 'Page'
        this.MessageCallBack = callBack // 
        this.MessageCallBack('发给注册页面的信息') // 执行PageA的回调函数
    }
}
class PageA {
    constructor() {
        this.className = 'PageA'
        this.pageClass = new Page(this.handleMessage) // 注册页面 传递回调函数 问题在这里
    }
    // 与页面通信回调
    handleMessage(msg) {
        console.log('处理通信', this.className, msg) //  'Page' this指向错误
    }
}
new PageA()
复制代码
```

#### 回调函数`this`为何会丢失？

显然声明的时候不会出现问题，执行回调函数的时候也不可能出现问题。

问题出在传递回调函数的时候：

```js
this.pageClass = new Page(this.handleMessage)
复制代码
```

因为传递过去的`this.handleMessage`是一个函数内存地址，没有上下文对象，也就是说该函数没有绑定它的`this`指向。

那它的`this`指向于它所应用的[绑定规则](https://juejin.cn/post/6844903630592540686#comment "https://juejin.cn/post/6844903630592540686#comment")：

```js
class Page {
    constructor(callBack) {
        this.className = 'Page'
        // callBack() // 直接执行的话 由于class 内部是严格模式，所以this 实际指向的是 undefined
        this.MessageCallBack = callBack // 回调函数的this 隐式绑定到class page
        this.MessageCallBack('发给注册页面的信息')
    }
}
复制代码
```

既然知道问题了，那我们只要绑定回调函数的`this`指向为`PageA`就解决问题了。

**回调函数this丢失的解决方案**：

1. `bind`绑定回调函数的`this`指向：

这是典型bind的应用场景, 绑定this指向，用做回调函数。

```js
this.pageClass = new Page(this.handleMessage.bind(this)) // 绑定回调函数的this指向
复制代码
```

PS： 这也是为什么`react`的`render`函数在绑定回调函数的时候，也要使用bind绑定一下`this`的指向，也是因为同样的问题以及原理。

2. 箭头函数绑定this指向

箭头函数的this指向定义的时候外层第一个普通函数的this，在这里指的是class类：`PageA`

这块内容，可以看下我之前写的博客：[详解箭头函数和普通函数的区别以及箭头函数的注意事项、不适用场景](https://juejin.cn/post/6844903801799835655#heading-3 "https://juejin.cn/post/6844903801799835655#heading-3")

```js
this.pageClass = new Page(() => this.handleMessage()) // 箭头函数绑定this指向
复制代码
```

中高级面试题-手写call/apply、bind
-------------------------

在大厂的面试中，手写实现call,apply,bind(特别是bind)一直是比较高频的面试题，在这里我们也一起来实现一下这几个函数。

#### 你能手写实现一个`call`吗？

**思路**

1. 根据call的规则设置上下文对象,也就是`this`的指向。
2. 通过设置`context`的属性,将函数的this指向[隐式绑定](https://juejin.cn/post/6844903630592540686#heading-4 "https://juejin.cn/post/6844903630592540686#heading-4")到context上
3. 通过隐式绑定执行函数并传递参数。
4. 删除临时属性，返回函数执行结果

```js
Function.prototype.myCall = function (context, ...arr) {
    if (context === null || context === undefined) {
       // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
        context = window 
    } else {
        context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
    const specialPrototype = Symbol('特殊属性Symbol') // 用于临时储存函数
    context[specialPrototype] = this; // 函数的this指向隐式绑定到context上
    let result = context[specialPrototype](...arr); // 通过隐式绑定执行函数并传递参数
    delete context[specialPrototype]; // 删除上下文对象的属性
    return result; // 返回函数执行结果
};
复制代码
```

#### 判断函数的上下文对象

很多人判断函数上下文对象，只是简单的以`context`是否为false来判断,比如：

```js
// 判断函数上下文绑定到`window`不够严谨
context = context ? Object(context) : window; 
context = context || window; 
复制代码
```

经过测试,以下三种为false的情况,函数的上下文对象都会绑定到`window`上：

```js
// 网上的其他绑定函数上下文对象的方案: context = context || window; 
function handle(...params) {
    this.test = 'handle'
    console.log('params', this, ...params) // do some thing
}
handle.elseCall('') // window
handle.elseCall(0) // window
handle.elseCall(false) // window
复制代码
```

而`call`则将函数的上下文对象会绑定到这些原始值的实例对象上：

![原始值的实例对象](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/4/16c5bdb742a5f2b0~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

所以正确的解决方案，应该是像我上面那么做：

```js
// 正确判断函数上下文对象
    if (context === null || context === undefined) {
       // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
        context = window 
    } else {
        context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
复制代码
```

### 使用`Symbol`临时储存函数

尽管之前用的属性是`testFn`但不得不承认，还是有跟上下文对象的原属性冲突的风险,经网友提醒使用`Symbol`就不会出现冲突了。

考虑兼容的话,还是用尽量特殊的属性，比如带上自己的ID：`OBKoro1TestFn`。

#### 你能手写实现一个`apply`吗？

思路：

1. 传递给函数的参数处理，不太一样，其他部分跟`call`一样。
2. `apply`接受第二个参数为类数组对象, 这里用了JavaScript权威指南中判断是否为类数组对象的方法。

```js
Function.prototype.myApply = function (context) {
    if (context === null || context === undefined) {
        context = window // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    } else {
        context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
    // JavaScript权威指南判断是否为类数组对象
    function isArrayLike(o) {
        if (o &&                                    // o不是null、undefined等
            typeof o === 'object' &&                // o是对象
            isFinite(o.length) &&                   // o.length是有限数值
            o.length >= 0 &&                        // o.length为非负值
            o.length === Math.floor(o.length) &&    // o.length是整数
            o.length < 4294967296)                  // o.length < 2^32
            return true
        else
            return false
    }
    const specialPrototype = Symbol('特殊属性Symbol') // 用于临时储存函数
    context[specialPrototype] = this; // 隐式绑定this指向到context上
    let args = arguments[1]; // 获取参数数组
    let result
    // 处理传进来的第二个参数
    if (args) {
        // 是否传递第二个参数
        if (!Array.isArray(args) && !isArrayLike(args)) {
            throw new TypeError('myApply 第二个参数不为数组并且不为类数组对象抛出错误');
        } else {
            args = Array.from(args) // 转为数组
            result = context[specialPrototype](...args); // 执行函数并展开数组，传递函数参数
        }
    } else {
        result = context[specialPrototype](); // 执行函数 
    }
    delete context[specialPrototype]; // 删除上下文对象的属性
    return result; // 返回函数执行结果
};
复制代码
```

#### 你能手写实现一个`bind`吗？

**划重点**：

手写`bind`是大厂中的一个高频的面试题，如果面试的中高级前端，只是能说出它们的区别，用法并不能脱颖而出，理解要有足够的深度才能抱得offer归！

**思路**

1. 拷贝源函数:
    * 通过变量储存源函数
    * 使用`Object.create`复制源函数的prototype给fToBind
2. 返回拷贝的函数
3. 调用拷贝的函数：
    * new调用判断：通过`instanceof`判断函数是否通过`new`调用，来决定绑定的`context`
    * 绑定this+传递参数
    * 返回源函数的执行结果

### 2019/8/26更新：修复函数没有`prototype`的情况

```js
Function.prototype.myBind = function (objThis, ...params) {
    const thisFn = this; // 存储源函数以及上方的params(函数参数)
    // 对返回的函数 secondParams 二次传参
    let fToBind = function (...secondParams) {
        const isNew = this instanceof fToBind // this是否是fToBind的实例 也就是返回的fToBind是否通过new调用
        const context = isNew ? this : Object(objThis) // new调用就绑定到this上,否则就绑定到传入的objThis上
        return thisFn.call(context, ...params, ...secondParams); // 用call调用源函数绑定this的指向并传递参数,返回执行结果
    };
    if (thisFn.prototype) {
        // 复制源函数的prototype给fToBind 一些情况下函数没有prototype，比如箭头函数
        fToBind.prototype = Object.create(thisFn.prototype);
    }
    return fToBind; // 返回拷贝的函数
};
复制代码
```

### 对象缩写方法没有`prototype`

箭头函数没有`prototype`，这个我知道的，可是`getInfo2`就是一个缩写，为什么没有`prototype`。

谷歌/`stack overflow`都没有找到原因，有大佬指点迷津一下吗？？

```js
var student = {
    getInfo: function (name, isRegistered) {
        console.log('this1', this)
    },
    getInfo2(name, isRegistered) {
        console.log('this2', this) // 没有prototype
    },
    getInfo3: (name, isRegistered) => {
        console.log('this3', this) // 没有prototype
    }
}
复制代码
```

# this

## 为什么要用this

使用this可以让我们灵活地在不同的上下文中重复的使用函数，不需要针对每个对象编写不同版本的函数。

因此，掌握this的指向，对我们来说额外重要。

> 什么是上下文？
>
> 当一个函数被调用时，会创建一个活动记录，包括函数在哪被调用，调用方式，传入参数等，this则是其中的一个属性，在函数执行的过程中会用到。

## 对this的误解

* this指向函数本身？no！

* this指向函数作用域？no！

this指向是在运行时绑定的，与函数声明的位置没有任何关系，取决于函数的调用方式，在哪里被调用。

## 函数的调用位置

首先我们想理解一下调用位置和调用栈，这里有一段函数。

```javascript
function baz() {
  // 此处的调用栈为 baz
  // 调用位置：全局作用域
  console.log('baz');
  bar();
}

function bar() {
  // 此处的调用栈为 baz -> bar
  // 调用位置：baz
  console.log('bar');
  foo();
}

function foo() {
  // 此处的调用栈为 baz -> bar -> foo
  // 调用位置：bar
  debugger
  console.log('foo')
}

baz()
```

我们在浏览器中执行一下它：

![Untitled.gif](https://raw.githubusercontent.com/Merlin218/image-storage/master/2021/12/12-11-40-56-Untitled.gif)

可以看到当前位置的函数调用列表，这个就是调用栈。而栈中的第二个元素，就是该函数的调用位置。

## this的绑定规则

### 默认绑定

this指向全局对象，当函数内使用严格模式时，this会绑定到undefined。

> 有个细节：决定this绑定对象的并不是调用位置是否处于严格模式，而是该函数的函数体是否是处于严格模式。见下面的代码：

```javascript
function foo(){
    "use strict";
    console.log(this.a);
}

function foo1(){
    console.log(this.a);
}

var a = 2;
foo(); // TypeError:this is undefined


(function(){
    "use strict";
    foo1(); // 2
})();
```

## 隐式绑定

判断调用位置是否有上下文对象，或者是否被某个对象拥有或包含该函数引用，符合条件的话，this会隐式绑定为该对象。

* 函数中的this只会指向它上一层的
  
  ```javascript
  function foo(){
     console.log(this.a);   
  }
  var obj2 = {
      a:3,
      foo:foo
  };
  var obj1 = {
      a:2;
      obj2:obj2
  };
  obj1.obj2.foo() // 3 而不是2，只会指向上一层的上下文
  ```

* 隐式丢失
  
  看下面的例子，fn虽然是obj.foo的一个引用，但实际上引用的是foo函数本身，因此可以fn()是一个不带修饰的函数调用，应用了默认绑定。
  
  > 注意：无论是在Object中直接定义函数，还是想定义函数再添加为引用属性，这个函数严格来说都不属于这个对象。
  
  ```javascript
  function foo(){
     console.log(this.a);   
  }
  var obj = {
      a:3,
      foo:foo
  };
  
  var a = 2;
  var fn = obj.foo;
  fn(); // 2 而不是3，相当于没有上下文
  ```

### 显式绑定

直接指定this的绑定对象

* call 与 apply：使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数
 	* 参数
     * this的绑定对象
     * 多个参数（call）或参数数组（apply）

> 如果传入一个原始值，会被转化为其对象形式，以下同理。

* bind：硬绑定，创建一个新函数，this指定为目标上下文。
 	* 参数
     * this的绑定对象
     * 参数列表，绑定为新函数的参数

* API调用的上下文
  
  某些API提供了可选参数，其作用和bind(...)一样，确保你的回调函数使用指定的this。
  
```js
var obj = {
    id:'ok'
}
[1,2,3].forEach(function(el){
    console.log(el,this.id)
},obj);
//1ok 2ok 3ok
```

### new绑定

创建过程：

1. 创建一个全新的对象
2. 执行`prototype`连接
3. 将该对象绑定到函数调用的this
4. 如果函数中没有返回其他对象，自动返回创建的对象。

```javascript
function foo(a){
    this.a = a
}
var bar = new foo(2);
console.log(bar.a); // 2
```

## 绑定规则优先级

1. 函数是否在new中调用 ？this绑定的是新创建的对象 ：继续往下
2. 函数是否通过call、apply或者bind调用 ？this绑定指定对象：继续往下
3. 函数是否在某个上下文对象中调用 ？this绑定该上下文对象 ：继续往下
4. 默认绑定，是否是严格模式 ？undefined ：全局对象。

```js
'use strict';

function a() {
  console.log(this);

  function b() {
    console.log(this);
  }
  b();
}
let obj = {
  aa: 1,
  a: a
}
obj.a(); 
// { aa:1, a:function a(){xxx} }
// undefined
a();
// undefined
// undefined
```

## 绑定的其他情况

* 使用call、apply等时，如果将要绑定的this传入`null`时，在非严格模式下，会应用默认绑定规则绑定到全局对象，将导致不可预计的后果，如修改全局对象。
* 创建一个空的非委托的对象，将this指向它。
  
  > Object.create(null) 不会创建Object.prototype这个委托，比{}更空。

* 间接引用——隐式丢失
* 使用软绑定
  
```js
//来自《你不知道的JavaScript》上册
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj, ...args1) {
    //传入的obj是我们想要设置的默认的this绑定值
    var fn = this;
    var bound = function (...args2) {
      return fn.apply(
        // 如果this指向全局对象，说明默认绑定，则绑定为obj
        (!this || this === (window || global)) ? obj : this,
        //新的参数列表
        [...args1, ...args2]
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}
```

## 箭头函数的this

箭头函数的this是根据定义函数时外层（函数或者全局）作用域来决定的。常用于回调函数中。

```javascript
'use strict';
function foo(){
    return () => {
        console.log(this.a) // this为foo的上下文
    }
}
var obj = {
    a:2;
}
var obj2 = {
    a:3;
}
foo()(); // Uncaught TypeError: Cannot read properties of undefined
// 严格模式下全局上下文为undefined
var bar = foo.bind(obj);
bar()(); // 2
```

如果对一个函数进行多次 bind，那么上下文会是什么呢?

```js
let a = {}
let fn = function () { console.log(this) } 
fn.bind().bind(a)() // => ?

// fn.bind().bind(a) 等于 
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a) 
}
fn2();
```

 不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window。
