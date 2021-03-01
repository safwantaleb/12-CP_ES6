// You're a square! : https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function (n) {
  ssq = false;
  if (n < 0) {
    return ssq;
  } else if (Number.isInteger(Math.sqrt(n))) {
    ssq = true;
  } else {
    ssq = false;
  }

  return ssq;
};

console.log(isSquare(5));
