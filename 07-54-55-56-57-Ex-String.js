/*Ex1: Write a function to transform a string(Viết một hàm biến đổi một string như sau:)
- The first letter in UPPERCASE(Ký tự đầu tiên thì phải viết hoa)
- The rest in LOWERCASE(còn tất cả các ký tư còn lại thì phải viết thường)
Eg: capitalize ('easy FRontend') -> 'Easy frontend'*/
function capitalize(str) {
  if (str === '') return '';
  const Firstletter = str[0].toUpperCase(); //lấy ký tự đầu và biến đổi thành ký tự hoa
  const rest = str.slice(1).toLowerCase(); //Slice nếu chỉ truyền vào 1 tham số thì sẽ lấy ký tự từ tham số truyền vào cho đến cuối chuỗi để trừ ký tự đầu ra cá ký tự còn lại đều là chữ thường.
  return `${Firstletter}${rest}`;
}
console.log(capitalize(''));
console.log(capitalize('ABC'));
console.log(capitalize('easy FRontend'));
/*Ex2: Write a function check if a string contains an email address with `@gmail.com` or not(Viết một hàm kiểm tra xem chuỗi có chưa địa chỉ @gmail.com không)*/
function hasEmail(str) {
  if (str === '') return false;
  //return str.includes('@gmail.com'); //Cách 1: use includes() là chỉ cần trong chuỗi mẹ bất kì ở vị trí nào có chứa chuỗi con thì trả về là true
  //return str.indexOf('@gmail.com') >= 0;//Cách 2: use indexOf() là chỉ kiểm tra ở cuối chuỗi mẹ nếu cuối chuỗi có chưa ký tự con thì trả về 1 số nguyên >= 0 nếu không trả về -1
  return str.index('@gmail.com') >= 0; //Cách 3: use index() là chỉ kiểm tra ở đầu chuỗi mẹ nếu đầu chuỗi có chưa ký tự con thì trả về 1 số nguyên >= 0 nếu không trả về -1
}
console.log(hasEmail('TienHienDev my email is  tienhien.cntt@gmail.com'));
console.log(hasEmail('HienDevVip@gmail'));
console.log(hasEmail('HienDevVip'));
console.log(hasEmail(''));
/*Ex3:Write a Javascript funcction to paramterize a string (Viết hàm bieens đổi chữ hoa thành chữ thường hết và khoảng trắng thành dấu -)
Eg: paramterize ('Code JS Is Fun') -> ('Code-JS-Is-Function')*/
function ParamterizeString(str) {
  if (str === '') return '';
  //return str.replaceAll(' ', '-').toLowerCase(); //Cách 1: Dùng replaceAll
  return str.split(' ').join('-').toLowerCase(); //Cách 2: Dùng spit để phân tách các ký tự là khoảng trắng vào 1 mảng và sau đó kết hợp vs join để gộp các phần tử của mảng đã phân tách lại thành một chuỗi hoàn chỉnh khi gộp bằng join dùng - để gộp các phần tử trong mảng đã đc phân tách bằng split lại thành 1 chuỗi hoàn chỉnh.
}
console.log(ParamterizeString('Code JS Is Fun'));
/* reate a function truncate(text, maxlength) that checks the length of the text and, 
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal 
to maxlength.(Viết 1 hàm chỉ cho phép hiển thị tối đa bao nhiêu ký tự mà thôi nếu hơn thì hiện ký tự "…" )
##Nguồn lấy ký tự biệt "…" 
Horizontal ellipsis code is 8230. 
String.fromCodePoint(8230) //Cách 1 để hiển thị ellipsis "…" 
UTF-16 '\u2026'//Cách 2 để hiển thị ellipsis "…" 
https://www.compart.com/en/unicode/U+2026 */
function truncate(text, maxlength) {
  if (text === '') return '';
  if (text.length <= maxlength) return text;
  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}${'\u2026'}`;
}
console.log(truncate('Easy Fontend', 5));

//EX: Chuyển đổi giây vê định dạng hh:mm:ss
function formatTime(seconds) {
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MIN = 60;
  // your code here
  if (seconds <= 0 || seconds > 86400) return '00:00:00';
  const h = Math.trunc(seconds / SECONDS_PER_HOUR);
  const m = Math.trunc((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
  const s = (seconds % SECONDS_PER_HOUR) % SECONDS_PER_MIN;
  if (seconds >= 1 && seconds <= 9) return '00' + ':' + '00' + ':' + '0' + seconds.toString();
  if (h >= 1 && h <= 9 && m >= 1 && m <= 9 && s >= 1 && s <= 9)
    return '0' + h.toString() + ':' + '0' + m.toString() + ':' + '0' + s.toString();
  if (h >= 1 && h <= 9 && m >= 1 && m <= 9)
    return '0' + h.toString() + ':' + '0' + m.toString() + ':' + s.toString();
  if (h >= 1 && h <= 9 && s >= 1 && s <= 9)
    return '0' + h.toString() + ':' + m.toString() + ':' + '0' + s.toString();
  if (m >= 1 && m <= 9 && s >= 1 && s <= 9)
    return h.toString() + ':' + '0' + m.toString() + ':' + '0' + s.toString();
  if (h >= 1 && h <= 9) return '0' + h.toString() + ':' + m.toString() + ':' + s.toString();
  if (m >= 1 && m <= 9) return h.toString() + ':' + '0' + m.toString() + ':' + s.toString();
  if (s >= 1 && s <= 9) return h.toString() + ':' + m.toString() + ':' + '0' + s.toString();

  return h.toString() + ':' + m.toString() + ':' + s.toString();
}
console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(500));
console.log(formatTime(4256));

//Từ chuỗi email Phân tách phần domain
// Dùng split
function extractDomainV1(email) {
  // your code here
  if (email === '') return '';
  const cut = email.split('@');
  return cut[1];
}
console.log(extractDomainV1('alice@gmail.com'));
console.log(extractDomainV1('bob@abc.com'));
// Dùng indexOf + slice
function extractDomainV2(email) {
  // your code here
  if (email === '') return '';
  const cut = email.indexOf('@');
  return email.slice(cut + 1);
}
console.log(extractDomainV2('alice@gmail.com'));
console.log(extractDomainV2('bob@abc.com'));

/*Ex: Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName.
Quy tắc để tạo chuỗi fullName như sau:
+ firstName và lastName là optional (có thể không có)
+ fullName không có khoảng trắng thừa ở đầu và cuối chuỗi
+ firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường*/
function getFullName(firstName, lastName) {
  // your code here 
  if (firstName) firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  if (lastName) lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  if (firstName === '' && lastName === '') return '';
  if (firstName === ' ' && lastName.length > 0) return lastName.trim();
  if (firstName.length > 0 && lastName === '') return firstName.trim();
  if (firstName.length > 0 && lastName === undefined) return firstName.trim();
  if (firstName === undefined && lastName.length > 0) return lastName.trim();
  const join = firstName.trim() + ' ' + lastName.trim();
  return join.trim();
}
console.log(getFullName('Alice'));
console.log(getFullName('Alice'));
console.log(getFullName('AlICE', ''));
console.log(getFullName('aLice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bob', 'Tran'));
console.log(getFullName('john', 'pHam'));
