
alert("I'm thinking of a number 1-10. Guess what number I'm thinking of");

var answer = 9
var guess = prompt("Guess the number");

for (i=0; i < 10; i++) {
    if (answer == guess) {
        alert("You guessed correctly!");
        break;
    } else{ 
        guess = prompt ("Try again!");
    }   
    }

var wins = 0;
var losses = 0;
var ties = 0;