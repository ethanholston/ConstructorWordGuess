var Word = require("./Word.js");
var inquirer = require("inquirer");

var ansArr = ["The Godfather", "Big Daddy", "Harold and Kumar"];
var answer;
var turnsLeft;

function newGame(){
    answer = new Word(ansArr[0]);
    turnsLeft = 9;
    takeTurn();
}

function wonOrLost(x){
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
    var guessedCount = 0;
    var gameOver;
    for(let i=0; i<answer.ansAsArr.length; i++){
        if(answer.ansAsArr[i].guessed){
            guessedCount++;
        }
    }
    if(turnsLeft == 0){
        wonOrLost(false);
        gameOver = true;
    }
    else if (guessedCount == answer.ansAsArr.length){
        wonOrLost(true);
        gameOver = true;
    }
    else{
        takeTurn();
    }
}

function takeTurn(){
    console.log("You have " + turnsLeft + " guesses left");
    console.log(answer.ansAsStr);
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        }
    ]).then(function(res){
        answer.guess(res.guess);
        if(!answer.guess(res.guess)) turnsLeft--;
        checkGameOver();
    });
}

newGame();