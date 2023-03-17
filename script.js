

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');




function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
    emailError.innerHTML= 'You have entered an invalid Email.';
    return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML= 'You have entered an invalid Email.';
        return false;
    }

    emailError.innerHTML= 'Valid Email';
    

    return true;

}

function validatePhone(){
    var phone = document.getElementById('contact-Phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'You have entered an invalid Mobile number.'
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'You have entered an invalid Mobile number.'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digit.'
        return false;
    }
    phoneError.innerHTML= 'Mobile Number is Valid';
    return true;
}

function validateForm(){
    if(!validateEmail() || !validatePhone()){
    emailError.innerHTML= 'Required';
    phoneError.innerHTML= 'Required';
    return false;
    }
}

// function country_code(){
//     var val = document.getElementById("country").value;

//     if(val === "country"){
//         document.getElementById("contact-Phone").value = '';
//     }
//     else if(val === "Ind"){
//         document.getElementById("contact-Phone").value = '91+';
        
//     }
// }

