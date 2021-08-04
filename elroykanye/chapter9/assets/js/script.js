

function gameNightPopUp() {
    var status = confirm("Can you handle the excitement");
    message = document.getElementById("message");
    if(status) {
        message.innerHTML = "Awesome! Let's get this started yo!";
    } else {
        message.innerHTML = "Whoa! Get a life yo...";
    }
}