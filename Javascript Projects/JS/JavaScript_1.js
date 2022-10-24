function switch_Function() {
    let opinion;
    let snacks = document.getElementById("Snacks").value;
    switch(snacks) {
        case "Chips" :
            opinion = "Always a good option.";
            break;
        case "Cookies" :
            opinion = "A winner in my book.";
            break;
        case "Veggies" :
            opinion = "Really?";
            break;
        case "Pretzels" :
            opinion = "I guess if that's all there is...";
            break;
        case "Fruits" :
            opinion = "Healthy and Fun!";
            break;
        case "Candy" :
            opinion = "Best in moderation";
        default:
            opinion = "Is that a valid snack?";
    }
    document.getElementById("opinion").innerHTML = opinion;
}

function class_Function() {
    let bestSnacks = document.getElementsByClassName("best");
    console.log(bestSnacks);
    bestSnacks[0].innerHTML = "Candy";
}

//canvas stuff
function draw_Function() {
    let newCanvas = document.getElementById("newcanvas");
    console.log(newCanvas);
    let ctx = newCanvas.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(500,500);
    ctx.stroke();
}

function gradient_Function() {
    let newCanvas = document.getElementById("newcanvas");
    let ctx = newCanvas.getContext("2d");
    let newGradient = ctx.createLinearGradient(0,0,500,0);
    newGradient.addColorStop(0, "purple");
    newGradient.addColorStop(1,"white");
    ctx.fillStyle = newGradient;
    ctx.fillRect(0,0,500,500);
}