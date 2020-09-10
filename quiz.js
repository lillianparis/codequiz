// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");
const initials = document.querySelector("#initials");
const submit = document.querySelector("#submit-button");
const questionAnswers = document.querySelector("#question-answers");
let highScores = [];
let timerInterval;

// Countdown timer, starts at 60 seconds, after prompted the "ok" to start quiz...
let secondsLeft = 60;
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
setTimeout(function () { alert("This is a timed quiz on Javascript, your score is based on the amount of time it takes to complete. The timer starts at 1 minute and counts down. Each question answered wrong will result in a 10 second deduction. Press 'OK' to begin timed quiz."); }, secondsLeft);

setTime();

// Questions and answers, need to fix the capital letters (camel case is prefered)
let questionAnswer = [
  {
    question: "Choose the client-side Javascript object",
    Answers: ["Database", "Cursor", "HClient", "FileUpLoad"],
    CorrectAnswer: "FileUpLoad",
  },
  {
    question: "What are varibles used for in JavaScript programs?",
    Answers: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of the above",
    ],
    CorrectAnswer: "Storing numbers, dates, or other values",
  },

  {
    question:
      "Which of the following are capabilities of functions in JavaScript?",
    Answers: [
      "Return a value",
      "Accept parameters and return a value",
      "Accept parameters",
      "None of the above",
    ],
    CorrectAnswer: "Accept parameters",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    Answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    CorrectAnswer: "<javascript>",
  },
  {
    question: "What does the <noscript> tag do?",
    Answers: [
      "Enclose text to be displayed by non-JavaScript browsers",
      "Prevents scripts on the page from executing",
      "Describes certain low-budget movies",
      "None of the above",
    ],
    CorrectAnswer: "Enclose text to be displayed by non-JavaScript browsers",
  },
];

// We start at 0
let index = 0;
let currentQuestion = questionAnswer[0];

nextQuestion();

// Wrap code in a function
function nextQuestion() {
  currentQuestion = questionAnswer[index];
  question.textContent = currentQuestion.question;
  button1.textContent = currentQuestion.Answers[0];
  button2.textContent = currentQuestion.Answers[1];
  button3.textContent = currentQuestion.Answers[2];
  button4.textContent = currentQuestion.Answers[3];
}

// "this" was added to ask which button called the function.

for (let i = 1; i < 5; i++) {
  document.querySelector("#button" + i).addEventListener("click", function (event) {
    event.preventDefault();
    if (this.textContent === currentQuestion.CorrectAnswer) {
      alert("correct!");
    } else {
      alert("wrong!");
      secondsLeft = secondsLeft - 10;
    }
    index++;
    if (index === questionAnswer.length) {
      quizEnd();
    } else {
      nextQuestion();
    }
  });
  console.log(i)
}

// Function to end quiz 
function quizEnd(){
  clearInterval(timerInterval);
 
  let finalScore = document.querySelector("#final-score");

  finalScore.textContent = " " + secondsLeft;
  console.log(questionAnswers)
  questionAnswers.innerHTML = '<h2> You have finished the test enter your name to save the score </h2>'
  
  // console.log(finalScore)
}



// function to save initials and score to local storage
function initialSave(event) { 
 event.preventDefault();
  const initials = document.querySelector("#initials").value; 
  
  // let initializer = initials.nodeValue.trim();
  if (initials !== "") {
    // let highScores = JSON.parse(window.localStorage.getItem("high-scores") || "[]");
    // console.log(initialSave)

    let newScore = {
      score: secondsLeft,
      initials: initials
    }
    highScores.push(newScore);
    console.log(highScores)
    window.localStorage.setItem("high-scores", JSON.stringify(highScores));

    // window.location.href = "index.html";
  }
}


submit.addEventListener("click", initialSave)



// This is the code  srater with, I commented it out because I used a more efficient way that saves lines.

// button1.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (button1.textContent === currentQuestion.CorrectAnswer) {
//     alert("correct");
//   } else {
//     alert("wrong");
//     secondsLeft = secondsLeft - 10;
//   }
//   index++;
//   nextQuestion();
// });

// button2.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (button2.textContent === currentQuestion.CorrectAnswer) {
//     alert("correct");
//   } else {
//     alert("wrong");
//     secondsLeft = secondsLeft - 10;
//   }
//   index++;
//   nextQuestion();
// });

// button3.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (button3.textContent === currentQuestion.CorrectAnswer) {
//     alert("correct");
//   } else {
//     alert("wrong");
//     secondsLeft = secondsLeft - 10;
//   }
//   index++;
//   nextQuestion();
// });

// button4.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (button4.textContent === currentQuestion.CorrectAnswer) {
//     alert("correct");
//   } else {
//     alert("wrong");
//     secondsLeft = secondsLeft - 10;
//   }
//   index++;
//   nextQuestion();
// });
