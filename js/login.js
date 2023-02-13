//* step 1 : add click event handler with the submit button

document.getElementById("btn-submit").addEventListener("click", function () {
  //* step 2: get email address inside the email input field
  //* always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //* step 3: get password
  //* s.3.a : set id on the html element
  //* s.3.b : get the element
  //* s.3.c : get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //* Do Not verify email password on the client side
  //* step 4: verify email and password
  if (email === "rifan59@gmail.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("tui teijjo sontan ghosona korlam");
  }
});
