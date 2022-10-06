document.write("Excellent Text" + 200);
document.write(typeof "text");

function displayNAN() {
    document.getElementById("notanumber").innerHTML = 0/0; //displays NaN
}

function displayTrue() {
    document.getElementById("truedisplay").innerHTML = isNaN("Potato");//checks if something is a number
}

function displayFalse() {
    document.getElementById("falsedisplay").innerHTML = isNaN("14");//checks if something is a number
}

function displayInfinite() {
    document.getElementById("infinitedisplay").innerHTML = 3E310; //larger than largest value
}

function displayNegative() {
    document.getElementById("negativedisplay").innerHTML = -3E310; //a negative larger than largest value
}

function displayBoolean() {
    document.getElementById("booleandisplay").innerHTML = (4 > 3); //expected true
}

function displayFalseBoolean() {
    document.getElementById("falsebooleandisplay").innerHTML = (4 < 3); //expected false
}

function compareTrue() {
    document.getElementById("comparetrue").innerHTML = (4 == "4"); //compares regardless of data type
}

function compareFalse() {
    document.getElementById("comparefalse").innerHTML = (4 == "9"); //compares regardless of data type
}

function veryTrue() {
    document.getElementById("verytrue").innerHTML = (4 === 4); //expects exact data type
}

function sortaTrue() {
    document.getElementById("sortatrue").innerHTML = (4 === "4"); //expects exact data type
}

function kindaTrue() {
    document.getElementById("kindatrue").innerHTML = (4 === 9); //expects exact data type
}

function notTrue() {
    document.getElementById("nottrue").innerHTML = (4 === "9"); //expects exact data type
}

function andTrue() {
    document.getElementById("andtrue").innerHTML = (4 == 4 && 20 > 4); //and operator
}

function andFalse() {
    document.getElementById("andfalse").innerHTML = (4 == 4 && 20 > 25); //and operator
}

function orTrue() {
    document.getElementById("ortrue").innerHTML = (4 == 4 || 20 < 4); //or operator
}

function orFalse() {
    document.getElementById("orfalse").innerHTML = (4 == 5 || 20 < 4); //or operator
}

function notOperator() {
    document.getElementById("notoperator1").innerHTML = !(4 == 4); //not operator
}

function notOperator2() {
    document.getElementById("notoperator2").innerHTML = !(20 < 4); //not operator
}

console.log(Math.random() * 100); //displays a random number to console
console.log(54 > 87); //displays false to console