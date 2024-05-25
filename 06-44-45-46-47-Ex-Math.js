// 1. Write a function to calculate the area of a rectangl(Viết hàm tính diện tích hình chữ nhật)
function calculateOfRectangl(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}
console.log(calculateOfRectangl(2, 3));
console.log(calculateOfRectangl(4, 5));
console.log(calculateOfRectangl(6, 7));
//2. Write a function to calculate perimeter of a rectangle(Viết hàm tính chu vi hình chữ nhật)
function calculatePerimeteOfRecatangle(a, b) {
  if (a <= 0 || b <= 0) return -1;

  return (a + b) * 2;
}
console.log(calculatePerimeteOfRecatangle(2, 3));
console.log(calculatePerimeteOfRecatangle(4, 5));
console.log(calculatePerimeteOfRecatangle(6, 7));
// 3. Write a function to calculate the area of a circle(viết hàm tính diện tích hình tròn)
// S = PI * R * R
function calculateOfCircle(r) {
  if (r <= 0) return -1;

  return Math.PI * r * r;
}
console.log(calculateOfCircle(5));

//4. Write a function to check if a number is odd/even(Viết hàm kiểm tra số chẳn/lẻ)
function checkNumberIsOddOrEven(a) {
  if (a <= 0) return -1;
  if (a % 2 === 0) return 'a la so chan';
  return 'a la so le';
}
console.log(checkNumberIsOddOrEven(7));
//5. Write a function to check if a number is divisible by 5(Viết hàm chia hết cho 5)
function checkDivisibleByFive(a) {
  if (a <= 0 || a % 5 !== 0) return -1;
  return a;
}
console.log(checkDivisibleByFive(3));
//6. Write a function to check if a number is perfect square(Viết hàm kiểm tra 1 số có phải là số chính phương hay không) -> một số đgl số chính phương khi nó căn bậc hai ra 1 số tự nhiên nào đó
// n = a * a
// RECOMMENDED
// 25
// 5
// sqrtNInt = 5
// 20
// 4.x
// sqrtNInt = 4
function checkNumberIsPerfect(a) {
  if (a <= 0) return false;
  const sqrtN = Math.sqrt(a);
  const sqrtNInt = Math.trunc(sqrtN); //Math.trunc() là để lấy phần nguyên của sô sau khi căn bậc hai ra nếu phần nguyên mà bình phương lên ra lại a thì a là số chính phương
  return sqrtNInt * sqrtNInt === a;
}
console.log(checkNumberIsPerfect(25));
console.log(checkNumberIsPerfect(3));
console.log(checkNumberIsPerfect(9));
console.log(checkNumberIsPerfect(4));
//7. Convert hours to second(viết hàm chuyển đổi giờ thành giây)
function convertHoursToSecond(h) {
  if (h < 0) return -1;
  if (h === 0) return 0;
  return h * 3600;
}
console.log(convertHoursToSecond(2));
//8. Given 3 number, find max(viết hàm tìm số lớn nhất, trong 3 số cho trước)
function findMaxNum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
function findMaxNum(num1, num2, num3) {
  let max = num1;
  if (num1 < num2) max = num2;
  if (num2 < num3) max = num3;
  return max;
}

console.log(findMaxNum(1, 2, 3));
console.log(findMaxNum(3, 3, 3));
console.log(findMaxNum(3, 6, 5));

//9. Given 3 number, find max even number(Viế hàm tìm số chẳn lớn nhất, trong 3 số cho trước)
function findMaxNumEven(num1, num2, num3) {
  let max = Number.NEGATIVE_INFINITY;
  if (num1 > max && num1 % 2 === 0) max = num1;
  if (num2 > max && num2 % 2 === 0) max = num2;
  if (num3 > max && num3 % 2 === 0) max = num3;

  return max;
}
console.log(findMaxNumEven(1, 3, 5));
console.log(findMaxNumEven(1, 2, 5));
console.log(findMaxNumEven(1, 6, 4));
console.log(findMaxNumEven(1, 20, 10));
// 10. Get the ones of a number having 3 digits(Viết hàm lấy ra đc số hàng đơn vị từ số có 3 chữ số)
function getOnesOfThreeDigits(number) {
  if (number.toString().length !== 3) return -1;
  return number % 10;
}
console.log(getOnesOfThreeDigits(1986));
console.log(getOnesOfThreeDigits(986));
// 11. Get the tens of a number having 3 digits(Viết hàm lấy ra đc số ở hàng chục từ số có 3 chữ số)
function getTensOfThreeDigits(number) {
  if (number.toString().length !== 3) return -1;
  return Math.trunc(number / 10) % 10;
}
console.log(getTensOfThreeDigits(896));
// 12. Get the hundreds of a number having 3 digits(Viết hàm lấy ra đc số ở hàng trăm từ số có 3 chữ số)
function getHundredsOfThreeDigits(number) {
  if (number.toString().length !== 3) return -1;
  return Math.trunc(number / 100);
}
console.log(getHundredsOfThreeDigits(645));
// 13. Sum all digits of a number having 3 digits(Viết hàm tính tổng cả 3 số)
function sumAllDigitsOfThreeNumber(number) {
  if (number.toString().length !== 3) return -1;
  const ones = number % 10;
  const tens = Math.trunc(number / 10) % 10;
  const hundreds = Math.trunc(number / 100);
  return ones + tens + hundreds;
}
console.log(sumAllDigitsOfThreeNumber(923));
//Tìm chữ số lớn nhất của một số nguyên dương
function getMaxDigit(n) {
  if (n > 999 || n <= 0) return -1;
  const ones = n % 10;
  const tens = Math.trunc(n / 10) % 10;
  const hundreds = Math.trunc(n / 100);

  let max = Number.NEGATIVE_INFINITY;
  if (ones > max && ones > 0) max = ones;
  if (tens > max && tens > 0) max = tens;
  if (hundreds > max && hundreds > 0) max = hundreds;
  return max;
}
console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));
