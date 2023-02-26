const baseURL = "http://localhost:4500";

let orders = document.getElementById("orders-page");
let customers = document.getElementById("customers-page");
let products = document.getElementById("products-page");
let prodStatus = document.getElementById("prodStatus");
let orderStatus = document.getElementById("orderStatus");
let userStatus = document.getElementById("userStatus");
let home = document.getElementById("home");

let userOrders = JSON.parse(localStorage.getItem("userorder")) || [];

home.addEventListener("click",() => {
    window.location = "../index.html";
})

products.addEventListener("click",() => {
    window.location = "../adminProduct.html";
})
orders.addEventListener("click",() => {
    window.location = "../adminOrders.html";
})
customers.addEventListener("click",() => {
    window.location = "../adminUsers.html";
})

let num;
let usersnum;
window.addEventListener("load",() => {

    orderStatus.innerText = `${userOrders.length} Orders received.`

    fetch(`${baseURL}/product/all`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        num = data.length;
        prodStatus.innerText = `${num} products in inventory.`;
    })
    .catch((err) => {
        console.log(err);
    })

    fetch(`${baseURL}/user/all`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        usersnum = data.length;
        userStatus.innerText = `${usersnum} users registered.`;
    })
    .catch((err) => {
        console.log(err);
    })
})