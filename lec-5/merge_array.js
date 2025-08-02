let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let merge = new Array(arr1.length + arr2.length);

let i = 0,
  j = 0,
  k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merge[k] = arr1[i];
    i++;
  } else {
    merge[k] = arr2[j];
    j++;
  }
  k++;
}

// Copy remaining elements of arr1
while (i < arr1.length) {
  merge[k] = arr1[i];
  i++;
  k++;
}

// Copy remaining elements of arr2
while (j < arr2.length) {
  merge[k] = arr2[j];
  j++;
  k++;
}

console.log("Merged array: " + merge.join(" "));
