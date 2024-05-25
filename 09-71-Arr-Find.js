// Viết hàm dùng vòng lặp for...i để hiểu rỏ bản chất của method find trong Js
// V1
const numberList = [1, 2, 3, 4, 5, 6];
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return numberList[i];
  }
  return undefined;
}
console.log(findFirstEven(numberList));

// V2 dùng thuật callbackFn để xử lí điều kiện bất kì
const numberList1 = [1, 2, 3, 4, 5, 6];
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    if (callbackFn(numberList[i], i)) return numberList[i]; //i là vị trí của số thỏa đk
  }
  return undefined;
}
function isEven(number) {
  return number % 2 === 0;
}
console.log(findFirstEven(numberList1, isEven)); //isEven là chỉ truyền vào tên hàm thôi chứ không phải gọi ham isEven vì ở đk của for cái callbackFn mới là gọi ham isEven để xử lí
// V3 use inline Function
console.log(
findFirstEven(numberList1, function (number) { //Thay vì tạo 1 hàm isEven để xử lí thì ta có thẻ dùng inlineFunction tức là định nghĩa hàm trực tiếp ở trong hamf khác luôn
  return number % 2 === 0;
}));
// V4 arrowFunction
console.log(
findFirstEven(numberList1, (number) => {
  return number % 2 === 0;
}));
// V4 arrowFunction shortHand
console.log(findFirstEven(numberList1, (number) => number % 2 === 0));
console.log(findFirstEven(numberList1, (number) => number >3));