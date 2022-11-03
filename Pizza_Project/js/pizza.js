function getReceipt() {
    var text1 = '<h3>You Ordered:</h3>';
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "X-Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Deep Dish Pizza") {
        sizeTotal = 20;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = S" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal,text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedTopping.push(toppingArray[i].value);
            console.log("selected topping item: (" + toppingArray[i].value + ")");
            text1 = text1 + toppingArray[i].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "S" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    getVeggies(runningTotal, text1);
}

function getVeggies(runningTotal, text1) {
    var veggiesTotal = 0;
    var selectedVeggies = [];
    var veggiesArray = document.getElementsByClassName('veggies');
    for (let i = 0; i < veggiesArray.length; i++) {
        if (veggiesArray[i].checked) {
            selectedVeggies.push(veggiesArray[i].value);
            console.log("selected veggie item: (" + veggiesArray[i].value + ")");
            text1 = text1 + veggiesArray[i].value + "<br>";
        }
    }
    var veggieCount = selectedVeggies.length;
    if (veggieCount > 1) {
        veggiesTotal = (veggieCount - 1);
    } else {
        veggiesTotal = 0;
    }
    runningTotal = (runningTotal + veggiesTotal);
    console.log("total selected veggie items: " + veggieCount);
    console.log(veggieCount + " veggie - 1 free veggie = " + "S" + veggiesTotal + ".00");
    console.log("veggie text1: " + text1);
    console.log("Purchase Total: " + "$" + veggiesTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}

$('#pizza-slideshow > div:gt(0)').hide();

setInterval(function() {
    $('#pizza-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#pizza-slideshow');
}, 3000);