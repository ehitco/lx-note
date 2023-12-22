# js 模块化编程

## CommonJS

这里的 CommonJS 规范指的是 CommonJS Modules/1.0 规范。

CommonJS 是一个更偏向于服务器端的规范。NodeJS 采用了这个规范。CommonJS 的一个模块就是一个脚本文件。require 命令第一次加载该脚本时就会执行整个脚本，然后在内存中生成一个对象。

```js
{
  id: '...',
  exports: { ... },
  loaded: true,
  ...
}`

```

id 是模块名，exports 是该模块导出的接口，loaded 表示模块是否加载完毕。此外还有很多属性，这里省略了。

以后需要用到这个模块时，就会到 exports 属性上取值。即使再次执行 require 命令，也不会再次执行该模块，而是到缓存中取值。

```js
// math.js
exports.add = function(a, b) {
  return a + b;
}`
```

```js
var math = require("math");
math.add(2, 3); // 5`
```

由于 CommonJS 是同步加载模块，这对于服务器端不是一个问题，因为所有的模块都放在本地硬盘。等待模块时间就是硬盘读取文件时间，很小。但是，对于浏览器而言，它需要从服务器加载模块，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态。

所以在浏览器端，不适合于 CommonJS 规范。所以在浏览器端又出现了一个规范—-AMD。

## AMD

CommonJS 解决了模块化的问题，但这种同步加载方式并不适合于浏览器端。

AMD 是”Asynchronous Module Definition”的缩写，即”异步模块定义”。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。  
**这里异步指的是不堵塞浏览器其他任务（dom 构建，css 渲染等），而加载内部是同步的（加载完模块后立即执行回调）。**

AMD 也采用 require 命令**加载**模块，但是不同于 CommonJS，它要求两个参数：

```js
require([module], callback);`

```

第一个参数[module]，是一个数组，里面的成员是要加载的模块，callback 是加载完成后的回调函数。如果将上述的代码改成 AMD 方式：

```js
require(['math'], function(math) {
  math.add(2, 3);
})`
```

其中，回调函数中参数对应数组中的成员（模块）。

requireJS 加载模块，采用的是 AMD 规范。也就是说，模块必须按照 AMD 规定的方式来写。

具体来说，就是模块**书写**必须使用特定的 define()函数来定义。如果一个模块不依赖其他模块，那么可以直接写在 define()函数之中。

```js
define(id?, dependencies?, factory);`
```

- id：模块的名字，如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字；

- dependencies：模块的依赖，已被模块定义的模块标识的数组字面量。依赖参数是可选的，如果忽略此参数，它应该默认为 `["require", "exports", "module"]`。然而，如果工厂方法的长度属性小于 3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法。

- factory：模块的工厂函数，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块的输出值。

假定现在有一个 math.js 文件，定义了一个 math 模块。那么，math.js 书写方式如下：

```js
// math.js
define(function() {
  var add = function(x, y) {
    return x + y;
  }

  return  {
    add: add
  }
})`

```

加载方法如下：

```js
// main.js
require(['math'], function(math) {
  alert(math.add(1, 1));
})`

```

如果 math 模块还依赖其他模块，写法如下：

```js
// math.js
define(['dependenceModule'], function(dependenceModule) {
  // ...
})`

```

当 require()函数加载 math 模块的时候，就会先加载 dependenceModule 模块。当有多个依赖时，就将所有的依赖都写在 define()函数第一个参数数组中，**所以说 AMD 是依赖前置的。**这不同于 CMD 规范，它是依赖就近的。

## CMD

CMD 推崇**依赖就近，延迟执行**。可以把你的依赖写进代码的任意一行，如下：

```js
define(factory)`
```

`factory`为函数时，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。factory 方法在执行时，默认会传入三个参数：require、exports 和 module.

```js
// CMD
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b');
  b.doSomething();
})`

```

如果使用 AMD 写法，如下：

```js
// AMD
define(['a', 'b'], function(a, b) {
  a.doSomething();
  b.doSomething();
})`
```

这个规范实际上是为了 Seajs 的推广然后搞出来的。那么看看 SeaJS 是怎么回事儿吧，基本就是知道这个规范了。

同样 Seajs 也是预加载依赖 js 跟 AMD 的规范在预加载这一点上是相同的，明显不同的地方是调用，和声明依赖的地方。AMD 和 CMD 都是用 difine 和 require，但是 CMD 标准倾向于在使用过程中提出依赖，就是不管代码写到哪突然发现需要依赖另一个模块，那就在当前代码用 require 引入就可以了，规范会帮你搞定预加载，你随便写就可以了。但是 AMD 标准让你必须提前在头部依赖参数部分写好（没有写好？ 倒回去写好咯）。这就是最明显的区别。

