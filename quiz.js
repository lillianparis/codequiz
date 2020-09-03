const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timEl = document.querySelector(".time");

// Countdown timer
let secondsLeft = 60;
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timerInterval.textContent = "Time Left: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

setTime();

let questionAnswer = [
    {
        Question: "What does HTML stand for?",
        Answers: ["Hard to Master Language",
            "Hat to Mister Lancaster",
            "Have to Many Laughs",
            "Hypertext Markup Language"
    ],
        CorrectAnswer: "Hypertext Markup Language"
    }, 

]







let index = 0;
let currentQuestion = questionAnswer[0]

nextQuestion();

// Wrap code in a function
function nextQuestion() {
    currentQuestion = questionAnswer[index]
    question.textContent = currentQuestion.Question;
    button1.textContent = currentQuestion.Answers[0];
    button2.textContent = currentQuestion.Answers[1];
    button3.textContent = currentQuestion.Answers[2];
    button4.textContent = currentQuestion.Answers[3];

}

    // Checking for correct answer

    button1.addEventListener("click", function(event) {
        event.preventDefault();
        if (button1.textContent === currentQuestion.CorrectAnswer) {

        alert("correct");
    } 
        else {
            alert ("wrong")
        }
        index++;
        nextQuestion();
    });

    button2.addEventListener("click", function(event) {
        event.preventDefault();
        if (button1.textContent === currentQuestion.CorrectAnswer) {

        alert("correct");
    } 
        else {
            alert ("wrong")
        }
        index++;
        nextQuestion();
    });

    button3.addEventListener("click", function(event) {
        event.preventDefault();
        if (button1.textContent === currentQuestion.CorrectAnswer) {

        alert("correct");
    } 
        else {
            alert ("wrong")
        }
        index++;
        nextQuestion();
    });

    button4.addEventListener("click", function(event) {
        event.preventDefault();
        if (button1.textContent === currentQuestion.CorrectAnswer) {

        alert("correct");
    } 
        else {
            alert ("wrong")
        }
        index++;
        nextQuestion();
    });