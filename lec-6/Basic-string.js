//every string is an array of characters
let str = "hello world";
let arr = str.split("");
console.log("String to array:", arr);
//but every single sting cant be like an array
//to access a character in a string, we can use charAt method
console.log("Character at index 1:", str.charAt(1));
//to convert an array back to a string, we can use join method
let newStr = arr.join("");
console.log("Array to string:", newStr);
//strings are immutable, so we can't change a character in a string directly
//to change a character in a string, we can convert it to an array, change the character, and then convert it back to a string
arr[1] = "a"; // changing character at index 1
newStr = arr.join("");
console.log("Changed string:", newStr);
//to find the length of a string, we can use length property
console.log("Length of string:", str.length);
//to asign data in a string
let str2 = "hello";
str2 = str2 + " world"; // concatenating strings
console.log("Concatenated string:", str2);
//to find the index of a character in a string, we can use indexOf method
console.log("Index of 'o':", str.indexOf("o"));
//to find the last index of a character in a string, we can use lastIndexOf method
console.log("Last index of 'o':", str.lastIndexOf("o"));
//to find a substring in a string, we can use includes method
console.log("Does string include 'world'? :", str.includes("world"));
//replace a substring in a string, we can use replace method
let replacedStr = str.replace("world", "everyone");
console.log("Replaced string:", replacedStr);
//to convert a string to uppercase, we can use toUpperCase method
console.log("Uppercase string:", str.toUpperCase());
//to convert a string to lowercase, we can use toLowerCase method
console.log("Lowercase string:", str.toLowerCase());
//to trim a string, we can use trim method
let strWithSpaces = "   hello world   ";
console.log("Trimmed string:", strWithSpaces.trim());
//slice a string, we can use slice method
let slicedStr = str.slice(0, 5);
//when ever i try to perform string operation on string, it will return a new string, original string will same..
