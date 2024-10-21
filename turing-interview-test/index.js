// Given an array A[] and positive integer K, the task is to count the total number of pairs in the array whose sum is divisible by K.

// if number of such pairs are exactly equal to n/2 return true otherwise return false

// Example 1:

// Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
// Example 2:

// Input: arr = [1,2,3,4,5,6], k = 7
// Output: true
// Explanation: Pairs are (1,6),(2,5) and(3,4).
// Example 3:

// Input: arr = [1,2,3,4,5,6], k = 10
// Output: false
// Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.

const arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9];
const copyArr = arr.map(item => item);
const pairs = [];
let k = 5;

for (let i = 0; i < copyArr.length; i++) {
  for (let j = i + 1; j < copyArr.length; j++) {
    if ((copyArr[i] + copyArr[j]) % k === 0) {
      pairs.push([copyArr[i], copyArr[j]]);
      copyArr.pop([i]);
    }
  }
}

if (pairs.length === arr.length / 2) {
  console.log(true);
} else {
  console.log(false);
}

console.log(pairs, arr.length);

const btnSubmit = document.getElementById("submit-btn");
const input = document.getElementById("input");

btnSubmit.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter a number");
  }
});
