const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
  ['G',  '00'],
]);
console.log(map.values())
vArray = []
for (let value of map.values()) {
  console.log(value);
  vArray.push(value);
}
console.log(vArray.reverse())