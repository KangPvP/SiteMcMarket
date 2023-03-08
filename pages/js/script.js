var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "20px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "20px";
    y.style.left = "340px";
    z.style.left = "0px";
}

var imgHideLogin = document.getElementById("hide-pass-login")
var imgShowLogin = document.getElementById("show-pass-login")
var inputPassLogin = document.getElementById("pass-login")

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

var imgHideRegister = document.getElementById("hide-pass-register")
var imgShowRegister = document.getElementById("show-pass-register")
var inputPassRegister = document.getElementById("pass-register")

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

var divFogotPassBtn = document.getElementById("forgot-pass")
var divFogotPass = document.getElementById("forgotpass")

var loginpage = document.getElementById("login-page")

divFogotPassBtn.onclick = function() {
    loginpage.style.display = "none"
    divFogotPass.style.display = "block"
}




// Get the modal
var modal = document.getElementById("all-page");

// Get the button that opens the modal
var btn = document.getElementById("client-area");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}