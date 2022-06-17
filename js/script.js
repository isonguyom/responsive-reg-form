// form validation
let submitBtn = document.getElementById('submitBtn');
let validateForm = function (e) {
    e.preventDefault();
    //get form to validate
   
    //get the inputs to validate
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let emailAdd = document.getElementById('email');
    let password = document.getElementById('psw');
    
    //check if required input fields are properly filled
    if (firstName.value === "") { //first name
        let tip = document.getElementById('fnameTip');
        let error = document.getElementById('fnameError')
        
        firstName.style.outline = '1px solid red'
        firstName.focus();
        tip.style.visibility = 'visible';
        error.style.visibility = 'visible';
    }
    if (lastName.value === "") { //Last name
        let tip = document.getElementById('lnameTip');
        let error = document.getElementById('lnameError')
        
        lastName.style.outline = '1px solid red'
        lastName.focus();
        tip.style.visibility = 'visible';
        error.style.visibility = 'visible';
    }
    if (emailAdd.value === "") { //email
        let tip = document.getElementById('emailTip');
        let error = document.getElementById('emailError')
        
        emailAdd.style.outline = '1px solid red'
        emailAdd.focus();
        emailAdd.placeholder = 'email@example.com'
        emailAdd.classList.add('error')
        tip.style.visibility = 'visible';
        error.style.visibility = 'visible';
    }
    if (password.value === "" || password.value.length <= 6) { //password
        let tip = document.getElementById('pswTip');
        let error = document.getElementById('pswError')
        
        password.style.outline = '1px solid red'
        password.focus();
        tip.style.visibility = 'visible';
        error.style.visibility = 'visible';
    }


};
submitBtn.addEventListener('click', validateForm);