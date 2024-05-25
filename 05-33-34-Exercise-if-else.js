/*Exercise 1: Write a function to check if a number a positive even number (viết hàm kiểm tra số dương chẳn)
 If yes, return true. Otherwise return false*/

//v1 Flag(Đặt cờ hiệu)
function IsPositiveEvenNumber(n) {
  let check;
  if (n % 2 === 0 && n > 0) check = true;
  else check = false;
  return check;
}

// v2 Flag(Đặt cờ hiệu ver2 tối ưu hơn ver1)
function IsPositiveEvenNumber(n) {
  let check = false;
  if (n % 2 === 0 && n > 0) check = true;

  return check;
}

// v3 tối ưu hơn v2
function IsPositiveEvenNumber(n) {
  if (n % 2 === 0 && n > 0) return true;

  return false;
}

//v4, Tối ưu hơn v3
function IsPositiveEvenNumber(n) {
  return n % 2 === 0 && n > 0; //Nếu biểu thức này đúng thì hàm sẽ trả về true, ngược lại nếu biểu thức này sai thì hàm trả về false
}
console.log(IsPositiveEvenNumber(5));

/*Exercise 2: Write a function to classify student(Viết 1 hàm xếp loại học sinh)
 Receive mark as a number, output as below:
 mark > 8       --> 'Excellence'
 7 <= mark <= 8 --> 'Good'
 4 <= mark <= 6 --> 'Not Good'
 mark < 4       --> 'Bad' */
// v1
function classifyStudent(mark) {
  let result;
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';
  return result;
}
/* v2 Đặt biến lính canh để tối ưu đc 1 trường hợp vì ban đầu ta đặt biến result = bad nếu k thỏa
các điều kiện bến dưới thì lính canh vẫn là bad k cần đặt vào else*/
function classifyStudent(mark) {
  // Validate arguments
  // mark should be in range of [0, 10]
  if (mark < 0 || mark > 10) return '';
  let result = 'Bad';
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  return result;
}
//v3 Tối ưu nhất khử else if; else và hạn chế use else if; else bằng if .... return
function ClassifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Undefined !';
  if (mark > 8) return 'Excellence';
  if (mark >= 7 && mark <= 8) return 'Good';
  if (mark >= 4 && mark <= 6) return 'Not Good';

  return 'Bad';
}

console.log(ClassifyStudent(7));
console.log(ClassifyStudent(9));
console.log(ClassifyStudent(6));
console.log(ClassifyStudent(2));
console.log(ClassifyStudent(11));
console.log(ClassifyStudent(-7));
