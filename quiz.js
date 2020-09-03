const question = document.querySelector("#question");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");

// Countdown timer, starts at 60 seconds
let secondsLeft = 60;
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

setTime();

// Questions and answers, need to fix the capital letters (camel case is prefered)
let questionAnswer = [
  {
    Question: "Choose the client-side Javascript object",
    Answers: ["Database", "Cursor", "HClient", "FileUpLoad"],
    CorrectAnswer: "FileUpLoad",
  },
  {
    Question: "What are varibles used for in JavaScript programs?",
    Answers: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of the above",
    ],
    CorrectAnswer: "Storing numbers, dates, or other values",
  },

  {
    Question:
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
    Question: "Inside which HTML element do we put the JavaScript?",
    Answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    CorrectAnswer: "<javascript>",
  },
  {
    Question: "What does the <noscript> tag do?",
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
  question.textContent = currentQuestion.Question;
  button1.textContent = currentQuestion.Answers[0];
  button2.textContent = currentQuestion.Answers[1];
  button3.textContent = currentQuestion.Answers[2];
  button4.textContent = currentQuestion.Answers[3];
}

// "this" was added to ask whic button called the function.

for(let i = 1; i < 5; i++) {
    document.querySelector("#button" + i).addEventListener("click", function (event) {
        event.preventDefault();
        if (this.textContent === currentQuestion.CorrectAnswer) {
            alert("correct");
        } else {
            alert("wrong");
            secondsLeft = secondsLeft - 10;
        }
        index++;
        nextQuestion();
    });
    console.log(i)
}

// Checking for correct answer from each button


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
