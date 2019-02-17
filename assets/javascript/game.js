var targetNumber = Math.floor(Math.random() * 100)

function setTarget() {
    $("#targetNum").text("Target Number: " + targetNumber);
}

setTarget();