
function isStrongPassword(password){

    if(password.length > 8){
        
        if (password.includes('password') === true) {
        
            console.log("Please don't use password in your Password");
        
        } else if(password.toLowerCase() === password && password.toUpperCase() !== password) {
        
            console.log('Password is very easy, please Use Atleast 1 Upercase Character');
        
        } else if(password.toUpperCase() === password && password !== password.toLowerCase()) {
        
            console.log('Password is very easy, please Use Atleast 1 lowercase Character');
            
        } else {

            console.log('Your Password is Good');

        }
    
    } else if(password.length < 8){
    
        console.log('Password is Very Short, Use Atleast 8 Character');
    
    } else {
    
        console.log('Your Password is Strong');
    
    }
}

isStrongPassword('oicoinwoincw');
isStrongPassword('ABCWEIINE');
isStrongPassword('iwnciwuSSnec');
isStrongPassword('iwnciwuSpasswordSnec');