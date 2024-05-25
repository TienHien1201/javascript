/*Exercise1: Viết hàm Random một số ngẫu nhiên trong khoảng [0, n]
ví dụ: n = 10 , thì dùng Math.random() -> [0,1) để random ra 0, 1, 5, 10 */
function randomNumber(n) {
  //validate args(Kiểm tra tham số đầu vào)
  if (n <= 0) return -1;

  const random = Math.random() * n; //Hàm random trong Js chỉ rand ra số trong khoảng từ [0 - 1] tức là 0, mấy cho đến 0, mấy chưa đến số 1 thôi nên mõi lần rand ra 1 số bất kì trong khoảng đó ta lấy nhân với n là ra đc số ta muốn rand từ 0 đến n sau đó dùng Math.round() để làm tròn số vừa rand * n để làm tròn. Ví dụ rand ra số 0.5 rồi n = 10 thì 0.5 * 10 = 5 bỏ dô Math.round() để làm tròn số gần nhất vì 5 là số tròn r nên k cần làm tròn ra đc số 5 hoặc rand ra 0,123 rồi 0,123 * n là 0,123 * 10 = 1,23 rồi bỏ dô Math.round() là làm tròn thành 1 ra đc số 1...
  return Math.round(random);
}
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// Exercise2: Viết hàm Random một số ngẫu nhiên trong khoảng [a, b] với a < b. Tư duy:ta muốn rand ra từ 2 đến 8 thì khoảng của ta tức
// range: [2 - 8]
//a: 2
//b: 8
// 2 (min random) là số tối thiểu phải rand
//thì ta chỉ phải rand ra đc số max tối ta là b - a = 8 - 2 <=> max = 6 rồi ta cộng cho a nữa là ra đc maxrandom tức maxrandom = (b - a) + a  ví dụ rand ra số 0 vì là rand từ 2 đến 8 nên rand ra số 0 đi ta chỉ cần cộng cho a là ra đc 2(thỏa khoảng 2 đến 8) hoặc rand ra 1 rồi cộng cho a là 2 ra đc 3(thỏa) hoặc rand ra số 5 rồi cộng cho 2 là 7(thỏa) hoặc tối đa chỉ là số 6 thì cộng cho a cũng bằng 8(thỏa).Còn cách nó rand ra đc số nguyên thì xem là note Ex1 ở trên
//=>> Tóm lại: chỉ cần tính đc số tối đa cho phép rand ra đc trong 1 khoảng rồi cộng cho a là random ra đc số trong khoảng từ a đến b
function randomNumberAtoB(a, b) {
  if (a <= 0 || b <= 0 || a >= b) return -1;

  const random = Math.round(Math.random() * (b - a)) + a;
  return random;
}

console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
console.log(randomNumberAtoB(2, 4));
