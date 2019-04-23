function countUniqueValues(arr) {
  if (arr.length === 1) return 1;
  let i = 0;
  let j = 1;
  let counter = 0;

  while (i < arr.length - 1) {
    if (arr[i] !== arr[j]) {
      if (counter === 0) counter = 2;
      else counter++;
    }
    i++;
    j++;
  }

  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
