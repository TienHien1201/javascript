// Viết hàm kiểm tra tất cả các phần trong trong mảng có phải là số channw hay không => hàm này là cách method every() của array nó kiểm tra sự tồn tại của tất cả các phần tử
function CheckIsAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}
console.log(CheckIsAllEven([2, 4, 6, 8, 10]));
console.log(CheckIsAllEven([1, 2, 3, 4, 5, 6]));
