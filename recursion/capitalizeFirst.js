function capitalizeFirst(arr) {
  let result = [];

  if (!arr.length) return result;

  result.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  return result.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
