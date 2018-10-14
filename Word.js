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
            for(let i=0; i<letArr.length; i++){
                if(letArr[j].toLowerCase() == input || letArr[j].toUpperCase() == input ){
                    letArr[j].guessed = true;
                    letArr[j].display = this.letter;
                }
            }
        },
        this.buildString = function(x){
            var ansString;
            for(let i=0; i<x.length; i++){
                ansString += x[i].display;
            }
            return ansString;
        }
        // debug;
        // this.buildArr();
    }
}

module.exports = Word;