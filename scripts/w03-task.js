/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Add a "click" event listener
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2) {
    return subtract1 - subtract2;
};

function subtractNumbers() {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

// Add a "click" event listener
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiplyArrowFunction = (factor1, factor2) => factor1 * factor2;

function multiplyNumbers() {
    let multiplyFactor1 = Number(document.querySelector('#factor1').value);
    let multiplyFactor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiplyArrowFunction(multiplyFactor1, multiplyFactor2);
}

// Add a "click" event listener
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor){
    return dividend / divisor;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Add a "click" event listener
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
const getTotal = function(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById("member").checked) {    
        subtotal *= .85
    }

// Output the total to the the total span in the format shown with two decimals using a template string
document.querySelector("#total").textContent = `$${subtotal.toFixed(2)}`;}

// Add an event listener for the Get Total Due
document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter((num) => num % 2 ===1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter((num) => num % 2 ===0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);