// O(n^2) time | O(1) space

function bubbleSort(arr) {
  let noSwapped;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwapped = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwapped = false;
      }
    }
    if (noSwapped) break;
  }
  return arr;
}

console.log(bubbleSort([35, 88, 31, 7, -27, 25, 67, 81, -4]));
