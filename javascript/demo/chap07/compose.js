const compose = (a, b) => (c) => a(b(c));
let number = compose(Math.round, parseFloat)