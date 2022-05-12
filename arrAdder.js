const arr = [
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', ''],
];

const arrAdder = (arr) => {
  return arr[0].map((_, i) => arr.map(row => row[i]).join('')).join(' ');
}

console.log(arrAdder(arr));
