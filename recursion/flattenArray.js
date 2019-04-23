function flatten(arr) {
  let result = [];

  [...arr].forEach(e => {
    if (Array.isArray(e)) {
      result = result.concat(flatten(e));
    } else {
      result.push(e);
    }
  });

  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3])
