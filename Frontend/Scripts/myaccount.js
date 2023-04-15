const baseURL = "https://lucky-ruby-puffer.cyclic.app";
const sign = document.getElementById("signin");

const mensPage = document.getElementById("menspage");
const user = document.getElementById("user");
const bag = document.getElementById("bag");
const home = document.getElementById("logo");
const accDiv = document.getElementById("accDiv");

mensPage.addEventListener("click",() => {
    window.location = "../mens.html"
})
user.addEventListener("click",() => {
    window.location = "../signin.html";
})
bag.addEventListener("click",() => {
    window.location = "../cart.html";
})
home.addEventListener("click",() => {
    window.location = "../index.html";
})

window.addEventListener("load",() => {
    let signedInUser = localStorage.getItem("username");
    if(signedInUser != undefined){
        user.setAttribute("title",signedInUser);
    }
});

window.addEventListener("load",() => {
    const user_id = localStorage.getItem("user_ID");
    if(user_id != undefined){
        fetchIndiUser(user_id);
    }
});



function fetchIndiUser (id){
    fetch(`${baseURL}/user/id/${id}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        renderUserDetails(data[0]);
    })
    .catch((err) => {
        console.log(err);
    })
}

function renderUserDetails(user){
    accDiv.innerHTML = "";

    let heading = document.createElement("h1");
    heading.innerText = "My Account";

    let name = document.createElement("p");
    name.innerText = `Name :- ${user.name}`;

    let email = document.createElement("p");
    email.innerText = `Email :- ${user.email}`;

    let gender = document.createElement("p");
    gender.innerText = `Gender :- ${user.gender}`;

    let phone = document.createElement("p");
    phone.innerText = `Phone No. :- ${user.phone_number}`;

    let logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Logout";
    logoutBtn.addEventListener("click",() => {
        localStorage.clear();
        window.location = "../index.html";
    })

    accDiv.append(heading,name,email,gender,phone,logoutBtn);
}