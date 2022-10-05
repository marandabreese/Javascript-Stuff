function myMathFunction() {
    var result = 25 + 8; // the addition function
    document.getElementById("Math").innerHTML = result;
}

function mySubtraction() {
    var result = 25 - 8; //subtraction function
    document.getElementById("Math1").innerHTML = result;
}

function divOperation() {
    var result = 25/8; //division function
    document.getElementById("Math2").innerHTML = result;
}

function multiOperation() {
    var result = 25*8; //multiplicaiton function
    document.getElementById("Math3").innerHTML = result;
}

function manyMath() {
    var result = (9*2) + 7 - 2; //multiple operators function
    document.getElementById("Math4").innerHTML = result;
}

function remainMath() {
    var result = 45 % 7; //remainder function
    document.getElementById("Math5").innerHTML = result;
}

function negativeMath() {
    var result = 65; //unary function
    document.getElementById("Math6").innerHTML = -result;
}

function upThenDownMath() {
    var result = 65; //increments funchtion
    document.getElementById("Math7").innerHTML = result++;
}

function randomMath() {
    var result = (Math.random() * 100); //math.random function
    document.getElementById("Math8").innerHTML = Math.round(result); //with math.round for a whole number
}