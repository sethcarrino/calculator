var answer = document.querySelector('#answer');
var decimal = false;
var display = '';

function clearAnswer() {
    answer.value = '';
    decimal = false;
    display = '';
}

function updateDisplay(keyPressed) {
    if ((!isNaN(keyPressed) || (keyPressed == '.' && decimal == false)) ||
        (display.length > 0 && !isNaN(display.substr(display.length-1)) )) {

        if (keyPressed != '.' || ((keyPressed == '.') && !decimal)) {
            display = display + keyPressed;
            answer.value = display;
        }
    }
}

function displayTotal() {
    if (display != ''){
        var total = eval(display);
        display = total.toString();
        answer.value = total;
   }
}


/*The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015, or you can use typeof to determine if the value is Not-A-Number.

!= means not equal to*/
