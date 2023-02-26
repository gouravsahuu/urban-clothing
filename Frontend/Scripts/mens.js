const baseURL = "https://lucky-ruby-puffer.cyclic.app";
const prodDiv = document.getElementById("mensProd");
const logo = document.getElementById("logo");
const user = document.getElementById("user");
const bag = document.getElementById("bag");
const sortingFunc = document.getElementById("sortingFunc");
const filterByCol = document.getElementById("filterByCol");
const filterByCat = document.getElementById("filterByCat");

const cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];

let productsData = [];
console.log(productsData);

logo.addEventListener("click",() => {
    window.location = "../index.html"
})
user.addEventListener("click",() => {
    window.location = "../signin.html";
})
bag.addEventListener("click",() => {
    window.location = "../cart.html";
})
window.addEventListener("load",fetchProd);

//sort by price

sortingFunc.addEventListener("change",() => {
    if(sortingFunc.value == "-1"){
        sortedFetch(-1);
    }
    else if(sortingFunc.value == "1"){
        sortedFetch(1);
    }
    else{
        fetchProd();
    }
})

//filter by colour 

filterByCol.addEventListener("change",() => {
    if(filterByCol.value == "Black"){
        filterByColour("Black");
    }
    else if(filterByCol.value == "White"){
        filterByColour("White");
    }
    else if(filterByCol.value == "Yellow"){
        filterByColour("Yellow");
    }
    else if(filterByCol.value == "Blue"){
        filterByColour("Blue");
    }
    else if(filterByCol.value == "Grey"){
        filterByColour("Grey");
    }
    else if(filterByCol.value == "Green"){
        filterByColour("Green");
    }
    else{
        fetchProd();
    }
})

//filter by category

filterByCat.addEventListener("change",() => {
    if(filterByCat.value == "T-Shirt"){
        filterByCategory("T-Shirt");
    }
    else if(filterByCat.value == "Polo"){
        filterByCategory("Polo");
    }
    else if(filterByCat.value == "Jacket"){
        filterByCategory("Jacket");
    }
    else if(filterByCat.value == "Hoodie"){
        filterByCategory("Hoodie");
    }
    else{
        fetchProd();
    }
})

// filter by category function
function filterByCategory(category) {
    let newProd = productsData.filter((element) => {
        if(element.category == category){
            return true;
        }
    })
    renderProd(newProd);
}

//filter by colour function
function filterByColour(colour) {
    let newProd = productsData.filter((element) => {
        if(element.colour == colour){
            return true;
        }
    })
    renderProd(newProd);
}

//fetching all product form api
function fetchProd (){
    fetch(`${baseURL}/product/all`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        if(productsData.length == 0){
            productsData.push(...data);
        }
        renderProd(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

//sorting function
function sortedFetch(x) {
    fetch(`${baseURL}/product/sort/${x}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        renderProd(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

//rendering product function
function renderProd (data) {

    prodDiv.innerHTML = "";
    
    data.forEach((element) => {
        
        let main = document.createElement("div");
        main.setAttribute("class","mainDiv");

        let pic = document.createElement("img");
        pic.setAttribute("src",element.image);
        pic.addEventListener("click",() => {
            indiProduct(element);
        });

        let name = document.createElement("h5");
        name.innerText = element.title;

        let price = document.createElement("p");
        price.innerText = `Rs. ${element.price}`;

        let category = document.createElement("p");
        category.innerText = element.category;

        let inStock = document.createElement("p");
        if(element.inStock == true){
            inStock.innerText = "In Stock";
        }
        else{
            inStock.innerText = "Out Of Stock";
        }
        

        let cart = document.createElement("button");
        cart.innerText = "Add to Cart";
        cart.setAttribute("class","cartbtn");
        cart.addEventListener("click",() => {
            addToCart(element);
        });

        main.append(pic,name,price,category,inStock,cart);

        prodDiv.append(main);
    });

}

// add to cart function
function addToCart (element) {
    let obj = {
        title:element.title,
        image:element.image,
        price:element.price,
        category:element.category,
        id:element._id,
        quantity:1
    }
    let token = localStorage.getItem("token");
    if(token == undefined || token == "" || token == null){
        alert("Please Login first !!");
        window.location = "../signin.html";
    }
    else{
        if(cartItem.length == 0){
            cartItem.push(obj);
            localStorage.setItem("cartItem",JSON.stringify(cartItem));
            alert("Product added to Cart");
        }
        else{
            let flag = true;
            for(let i=0;i<cartItem.length;i++){
                if(cartItem[i].id == element._id){
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
    
}


//individual product data
function indiProduct(element) {
    let obj = {
        title:element.title,
        image:element.image,
        price:element.price,
        category:element.category,
        colour:element.colour,
        id:element._id
    }
    localStorage.setItem("indi_prod",JSON.stringify(obj));
    window.location = "../individual.html";
}