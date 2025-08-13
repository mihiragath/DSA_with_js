//book allocation problem

function findPages(books, students) {
  let totalPages = 0;
  let maxPages = 0;
  let result = -1;
  for (let i = 0; i < books.length; i++) {
    totalPages += books[i];
    maxPages = Math.max(maxPages, books[i]);
  }
  let last = totalPages;
  let first = maxPages;
  while (first < last) {
    let mid = Math.floor((first + last) / 2);
    if (isPossible(books, students, mid)) {
      result = mid; // Found a valid distribution, update result
      last = mid; // Try to find a smaller maximum
    } else {
      first = mid + 1; // Increase the maximum pages per student
    }
  }
  return result; // Return the minimum maximum pages
}

function isPossible(books, students, maxPages) {
  let studentCount = 1; // Start with one student
  let currentPages = 0;
  for (let i = 0; i < books.length; i++) {
    currentPages += books[i];
    if (currentPages > maxPages) {
      studentCount++; // Need a new student
      currentPages = books[i]; // Start counting pages for the new student
      if (studentCount > students) {
        return false; // More students than allowed
      }
    }
    if (books[i] > maxPages) {
      return false; // A single book exceeds the maximum pages allowed
    }
  }
  return true; // All books can be distributed within the maximum pages
}
let books = [12, 34, 67, 90];
let students = 2;
console.log(findPages(books, students)); // Output: 113
// Time Complexity: O(n log m), where n is the number of books and m is the total number of pages.
// Space Complexity: O(1)
// Note: This function finds the minimum number of pages that can be allocated to students such that no student reads more than a specified maximum number of pages. It uses binary search to efficiently find the optimal distribution of books among students.
