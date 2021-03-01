// Twice linear : https://www.codewars.com/kata/5672682212c8ecf83e000050

function dblLinear(n) {
  var u = [1],
    pt2 = 0,
    pt3 = 0;

  for (var i = 1; i <= n; i++) {
    u[i] = Math.min(2 * u[pt2] + 1, 3 * u[pt3] + 1);
    if (u[i] == 2 * u[pt2] + 1) pt2++;
    if (u[i] == 3 * u[pt3] + 1) pt3++;
  }

  return u[n];
}
