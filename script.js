
function operate(num1, operator, num2){
    switch(operator){
        case '+':
           return (parseFloat(num1) + parseFloat(num2));
        case '-':
            return (parseFloat(num1) - parseFloat(num2));
        case '*':
            return (parseFloat(num1) * parseFloat(num2));
        case '/':
            return (parseFloat(num1) / parseFloat(num2));
        default:
            return "ERROR";

    }
}

//Calc object
let calc = {
    num1: "",
    operator: "",
    num2: "",
}


//Event listener for the number buttons
let numbers = Array.from(document.getElementsByClassName('number'));
let display = document.getElementById('display');

numbers.forEach(element => {
    element.addEventListener('click',function(){
            //stop user from having multiple 0's and clear the display if an operation has occured and the user attempts to hit a number without hitting another operator.
            if(calc.operator == "" && display.textContent == "" || display.textContent == "0"){
                display.textContent = element.textContent;
            }
            else{
                display.textContent += element.textContent;
            }
    })
});


//Event listener for keydown on numbers
    document.addEventListener('keydown',function(e){
        if ((e.key >= 0 && e.key <= 9) || (e.key >= 96 && e.key <= 105)) { 
            if(calc.operator == "" && display.textContent == "" || display.textContent == "0"){
                console.log(display.textContent == 0)
                console.log(display.textContent);
                console.log("this is called")
                display.textContent = e.key;
            }
            else{
                display.textContent += e.key;
            }
          }
    });


//Event listener for the clear button
let clearB = document.getElementById('clear');
clearB.addEventListener('click', function(){
    display.textContent = "";
});

//Event listener for the Delete button
let del = document.getElementById('delete');
del.addEventListener('click', function(){
    //Make sure string isn't empty
    if(display.textContent.length > 0){
    display.textContent = display.textContent.substring(0,display.textContent.length-1);
    }
});

//Event listener for Positive/Negative switcher
let switcher = document.getElementById('switcher');
switcher.addEventListener('click', function(){
    //Check to make sure display has only numbers and isn't empty
    if(isNaN(display.textContent) == false && display.textContent !== ""){
        if(Array.from(display.textContent)[0] == '-'){
            display.textContent = display.textContent.substring(1)
        }
        else if(Array.from(display.textContent)[0] !== '-'){
            display.textContent = `-${display.textContent}`;
        }
    }
});

//Event listener for decimal button
let decimalButton = document.getElementById('decimal');
document.addEventListener('keydown', function(key){
    if(key.key == "."){
        decimal();
    }
});
decimalButton.addEventListener('click', decimal);
function decimal(){
    if(display.textContent.includes('.') == false || `${display.textContent.replace(`${calc.num1}${calc.operator}`, "")}`.includes(".") == false){
        display.textContent = `${display.textContent}.`;
    }
};


//Event listener for operators
let operators = Array.from(document.getElementsByClassName('operator'));
operators.forEach(element => {
    element.addEventListener('click',function(){
        if(calc.num1 == ""){
            calc.num1 = display.textContent;
            calc.operator = element.textContent;
            display.textContent = `${display.textContent}${element.textContent}`;
        }
        else if(isNaN(calc.num1) == false && calc.num2 == ""){
            calc.num2 = display.textContent.replace(`${calc.num1}${calc.operator}`, "");
            display.textContent = operate(calc.num1, calc.operator, calc.num2);
            clearCalc();

        }
    });
});


//Event listener for clear all button
let clearAll = document.getElementById('ce');
clearAll.addEventListener('click', function(){
    display.textContent = "";
    clearCalc();

});


function clearCalc(){
    calc.num1 = "";
    calc.operator = "";
    calc.num2 = "";
}
