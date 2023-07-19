var fs = require('fs');
const path = require('path');

document.open();

const signupform = document.getElementById("form");
const signupbutton = document.getElementById("button");

loginButton.addEventListener("click", (e) => {
    const username = signupform.username.value;
    const password = signupform.password.value;
    const confirm = signupform.pswconfirm.value;
    const type = signupform.type.value;
    const userdata = {};
    if(confirm === password){
        userdata.psw = password;
        userdata.user = username;
        var users = "/users";
        if(!fs.existsSync(users + username)){
            fs.writeFile(users + username, JSON.stringify(userdata), function(err){
                if (err) throw err;
                alert("account created successfully");
                //send to dashboard
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