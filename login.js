const loginForm = document.getElementById("login-form");
function myfunc() {
    alert("test");
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const userdata = {};
    var users = "/users";
    var found = false;
    event.preventDefault();
    if(!found){
        alert("User not found.")
    }
    else if (password == "testpsw" && username == "admin") {
        location.replace("/dashboard.html?type=" + userdata.tp + "&user=" + username);     
    } else {
        alert("Incorrect credentials.");
    }
}