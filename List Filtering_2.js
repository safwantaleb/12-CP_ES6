// List Filtering : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// for..of loop

function filter_list(l) {
  var arr = [];
  for (const val of l) {
      if (typeof val == "number") {
        arr.push(val);
      }
  }

  return arr;
}

console.log(filter_list([1, 2, "aasf", 1, "123", 123]));
