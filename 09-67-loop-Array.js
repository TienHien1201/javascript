//Wrrite Arrow function with forEach
const numberList = [1, 2, 3];
//v1 với nhiều hơn 1 tham số thì phải bỏ vào ngoặc () như bên dưới 2 tham số Number và index
numberList.forEach((Number, index) => {
  console.log(Number, index);
});
//V2
numberList.forEach((Number) => {
  console.log(Number);
});
//V3 nếu chỉ có 1 tham số là ta muốn duyệt giá trị của phần tử để lấy giá trị th k cần vị trí thì ta có thể bỏ ngoặc ()
numberList.forEach(Number => {
  console.log(Number);
});
//V4 Nếu chỉ có 1 dòng lệnh thì có thể bỏ ngoặc {} 
numberList.forEach((Number) => console.log(Number));
//V5 đặt tên tắt để duyệt phần tử trong mảng  
numberList.forEach((x) => console.log(x));
//=>Trong thực tế hoàn toàn có thể bỏ dấu () khi sử dụng arrowFunction chỉ có 1 tham số nhưng để tránh nhầm lẫn thì khi ta ctr + s  để crettierrc nó sẽ tự động thêm () vào dù chỉ 1 tham số 