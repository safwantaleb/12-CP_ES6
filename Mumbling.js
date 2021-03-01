// Mumbling: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  res = "";
  s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    res = res + s[i] + s[i].repeat(i).toLowerCase() + "-";
  }
  res = res.slice(0, res.length - 1);
  return res;
}

console.log(accum("RqaEzty"));
