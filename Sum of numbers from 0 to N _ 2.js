// Sum of numbers from 0 to N : https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let tab = [];
    for (let i = 0; i <= count; i++) {
      tab.push(i);
    }
    let T1 = tab.reduce((sum, val) => sum + val, 0);
    let T2 = tab.join("+");
    if (count < 0) {
      return `${count}<0`;
    }
    if (count == 0) {
      return `${count}=0`;
    }

    return `${T2} = ${T1}`;
  };
  return SequenceSum;
})();

console.log(SequenceSum(6));
