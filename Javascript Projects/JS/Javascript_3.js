function data_Function(food) {
    var foodType = food.getAttribute("data-food_suggestion");
    document.getElementById("output").innerHTML = "You can make " + foodType + " with " + food.innerHTML;
}