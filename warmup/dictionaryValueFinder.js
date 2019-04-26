function valueFinder(dict, val) {
  const keysArr = [];

  valueFinderHelper(dict, '', val, keysArr);

  return keysArr;
}

function valueFinderHelper(dict, initialKey, val, keysArr) {
  for (let key in dict) {
    if (dict.hasOwnProperty(key)) {
      let currentVal = dict[key];

      if (!Array.isArray(currentVal) && typeof currentVal === 'object') {
        if (!initialKey) {
          valueFinderHelper(currentVal, key, val, keysArr);
        } else if (key === '') {
          valueFinderHelper(currentVal, initialKey, val, keysArr);
        } else {
          valueFinderHelper(currentVal, `${initialKey}.${key}`, val, keysArr);
        }
        //
      } else if (currentVal === val) {
        if (!key) {
          keysArr.push(initialKey);
        } else {
          keysArr.push(`${initialKey}.${key}`);
        }
      }
    }
  }
}

let dict = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '5',
      e: {
        t: '5',
        y: '2',
      },
    },
  },
  Key3: {
    '': {
      hi: '5',
    },
    z: '5',
  },
};

console.log(valueFinder(dict, '5'));
