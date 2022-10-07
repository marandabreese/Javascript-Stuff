function rideFunction() { //tenary operator test 1
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voteFunction() { //tenary operator test 2
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age >= 18) ? "You are old enough": "You are not old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //defining vehicle class
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack  = new Vehicle("Dodge", "Viper", 2020, "Red"); //new vehicel object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White & Black"); //new vehicel object
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //new vehicel object
function myFunction() { //adds part of an object to the html
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Cat(Name, Color, Attitude) { // defining the cat class
    this.Cat_Name = Name;
    this.Cat_Color = Color;
    this.Cat_Attitude = Attitude;
}

var Ping = new Cat('Ping', "white", "loud"); //new cat object

function getCatName() { //another object test
    document.getElementById("New_and_This").innerHTML = Ping.Cat_Name;
}

function nestedFunction() { //testing nested functions
    document.getElementById("Nested_Function").innerHTML = funFunction();
    function funFunction() {
        var cats = 4;
        cats = cats + 1;
        console.log(cats);
        return cats;
    }
}