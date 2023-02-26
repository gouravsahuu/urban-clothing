const logo = document.getElementById("logo");
const back = document.getElementById("back");
const username = document.getElementById("username");
let subtotal = document.getElementById("subtotal");
let total = document.getElementById("total");
const address = document.getElementById("address-form");
let review = document.getElementById("reviewandpay");

logo.addEventListener("click",() => {
    window.location = "../index.html"
})
back.addEventListener("click",() => {
    window.location = "../mens.html";
})

let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

let userName = localStorage.getItem("username");
username.innerText = userName;

window.addEventListener("load",() => {
    let st = 0;
    let t = 0;
    if(cartItem.length >= 1){
        for(let i=0;i<cartItem.length;i++){
          st = st + cartItem[i].quantity * cartItem[i].price;
          t = t + cartItem[i].quantity * cartItem[i].price;
    }
    subtotal.innerText = st;
    total.innerText = t;
   }
})

address.addEventListener("submit",(e) => {
    e.preventDefault();
    let obj = {
        name : address.name.value,
        number : address.num.value,
        houseno : address.house.value,
        addline : address.addline.value,
        landmark : address.landmark.value,
        city : address.city.value,
        zip : address.zip.value,
        state: address.state.value
    }
    localStorage.setItem("user-address",JSON.stringify(obj));
    alert("Address Saved");
})

review.addEventListener("click",() => {
    window.location = "../review_pay.html";
})