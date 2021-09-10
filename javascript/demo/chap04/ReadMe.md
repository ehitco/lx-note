<!--
 * @Description: 闭包与高阶函数
 * @LastEditTime: 2021-09-07 10:48:14
-->

# 闭包与高阶函数

闭包就是一个内部函

## 闭包的使用场景

```javascript
const tap = (value) => (fn) =>
  typeof fn === "function" && fn(value), console.log(value);
```

> 在 JavaScript 中 ， （exp1,exp2)的含义是她将执行两个参数并返回第二个表达式的结果，即 exp2, 在上面的例子中，程序会根据语法调用函数 fn,也会将 value 打印到控制台。
