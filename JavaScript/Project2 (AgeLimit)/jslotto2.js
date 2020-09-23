let result = prompt("Please type your lottery number (3-digit)")
console.log("Your lotto is"  + " " + result)

document.getElementById("result").innerHTML = result

/// document.getElementById("result").innerHTML = result

let random_number = Math.floor(Math.random() * 1000)

document.getElementById("random").innerHTML = random_number

if (result == random_number) {
    document.getElementById("congrats").innerHTML = "Congratulations!"
} else {
    document.getElementById("sorry").innerHTML = "Sorry!"
}