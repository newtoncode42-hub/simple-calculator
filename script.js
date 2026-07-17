function appendNumber(number) {
    let display = document.getElementById("display");

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += number;
}

function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "";
}
function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}