function add(num1, num2){
    return (num1 + num2);
}

function subtract(num1, num2){
    return (num2 - num1);
}

function multiply(num1, num2){
    return (num1 * num2);
}

function divide(num1, num2){
    return (num2 / num1);
}

function operate(){

}


//Event listener for the number buttons
let numbers = Array.from(document.getElementsByClassName('number'));
let display = document.getElementById('display');

numbers.forEach(element => {
    element.addEventListener('click',function(){
            //stop user from having multiple 0's
            if(display.textContent == 0){
                display.textContent = element.textContent;
            }
            else{
                display.textContent += element.textContent;
            }
    })
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
let decimal = document.getElementById('decimal');
decimal.addEventListener('click', function(){
    if(display.textContent.includes('.') == false){
        display.textContent = `${display.textContent}.`;
    }
});

//Event listener for the Clear All button

//Event listener for operators
let operators = Array.from(document.getElementsByClassName('operators'));
operators.addEventListener('click', function(){
    switch(operators.textContent){

    }
});