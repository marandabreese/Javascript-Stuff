function newFunction() {
    var str = "This is a test."; //This is the first variable
    var strPart2 = "<br>This is a new test."; //Second variable, intended to be shown below first

    document.getElementById("cool_text").innerHTML = str+= strPart2; //prints the concatenated string
}

function nextStep() {
    document.getElementById("secret_img").style.visibility = "visible";
}