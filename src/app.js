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

// var password = password.addEventListener('keypress', function (e) {
//     // make sure that the password is AT LEAST 8 characters long
//     if (!e.target.value || e.target.value.length <= 8) {
//       return true;
//     console.log(e.target.value);
//     } else {
//       return false;
//     }
// },true);

//   var email = email.addEventListener('keypress', function (e) {
//     e.stopPropagation();
//     if (e.target.value.includes('@') && e.target.value.includes('.')) {
//       var result = result(e.target.value);
//       return result;
//       console.log(e.target.value);
//     } else {
//       return false;
//     }
//   },true);
//
//   console.log(email);
//
//   if (password && email) {
//     complete.addEventListener('click', function () {
//       window.location.assign(a);
//     });
//   } else {
//     complete.addEventListener('click', function () {
//     formMessage.innerHTML = "Oops, looks like you didn't fully complete the registration form.";
//   });
// };

// passwordCheck();
// formCheck();
