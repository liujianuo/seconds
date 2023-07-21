var usernameobj;
var passwordobj;
var confirmobj;
var typeobj;
const userdata = {};

window.onload = function () {
    usernameobj = document.getElementById('username');
    passwordobj = document.getElementById('password');
    confirmobj = document.getElementById('confirm');
    typeobj = document.getElementById('typeselect');
};

const signupform = document.getElementById('signup-form');

signupform.addEventListener('submit', 
    function (event){ 
        event.preventDefault(); 
        var username = usernameobj.value;
        var password = passwordobj.value;
        var confirm = confirmobj.value;
        var type = typeobj.value;
        alert("test");
        if(type == ''){
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
    }
);