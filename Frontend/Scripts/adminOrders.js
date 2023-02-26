let dashboard = document.getElementById("dashboard-page");
let products = document.getElementById("products-page");
let customers = document.getElementById("customers-page");
let home = document.getElementById("home");
let tableBody = document.getElementById("tbody");

home.addEventListener("click",() => {
    window.location = "../index.html";
})

dashboard.addEventListener("click",() => {
    window.location = "../adminDash.html";
})
products.addEventListener("click",() => {
    window.location = "../adminProduct.html";
})
customers.addEventListener("click",() => {
    window.location = "../adminUsers.html";
})

window.addEventListener("load",() => {
    let orderData = JSON.parse(localStorage.getItem("userorder"));

    if(orderData == undefined){
       orderData = [];
    }

    renderCustomers(orderData);
})

function renderCustomers(orderData){

   tableBody.innerHTML = "";
     
   orderData.forEach((element) => {
       
       let row = document.createElement("tr");

       let order = document.createElement("td");
       order.innerText = element.ordernum;

       let username = document.createElement("td");
       username.innerText = element.username;

       let payMode = document.createElement("td");
       payMode.innerText = element.paymentmode;

       

       let amount = document.createElement("td");
       amount.innerText = element.totalamount;

       row.append(order,username,payMode,amount);

       tableBody.append(row);

    });

}