var fs = require('fs');
const path = require('path');

const loginForm = document.getElementById("login-form");
loginForm.submit.addEventListener("click", (e) => {
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
        location.replace("/dashboard.html?type=" + userdata.tp + "&user=" + username);     
    } else {
        alert("Incorrect credentials.");
    }
})