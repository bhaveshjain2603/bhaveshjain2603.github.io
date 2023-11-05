let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let array = Array.from(buttons);

array.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'Enter') {
        handleButtonClick('=');
    } else if (key === 'Backspace') {
        handleButtonClick('DEL');
    } else if (key === 'Escape') {
        handleButtonClick('AC');
    } else if (/[0-9+\-*/.%]/.test(key)) {
        handleButtonClick(key);
    }
});

function handleButtonClick(value) {
    if (value === '=') {
        string = eval(string);
        input.value = string;
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}
