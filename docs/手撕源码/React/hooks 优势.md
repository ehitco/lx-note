# hooks 优势

> 副作用的关注点分离：副作用指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求，访问原生 dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。以往这些副作用都是写在类组件中的。而 useEffect 在全部渲染完毕后才会执行， useLayoutEffect 会在浏览器 layout 之后， painting 之前执行

- 能优化类组件的三大问题（this 指向可能造成的性能问题）
- 能在无需修改组件结构的情况下复用状态逻辑 （自定义 hooks）
- 能将组件中相互关联的部分拆分成更小的函数 （比如设置订阅或请求数据）

## 注意事项

- 只能在函数内部的最外层调用 Hook， 不要在循环、条件判断或者子函数中调用
- 只能在 React 的函数组件中调用 Hook， 不要在其他 JavaScript 函数中调用
- <https://reactjs.org/warnings/invalid-hook-call-warning.html>

## useState & useMemo & useCallback

- React 假设当你多次调用 useState 的时候， 你能保证每次渲染时他们的调用顺序是不变的。
- 通过在函数组件里调用他来给组件添加一些内部 state, React 会在重复渲染时保留这个 state
- useState 唯一的参数就是初始 state
- useState 会返回一个数组：一个 state, 一个更新 state 的函数。

### 每次渲染都是独立的闭包

- 每一次渲染都有它自己的 Props 和 State
- 每一次渲染都有它自己的事件处理函数
- 当点击更新状态的时候， 函数组件都会重新被调用，那么每次渲染都是独立的，取到的值不会受后面操作的影响

### 函数式更新

- 如果新的 state 需要通过使用先前的 state 计算得出， 那么可以将回调函数当作参数传递给 setState. 该回调函数将接收先前的 state，并返回一个更新后的值。

### 惰性初始化 state

- initialState 参数只会在组件的初始化渲染中起作用，后续渲染时会被忽略
- 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state, 此函数只在初始渲染时调用
