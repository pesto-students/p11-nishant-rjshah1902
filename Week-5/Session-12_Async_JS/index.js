async function getExchangeRate(currencyCode) {

    try{

        // const response = await fetch(`https://api.exchangerate.host/latest?base=${currencyCode}`);
        
        const response = await fetch(`https://api.exchangerate.host/latest`);

        if(response.status == 200){

            const data = response.json();

            return data;
        }else{
            
            console.error(`Wrong Method Passed...!`);
        
        }
    
    } catch(error) {

        console.error(`${error}, Currancy Code Not Found`);
    
    }
}   

getExchangeRate('USD')
    .then((rate) => {
        console.log(rate.rates['AFN']);
    })
    .catch((error) => {
        console.error(error);
    });;