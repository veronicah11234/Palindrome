function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  function displayResult() {
    const inputText = document.getElementById('inputText').value;
    const result = isPalindrome(inputText);
    const resultMessage = result ? 'It is a palindrome!' : 'It is not a palindrome.';
  
    document.getElementById('result').innerText = resultMessage;
  }
  
  // Additional Test Cases
  console.log(isPalindrome("radar")); // It is a palindrome! (Console output)
  console.log(isPalindrome("Hello")); // It is not a palindrome. (Console output)
  console.log(isPalindrome("A man, a plan, a canal, Panama!")); // It is a palindrome! (Console output)
  