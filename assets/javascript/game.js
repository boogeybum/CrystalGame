$(document).ready(function(){

    // var targetNumber = Math.floor(Math.random() * 100);
    var imageOneNumber = 0;
    var imageTwoNumber = 0;
    var imageThreeNumber = 0;
    var imageFourNumber = 0;
    var playScore = 0;
    var targetMin = 20;
    var targetMax = 50;
    var minNumber = 1;
    var maxNumber = 10;
    var num1 = Math.floor(Math.random()*30+20);
    console.log(num1);

    // Function that randomly generates and sets the target value at the start of a new game.
    function setTarget() {
        var targetNumber = Math.floor(Math.random() * (targetMax - targetMin + 1) + targetMin);
        $("#targetNum").text("Target Number: " + targetNumber);
    };

    // Function that randomly generates and sets the value of each image at the start of a new game.
    function imageOneValue() {
        imageOneNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    };

    function imageTwoValue() {
        imageTwoNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    };

    function imageThreeValue() {
        imageThreeNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    };

    function imageFourValue() {
        imageFourNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    };

    // call the functions to run the game
    setTarget();
    imageOneValue();
    imageTwoValue();
    imageThreeValue();
    imageFourValue();


    // Function to add to the player tally by the assigned image value when an image is clicked
    $("#image1").click(function(){
        playScore = playScore + imageOneNumber;
        $("#playerScore").text("Player's Score: " + playScore);
    });

    $("#image2").click(function(){
        playScore = playScore + imageTwoNumber;
        $("#playerScore").text("Player's Score: " + playScore);
    });

    $("#image3").click(function(){
        playScore = playScore + imageThreeNumber;
        $("#playerScore").text("Player's Score: " + playScore);
    });

    $("#image4").click(function(){
        playScore = playScore + imageFourNumber;
        $("#playerScore").text("Player's Score: " + playScore);
    });

    // if else statement that responds when the player tally equals or is greater than the random target value
    

    // if the player tally equals the target amount the 'wins' increases by one, the player is notified of the win 
    // if the player tally is greater than the target amount, the losses increases by one, the player is notified of the loss

    // the game resets to play again


});