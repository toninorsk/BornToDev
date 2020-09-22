let score = prompt("Please type your score (0-100)")
document.getElementById("score").innerHTML = score

if (score >= 80) {
    document.getElementById("A").innerHTML = "A"
} else if (score >= 70) {
    document.getElementById("B").innerHTML = "B"
} else if (score >= 60) {
    document.getElementById("C").innerHTML = "C"
} else if (score >= 50) {
    document.getElementById("D").innerHTML = "D"
} else {
    document.getElementById("F").innerHTML = "F"
};