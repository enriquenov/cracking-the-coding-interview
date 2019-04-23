function areThereDuplicates(...args) {
  if (args.length <= 1) return args.length;

  const freqCounter = {};
  let i = 0;

  console.log(args);
  while (i < args.length) {
    if (!freqCounter[args[i]]) freqCounter[args[i]] = 1;
    else return true;
    i++;
  }

  console.log(freqCounter);
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
