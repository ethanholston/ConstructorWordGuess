var letter = require ('./Letter.js')

class Word {
    constructor(word){
        this.buildArr = function(){
            var letArr = [];
            var wordArr = word.split("");
            for(let i=0; i<wordArr.length; i++){
                letArr.push(new letter(wordArr[i]));
                if(wordArr[i] == " "){
                    letArr[i].display = " ";
                    letArr[i].guessed = true;
                }
            }
            return letArr;
        },
        this.guess = function(input){
            // console.log(arr[0].letter);
            for(let i=0; i<this.ansAsArr.length; i++){
                if(this.ansAsArr[i].letter.toLowerCase() == input || this.ansAsArr[i].letter.toUpperCase() == input ){
                    this.ansAsArr[i].guessed = true;
                    this.ansAsArr[i].display = this.ansAsArr[i].letter;
                }
            }
            this.buildString(this.ansAsArr);
        },
        this.buildString = function(x){
            // console.log(x);
            var ansString = "";
            for(let i=0; i<x.length; i++){
                ansString += x[i].display;
                ansString += " ";
            }
            console.log(ansString);
        }
        this.ansAsArr = this.buildArr(word);
        this.ansAsStr = this.buildString(this.ansAsArr);
    }
}

module.exports = Word;