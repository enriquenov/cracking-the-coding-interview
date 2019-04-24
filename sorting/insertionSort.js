// O(n^2) time | O(1) space

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > cur; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = cur;
  }

  return arr;
}

console.log(insertionSort([34, 22, 10, 19, 17, -32, 10, 25, -3]));
