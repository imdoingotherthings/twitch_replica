console.log("connected");
// =======================
// DOM ELEMENT SELECTORS
var login = document.querySelector('#login');
var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var userName = document.querySelector('#userName');
var complete = document.querySelector("#complete");
var formMessage = document.querySelector('#form-message');
var a = document.querySelector('a');
// =======================

var password = password.addEventListener('keypress', function (e) {
    // make sure that the password is AT LEAST 8 characters long
    if (!e.target.value || e.target.value.length <= 8) {
      return true;
    console.log(e.target.value);
    } else {
      return false;
    }
},true);

function emailCheck () {
  email.addEventListener('keypress', function.bind (e) {
    e.stopPropagation();
  },true);
}
function emailCheck () {
  if (e.target.value.includes('@') && e.target.value.includes('.')) {
    var result = result(e.target.value);
    return result;
  console.log(e.target.value);
  } else {
  return false;
  }
}

  console.log(email);

while (password && email === true) {
    if (password && email) {
      complete.addEventListener('click', function () {
        window.location.assign(a);
      });
    } else {
        complete.addEventListener('click', function () {
        formMessage.innerHTML = "Oops, looks like you didn't fully complete the registration form.";
        formMessage.style.animation = 'pTag 0.4s'
    });
  }
}
emailCheck();
// passwordCheck();
// formCheck();
