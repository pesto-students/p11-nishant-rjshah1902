let currentGuess = 0;

value = 'Enter Number betweeen 1 and 100';

message = value.trim();

let enternumber = prompt(message);

function playGuessingGame(numberToGuess,totalGuessess = 10){

    console.log(enternumber);

   if(enternumber == null){
        return;
   }
   
   currentGuess++;

   console.log(currentGuess);

    if (enternumber === numberToGuess) {
    
        alert('You Won the Match');
        return;
    
    }  
    
    if (isNaN(enternumber) === true) {
        
        enternumber = prompt('Please Enter a Number');
        playGuessingGame(numberToGuess,totalGuessess);
        return;
    
    }  
    
    if (currentGuess === totalGuessess) {

        alert('You Have Reached Max Limit');
        return;
    
    }  
    
    if (enternumber !== numberToGuess) {
      
        if (enternumber < numberToGuess){
            enternumber = prompt(`${enternumber} is to small. Guess a large number`);
            playGuessingGame(numberToGuess,totalGuessess);
            return;
        }
    
        if (enternumber > numberToGuess){
            enternumber = prompt(`${enternumber} is to large. Guess a smaller number`);
            playGuessingGame(numberToGuess,totalGuessess);
            return;
        }
    }

    /* if (numberToGuess === enternumber) { alert('You Are Won the Match......!'); }
    
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
    } */
};

playGuessingGame(7,5);