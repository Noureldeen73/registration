function validateLogin() {
  let emailField = document.getElementById("email");
  let passwordField = document.getElementById("password");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailField.value)) {
    alert("Please enter a valid email address");
    emailField.focus();
    return false;
  }
  if (emailField.value === "") {
    alert("Email is required");
    emailField.focus();
    return false;
  }
  if (passwordField.value == "") {
    alert("Password is required");
    passwordField.focus();
    return false;
  }
  return true;
}
function validateSignup() {
  let usernameField = document.getElementById("user");
  let emailField = document.getElementById("email");
  let passwordField = document.getElementById("password");
  let confirmPasswordField = document.getElementById("confirm");
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (usernameField.value == "") {
    alert("Username is required");
    usernameField.focus();
    return false;
  }
  if (usernameField.value.length < 8) {
    alert("Username must be at least 8 characters long");
    usernameField.focus();
    return false;
  }
  if (!emailPattern.test(emailField.value)) {
    alert("Email is not valid");
    emailField.focus();
    return false;
  }
  if (emailField.value == "") {
    alert("Email is required");
    emailField.focus();
    return false;
  }
  if (passwordField.value == "") {
    alert("Password is required");
    passwordField.focus();
    return false;
  }
  if (passwordField.value.length < 8) {
    alert("Password must be at least 8 characters long");
    passwordField.focus();
    return false;
  }
  if (confirmPasswordField.value == "") {
    alert("Confirm Password is required");
    confirmPasswordField.focus();
    return false;
  }
  if (passwordField.value != confirmPasswordField.value) {
    alert("Password and Confirm Password do not match");
    confirmPasswordField.focus();
    return false;
  }
  return true;
}
function togglePasswordVisibility(passwordFieldId, toggleTextId) {
  const passwordInput = document.getElementById(passwordFieldId);
  const toggleText = document.getElementById(toggleTextId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleText.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleText.textContent = "Show";
  }
}
