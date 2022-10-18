function Call_Loop() {
    let catfacts = ["Ping", "is", "cute"];
    let i = 0;
    let sentence = "";
    console.log(catfacts.length);
    while (i < catfacts.length) { //while loop
        sentence = sentence + catfacts[i] + " "; //adds pieces of area into variable
        document.getElementById("loop").innerHTML = sentence; //prints variable
        i++;
    }
}

let newString = "Really Great Sentence!"; //string.length method
console.log(newString.length);

function for_Loop() {
    let coolList = ["cheese", "broccoli", "cream", "spices"];
    let newSentence = "";
    for (let i = 0; i < coolList.length; i++) {
        newSentence = newSentence + coolList[i] + "<br>"; //iterates through the list
        document.getElementById("list").innerHTML = newSentence; //prints the complete list
    }
}

function array_Function() {
    let tierList = ["Priest", "Mage", "Paladin", "Warlock", "Everything Else"];
    let newList = ""
    for (let i = 0; i < tierList.length; i++) {
        newList = newList + "<li>" + tierList[i] + "</li>"; //creates an ordered list
        document.getElementById("array").innerHTML = newList; //prints the full list
    }
}

function constant_Function() {
    const fancyStuff = { //testing the const declaration
        name : "Fancy",
        type : "Stuff",
        list : "Interesting"
    }
    fancyStuff.newThing = "Exciting!";
    fancyStuff.list = "Brand New!";
    console.log(fancyStuff);
    document.getElementById("Constant").innerHTML = fancyStuff.list + " " + fancyStuff.newThing;
}

function return_Function() {
    let i = 9;
    let j = 2;
    return i + j; //return usage
}

document.getElementById("Return").innerHTML = return_Function();

let cat_Object = {
    name : "Ping",
    age: 8,
    color: "white",
    sound : function() {
        return cat_Object.name + " says meow!"; //a method
    }
}

document.getElementById("cat").innerHTML = cat_Object.sound();

function break_Function() {
    let cats = 0;
    while (cats < 10) {
        cats ++;
        console.log(cats);
        if (cats === 5) { break;} //breaks the loop at 5
    }
    console.log("Stop! You already have " + cats + " cats!")
}

function continue_Function() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {continue;} //skips counting 5
        console.log(i + " cats");
    }
}