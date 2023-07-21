var fs = require('fs');
const path = require('path');

const title = document.getElementById("maintitle");
const userdata = {};

const query = window.location.search;
const param = new URLSearchParams(query);
const user = param.get('user');

if(!fs.existsSync("users/" + user)){
    title.textContent = "err: user not found";
}

fs.readFile("users/" + user, 'utf8', (err, contents) => {
    if (err) throw err;
    userdata = JSON.parse(contents);
});

if(userdata.tp == "provider"){


}
else if(userdata.tp == "reciever"){

}
else{
    title.textContent = "sometbing went wrong";
}

