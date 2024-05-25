// Remove ở vị trí giữa arr bất kì
const numberList = [1, 2, 3, 5];
numberList.splice(2, 1, 6, 7);
console.log(numberList);
// Remove ở cuối arr
const numberList1 = [1, 2, 3, 5];
numberList1.pop(2, 1, 6, 7);
console.log(numberList1);
// Remove ở đầu arr
const numberList2 = [1, 2, 3, 5];
numberList2.shift(2, 1, 6, 7);
console.log(numberList2);

// Thêm ở cuối arr
const numberList3 = [1, 2, 3, 5];
numberList3.push(6);
console.log(numberList3);
// Thêm ở đầu arr
const numberList4 = [1, 2, 3, 5];
numberList4.unshift(0);
console.log(numberList4);
