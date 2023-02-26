const logo = document.getElementById("logo");
const username = document.getElementById("username");
const cartProd = document.getElementById("products");
let itemnum = document.getElementById("noofitem");
let subtotal = document.getElementById("subtotal");
let total = document.getElementById("total");
const back = document.getElementById("back");
const checkout = document.getElementById("checkout");

let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
itemnum.innerText = cartItem.length;

let userName = localStorage.getItem("username");
username.innerText = userName;

logo.addEventListener("click",() => {
    window.location = "../index.html"
})
user.addEventListener("click",() => {
    window.location = "../signin.html";
})
back.addEventListener("click",() => {
    window.location = "../mens.html";
})
checkout.addEventListener("click",() => {
    window.location = "../shipping.html";
})

window.addEventListener("load",() => {
    renderProds(cartItem);
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
});

function renderProds(data) {

    cartProd.innerHTML = "";
    
    data.forEach((element,index) => {
        
        let main = document.createElement("div");
        main.setAttribute("class","mainDiv");
        
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class","imgDiv");
        let pic = document.createElement("img");
        pic.setAttribute("src",element.image);
        imgDiv.append(pic);

        let sideDiv = document.createElement("div");
        sideDiv.setAttribute("class","sideDiv");

        let name = document.createElement("h5");
        name.innerText = element.title;

        let category = document.createElement("p");
        category.innerText = element.category;

        let price = document.createElement("p");
        price.innerText = `Rs. ${element.price}`;
        
        let quanDiv = document.createElement("div");
        quanDiv.setAttribute("class","quanDiv");
        let quan = document.createElement("p");
        let x = element.quantity;
        quan.innerText = `Quantity : ${x}`;
        let plus = document.createElement("button");
        plus.innerText = "+";
        plus.addEventListener("click",() => {
            x++;
            quan.innerText = `Quantity : ${x}`;
        })
        let minus = document.createElement("button");
        minus.addEventListener("click",() => {  
            if(x >=2){
                x--;
                quan.innerText = `Quantity : ${x}`;
            }
        })
        minus.innerText = "-";
        quanDiv.append(quan,plus,minus);

        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";
        deletebtn.setAttribute("class","dltbtn");
        deletebtn.addEventListener("click", () => {

            cartItem.splice(index,1);
            if(cartItem.length == 0){
                cartItem = [];
            }
            localStorage.setItem("cartItem",JSON.stringify(cartItem));
            window.location.reload();
            itemnum.innerText = cartItem.length;
        })

        sideDiv.append(name,category,price,quanDiv,deletebtn);

        main.append(imgDiv,sideDiv);

        cartProd.append(main);
    });
}