const baseURL = "http://localhost:4500";

const prodDiv = document.getElementById("mensProd");

window.addEventListener("load",fetchProd);

function fetchProd (){
    fetch(`${baseURL}/product/all`)
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

function renderProd (data) {

    prodDiv.innerHTML = "";
    
    data.forEach((element) => {
        
        let main = document.createElement("div");
        main.setAttribute("class","mainDiv");

        let pic = document.createElement("img");
        pic.setAttribute("src",element.image);

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

        main.append(pic,name,price,category,inStock,cart);

        prodDiv.append(main);

    });

}