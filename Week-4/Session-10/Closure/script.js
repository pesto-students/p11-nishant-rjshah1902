const firstValues = [];
const secondValues = [];

function counter(){

    let count = 0;

    function increaseCounter(){
        count++;
        console.log(count);
        firstValues.push(count);
        console.log(firstValues);
    }

    return increaseCounter;
}

 var firstValuesfunction = counter();

 firstValuesfunction();
 firstValuesfunction();
 firstValuesfunction();
 firstValuesfunction();
 firstValuesfunction();
 
function secondCounterFunction(){

    let count2 = 0;

    function increaseCounter2(){
        count2++;
        console.log(count2);
        secondValues.push(count2);
        console.log(secondValues);
    }

    return increaseCounter2;
}

 var secondValuesfnction = secondCounterFunction();

secondValuesfnction();
secondValuesfnction();
secondValuesfnction();