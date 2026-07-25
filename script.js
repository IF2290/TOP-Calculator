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