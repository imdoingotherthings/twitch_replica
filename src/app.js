console.log("connected");

var login = document.querySelector('#login');
var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var userName = document.querySelector('#userName');
var complete = document.querySelector("#complete");
var formMessage = document.querySelector('#form-message');
var a = document.querySelector('a');

function formCheck () {
  if (firstName === true && lastName && true && email && true && password === true && username === true) {
    // then we'll want to redirect them to the user screen
    // different UI
    complete.addEventListener('click', function () {
      window.location.assign(a);
    });
  } else {
    // make sure they fill out the form
      complete.addEventListener('click', function () {
        formMessage.innerHTML = "Oops, looks like you didn't fully complete the registration form.";
      });
  }
}

formCheck();
