var a = +process.argv[2];
var b = +process.argv[3];
var c = +process.argv[4];

a = Math.abs(a);
b = Math.abs(b);
c = Math.abs(c);

if (a > 0 && b > 0 && c > 0) {
  if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    c * c + b * b == a * a
  ) {
    console.log("Треугольник прямоугольный!");
  } else if (a === b || b === c || a === c) {
    console.log("Треугольник равнобедренный!");
  } else {
    console.log("Треугольник произвольный!");
  }
} else {
  console.log("Одно из значений равно 0!");
}
