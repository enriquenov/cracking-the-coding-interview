function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === avg * 2) {
      return true;
    } else if (arr[left] + arr[right] > avg * 2) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
