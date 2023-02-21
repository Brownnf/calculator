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

//Event listener for the Clear All button
//Event listener for operators
