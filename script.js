// Time to script!

const SUBMIT_BUTTON = document.getElementById("submitButton");

const passwordsContainer = document.querySelector(".passwords-container");

SUBMIT_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const pw1 = document.getElementById("inputPassword1").value;
  const pw2 = document.getElementById("inputPassword2").value;

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    pw1 === "" ||
    pw2 === ""
  ) {
    alert("Fill in empty fields");
    return false;
  }
  if (pw1 != pw2) {
    alert("Passwords do not match");
    return false;
  } else {
    alert("Account created successfully");
  }
});
