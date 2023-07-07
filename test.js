//test para funcion suma
const {sum} =require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total= sum(14, 9);
    expect(total).toBe(23);
});

//test para funcion fromEuroToDollar
test("One euro should be 1.206 dollars", function(){

    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    //envia el parametro valueInEuro a fromEuroToDollar
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

//test para funcion fromDollarToYen 
test("One dollar should be 5.116 yenes", function(){

    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(40)
    const expected = 40 * 127.9; 
    
     expect(fromDollarToYen(40)).toBe(5116);
});

//test para funcion fromYenToPound 
test("One yen should be 6 pounds", function(){

    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(7.5)
    const expected = 7.5 * 0.8; 
    
     expect(fromYenToPound(7.5)).toBe(6);
});