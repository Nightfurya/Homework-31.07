var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];
var d = process.argv[5];
var e = process.argv[6];
var f = process.argv[7];

a = Math.abs(a);
b = Math.abs(b);
c = Math.abs(c);
d = Math.abs(d);
e = Math.abs(e);
f = Math.abs(f);

a2 = a + b;
a3 = a + b + c;
a4 = a + b + c + d;
a5 = a + b + c + d + e;
a6 = a + b + c + d + e + f;

console.log("Расчет периметра от 2х до 6ти значений: ");
switch (
  (a, b) || (a, b, c) || (a, b, c, d) || (a, b, c, d, e) || (a, b, c, d, e, f)
) {
  case (a, b, c, d, e, f):
    if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0 && f > 0) {
      console.log(a6);
      break;
    } else {
      console.log("Одно из значений равно 0");
      break;
    }
  case (a, b, c, d, e):
    if (a > 0 && b > 0 && c > 0 && d > 0 && e > 0) {
      console.log(a5);
      break;
    } else {
      console.log("Одно из значений равно 0");
      break;
    }
  case (a, b, c, d):
    if (a > 0 && b > 0 && c > 0 && d > 0) {
      console.log(a4);
      break;
    } else {
      console.log("Одно из значений равно 0");
      break;
    }
  case (a, b, c):
    if (a > 0 && b > 0 && c > 0) {
      console.log(a3);
      break;
    } else {
      console.log("Одно из значений равно 0");
      break;
    }
  case (a, b):
    if (a > 0 && b > 0) {
      console.log(a2);
      break;
    } else {
      console.log("Одно из значений равно 0");
      break;
    }
  default:
    console.log("Вы ввели неверное количество сторон!");
}
