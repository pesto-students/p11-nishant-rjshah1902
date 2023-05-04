let numberToGuess;
let totalGuesses = 10;
let currentGuess = 1;

playGuessingGame(7,3);

function playGuessingGame(numberToGuess,totalGuessess){
    
    var enternumber = prompt('Enter Number betweeen 1 and 100');

    if(numberToGuess != enternumber){
        
        this.currentGuess = currentGuess++;

        if(this.currentGuess <= totalGuessess){

            if(enternumber < numberToGuess){

                alert('Guess a Large Number');

            } else if( enternumber > numberToGuess){

                alert('Guess a Small Number');

            } else if(isNaN(totalGuessess) == false) {

                enternumber = prompt('Please Enter Number');

            }
            
            playGuessingGame(numberToGuess,totalGuessess);
        
        }else{
            alert('You have Reached out of Range');
        }
        
    }else{

        alert('You Are Won the Game....!');

    }

}