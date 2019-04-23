const validAnagram = (str1, str2) => {
  if (!str1.length && !str2.length) return true;
  if (str1.length !== str2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (const letter of str1) {
    freqCounter1[letter] = (freqCounter1[letter] || 0) + 1;
  }

  for (const letter of str2) {
    freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
  }

  for (const key in freqCounter1) {
    if (!freqCounter2.hasOwnProperty(key)) return false;
    else if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
};

console.log(validAnagram('rat', 'car'));
