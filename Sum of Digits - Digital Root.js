// Sum of Digits / Digital Root : https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
    res = (n-1)% 9 +1;

    return res;
}

console.log(digital_root(665222198));
