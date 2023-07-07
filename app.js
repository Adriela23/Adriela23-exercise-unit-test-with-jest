//conversion euro a dolar
const fromEuroToDollar = function(valueInEuro){
    // conversion
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

//conversion dolar a yen
const fromDollarToYen = function(valueInDollar){
    // conversion
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

//conversion yen a pound
const fromYenToPound = function(valueInYen){
    // conversion
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}

//suma
const sum = (a, b) => {
    return a + b
}

console.log(sum(7,3));



//exporta los tests
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};