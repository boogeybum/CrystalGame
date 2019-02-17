// var targetNumber = Math.floor(Math.random() * 100);
// var imageNumber = Math.floor(Math.random() * 100);

// Function that randomly generates and sets the target value at the start of a new game.
function setTarget() {
    var minNumber = 20;
    var maxNumber = 50;
    var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#targetNum").text("Target Number: " + targetNumber);
}

// Function that randomly generates and sets the value of each image at the start of a new game.
function imageValue() {
    var minNumber = 1;
    var maxNumber = 10;
    var imageNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $("#playerScore").text("Player's Score: " + imageNumber);
    // $("#apprentice").attr(imageNumber);
}

// Function to add to the player tally by the assigned image value when an image is clicked

// if else statement that responds when the player tally equals or is greater than the random target value

// if the player tally equals the target amount the 'wins' increases by one, the player is notified of the win 
// if the player tally is greater than the target amount, the losses increases by one, the player is notified of the loss

// the game resets to play again

// call the functions to run the game
setTarget();
imageValue();