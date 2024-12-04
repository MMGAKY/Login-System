var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var nameInput = document.getElementById("nameInput");
var checkEmailInput = document.getElementById("checkEmailInput");
var checkPasswordInput = document.getElementById("checkPasswordInput");
var signIn = document.getElementById("signIn");
var signUp = document.getElementById("signUp");
var login = document.getElementById("login");
var home = document.getElementById("home");
var userData = [];
if (localStorage.getItem("User Data") !== null) {
  userData = JSON.parse(localStorage.getItem("User Data"));
}
function addEmail() {
  if (validationName() && validationEmail() && validationPass()) {
    var user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    userData.push(user);
    localStorage.setItem("User Data", JSON.stringify(userData));
    clear();
    clearClasses();
    document.getElementById("yes").classList.add("d-block");
    document.getElementById("yes").classList.remove("d-none");
    document.getElementById("no").classList.add("d-none");
    document.getElementById("no").classList.remove("d-block");
  } else {
    document.getElementById("no").classList.add("d-block");
    document.getElementById("no").classList.remove("d-none");
    document.getElementById("yes").classList.add("d-none");
    document.getElementById("yes").classList.remove("d-block");
  }
}
function signInDisplay() {
  signIn.classList.add("d-block");
  signIn.classList.remove("d-none");
  signUp.classList.add("d-none");
  signUp.classList.remove("d-block");
}
function signUpDisplay() {
  signUp.classList.add("d-block");
  signUp.classList.remove("d-none");
  signIn.classList.add("d-none");
  signIn.classList.remove("d-block");
}
function clear() {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
  checkEmailInput.value = null;
  checkPasswordInput.value = null;
}
function clearClasses() {
  nameInput.classList.remove("is-valid");
  nameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
}
function validationName() {
  var regex = /^[A-Z][a-zA-Z ]{2,}$/;
  var text = nameInput.value;
  if (regex.test(text)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    return true;
  }
  if (!regex.test(text)) {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    return false;
  }
}
function validationEmail() {
  var regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  var text = emailInput.value;
  for (var i = 0; i < userData.length; i++) {
    if (text == userData[i].email) {
      document.getElementById("use").classList.add("d-block");
      document.getElementById("use").classList.remove("d-none");
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
      return false;
    }
  }
  if (regex.test(text)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    document.getElementById("use").classList.remove("d-block");
    document.getElementById("use").classList.add("d-none");
    return true;
  }
  if (!regex.test(text)) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    return false;
  }
}
function validationPass() {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  var text = passwordInput.value;
  if (regex.test(text)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    return true;
  }
  if (!regex.test(text)) {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    return false;
  }
}
function checkData() {
  var emailCheck = checkEmailInput.value;
  var passwordCheck = checkPasswordInput.value;
  for (var i = 0; i < userData.length; i++) {
    if (
      emailCheck == userData[i].email &&
      passwordCheck == userData[i].password
    ) {
      login.classList.add("d-none");
      login.classList.remove("d-block");
      home.classList.remove("d-none");
      login.classList.add("d-block");
      document.getElementById("wrong").classList.remove("d-block");
      document.getElementById("wrong").classList.add("d-none");
      document.getElementById(
        "msg"
      ).innerHTML = `<h1>Welcome ${userData[i].name}</h1>`;
      clear();
      return true;
    } else if (emailCheck == "" || passwordCheck == "") {
      document.getElementById("null").classList.add("d-block");
      document.getElementById("null").classList.remove("d-none");
      document.getElementById("wrong").classList.remove("d-block");
      document.getElementById("wrong").classList.add("d-none");
    } else {
      document.getElementById("wrong").classList.add("d-block");
      document.getElementById("wrong").classList.remove("d-none");
      document.getElementById("null").classList.remove("d-block");
      document.getElementById("null").classList.add("d-none");
    }
  }
}
function logOut() {
  login.classList.add("d-block");
  login.classList.remove("d-none");
  home.classList.add("d-none");
  home.classList.remove("d-block");
}
