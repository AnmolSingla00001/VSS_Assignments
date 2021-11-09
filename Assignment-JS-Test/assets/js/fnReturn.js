function fFunction(a) {
  if (a == 2) {
    return function (b) {
      return a * b;
    };
  }
  if (a == 5) {
    return function (c) {
      return a - c;
    };
  }
}

console.log(fFunction(2)(4), fFunction(5)(3));
