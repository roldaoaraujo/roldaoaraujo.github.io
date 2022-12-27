// Getting UI Elements

const buttons = document.querySelectorAll(".button");
const title = document.getElementById("title");
const question = document.getElementById("question");
const buttonsArray = Array.from(buttons);
const loader = document.getElementById("loader");

let currentQuestionIndex = 0;
let quizQuestions = [];
let numberOfQuestions = quizQuestions.length - 1;

let URL = "https://roldao-araujo.outsystemscloud.com/Quiz/rest/get/questions";

fetch(URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: "fb",
})
  .then((response) => response.json())
  .then((data) => {
    quizQuestions = data;
    numberOfQuestions = quizQuestions.length - 1;
    buildQuestion();
    loader.classList.add("hide");
  });

function buildQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  title.innerText = currentQuestion.title;
  question.innerText = currentQuestion.question;
}

function handleAnswer() {
  if (currentQuestionIndex >= numberOfQuestions) {
    window.location.href = "https://secure.doppus.com/go/GOHH8E9Z3J3EB00O";
    return;
  }
  currentQuestionIndex++;
  buildQuestion();
}

buttonsArray.forEach(function (element) {
  element.addEventListener("click", handleAnswer);
});
