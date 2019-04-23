function nestedEvenSum(obj) {
  let result = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'number' && !(obj[key] % 2)) result += obj[key];
    else if (typeof obj[key] === 'object') result += nestedEvenSum(obj[key]);
  }

  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
