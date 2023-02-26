
const sign = document.getElementById("signin");

const mensPage = document.getElementById("menspage");
const user = document.getElementById("user");
const bag = document.getElementById("bag");
const home = document.getElementById("logo");

mensPage.addEventListener("click",() => {
    window.location = "../mens.html"
})
user.addEventListener("click",() => {
    window.location = "../signin.html";
})
bag.addEventListener("click",() => {
    window.location = "../cart.html";
})
home.addEventListener("click",() => {
    window.location = "../index.html";
})


sign.addEventListener("submit",(e) => {
    e.preventDefault();

    if(sign.email.value === "admin" && sign.passw.value === "admin"){
        alert("Login Successfull");
        window.location = "../adminDash.html";
    }
    else{
        alert("Wrong Credentials");
    }
})