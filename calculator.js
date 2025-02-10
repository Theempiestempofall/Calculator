let display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to square the number in the display
function square() {
    try {
        let value = parseFloat(display.value);
        display.value = value * value;
    } catch (e) {
        display.value = 'Error';
    }
}

// Function to calculate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

