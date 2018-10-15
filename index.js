var Word = require("./Word.js");
var inquirer = require("inquirer");

var ansArr = ["The Godfather", "Big Daddy", "Harold and Kumar"];
var answer;
var turnsLeft;
var lettersGuessed;
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function newGame(){
    answer = new Word(ansArr[Math.floor(Math.random() * ansArr.length)]);
    turnsLeft = 9;
    lettersGuessed = [];
    takeTurn();
}

function wonOrLost(x){ //takes boolean as parameter
    if(x){
        console.log("You won!");
    }
    else if(!x){
        console.log("You lost");
    }
    inquirer.prompt([
        {
            name: "again",
            type: "rawlist",
            message: "Play again?",
            choices: ["Yes", "No"]
        }
    ]).then(function(res){
        if(res.again == "Yes") newGame();
    });

}


function checkGameOver(){
    var guessedCount = 0; //gets a count of how many letters have been guessed
    for(let i=0; i<answer.ansAsArr.length; i++){
        if(answer.ansAsArr[i].guessed){
            guessedCount++;
        }
    }
    if(turnsLeft == 0){
        wonOrLost(false);
    }
    else if (guessedCount == answer.ansAsArr.length){ //checks if all letters have been guessed
        wonOrLost(true);
    }
    else{
        takeTurn();
    }
}

function takeTurn(){
    console.log("----------------------")
    console.log("You have " + turnsLeft + " guesses left");
    console.log(answer.ansAsStr);
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        }
    ]).then(function(res){
        if(alpha.indexOf(res.guess.toLowerCase()) > -1 && lettersGuessed.indexOf(res.guess.toLowerCase()) == -1){
            lettersGuessed.push(res.guess.toLowerCase());
            // console.log(lettersGuessed)
            answer.guess(res.guess); 
            if(!answer.guess(res.guess)) turnsLeft--; //decrements turnsLeft if guess() returns false
            checkGameOver();
        }
        else if(lettersGuessed.indexOf(res.guess.toLowerCase()) > -1){
            console.log("You already guessed that. Try again");
            takeTurn();
        }
        else{
            console.log("Invalid input. Please select a letter");
            takeTurn();
        }
    });
}

newGame();