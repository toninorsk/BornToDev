function sayHello(userName, userLastName) {
    return "Hello " + userName + " " + userLastName
}

function getAge(age) {
    return "You're " + age + " years old"
}

let userInput = prompt("Input your name :")
alert(sayHello(userInput, "Denduangchai"))

let userAge = prompt("Input your age:")
alert(getAge(userAge))