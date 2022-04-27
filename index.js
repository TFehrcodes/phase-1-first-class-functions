function receivesAFunction(cb) {
  return cb();
}
const namedFunction = () => console.log('I\'m a function!');
const returnsANamedFunction = () => {
  return namedFunction;
}

const returnsAnAnonymousFunction = () => {return function() {
console.log('I\'m an anonymous function!');}
};
