//generates random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //display password in display box
    document.getElementById("display").value = password;

    //add password to generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br>";
}

//sets default length display to 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard.");
}