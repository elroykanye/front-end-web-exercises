function displayHello () {
    let message = document.getElementById("message");
    message.outerHTML = "<h1>Hello World</h1>";
}


function generateEmail(form) {
    let firstName = form.elements["first"].value;
    let secondName = form.elements["second"].value;
    let email = firstName + "." + secondName + "@email.com";
    emailPlace = document.getElementById("email");
    emailPlace.innerHTML = email;

    form.reset();
    form.elements["first"].focus();
}

function makeBgRed() {
    ele = document.getElementById("email-container");
    ele.style="background-color: red; opacity: .75;";
}

function makeBgBlue() {
    ele = document.getElementById("email-container");
    ele.style="background-color: blue; opacity: .75;";
}