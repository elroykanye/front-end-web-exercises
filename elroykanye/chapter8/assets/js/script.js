function displayHello () {
    let message = document.getElementById("message");
    message.outerHTML = "<h1>Hello World</h1>";
}


function generateEmail(form) {
    let firstName = form.elements["first"].value;
    let secondName = form.elements["second"].value;
    let email = firstName + "." + secondName + "@email.com";
    let emailPlace = document.getElementById("email");
    emailPlace.innerHTML = email;

    form.reset();
    form.elements["first"].focus();
}

function allowLastName(form) {
    let lastName = form.elements["second"];
    lastName.disabled = false;
}

function makeBgRed() {
    ele = document.getElementById("email-container");
    ele.style="background-color: red; opacity: .75;";
}

function makeBgBlue() {
    ele = document.getElementById("email-container");
    ele.style="background-color: blue; opacity: .75;";
}

function switchLeftRight () {
    var left = document.getElementById("left").innerHTML;
    var right = document.getElementById("right").innerHTML;
    document.getElementById("left").innerHTML = right;
    document.getElementById("right").innerHTML = left;
}
function switchTopLeft () {
    var left = document.getElementById("left").innerHTML;
    var top = document.getElementById("top").innerHTML;
    document.getElementById("left").innerHTML = top;
    document.getElementById("top").innerHTML = left;
}
function switchRightBottom () {
    var bottom = document.getElementById("bottom").innerHTML;
    var right = document.getElementById("right").innerHTML;
    document.getElementById("right").innerHTML = bottom;
    document.getElementById("bottom").innerHTML = right;
}

function restartGame() {
    document.getElementById("top").innerHTML = "N";
    document.getElementById("left").innerHTML = "W";
    document.getElementById("right").innerHTML = "E";
    document.getElementById("bottom").innerHTML = "S";
}

function validIns() {
    var ids = ["topIn", "leftIn", "rightIn", "bottomIn"];
    ids.forEach(ele => {
        if (ele == "") {
            return true;
        }
    }); return false;
}


function updateGame() {
    if (validIns()) {
        document.getElementById("top").innerHTML = document.getElementById("topIn").value;
        document.getElementById("left").innerHTML = document.getElementById("leftIn").value;
        document.getElementById("right").innerHTML = document.getElementById("rightIn").value;
        document.getElementById("bottom").innerHTML = document.getElementById("bottomIn").value;
        document.getElementById("update").disabled = true;
    } else {
        document.getElementById("updateMsg").innerHTML = ": make sure all inputs are valid!";
    }
    
}
function arrContains(value, arr) {
    var k = false;
    /*
    arr.forEach( item => {
        console.log("checking " + value + "..." + " with " + item);
        if (item == value) {
            console.log("FOUND!");
            k = true; 
            break;
        }
    }); 
    */

    for (var i = 0; i < arr.length; i++) {
        // console.log("checking " + value + "..." + " with " + arr[i]);
        if(value == arr[i]) {
            console.log("FOUND!");
            k = true;
            break;
        }
    }
    return k;
}

function refreshState() {
    var allowed = ["N", "W", "E", "S"];
    var ids = ["topIn", "leftIn", "rightIn", "bottomIn"];
    ids.forEach(element => {
        // var con = document.getElementById(element).value;
        var content = document.getElementById(element).value;
        var a = arrContains(content, allowed);
        console.log(a);
        if(a == true) {
            element.style = "background-color: green; color: white";
        } else {
            element.style = "background-color: red; color: white";
        }
    });
}
