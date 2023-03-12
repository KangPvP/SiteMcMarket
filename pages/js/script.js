//import { login } from './requests'

let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

function bregister(){
    x.style.left = "-400px";
    y.style.left = "20px";
    z.style.left = "110px";
}

function blogin(){
    x.style.left = "20px";
    y.style.left = "340px";
    z.style.left = "0px";
}

let imgHideLogin = document.getElementById("hide-pass-login")
let imgShowLogin = document.getElementById("show-pass-login")
let inputPassLogin = document.getElementById("pass-login")

function showPassLogin(){
    inputPassLogin.type = "text"
    imgHideLogin.style.display = "none";
    imgShowLogin.style.display = "block";

}

function hidePassLogin(){
    inputPassLogin.type = "password"
    imgShowLogin.style.display = "none";
    imgHideLogin.style.display = "block";
}

let imgHideRegister = document.getElementById("hide-pass-register")
let imgShowRegister = document.getElementById("show-pass-register")
let inputPassRegister = document.getElementById("pass-register")

function showPassRegister(){
    inputPassRegister.type = "text"
    imgHideRegister.style.display = "none";
    imgShowRegister.style.display = "block";

}

function hidePassRegister(){
    inputPassRegister.type = "password"
    imgShowRegister.style.display = "none";
    imgHideRegister.style.display = "block";
}

// Get the modal
let modal = document.getElementById("all-page");

// Get the button that opens the modal
let btn = document.getElementById("client-area");
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

let currentPage = "login-register"

// Element Login/Register Page
let loginpage = document.getElementById("loginpage")
let close1 = document.getElementById("close1");
let divFogotPassBtn = document.getElementById("forgot-pass")

let loginBtn = document.getElementById("submit0")
let errorMsg0 = document.getElementById("errorMsg0")

let registerBtn = document.getElementById("submit1")
let errorMsg1 = document.getElementById("errorMsg1")

registerBtn.onclick = function() {
    //Register Request

}

// Element Verif Page 2
let pageverif = document.getElementById("pageverif")
let errorMsg2 = document.getElementById("errorMsg2")


// Element ForgotPass Page 3
let divFogotPass = document.getElementById("forgotpass")



let close4 = document.getElementById("close4");  //Newpassword Pages


//Function Page 1
close1.onclick = function() {
    modal.style.display = "none";
    errorMsg1.style.display = "none"
}

divFogotPassBtn.onclick = function() {
    loginpage.style.display = "none"
    divFogotPass.style.display = "block"
}


async function submit1Click(){
    let user = document.getElementById('user-register').value; 
    let email = document.getElementById('email-register').value;
    let pass = document.getElementById('pass-register').value;

    console.log("test")

    let res = await register(user,email,pass)
    

    if(res.status == 201 ){
        localStorage.setItem("name", "Chris");
        loginpage.style.display = "none"
        pageverif.style.display = "block"
        errorMsg1.style.display = "none"
    } else {
        errorMsg1.style.display = "block"
    }

}

//Function Page 3
function close2() {
    pageverif.style.display = "none"  //Close subPage min
    loginpage.style.display = "block"   //Open subPage main
    modal.style.display = "none";   //Close subPage
}

function submit2Click(){
    let code2 = document.getElementById('code2').value;

    console.log(localStorage.getItem("name"))

    if(code2 == "000000"){
        
    } else{
        errorMsg2.style.display = "block"
    }
}

//Function Page 3
function close3() {
    divFogotPass.style.display = "none"  //Close subPage min
    loginpage.style.display = "block"   //Open subPage main
    modal.style.display = "none";   //Close subPage
}

function submit3Click(){
    divFogotPass.style.display = "none"
    pageverif.style.display = "block"
}


close4.onclick = function() {
    modal.style.display = "none";
}



// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}