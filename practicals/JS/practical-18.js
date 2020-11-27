var form = document.getElementById("form")
var username = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var password2 = document.getElementById("password2")


form.addEventListener("submit",function(e){
    e.preventDefault()
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(usernameValue === ""){
        showMessage(username,"Username cannot be blank");
    }else{
        showSuccess(username);
    }

    if(emailValue === ""){
        showMessage(email,"Email cannot be blank");
    }else if(!isValidEmail(emailValue)){
        showMessage(email,"Incorrect Email Address");
    }else{
        showSuccess(email);
    }

    if(passwordValue === ""){
        showMessage(password,"Password cannot be blank");
    }else{
        showSuccess(password);
    }
    if(password2Value === ""){
        showMessage(password2,"Password cannot be blank");
    }else if(passwordValue != password2Value){
        showMessage(password2,"Password Mismatch!");
    }else{
        showSuccess(password2);
    }
}


function showMessage(input,msg){
    const formControl = input.parentNode;
    formControl.className= "input-box fail"
    formControl.querySelector("p").innerText= msg;
}
function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className= "input-box success"
}
function isValidEmail(emailValue){
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(emailValue);
}