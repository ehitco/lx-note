# useState | useReducer | 相关面试题

## 1 为什么不能在条件和循环里使用Hooks?

```jsx
`const [name,setName] = useState('上海')
 const [address,setAddress] = useState('杭州')` 
```

每一个useState都会在当前组件中创建一个hook对象 ，并且这个对象中的next属性始终执行下一个useState的hook对象  
这些对象以一种类似链表的形式存在 Fiber.memoizedState 中  
而函数组件就是通过fiber这个[数据结构](https://so.csdn.net/so/search?q=%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84&spm=1001.2101.3001.7020)来实现每次render后name address不会被useState重新初始化

正是因为hooks中是这样存储state的 所以我们只能在hooks的根[作用域](https://so.csdn.net/so/search?q=%E4%BD%9C%E7%94%A8%E5%9F%9F&spm=1001.2101.3001.7020)中使用useState，而不能在条件语句和循环中使用  
因为我们不能每次都保证条件或[循环语句](https://so.csdn.net/so/search?q=%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5&spm=1001.2101.3001.7020)都会执行

```js
`if (something) {
  const [state1] = useState(1)
}

// or

for (something) {
  const [state2] = useState(2)
}` 
```

## 2.为什么不能在函数组件外部使用Hooks?

## 3.React Hooks的状态保存在了哪里?
