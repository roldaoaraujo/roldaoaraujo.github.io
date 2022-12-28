// Getting UI Elements
const questionContainer = document.querySelector(".question-container");

const message =
  "O segredo está em um método simples e automático, clique abaixo para saber mais.";

const title = document.getElementById("title");
const question = document.getElementById("question");

const successContainer = document.querySelector(".success-container");

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const nextBtn = document.getElementById("next-btn");
const buttonsContainer = document.querySelector(".buttons-container");
const nextContainer = document.querySelector(".next-container");

yesBtn.addEventListener("click", handleFirstAnswer);

noBtn.addEventListener("click", handleFirstAnswer);

nextBtn.addEventListener("click", handleNext);

function handleFirstAnswer() {
  title.classList.add("hide");
  question.textContent = message;
  buttonsContainer.classList.add("hide");
  nextContainer.classList.remove("hide");
}

function handleNext() {
  questionContainer.classList.add("hide");
  nextContainer.classList.add("hide");
  successContainer.classList.remove("hide");

  window.location.href = "https://secure.doppus.com/go/GOHH8E9Z3J3EB0ZO";
}
