const password = document.querySelector("input[id='pass'");
const confirmPassword = document.querySelector("input[id='conf-pass'");
const span = document.querySelector("input[id='conf-pass'] + span");

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    span.classList.add("inv");
  } else {
    span.classList.remove("inv");
  }
});