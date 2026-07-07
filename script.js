let textbox = document.getElementById("textbox");
let tofahrenheit = document.getElementById("tofahrenheit");
let tocelcius = document.getElementById("tocelcius");
let result = document.getElementById("result");
let temp;

function convert(){
    if (tofahrenheit.checked) {
        temp = Number(textbox.value);
        temp = (temp*(9/5))+32;
        result.textContent = temp.toFixed(4)+"°F";
    }
    else if (tocelcius.checked) {
        temp = Number(textbox.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(4)+"°C";
    }
    else {
        result.textContent = "select a proper Unit";
    }
}