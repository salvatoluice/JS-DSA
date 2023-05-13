// QUIZ 1

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// SOLUTION


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const complementMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (complementMap.hasOwnProperty(complement)) {
      return [complementMap[complement], i];
    }

    complementMap[num] = i;
  }

  return [];
};

// QUIZ 2

// Palindrome number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const x_str = String(x);
    return x_str === x_str.split('').reverse().join('');
};

// QUIZ 3

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentInt = romanToIntMap[s[i]];
    const nextInt = romanToIntMap[s[i + 1]];

    if (nextInt && currentInt < nextInt) {
      result -= currentInt;
    } else {
      result += currentInt;
    }
  }

  return result;
};

// QUIZ 4

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim leading and trailing spaces
  const trimmed = s.trim();

  // Find the index of the last space
  const lastSpace = trimmed.lastIndexOf(' ');

  // Extract the last word
  const lastWord = trimmed.substring(lastSpace + 1);

  // Return the length of the last word
  return lastWord.length;
};



// QUIZ 5

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length;
  let carry = 1;

  for (let i = length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;

    if (sum < 10) {
      digits[i] = sum;
      carry = 0;
    } else {
      digits[i] = sum % 10;
      carry = 1;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
};