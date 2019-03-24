// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {
        'H' : 0,
        'Q' : 0,
        'D' : 0,
        'N' : 0,
        'P' : 0
    };


    if (currency>10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    if (currency<=0)
    return {};
    
    const halfDollar = Math.floor(currency/50);    
    currency-=halfDollar*50;
    const quater = Math.floor(currency/25);   
    currency-=quater*25;
    const dime = Math.floor(currency/10);    
    currency-=dime*10;
    const nickel = Math.floor(currency/5);
    currency-=nickel*5;
    const penny = Math.floor(currency/1);


    if (halfDollar>0){
        result["H"] = halfDollar;
    }
    else delete result["H"];
      
    if (quater>0){
        result["Q"] = quater;
    }
    else delete result["Q"];

    if (dime>0){
        result["D"] = dime;
    }
    else delete result["D"];

    if (nickel>0){
        result["N"] = nickel;
    }
    else delete result["N"];

    if (penny>0){
        result["P"] = penny;
    }
    else delete result["P"];

    return result;
}
