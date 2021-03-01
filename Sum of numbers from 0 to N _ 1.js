// Sum of numbers from 0 to N : https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

function SequenceSum(number) {
  if (number < 0) {
    return `${number} < 0`;
  }
  sum = 0;
  sequence = "";
  for (let i = 0; i <= number; i++) {
    sum += i;
    sequence = sequence + `+${i}`;
  }
  sequence = sequence.slice(1, sequence.length);
  SequenceSum = `${sequence} = ${sum}`;

  return SequenceSum;
}

console.log(SequenceSum(6));
