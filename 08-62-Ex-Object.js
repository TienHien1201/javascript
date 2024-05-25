// 1. Create an object student with name is Easy Frontend and age is 18.(Tạo 1 object student với name: Easy Frontend và age: 18)
/* V1
const student = {
  name: 'Easy Frontend',
  age: 18,
};
console.log(student);*/
// V2
const student = {};
student.name = 'Easy Frontend';
student.age = 18;
console.log(student);
// 2. Check if an object is empty (means have no keys) { } --> no keys --> length of key list is 0(Viết một hàm Kiểm tra object có rỗng hay không)
function isEmpty(object) {
  return Object.keys(object).length === 0;
}
console.log(isEmpty(student));
console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));
// 3. Get average mark of an object calcAvgMark({ math: 10, english: 8 }) --> 9(Viết 1 hàm tính mark(điểm) trung bình tất cả các môn của object)
function calcAvgMark(mark) {
  if (!mark) return -1; //Nếu object không có dữ liệu thì return -1
  const length = Object.keys(mark).length; //Count how many subjects in object for save variable length. Vì keys là 1 cái mảng để lưu các phần tử của 1 object maf ở đây ta đang đếm xem có bao nhiêu môn trong 1 object thì ta phải dùng length để đếm có bao nhiêu phần tử mark trong keys tương đương với bấy nhiên môn
  let sum = 0; //Sum all mark subject
  for (const key in mark) {
    const value = mark[key]; //take mark of each subject
    sum += value;
  }
  return (sum / length).toFixed(1); //Tinhs trung bình Làm tròn 1 chữ số thập phân
}
console.log(calcAvgMark({ english: 10, math: 10, tech: 10 })); //Đây là truyền vào 1 cái object gồm 3 môn học và điểm của 3 môn

/*EX: Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về: true nếu số lượng keys của 2 objects bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh) ngược lại là false
Ví dụ:
isEqual({}, {}) --> true
isEqual({ name: 'Bob' }, { name: 'Alice' }) --> false
isEqual({ name: 'Bob' }, { name: 'Bob' }) --> true
isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }) --> false
Giả sử kiểu dữ liệu của các thuộc tính của cả 2 objects đều là kiểu dữ liệu primitive.*/
function isEqual(obj1, obj2) {
  if (!obj2 && !obj1) return true;
  if (!obj2 || !obj1) return false;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (const key in keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
console.log(isEqual({}, {}));
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }));
