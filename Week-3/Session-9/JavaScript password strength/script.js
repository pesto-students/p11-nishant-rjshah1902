isStrongPassword();

function isStrongPassword(){

    let password = prompt('Enter your Password');

    if(password.length > 8){

        if(Number.isInteger(password) !== password) {
        
            password = prompt('Password is very easy, please Use Atleast 1 Number Character');
        
        }else if(password.toLowerCase() !== password) {
        
            password = prompt('Password is very easy, please Use Atleast 1 lowercase Character');
        
        } else if(password.toUpperCase() !== password) {
        
            password = prompt('Password is very easy, please Use Atleast 1 uppercase Character');
            
        } else {

            alert('Your Password is Good');

        }
    
    } else if(password.length < 8){
    
        password = prompt('Password is Very Short, Use Atleast 8 Character');
    
    } else {
    
        alert('Your Password is Strong');
    
    }

}