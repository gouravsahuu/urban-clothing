const baseURL = "https://lucky-ruby-puffer.cyclic.app";

let dashboard = document.getElementById("dashboard-page");
let products = document.getElementById("products-page");
let orders = document.getElementById("orders-page");
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
orders.addEventListener("click",() => {
    window.location = "../adminOrders.html";
})


window.addEventListener("load",() => {
    fetch(`${baseURL}/user/all`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        renderCustomers(data);
    })
    .catch((err) => {
        console.log(err);
    })
})

function renderCustomers(userData){

   tableBody.innerHTML = "";
     
   userData.forEach((element) => {
       
       let row = document.createElement("tr");
       
       let sno = document.createElement("td");
       sno.innerText = element._id;

       let name = document.createElement("td");
       name.innerText = element.name;

       let email = document.createElement("td");
       email.innerText = element.email;

       let mob = document.createElement("td");
       mob.innerText = element.phone_number;

       row.append(sno,name,email,mob);

       tableBody.append(row);

    });

}