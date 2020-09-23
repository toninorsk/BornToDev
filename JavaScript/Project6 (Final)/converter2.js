function toCelsius (fahrenheit) {
    let value = (fahrenheit - 32) * 5 / 9
    return fahrenheit + " fahrenheit = " + value.toFixed(2) + " celsius"
}

function display (elementID, value) {
    document.getElementById(elementID).innerHTML = value
}

function toFahrenheit (celsius) {
    let value = (celsius * 9) / 5 + 32
    return celsius + " celsius = " + value.toFixed(2) + " fahrenheit"
}

function toCelsiusProgram(value) {
    alert(toCelsius(value))
} 

function toFahrenheitProgram(value) {
    alert(toFahrenheit(value))
}