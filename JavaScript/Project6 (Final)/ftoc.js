let convert = prompt("F to C or C to F") 
if (convert == "F to C") {

function toCel() {
    let fahrenheit = prompt("Fahrenheit to Celsius: ")
    let value = (fahrenheit - 32) * 5 / 9
    document.getElementById("answer_section").innerHTML = fahrenheit + " fahrenheit" + " = " + value.toFixed(5) + " celsius"
} toCel() 

} else if (convert == "C to F") {

function toFah() {
    let celsius = prompt("Celsius to Fahrenheit: ")
    let value = (celsius * 9 / 5) + 32
    document.getElementById("answer_section2").innerHTML = celsius + " celsius" + " = " + value.toFixed(5) + " fahrenheit"
} toFah()

} else {
    prompt("F to C or C to F") 
}
