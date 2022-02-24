const person = { name: "yideng" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));
console.log(typeof undefined);

let num = 22.3345;
console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));
console.log(-Infinity > 0)