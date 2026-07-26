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
let num1 = "";
let operator;
let num2 = "";
let ans = "";
function operate(){
    if(operator === "+"){
        return Math.round(add(Number(num1), Number(num2)) * 100)/100;
    }
    else if(operator === "-"){
        return Math.round(subtract(Number(num1), Number(num2)) * 100)/100;
    }
    else if(operator === "*"){
        return Math.round(multiply(Number(num1), Number(num2)) * 100)/100;
    }
    else if(operator === "/" && num2 === "0"){
        return "Can't divide by 0 dummy!";
    }else{
         return Math.round(divide(Number(num1), Number(num2)) * 100)/100;
    };
};
button0.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "0";
         display.textContent = num1;
        }else{
         num2 += "0";
         display.textContent = num2;
        };
});
button1.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "1";
         display.textContent = num1;
        }else{
         num2 += "1";
         display.textContent = num2;
        };
});
button2.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "2";
         display.textContent = num1;
        }else{
         num2 += "2";
         display.textContent = num2;
        };
});
button3.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "3";
         display.textContent = num1;
        }else{
         num2 += "3";
         display.textContent = num2;
        };
});
button4.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "4";
         display.textContent = num1;
        }else{
         num2 += "4";
         display.textContent = num2;
        };
});
button5.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "5";
         display.textContent = num1;
        }else{
         num2 += "5";
         display.textContent = num2;
        };
});
button6.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "6";
         display.textContent = num1;
        }else{
         num2 += "6";
         display.textContent = num2;
        };
});
button7.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "7";
         display.textContent = num1;
        }else{
         num2 += "7";
         display.textContent = num2;
        };
});
button8.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "8";
         display.textContent = num1;
        }else{
         num2 += "8";
         display.textContent = num2;
        };
});
button9.addEventListener("click", () => {
    if(operator === undefined){
         num1 += "9";
         display.textContent = num1;
        }else{
         num2 += "9";
         display.textContent = num2;
        };
});

buttonAdd.addEventListener("click", () => {
         if(num1 !== "" && num2 !== ""){
         ans = operate();
         num1 = ans;
         num2 = "";
         display.textContent = num1;
         operator = "+";
    }else if(num1 !== "" && num2 === ""){
        operator = "+";
    };
}
);
buttonSub.addEventListener("click", () => {
    if(num1 !== "" && num2 !== ""){
         ans = operate();
         num1 = ans;
         num2 = "";
         display.textContent = num1;
         operator = "-";
    }else if(num1 !== "" && num2 === ""){
        operator = "-";
    };
});
buttonMult.addEventListener("click", () => {
    if(num1 !== "" && num2 !== ""){
         ans = operate();
         num1 = ans;
         num2 = "";
         display.textContent = num1;
         operator = "*";
    }else if(num1 !== "" && num2 === ""){
        operator = "*";
    };
});
buttonDiv.addEventListener("click", () => {
     if(num1 !== "" && num2 !== "" && num1 !== NaN){
         ans = operate();
            num1 = ans;
            num2 = "";
            display.textContent = num1;
            operator = "/";
    }else if(num1 !== "" && num2 !== "" && num1 === NaN){
        num1 = "";
        num2 = "";
        operator = undefined;
        display.textContent = "";
    }else if(num1 !== "" && num2 === ""){
        operator = "/";
    };
});

buttonEquals.addEventListener("click", () => {
    if(num1 !== "" && num2 !== ""){
        ans = operate();
        num1 = "";
        num2 = "";
        operator = undefined;
        display.textContent = ans;
    };
});
buttonClear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = undefined;
    display.textContent = num1;
});
buttonBackspace.addEventListener("click", () => {
    if(operator === undefined || num2 === ""){
        num1 = num1.slice(0, -1);
        display.textContent = num1;
    }else{
        num2 = num2.slice(0, -1);
        display.textContent = num2;
    };
});