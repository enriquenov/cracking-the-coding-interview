var maxSlidingWindow = function(nums, k) {
  let max = 0;
  for (let i = 0; i < k; i++) {
    max += nums[i];
  }
  let tempMax = max;

  // console.log('InitialMax: ', max);
  for (let i = k; i < nums.length; i++) {
    tempMax = tempMax + nums[i] - nums[i - k];
    // console.log('TemporaryMax: ', tempMax, ', when i equals: ', i);
    max = Math.max(tempMax, max);
  }

  return max;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
