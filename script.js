// Time to script!
const SUBMIT_BUTTON = document.getElementById("submitButton");
SUBMIT_BUTTON.addEventListener("click", (e) => {
  const pw1 = document.getElementById("inputPassword1").value;
  const pw2 = document.getElementById("inputPassword2").value;
  if (!pw1 || !pw2) {
    return undefined;
  }
  if (pw1 !== pw2) {
    alert("Passwords do not match");
    e.preventDefault();
    return undefined;
  }
  // pass
  alert("Form Submitted Successfully");
  return undefined;
});
