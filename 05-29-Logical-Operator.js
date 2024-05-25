function checkNumber1(a) {
  if (a > 0) {
    console.log('a la so duong !');
  }
}
function checkNumber2(a) {
  if (a > 0 && a % 2 === 0) {
    console.log('a la so duong chan !');
  }
}
function checkNumber3(a) {
  if (a > 0 && a % 2 === 0 && a > 10) {
    console.log('a la so duong chan lon hon 10 !');
  }
}
function checkNumber4(a) {
  if (a > 0 && a % 2 === 0 && a > 10 && a % 5 === 0) {
    console.log('a la so duong chan lon hon 10 chia het cho 5 !');
  }
}
function checkNumber5(a) {
  let isEven = false;
  let isODD = false;
  if ((a > 0 && a % 2 === 0) || (a < 0 && a % 2 !== 0)) {
    isEven = true;
    isODD = true;
  }
  if (isEven || isODD) {
    console.log('a la so duong chan hoac a la so am le !');
  }
}

checkNumber4(5);
