const add = (x, y) => x + y;

const addcurried = x => y => x + y;

const curry = (binaryFn) => {
  return function (firstArg) {
    return function (secondAry) {
      return binaryFn(firstArg, secondAry);
    }
  }
}

let autoCurriedAdd = curry(add);
console.log(autoCurriedAdd(2)(3));
// 为什么需要柯里化，他有什么用？
const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
  if(mode === 'DEBUG')
    console.debug(initialMessage,errorMessage + 'at line:' + lineNo);
  else if (mode === 'ERROR')
    console.error(initialMessage, errorMessage + 'at line:' + lineNo);
  else 
      throw 'wrong mode'
}

let curry = (fn) => {
  if(typeof fn !== 'function') {
    throw Error('No function provided');
  }
  return function curriedFn(...params) {
    return fn.apply(null, params);
  }
}