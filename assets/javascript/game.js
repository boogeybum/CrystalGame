$(document).ready(function(){

    // var targetNumber = Math.floor(Math.random() * 100);
    var targetNumber = 0;
    var imageOneNumber = 0;
    var imageTwoNumber = 0;
    var imageThreeNumber = 0;
    var imageFourNumber = 0;
    var playScore = 0;
    var targetMin = 19;
    var targetMax = 120;
    var minNumber = 1;
    var maxNumber = 12;
    var wins = 0;
    var losses = 0;

    // Function that randomly generates and sets the target value at the start of a new game.
    function setTarget() {
        targetNumber = Math.floor(Math.random() * (targetMax - targetMin + 1) + targetMin);
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


    // Function to add to the player tally by the assigned image value when an image is clicked and if else statment for determining wins or losses.
    $("#image1").click(function(){
        playScore = playScore + imageOneNumber;
        $("#playerScore").text("Player's Score: " + playScore);

        if (playScore === targetNumber) {
            winner();
        } else if (playScore > targetNumber) {
            loser();
        };
    });

    $("#image2").click(function(){
        playScore = playScore + imageTwoNumber;
        $("#playerScore").text("Player's Score: " + playScore);

        if (playScore === targetNumber) {
            winner();
        } else if (playScore > targetNumber) {
            loser();
        };
    });

    $("#image3").click(function(){
        playScore = playScore + imageThreeNumber;
        $("#playerScore").text("Player's Score: " + playScore);

        if (playScore === targetNumber) {
            winner();
        } else if (playScore > targetNumber) {
            loser();
        };
    });

    $("#image4").click(function(){
        playScore = playScore + imageFourNumber;
        $("#playerScore").text("Player's Score: " + playScore);

        if (playScore === targetNumber) {
            winner();
        } else if (playScore > targetNumber) {
            loser();
        };
    });

    // if else statement that responds when the player tally equals or is greater than the random target value
    // if (playScore === targetNumber) {
    //     winner();
    // } else if (playScore > targetNumber) {
    //     loser();
    // };

    // if the player tally equals the target amount the 'wins' increases by one, the player is notified of the win 
    function winner() {
        wins++;
        $("#wins").text("Player Wins: " + wins);
        alert("You Won!!");
        reset();
    };

    // if the player tally is greater than the target amount, the losses increases by one, the player is notified of the loss
    function loser() {
        losses++;
        $("#losses").text("Player Losses: " + losses);
        alert("You Lose!!");
        reset();
    };

    // the game resets to play again
    function reset() {
        playScore = 0;
        setTarget();
        imageOneValue();
        imageTwoValue();
        imageThreeValue();
        imageFourValue();
        $("#playerScore").text("Player's Score: " + playScore);
    };
    
});