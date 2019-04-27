function findMedian(arr1, arr2) {
  let sortedArr = [],
    idx1 = 0,
    idx2 = 0;

  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (typeof arr1[idx1] === 'undefined') {
      sortedArr.push(arr2[idx2++]);
    } else if (arr1[idx1] > arr2[idx2]) {
      sortedArr.push(arr2[idx2++]);
    } else {
      sortedArr.push(arr1[idx1++]);
    }
  }
  console.log(sortedArr);

  return sortedArr.length % 2 === 1
    ? sortedArr[Math.floor(sortedArr.length / 2)]
    : (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 + 1]) /
        2;
}

console.log(
  findMedian(
    [2, 3, 4, 6, 12, 14, 15, 22, 30, 45, 65, 144],
    [0, 1, 5, 7, 18, 29, 32, 33, 36, 48, 117, 120]
  )
);
