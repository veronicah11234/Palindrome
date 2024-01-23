# title
A Palindrome  project

# Palindrome Checker

A simple web page that checks whether a given string is a palindrome or not. A palindrome is defined as a sequence of letters that remains unchanged when read from left to right or right to left, ignoring spaces and special characters.

## Features

- User can enter a string into an input field.
- Clicking the "Check" button will display whether the entered string is a palindrome or not.
- Ignores spaces and special characters in the palindrome check.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter a string in the input field.
3. Click the "Check" button to see the result.

## How it Works

The Palindrome Checker uses JavaScript to clean the input string, removing spaces and special characters, and then checks if the cleaned string reads the same forward and backward.

## Code Structure

- **index.html**: The HTML file containing the structure of the web page.
- **index.js**: The JavaScript file containing the logic for checking palindromes.

## Additional Test Cases

In the `index.js` file, additional test cases have been added to validate the solution. Open the browser console to view the results.

```javascript
console.log(isPalindrome("radar")); // It is a palindrome!
console.log(isPalindrome("Hello")); // It is not a palindrome.
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // It is a palindrome!
