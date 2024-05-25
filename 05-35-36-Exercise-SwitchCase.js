/*Exercise 1: Write a function to classify student(Viết hàm xếp hạng điểm của học sinh)
Receive mark as a number, output as below:
mark > 8       --> 'Excellence'
7 <= mark <= 8 --> 'Good'
4 <= mark <= 6 --> 'Not Good'
mark < 4       --> 'Bad'
Using switch...case to implement it*/
function ClassifyStudent(mark) {
  let result;
  switch (mark) {
    //Cách gộp case cho gọn thay vì viết từng case cụ thể ra
    case 1:
    case 2:
    case 3: {
      result = 'Bad';
      break;
    }
    case 4:
    case 5:
    case 6: {
      result = 'Not Good';
      break;
    }
    case 7:
    case 8: {
      result = 'Good';
      break;
    }
    case 9:
    case 10: {
      result = 'Excellence';
      break;
    }
    default: {
      result = 'Invalid Mark !';
    }
  }
  return result;
}

console.log(ClassifyStudent(7));
console.log(ClassifyStudent(9));
console.log(ClassifyStudent(6));
console.log(ClassifyStudent(2));
console.log(ClassifyStudent(11));
console.log(ClassifyStudent(-7));

/*Exercise 2: A list of error codes from server(Viết 1 hàm trả về 1 cái message của mã lỗi tương ứng ở sever)
E01: Invalid username or password
E02: Too many attempts
E03: Missing data
Other code: Something went wrong
Write a function that take errorCode and return the according message*/
//v1 bassic
function GetErrorCodeMessage(errorCode) {
  let message;
  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username or password';
      break;
    }
    case 'E02': {
      message = 'Too many attempts';
      break;
    }
    case 'E03': {
      message = 'Missing data';
      break;
    }
    default: {
      message = 'Something went wrong';
      break;
    }
  }
  return message;
}
//v2 tối ưu nhất có thể
function GetErrorCodeMessage(errorCode) {
  /*Đây là object chứa tất cả các key values của ta với mõi key values sẽ có cái value tương ứng khi ta muốn
  cái message tương ứng ta chỉ cần lấy cái key tương ứng trong cái errorMap ra là xong nói cách dễ hiểu đây là cái map*/
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };
  /*Nếu cái message là 1 trong các key values thì messgae trả về true và trả về các value tương ứng trong map hoặc cái message k nằm trong key values của errorMap thì messgae trả về false mà ta set cho false là cái 
  'Something went wrong'*/
  return errorMap[errorCode] || 'Something went wrong';
}

console.log(GetErrorCodeMessage('E01'));
console.log(GetErrorCodeMessage('E02'));
console.log(GetErrorCodeMessage('E03'));
console.log(GetErrorCodeMessage('E04'));
