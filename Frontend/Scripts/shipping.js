const logo = document.getElementById("logo");
const back = document.getElementById("back");
const username = document.getElementById("username");
let subtotal = document.getElementById("subtotal");
let total = document.getElementById("total");
const address = document.getElementById("address-form");
let addDiv = document.getElementById("address");
let review = document.getElementById("reviewandpay");
let savedAdd = document.getElementById("savedAdd");

savedAdd.hidden = true;

logo.addEventListener("click",() => {
    window.location = "../index.html";
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
    addDiv.hidden = true;
    savedAdd.hidden = false;
    savedAdd.innerHTML = "";

    let userAdd = JSON.parse(localStorage.getItem("user-address"));

    let head = document.createElement("h5");
    head.innerText = "Saved Address";

    let name = document.createElement("p");
    name.innerText = `Name :- ${userAdd.name}`;

    let number = document.createElement("p");
    number.innerText = `Phone no. :- ${userAdd.number}`;

    let addLine = document.createElement("p");
    addLine.innerText = `Address Line :- ${userAdd.addline}`;

    let houseno = document.createElement("p");
    houseno.innerText = `House no. :- ${userAdd.houseno}`;

    let landMark = document.createElement("p");
    landMark.innerText = `Landmark :- ${userAdd.landmark}`;

    let city = document.createElement("p");
    city.innerText = `City :- ${userAdd.city}`;

    let zip = document.createElement("p");
    zip.innerText = `Zip :- ${userAdd.zip}`;

    let state = document.createElement("p");
    state.innerText = `State :- ${userAdd.state}`;

    savedAdd.append(head,name,number,addLine,houseno,landMark,city,zip,state);

})

review.addEventListener("click",() => {
    let addCheck = JSON.parse(localStorage.getItem("user-address"));
    if(addCheck != undefined){
        window.location = "../review_pay.html";
    }
    else{
        alert("Please enter your address first !!");
    }
})