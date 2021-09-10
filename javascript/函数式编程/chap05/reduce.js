//  reduce 规约数组

// const reduce = (array,fn) => {
//   let accumlator = 0;
//   for(const value of array)
//     accumlator = fn(accumlator,value)
//     return [accumlator]
// }

const reduce = (array, fn, initialValue) => {
  let accumlator;
  if (initialValue != undefined)
    accumlator = initialValue
  else
    accumlator = array[0];
  if(initialValue === undefined)
    for(let i =1; i<array.length; i++)
      accumlator = fn(accumlator, array[i])
  else 
    for(const value of array)
    accumlator = fn(accumlator, value)
  return [accumlator]
}

console.log(reduce([1,2,3],(a,b)=> a*b));