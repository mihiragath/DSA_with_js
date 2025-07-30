let a = 5;

for (let i = 1; i <= a; i++) {
  for (let j = i; j <= a; j++) {
    process.stdout.write("*" + " ");
  }
  process.stdout.write("\n");
}

let d = 5;

for (let i = 1; i <= d; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

let b = 5;

for (let i = 1; i <= b; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  process.stdout.write("\n");
}

let c = 5;

for (let i = 1; i <= c; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j) + " ");
  }
  process.stdout.write("\n");
}

let e = 5;

for (let i = 1; i <= e; i++) {
  for (let j = i; j <= e; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

let f = 5;
for (let i = 1; i <= f; i++) {
  for (let j = 1; j <= f - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let j = 1; j < i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

let n = 4;

for (let i = 1; i <= n; i++) {
  for (let s = 1; s <= n - i; s++) {
    process.stdout.write(" ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }

  process.stdout.write("\n");
}
