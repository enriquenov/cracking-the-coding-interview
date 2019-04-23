function flatten(arr) {
  let result = [];

  (function helper(arr) {
    [...arr].forEach(e => {
      if (Array.isArray(e)) {
        helper(e);
      } else {
        result.push(e);
      }
    });
  })(arr);

  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3])
