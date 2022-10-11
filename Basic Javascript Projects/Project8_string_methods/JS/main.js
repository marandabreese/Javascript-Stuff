function newStrings() {
    var string_1 = "This is a ";
    var string_2 = "concatenated string.";
    var new_string = string_1.concat(string_2); //.concat combines multiple strings
    document.getElementById("string_method").innerHTML = new_string;
}

function sliceMethod() {
    var sentence = "This is a really cool sentence.";
    var portion = sentence.slice(17,21); //.slice isolates a portion of string
    document.getElementById("slice_method").innerHTML = portion;
}

function upperCaseMethod() {
    var textTransform = "all upper case";
    var allCaps = textTransform.toUpperCase(); //.toUpperCase transforms all text to caps
    document.getElementById("uppercase_method").innerHTML = allCaps;
}

function searchMethod() {
    var searchString = "Look at this fancy string";
    var findStuff = searchString.search("fancy"); //searches for a match and returns the postition
    document.getElementById("search_method").innerHTML = findStuff;
}

function toStringMethod() {
    var numbers = 679;
    var nowString = numbers.toString(); //changes a number into a string
    document.getElementById("tostring_method").innerHTML = nowString;
}

function precisionMethod() {
    var largeNumber = 897091093.20910;
    var preciseNumber = largeNumber.toPrecision(6); //formats a number to a specific length
    document.getElementById("toprecision_method").innerHTML = preciseNumber;
}

function toFixedMethod() {
    var largeNumber = 8989.098789;
    var fixedNumber = largeNumber.toFixed(2); //formats to a fixed number of decimals
    document.getElementById("tofixed_method").innerHTML = fixedNumber;
}

function valueOfMethod() {
    var number = 780;
    var valueNumber = number.valueOf(); //returns the primitive value of a number
    document.getElementById("valueof_method").innerHTML = valueNumber;
}