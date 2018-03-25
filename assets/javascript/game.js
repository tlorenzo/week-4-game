
// A function telling the interpreter to wait until the HTML and CSS has fully loaded and rendered into the browser.
$(document).ready(function () {

//Global Scope
// increment++; Counters
    var gamesWon = 0;
    var gamesLost = 0;
    var totalScore = 0;
    //Randomized values from 1 - 12
    var crystalOne =      Math.floor( (Math.random() * 12 ) + 1 );
    var crystalTwo =      Math.floor( (Math.random() * 12 ) + 1 );
    var crystalThree =    Math.floor( (Math.random() * 12 ) + 1 );
    var crystalFour =     Math.floor( (Math.random() * 12 ) + 1 );
    //Randomized values from 19 - 120
    var numberToMatch =   Math.floor( (Math.random() * 102) + 18);

    //Check the console to confirm that we're getting the right values from 1 - 12 for the crystals.
    //And 19 - 120 for the Target Number
    console.log("Global One: " + crystalOne);
    console.log("Global Two: " + crystalTwo);
    console.log("Global Three: " + crystalThree);
    console.log("Global Four: " + crystalFour);
    console.log("Global to Match: " + numberToMatch);

//This function first cleans out all the numeric values displayed on the page and updates them real time.
    function updateScore() {
        $('#yourValue').empty();
        $('#yourValue').html(totalScore);

        $('#goalValue').empty();
        $('#goalValue').html(numberToMatch);

        $('#winRecord').empty();
        $('#winRecord').html("Wins: " + gamesWon);

        $('#lossRecord').empty();
        $('#lossRecord').html("Losses: " + gamesLost);

    }
//Initial call of our update function.
    updateScore();

    //We run this function as soon as we get an == our Number to Match or > our Number to Match
    function reUpGame() {
        totalScore = 0;
        totalScore = 0;
        totalScore = 0;
        totalScore = 0;
        totalScore = 0;
        totalScore = 0;  // Forcing total score back to zero.
        $('#yourValue').html(totalScore);
        numberToMatch = 999;  // Testing
        numberToMatch = Math.floor((Math.random() * 102) + 18); // Grabbing a brand new value from 19 - 120

        //Displaying this number through the DOM
        $('#goalValue').empty();
        $('#goalValue').html(numberToMatch);

        // Reassigning our random secret values to all four of our crystals.
        crystalOne = Math.floor((Math.random() * 12) + 1);
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        crystalThree = Math.floor((Math.random() * 12) + 1);
        crystalFour = Math.floor((Math.random() * 12) + 1);
        //Reconfirm through the console whether we're getting all the right values.
        console.log("reUP One: " + crystalOne);
        console.log("reUP Two: " + crystalTwo);
        console.log("reUP Three: " + crystalThree);
        console.log("reUP Four: " + crystalFour);
        console.log("reUP to Match: " + numberToMatch);
        
        // Updating all the figures once more.
        updateScore();
    }

    //This function contains conditionals that determine how all the action in the program plays itself out.
    //If they match both numbers, either by luck or by doing the arithmetic, hooray, let's congratulate them.
    //Increment our win counter by one and display the result through the DOM.
    //If they over shoot the number, too bad, have another go.
    //Increment our loss counter by one and display the result through the DOM.
    //If neither has happened, then simply give them a message instructing them to continue gameplay and then update all our figures.
    //Then run the appropriate functions declared above.
    function playFunction() {
        if (totalScore == numberToMatch) {
            var winAudio = new Audio("assets/audio/bell1.wav");
            winAudio.volume = 0.4;
            winAudio.play();
            gamesWon++;
            $('#alertMessage').empty();
            $('#alertMessage').html("YOU WIN!  Play another game.");
            updateScore();
            reUpGame();
        } else if (totalScore > numberToMatch) {
            gamesLost++;
            var loseAudio = new Audio("assets/audio/metalhit1.wav");
            loseAudio.volume = 0.4;
            loseAudio.play();
            $('#alertMessage').html("YOU LOSE!  Try again.");
            reUpGame();
        }
        else {
            $('#alertMessage').html("Keep going! Tap on another crystal.");
            updateScore();
        }
    }



    
    //Here are our click event functions.  One for each crystal.
    $('#crystalOne').click(function () {
        var audio = new Audio("assets/audio/coin5.wav");
        audio.play();
        totalScore = totalScore + crystalOne;
        playFunction();
        
    })

    $('#crystalTwo').click(function () {
        var audio = new Audio("assets/audio/coin2.wav");
        audio.play();
        totalScore = totalScore + crystalTwo;
        playFunction();
        
    })

    $('#crystalThree').click(function () {
        var audio = new Audio("assets/audio/coin3.wav");
        audio.play();
        totalScore = totalScore + crystalThree;
        playFunction();
        
    })

    $('#crystalFour').click(function () {
        var audio = new Audio("assets/audio/coin4.wav");
        audio.play();
        totalScore = totalScore + crystalFour;
        playFunction();
        
    })





















































});