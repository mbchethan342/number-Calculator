// JavaScript for calculator
var buttons = document.querySelectorAll('button');
var screen = document.querySelector('#screen')
var string = '';
let arr = Array.from(buttons);

arr.forEach((element) => {
    element.addEventListener('click', (x) => {
        if (x.target.innerHTML == "=") {
            // Evaluate the string expression
            string = eval(string);
            screen.value = string;
        } else if (x.target.innerHTML == "C") {
            string = '';
            screen.value = string;
        } else if (x.target.innerHTML == "DEL") {
            string = string.slice(0, (string.length - 1));
            screen.value = string;
        } else {
            string = string + x.target.innerHTML;
            screen.value = string;
        }
    })
})
