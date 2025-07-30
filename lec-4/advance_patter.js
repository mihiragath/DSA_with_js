let a = 5;
for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= a; j++) {
    if (a % 2 === 0) {
      process.stdout.write("Pls only enter odd number");
    } else {
      if (i == j || i + j == a + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
  }
  process.stdout.write("\n");
}

let b = 5;

for (let i = 1; i <= b; i++) {
  for (let j = 1; j <= 2 * b - 1; j++) {
    if (i === j || i + j === 2 * b) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
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
