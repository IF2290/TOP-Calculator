const display = document.querySelector(".display");

const button1 = document.querySelector(".number1");
const button2 = document.querySelector(".number2");
const button3 = document.querySelector(".number3");
const button4 = document.querySelector(".number4");
const button5 = document.querySelector(".number5");
const button6 = document.querySelector(".number6");
const button7 = document.querySelector(".number7");
const button8 = document.querySelector(".number8");
const button9 = document.querySelector(".number9");
const button0 = document.querySelector(".number0");

const buttonAdd = document.querySelector(".add-op");
const buttonSub = document.querySelector(".subtract-op");
const buttonMult = document.querySelector(".multiply-op");
const buttonDiv = document.querySelector(".divide-op");
const buttonClear = document.querySelector(".clear");
const buttonBackspace = document.querySelector(".backspace");
const buttonEquals = document.querySelector(".equals");

function add(num1, num2){
    return num1 + num2;
};
function subtract(num1, num2){
    return num1 - num2;
};
function multiply(num1, num2){
    return num1 * num2;
};
function divide(num1, num2){
    return num1 / num2;
};
let num1;
let operator;
let num2;
function operate(){
    if(operator === "+"){
        return add(Number(num1), Number(num2));
    }
    else if(operator === "-"){
        return subtract(Number(num1), Number(num2));
    }
    else if(operator === "*"){
        return multiply(Number(num1), Number(num2));
    }
    else if(operator === "/"){
        return divide(Number(num1), Number(num2));
    }else{
        return "ERROR";
    };
};