sea.js 通过`sea.use()`来加载模块。

```js
seajs.use(id, callback?)`
```

## UMD

由于 CommonJS 是服务器端的规范，跟 AMD、CMD 两个标准实际不冲突。

当我们写一个文件需要兼容不同的加载规范的时候怎么办呢，看看下面的代码。

```js
(function (root, factory) {

    if (typeof define === 'function' && define.amd) {

        // AMD

        define(['jquery', 'underscore'], factory);

    } else if (typeof exports === 'object') {

        // Node, CommonJS之类的

        module.exports = factory(require('jquery'), require('underscore'));

    } else {

        // 浏览器全局变量(root 即 window)

        root.returnExports = factory(root.jQuery, root._);

    }

}(this, function ($, _) {

    // 方法

    function a(){}; // 私有方法，因为它没被返回 (见下面)

    function b(){}; // 公共方法，因为被返回了

    function c(){}; // 公共方法，因为被返回了



    // 暴露公共方法

    return {

        b: b,

        c: c

    }

}));`

```

这个代码可以兼容各种加载规范了。

## ES6

es6 通过`import`、`export`实现模块的输入输出。其中 import 命令用于输入其他模块提供的功能，export 命令用于规定模块的对外接口。

### export

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果希望外部文件能够读取该模块的变量，就需要在这个模块内使用 export 关键字导出变量。如：

```js
// profile.js
export var a = 1;
export var b = 2;
export var c = 3;`
```

下面的写法是等价的，这种方式更加清晰（在底部一眼能看出导出了哪些变量）：

```js
var a = 1;
var b = 2;
var c = 3;
export {a, b, c}`

```

export 命令除了输出变量，还可以导出函数或类。

- **导出函数**

```js
export function foo(){}`

```

```js
function foo(){}
function bar(){}

export {foo, bar as bar2}`

```

其中上面的 as 表示给导出的变量重命名。

要注意的是，export 导出的变量只能位于文件的顶层，如果处于块级作用域内，会报错。如：

```js
function foo() {
  export 'bar'; // SyntaxError
}`

```

- **导出类**

```js
export default class {} // 关于default下面会说`
```

export 语句输出的值是动态绑定，绑定其所在的模块。

```js
// foo.js
export var foo = "foo";

setTimeout(function () {
  foo = "foo2";
}, 500);

// main.js
import * as m from "./foo";

console.log(m.foo); // foo
setTimeout(() => console.log(m.foo), 500); // foo2`
```

### import

import 命令可以导入其他模块通过 export 导出的部分。

```js
// abc.js
var a = 1;
var b = 2;
var c = 3;
export {a, b, c}

//main.js
import {a, b, c} from './abc';
console.log(a, b, c);`

```

如果想为导入的变量重新取一个名字，使用 as 关键字（也可以在导出中使用）。

```js
import {a as aa, b, c};
console.log(aa, b, c)`

```

如果想在一个模块中先输入后输出一个模块，import 语句可以和 export 语句写在一起。

```js
import {a, b, c} form './abc';
export {a, b,  c}

// 使用连写, 可读性不好，不建议
export {a, b, c} from './abc';`

```

### 模块的整体加载

**使用\*关键字。**

```js
// abc.js
export var a = 1;
export var b = 2;
export var c = 3;`

```

```js
// main.js
import * from as abc form './abc';
console.log(abc.a, abc.b, abc.c);`

```

### export default

在 export 输出内容时，如果同时输出多个变量，需要使用大括号`{}`，同时导入也需要大括号。使用`export defalut`输出时，不需要大括号，而输入（import）`export default`输出的变量时，不需要大括号。

```js
// abc.js
var a = 1, b = 2, c = 3;
export {a, b};
export default c;`

```

```js
import { a, b } from "./abc";
import c from "./abc"; // 不需要大括号
console.log(a, b, c) * // 1 2 3`
  1 *
  2 *
  3;
```

本质上，`export default`输出的是一个叫做 default 的变量或方法，输入这个 default 变量时不需要大括号。

```js
// abc.js
export {a as default};

// main.js
import a from './abc'; // 这样也是可以的

// 这样也是可以的
import {default as aa} from './abc';
console.log(aa);`

```

就到这里了吧。关于循环加载（模块相互依赖）没写，CommonJS 和 ES6 处理方式不一样
