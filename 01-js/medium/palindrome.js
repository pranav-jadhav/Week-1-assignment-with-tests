/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transfrom(str){
  let answer = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] == " " || str[i] == "," || str[i] == "?" || str[i] == "!" || str[i] == "."){
      continue;
    }
    answer += str[i];
  }
  return answer;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  var input = transfrom(str);

  console.log(input);

  var left = 0, right = input.length - 1;

  while(left < right){
    console.log(left, right);
    if(input[left] != input[right]) return false;
    left++; right--;
  } 

  return true;
}

module.exports = isPalindrome;
