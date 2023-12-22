# Javascript自定义事件Event()与CustomEvent()

------------------------------------

1.CustomEvent构造函数（事件是由程序创建的，可以有任意自定义功能的事件，此特性在 Web Worker 中可用）

```js
new CustomEvent(typeArg,customEventInit);
```

**typeArg:一个表示event名字的字符串**  
**customEventInit：（可选）一个字典类型参数，有如下字段：**

* detail:可选的默认值是 null 的任意类型数据，是一个与 event 相关的值（向事件对象添加更多数据）
* bubbles:一个布尔值，表示该事件能否冒泡。注意：测试chrome默认为不冒泡。
* cancelable:一个布尔值，表示该事件是否可以取消。

_CustomerEventInit 字典参数同样接受来自于 Event 类构造函数的 eventInit 字典参数bubbles和cancelable_

```js
// add an appropriate event listener
obj.addEventListener("cat", function(e) { process(e.detail) });

// create and dispatch the event
var event = new CustomEvent("cat", {
    detail: {
            hazcheeseburger: true
    }
});
obj.dispatchEvent(event);

```

2.Event()构造函数

```js
new Event(typeArg[, eventInit]);
```

**typeArg：是DOMString 类型，表示所创建事件的名称。**  
**eventInit：（可选）是 EventInit 类型的字典，接受以下字段:**

* "bubbles"，可选，Boolean类型，默认值为 false，表示该事件是否冒泡。
* "cancelable"，可选，Boolean类型，默认值为 false， 表示该事件能否被取消。
* "composed"，可选，Boolean类型，默认值为 false，指示事件是否会在影子DOM根节点之外触发侦听器。

```js
// create a look event that bubbles up and cannot be canceled
var evt = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(evt);

// event can be dispatched from any element, not only the document
myDiv.dispatchEvent(evt);

```

3.createEvent（被废弃掉了）

```js
// Create the event.(被废弃掉了)
var event = document.createEvent('Event');

// Create a click event that bubbles up and
// cannot be canceled 
event.initEvent('click', true, false);

// Listen for the event.
elem.addEventListener('click', function (e) {
  // e.target matches elem
}, false);
elem.dispatchEvent(event);

```
