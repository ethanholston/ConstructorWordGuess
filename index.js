var Word = require("./Word.js");
var inquirer = require("inquirer");

var ansArr = ["The Godfather", "Big Daddy", "Harold and Kumar"];
var answer;

function gamePlay(){
    answer = new Word(ansArr[0]);
    var ansInArr = answer.buildArr();
    var ansAsString = answer.buildString(ansInArr);
    console.log(ansAsString);
    console.log(answer);
    console.log(ansInArr);
    for(i=0; i<answer.length; i++){
        console.log(answer.buildString());
    }

    // inquirer.prompt([
    //     {
    //         name: "guess",
    //         message: "Guess a letter"
    //     }
    // ]);
}

gamePlay();