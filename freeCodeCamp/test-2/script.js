const inputHTML = document.getElementById("number");
const btnSubmitHTML = document.getElementById("convert-btn");
const outputHTML = document.getElementById("output");

const fromArabicToRoman = (userNum) => {
  let multiply = 1;
  const nums = userNum
    .split("")
    .reverse()
    .map((num) => {
      num *= multiply;
      multiply *= 10;
      return num;
    })
    .reverse();

  const output = [];
  const romanChars = [
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < romanChars.length; j++) {
      if (nums[i] >= romanChars[j][1]) {
        let num = parseInt(nums[i].toString().split("")[0]);
        let romanNum = parseInt(romanChars[j][1].toString().split("")[0]);
        if (num === 5 && romanNum === 5) {
          output.push(romanChars[j][0]);
          break;
        } else if (num === 9) {
          output.push(romanChars[j + 1][0] + romanChars[j - 1][0]);
          break;
        } else if (num === 4) {
          output.push(romanChars[j][0] + romanChars[j - 1][0]);
          break;
        } else if (num > 5) {
          console.log({ num, roman: romanChars[j][0] });
          output.push(romanChars[j][0] + romanChars[j + 1][0].repeat(num - 5));
          break;
        } else {
          output.push(romanChars[j][0].repeat(num));
          break;
        }
      }
    }
  }

  console.log(output);
  return output.join("");
};

btnSubmitHTML.addEventListener("click", (e) => {
  if (!inputHTML.value) {
    return (outputHTML.textContent = "Please insert a valid number");
  } else if (inputHTML.value < 1) {
    return (outputHTML.textContent = "Please enter a number greater than or equal to 1");
  } else if (inputHTML.value >= 4000) {
    return (outputHTML.textContent = "Please enter a number less than or equal to 3999");
  }

  const romanNum = fromArabicToRoman(inputHTML.value);
  outputHTML.textContent = romanNum;
});
