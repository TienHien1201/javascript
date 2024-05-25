// Viết hàm xử lí giống như method filter trong js để hiểu rỏ honw cách method filter trong js hoạt động như thế nào trong thực tế chỉ cần arr.filter(handle) là sử dụng đc rồi
function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;
  const ArrNew = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackFn(element, i)) ArrNew.push(element);
  }
  return ArrNew;
}

console.log(filter([1, 2, 3, 4, 5], (x) => x > 3));
// Lọc ra số nào trong mảng là số chẳn ở vị trí lẻ hoặc số lẻ ở vị trí chẳn
console.log(filter([2, 2, 4, 4, 5], (x,idx) => (idx % 2 === 0 && x % 2 !== 0) || (idx % 2 !== 0 && x % 2 === 0) ));
