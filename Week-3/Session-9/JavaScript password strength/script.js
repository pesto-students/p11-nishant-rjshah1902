
isStrongPassword();



function isStrongPassword(){

    var password = prompt('Enter your Password');

    if(password.length < 8){
    
        alert('Password is Very Short, Use Atleast 8 Character');
    
    } else if(password.length > 8){
    
        if(!password.match('/[a-z]/')) {
        
            alert('Please Enter Small Letter');
        
        } else {

            alert('Your Password is Good');

        }
    
    } else {
    
        alert('Your Password is Strong');
    
    }

}