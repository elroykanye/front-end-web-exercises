

function gameNightPopUp() {
    var status = confirm("Can you handle the excitement");
    message = document.getElementById("message");
    if(status) {
        message.innerHTML = "Awesome! Let's get this started yo!";
    } else {
        message.innerHTML = "Whoa! Get a life yo...";
    }
}

function orderWords(form) {
    var tb1 = form.elements["word1"];
    var tb2 = form.elements["word2"];
    var msg;
    var word1 = tb1.value;
    var word2 = tb2.value;

    if (word1.toLowerCase() > word2.toLowerCase()) {
        tb1.value = word2;
        tb2.value = word1;
        msg = "Congrats! The words are now in order";
    } else {
        msg = "The words are already in order";
    }
     document.getElementById("message").innerHTML = msg;
}  

function calculateRoots(form) {
    var valA = parseFloat(form.elements["val-a"].value);
    var valB = parseFloat(form.elements["val-b"].value);
    var valC = parseFloat(form.elements["val-c"].value);
    
    if (valA == 0) {
        document.getElementById("message").innerHTML = "\"a\" cannot be zero";
    } else {

    }


    var d = (valB * valB) - (4 * valA * valC);
    var r1 = (0 - valB + Math.sqrt(d))/(2 * valA);
    var r2 = (0 - valB - Math.sqrt(d))/(2 * valA);
    console.log(r1);
    console.log(r2);

}