// Write function to find the longest word with 3 loop
// for...i
function findLongestWord(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let MaxLengthWord = arr[0].length;
  let MaxWord;
  for (let i = 0; i < arr.length; i++) {
    if (MaxLengthWord < arr[i].length) {
      MaxLengthWord = arr[i].length;
      MaxWord = arr[i];
    }
  }
  return MaxWord + '  With lenght word is ' + MaxLengthWord;
}
console.log(findLongestWord(['Pham', 'Tien', 'Hien', 'Truong', 'Thi', 'My', 'Tam']));
// forEach
function findLongestWord(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let MaxLengthWord = arr[0].length;
  let MaxWord;
  arr.forEach((element) => {
    if (MaxLengthWord < element.length) {
      MaxLengthWord = element.length;
      MaxWord = element;
    }
  });

  return MaxWord + ' With lenght word is ' + MaxLengthWord;
}
console.log(findLongestWord(['Pham', 'Tien', 'Hien', 'Truong', 'Thi', 'My', 'Tam']));
// reduce
function findLongestWord(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  return arr.reduce((MaxLengthWord, currentWord) =>
    currentWord.length > MaxLengthWord.length ? currentWord : MaxLengthWord
  );
}
console.log(findLongestWord(['Pham', 'Tien', 'Hien', 'Truong', 'Thi', 'My', 'Tam']));

