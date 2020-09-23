let round = prompt("How many time(s) you want to play?")
for (var i = 0; i < round; i++) {
    var answer = prompt("Head or Tail?")
    var random_answer = ""
    if (Math.floor(Math.random() * 10) <= 4) {
        random_answer = "Head" 
    } else {
        random_answer = "Tail"
    }


if (answer == random_answer) {
    // document.getElementById("correct").innerHTML = "Correct"
    alert("Correct")
    console.log(random_answer + " : " + answer + " correct")
    
} else {
    // document.getElementById("incorrect").innerHTML = "Incorrect"
    alert("Incorrect")
    console.log(random_answer + " : " + answer + " incorrect")
}

}