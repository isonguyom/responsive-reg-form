"use strict";

// form validation
var submitBtn = document.getElementById('submitBtn');

var validateForm = function validateForm(e) {
  e.preventDefault(); //get form to validate
  //get the inputs to validate

  var firstName = document.getElementById('fname');
  var lastName = document.getElementById('lname');
  var emailAdd = document.getElementById('email');
  var password = document.getElementById('psw');
  var letters = /^[A-Za-z]+$/; //check if required input fields are properly filled

  if (firstName.value === "" || !firstName.value.match(letters)) {
    //first name
    var tip = document.getElementById('fnameTip');
    var error = document.getElementById('fnameError');
    firstName.style.outline = '1px solid red';
    firstName.focus();
    tip.style.visibility = 'visible';
    error.style.visibility = 'visible';
  }

  if (lastName.value === "" || !lastName.value.match(letters)) {
    //Last name
    var _tip = document.getElementById('lnameTip');

    var _error = document.getElementById('lnameError');

    lastName.style.outline = '1px solid red';
    lastName.focus();
    _tip.style.visibility = 'visible';
    _error.style.visibility = 'visible';
  }

  if (emailAdd.value === "" || !emailAdd.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    //email
    var _tip2 = document.getElementById('emailTip');

    var _error2 = document.getElementById('emailError');

    emailAdd.style.outline = '1px solid red';
    emailAdd.focus();
    emailAdd.placeholder = 'email@example.com';
    emailAdd.classList.add('error');
    _tip2.style.visibility = 'visible';
    _error2.style.visibility = 'visible';
  }

  if (password.value === "") {
    //password
    var _tip3 = document.getElementById('pswTip');

    var _error3 = document.getElementById('pswError');

    password.style.outline = '1px solid red';
    password.focus();
    _tip3.style.visibility = 'visible';
    _error3.style.visibility = 'visible';
  }
};

submitBtn.addEventListener('click', validateForm);