alert("I'm thinking of a number 1-10. Guess what number I'm thinking of");

var answer = 9
// var guess;
// var guess = ("Guess the number");


// for (i = 0; i < 10; i++) {
//     if (answer == guess) {
//         alert("You guessed correctly!");
//         break;
//     } else {
//         guess = prompt("Try again!");
//     }
// }

var wins = 0;
var losses = 0;
var answers = null;

var guessesLeft = 9;
var guessesMax = 10;
var updateGuessesLeft = function () {
    document.querySelector("#guesses").innerHTML = guessesLeft;
}

var yourGuessesSoFar = [];
var updateYourGuessesSoFar = function () {
    document.querySelector("#far").innerHTML =  yourGuessesSoFar.join(", "); 
};

var reset = function () {
    guessesLeft = 9;
    yourGuessesSoFar = [];
    updateGuessesLeft();
    updateYourGuessesSoFar();
};



document.onkeydown = function (event) {
    guessesLeft--;
    console.log(guessesLeft);
    var number = event.key.toLowerCase();
yourGuessesSoFar.push(number);
    updateGuessesLeft();
    updateYourGuessesSoFar();

    if (number === answers) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        reset();
    }

    if (guessesLeft === 0) {

        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }
};