// Viết hàm xử lí như cách mà method map xử lí trong js để hiểu rõ hơn cách method map hoạt động còn thực tế ta chỉ cần arr.map(handle) là đc
function map(arr, mappingFn) {
  if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined; //typeof mappingFn !== 'function' là xét nếu cái mappingFn không phải là function thì sẽ return undefined còn nếu đúng là 1 function thì sẽ ra function;
  const arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingFn(element, i);
    arrNew.push(newElement);
  }
  return arrNew;
}

console.log(map([1, 2, 3], (x) => x + 1));
console.log(map([1, 2, 3], (x) => x * 2));
// if even index: increment by 1(Nếu số ở vị trí chẳn trong mảng thì tăng lên 1)
// if odd index: mulitply with 2(Nếu số ở vị trí lẻ trong mảng thì nhân 2)
console.log(map([1, 2, 3, 4, 5], (x, index) => (index % 2 === 0 ? x + 1 : x * 2)));
// Biến đổi mảng chuỗi thành mảng độ dài của chuỗi
console.log(map(['My', 'Tam', 'Tien', 'Hien'], (x) => x.length));
