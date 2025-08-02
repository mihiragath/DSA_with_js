let arr = [0, 0, 1, 2, 2, 3, 3, 3, 4, 5];
let n = arr.length;

let dup = 0;
for (let i = 1; i < n; i++) {
  if (arr[i] !== arr[dup]) {
    dup++;
    arr[dup] = arr[i];
  }
}

arr = arr.slice(0, dup + 1);

console.log("Array after removing duplicates:", arr);
