// Write function find max with 3 loop
// for...i
// forEach
// reduce

// for..i
function findMax(arr) {
  if (!Array.isArray(arr)) return undefined;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}
console.log(findMax([1,2,4,5,11]));

// forEach
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}
console.log(findMax([1,2,4,5,11]));
// reduce
// v1
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let max = arr[0];
  return arr.reduce((max, number) => {
    if (number > max) return number;
    return max;
  });
}
console.log(findMax([1,2,4,5,11]));
// v2
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let max = arr[0];
  return arr.reduce((max, number) => {
    return number > max ? number : max;
});
}
console.log(findMax([1,2,4,5,11]));

// v3
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let max = arr[0];
  return arr.reduce((max, number) => (number > max ? number : max));
}
console.log(findMax([1,2,4,5,11]));
