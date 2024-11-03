const arr = [1, [2, [3, [4]]]];

// [1, 2, 3, 4]

const res = arr.flat(Infinity);

console.log(res);