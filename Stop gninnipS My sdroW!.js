// Stop gninnipS My sdroW! : https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(phrase) {
  const senArray = phrase.split(" ");
  let res = "";
  senArray.map((str, i) => {
    if (str.length >= 5) {
      senArray[i] = str.split("").reverse().join("");
    } else {
      senArray[i] = str;
    }
    res = senArray.join(" ");
  });
  return res;
}

console.log(spinWords("You are almost to the last test"));
