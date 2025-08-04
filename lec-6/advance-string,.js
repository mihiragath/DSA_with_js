//print each element in new line
let str = "hello world";
for (let i = 0; i <= str.length; i++) {
  console.log(str.charAt(i));
}

//print in reverse order
let str2 = "hello world";
let reverseStr = "";
for (let i = str2.length - 1; i >= 0; i--) {
  reverseStr += str2.charAt(i);
}
console.log("Reverse String:" + reverseStr);

//check if string is palindrome
let str3 = "madam";
let isPalindrome = true;
for (let i = 0; i < str3.length / 2; i++) {
  if (str3.charAt(i) !== str3.charAt(str3.length - 1 - i)) {
    isPalindrome = false;
    break;
  }
}
console.log("Is palindrome:", isPalindrome);

//toggle case of each character in a string
let prompt = require("prompt-sync")();
let str4 = prompt("Enter a string to toggle case:");
let toggledStr = "";
for (let i = 0; i < str4.length; i++) {
  let char = str4.charCodeAt(i);
  if (char >= 65 && char <= 90) {
    toggledStr += String.fromCharCode(char + 32); // convert to lowercase
  } else if (char >= 97 && char <= 122) {
    toggledStr += String.fromCharCode(char - 32); // convert to uppercase
  } else {
    toggledStr += char; // keep non-alphabetic characters unchanged
  }
}
console.log("Toggled case string:", toggledStr);

//frequency of each character in a string
let str5 = "hello world";
let frequency = {};
for (let i = 0; i < str5.length; i++) {
  let char = str5.charAt(i);
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}
for (let char in frequency) {
  console.log(`Character: ${char}, Frequency: ${frequency[char]}`);
}
