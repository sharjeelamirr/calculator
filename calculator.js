// document.addEventListener('DOMContentLoaded', function() {
//     const display = document.getElementById('display');
//     const buttons = document.querySelectorAll('.btn');
    
//     let currentInput = '';
//     let previousInput = '';
//     let operator = '';
    
//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             const value = this.getAttribute('data-value');
            
//             if (value === 'C') {
//                 // Clear everything
//                 currentInput = '';
//                 previousInput = '';
//                 operator = '';
//                 display.textContent = '0';
//             } else if (value === '=') {
//                 // Perform calculation
//                 if (currentInput && previousInput && operator) {
//                     const result = calculate(previousInput, currentInput, operator);
//                     display.textContent = result;
//                     previousInput = result;
//                     currentInput = '';
//                     operator = '';
//                 }
//             } else if (['+', '-', '*', '/'].includes(value)) {
//                 // Handle operators
//                 if (currentInput) {
//                     if (previousInput && operator) {
//                         previousInput = calculate(previousInput, currentInput, operator);
//                     } else {
//                         previousInput = currentInput;
//                     }
//                     currentInput = '';
//                     operator = value;
//                 }
//             } else {
//                 // Handle numeric and decimal inputs
//                 currentInput += value;
//                 display.textContent = currentInput;
//             }
//         });
//     });

//     function calculate(a, b, op) {
//         const num1 = parseFloat(a);
//         const num2 = parseFloat(b);
//         switch(op) {
//             case '+':
//                 return num1 + num2;
//             case '-':
//                 return num1 - num2;
//             case '*':
//                 return num1 * num2;
//             case '/':
//                 return num2 === 0 ? 'Error' : num1 / num2;
//             default:
//                 return '';
//         }
//     }
// });

var displayValue = '';
var resultValue = '';
function displayChange(value){
	if(value === '0' && value !== '.'){
		displayValue = value;
	}
	else{
		displayValue += value;
		//(displayValue.toString() == 0) ? displayValue = value.toString() : displayValue += value.toString()
	}

	document.getElementById('display').innerText = displayValue;
}

function displayResult(){
	console.log(displayValue);
	if(displayValue.indexOf('+') != -1){
		var secondNum = displayValue.slice(displayValue.indexOf('+')+1);
		var firstNum = displayValue.slice(0, displayValue.indexOf('+'));
		 resultValue = parseFloat(firstNum) + parseFloat(secondNum);
		document.getElementById('display').innerText = resultValue;

	}
	else if(displayValue.indexOf('-') != -1){
		var secondNum = displayValue.slice(displayValue.indexOf('-')+1);
		var firstNum = displayValue.slice(0, displayValue.indexOf('-'));
		 resultValue = parseFloat(firstNum) - parseFloat(secondNum);
		document.getElementById('display').innerText = resultValue;
	}
	else if(displayValue.indexOf('*') != -1){
		var secondNum = displayValue.slice(displayValue.indexOf('*')+1);
		var firstNum = displayValue.slice(0, displayValue.indexOf('*'));
		 resultValue = parseFloat(firstNum) * parseFloat(secondNum);
		document.getElementById('display').innerText = resultValue;

		console.log(displayValue.indexOf('*') )
	}
	else if(displayValue.indexOf('/') != -1){
		var secondNum = displayValue.slice(displayValue.indexOf('/')+1);
		var firstNum = displayValue.slice(0, displayValue.indexOf('/'));
		 resultValue = parseFloat(firstNum) / parseFloat(secondNum);
		document.getElementById('display').innerText = resultValue;

		console.log(displayValue.indexOf('/') )
	}
	else{
		alert("Enter an operator to generate a result!");
	}
}
