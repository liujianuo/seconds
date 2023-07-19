var fs = require('fs');
const path = require('path');

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
loginButton.addEventListener("click", (e) => {
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const userdata = {};
    var users = "/users";
    var found = false;
    fs.readdir(users, (err, files) => {
        if (err) throw err;
        var filepath;
        files.forEach(file => {
            if(!found){
                filepath = path.join(users, file);
                if(file === username){
                    found = true;
                    fs.readFile(filepath, 'utf8', (err, contents) => {
                        if (err) throw err;
                        userdata = JSON.parse(contents);
                    });
                }
            }
        });
      });
    e.preventDefault();
    if(!found){
        alert("User not found.")
    }
    else if (password === userdata.psw) {
        //send to dashboard;        
    } else {
        alert("Incorrect credentials.");
    }
})