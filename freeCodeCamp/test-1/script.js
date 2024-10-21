const btnSubmit = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

const isPalindrome = userInput => {
  const letters = userInput
    .toLowerCase()
    .split("")
    .filter(
      letter =>
        letter != " " &&
        letter != "." &&
        letter != "," &&
        letter != "_" &&
        letter != "-" &&
        letter != "(" &&
        letter != ")" &&
        letter != "/"
    );

  const inverted = [];

  for (let i = letters.length; i > 0; i--) {
    inverted.push(letters[i - 1]);
  }
  console.log({ one: letters.join(), two: inverted.join() });

  if (letters.join() === inverted.join()) {
    return `${userInput} is a palindrome`;
  }

  return `${userInput} is not a palindrome`;
};

btnSubmit.addEventListener("click", e => {
  e.preventDefault();
  if (!input.value) {
    alert("Please input a value");
  }

  result.textContent = isPalindrome(input.value);
});
