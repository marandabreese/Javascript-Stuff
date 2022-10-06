
function getCatFacts() {
    var catFacts = {
        color: 'white',
        name: 'Ping',
        sounds: 'meow',
    }; //cat facts dictionary
    document.getElementById("Dictionary").innerHTML = catFacts.sounds; //push sounds to paragraph
};

function delCatFacts() {
    var catFacts = {
        color: 'white',
        name: 'Ping',
        sounds: 'meow',
    }; //cat facts dictionary
    delete catFacts.sounds; //delete a cat fact
    document.getElementById("Dictionary1").innerHTML = catFacts.sounds; //attempt to push sounds to paragraph
};