// const obj = {};
// function test(...args) {
//   console.log(args);
// }
// const newFn = test.bind(obj, "静态参数1", "静态参数2");
// newFn("动态参数3", "动态参数4");
const data = [1,2,3]
// let name = Object.prototype.toString.call(data)
let name = data.toString()
console.log(name);