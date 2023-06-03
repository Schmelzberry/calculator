// Business logic
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}





// UI logic

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
window.alert(add(number1, number2));
window.alert(subtract(number1, number2));
window.alert(multiply(number1, number2));
window.alert(divide(number1, number2));

