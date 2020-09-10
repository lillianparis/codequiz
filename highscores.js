const scores = JSON.parse(localStorage.getItem('high-scores'));
console.log(scores);

let highScore = document.getElementById("user-highscore");

function nameList() {
scores.forEach(score => {
    console.log(score)
let nameEl = document.createElement("p");
nameEl.setAttribute ("id", "high-scores")
nameEl.innerHTML = score.initials;
highScore.appendChild(nameEl);
}) 
}
nameList();