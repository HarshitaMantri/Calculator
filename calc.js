
let display = document.getElementById('display');
let displayValue = '';

function appendValue(value) {
	displayValue += value;
	display.value = displayValue;
}

function clearDisplay() {
	displayValue = '';
	display.value = displayValue;
}

function calculate() {
	try {
		displayValue = eval(displayValue);
		display.value = displayValue;
	} catch (e) {
		display.value = 'Error';
	}
}

