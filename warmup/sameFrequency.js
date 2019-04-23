function sameFrequency(num1, num2) {
  let num1str = num1.toString();
  let num2str = num2.toString();
  let freqCounter = {};

  for (let letter of num1str) {
    freqCounter[letter] = (freqCounter[letter] || 0) + 1;
  }

  for (let letter of num2str) {
    if (!freqCounter[letter]) return false;
    else freqCounter[letter]--;
  }

  let vals = Object.values(freqCounter);
  let setVals = new Set(vals);
  return setVals.size === 1 && setVals.has(0);
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
