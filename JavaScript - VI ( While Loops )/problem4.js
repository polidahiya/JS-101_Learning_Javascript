let num = 1;
let sum = 0;
let count=0;

while (num <= 100) {
  if (num % 2 == 0) {
    sum = sum + num;
    count++;
  }
  num++;
}
console.log(sum /count);