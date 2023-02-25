const baseURL = "http://localhost:4500";
const register = document.getElementById("register");
const sign = document.getElementById("signin");

let radio = document.getElementsByName("gender");

let genderVal;
for(let i=0;i<radio.length;i++){
    if(radio[i].checked){
        genderVal = radio[i].ariaValueMax;
        break;
    }
}


register.addEventListener("submit",() => {

    let obj = {

    }

})