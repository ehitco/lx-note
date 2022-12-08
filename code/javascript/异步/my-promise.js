const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor){
    // 执行器，进入会立即执行。
    // 并传入 resove , reject 方法
    executor(this.resolve, this.reject)
  }

  // 存储状态的变量，初始值是 pending
  status = PENDING;


  // resove 和 reject 为什么要使用箭头函数？
  // 如果直接调用的话， 普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前对象
  // 更改成功后的状态。
  value = null;
  // 失败之后的原因
  reason = null;

  // var callback success
  onFulfilledCallbacks = [];
  // var callback fail
  onRejectedCallbacks = [];

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if ( this.status === PENDING ) {
      // 状态修改为成功
      this.status = FULFILLED;
      // the value of save success
      this.value = value;
      // this.onFulfilledCallback && this.onFulfilledCallback(value);
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value);
      }
    }
  }
  // 更改失败后的状态
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      // this.onRejectedCallback && this.onRejectedCallback(reason);
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason);
      }
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      onRejected(this.reason);
    } else if (this.status === PENDING) {
      // because we didn't know the  change's status ,so need save it, send after staus changed.
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

module.exports = MyPromise;