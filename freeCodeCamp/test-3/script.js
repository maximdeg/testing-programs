const user_input = document.getElementById("user-input");
const check_btn = document.getElementById("check-btn");
const clear_btn = document.getElementById("clear-btn");
const results_div = document.getElementById("results-div");

const checkValidPhoneNumber = phoneNumber => {
  const regex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  let valid = false;

  console.log("NUMERO:", phoneNumber);

  const firstValidation = phoneNumber.split("").filter(item => item !== " ");

  console.log("PRIMER FILTRO", firstValidation);

  // CHECK FOR PLUS AND 1
  if (firstValidation[0] === "+") {
    if (firstValidation[1] === "1") {
      valid = true;
      firstValidation.shift();
      firstValidation.shift();
    } else {
      return valid;
    }
  } else if (parseInt(firstValidation[0])) {
    if (firstValidation[0] === 1) {
      valid = true;
      firstValidation.shift();
    }
  }

  console.log("SEGUNDO FILTRO", firstValidation);

  // Check for parenthesis
  if (firstValidation.includes("(") && firstValidation.includes(")")) {
    if (firstValidation.indexOf("(") < firstValidation.indexOf(")")) {
      if (firstValidation[0] === "(" && firstValidation[4] === ")") {
        valid = true;
      } else {
        return (valid = false);
      }
    } else {
      return (valid = false);
    }
  } else {
    return (valid = false);
  }

  // Check for dash
  const dashValidation = firstValidation.filter(item => item === "-");

  if (dashValidation.length > 2) {
    return (valid = false);
  }

  console.log("TERCER FILTRO", firstValidation);

  const arrPhoneNumber = firstValidation.filter(
    item => item !== "-" && item !== "(" && item !== ")" && item !== "."
  );

  console.log("TERCER FILTRO", arrPhoneNumber);

  if (arrPhoneNumber.length === 10) {
    return (valid = true);
  } else if (arrPhoneNumber.length === 11 && arrPhoneNumber[0] === "1") {
    return (valid = true);
  } else {
    return (valid = false);
  }
};

check_btn.addEventListener("click", () => {
  if (!user_input.value) {
    return alert("Please provide a phone number");
  }

  const valid = checkValidPhoneNumber(user_input.value);

  if (valid) {
    results_div.textContent = `Valid US number: ${user_input.value}`;
  } else {
    results_div.textContent = `Invalid US number: ${user_input.value}`;
  }
});

clear_btn.addEventListener("click", () => {
  results_div.textContent = "";
});
