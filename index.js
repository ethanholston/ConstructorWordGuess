var Word = require("./Word.js");
var inquirer = require("inquirer");

var ansArr = ["The Godfather", "Big Daddy", "Harold and Kumar"];
var answer;

function gamePlay(){
    answer = new Word(ansArr[0]).buildArr();
    // console.log(answer);
    for(i=0; i<answer.length; i++){
        console.log(answer.buildStrting());
    }

    // inquirer.prompt([
    //     {
    //         name: "guess",
    //         message: "Guess a letter"
    //     }
    // ]);
}

gamePlay();