const add = function add(a, b) {
  return a + b;
};

const sub = function sub(a, b) {
  return a - b;
};

const mul = function mul(a, b) {
  return a * b;
};

const identityf = function identityf(a) {
  return function() {
    return a;
  }
};

const addf = function addf(a) {
  return function(b) {
    return a + b;
  };
};

const liftf = function liftf(bin) {
  return function(a) {
    return function(b) {
      return bin(a, b);
    }
  }
};

const curry = function curry(bin, a) {
  return function (b) {
    return bin(a, b);
  }
};

// const curry = function curry(bin, a) {
//   return liftf(bin)(a);
// }

const inc = addf(1);
// inc = liftf(add)(5)(1);
// inc = curry(add, 5)(1);

const twice = function twice(bin) {
  return function(a) {
    return bin(a, a); 
  }
};

const double = twice(add);
const square = twice(mul);

const reverse = function reverse(bin) {
  return function(a, b) {
    return bin(b, a);
  }
};

const composeu = function composeu(first, second) {
  return function(a) {
    return second(first(a));
  }
};

console.log(composeu(double, square)(5));
