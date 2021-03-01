// Create Phone Number : https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  var num_tel = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    num_tel = num_tel.replace("x", numbers[i]);
  }

  return num_tel;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));