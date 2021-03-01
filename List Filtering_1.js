// List Filtering : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// for loop

function filter_list(l) {
  var arr = [];
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] == "number") {
      arr.push(l[i]);
    }
  }

  return arr;
}


console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
