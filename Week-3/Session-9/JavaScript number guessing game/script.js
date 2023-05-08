let currentGuess = 0;

value = 'Enter Number betweeen 1 and 100';

message = value.trim();

let enternumber = prompt(message);

function playGuessingGame(numberToGuess,totalGuessess = 10){

    if (numberToGuess === enternumber) { alert('You Are Won the Match......!'); }
    
    if (currentGuess === totalGuessess) { alert('You Have Reached Max...!'); }

    if(isNaN(enternumber) === true){ message =`Please Enter Number`; }

    if(numberToGuess !== enternumber) {

        if(enternumber < numberToGuess) {
            message =`${enternumber} Please Guess a Biger Number`;
        } 
        
        if(enternumber > numberToGuess) {
            message = `${enternumber} Please Guess a Smaller Number`;
        }
        currentGuess++; 
        return;
    }
};

playGuessingGame(7,3);