let array = ["goku", "nami", "gohan", "gohan", "picolo", "nami", "goku", "gohan"]
let a = {}
for (let i = 0; i < array.length; i++) {
  a[array[i]] = 1;
}
console.log(a)