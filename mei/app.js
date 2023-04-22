// Getting UI Elements
const questionContainer = document.querySelector("#question-container");

const message =
  "Sua vaga está GARANTIDA! Acessando apresentação...";

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


function handleFirstAnswer() {
  title.classList.add("hide");
  buttonsContainer.classList.add("hide");
  handleNext()
  
}

function handleNext() {
  questionContainer.classList.add("hide");
  successContainer.classList.remove("hide");
  setTimeout(3000, 
    window.location.href = "https://secure.doppus.com/go/G8889E9Z3J3E53JO") 
  
}
