const tap = (value) =>
(fn) => (typeof(fn) === 'function' && fn(value),
console.log(value)
)

// tap('god')((it)=>console.log('value is', it))

[1,2,3].forEach((a) => {
  tap(a)(()=>{
    console.log(a)
  })
});