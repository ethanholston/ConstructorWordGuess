var Word = require("./Word.js");
var inquirer = require("inquirer");

var ansArr = ["The Godfather", "Big Daddy", "Harold and Kumar"];
var answer;
var turnsLeft;
var gameWon;
var gameLost;

function newGame(){
    answer = new Word(ansArr[0]);
    takeTurn();
    turnsLeft = 9;
}

function wonOrLost(x){
    if(x) console.log("You won");
    if(!x) console.log("You lost");
}


function checkGameOver(){
    var guessedCount = 0;
    var gameOver;
    for(let i=0; i<answer.ansAsArr.length; i++){
        if(answer.ansAsArr.guessed){
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
    // console.log(answer.ansAsStr);
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        }
    ]).then(function(res){
        console.log(res);
        answer.guess(res.guess);
        checkGameOver();
    });
}

newGame();