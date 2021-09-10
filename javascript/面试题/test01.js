let a = 123;
let b = 'TEST';
let c = [10,20,30];
let d = {
  value: 'AAA'
}

function test(a, b, c, d){
  a += 100;
  b += '666';
  c[0] = 999;
  d.value = 'DDD';
}
test(a, b, c, d);
console.log(a, b, c, d);