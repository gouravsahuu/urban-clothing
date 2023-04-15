const baseURL = "https://lucky-ruby-puffer.cyclic.app";
const register = document.getElementById("register");
const sign = document.getElementById("signin");

let radio = document.getElementsByName("gender");

const mensPage = document.getElementById("menspage");
const user = document.getElementById("user");
const bag = document.getElementById("bag");
const home = document.getElementById("logo");

mensPage.addEventListener("click",() => {
    window.location = "../mens.html";
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


sign.addEventListener("submit",(e) => {
    e.preventDefault();
    const userData = {
       email:sign.logemail.value,
       password:sign.logpass.value
    }
    const res = check(userData);
    if(res){
       fetch(`${baseURL}/user/login`,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(userData)
        })
        .then((res) => {
           return res.json();
        })
        .then((data) => {
            if(data.message == "Log-In Success"){
                alert(data.message);
                localStorage.setItem("token",data.token);
                localStorage.setItem("username",data.username);
                localStorage.setItem("user_ID",data.userID);
                window.location = "../index.html";
            }
        })
        .catch((err) => {
           console.log(err.message);
        })
    }
    else{
       alert("Some Fields Are Missing");
    }
})

function check(obj){
   let check = false;
   if(obj.email != "" && obj.password != ""){
       check = true;
   }
   return check;
}


register.addEventListener("submit",(e) => {
    e.preventDefault();

    let genderVal;
    for(let i=0;i<radio.length;i++){
      if(radio[i].checked){
        genderVal = radio[i].value;
        break;
    }
}

    const userData = {
       name:register.name.value,
       email:register.email.value,
       phone_number:register.num.value,
       password:register.pass.value,
       gender:genderVal
    }
    const res = check(userData);
    if(res){
       fetch(`${baseURL}/user/register`,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(userData)
        })
        .then((res) => {
           alert("User Registered Successfully");
        })
        .catch((err) => {
           console.log(err);
        })
    }
    else{
       alert("Some Fields Are Missing");
    }
})

function check(obj){
   let check = false;
   if(obj.name != "" && obj.email != "" && obj.phone_number != "" && obj.password != "" && obj.gender != ""){
       check = true;
   }
   return check;
}