var fs = require('fs');
const path = require('path');

document.open();

const signupform = document.getElementById("signup-form");

signupform.submit.addEventListener("click", (e) => {
    const username = signupform.username.value;
    const password = signupform.password.value;
    const confirm = signupform.confirm.value;
    const type = signupform.typeselect.value;
    const userdata = {};
    if(type == ""){
        alert("please select a user type")
    }
    else if(confirm === password){
        userdata.psw = password;
        userdata.user = username;
        userdata.tp = type;
        var users = "/users";
        if(!fs.existsSync(users + username)){
            fs.writeFile(users + username, JSON.stringify(userdata), function(err){
                if (err) throw err;
                alert("account created successfully");
                location.replace("/dashboard.html?type=" + userdata.tp + "&user=" + username);  
            });
        }
        else{
            alert("username used already.")
        }
    }
    else{
        alert("passwords do not match.")
    }
})