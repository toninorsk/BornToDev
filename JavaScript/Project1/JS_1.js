let lotto = prompt("Please type your lottery number (3-digit)")
console.log("Your lotto is"  + " " + lotto)

document.getElementById("lotto").innerHTML = lotto

document.getElementById("result").innerHTML = (Math.floor(Math.random() * 1000))