// Which triangle is that? https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript

var typeOfTriangle = function (sideA, sideB, sideC) {
    let sum = sideA + sideB + sideC;
    let max = Math.max(sideA, sideB, sideC);
    if (sum - max <= max) {
        return "Not a valid triangle";
    }
    if (
        typeof sideA == "number" &&
        typeof sideB == "number" &&
        typeof sideC == "number" &&
        sideA != 0 &&
        sideB != 0 &&
        sideC != 0
    ) {
        if (sideA == sideB && sideA == sideC) {
            return "Equilateral";
        } else if (sideA == sideB || sideA == sideC || sideC == sideB) {
            return "Isosceles";
        } else if (sideA != sideB && sideA != sideC) {
            return "Scalene";
        }
    } else return "Not a valid triangle";
};

console.log(typeOfTriangle(1, 3, 2));