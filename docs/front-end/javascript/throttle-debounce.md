# 节流和防抖的区别以及应用场景的理解

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/qq_36362721/article/details/128927798)

### [节流](https://so.csdn.net/so/search?q=%E8%8A%82%E6%B5%81&spm=1001.2101.3001.7020)和防抖

* 节流和防抖两者有什么区别?
* 节流和防抖分别用于什么场景?

**节流(`throttle`)和防抖(`debounce`)是两种常用的浏览器事件处理方法。**

**相同点：**

1. **都是为了减少事件触发频率，优化性能。**

**不同点：**

1. **节流是指在一段时间内最多触发一次事件，节流算法会在特定的时间间隔内判断是否触发事件；**
2. **防抖是指在一段时间内只要有事件触发，就重新计算时间，直到这段时间内没有事件触发，才真正的执行事件；**
3. **节流适用于持续的触发，防抖适用于短时间内的大量触发。**

* * *

### [防抖](https://so.csdn.net/so/search?q=%E9%98%B2%E6%8A%96&spm=1001.2101.3001.7020)（debounce）

  防抖是一种浏览器事件处理方式，通俗地说，它是在短时间内大量触发事件时，只在最后一次事件触发结束后才真正的执行事件的过程。

通俗的说：防抖，防止抖动“你先抖动着，啥时候停了，再执行下一步”

![在这里插入图片描述](https://img-blog.csdnimg.cn/1d77a9e07a7b477c9eb835bb0d9ab225.png#pic_center)

> 举个例子，当用户快速输入搜索关键字时，浏览器每隔`500ms`才会执行事件处理函数。这意味着，当用户快速输入的过程中，浏览器会不断重新计算执行事件的时间，直到`500ms`内用户停止输入，才真正的执行事件处理函数。
>
> 这样做的好处是，防止大量不必要的事件触发，对性能有很好的优化作用。

#### 代码实现（code）

```
`function debounce(fn, delay = 200) {
    let timer = 0
    
    return function () {
        if (timer) clearTimeout(timer)
        
        timer = setTimeout (() => {
            fn.apply(this,arguments) // 透传this 和参数
            timer = 0
        },delay)
    }
}` 

```

* * *

#### 案例测试（test）

监测输入框，用户快速输入内容过程中，防抖函数的处理效果。

**防抖之前：**

```
`<body>
  搜索：<input id="input1"/>
  <script>
    function debounce(fn, delay = 200) {
    let timer = 0
    
    return function () {
        if (timer) clearTimeout(timer)
        
        timer = setTimeout (() => {
            fn.apply(this,arguments) // 透传this 和参数
            timer = 0
        },delay)
    }
}

const input1 = document.getElementById('input1')

input1.addEventListener('keyup',(e) => {
  console.log(e.target.value)
})
  </script>
</body>` ![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)


```

**效果：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/db301e1eb91e42c1a527221f2427d49b.png#pic_center)

* * *

**防抖之后：**

```
`<body>
  搜索：<input id="input1"/>
  <script>
    function debounce(fn, delay = 200) {
    let timer = 0
    
    return function () {
        if (timer) clearTimeout(timer)
        
        timer = setTimeout (() => {
            fn.apply(this,arguments) // 透传this 和参数
            timer = 0
        },delay)
    }
}

const input1 = document.getElementById('input1')

input1.addEventListener('keyup',debounce((e) => {
  console.log(e.target.value)
},300))
  </script>
</body>` ![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

```

**效果：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/8f8b80e9881c40bbbb6ae0603937876c.png#pic_center)

* * *

**对比结果：防抖过滤了许多不必要的事件触发，只在用户输入结束`300ms`后打印了输入框的结果，减少了浏览器的性能消耗。**

* * *

### 节流（throttle）

  节流是一种浏览器事件处理方式，通俗地说，它是限制事件在特定时间内最多触发一次的过程。

  节流，节省交互沟通，流，不一定指流量

通俗的讲：“别急，一个一个来，按时间节奏来，插队者无效”

![在这里插入图片描述](https://img-blog.csdnimg.cn/14e474d4fd694852b5def3b298a9effb.png#pic_center)

> 举个例子，当用户持续滚动鼠标滚轮时，浏览器每隔`100ms`触发一次事件处理函数。这意味着，不管用户滚动的速度如何，在每`100ms`的时间内最多只会触发一次事件处理函数。
>
> 这样做的好处是，防止事件过于频繁的触发，对性能有很好的优化作用。

#### 代码实现（code）

```
`function throttle(fn, delay = 100) {
    let timer = 0 
    return function () {
  if (timer) return
        
        timer = setTimeout(()=> {

            fn.apply(this,arguments) // 透传this 和参数
         timer = 0
        },delay)
    }
}` 

```

* * *

#### 案例测试（test）

监测拖拽工程中，元素的位置信息，节流函数处理的效果。

**节流之前：**

```
`<body>

  <div id="drag" draggable="true" style="width: 100px ;height: 50px; background-color: brown; padding: 10px;">
    可拖拽
  </div>

  <script>
    function throttle (fn, delay = 100) {
      let timer = 0
      return function () {
        if (timer) return

        timer = setTimeout(() => {

          fn.apply(this, arguments) // 透传this 和参数
          timer = 0
        }, delay)
      }
    }

    const div1 = document.getElementById('drag')

    div1.addEventListener('drag',(e) => {
      console.log('拖拽的位置:',e.pageX,e.pageY)
    })
  </script>
</body>` ![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)


```

**效果：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/8871ce4720764190a1ddc2533486b1e5.png#pic_center)

* * *

**节流之后：**

```
`<body>

  <div id="drag" draggable="true" style="width: 100px ;height: 50px; background-color: brown; padding: 10px;">
    可拖拽
  </div>

  <script>
    function throttle (fn, delay = 100) {
      let timer = 0
      return function () {
        if (timer) return

        timer = setTimeout(() => {

          fn.apply(this, arguments) // 透传this 和参数
          timer = 0
        }, delay)
      }
    }

    const div1 = document.getElementById('drag')
    
    div1.addEventListener('drag',throttle((e) => {
      console.log('拖拽的位置:',e.pageX,e.pageY)
    },300))
      
  </script>
</body>` ![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)


```

**效果：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/a71796ac59404bf9a91d66ac51e1bf00.png#pic_center)

* * *

**对比结果：节流防止了频繁的事件触发，只在用户拖拽的过程中，每隔`300ms`打印了元素的位置信息，减少了浏览器的性能消耗。**

* * *

### 总结

* **节流：限制执行频率，有节奏的执行**

* **防抖：限制执行次数，多次密集触发只执行一次**

* **节流关注“过程”，防抖关注“结果”**

* **实际工作还是使用 [lodash](https://www.lodashjs.com/) 工具库较好**
