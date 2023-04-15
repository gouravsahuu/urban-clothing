const slideDiv = document.getElementById("slideDiv");
const mensPage = document.getElementById("mensPage");
const user = document.getElementById("user");
const bag = document.getElementById("bag");
const mensPage0 = document.getElementById("mensPage0");

mensPage.addEventListener("click",() => {
    window.location = "../mens.html"
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
mensPage0.addEventListener("click",() => {
    window.location = "../mens.html"
})

// let loginCheck = localStorage.getItem("username");
// if(loginCheck != undefined){
//     user.addEventListener("click",() => {
//         window.location = "../signin.html";
//     })
// }
// else{
//     user.addEventListener("click",() => {
//         window.location = "../signin.html";
//     })
// }

let images = ["../Images/show-10.png",
              "../Images/show-6.webp",
              "../Images/show-2.jpg",
              "../Images/show-7.webp",
              "../Images/show-3.jpg",
              "../Images/show-8.webp"]
let n = images.length;

let i = 0;
document.slidee.src = images[i];

setInterval(() => {
    document.slidee.src = images[i];
    if(i == (n-1)){
         i = 0;
    }
    else{
         i++;
    }
},3000);


window.addEventListener("load",() => {
    let signedInUser = localStorage.getItem("username");
    if(signedInUser != undefined){
        user.setAttribute("title",signedInUser);
    }
});


