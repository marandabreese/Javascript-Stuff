var globalNumber = 20;

function globalFunction() {
    var localNumber = 40;
    localNumber = localNumber * globalNumber;
    console.log(localNumber);
}

console.log(localNumber); //causes an error

function dateFunction() {
    var hoursTime = new Date().getHours();
    if (hoursTime > 0 && hoursTime < 11) {
        console.log(hoursTime);
        document.getElementById("date").innerHTML = "Good Morning!";
    }
}

function monthFunction() {
    var monthTime = new Date().getMonth();
    console.log(monthTime);
    if (monthTime == 9) {
        document.getElementById("month").innerHTML = "Happy Spooky Month!";
    }    
}

function dayFunction() {
    var dayValue = document.getElementById("datetext").value;
    if ((dayValue % 2) == 0) { //checks if number is even
        document.getElementById("day").innerHTML = "Look forward to a great day!";
    } else {
        document.getElementById("day").innerText = "Try again tomorrow."
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    console.log(Time);
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time"
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}