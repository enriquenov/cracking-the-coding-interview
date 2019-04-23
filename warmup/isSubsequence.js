function isSubsequence(str1, str2) {
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < str1.length && idx2 < str2.length) {
    if (str1[idx1] === str2[idx2]) idx1++;
    idx2++;
  }

  return idx1 === str1.length;
}

/*
  Recursive version

  function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
  }
*/

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
