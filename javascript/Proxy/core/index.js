// 创建变量保存方法
let activeReactiveFn = null
 
// 创建类保存对象响应式方法
class Depend {
    constructor() {
        this.ResObjFunc = new Set()
    }
 
    addFunc() {
        activeReactiveFn ? this.ResObjFunc.add(activeReactiveFn) : ''
    }
 
    notify() {
        this.ResObjFunc.forEach(func => {
            func()
        })
    }
}
 
 
// 处理保存的方法
const targetMap = new WeakMap()
 
function getDepend(target, key) {
    // 根据对象保存
    let map = targetMap.get(target);
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }
    // 根据属性保存
    let depend = map.get(key);
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
 
    return depend
}
 
 
// 代理对象
function resFunc(obj) {
    return new Proxy(obj, {
        // get
        get(target, key, receiver) {
            // 执行对应方法
            const depend = getDepend(target, key);
            depend.addFunc()
 
            return Reflect.get(target, key, receiver); //返回对应的值
        },
        // set
        set(target, key, newValue, receiver) {
            Reflect.set(target, key, newValue, receiver); //修改对应的值
 
            // 执行对应方法
            const depend = getDepend(target, key);
            depend.notify()
        }
    })
}
 
// 封装一个响应式的函数
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
}
 
 
// 创建响应式对象
let ResObj1 = resFunc({
    name: 'pxq',
    age: 18
})
 
 
// 测试
function test1() {
    console.log(ResObj1.name);
}
 
function test2() {
    console.log(ResObj1.age);
}
 
watchFn(test1)
watchFn(test2)
ResObj1.name = 'wxf'
ResObj1.age = 20