// var targetNumber = Math.floor(Math.random() * 100);
// var imageNumber = Math.floor(Math.random() * 100);


function setTarget() {
    var minNumber = 20;
    var maxNumber = 50;
    var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#targetNum").text("Target Number: " + targetNumber);
}


function imageValue() {
    var minNumber = 1;
    var maxNumber = 10;
    var imageNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#playerScore").text("Player's Score: " + imageNumber);
    // $("#apprentice").attr(imageNumber);
}

setTarget();
imageValue();