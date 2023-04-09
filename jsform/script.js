var form =document.getElementById("form");
var username =document.getElementById("user");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var pwd1= document.getElementById("pwd1");
var dob= document.getElementById("dt");
var contact = document.getElementById("contact");

form.addEventListener("submit",e=>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
    var usernamevalue = username.value.trim();
    var emailvalue = email.value.trim();
    var pwdvalue = pwd.value.trim();
    var pwd1value = pwd1.value.trim();
    var dobvalue = dob.value.trim();
    var contactvalue = contact.value.trim();
    if(usernamevalue===""){
        setError(username,'username is blank')
    }
    else{
        setSuccess(username);
    }
    if(emailvalue===""){
        setError(email,'username is blank')
    }
    else{
        setSuccess(email);
    }
    if(pwdvalue === ""){
        setError(pwd, 'Username cannot be Blank');
        }
        else{
        setSuccess(pwd);
        }
        if(pwd1value === ""){
        setError(pwd1, 'Password cannot be Blank');
        }
        else if(pwdvalue !== pwd1value){
        setError(pwd1, 'Password does no match');
        }
        else{
        setSuccess(pwd1);
        }
        
}
function setError(input,message){
    const formcontrol = input.parentElement;
    const small = formcontrol.className = "formcontrols error"
    small.innerText = message;
}
function setSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className="formcontrols success"
}
// function Email1(email){
//     return
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0
//     -9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email
//     );
// }