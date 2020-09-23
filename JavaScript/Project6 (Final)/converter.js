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


alert(toCelsius(10))
display("toCelsius", toCelsius(10))

alert(toFahrenheit(100))
display("toFahrenheit", toFahrenheit(100))
