const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const specialChars = ["%", "*", "/", "-", "+", "="]
let output = "";

// define function to calculate based on button clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        // if output had % , replace with /100 before evaluating
        output = eval(output.replace("%", "/100"))
    } else if (btnValue === "AC"){
        output =""
    }else if(btnValue === "DEL"){
        // remove last character
        output = output.toString().slice(0, -1)
    } else {
        // if output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output
}

// Add event listener to buttons, call Calculate() on click
buttons.forEach((button) => {
    // takes dataset value as argument
    button.addEventListener('click' , (e) => {
        calculate(e.target.dataset.value)
    })
})