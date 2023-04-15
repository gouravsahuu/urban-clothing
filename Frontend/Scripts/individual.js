const logo = document.getElementById("logo");
const user = document.getElementById("user");
const bag = document.getElementById("bag");
const mensPage = document.getElementById("mensPage");
const imageDiv = document.getElementById("imageDiv");
let prodName = document.getElementById("prodName");
let prodPrice = document.getElementById("prodPrice");
let prodColour = document.getElementById("prodColour");
let prodCategory = document.getElementById("prodCategory");
let addtobag = document.getElementById("addtobag");

const cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

logo.addEventListener("click",() => {
    window.location = "../index.html"
})
user.addEventListener("click",() => {
    let loginCheck = localStorage.getItem("username");
    if(loginCheck != undefined){
        window.location = "../myaccount.html";
    }
    else{
        window.location = "../signin.html";
    }
})
bag.addEventListener("click",() => {
    window.location = "../cart.html";
})
mensPage.addEventListener("click",() => {
    window.location = "../mens.html"
})

let obj = JSON.parse(localStorage.getItem("indi_prod"));

console.log(obj);

prodName.innerText = obj.title;
prodPrice.innerText = `Rs. ${obj.price}`;
prodColour.innerText = obj.colour;
prodCategory.innerText = obj.category;

let image = document.createElement("img");
image.setAttribute("src",obj.image);

imageDiv.append(image);

addtobag.addEventListener("click",() => {
    addToCart(obj);
})

// add to cart function
function addToCart (element) {
    let obj = {
        title:element.title,
        image:element.image,
        price:element.price,
        category:element.category,
        id:element.id,
        quantity:1
    }
    if(cartItem.length == 0){
        cartItem.push(obj);
        localStorage.setItem("cartItem",JSON.stringify(cartItem));
        alert("Product added to Cart");
    }
    else{
        let flag = true;
        for(let i=0;i<cartItem.length;i++){
            if(cartItem[i].id == element.id){
                flag = false;
            }
        }
        if(flag){
            cartItem.push(obj);
            localStorage.setItem("cartItem",JSON.stringify(cartItem));
            alert("Product added to Cart");
        }
        else{
            alert("Product already in Cart");
        }
    }
}

window.addEventListener("load",() => {
    let signedInUser = localStorage.getItem("username");
    if(signedInUser != undefined){
        user.setAttribute("title",signedInUser);
    }
});