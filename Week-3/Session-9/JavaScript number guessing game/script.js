let currentGuess = 1

function playGuessingGame(numberToGuess,totalGuessess = 10){
    
    let enternumber = prompt('Enter Number betweeen 1 and 100');
        
    if(numberToGuess !== enternumber){
        
        currentGuess++; 

        if(currentGuess < totalGuessess){

            if(isNaN(totalGuessess)) {
                enternumber = prompt(`Please Enter Number`);
            }

            if(enternumber < numberToGuess){
                enternumber = prompt(`${enternumber} Please Guess a Biger Number`);
            } 
            
            if( enternumber > numberToGuess){
                enternumber = prompt(`${enternumber} Please Guess a Smaller Number`);
            } 
            
            playGuessingGame(numberToGuess,totalGuessess);

        }else{
            alert('You Have Reached Max...!');
        }
    
    } else if(numberToGuess === enternumber){      
        alert('You Are Won the Match......!');
    }

};

playGuessingGame(7,3);