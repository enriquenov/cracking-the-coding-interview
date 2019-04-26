function tupleSort(arr) {
  return arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
}

console.log(tupleSort([[1, 7], [4, 5], [8, 3], [11, 3], [6, 10], [3, 7]]));
