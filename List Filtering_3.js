// List Filtering : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// arr filter

function filter_list(l) {
  arr = l.filter(val => typeof val == "number");

  return arr;
}

console.log(filter_list([1, 2, "aasf", 1, "123", 123]));
