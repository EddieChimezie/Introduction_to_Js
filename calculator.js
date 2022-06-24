/* Basic arithmetic calculator without a frontend to perform basic operations  */


function addition(num1, num2){
    return num1+num2;
}

function subtraction(num1, num2){
    return num1-num2;
}

function division(num1, num2){
    return num1/num2;
}

function multiplication(num1, num2){
    return num1*num2;
}

let num1 = Number(prompt("Enter FIrst Number"));
let num2 = Number(prompt("Enter Second Number"));
let operation = Number(prompt('What Operation would you want to perform \n 1. Addition \n 2. Subtraction \n 3. Division \n 4. Multiplication'));

if (operation === 1){
    console.log(addition(num1,num2));
}
else if (operation === 2){
    console.log(subtraction(num1,num2));
}
else if (operation === 3){
    console.log(division(num1,num2));
}
else if (operation === 4){
    console.log(multiplication(num1,num2));
}
else{
    console.log('Incorrect input');
}
